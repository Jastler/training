import{g as H,b as U,c as P,B as oe,e as V,r as u,f as ne,h as ae,j as s,k as N,l as C,m as K,n as S,o as ce,p as ie,q as A,t as M,a as q,P as W,v as B,T as Y,w as le,x as re,u as I,L as D,I as de,y as pe,z as ue,A as O,C as he,D as xe,E as me,S as fe}from"./index-B8WmeWex.js";function ge(e){return H("PrivateSwitchBase",e)}U("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ke=e=>{const{classes:t,checked:n,disabled:o,edge:c}=e,l={root:["root",n&&"checked",o&&"disabled",c&&`edge${C(c)}`],input:["input"]};return K(l,ge,t)},be=P(oe)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:t})=>e==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:t})=>e==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Ce=P("input",{shouldForwardProp:V})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ye=u.forwardRef(function(t,n){const{autoFocus:o,checked:c,checkedIcon:l,className:d,defaultChecked:i,disabled:m,disableFocusRipple:f=!1,edge:x=!1,icon:a,id:r,inputProps:z,inputRef:y,name:j,onBlur:g,onChange:k,onFocus:R,readOnly:G,required:J=!1,tabIndex:Q,type:v,value:F,...X}=t,[E,Z]=ne({controlled:c,default:!!i,name:"SwitchBase",state:"checked"}),h=ae(),_=p=>{R&&R(p),h&&h.onFocus&&h.onFocus(p)},ee=p=>{g&&g(p),h&&h.onBlur&&h.onBlur(p)},te=p=>{if(p.nativeEvent.defaultPrevented)return;const L=p.target.checked;Z(L),k&&k(p,L)};let b=m;h&&typeof b>"u"&&(b=h.disabled);const se=v==="checkbox"||v==="radio",w={...t,checked:E,disabled:b,disableFocusRipple:f,edge:x},$=ke(w);return s.jsxs(be,{component:"span",className:N($.root,d),centerRipple:!0,focusRipple:!f,disabled:b,tabIndex:null,role:void 0,onFocus:_,onBlur:ee,ownerState:w,ref:n,...X,children:[s.jsx(Ce,{autoFocus:o,checked:c,defaultChecked:i,className:$.input,disabled:b,id:se?r:void 0,name:j,onChange:te,readOnly:G,ref:y,required:J,ownerState:w,tabIndex:Q,type:v,...v==="checkbox"&&F===void 0?{}:{value:F},...z}),E?l:a]})}),je=S(s.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ve=S(s.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Be=S(s.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ie(e){return H("MuiCheckbox",e)}const T=U("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Se=e=>{const{classes:t,indeterminate:n,color:o,size:c}=e,l={root:["root",n&&"indeterminate",`color${C(o)}`,`size${C(c)}`]},d=K(l,Ie,t);return{...t,...d}},ze=P(ye,{shouldForwardProp:e=>V(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t[`size${C(n.size)}`],n.color!=="default"&&t[`color${C(n.color)}`]]}})(ce(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(M()).map(([t])=>({props:{color:t,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(e.palette[t].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(M()).map(([t])=>({props:{color:t},style:{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(e.vars||e).palette[t].main},[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),we=s.jsx(ve,{}),Te=s.jsx(je,{}),Pe=s.jsx(Be,{}),Re=u.forwardRef(function(t,n){const o=ie({props:t,name:"MuiCheckbox"}),{checkedIcon:c=we,color:l="primary",icon:d=Te,indeterminate:i=!1,indeterminateIcon:m=Pe,inputProps:f,size:x="medium",disableRipple:a=!1,className:r,...z}=o,y=i?m:d,j=i?m:c,g={...o,disableRipple:a,color:l,indeterminate:i,size:x},k=Se(g);return s.jsx(ze,{type:"checkbox",inputProps:{"data-indeterminate":i,...f},icon:u.cloneElement(y,{fontSize:y.props.fontSize??x}),checkedIcon:u.cloneElement(j,{fontSize:j.props.fontSize??x}),ownerState:g,ref:n,className:N(k.root,r),disableRipple:a,...z,classes:k})}),Fe=({placeholder:e="Add Todo",buttonProps:t={buttonText:"Add"}})=>{const[n,o]=u.useState(""),c=q(),l=()=>{n.trim()&&(c(re({title:n,checked:!1})),o(""))},d=i=>{i.key==="Enter"&&l()};return s.jsx(W,{style:{padding:"16px",margin:"15px 0"},children:s.jsxs(B,{sx:{display:"flex",alignItems:"center",gap:2},children:[s.jsx(Y,{variant:"outlined",fullWidth:!0,placeholder:e,value:n,onChange:i=>o(i.target.value),onKeyDown:d,size:"small"}),s.jsx(le,{variant:"contained",color:"primary",onClick:l,sx:{minWidth:"100px"},children:t.buttonText})]})})},Ee=S(s.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),$e=u.memo(({id:e})=>{const t=I(a=>a.todos.todos.find(r=>r.id===e),(a,r)=>(a==null?void 0:a.checked)===(r==null?void 0:r.checked)&&(a==null?void 0:a.title)===(r==null?void 0:r.title)),[n,o]=u.useState(!1),[c,l]=u.useState(t==null?void 0:t.title),d=q();if(!t)return null;const i=()=>{o(!1)},m=async()=>{d(O({...t,title:c||""})),o(!1)},f=a=>{a.key==="Enter"&&m()},x=()=>{d(O({...t,checked:!t.checked}))};return s.jsx("div",{children:n?s.jsx(D,{children:s.jsx(B,{sx:{display:"flex",alignItems:"center",gap:2,marginLeft:"28px"},children:s.jsx(Y,{type:"text",onBlur:i,value:c,onChange:a=>l(a.target.value),onKeyDown:f,size:"small"})})}):s.jsxs(D,{secondaryAction:s.jsx(de,{edge:"end","aria-label":"delete",onClick:()=>d(pe(t.id)),children:s.jsx(Ee,{})}),children:[s.jsx(Re,{checked:t.checked,onClick:()=>x()}),s.jsx(ue,{onDoubleClick:()=>o(!0),primary:t.title})]})})}),Le=()=>{const e=I(o=>o.todos.todos,he),t=u.useMemo(()=>e.map(o=>o.id),[e]);return I(o=>o.todos.loading)?s.jsx("p",{children:"Loading..."}):s.jsx(W,{style:{padding:"16px"},children:s.jsx(xe,{children:t.map(o=>s.jsx("li",{children:s.jsx($e,{id:o})},o))})})},Ae=()=>s.jsxs(s.Fragment,{children:[s.jsx(me,{variant:"h4",align:"center",gutterBottom:!0,children:"Todo App"}),s.jsx(B,{children:s.jsx(Le,{})}),s.jsx(B,{children:s.jsx(Fe,{})})]}),De=()=>{const e=I(t=>t.auth.user);return s.jsxs(s.Fragment,{children:[s.jsx(fe,{title:"Головна | Todo App",description:"Організуйте свої завдання ефективно!",url:"https://yourdomain.com/"}),s.jsx("div",{children:e?s.jsx(Ae,{}):s.jsx("div",{children:"You must log in"})})]})};export{De as default};
