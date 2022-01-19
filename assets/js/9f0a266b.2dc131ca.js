"use strict";(self.webpackChunkjakenelson_cloud=self.webpackChunkjakenelson_cloud||[]).push([[5248],{3905:function(e,i,n){n.d(i,{Zo:function(){return c},kt:function(){return u}});var t=n(7294);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=t.createContext({}),s=function(e){var i=t.useContext(a),n=i;return e&&(n="function"==typeof e?e(i):p(p({},i),e)),n},c=function(e){var i=s(e.components);return t.createElement(a.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},f=t.forwardRef((function(e,i){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),u=r,m=f["".concat(a,".").concat(u)]||f[u]||d[u]||o;return n?t.createElement(m,p(p({ref:i},c),{},{components:n})):t.createElement(m,p({ref:i},c))}));function u(e,i){var n=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var l={};for(var a in i)hasOwnProperty.call(i,a)&&(l[a]=i[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7819:function(e,i,n){n.r(i),n.d(i,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],l={slug:"terraform-conditionals",title:"Terraform Conditionals",authors:["jake"],tags:["terraform"]},a=void 0,s={unversionedId:"tech/terraform/conditionals",id:"tech/terraform/conditionals",title:"Terraform Conditionals",description:"You can use if conditions in combination with Terraform functions at the end of a resoruce to determine if the resource should be created.",source:"@site/docs/tech/terraform/conditionals.mdx",sourceDirName:"tech/terraform",slug:"/tech/terraform/terraform-conditionals",permalink:"/docs/tech/terraform/terraform-conditionals",editUrl:"https://github.com/Jake-Mok-Nelson/website/tree/main/jakenelson.cloud/docs/tech/terraform/conditionals.mdx",tags:[{label:"terraform",permalink:"/docs/tags/terraform"}],version:"current",frontMatter:{slug:"terraform-conditionals",title:"Terraform Conditionals",authors:["jake"],tags:["terraform"]},sidebar:"tutorialSidebar",previous:{title:"Syncing Users & Groups from AzureAD",permalink:"/docs/tech/github/syncing-github-groups-from-azuread"},next:{title:"Approval Testing",permalink:"/docs/tech/testing/approval-testing"}},c=[],d={toc:c};function f(e){var i=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use if conditions in combination with Terraform functions at the end of a resoruce to determine if the resource should be created."),(0,o.kt)("p",null,"Here's a pseudo-code (mostly there) example of creating pipelines based on specific conditions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'locals {\n  minimal_pipeline_definitions = [\n    {\n      working_dir       = "myproject/iam"\n      tfvars            = "dev"\n      terraform_version = "0.13.7"\n    },\n    {\n      working_dir       = "myproject/datalake"\n      tfvars            = "dev"\n      terraform_version = "0.14.6"\n    },\n    {\n      working_dir            = "a-new-project/not-ready"\n      tfvars                 = "dev"\n      terraform_version      = "0.14.6"\n      is_test                = true # use the new pipeline test yamls for testing this project\n      pipeline_type_override = ci   # build only a CI pipeline for this project until we\'re ready to deploy\n    },\n  ]\n\n  all_pipelines = merge(local.ci_pipelines_generated, local.cd_pipelines_generated, local.custom_pipelines_generated)\n\n  ci_pipelines_generated = {\n\n    # Build CI pipelines\n    # Conditions: pipeline_type_override is set to \'ci\' or pipeline_type_override is undefined.\n    for pipeline in local.pipeline_list :\n    # if is_test - will point to test YAMLs in relevant variable and add in those variables to pipeline def.\n    # if is override_template - override yaml to read other yaml provided\n\n    # CI pipelines\n    replace(replace("ci_${pipeline.working_dir}_${pipeline.tfvars}", "-", "_"), " ", "_") => {\n      concurrency = lookup(pipeline, "concurrency", 0)\n      name        = replace(replace("ci-${pipeline.working_dir}-${pipeline.tfvars}", "_", "-"), " ", "")\n      pipeline_variables = lookup(pipeline, "pipeline_variables", {\n        WORKING_DIR       = pipeline.working_dir\n        ENV               = pipeline.tfvars\n        TERRAFORM_VERSION = pipeline.terraform_version\n      })\n      tags     = compact(distinct(concat(local.default_pipeline_config.pipeline_tags, try(pipeline.tags, []), ["ci"])))           # Merge all tags into one group, remove duplicates and empty elements.\n      template = "${try(pipeline.is_test, false) ? "test-" : ""}ci-${try(pipeline.override_template, "terraform-pipeline.yaml")}" # if is_test, prefix with test-, if override_template is defined use that but prefix with ci, else use the common use case and prefix with ci.\n      triggers = lookup(pipeline, "triggers", [\n        # ... trigger definitions for CI pipelines\n      ])\n    } if try(pipeline.pipeline_type_override, "") == "ci" || try(pipeline.pipeline_type_override, "") == ""\n  }\n\n  cd_pipelines_generated = {\n    # Build CD pipelines\n    # Conditions: pipeline_type_override is set to \'cd\' or pipeline_type_override is undefined.\n    for pipeline in local.pipeline_list :\n    # if is_test - will point to test YAMLs in relevant variable and add in those variables to pipeline def.\n    # if is override_template - override yaml to read other yaml provided\n\n    replace(replace("cd_${pipeline.working_dir}_${pipeline.tfvars}", "-", "_"), " ", "_") => {\n      concurrency = lookup(pipeline, "concurrency", 1)\n      name        = replace(replace("deploy-${pipeline.working_dir}-${pipeline.tfvars}", "_", "-"), " ", "")\n      pipeline_variables = lookup(pipeline, "pipeline_variables", {\n        WORKING_DIR       = pipeline.working_dir\n        ENV               = pipeline.tfvars\n        TERRAFORM_VERSION = pipeline.terraform_version\n      })\n      template = "${try(pipeline.is_test, false) ? "test-" : ""}deploy-${try(pipeline.override_template, "terraform-pipeline.yaml")}" # complex conditions, ifs within ifs; e.g. if is_test, prefix with test-, if override_template is defined use that but prefix with ci, else use the common use case and prefix with ci.\n      triggers = lookup(pipeline, "triggers", [\n        # ... triggers for CD pipelines\n      ])\n    } if try(pipeline.pipeline_type_override, "") == "cd" || try(pipeline.pipeline_type_override, "") == ""\n  }\n\n  custom_pipelines_generated = {\n    # Build custom spec pipelines (for when the assumed defaults won\'t work at all)\n    # Conditions: pipeline_type_override is set to \'cd\' or pipeline_type_override is undefined.\n    for pipeline in local.pipeline_list :\n    # if is_test - will point to test YAMLs in relevant variable and add in those variables to pipeline def.\n\n    join("_", ["custom_", replace(replace(pipeline.name, "-", "_"), " ", "_")]) => {\n      concurrency = lookup(pipeline, "concurrency", 1) # use lookups to allow overrides\n      # there would be a very verbose pipeline structure here to allow for edge cases\n    } if try(pipeline.pipeline_type_override, "") == "custom"\n  }\n}\n')),(0,o.kt)("p",null,"The above example includes conditionally creating a resource by ending it with an if statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'for pipeline in local.pipeline_list :\n    replace(replace("ci_${pipeline.working_dir}_${pipeline.tfvars}", "-", "_"), " ", "_") => {\n        ...\n    } if try(pipeline.pipeline_type_override, "") == "ci" || try(pipeline.pipeline_type_override, "") == ""\n')),(0,o.kt)("p",null,"It also includes using if conditions within the template/go templating syntax, for example, when determining which yaml file the pipeline should use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'template = "${try(pipeline.is_test, false) ? "test-" : ""}ci-${try(pipeline.override_template, "terraform-pipeline.yaml")}" \n')),(0,o.kt)("p",null,"Breaking down the above if conditions we can read it as:"),(0,o.kt)("p",null,"If the customer provided is_test within the pipeline definition as a boolean with the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),',\nthen prefix the filename with "test-" otherwise, we don\'t prefix the filename at all.'),(0,o.kt)("p",null,"We always prefix this filename in this loop with ",(0,o.kt)("inlineCode",{parentName:"p"},"ci-")," and then we determine if the customer wanted to set a custom yaml file for their pipeline defintion,\notherwise we provide a recommened default."))}f.isMDXComponent=!0}}]);