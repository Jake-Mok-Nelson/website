# Github Enterprise Managed as Code


## Featuers
Having Github Enterprise managed as code for an entire organisation has several benefits:

* You can define a set of guidelines for creating new resources based on Github best practices. (see resources section)
* Configuration can be as generic or specific as you need for the case.
* Implementation is declaritive and transparent.
* Largely self-service environment reduces TOIL.

## Implementation Detail

### Authentication

#### Pipeline Auth
Use a token instead of a Github app to authenticate.

This is because Github Apps have limitations around access-management & team membership that requires manual intervention by a organisation admin.

```
provider "github" {
  token = var.token # or `GITHUB_TOKEN`
}
```

or

```
provider "github" {
  app_auth {} # When using `GITHUB_APP_XXX` environment variables
}
```

#### User Auth

Integrate users directly with Azure AD via [sync groups](https://registry.terraform.io/providers/integrations/github/latest/docs/resources/team_sync_group_mapping).

### User Management

Use the `github_user` data resource for reading singular users and the `github_users` data resource for reading multiple at once.


## Resources

[Repository best practices](../notes/tech/github-repo-best-practices.md)
[Github Terraform Provider](https://registry.terraform.io/providers/integrations/github/latest/docs)
