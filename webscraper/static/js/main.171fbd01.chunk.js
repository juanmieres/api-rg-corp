(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,n,t){e.exports=t(71)},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),l=t.n(c),u=t(41),i=t(16),o=t(13),s=t(35),f=Object(o.combineReducers)({}),m=Object(o.createStore)(f,Object(s.composeWithDevTools)()),d=t(2),p=t(18),b=t.n(p),v=t(36),E=t(42),g=t(37),h=t.n(g),y=t(19),j=t.n(y),x=t(9),O=t(10);function w(){var e=Object(x.a)(["\n  display: flex;\n  ","\n  ","\n  ","\n  height: ",";\n  width: ",";\n  margin: ",";\n  padding: ",";\n  background: #fff;\n  border: 1px solid #ced6ea;\n"]);return w=function(){return e},e}var D=O.b.div(w(),(function(e){var n=e.flexDirection;return n&&"flex-direction: ".concat(n,";")}),(function(e){var n=e.alignItems;return n&&"align-items: ".concat(n,";")}),(function(e){var n=e.justifyContent;return n&&"justify-content: ".concat(n,";")}),(function(e){var n=e.height;return n||"fit-content"}),(function(e){var n=e.width;return n||"100%"}),(function(e){var n=e.margin;return n||"0"}),(function(e){var n=e.padding;return n||"0.5rem 1rem"}));function k(){var e=Object(x.a)([""]);return k=function(){return e},e}function M(){var e=Object(x.a)(["\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n"]);return M=function(){return e},e}function S(){var e=Object(x.a)(["\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n"]);return S=function(){return e},e}var F=O.b.table(S()),H=O.b.td(M()),I=Object(O.b)(H)(k()),Y=function(){var e=r.a.useState([]),n=Object(E.a)(e,2),t=n[0],a=n[1];return r.a.useEffect((function(){function e(){return(e=Object(v.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()("/api/scrapers/");case 2:n=e.sent,a(n.data.scrapers);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(D,{height:"30vh",width:"50%",margin:"2rem auto",padding:"2rem",justifyContent:"center",alignItems:"center"},r.a.createElement(F,null,r.a.createElement("tr",null,r.a.createElement(I,null,"ID"),r.a.createElement(I,null,"Moneda"),r.a.createElement(I,null,"\xdaltimo valor le\xeddo"),r.a.createElement(I,null,"Fecha \xfaltima actualizaci\xf3n"),r.a.createElement(I,null,"Frecuencia"),r.a.createElement(I,null,"Fecha de creaci\xf3n")),t.map((function(e){return r.a.createElement("tr",null,r.a.createElement(H,null,e.id),r.a.createElement(H,null,e.currency),r.a.createElement(H,null,"$ ",e.value),r.a.createElement(H,null,j()(e.value_updated_at).format("HH:mm:ss DD/MM/YY")),r.a.createElement(H,null,e.frequency),r.a.createElement(H,null,j()(e.created_at).format("HH:mm:ss DD/MM/YY")))}))))};function C(){var e=Object(x.a)(["\n  body {\n    background: #f9f9fb;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', \n      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"]);return C=function(){return e},e}var _=Object(O.a)(C()),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(d.a,{exact:!0,path:"/",component:Y}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:m},r.a.createElement(i.a,null,r.a.createElement(z,null)))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.171fbd01.chunk.js.map