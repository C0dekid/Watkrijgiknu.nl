(this.webpackJsonpwatkrijgiknu=this.webpackJsonpwatkrijgiknu||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(13),n(14),n(2)),o=n(3),d=n(6),l=n(5),j=n(4),p=n(0),b=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"contact"})}}]),n}(r.a.Component),h=function(){return Object(p.jsx)("footer",{className:"footer mt-auto py-3",children:Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsxs)("p",{children:["\xa9 2021 - Watkrijgiknu.nl - Alle rechten voorbehouden.",Object(p.jsx)("br",{}),"Alles op de site is fictief, dat betekent dat wij u ",Object(p.jsx)("u",{children:"niets"})," hoeven te leveren,",Object(p.jsx)("br",{}),"hoe hard u ook schreeuwt, stampt of dreigt met overstappen naar een ander provider."]}),Object(p.jsx)("p",{className:"footer-links"})]})})},u={wc_papier:n.p+"static/media/wc_papier.5e1da96e.png",kniebescherming:n.p+"static/media/kniebescherming.9c9fdd8f.png",veters:n.p+"static/media/veters.846b8226.png",toiletbril:n.p+"static/media/wcbril.3f714324.png",aubergine:n.p+"static/media/aubergine.e64f4590.png",mark:n.p+"static/media/mark_rutte.b9e5f0fc.png",belastingdienst:n.p+"static/media/belastingdienst.3bf256aa.png",tomaten:n.p+"static/media/tomaten.f681db98.png",schoenen:n.p+"static/media/schoenen.be6b5075.png",smeerkaas:n.p+"static/media/smeerkaas.eec71953.png",spam:n.p+"static/media/spam.d0da3ebe.png",foto:n.p+"static/media/foto.b8dd9f24.png",lockdown:n.p+"static/media/lockdown.450f4dc5.png"},m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasAdblocker:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"share",value:function(e,t){t.preventDefault();var n="Ik heb zojuist '".concat(this.props.product,"' gekregen! #watkrijgiknu? https://watkrijgiknu.nl");switch(e.toLowerCase()){case"twitter":window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(n));break;case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURI("https://watkrijgiknu.nl"),"&t=").concat(encodeURIComponent(n)));break;default:return}}},{key:"render",value:function(){var e=this,t=this.state.hasAdblocker;return Object(p.jsxs)(r.a.Fragment,{children:[!0===t?Object(p.jsx)("span",{className:"alert alert-danger",children:"blabla"}):null,Object(p.jsxs)("div",{className:"share",children:[Object(p.jsx)("a",{href:"/",onClick:function(t){return e.share("Twitter",t)},rel:"noreferer",target:"_blank",children:"Twitter"}),Object(p.jsx)("a",{href:"/",onClick:function(t){return e.share("Facebook",t)},rel:"noreferer",target:"_blank",children:"Facebook"})]})]})}}]),n}(r.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentPage:"/",pages:[{path:"/",screen:null},{path:"/contact",screen:b}],prize:null,rejected:0,accept:!1},a.surprise=a.surprise.bind(Object(d.a)(a)),a.navigate=a.navigate.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.surprise(null)}},{key:"navigate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1?arguments[1]:void 0;if(t&&t.preventDefault(),!0===/^[a-zA-Z]+$/.test(e.replace("/",""))){var n=this.state,a=n.pages,r=n.currentPage,c=a.filter((function(t){return t.path===e}));1===c.length&&r!==e&&this.setState({currentPage:e})}}},{key:"surprise",value:function(e){if(null!==e){e.preventDefault();var t=this.state.rejected;this.setState({rejected:t+1})}var n=[{product:"Kniebeschermers",desc:"Voor mensen waarvan de knie\xebn achterste voren buigen.",icon:u.kniebescherming},{product:"Veters",desc:"Om je schoenen mee vast te maken (.. of als je je schoonmoeder niet mag!)",icon:u.veters},{product:"2,500 pakken wc papier",desc:"Voor als je net sushi gegeten hebt.",icon:u.wc_papier},{product:"Een toiletbril",desc:"ja.",icon:u.toiletbril},{product:"Een aubergine",desc:"Waarom is dit ding paars??",icon:u.aubergine},{product:"Nog eens vier jaar Mark Rutte",desc:"Euh.. ja.",icon:u.mark},{product:"Adoptie door Mark Rutte",desc:"Markie als papa!",icon:u.mark},{product:"Brief van de belastingdienst",desc:"U bent ons \u20ac25,000,- verschuldigd. Waar blijft dat geld?",icon:u.belastingdienst},{product:"Vierkante tomaten",desc:"Horen rond te zijn maarja.",icon:u.tomaten},{product:"Broek schoenen",desc:"wtf",icon:u.schoenen},{product:"Smeerkaas",desc:"Wie dacht dat dit een goed idee was?",icon:u.smeerkaas},{product:"Ongewenste mail",desc:"U heeft zojuist \u20ac1 miljoen gewonnen! Het enige wat u hoeft te doen is uw bankgegevens aan ons geven.",icon:u.spam},{product:"Slechte kwaliteit foto",desc:"haha",icon:u.foto},{product:"Verlening van de lockdown",desc:"Lijkt net op een onopzegbare telefoon abonnement.",icon:u.lockdown}];this.setState({prize:n[Math.floor(Math.random()*n.length)]})}},{key:"render",value:function(){var e=this,t=this.state,n=t.prize,a=t.rejected,c=t.accept;if("/"===t.currentPage)return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("main",{className:"flex-shrink-0",children:Object(p.jsxs)("div",{className:"container text-center",children:[Object(p.jsx)("p",{className:"text-center",children:Object(p.jsx)("img",{src:"assets/c_images/surprise-box.png",style:{width:120}})}),!1===c?Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h3",{className:"mt-5",children:null===n?"Wat krijg ik nu?":"Dit is wat je krijgt \ud83e\udd29:"}),Object(p.jsx)("div",{className:"prize",children:a<10?null===n?Object(p.jsx)("p",{children:"Niks."}):Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsxs)("div",{className:"leprize",children:[Object(p.jsx)("h5",{children:n.product}),Object(p.jsx)("p",{children:Object(p.jsx)("img",{src:n.icon,className:"prize-image"})}),Object(p.jsx)("p",{children:n.desc}),Object(p.jsx)("p",{children:Object(p.jsx)("button",{className:"btn btn-primary btn-sm",onClick:function(){return e.setState({accept:!0})},children:"Dit wil ik!"})})]}),Object(p.jsxs)("p",{children:["Niet blij hiermee? Als ondankbare, kan je altijd nog ",Object(p.jsx)("a",{href:"/",onClick:function(t){return e.surprise(t)},children:"wat anders"})," krijgen."]})]}):Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)("h4",{children:"Jij krijgt niks meer!"}),Object(p.jsx)("p",{children:"Je hebt al 10x nee gezegd tegen ons aanbod."})]})})]}):Object(p.jsx)(r.a.Fragment,{children:Object(p.jsx)("div",{className:"prize",children:Object(p.jsxs)("div",{className:"leprize",children:[Object(p.jsx)("h5",{children:"Gefeliciteerd!"}),0===a?Object(p.jsxs)("p",{children:["Je bent zojuist de gelukkige eigenaar geworden van ",Object(p.jsx)("b",{children:n.product}),". Toch mooi om te zien dat er tenminste mensen zijn die blij zijn met wat ze krijgen, dat zien wij graag!"]}):Object(p.jsxs)("p",{children:["Na ",a," keer niet tevreden te zijn met het eerste aanbod, heb je er toch voor gekozen voor ",Object(p.jsx)("b",{children:n.product}),"."]}),"Delen: ",Object(p.jsx)(m,{product:n.product})]})})})]})}),Object(p.jsx)(h,{})]})}}]),n}(r.a.Component);i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.592d5731.chunk.js.map