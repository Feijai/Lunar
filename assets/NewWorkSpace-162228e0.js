import{aE as t,r as n,al as h,aG as g,am as a,aP as u,ag as e,cj as y,az as f,aA as l,aq as x,bD as L,ar as v,ck as S}from"./index-ff084b1e.js";import{L as b}from"./img_logo-e8fa72dc.js";const w=""+new URL("newWorkSpace_bg-a5a84e00.png",import.meta.url).href,I=""+new URL("img_createWork-13799ff4.png",import.meta.url).href,W=()=>{const[s]=t.useForm(),[c,r]=n.useState(!1),[i,o]=n.useState({userIdList:[]}),m=h(),p=g();return a(u,{style:{height:"100%"},children:[e("div",{className:"header",style:{padding:"24px 166px"},children:e("img",{src:b,alt:""})}),a(y,{className:"d-center",children:[e("img",{src:w,alt:"",className:"bg-left"}),a(f,{children:[e(l,{children:e("img",{src:I,alt:""})}),a(l,{children:[e("h1",{children:"歡迎使用Lunar"}),a("div",{style:{marginTop:"12px"},children:[e("p",{style:{fontSize:"20px",lineHeight:"120%",color:"var(--black23)"},children:"開始創建工作區"}),e("p",{style:{marginTop:"12px",fontSize:"16px",lineHeight:"120%",color:"var(--gray66)"},children:"所有人和事物都集中在一個地方。這是一個供團隊協作、組織和分享項目看的空間。"})]}),a(t,{form:s,onFinish:async d=>{r(!0),m(S({name:d.name,userIdList:i.userIdList})).finally(()=>{r(!1),p("/"),s.resetFields()})},layout:"vertical",style:{marginTop:"24px"},children:[e(t.Item,{label:"工作區名稱（項目或團隊名稱）",name:"name",extra:"稍後可在您的工作區設定編輯名稱",children:e(x,{})}),e(t.Item,{label:"誰在你的團隊？",name:"invite",extra:"邀請您的團隊成員，便於他們看到你正在處理的工作。",children:e(L,{selectedUsers:i,setSelectedUsers:o})}),e(t.Item,{children:e(v,{type:"primary",htmlType:"submit",loading:c,style:{height:"48px",width:"100%"},children:"創建工作區"})})]})]})]})]})]})};export{W as default};