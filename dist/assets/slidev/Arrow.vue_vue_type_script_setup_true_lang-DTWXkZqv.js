import{d as c,t as u,a4 as p,o as d,b as k,e as o,m,I as i,g as f}from"../modules/vue-DHi3ot2U.js";import{Y as h}from"../index-DTUbufRV.js";const b=["width","height"],w=["id"],g=["fill"],v=["id"],$=["fill"],C=["x1","y1","x2","y2","stroke","stroke-width","marker-end","marker-start"],W=["x1","y1","x2","y2"],O=c({__name:"Arrow",props:{x1:{},y1:{},x2:{},y2:{},width:{},color:{},twoWay:{type:Boolean}},emits:["dblclick","clickOutside"],setup(A,{emit:y}){const t=y,l=h(),n={markerUnits:"strokeWidth",markerHeight:7,refY:3.5,orient:"auto"},a=u();return p(a,()=>t("clickOutside")),(e,r)=>(d(),k("svg",{class:"absolute left-0 top-0",width:Math.max(+e.x1,+e.x2)+50,height:Math.max(+e.y1,+e.y2)+50},[o("defs",null,[o("marker",m({id:i(l),markerWidth:"10",refX:"9"},n),[o("polygon",{points:"0 0, 10 3.5, 0 7",fill:e.color||"currentColor",onDblclick:r[0]||(r[0]=s=>t("dblclick"))},null,40,g)],16,w),e.twoWay?(d(),k("marker",m({key:0,id:`${i(l)}-rev`,markerWidth:"20",refX:"11"},n),[o("polygon",{points:"20 0, 10 3.5, 20 7",fill:e.color||"currentColor",onDblclick:r[1]||(r[1]=s=>t("dblclick"))},null,40,$)],16,v)):f("v-if",!0)]),o("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:e.color||"currentColor","stroke-width":e.width||2,"marker-end":`url(#${i(l)})`,"marker-start":e.twoWay?`url(#${i(l)}-rev)`:"none",onDblclick:r[2]||(r[2]=s=>t("dblclick"))},null,40,C),o("line",{ref_key:"clickArea",ref:a,x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"transparent","stroke-linecap":"round","stroke-width":20,onDblclick:r[3]||(r[3]=s=>t("dblclick"))},null,40,W)],8,b))}});export{O as _};
