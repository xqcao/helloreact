(this.webpackJsonphelloreact=this.webpackJsonphelloreact||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(23),o=n.n(r),s=(n(41),n(42),n(19)),l=n(2),i=n(1),j=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h2",{children:"Hello ABout page"})})},b=n(34),h=n(21),p=n(35),d=function(e){return Object(i.jsx)("div",{className:"inline-block relative w-64 mb-2",children:Object(i.jsxs)("label",{className:"block font-bold",children:[Object(i.jsx)("input",Object(p.a)({className:"mr-2 leading-tight",type:"checkbox"},e.toggle)),Object(i.jsx)("span",{className:"text-sm",children:"Show Line Numbers"})]})})},u=function(e){var t=Object(c.useState)(!0),n=Object(b.a)(t,2),a=n[0],r=n[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Code Block"}),Object(i.jsx)(d,{toggle:{checked:a,onChange:function(e){return r(!a)}}}),Object(i.jsx)(h.a,{language:e.language,text:e.codeSimple,showLineNumbers:a,theme:h.b,wrapLines:!0,codeBlock:!0})]})};var x=[{name:"Home Page",path:"/",component:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Home page"}),Object(i.jsx)(u,{language:"bash",codeSimple:"\n  // install node\n  brew install node\n\n  // install create-react-app\n  npm install -g create-react-app\n\n  //create app\n  create-react-app helloreactapp\n  cd helloreactapp\n\n  //start react app\n  npm start\n\n"})]})}},{name:"About Page",path:"/about",component:j}],O=function(){return Object(i.jsx)("h1",{children:"404 Error: page does not exist!"})};var m=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)("ol",{children:x.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(s.b,{to:e.path,children:e.name})},e.path)}))}),Object(i.jsx)("hr",{style:{height:"3px",color:"#333",backgroundColor:"#333"}}),Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/",children:Object(i.jsx)(l.a,{to:"/"})}),x.map((function(e){return Object(i.jsx)(l.b,{exact:!0,path:e.path,component:e.component},e.path)})),Object(i.jsx)(l.b,{component:O})]})]})})},g=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,244)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),g()}},[[58,152,153]]]);
//# sourceMappingURL=main.c6578c1e.chunk.js.map