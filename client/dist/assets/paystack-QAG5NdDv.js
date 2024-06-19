import{P,r as i,j as r,R as S,u as B,i as K,w as X,L as Y,Q as Z,h as U,B as N}from"./index-W29gIuby.js";import{a as ee,b as re}from"./index-JKkbLNqC.js";import{T as te}from"./index-DS57sa4y.js";import{a as ne}from"./index-BwnSUIqb.js";import"./iconBase-DaNi9Cxe.js";const $=({image:e,name:a})=>{const[s,t]=i.useState(0);return i.useEffect(()=>{const n=setInterval(()=>{t(l=>(l+1)%(e==null?void 0:e.length))},3e3);return()=>clearInterval(n)},[e==null?void 0:e.length]),r.jsxs("div",{children:[r.jsx("div",{className:"p-2 bg-[#891980] mb-10 text-white",children:r.jsx("p",{children:a[s]})}),r.jsx("div",{className:"w-[250px] mx-auto ",children:r.jsx("img",{src:e[s],alt:`Product ${s}`,className:"w-full h-full bg-[#891980] object-cover transition-opacity duration-1000"})})]})};$.propTypes={image:P.arrayOf(P.string).isRequired,name:P.arrayOf(P.string).isRequired};var y=function(){return y=Object.assign||function(a){for(var s,t=1,n=arguments.length;t<n;t++){s=arguments[t];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(a[l]=s[l])}return a},y.apply(this,arguments)};function F(e,a){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(s[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(s[t[n]]=e[t[n]]);return s}var C=[];function ae(){var e="https://js.paystack.co/v1/inline.js",a=i.useState({loaded:!1,error:!1}),s=a[0],t=a[1];return i.useEffect(function(){if(C.includes(e))t({loaded:!0,error:!1});else{C.push(e);var n=document.createElement("script");n.src=e,n.async=!0;var l=function(){t({loaded:!0,error:!1})},d=function(){var u=C.indexOf(e);u>=0&&C.splice(u,1),n.remove(),t({loaded:!0,error:!0})};return n.addEventListener("load",l),n.addEventListener("complete",l),n.addEventListener("error",d),document.body.appendChild(n),function(){n.removeEventListener("load",l),n.removeEventListener("error",d)}}},[e]),[s.loaded,s.error]}var se=function(e){var a=window.PaystackPop&&window.PaystackPop.setup(e);a&&a.openIframe()};function D(e){var a=ae(),s=a[0],t=a[1];function n(l){var d=l.config,u=l.onSuccess,p=l.onClose;if(t)throw new Error("Unable to load paystack inline script");var o=y(y({},e),d),k=o.publicKey,E=o.firstname,I=o.lastname,O=o.phone,b=o.email,j=o.amount,g=o.reference,x=o.metadata,R=x===void 0?{}:x,w=o.currency,z=w===void 0?"NGN":w,q=o.channels,c=o.label,f=c===void 0?"":c,m=o.plan,v=m===void 0?"":m,h=o.quantity,H=h===void 0?"":h,L=o.subaccount,J=L===void 0?"":L,T=o.transaction_charge,M=T===void 0?0:T,A=o.bearer,Q=A===void 0?"account":A,_=o.split,V=o.split_code;if(s){var W={callback:u||function(){return null},onClose:p||function(){return null},key:k,ref:g,email:b,firstname:E,lastname:I,phone:O,amount:j,currency:z,plan:v,quantity:H,channels:q,subaccount:J,transaction_charge:M,bearer:Q,label:f,metadata:R,split:_,split_code:V,"data-custom-button":o["data-custom-button"]||""};se(W)}}return i.useEffect(function(){if(t)throw new Error("Unable to load paystack inline script")},[t]),n}var le=function(e){var a=e.text,s=e.className,t=e.children,n=e.onSuccess,l=e.onClose,d=F(e,["text","className","children","onSuccess","onClose"]),u=D(d);return S.createElement("button",{className:s,onClick:function(){return u({config:d,onSuccess:n,onClose:l})}},a||t)},G=i.createContext({config:{},initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),oe=function(e){var a=e.children,s=e.onSuccess,t=e.onClose,n=F(e,["children","onSuccess","onClose"]),l=D(n);return S.createElement(G.Provider,{value:{config:n,initializePayment:l,onSuccess:s,onClose:t}},a)},ce=function(e){var a=e.children,s=e.ref,t=i.useContext(G),n=t.config,l=t.initializePayment,d=t.onSuccess,u=t.onClose,p=function(){return l({config:n,onSuccess:d,onClose:u})};return a({initializePayment:p,ref:s})};i.forwardRef(function(e,a){var s=e.children,t=e.onSuccess,n=e.onClose,l=F(e,["children","onSuccess","onClose"]),d=t||function(){return null},u=n||function(){return null};return S.createElement(oe,y({},l,{onSuccess:d,onClose:u}),S.createElement(ce,{ref:a},s))});const pe=()=>{const{totalPrice:e}=B(K),a=i.useRef(),s=i.useRef(),t=i.useRef(),n=i.useRef(),l=e,d=X(),[u,p]=i.useState(!1),{items:o}=B(K),k=o.map(c=>c.productId.image),E=o.map(c=>c.productId.name),I=o.map(c=>c),O="pk_test_07070da6a9afaa698f923376dc24bbbe12df1d94",[b,j]=i.useState(""),[g,x]=i.useState(!1),R=()=>`ref_${Math.random().toString(36).substring(2,15)}`,w=async()=>{var m;p(!0);const c=R();j(c);const f={amount:l,email:a.current.value,firstName:s.current.value,lastName:t.current.value,address:n.current.value,reference:c,products:I};try{const v=await U.post("/api/paystack/payment",f),{data:h}=v;if((m=h==null?void 0:h.data)!=null&&m.reference)j(h.data.reference),x(!0);else throw new Error("No reference returned from the server")}catch(v){console.log("err",v)}finally{p(!1)}},z=async c=>{try{const f=await U.get(`/api/paystack/verifyPayment/${c}`),m=f==null?void 0:f.data.data;console.log(m.data.metadata),localStorage.setItem("history",JSON.stringify(m.data.metadata)),m.data.status==="success"?(a.current.value="",s.current.value="",t.current.value="",x(!1),N.success("Payment sucessfull")):m.data.status==="abandoned"?N.error("Payment was not completed"):N.error("Payment verification failed")}catch{N.error("Error verifying payment")}},q=()=>{console.log("Payment window closed"),d("/cart")};return r.jsxs("div",{className:"h-screen p-3 md:p-2 lg:p-3 xl:p-3 sm:p-10 bg-[#fec5ec]",children:[r.jsx("div",{className:"ml-3  mb-3",children:r.jsxs(Y,{to:"/cart",children:[r.jsx(ee,{size:30})," "]})}),r.jsxs("div",{className:"flex flex-wrap w-full h-[550px]  xl:w-3/4 md:w-1/2  bg-white     m-auto justify-center xl:p-10",children:[r.jsxs("div",{className:" xl:w-1/2 h-[400px]  border text-center w-full   xl:block ",children:[r.jsxs("i",{className:"flex items-center pl-2",children:["Thank you for your patronage ",r.jsx(re,{})]}),r.jsx($,{image:k,name:E})]}),r.jsx("div",{className:" h-[450px] xl:w-1/2 flex xl:p-4 justify-center   w-full p-2   border",children:r.jsxs("div",{className:" bg-white xl:p-2  w-full p-1 text-[12px]",children:[r.jsxs("div",{className:"xl:w-full w-full ",children:[r.jsx("label",{htmlFor:"firstname",children:"FirstName:"}),r.jsx("br",{}),r.jsx("input",{className:"w-full  rounded-sm  p-2 border mb-4",type:"text",placeholder:"First Name",ref:s,id:"firstname",required:!0})]}),r.jsxs("div",{className:"xl:w-full w-full ",children:[r.jsx("label",{htmlFor:"lastname",children:"LastName:"}),r.jsx("br",{}),r.jsx("input",{className:"w-full  rounded-sm  p-2 border mb-4",id:"lastname",type:"text",placeholder:"Last Name",ref:t,required:!0})]}),r.jsxs("div",{className:"xl:w-full w-full ",children:[r.jsx("label",{htmlFor:"email",children:"Email:"}),r.jsx("br",{}),r.jsx("input",{className:"w-full  rounded-sm  p-2 border mb-4",id:"email",type:"email",placeholder:"Email",ref:a,required:!0})]}),r.jsxs("div",{className:"xl:w-full w-full ",children:[r.jsx("label",{htmlFor:"email",children:"Address:"}),r.jsx("br",{}),r.jsx("input",{className:"w-full  rounded-sm  p-2 border mb-4",id:"address",type:"text",placeholder:"Address",ref:n,required:!0})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"number",className:"flex gap-1 items-center",children:["Amount  (",r.jsx(te,{})," )"]}),r.jsx("input",{className:"w-full rounded-sm  p-2  mb-4 ",id:"number",placeholder:"",type:"number",value:e,disabled:!0})]}),r.jsxs("div",{className:"flex xl:justify-end justify-center mt-3  xl:mt-3 ",children:[!g&&r.jsx("button",{onClick:w,disabled:u,className:" cursor-pointer rounded-sm  p-3 hover:border-pink-300 border-2 mb-4 hover:text-sm hover:px-6 text-[12px] bg-lime-500 ",children:u?r.jsxs("p",{className:"animate-spin",children:[r.jsx(ne,{})," "]}):"Pay Now"}),g&&b&&r.jsx(le,{email:a.current.value,amount:l*100,publicKey:O,text:"Proceed to Payment",reference:b,className:" rounded-sm  p-2 hover:border-pink-300 border-2 mb-4 hover:text-[14px]  text-[12px] bg-blue-500 text-white ",onSuccess:c=>{z(c.reference)},onClose:q}),r.jsx(Z,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})]})})]})]})};export{pe as default};
