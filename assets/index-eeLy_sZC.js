import{g as V,f as N,s as P,h as ae,r as q,k as u,l as ie,m as ce,j as t,n as K,p as b,q as G,d as S,t as re,v as le,w as O,x as H,b as F,P as A,B as j,y as Y,c as J,z as de,u as I,L as W,I as pe,A as ue,C as he,D as U,E as xe,F as me,T as R,o as fe,S as ge}from"./index-BXGeAp1F.js";import{D as ke}from"./DefaultAnimation-CR6hQPyN.js";function ye(e){return V("PrivateSwitchBase",e)}N("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const be=e=>{const{classes:s,checked:n,disabled:o,edge:i}=e,r={root:["root",n&&"checked",o&&"disabled",i&&`edge${b(i)}`],input:["input"]};return G(r,ye,s)},je=P(ae)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:s})=>e==="start"&&s.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:s})=>e==="end"&&s.size!=="small",style:{marginRight:-12}}]}),Ce=P("input",{shouldForwardProp:q})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ve=u.forwardRef(function(s,n){const{autoFocus:o,checked:i,checkedIcon:r,className:d,defaultChecked:c,disabled:m,disableFocusRipple:f=!1,edge:x=!1,icon:a,id:l,inputProps:z,inputRef:C,name:v,onBlur:g,onChange:k,onFocus:E,readOnly:Q,required:X=!1,tabIndex:Z,type:B,value:L,..._}=s,[$,ee]=ie({controlled:i,default:!!c,name:"SwitchBase",state:"checked"}),h=ce(),te=p=>{E&&E(p),h&&h.onFocus&&h.onFocus(p)},se=p=>{g&&g(p),h&&h.onBlur&&h.onBlur(p)},oe=p=>{if(p.nativeEvent.defaultPrevented)return;const M=p.target.checked;ee(M),k&&k(p,M)};let y=m;h&&typeof y>"u"&&(y=h.disabled);const ne=B==="checkbox"||B==="radio",w={...s,checked:$,disabled:y,disableFocusRipple:f,edge:x},D=be(w);return t.jsxs(je,{component:"span",className:K(D.root,d),centerRipple:!0,focusRipple:!f,disabled:y,tabIndex:null,role:void 0,onFocus:te,onBlur:se,ownerState:w,ref:n,..._,children:[t.jsx(Ce,{autoFocus:o,checked:i,defaultChecked:c,className:D.input,disabled:y,id:ne?l:void 0,name:v,onChange:oe,readOnly:Q,ref:C,required:X,ownerState:w,tabIndex:Z,type:B,...B==="checkbox"&&L===void 0?{}:{value:L},...z}),$?r:a]})}),Be=S(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ie=S(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Se=S(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ze(e){return V("MuiCheckbox",e)}const T=N("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),we=e=>{const{classes:s,indeterminate:n,color:o,size:i}=e,r={root:["root",n&&"indeterminate",`color${b(o)}`,`size${b(i)}`]},d=G(r,ze,s);return{...s,...d}},Te=P(ve,{shouldForwardProp:e=>q(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:n}=e;return[s.root,n.indeterminate&&s.indeterminate,s[`size${b(n.size)}`],n.color!=="default"&&s[`color${b(n.color)}`]]}})(re(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:O(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(H()).map(([s])=>({props:{color:s,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[s].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:O(e.palette[s].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(H()).map(([s])=>({props:{color:s},style:{[`&.${T.checked}, &.${T.indeterminate}`]:{color:(e.vars||e).palette[s].main},[`&.${T.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Re=t.jsx(Ie,{}),Pe=t.jsx(Be,{}),Fe=t.jsx(Se,{}),Ae=u.forwardRef(function(s,n){const o=le({props:s,name:"MuiCheckbox"}),{checkedIcon:i=Re,color:r="primary",icon:d=Pe,indeterminate:c=!1,indeterminateIcon:m=Fe,inputProps:f,size:x="medium",disableRipple:a=!1,className:l,...z}=o,C=c?m:d,v=c?m:i,g={...o,disableRipple:a,color:r,indeterminate:c,size:x},k=we(g);return t.jsx(Te,{type:"checkbox",inputProps:{"data-indeterminate":c,...f},icon:u.cloneElement(C,{fontSize:C.props.fontSize??x}),checkedIcon:u.cloneElement(v,{fontSize:v.props.fontSize??x}),ownerState:g,ref:n,className:K(k.root,l),disableRipple:a,...z,classes:k})}),Ee=S(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),Le=({placeholder:e="Add Todo",buttonProps:s={buttonText:"Add"}})=>{const[n,o]=u.useState(""),i=F(),r=()=>{n.trim()&&(i(de({title:n,checked:!1})),o(""))},d=c=>{c.key==="Enter"&&r()};return t.jsx(A,{style:{padding:"16px",margin:"15px 0"},children:t.jsxs(j,{sx:{display:"flex",alignItems:"center",gap:2},children:[t.jsx(Y,{variant:"outlined",fullWidth:!0,placeholder:e,value:n,onChange:c=>o(c.target.value),onKeyDown:d,size:"small"}),t.jsx(J,{variant:"contained",color:"primary",onClick:r,sx:{minWidth:"100px"},children:s.buttonText})]})})},$e=u.memo(({id:e})=>{const s=I(a=>a.todos.todos.find(l=>l.id===e),(a,l)=>(a==null?void 0:a.checked)===(l==null?void 0:l.checked)&&(a==null?void 0:a.title)===(l==null?void 0:l.title)),[n,o]=u.useState(!1),[i,r]=u.useState(s==null?void 0:s.title),d=F();if(!s)return null;const c=()=>{o(!1)},m=async()=>{d(U({...s,title:i||""})),o(!1)},f=a=>{a.key==="Enter"&&m()},x=()=>{d(U({...s,checked:!s.checked}))};return t.jsx("div",{children:n?t.jsx(W,{children:t.jsx(j,{sx:{display:"flex",alignItems:"center",gap:2,marginLeft:"28px"},children:t.jsx(Y,{type:"text",onBlur:c,value:i,onChange:a=>r(a.target.value),onKeyDown:f,size:"small"})})}):t.jsxs(W,{secondaryAction:t.jsx(pe,{edge:"end","aria-label":"delete",onClick:()=>d(ue(s.id)),children:t.jsx(Ee,{})}),children:[t.jsx(Ae,{sx:{minWidth:"40px"},checked:s.checked,onClick:()=>x()}),t.jsx(he,{onDoubleClick:()=>o(!0),primary:s.title})]})})}),De=()=>{const e=I(o=>o.todos.todos,xe),s=u.useMemo(()=>e.map(o=>o.id),[e]);return I(o=>o.todos.loading)?t.jsx("p",{children:"Loading..."}):t.jsx(A,{style:{padding:"16px"},children:t.jsx(me,{children:s.map(o=>t.jsx("li",{children:t.jsx($e,{id:o})},o))})})},Me=()=>t.jsxs(t.Fragment,{children:[t.jsx(R,{variant:"h4",align:"center",gutterBottom:!0,children:"Todo App"}),t.jsx(j,{children:t.jsx(De,{})}),t.jsx(j,{children:t.jsx(Le,{})})]}),Oe=({message:e="To access this page, please log in to your account."})=>{const s=F();return t.jsx(j,{display:"flex",justifyContent:"center",alignItems:"center",px:2,children:t.jsxs(A,{elevation:3,sx:{padding:{xs:3,md:5},textAlign:"center",maxWidth:400,width:"100%",borderRadius:2},children:[t.jsx(R,{variant:"h5",fontWeight:"bold",gutterBottom:!0,children:"You must log in"}),t.jsx(R,{variant:"body1",color:"textSecondary",sx:{mb:2},children:e}),t.jsx(J,{variant:"contained",color:"primary",onClick:()=>{s(fe({type:"auth"}))},fullWidth:!0,children:"Go to Login"})]})})},Ue=()=>{const e=I(s=>s.auth.user);return t.jsxs(t.Fragment,{children:[t.jsx(ge,{title:"Головна | Todo App",description:"Організуйте свої завдання ефективно!",url:"https://yourdomain.com/"}),t.jsx(ke,{children:e?t.jsx(Me,{}):t.jsx(Oe,{message:"Sign in to manage your tasks!"})})]})};export{Ue as default};
