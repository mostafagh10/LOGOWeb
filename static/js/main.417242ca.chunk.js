(this.webpackJsonppr1=this.webpackJsonppr1||[]).push([[0],{43:function(e,a,t){e.exports=t(81)},48:function(e,a,t){},65:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(39),l=t.n(r),o=(t(48),t(3)),m=t(4),i=t(6),s=t(5),u=t(12),E=t.n(u),v=(t(65),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){console.log(a.data.about),e.setState({x:a.data.about})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return c.a.createElement("div",{className:"col-md-4 col-sm-12"},c.a.createElement("div",{className:"card aboutcard"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"abouttwo"},"READ MORE")))}));return c.a.createElement("div",{className:"aboutone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"WELCOME TO WEBSITE"),c.a.createElement("hr",{className:"abouthr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component)),d=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"BLOG"))}}]),t}(n.Component),p=t(16),b=(t(70),t(15)),h=t(8);b.b.add(h.j,h.d,h.h);var N=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){e.setState({x:a.data.contact})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return c.a.createElement("div",{className:"col-md-4 col-sm-12",key:e.id},c.a.createElement("div",{className:"card",id:"contact1"},c.a.createElement(p.a,{icon:e.icon,id:"contact5"}),c.a.createElement("br",null),c.a.createElement("h1",null,e.type),c.a.createElement("br",null),c.a.createElement("p",{className:"contactdetails"},e.details)))}));return c.a.createElement("div",{className:"contactone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Get In Touch"),c.a.createElement("hr",{className:"contacthr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},e,c.a.createElement("div",{className:"col-md-6"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"contacttwo",placeholder:"Name"})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"contactthree",placeholder:"Email"})),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"contactfour",placeholder:"Subject"})),c.a.createElement("div",{className:"col-md-12"},c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"contactfive",placeholder:"message"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{className:"btn btn-primary",id:"contactbut"},"Send Message")))))}}]),t}(n.Component),f=t(21),g=t(22);function j(){var e=Object(f.a)(["\nposition : absolute;\ntop : 0;\nleft : 0;\nright : 0;\nbottom : 0;\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\nposition : absolute;\ntop : 0;\nleft : 0;\nright : 0;\nbottom : 0;\nbackground-color : #525252;\nopacity : 0.6;\n"]);return O=function(){return e},e}function y(){var e=Object(f.a)(["\ntext-align : center;\nfont-size : 20px;\ncolor : black;\nfont-weight:bold;\nmargin-right:10px;\nwidth:200px;\n"]);return y=function(){return e},e}function k(){var e=Object(f.a)(["\nwidth : 100%;\nheight: 600px;\nbackground-image: url('blog3.jpg');\nbackground-size: cover;\ntext-align : center;\nposition : relative;\n"]);return k=function(){return e},e}var w=g.a.div(k()),x=(g.a.button(y()),g.a.div(O())),M=g.a.div(j()),C=(t(72),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){console.log(a.data.works),e.setState({x:a.data.works})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return c.a.createElement("div",{className:"col-md-4 portfoliocard"},c.a.createElement("img",{src:e.image,height:"90%",width:"90%"}))}));return c.a.createElement("div",{className:"portfolioone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Featured Works"),c.a.createElement("hr",{className:"portfoliohr",size:"20"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component)),S=(t(73),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){console.log(a.data.price),e.setState({x:a.data.price})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card",id:"pricebigover"},c.a.createElement("div",{className:"priceover"}),c.a.createElement("div",{className:"priceover2"},c.a.createElement("h4",null,e.plan," plan"),c.a.createElement("br",null),c.a.createElement("h3",{className:"pricetwo"},c.a.createElement("span",{className:"pricespan"},e.price,"$ "),c.a.createElement("br",null),"/ Month"),c.a.createElement("br",null),c.a.createElement("p",null,"1GB Disk Space",c.a.createElement("br",null),c.a.createElement("br",null),"100 Email Account",c.a.createElement("br",null)," ",c.a.createElement("br",null),"24/24 Support"),c.a.createElement("br",null),c.a.createElement("button",{className:"pricethree"},"Purchase Now"))))}));return c.a.createElement("div",{className:"priceone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Pricing Table"),c.a.createElement("hr",{className:"pricehr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component));t(74);b.b.add(h.m,h.l,h.b,h.e,h.k,h.c,h.i,h.f,h.g);var A=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){e.setState({x:a.data.services})}))}},{key:"render",value:function(){var e=this.state.x,a=e.map((function(e){return c.a.createElement("div",{className:"col-md-4 col-sm-12"},c.a.createElement("div",{className:"card",id:"service1"},c.a.createElement(p.a,{icon:e.icon2,id:"service5"}),c.a.createElement("br",null),c.a.createElement("h3",null,e.type),c.a.createElement("p",null,"Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.")))})),t=e.map((function(e){if("0"!==e.number)return c.a.createElement("div",{className:"col-md-3 col-sm-12"},c.a.createElement("div",{className:"card",id:"service2"},c.a.createElement(p.a,{icon:e.icon,id:"service4"}),c.a.createElement("br",null),c.a.createElement("h3",null,e.number),c.a.createElement("p",null,e.des)))}));return c.a.createElement("div",{className:"serviceone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"What We Offer"),c.a.createElement("hr",{className:"servicehr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},a)),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{id:"service3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},t))))}}]),t}(n.Component),D=(t(75),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={x:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("data.json").then((function(a){e.setState({x:a.data.team})}))}},{key:"render",value:function(){var e=this.state.x.map((function(e){return c.a.createElement("div",{className:"col-md-4 col-sm-12"},c.a.createElement("div",{className:"card teamcard",id:"one"},c.a.createElement("img",{className:"card-img-top",src:e.image}),c.a.createElement("br",null),c.a.createElement("p",{className:"card-text"},"JOHN DOE"),c.a.createElement("h2",null,"web designer")))}));return c.a.createElement("div",{className:"teamone"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Our Team"),c.a.createElement("hr",{className:"teamhr"}),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},e)))}}]),t}(n.Component)),T=(t(76),function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w,null,c.a.createElement(x,null),c.a.createElement(M,null,c.a.createElement("div",{className:"container homecontainer"},c.a.createElement("h1",{className:"hometitle"},"WE ARE CREATIVE AGENCY"),c.a.createElement("p",{className:"hometext"},"Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere."),c.a.createElement("button",{className:"btn btn-primary"},"Get Started!"),c.a.createElement("button",{className:"btn btn-success"},"Learn More")))),c.a.createElement(v,null),c.a.createElement(C,null),c.a.createElement(A,null),c.a.createElement(S,null),c.a.createElement(D,null),c.a.createElement(N,null))}}]),t}(n.Component)),W=(t(77),t(14));b.b.add(h.a);var B=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Nav"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar bg",id:"navone"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"logo.png",width:"150",height:"80"}),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"},c.a.createElement(p.a,{className:"navtwo",icon:"bars"}))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/about"},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/portofolio"},"Portofolio")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/services"},"Services")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/price"},"Price")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/team"},"Team")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(W.b,{className:"nav-link",to:"/contact"},"Contact")))))))}}]),t}(n.Component),G=t(2),I=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(W.a,null,c.a.createElement(B,null),c.a.createElement(G.a,{path:"/",exact:!0,component:T}),c.a.createElement(G.a,{path:"/about",component:v}),c.a.createElement(G.a,{path:"/portofolio",component:C}),c.a.createElement(G.a,{path:"/services",component:A}),c.a.createElement(G.a,{path:"/price",component:S}),c.a.createElement(G.a,{path:"/team",component:D}),c.a.createElement(G.a,{path:"/blog",component:d}),c.a.createElement(G.a,{path:"/contact",component:N})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(79),t(80),t(37);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.417242ca.chunk.js.map