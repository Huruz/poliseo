(function(t){function i(i){for(var s,p,r=i[0],h=i[1],a=i[2],c=0,u=[];c<r.length;c++)p=r[c],Object.prototype.hasOwnProperty.call(o,p)&&o[p]&&u.push(o[p][0]),o[p]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);l&&l(i);while(u.length)u.shift()();return n.push.apply(n,a||[]),e()}function e(){for(var t,i=0;i<n.length;i++){for(var e=n[i],s=!0,p=1;p<e.length;p++){var h=e[p];0!==o[h]&&(s=!1)}s&&(n.splice(i--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},n=[];function p(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4061022a"}[t]+".js"}function r(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var i=[],e=o[t];if(0!==e)if(e)i.push(e[2]);else{var s=new Promise((function(i,s){e=o[t]=[i,s]}));i.push(e[2]=s);var n,h=document.createElement("script");h.charset="utf-8",h.timeout=120,r.nc&&h.setAttribute("nonce",r.nc),h.src=p(t);var a=new Error;n=function(i){h.onerror=h.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var s=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",a.name="ChunkLoadError",a.type=s,a.request=n,e[1](a)}o[t]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:h})}),12e4);h.onerror=h.onload=n,document.head.appendChild(h)}return Promise.all(i)},r.m=t,r.c=s,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)r.d(e,s,function(i){return t[i]}.bind(null,s));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/poliseo/",r.oe=function(t){throw console.error(t),t};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],a=h.push.bind(h);h.push=i,h=h.slice();for(var c=0;c<h.length;c++)i(h[c]);var l=a;n.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"10c7":function(t,i,e){"use strict";e("78b8")},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("7a23"),o=Object(s["u"])({active:!1,change:function(t){this.active=t}}),n=o,p={expose:[],setup:function(t){return{game:n}}},r=(e("10c7"),p),h=e("9483");Object(h["a"])("".concat("/poliseo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("d3b7"),e("3ca3"),e("ddb0");var a=e("6c02"),c={class:"home mt-1"};function l(t,i,e,o,n,p){var r=Object(s["x"])("HelloWorld"),h=Object(s["x"])("Instructions"),a=Object(s["x"])("Game");return Object(s["s"])(),Object(s["e"])("div",c,[Object(s["h"])(r),Object(s["h"])(h),Object(s["h"])(a,{height:o.heightScreen},null,8,["height"])])}var u=Object(s["h"])("h2",{class:"text-2xl font-bold"},"Bienvenidos a la Beta 2.0, hecho en Vue 3",-1),y=Object(s["h"])("div",{class:"mt-1 px-12 text-justify font-medium"},[Object(s["g"])(" Lee las instrucciones mediante el siguiente botón y si ya las sabes, pues a ¡Jugar!"),Object(s["h"])("br"),Object(s["g"])(" Te invito a que des tu opinión o sugerencia para seguir mejorando este mini proyecto, en la sección "),Object(s["h"])("span",null,"About"),Object(s["g"])(". ")],-1);function d(t,i,e,o,n,p){return Object(s["s"])(),Object(s["e"])("div",null,[u,y])}var x={name:"HelloWorld",props:{msg:String}};x.render=d;var f=x,b=(e("a4d3"),e("e01a"),{key:0,id:"keysInfo",class:"text-left modal absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50"}),m={class:"flex flex-col justify-center items-center bg-blue-50 rounded-md md:p-4 sm:p-2\r\n                    w-3/4 lg:w-1/2 h-1/2 lg:h-3/5 md:h-2/3 sm:h-3/5\r\n                    text-xs md:text-base sm:text-sm"},v=Object(s["h"])("h3",{class:"font-bold"},"Controles",-1),g=Object(s["h"])("h4",{class:"ml-2 font-semibold"},"Teclas",-1),j={class:"ml-2"};function w(t,i,e,o,n,p){return Object(s["s"])(),Object(s["e"])("div",null,[Object(s["h"])("button",{onClick:i[1]||(i[1]=function(t){return o.show=!0}),class:o.claseBtn},"Controles",2),(Object(s["s"])(),Object(s["e"])(s["b"],{to:"body"},[o.show?(Object(s["s"])(),Object(s["e"])("div",b,[Object(s["h"])("div",m,[v,g,Object(s["h"])("ul",j,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["w"])(o.controles,(function(t,i){return Object(s["s"])(),Object(s["e"])("li",{class:"px-1 py-2",key:i},[Object(s["h"])("span",{class:o.claseSpanKey},Object(s["z"])(t.key),3),Object(s["g"])(" - Para "+Object(s["z"])(t.description),1)])})),128))]),Object(s["h"])("button",{onClick:i[2]||(i[2]=function(t){return o.show=!1}),class:o.claseBtn},"Cerrar",2)])])):Object(s["f"])("",!0)]))])}var O={setup:function(){var t=Object(s["v"])(!1),i=Object(s["v"])("p-1 bg-white text-black border-black rounded-md border-2"),e=Object(s["v"])("rounded-md bg-red-500 hover:bg-red-700 py-1 px-1.5 m-1 text-white"),o=Object(s["v"])([{key:"W",description:" moverte hacia arriba"},{key:"S",description:" moverte hacia abajo"},{key:"A",description:" moverte hacia la izquierda"},{key:"D",description:" moverte hacia la derecha"},{key:"Enter",description:" iniciar el juego y el inicio de cada nivel"},{key:"Space (Barra espaciadora)",description:" hacer un disparo por el jugador"}]);return{claseSpanKey:i,claseBtn:e,controles:o,show:t}}};O.render=w;var k=O,L={class:"game mt-4 grid grid-cols-4"},S={class:"px-5"},D={class:"bg-gradient-to-b from-blue-900 to-blue-500 shadow-md rounded-b-lg py-2 text-white"},F={class:"text-center font-bold"},C=Object(s["h"])("hr",{class:"p-1"},null,-1),I={class:"px-2 text-justify text-sm"},R={id:"area",class:"col-span-3 flex justify-center"};function M(t,i,e,o,n,p){return Object(s["s"])(),Object(s["e"])("div",L,[Object(s["h"])("div",S,[Object(s["h"])("div",D,[Object(s["h"])("h3",F,"Nivel: "+Object(s["z"])(t.nivelActual),1),C,Object(s["h"])("h5",I,Object(s["z"])(t.msgNivel),1)])]),Object(s["h"])("div",R,[Object(s["h"])("canvas",{id:"canvas",height:o.heightC},"Canvas",8,["height"])])])}var E,U,A,B,T,P,H,W,_,N,q,z,G,J,K,V=e("5530"),Q=(e("a9e3"),e("fb6a"),e("a434"),e("159b"),e("caf7")),X=e.n(Q),Y=e("9245"),Z=e.n(Y),$=e("987f"),tt=e.n($),it=e("c407"),et=e.n(it),st=70,ot=[1,2,4],nt=[2,4,5],pt=0,rt=5,ht=parseInt(rt/2)+1,at=100,ct=new window.keypress.Listener(void 0),lt=!1,ut=!1,yt=!1,dt=!1,xt=!1,ft=0,bt=1,mt=5,vt=Object(s["v"])(1),gt=Object(s["v"])(""),jt=Object(s["v"])(0),wt=0;A=new Image,A.src=X.a,B=new Image,B.src=Z.a,P=new Image,P.src=tt.a,T=new Image,T.src=et.a;var Ot=[{imgObj:B,color:"#19A6C7"},{imgObj:P,color:"#0BA55F"},{imgObj:T,color:"#FFEB21"}];function kt(){var t=parseInt(wt/rt);if(t%2==0&&t%4==0);else while(t%2!=0||t%4!=0||t*rt>wt)t--;pt=t,J=rt*pt,q=parseInt(pt/2),z=parseInt(.4*pt),G=parseInt(.1*pt)}function Lt(){for(var t=[],i=0;i<rt;i++){for(var e=[],s=0;s<rt;s++)e[s]=0==i||i%2==0?0:s%2!=0?1:0;t[i]=e}return t}function St(){vt.value=1,rt=5,gt.value="",ht=parseInt(rt/2)+1,ft=0}function Dt(t){lt=!0,ut=t,t?(ft++,ft<mt&&(vt.value++,rt+=2)):St(),ht=parseInt(rt/2)+1,J=rt*pt,Ft=Lt()}var Ft=Lt(),Ct=function(){this.objList=[],this.addEnemie=function(t){return this.objList.push({itself:t,p1:[t.x,t.y],p2:[t.x,t.y+pt],p3:[t.x+pt,t.y],p4:[t.x+pt,t.y+pt]}),this.objList.length},this.updatePositions=function(t,i,e){var s=this.objList[t-1];s.p1=[i,e],s.p2=[i,e+pt],s.p3=[i+pt,e],s.p4=[i+pt,e+pt],this.objList[t-1]=s},this.friendlyColision=function(t,i){var e=this.objList.slice(),s=e[t-1],o=!1;return e.splice(t-1,1),e.forEach((function(t){if(!t.itself.isDead)switch(i){case"U":(s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]||s.p3[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]&&s.p3[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p3[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p3[0]<=t.p3[0]&&s.p1[1]>=t.p3[1])&&(o=!0);break;case"R":(s.p3[0]>=t.p1[0]&&s.p3[1]>=t.p1[1]&&s.p3[0]>=t.p2[0]&&s.p3[1]<=t.p2[1]&&s.p3[0]<=t.p3[0]&&s.p3[1]>=t.p3[1]&&s.p3[0]<=t.p4[0]&&s.p3[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0);break;case"D":(s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0);break;case"L":(s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]||s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]&&s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1])&&(o=!0);break;default:break}})),o}},It=function(){this.objList=[],this.addShoot=function(t,i){var e,s,o;return"D"==t.orientation||"U"==t.orientation?(e=[t.x,t.y+q],s=[t.x+(pt-2*z),t.y],o=[t.x+(pt-2*z),t.y+q]):"L"!=t.orientation&&"R"!=t.orientation||(e=[t.x,t.y+(pt-2*z)],s=[t.x+q,t.y],o=[t.x+q,t.y+(pt-2*z)]),this.objList[i-1]={itself:t,direction:t.orientation,p1:[t.x,t.y],p2:e,p3:s,p4:o},i},this.updatePositions=function(t,i,e,s){var o=this.objList[t-1];o.direction=s,o.p1=[i,e],"D"==o.direction||"U"==o.direction?(o.p2=[i,e+q],o.p3=[i+(pt-2*z),e],o.p4=[i+(pt-2*z),e+q]):"R"!=o.direction&&"L"!=o.direction||(o.p2=[i,e+(pt-2*z)],o.p3=[i+q,e],o.p4=[i+q,e+(pt-2*z)]),this.objList[t-1]=o},this.resetOtherShoot=function(t){_.objList[t.itself.indexFather-1].itself.ownShoot=null,_.objList[t.itself.indexFather-1].itself.existingShoot=!1,N.objList[t.itself.indexFather-1].itself.crashed=!0},this.resetOwnShoot=function(t){_.objList[t.itself.indexFather-1].itself.ownShoot.crashed=!0,_.objList[t.itself.indexFather-1].itself.existingShoot=!1},this.friendlyShootColision=function(t,i){var e=this.objList.slice(),s=e[t-1],o=!1;return e.splice(t-1,1),e.forEach((function(t){if(!t.itself.crashed)switch(i){case"U":(s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]||s.p3[0]>=t.p2[0]&&s.p3[1]<=t.p2[1]&&s.p3[0]<=t.p4[0]&&s.p3[1]<=t.p4[1]&&s.p3[0]>=t.p1[0]&&s.p3[1]>=t.p1[1]&&s.p3[0]<=t.p3[0]&&s.p3[1]>=t.p3[1])&&(o=!0,N.resetOtherShoot(t));break;case"R":(s.p3[0]>=t.p1[0]&&s.p3[1]>=t.p1[1]&&s.p3[0]>=t.p2[0]&&s.p3[1]<=t.p2[1]&&s.p3[0]<=t.p3[0]&&s.p3[1]>=t.p3[1]&&s.p3[0]<=t.p4[0]&&s.p3[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0,N.resetOtherShoot(t));break;case"D":(s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0,N.resetOtherShoot(t));break;case"L":(s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]||s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]&&s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1])&&(o=!0,N.resetOtherShoot(t));break;default:break}})),o},this.shootColision=function(t,i){var e=this.objList.slice(),s=t,o=!1,n=pt-2*z;return e.forEach((function(t){if(!t.itself.crashed)switch(i){case"U":(s.x>=t.p2[0]&&s.y<=t.p2[1]&&s.x<=t.p4[0]&&s.y<=t.p4[1]&&s.x>=t.p1[0]&&s.y>=t.p1[1]&&s.x<=t.p3[0]&&s.y>=t.p3[1]||s.x+n>=t.p2[0]&&s.y<=t.p2[1]&&s.x+n<=t.p4[0]&&s.y<=t.p4[1]&&s.x+n>=t.p1[0]&&s.y>=t.p1[1]&&s.x+n<=t.p3[0]&&s.y>=t.p3[1])&&(o=!0,N.resetOtherShoot(t));break;case"R":(s.x+q>=t.p1[0]&&s.y>=t.p1[1]&&s.x+q>=t.p2[0]&&s.y<=t.p2[1]&&s.x+q<=t.p3[0]&&s.y>=t.p3[1]&&s.x+q<=t.p4[0]&&s.y<=t.p4[1]||s.x+q>=t.p1[0]&&s.y+n>=t.p1[1]&&s.x+q>=t.p2[0]&&s.y+n<=t.p2[1]&&s.x+q<=t.p3[0]&&s.y+n>=t.p3[1]&&s.x+q<=t.p4[0]&&s.y+n<=t.p4[1])&&(o=!0,N.resetOtherShoot(t));break;case"D":(s.x>=t.p1[0]&&s.y+q>=t.p1[1]&&s.x<=t.p3[0]&&s.y+q>=t.p3[1]&&s.x>=t.p2[0]&&s.y+q<=t.p2[1]&&s.x<=t.p4[0]&&s.y+q<=t.p4[1]||s.x+n>=t.p1[0]&&s.y+q>=t.p1[1]&&s.x+n<=t.p3[0]&&s.y+q>=t.p3[1]&&s.x+n>=t.p2[0]&&s.y+q<=t.p2[1]&&s.x+n<=t.p4[0]&&s.y+q<=t.p4[1])&&(o=!0,N.resetOtherShoot(t));break;case"L":(s.x<=t.p3[0]&&s.y>=t.p3[1]&&s.x<=t.p4[0]&&s.y<=t.p4[1]&&s.x>=t.p1[0]&&s.y>=t.p1[1]&&s.x>=t.p2[0]&&s.y<=t.p2[1]||s.x<=t.p3[0]&&s.y+n>=t.p3[1]&&s.x<=t.p4[0]&&s.y+n<=t.p4[1]&&s.x>=t.p1[0]&&s.y+n>=t.p1[1]&&s.x>=t.p2[0]&&s.y+n<=t.p2[1])&&(o=!0,N.resetOtherShoot(t));break;default:break}})),o},this.friendlyEnemieColision=function(t,i){var e=_.objList.slice(),s=this.objList[t-1],o=!1;return e.forEach((function(t){if(!t.itself.isDead)switch(i){case"U":(s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]||s.p3[0]>=t.p2[0]&&s.p3[1]<=t.p2[1]&&s.p3[0]<=t.p4[0]&&s.p3[1]<=t.p4[1]&&s.p3[0]>=t.p1[0]&&s.p3[1]>=t.p1[1]&&s.p3[0]<=t.p3[0]&&s.p3[1]>=t.p3[1])&&(o=!0);break;case"R":(s.p3[0]>=t.p1[0]&&s.p3[1]>=t.p1[1]&&s.p3[0]>=t.p2[0]&&s.p3[1]<=t.p2[1]&&s.p3[0]<=t.p3[0]&&s.p3[1]>=t.p3[1]&&s.p3[0]<=t.p4[0]&&s.p3[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0);break;case"D":(s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]||s.p4[0]>=t.p1[0]&&s.p4[1]>=t.p1[1]&&s.p4[0]<=t.p3[0]&&s.p4[1]>=t.p3[1]&&s.p4[0]>=t.p2[0]&&s.p4[1]<=t.p2[1]&&s.p4[0]<=t.p4[0]&&s.p4[1]<=t.p4[1])&&(o=!0);break;case"L":(s.p1[0]<=t.p3[0]&&s.p1[1]>=t.p3[1]&&s.p1[0]<=t.p4[0]&&s.p1[1]<=t.p4[1]&&s.p1[0]>=t.p1[0]&&s.p1[1]>=t.p1[1]&&s.p1[0]>=t.p2[0]&&s.p1[1]<=t.p2[1]||s.p2[0]<=t.p3[0]&&s.p2[1]>=t.p3[1]&&s.p2[0]<=t.p4[0]&&s.p2[1]<=t.p4[1]&&s.p2[0]>=t.p1[0]&&s.p2[1]>=t.p1[1]&&s.p2[0]>=t.p2[0]&&s.p2[1]<=t.p2[1])&&(o=!0);break;default:break}})),o},this.enemieColision=function(t,i){var e=_.objList.slice(),s=t,o=!1,n=pt-2*z;return e.forEach((function(t){if(!t.itself.isDead)switch(i){case"U":(s.x>=t.p2[0]&&s.y<=t.p2[1]&&s.x<=t.p4[0]&&s.y<=t.p4[1]&&s.x>=t.p1[0]&&s.y>=t.p1[1]&&s.x<=t.p3[0]&&s.y>=t.p3[1]||s.x+n>=t.p2[0]&&s.y<=t.p2[1]&&s.x+n<=t.p4[0]&&s.y<=t.p4[1]&&s.x+n>=t.p1[0]&&s.y>=t.p1[1]&&s.x+n<=t.p3[0]&&s.y>=t.p3[1])&&(o=!0,_.objList[t.itself.index-1].itself.isDead=!0,N.objList[t.itself.index-1].itself.crashed=!0);break;case"R":(s.x+q>=t.p1[0]&&s.y>=t.p1[1]&&s.x+q>=t.p2[0]&&s.y<=t.p2[1]&&s.x+q<=t.p3[0]&&s.y>=t.p3[1]&&s.x+q<=t.p4[0]&&s.y<=t.p4[1]||s.x+q>=t.p1[0]&&s.y+n>=t.p1[1]&&s.x+q>=t.p2[0]&&s.y+n<=t.p2[1]&&s.x+q<=t.p3[0]&&s.y+n>=t.p3[1]&&s.x+q<=t.p4[0]&&s.y+n<=t.p4[1])&&(o=!0,_.objList[t.itself.index-1].itself.isDead=!0,N.objList[t.itself.index-1].itself.crashed=!0);break;case"D":(s.x>=t.p1[0]&&s.y+q>=t.p1[1]&&s.x<=t.p3[0]&&s.y+q>=t.p3[1]&&s.x>=t.p2[0]&&s.y+q<=t.p2[1]&&s.x<=t.p4[0]&&s.y+q<=t.p4[1]||s.x+n>=t.p1[0]&&s.y+q>=t.p1[1]&&s.x+n<=t.p3[0]&&s.y+q>=t.p3[1]&&s.x+n>=t.p2[0]&&s.y+q<=t.p2[1]&&s.x+n<=t.p4[0]&&s.y+q<=t.p4[1])&&(o=!0,_.objList[t.itself.index-1].itself.isDead=!0,N.objList[t.itself.index-1].itself.crashed=!0);break;case"L":(s.x<=t.p3[0]&&s.y>=t.p3[1]&&s.x<=t.p4[0]&&s.y<=t.p4[1]&&s.x>=t.p1[0]&&s.y>=t.p1[1]&&s.x>=t.p2[0]&&s.y<=t.p2[1]||s.x<=t.p3[0]&&s.y+n>=t.p3[1]&&s.x<=t.p4[0]&&s.y+n<=t.p4[1]&&s.x>=t.p1[0]&&s.y+n>=t.p1[1]&&s.x>=t.p2[0]&&s.y+n<=t.p2[1])&&(o=!0,_.objList[t.itself.index-1].itself.isDead=!0,N.objList[t.itself.index-1].itself.crashed=!0);break;default:break}})),o}},Rt=function(){this.x,this.y,this.orientation,this.indexFather,this.velocity,this.crashed=!1,this.isMain=!1,this.color,this.createForEnemie=function(t,i,e,s,o,n){return this.x=t,this.y=i,this.orientation=o,this.indexFather=N.addShoot(this,e),this.velocity=s,this.color=n,this},this.createForMain=function(t,i,e,s){return this.x=t,this.y=i,this.orientation=s,this.velocity=e,this.isMain=!0,this.color="#FF0000",this},this.colision=function(t,i){var e,s,o=!1;return e=parseInt(t/pt),s=parseInt(i/pt),(e<0||e>=rt||s<0||s>=rt||1==Ft[s][e])&&(o=!0),o},this.colisionObject=function(t){return this.isMain?N.shootColision(this,t)||N.enemieColision(this,t):N.friendlyShootColision(this.indexFather,t)||N.friendlyEnemieColision(this.indexFather,t)},this.up=function(){this.y>0&&!this.colision(this.x,this.y-1)&&!this.colision(this.x+(pt-2*z)-1,this.y-1)&&!this.colisionObject("U")?this.y-=this.velocity:this.crashed=!0},this.down=function(){this.y+q<J&&!this.colision(this.x,this.y+q+1)&&!this.colision(this.x+(pt-2*z)-1,this.y+q+1)&&!this.colisionObject("D")?this.y+=this.velocity:this.crashed=!0},this.left=function(){this.x>0&&!this.colision(this.x-1,this.y)&&!this.colision(this.x-1,this.y+(pt-2*z)-1)&&!this.colisionObject("L")?this.x-=this.velocity:this.crashed=!0},this.right=function(){this.x+q<J&&!this.colision(this.x+q,this.y)&&!this.colision(this.x+q,this.y+(pt-2*z)-1)&&!this.colisionObject("R")?this.x+=this.velocity:this.crashed=!0},this.mainTouched=function(){var t=N.objList[this.indexFather-1];switch(this.orientation){case"U":(t.p1[0]>=W.x&&t.p1[1]<=W.y+pt&&t.p1[0]<=W.x+pt&&t.p1[1]<=W.y+pt&&t.p1[0]>=W.x&&t.p1[1]>=W.y&&t.p1[0]<=W.x+pt&&t.p1[1]>=W.y||t.p3[0]>=W.x&&t.p1[1]<=W.y+pt&&t.p3[0]<=W.x+pt&&t.p1[1]<=W.y+pt&&t.p3[0]>=W.x&&t.p1[1]>=W.y&&t.p3[0]<=W.x+pt&&t.p1[1]>=W.y)&&(W.resetMain(),N.resetOwnShoot(t),Dt(!1));break;case"R":(t.p3[0]>=W.x&&t.p3[1]>=W.y&&t.p3[0]>=W.x&&t.p3[1]<=W.y+pt&&t.p3[0]<=W.x+pt&&t.p3[1]>=W.y&&t.p3[0]<=W.x+pt&&t.p3[1]<=W.y+pt||t.p4[0]>=W.x&&t.p4[1]>=W.y&&t.p4[0]>=W.x&&t.p4[1]<=W.y+pt&&t.p4[0]<=W.x+pt&&t.p4[1]>=W.y&&t.p4[0]<=W.x+pt&&t.p4[1]<=W.y+pt)&&(W.resetMain(),N.resetOwnShoot(t),Dt(!1));break;case"D":(t.p2[0]>=W.x&&t.p2[1]>=W.y&&t.p2[0]<=W.x+pt&&t.p2[1]>=W.y&&t.p2[0]>=W.x&&t.p2[1]<=W.y+pt&&t.p2[0]<=W.x+pt&&t.p2[1]<=W.y+pt||t.p4[0]>=W.x&&t.p4[1]>=W.y&&t.p4[0]<=W.x+pt&&t.p4[1]>=W.y&&t.p4[0]>=W.x&&t.p4[1]<=W.y+pt&&t.p4[0]<=W.x+pt&&t.p4[1]<=W.y+pt)&&(W.resetMain(),N.resetOwnShoot(t),Dt(!1));break;case"L":(t.p1[0]<=W.x+pt&&t.p1[1]>=W.y&&t.p1[0]<=W.x+pt&&t.p1[1]<=W.y+pt&&t.p1[0]>=W.x&&t.p1[1]>=W.y&&t.p1[0]>=W.x&&t.p1[1]<=W.y+pt||t.p2[0]<=W.x+pt&&t.p2[1]>=W.y&&t.p2[0]<=W.x+pt&&t.p2[1]<=W.y+pt&&t.p2[0]>=W.x&&t.p2[1]>=W.y&&t.p2[0]>=W.x&&t.p2[1]<=W.y+pt)&&(W.resetMain(),N.resetOwnShoot(t),Dt(!1));break;default:break}},this.move=function(){switch(this.orientation){case"U":this.up();break;case"D":this.down();break;case"L":this.left();break;case"R":this.right();break;default:break}this.isMain||(N.updatePositions(this.indexFather,this.x,this.y,this.orientation),this.mainTouched())},this.draw=function(){switch(U.fillStyle=this.color,this.orientation){case"U":U.fillRect(this.x,this.y,pt-2*z,q);break;case"D":U.fillRect(this.x,this.y,pt-2*z,q);break;case"L":U.fillRect(this.x,this.y,q,pt-2*z);break;case"R":U.fillRect(this.x,this.y,q,pt-2*z);break}}},Mt=function(t,i,e){this.x=t,this.y=i,this.idxImg=e,this.index=_.addEnemie(this),this.space=ot[bt],this.orientation="D",this.ownShoot=(new Rt).createForEnemie(this.x+z,this.y+pt,this.index,nt[bt],this.orientation,Ot[this.idxImg].color),this.existingShoot=!0,this.count=at,this.isDead=!1,this.colision=function(t,i){var e,s,o=!1;return e=parseInt(t/pt),s=parseInt(i/pt),(e<0||e>=rt||s<0||s>=rt||1==Ft[s][e])&&(o=!0),o},this.removeDataFromArray=function(t,i){var e=i.indexOf(t);i.splice(e,1)},this.up=function(){var t=["U","R","L"],i=!1,e=!1,s=!1;this.y>0&&!this.colision(this.x,this.y-1)&&!this.colision(this.x+pt-1,this.y-1)&&!_.friendlyColision(this.index,"U")?this.y-=this.space:i=!0,e=this.x+pt>=J||this.colision(this.x+pt,this.y)||this.colision(this.x+pt,this.y+pt-1)||_.friendlyColision(this.index,"R"),s=this.x<=0||this.colision(this.x-1,this.y)||this.colision(this.x-1,this.y+pt-1)||_.friendlyColision(this.index,"L"),i&&this.removeDataFromArray("U",t),e&&this.removeDataFromArray("R",t),s&&this.removeDataFromArray("L",t),_.friendlyColision(this.index,"U")&&t.push("D"),t.length<=0&&t.push("D"),this.orientation=t[Math.floor(Math.random()*t.length)]},this.down=function(){var t=["D","R","L"],i=!1,e=!1,s=!1;this.y+pt<J&&!this.colision(this.x,this.y+pt+1)&&!this.colision(this.x+pt-1,this.y+pt+1)&&!_.friendlyColision(this.index,"D")?this.y+=this.space:i=!0,e=this.x+pt>=J||this.colision(this.x+pt,this.y)||this.colision(this.x+pt,this.y+pt-1)||_.friendlyColision(this.index,"R"),s=this.x<=0||this.colision(this.x-1,this.y)||this.colision(this.x-1,this.y+pt-1)||_.friendlyColision(this.index,"L"),i&&this.removeDataFromArray("D",t),e&&this.removeDataFromArray("R",t),s&&this.removeDataFromArray("L",t),_.friendlyColision(this.index,"D")&&t.push("U"),t.length<=0&&t.push("U"),this.orientation=t[Math.floor(Math.random()*t.length)]},this.left=function(){var t=["L","U","D"],i=!1,e=!1,s=!1;this.x>0&&!this.colision(this.x-1,this.y)&&!this.colision(this.x-1,this.y+pt-1)&&!_.friendlyColision(this.index,"L")?this.x-=this.space:i=!0,e=this.y<=0||this.colision(this.x,this.y-1)||this.colision(this.x+pt-1,this.y-1)||_.friendlyColision(this.index,"U"),s=this.y+pt>=J||this.colision(this.x,this.y+pt+1)||this.colision(this.x+pt-1,this.y+pt+1)||_.friendlyColision(this.index,"D"),i&&this.removeDataFromArray("L",t),e&&this.removeDataFromArray("U",t),s&&this.removeDataFromArray("D",t),_.friendlyColision(this.index,"L")&&t.push("R"),t.length<=0&&t.push("R"),this.orientation=t[Math.floor(Math.random()*t.length)]},this.right=function(){var t=["R","U","D"],i=!1,e=!1,s=!1;this.x+pt<J&&!this.colision(this.x+pt,this.y)&&!this.colision(this.x+pt,this.y+pt-1)&&!_.friendlyColision(this.index,"R")?this.x+=this.space:i=!0,e=this.y<=0||this.colision(this.x,this.y-1)||this.colision(this.x+pt-1,this.y-1)||_.friendlyColision(this.index,"U"),s=this.y+pt>=J||this.colision(this.x,this.y+pt+1)||this.colision(this.x+pt-1,this.y+pt+1)||_.friendlyColision(this.index,"D"),i&&this.removeDataFromArray("R",t),e&&this.removeDataFromArray("U",t),s&&this.removeDataFromArray("D",t),_.friendlyColision(this.index,"R")&&t.push("L"),t.length<=0&&t.push("L"),this.orientation=t[Math.floor(Math.random()*t.length)]},this.mainTouched=function(){var t=_.objList[this.index-1];switch(this.orientation){case"U":(t.p1[0]+G>=W.x+G&&t.p1[1]+G<=W.y+pt-G&&t.p1[0]+G<=W.x+pt-G&&t.p1[1]+G<=W.y+pt-G&&t.p1[0]+G>=W.x+G&&t.p1[1]+G>=W.y+G&&t.p1[0]+G<=W.x+pt-G&&t.p1[1]+G>=W.y+G||t.p3[0]-G>=W.x+G&&t.p3[1]+G<=W.y+pt-G&&t.p3[0]-G<=W.x+pt-G&&t.p3[1]+G<=W.y+pt-G&&t.p3[0]-G>=W.x+G&&t.p3[1]+G>=W.y+G&&t.p3[0]-G<=W.x+pt-G&&t.p3[1]+G>=W.y+G)&&(W.resetMain(),Dt(!1));break;case"R":(t.p3[0]-G>=W.x+G&&t.p3[1]+G>=W.y+G&&t.p3[0]-G>=W.x+G&&t.p3[1]+G<=W.y+pt-G&&t.p3[0]-G<=W.x+pt-G&&t.p3[1]+G>=W.y+G&&t.p3[0]-G<=W.x+pt-G&&t.p3[1]+G<=W.y+pt-G||t.p4[0]-G>=W.x+G&&t.p4[1]-G>=W.y+G&&t.p4[0]-G>=W.x+G&&t.p4[1]-G<=W.y+pt-G&&t.p4[0]-G<=W.x+pt-G&&t.p4[1]-G>=W.y+G&&t.p4[0]-G<=W.x+pt-G&&t.p4[1]-G<=W.y+pt-G)&&(W.resetMain(),Dt(!1));break;case"D":(t.p2[0]+G>=W.x+G&&t.p2[1]-G>=W.y+G&&t.p2[0]+G<=W.x+pt-G&&t.p2[1]-G>=W.y+G&&t.p2[0]+G>=W.x+G&&t.p2[1]-G<=W.y+pt-G&&t.p2[0]+G<=W.x+pt-G&&t.p2[1]-G<=W.y+pt-G||t.p4[0]-G>=W.x+G&&t.p4[1]-G>=W.y+G&&t.p4[0]-G<=W.x+pt-G&&t.p4[1]-G>=W.y+G&&t.p4[0]-G>=W.x+G&&t.p4[1]-G<=W.y+pt-G&&t.p4[0]-G<=W.x+pt-G&&t.p4[1]-G<=W.y+pt-G)&&(W.resetMain(),Dt(!1));break;case"L":(t.p1[0]+G<=W.x+pt-G&&t.p1[1]+G>=W.y+G&&t.p1[0]+G<=W.x+pt-G&&t.p1[1]+G<=W.y+pt-G&&t.p1[0]+G>=W.x+G&&t.p1[1]+G>=W.y+G&&t.p1[0]+G>=W.x+G&&t.p1[1]+G<=W.y+pt-G||t.p2[0]+G<=W.x+pt-G&&t.p2[1]-G>=W.y+G&&t.p2[0]+G<=W.x+pt-G&&t.p2[1]-G<=W.y+pt-G&&t.p2[0]+G>=W.x+G&&t.p2[1]-G>=W.y+G&&t.p2[0]+G>=W.x+G&&t.p2[1]-G<=W.y+pt-G)&&(W.resetMain(),Dt(!1));break;default:break}},this.move=function(){switch(this.orientation){case"U":this.up();break;case"R":this.right();break;case"D":this.down();break;case"L":this.left();break;default:break}_.updatePositions(this.index,this.x,this.y),this.mainTouched()},this.resetShoot=function(){if(0==this.count){switch(this.orientation){case"U":this.ownShoot=(new Rt).createForEnemie(this.x+z,this.y-q,this.index,nt[bt],this.orientation,Ot[this.idxImg].color);break;case"R":this.ownShoot=(new Rt).createForEnemie(this.x+pt,this.y+z,this.index,nt[bt],this.orientation,Ot[this.idxImg].color);break;case"D":this.ownShoot=(new Rt).createForEnemie(this.x+z,this.y+pt,this.index,nt[bt],this.orientation,Ot[this.idxImg].color);break;case"L":this.ownShoot=(new Rt).createForEnemie(this.x-q,this.y+z,this.index,nt[bt],this.orientation,Ot[this.idxImg].color);break;default:break}this.existingShoot=!0,this.count=at}else this.count--},this.draw=function(){U.drawImage(Ot[this.idxImg].imgObj,this.x+G,this.y+G,pt-2*G,pt-2*G),this.existingShoot?(this.ownShoot.draw(),this.ownShoot.move(),this.ownShoot.crashed&&(this.ownShoot=null,this.existingShoot=!1)):this.resetShoot(),this.move()}},Et=function(){this.x=0,this.y=pt*(rt-1),this.space=ot[bt],this.orientation,this.nextOrientation,this.posibleOrientation,this.isAchieveReorientation=!1,this.isKeepGoing=!1,this.ownShoot,this.existingShoot=!1,this.resetMain=function(){this.x=0,this.y=pt*(rt-1),this.space=4},this.createShoot=function(){if(this.orientation&&!this.existingShoot){switch(this.orientation){case"U":this.ownShoot=(new Rt).createForMain(this.x+z,this.y-q,nt[bt],this.orientation);break;case"R":this.ownShoot=(new Rt).createForMain(this.x+pt,this.y+z,nt[bt],this.orientation);break;case"D":this.ownShoot=(new Rt).createForMain(this.x+z,this.y+pt,nt[bt],this.orientation);break;case"L":this.ownShoot=(new Rt).createForMain(this.x-q,this.y+z,nt[bt],this.orientation);break;default:break}this.existingShoot=!0}},this.colision=function(t,i){var e=!1;return 1==Ft[parseInt(i/pt)][parseInt(t/pt)]&&(e=!0),e},this.proceedToMove=function(t){switch(t){case"U":this.y-=this.space;break;case"D":this.y+=this.space;break;case"L":this.x-=this.space;break;case"R":this.x+=this.space;break;default:break}this.orientation=t},this.up=function(){this.y>0&&!this.colision(this.x,this.y-1)&&!this.colision(this.x+pt-1,this.y-1)&&this.proceedToMove("U")},this.down=function(){this.y+pt<J&&!this.colision(this.x,this.y+pt+1)&&!this.colision(this.x+pt-1,this.y+pt+1)&&this.proceedToMove("D")},this.left=function(){this.x>0&&!this.colision(this.x-1,this.y)&&!this.colision(this.x-1,this.y+pt-1)&&this.proceedToMove("L")},this.right=function(){this.x+pt<J&&!this.colision(this.x+pt,this.y)&&!this.colision(this.x+pt,this.y+pt-1)&&this.proceedToMove("R")},this.move=function(){var t;switch(t=this.posibleOrientation,t){case"U":this.up();break;case"R":this.right();break;case"D":this.down();break;case"L":this.left();break;default:break}},this.draw=function(){U.drawImage(A,this.x+G,this.y+G,pt-2*G,pt-2*G),this.existingShoot&&(this.ownShoot.draw(),this.ownShoot.move(),this.ownShoot.crashed&&(this.ownShoot=null,this.existingShoot=!1))}};function Ut(){for(var t=0;t<rt;t++)for(var i=0;i<rt;i++){var e=Ft[t][i];U.fillStyle=0!=e?"#062D80":"#5E5897",U.fillRect(i*pt,t*pt,pt,pt)}}function At(){for(var t=0,i=0;i<ht;i++){var e=2*i*pt;new Mt(e,0,t),t<Ot.length-1?t++:t=0}}function Bt(){W.up()}function Tt(){W.down()}function Pt(){W.left()}function Ht(){W.right()}function Wt(){W.createShoot()}function _t(){xt||(yt=!0,n.change(!0)),xt&&ft==mt&&(lt=!0,xt=!1,clearInterval(H),H=null,St(),Nt())}function Nt(){lt&&(lt=!1,yt=!1,ut=!1,n.change(!1),Gt())}function qt(){E.width=J,E.height=J}function zt(){var t=!0;K[68]&&Ht(),K[65]&&Pt(),K[83]&&Tt(),K[87]&&Bt(),W.draw(),_.objList.forEach((function(i){i.itself.isDead||(i.itself.draw(),t=!1)})),t&&Dt(!0)}function Gt(){E=document.getElementById("canvas"),U=E.getContext("2d"),dt||(console.log("Width: "+document.getElementById("area").offsetWidth+" Height: "+(E.height-document.getElementById("area").getBoundingClientRect().y-50)),wt=document.getElementById("area").offsetWidth<=E.height-document.getElementById("area").getBoundingClientRect().y-50?document.getElementById("area").offsetWidth:E.height-document.getElementById("area").getBoundingClientRect().y-50,wt=10*parseInt(.95*wt/10),dt=!0),kt(),E.style.width=J,E.style.height=J,_=new Ct,N=new It,W=new Et,K={},yt=!1,n.change(!1),ct.simple_combo("enter",_t),ct.simple_combo("space",Wt),document.addEventListener("keydown",(function(t){K[t.which]=!0})),document.addEventListener("keyup",(function(t){delete K[t.which]})),At(),H=setInterval((function(){qt(),Ut(),!lt&&yt?zt():lt&&(clearInterval(H),ut?ut&&ft==mt?(gt.value="Has terminado, muchas gracias por jugar, si quieres jugar de nuevo, presiona Enter.",xt=!0):gt.value="Has ganado, pasarás al siguiente nivel.":(gt.value="Has perdido con "+ft+" juegos ganados.",ft=0),vt.value<=mt&&Nt())}),1e3/st)}function Jt(){clearInterval(H)}function Kt(){return{nivelActual:vt,msgNivel:gt,maxLong:jt}}var Vt={props:{height:Number},setup:function(t){var i=t.height,e=Object(s["v"])(i);return Object(s["q"])((function(){Gt()})),Object(s["o"])((function(){return Jt()})),Object(V["a"])({heightC:e},Kt())}};Vt.render=M;var Qt=Vt,Xt={name:"Home",components:{HelloWorld:f,Instructions:k,Game:Qt},setup:function(){var t=Object(s["c"])((function(){return screen.availHeight}));return{heightScreen:t}}};Xt.render=l;var Yt=Xt,Zt=[{path:"/",name:"Home",component:Yt},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],$t=Object(a["a"])({history:Object(a["b"])("/poliseo/"),routes:Zt}),ti=$t;Object(s["d"])(r).use(ti).mount("#app")},"78b8":function(t,i,e){},9245:function(t,i,e){t.exports=e.p+"img/blastoise.3f8caecd.png"},"987f":function(t,i,e){t.exports=e.p+"img/venasaur.195345af.png"},c407:function(t,i,e){t.exports=e.p+"img/pikachu.76f027c1.png"},caf7:function(t,i,e){t.exports=e.p+"img/charizard.c9f736f4.png"}});
//# sourceMappingURL=app.562fc5c2.js.map