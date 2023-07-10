import{d,i as _,a as p,u,b as h,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as y,o as i,k as b,l as N,m as k,p as D,q as P,_ as V}from"./index-fe02f03d.js";import{N as w}from"./NoteDisplay-71566043.js";const C={class:"m-4"},S={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-gray-400/50 mb-8"},E=d({__name:"PresenterPrint",setup(F){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=f(()=>y.slice(0,-1).map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(i(),n("div",{id:"page-root",style:x(a(P))},[t("div",C,[t("div",S,[t("h1",j,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(i(!0),n(g,null,v(a(l),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",H,o(e==null?void 0:e.no)+"/"+o(a(b)),1),N(" "+o(e==null?void 0:e.title)+" ",1),z])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(i(),n("hr",A)):D("v-if",!0)]))),128))])],4))}}),q=V(E,[["__file","C:/Users/tddia/OneDrive - Delicious Insights/Bureau/Conferences et Articles/RivieraDEV 2023/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{q as default};
