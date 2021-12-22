"use strict";(self.webpackChunkjakenelson_cloud=self.webpackChunkjakenelson_cloud||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"github-enterprise-as-code","metadata":{"permalink":"/blog/github-enterprise-as-code","editUrl":"https://github.com/Jake-Mok-Nelson/website/tree/main/jakenelson.cloud/blog/02-12-2021-Github-Enterprise-As-Code/02-12-2021-Github-Enterprise-As-Code.mdx","source":"@site/blog/02-12-2021-Github-Enterprise-As-Code/02-12-2021-Github-Enterprise-As-Code.mdx","title":"Github As Code","description":"Status: Work in Progress","date":"2021-12-22T02:36:31.885Z","formattedDate":"December 22, 2021","tags":[{"label":"github","permalink":"/blog/tags/github"},{"label":"ghe","permalink":"/blog/tags/ghe"},{"label":"terraform","permalink":"/blog/tags/terraform"}],"readingTime":2.705,"truncated":false,"authors":[{"name":"Jake Nelson","title":"Lead Cloud Engineer","url":"https://github.com/Jake-Mok-Nelson","key":"jake"}]},"content":":::caution\\n\\n**Status:** Work in Progress\\n\\n:::\\n\\n\\nHaving Github managed as code for an entire organisation has several benefits:\\n\\n* You can define a set of guidelines for creating new resources based on Github best practices. (see resources section)\\n* Configuration can be as generic or specific as you need for the case.\\n* Implementation is declaritive and transparent.\\n* Largely self-service environment reduces TOIL.\\n\\nThe target of this implementation is large enterprise implementations of Github Enterprise.\\n\\n## Module/Abstraction Use Cases\\n\\n* Organisation group/user management (membership)\\n  * Handle sync groups or static groups\\n  * Configure admins\\n* Repository configuration\\n\\n## Creating Organisations\\n\\nCreating organisations is not available via the Terraform provider.\\n\\nThis has to be done [via the API](https://docs.github.com/en/enterprise-server@3.0/rest/reference/enterprise-admin#create-an-organization).\\n\\n```bash\\ncurl \\\\\\n  -X POST \\\\\\n  -H \\"Accept: application/vnd.github.v3+json\\" \\\\\\n  http(s)://{hostname}/api/v3/admin/organizations \\\\\\n  -d \'{\\"login\\":\\"login\\",\\"admin\\":\\"admin\\"}\'\\n```\\n\\nSuccess Response: `Status: 201 Created`\\n\\n## User / Group Management\\n\\nUsers and group can be [synced from azure-ad](https://jakenelson.cloud/docs/tech/github/syncing-github-groups-from-azuread/) or configured statically.\\n\\n### Creating org admins\\n\\n```\\nresource \\"github_membership\\" \\"membership_for_some_user\\" {\\n  username = \\"SomeUser\\"\\n  role     = \\"admin\\"\\n}\\n```\\n\\n### Blocking Users\\n\\nWhilst uncommon it might be required to occasionally block members.\\n\\n```\\nresource \\"github_organization_block\\" \\"example\\" {\\n  username = \\"paultyng\\"\\n}\\n```\\n\\n## Repository Management\\n\\nA repository module should be used to ensure that [repository best practices](https://jakenelson.cloud/tech/github/github-repo-best-practices.mdx) are being adhered to.\\n\\nUse repository templates to consume best practice repos, potentially including things like doc templates and Codeowners.\\n\\nThe option to destroy repositories should be very carefully restricted, probably disallowed entirely via (make destroyed archived).\\n\\nTemplate repositories can be managed via code as well.\\n\\n## Enterprise Code Directory Structures\\n\\n### Separate Orgs\\n\\n#### Pros\\n* Ideal for improving separation between organisations.\\n* Reduces risk of impacting another organisation.\\n* All resources defined in Terraform files can be easier to read.\\n\\n#### Cons\\n* Is not DRY - lots of code duplication for each organisation.\\n* Can be difficult to maintain.\\n* Ambiguous as to who\'s responsibility it is to maintain the directory (i.e. Github team that own this repo or the organisation owners)\\n\\n#### Structure\\n\\n```\\n.\\n\u251c\u2500\u2500 CODEOWNERS\\n\u251c\u2500\u2500 modules\\n\u2502   \u2514\u2500\u2500 membership\\n\u2502       \u251c\u2500\u2500 examples\\n\u2502       \u2502   \u251c\u2500\u2500 common-org\\n\u2502       \u2502   \u2502   \u251c\u2500\u2500 main.tf\\n\u2502       \u2502   \u2502   \u2514\u2500\u2500 versions.tf\\n\u2502       \u2502   \u2514\u2500\u2500 edge-case-org\\n\u2502       \u2502       \u251c\u2500\u2500 main.tf\\n\u2502       \u2502       \u2514\u2500\u2500 versions.tf\\n\u2502       \u251c\u2500\u2500 main.tf\\n\u2502       \u251c\u2500\u2500 test\\n\u2502       \u2502   \u251c\u2500\u2500 terraform_common_org_test.go\\n\u2502       \u2502   \u2514\u2500\u2500 terraform_edge_case_org_test.go\\n\u2502       \u251c\u2500\u2500 variable.tf\\n\u2502       \u2514\u2500\u2500 variables.tf\\n\u251c\u2500\u2500 orgs\\n\u2502   \u251c\u2500\u2500 github-management\\n\u2502   \u2502   \u251c\u2500\u2500 members.tf\\n\u2502   \u2502   \u251c\u2500\u2500 repositories.tf\\n\u2502   \u2502   \u251c\u2500\u2500 variables.tf\\n\u2502   \u2502   \u2514\u2500\u2500 versions.tf\\n\u2502   \u251c\u2500\u2500 org-2\\n\u2502   \u2502   \u251c\u2500\u2500 members.tf\\n\u2502   \u2502   \u251c\u2500\u2500 repositories.tf\\n\u2502   \u2502   \u251c\u2500\u2500 variables.tf\\n\u2502   \u2502   \u2514\u2500\u2500 versions.tf\\n\u2502   \u2514\u2500\u2500 orgs\\n\u2514\u2500\u2500 pipelines\\n    \u251c\u2500\u2500 support-import-resources.yaml\\n    \u251c\u2500\u2500 cd-new-org.yaml\\n    \u251c\u2500\u2500 cd-org-management.yaml\\n    \u251c\u2500\u2500 ci-new-org.yaml\\n    \u2514\u2500\u2500 ci-org-management.yaml\\n```\\n\\n## CI / CD\\n\\n### Pipeline Practices\\n\\nShould use a Terraform version greater than 0.13 as it supports Terraform Variable validation out of the box.\\n\\n### Pipeline Authentication\\nUse a token instead of a Github app to authenticate.\\n\\nThis is because Github Apps have limitations around access-management & team membership that requires manual intervention by a organisation admin.\\n\\n```\\nprovider \\"github\\" {\\n  token = var.token # or `GITHUB_TOKEN`\\n}\\n```\\n\\nor\\n\\n```\\nprovider \\"github\\" {\\n  app_auth {} # When using `GITHUB_APP_XXX` environment variables\\n}\\n```\\n\\n## Resources\\n\\n* [Github Terraform Provider](https://registry.terraform.io/providers/integrations/github/latest/docs)"}]}')}}]);