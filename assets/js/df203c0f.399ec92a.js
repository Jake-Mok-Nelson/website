"use strict";(self.webpackChunkjakenelson_cloud=self.webpackChunkjakenelson_cloud||[]).push([[924],{9853:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var l=t(7294),c=t(4814),s=t(9960),n=t(2822),r=t(5999);function o(e){var a=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(s.Z,{to:a.permalink},l.createElement("h2",null,a.title)),a.description&&l.createElement("p",null,a.description))}function g(e){var a,t=e.tag,g=(a=(0,n.c2)().selectMessage,function(e){return a(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:g(t.docs.length),tagName:t.name});return l.createElement(c.Z,{title:i,wrapperClassName:n.kM.wrapper.docsPages,pageClassName:n.kM.page.docsTagDocListPage,searchMetadatas:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,i),l.createElement(s.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return l.createElement(o,{key:e.id,doc:e})})))))))}}}]);