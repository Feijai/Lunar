import{aH as g,az as r,aD as e,aI as A,bG as x,ch as f,aF as b,ci as v,r as p,cj as d,ck as w,aJ as o,cl as y,aY as C,b3 as a,aN as s,bL as B,cm as G,cn as E}from"./index-7045da0e.js";import{G as I}from"./Github-3a29ee6a.js";import{L as N}from"./img_logo-e8fa72dc.js";const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHpSURBVHgBpVO9bhNBEJ7Zu4uMSHH8CCkCS+cKCoqNlEgpbdxQIGGgAKpQ0NsFHUVC4TpGPAChChSIo4iEBJavjJCQDvEArGiCsCCH8svZu8Mc8RnfxUmKzBajmZ1v5pudWYScrF+f86xY1wGhxqaX+BAgAqAAQfjn2x9fjMbjqPGjOttiVYcjBZV2RGXq3ZpKLDt1d6uzHQIow7FiXEvHbmrZaeUsmCIiaFkGQsvBaE/rkgBrAZFcEP3KhfdhOORDnYL389nlr+b3xD6UQBnTq0wFocrXXi9LL+/Hftt5bnatBzsfLkL85Sxo3SuNAx8mNleUWNBw+sY3sC9tL08++p4BV5s7dSJyx4ERMUreQKaOguwG+SBC04DBOA/c8RFwQrERQXEbXmK04yKzUZlFAQM+0xi2QIIk/mcdYa/tLG0ap/F06yqs7hW5Jz29dt9Xh1WsNreG+8KFAxHG597Ob5Rh9U8x2Uu3j+LN3ErNGwe+1txcHN0XTrD8b5VnXt1eYpqN9AKBFAhskcbPaDDSQkuBOD+xcatc+FXbB3OvnceTpeFfmHl5x2d1E44Ra/cKnOo+jGDbnQ6enFGZz8RMFpjJ4lEJeHRKk6mEg3fCfIBcuedZ2Ev2XnIyCQO6PK2Qtf/p7uvMlP4C50DDuU1MO7EAAAAASUVORK5CYII=",k=""+new URL("bg_createAccount-b0f63f4c.png",import.meta.url).href,L=g.div`
  position: relative;
  background-image: url(${k});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;

  .header {
    position: absolute;
    left: 21.15%;
    top: 28px;
    z-index: 5;
  }
  .ant-card {
    position: absolute;
    width: 448px;
    // height: 614px;
    font-size: 14px;
    top: calc(50% - 614px / 2);
    left: calc(67.18% - 448px / 2);
    z-index: 5;
  }
  .ant-card-body {
    padding: "40px 64px 32px 64px";
  }
  .cardHeader {
    margin-bottom: 24px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 12px;
    input {
      height: 48px;
      font-size: 16px;
    }
  }
  .terms {
    color: var(--gray9f);
    text-align: center;
  }
  .have-account {
    margin-top: 24px;
    text-align: center;
    color: var(--gray66);
  }

  .contentText {
    position: absolute;
    left: 26.04%;
    top: 50%;
    z-index: 5;

    h3 {
      font-size: 32px;
      font-weight: 700;
    }
    span {
      font-size: 16px;
      display: block;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .red_ball {
      position: absolute;
      left: 45.31%;
      top: 27.685%;
      object-fit: cover;
    }
    .blue_ball {
      position: absolute;
      top: 52.5%;
      left: 39.895%;
      object-fit: cover;
    }
    .bg_blue {
      position: absolute;
      left: 0;
      bottom: 0;
      object-fit: cover;
    }
    .bg_gray {
      position: absolute;
      top: 0;
      right: 0;
      object-fit: cover;
    }
  }
`,Q=g(r)`
  width: 100%;
  font-size: 14px;
  margin-top: 8px;
  height: 44px;
  img {
    margin-right: 8px;
  }
  span {
    width: 144px;
  }
`,h=({iconSrc:n,...i})=>e(Q,{...i,icon:e("img",{src:n,alt:""}),className:"d-center",children:i.text}),D=()=>{const n=A(),i=x(),t=f().pathname==="/signup",c=b(v),[m,l]=p.useState(!1);return p.useEffect(()=>{c&&(n(d(!0)),n(w()).then(()=>{i("/")}).finally(()=>{n(d(!1))}))},[c]),o(L,{children:[e(y,{}),e("img",{className:"header",src:N,alt:""}),o(C,{children:[e("h1",{className:"cardHeader",children:t?"免費註冊":"登入"}),o(a,{name:"login-form",wrapperCol:{span:24},onFinish:u=>{l(!0),n((t?G:E)(u)).then(()=>{i("/")}).finally(()=>{l(!1)})},children:[e(a.Item,{name:"email",rules:[{required:!0,message:"請輸入您的 Email!",type:"email"}],children:e(s,{placeholder:"Email"})}),t&&e(a.Item,{name:"name",rules:[{required:!0,message:"請輸入您的帳號!"}],children:e(s,{placeholder:"帳號"})}),e(a.Item,{name:"password",rules:[{required:!0,message:"請輸入您的密碼!"}],children:e(s,{placeholder:"密碼",type:"password"})}),e(a.Item,{children:e(r,{loading:m,type:"primary",htmlType:"submit",style:{width:"100%",height:"48px",fontWeight:700},children:t?"註冊":"登入"})})]}),o("div",{className:"terms",style:{display:t?"block":"none"},children:[e("div",{children:"點擊註冊表示您同意我們的"}),o("div",{children:[e("a",{href:"https://policies.google.com/privacy",children:"隱私政策"}),e("span",{style:{margin:"0 8px"},children:"和"}),e("a",{href:"https://policies.google.com/terms",children:"服務條款"})]})]}),e(B,{plain:!0,style:{borderColor:"#D4D4D4",margin:"12px 0px",height:"20px"},children:"或"}),e(h,{iconSrc:S,text:t?"使用 Google 註冊":"使用 Google 登入",onClick:()=>{window.location.href="https://prometheus-pmcy.onrender.com/api/user/google"}}),e(h,{iconSrc:I,text:t?"使用 GitHub 註冊":"使用 GitHub 登入",onClick:()=>{window.location.href="https://prometheus-pmcy.onrender.com/api/user/github"}}),o("div",{className:"have-account",children:[e("div",{children:"已經有帳戶了嗎？"}),e("div",{children:e(r,{type:"link",style:{fontSize:"16px",padding:"0"},onClick:()=>i(t?"/login":"/signup"),children:t?"登入":"註冊"})})]})]}),o("div",{className:"contentText",children:[e("h3",{children:"讓工作，更有序"}),e("span",{children:"Simplify work and boost results."})]})]})};export{D as default};
