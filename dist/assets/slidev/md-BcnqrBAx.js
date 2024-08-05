import{d as g,z as x,o as a,b as _,f as T,h as A,t as k,S,c as C,k as m,e,l as h,x as b,g as f,m as y,q as N,s as V,I as w,aa as u}from"../modules/vue-DHi3ot2U.js";import{C as F}from"../modules/unplugin-icons-D1hvqpAP.js";import{f as P}from"../monaco/bundled-types-CpkQVRP8.js";import{u as $,f as z}from"./context-CFopLDfk.js";import{_ as E}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-TPit4CqL.js";import{I}from"./default-PBBEjl57.js";import"../modules/file-saver-igGfcqei.js";import"../index-DTUbufRV.js";import"../modules/shiki-CJwp1GBl.js";const j=g({__name:"Transform",props:{scale:{},origin:{}},setup(n){const t=n,o=x(()=>{const s=[];return t.scale!=null&&s.push(`scale(${t.scale||1})`),{transform:s.join(" "),"transform-origin":t.origin||"top left"}});return(s,i)=>(a(),_("div",{style:A(o.value)},[T(s.$slots,"default")],4))}}),W={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},Y={class:"m-auto animate-pulse text-4xl"},q={key:0},L=g({__name:"Tweet",props:{id:{},scale:{},conversation:{},cards:{}},setup(n){const t=n,o=k(),s=k(!1),i=k(!1);async function r(l=10){var c,d;if(!((d=(c=window.twttr)==null?void 0:c.widgets)!=null&&d.createTweet)){if(l<=0)return console.error("Failed to load Twitter widget after 10 retries.");setTimeout(()=>r(l-1),1e3);return}const p=await window.twttr.widgets.createTweet(t.id.toString(),o.value,{theme:P.value?"dark":"light",conversation:t.conversation||"none",cards:t.cards});s.value=!0,p===void 0&&(i.value=!0)}return S(()=>{r()}),(l,p)=>{const c=F,d=j;return a(),C(d,{scale:l.scale||1},{default:m(()=>[e("div",{ref_key:"tweet",ref:o,class:"tweet slidev-tweet"},[!s.value||i.value?(a(),_("div",W,[e("div",Y,[h(c),i.value?(a(),_("span",q,'Could not load tweet with id="'+b(t.id)+'"',1)):f("v-if",!0)])])):f("v-if",!0)],512)]),_:1},8,["scale"])}}}),M={flex:"~",w:"min",border:"~ main rounded-md"},R={m:"auto",p:"2"},G=g({__name:"Counter",props:{count:{default:0}},setup(n){$();const o=k(n.count);return(s,i)=>(a(),_("div",M,[e("button",{border:"r main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:i[0]||(i[0]=r=>o.value-=1)}," - "),e("span",R,b(o.value),1),e("button",{border:"l main",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:i[1]||(i[1]=r=>o.value+=1)}," + ")]))}}),H=e("h1",null,"Components",-1),J={grid:"~ cols-2 gap-4"},K=e("p",null,"You can use Vue components directly inside your slides.",-1),O=e("p",null,[u("We have provided a few built-in components like "),e("code",null,"<Tweet/>"),u(" and "),e("code",null,"<Youtube/>"),u(" that you can use directly. And adding your custom components is also super easy.")],-1),Q=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Counter"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," :count"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"10"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1),U=e("p",null,[u("Check out "),e("a",{href:"https://sli.dev/builtin/components.html",target:"_blank"},"the guides"),u(" for more.")],-1),X=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Tweet"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1390115482657726468"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1),Z={__name:"slides.md__slidev_10",setup(n){const{$slidev:t,$nav:o,$clicksContext:s,$clicks:i,$page:r,$renderContext:l,$frontmatter:p}=$();return s.setup(),(c,d)=>{const v=E,B=G,D=L;return a(),C(I,N(V(w(z)(w(p),9))),{default:m(()=>[H,e("div",J,[e("div",null,[K,O,h(v,y({},{ranges:[]}),{default:m(()=>[Q]),_:1},16),f(" ./components/Counter.vue "),h(B,{count:10,m:"t-4"}),U]),e("div",null,[h(v,y({},{ranges:[]}),{default:m(()=>[X]),_:1},16),h(D,{id:"1390115482657726468",scale:"0.65"})])])]),_:1},16)}}},ce=Z;export{ce as default};
