import{d as w,S as M,U as L,o as u,c as V,F as P,aB as S,v as o,aC as b,aD as G,l as C,ae as g,aE as R,k as A,b as N,m as E,e,aa as c,q as U,s as Y,I}from"../modules/vue-DHi3ot2U.js";import{Y as j,$ as q,C as K}from"../index-DTUbufRV.js";import{k as O}from"../monaco/bundled-types-CpkQVRP8.js";import{u as z,f as W}from"./context-CFopLDfk.js";import{_ as X}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-TPit4CqL.js";import{I as H}from"./default-PBBEjl57.js";import"../modules/shiki-CJwp1GBl.js";import"../modules/file-saver-igGfcqei.js";import"../modules/unplugin-icons-D1hvqpAP.js";const J=w({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(n){const a=n,{$clicksContext:r}=z(),k=j();let h=+a.size;return Number.isNaN(h)&&(console.warn(`[slidev] Invalid size for VClickGap: ${a.size}`),h=1),M(()=>{const d=r.currentOffset+h-1;r.register(k,{max:d,delta:h})}),L(()=>{r.unregister(k)}),(d,i)=>(u(),V(P))}}),T=["ul","ol"],Q=w({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var m,_;const n=+this.every,a=q(this.at),r=typeof a=="string";if(!a){console.warn("[slidev] Invalid at prop for v-clicks component:",a);return}const k=S("click"),h=(l,t)=>g(l,[[k,t,"",{hide:this.hide,fade:this.fade}]]),d=l=>l.flatMap(t=>b(t)&&typeof t.type=="symbol"&&Array.isArray(t.children)?d(t.children):[t]);let i=(_=(m=this.$slots).default)==null?void 0:_.call(m);if(!i)return;i=d(O(i));const x=(l,t=1)=>d(l).map(s=>{if(!b(s))return s;if(T.includes(s.type)&&Array.isArray(s.children)){const y=p(s.children,t+1);return o(s,{},y)}return o(s)});let B=1,v=0;const p=(l,t=1)=>d(l).map(s=>{if(!b(s)||s.type===G)return s;const y=+a+Math.ceil(B++/n)-1;let $;t<+this.depth&&Array.isArray(s.children)?$=o(s,{},x(s.children,t)):$=o(s);const D=y-v;return v=y,h($,r?D>=0?`+${D}`:`${D}`:y)}),f=()=>C(J,{size:+a+Math.ceil((B-1)/n)-1-v});if(this.handleSpecialElements){if(i.length===1&&T.includes(i[0].type)&&Array.isArray(i[0].children))return o(i[0],{},[...p(i[0].children),f()]);if(i.length===1&&i[0].type==="table"){const l=i[0];if(Array.isArray(l.children))return o(l,{},l.children.map(t=>b(t)?t.type==="tbody"&&Array.isArray(t.children)?o(t,{},[...p(t.children),f()]):o(t):t))}}return[...p(i),f()]}}),Z=w({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:n=>o("span",n)}},render(){return o(Q,{every:K,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var n,a;return(a=(n=this.$slots).default)==null?void 0:a.call(n).map(r=>r.type===R?this.wrapText(r):r)}})}}),ee=e("h1",null,"Clicks Animations",-1),te=e("p",null,[c("You can add "),e("code",null,"v-click"),c(" to elements to add a click animation.")],-1),se=e("p",null,"This shows up when you click the slide:",-1),ie=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," v-click"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),e("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"This shows up when you click the slide."),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"div"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),ae=e("br",null,null,-1),le=e("code",null,"v-mark",-1),ne=e("a",{href:"https://roughnotation.com/",target:"_blank"},"Rough Notation",-1),re=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"span"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," v-mark.underline.orange"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),e("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"inline markers"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),e("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"span"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),oe={"mt-20":""},de=e("p",null,[e("a",{href:"https://sli.dev/guide/animations#click-animation",target:"_blank"},"Learn More")],-1),ce=[de],he={__name:"slides.md__slidev_12",setup(n){const{$slidev:a,$nav:r,$clicksContext:k,$clicks:h,$page:d,$renderContext:i,$frontmatter:x}=z();return k.setup(),(B,v)=>{const p=X,f=Z,m=S("click"),_=S("mark");return u(),V(H,U(Y(I(W)(I(x),11))),{default:A(()=>[ee,te,g((u(),N("div",null,[se,C(p,E({},{ranges:[]}),{default:A(()=>[ie]),_:1},16)])),[[m]]),ae,C(f,null,{default:A(()=>[e("p",null,[c("The "),g((u(),N("span",null,[le,c(" directive")])),[[_,3,void 0,{red:!0}]]),c(" also allows you to add "),g((u(),N("span",null,[c("inline marks")])),[[_,4,void 0,{circle:!0,orange:!0}]]),c(" , powered by "),ne,c(":")]),C(p,E({},{ranges:[]}),{default:A(()=>[re]),_:1},16)]),_:1}),g((u(),N("div",oe,ce)),[[m]])]),_:1},16)}}},be=he;export{be as default};
