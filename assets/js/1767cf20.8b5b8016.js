"use strict";(self.webpackChunkjakenelson_cloud=self.webpackChunkjakenelson_cloud||[]).push([[6743],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7166:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(3117),r=(a(7294),a(3905));const o={id:"intro-aliases",title:"Intro Alises",tags:["aliases","mysetup","shell"]},i=void 0,s={unversionedId:"tech/bash/aliases/intro-aliases",id:"tech/bash/aliases/intro-aliases",title:"Intro Alises",description:"What are aliases?",source:"@site/docs/tech/bash/aliases/intro.mdx",sourceDirName:"tech/bash/aliases",slug:"/tech/bash/aliases/intro-aliases",permalink:"/docs/tech/bash/aliases/intro-aliases",draft:!1,editUrl:"https://github.com/Jake-Mok-Nelson/website/tree/main/jakenelson.cloud/docs/tech/bash/aliases/intro.mdx",tags:[{label:"aliases",permalink:"/docs/tags/aliases"},{label:"mysetup",permalink:"/docs/tags/mysetup"},{label:"shell",permalink:"/docs/tags/shell"}],version:"current",frontMatter:{id:"intro-aliases",title:"Intro Alises",tags:["aliases","mysetup","shell"]},sidebar:"tutorialSidebar",previous:{title:"Git Aliases",permalink:"/docs/tech/bash/aliases/my-git-aliases"},next:{title:"Convert a String to an Array in Bash",permalink:"/docs/tech/bash/bash-convert-string-to-array"}},l={},u=[{value:"What are aliases?",id:"what-are-aliases",level:2},{value:"When would you use an alias?",id:"when-would-you-use-an-alias",level:2},{value:"How do I use your aliases?",id:"how-do-i-use-your-aliases",level:2},{value:"How would you use an alias?",id:"how-would-you-use-an-alias",level:2},{value:"Example",id:"example",level:3},{value:"Problem Description",id:"problem-description",level:4},{value:"Example with Aliases",id:"example-with-aliases",level:4}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-aliases"},"What are aliases?"),(0,r.kt)("p",null,"Alises are alternative names or shortcuts to a command or a command with arguments."),(0,r.kt)("h2",{id:"when-would-you-use-an-alias"},"When would you use an alias?"),(0,r.kt)("p",null,"Say you do something regularly, it's a complex command and it takes time to type."),(0,r.kt)("p",null,"If you know what it does, and know it well, and do it often, then it's a good case to become and alias (i.e. shortened) to a different command. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.bashrc")," to see if the file exists."),(0,r.kt)("h2",{id:"how-do-i-use-your-aliases"},"How do I use your aliases?"),(0,r.kt)("p",null,"They are all stored in code blocks in their respective pages, copy all the contents of the code block and paste it into the correct rc file,\nexiting and re-opening terminal will now have the commands available or you can bring them into the current shell without restarting by sourcing them with ",(0,r.kt)("inlineCode",{parentName:"p"},"source ~/.bashrc"),"."),(0,r.kt)("h2",{id:"how-would-you-use-an-alias"},"How would you use an alias?"),(0,r.kt)("p",null,"You'd record an alias as a bash command in the ~/.bashrc ~/.localrc or whatever file you use based on your shell type"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"problem-description"},"Problem Description"),(0,r.kt)("p",null,"Let's take a common git workflow as an example.\nSay you've made changes, you want to prepare them for being committed, you want to commit them, and then you want to push them to a feature branch matching your branch name."),(0,r.kt)("p",null,"This is normally done with three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git add -A"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "Add the thing"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"git push")))),(0,r.kt)("p",null,"Now, most people experiecne an error here because the target branch doesn't exist yet after the first push so they go back and fix ",(0,r.kt)("inlineCode",{parentName:"p"},"git push")," to something like ",(0,r.kt)("inlineCode",{parentName:"p"},"git push --set-upstream origin <branch>"),"."),(0,r.kt)("h4",{id:"example-with-aliases"},"Example with Aliases"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Store the alises for future use\necho \"alias gac='git add -A && git commit -m'\" >> ~/.bashrc\necho \"alias gp='git push origin HEAD'\" >> ~/.bashrc\n")),(0,r.kt)("p",null,"Now that they have been stored, we can quit terminal. Next time we start working and we open terminal or our shell,\nwe've done some work on our software and we want to commit it, we would just use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'gac "Add the thing" && gp')),(0,r.kt)("p",null,"Imagine that you're commiting hourly most days and consider how much time that saves your over years. Hopefully this explains the value of aliases."))}p.isMDXComponent=!0}}]);