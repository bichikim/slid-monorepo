import{f as d,h as _,j as p,ag as h,c as m,ah as u,l as n,ai as t,aj as a,y as o,F as f,ak as g,al as v,am as x,n as i,an as y,ao as b,m as N,ap as k,aq as w,_ as P}from"./nav-d3d08bc9.js";import{N as V}from"./NoteViewer-ce7fd3a7.js";import{u as j}from"./index-15864cc7.js";const S={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},z={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),D={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),h(`
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
`),j({title:`Notes - ${m.title}`});const r=u(()=>x.slice(0,-1).map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.notesHTML!==""));return(s,l)=>(i(),n("div",{id:"page-root",style:v(o(w))},[t("div",S,[t("div",L,[t("h1",T,a(o(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(o(r),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",z,a(e==null?void 0:e.no)+"/"+a(o(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),A])]),N(V,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(r).length-1?(i(),n("hr",D)):k("v-if",!0)]))),128))])],4))}}),U=P(F,[["__file","/Users/gimbichi/Apps/slidev/node_modules/.pnpm/@slidev+client@0.38.0_vite@4.0.1/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{U as default};
