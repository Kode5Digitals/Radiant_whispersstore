import{P as i,j as e,r as s,L as a,C as I,u as ee,a as ye,o as Se,x as Re,h as Ie}from"./index-W29gIuby.js";import{b as Le,a as Me}from"./footer-CYV9Fxay.js";import{L as se,a as He}from"./index-DmMzkQr3.js";import{G as L}from"./iconBase-DaNi9Cxe.js";import{C as A,d as ze,I as Ve,e as z,f as V,g as ne}from"./index-JKkbLNqC.js";import Ae from"./Login-D4dCwv0B.js";import Oe from"./Register-B7b3leXN.js";import{b as te,c as qe}from"./index-13rOuACM.js";import{c as Te,d as ie,e as q,f as ae}from"./index-DYVT73-p.js";import{I as le,b as T,c as oe,d as Be}from"./index-CejQMpiJ.js";import{b as B,c as Z,d as Ze}from"./index-BwnSUIqb.js";import{a as $}from"./index-BYU5Di5h.js";function ss(t){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M2 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM2 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM8.5 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM8.5 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1zM15 6c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2zM15 9c-0.551 0-1-0.448-1-1s0.449-1 1-1 1 0.448 1 1-0.449 1-1 1z"},child:[]}]})(t)}function re(t){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"},child:[]}]})(t)}function $e(t){return L({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(t)}const ce=({name:t,right:n="0px",info:c})=>e.jsxs("div",{style:{right:n},className:"absolute  bg-white  z-200 p-3 text-[10px] text-[#878787] w-48 2xl:top-12 xl:top-14 shadow-lg rounded-lg hidden group-hover:block hover:block ",children:[e.jsxs("h3",{children:[" ",t]}),e.jsx("p",{className:"text-[10px]",children:c})]});ce.propTypes={name:i.string.isRequired,right:i.string,info:i.string.isRequired};const O=({showProducts:t,searchedProducts:n,handleClickBack:c})=>{const p=s.useRef(null);return e.jsx(e.Fragment,{children:t&&n.length>0&&e.jsxs("div",{ref:p,className:"absolute searchcase xl:top-16 bg-[#eadfe7] xl:right-[500px] xl:w-[418px] xl:max-h-[300px] pb-10 border-b-black border-3 max-h-[300px] w-1/2 md:top-[75px] overflow-y-auto p-2",children:[e.jsxs("div",{className:"flex items-center justify-around",children:[e.jsx(Te,{onClick:c,size:20}),e.jsx("h4",{className:"text-center",children:"Radiantwhispersstore"}),e.jsx("div",{})]}),n.map((l,d)=>e.jsx(a,{to:`/ProductDetails/${l==null?void 0:l._id}`,children:e.jsxs("div",{className:"flex xl:gap-8 mt-8 gap-4 text-black  bg-white p-2 hover:bg-[#e8e8e8]",children:[e.jsx("div",{className:"w-1/2",children:e.jsx("img",{src:l.image,className:"xl:w-16 xl:h-16",alt:""})}),e.jsxs("div",{children:[e.jsx("p",{children:l.name}),e.jsx("p",{className:"text-[10px]",children:l.description}),e.jsxs("p",{children:["#",l.price]})]})]})},d))]})})};O.propTypes={showProducts:i.bool.isRequired,searchedProducts:i.arrayOf(i.shape({_id:i.string.isRequired,image:i.string.isRequired,name:i.string.isRequired,description:i.string.isRequired,price:i.number.isRequired})).isRequired,handleClickBack:i.func.isRequired};const de=({logoSrc:t,isSideOpen:n,setSideOpen:c})=>{const{isOpen:p,setIsOpen:l,openLogin:d,setOpenLogin:g,setOpenRegister:j,openRegister:x,login:u,isadmin:h,setisadmin:f,setLogin:S,cartLength:v,setCartLength:w,wishlistLength:b,setWishlistLength:N}=s.useContext(I),[m,C]=s.useState(""),[M,F]=s.useState([]),[P,E]=s.useState(!1),W=ee(r=>r==null?void 0:r.wishlist.items.length),[D,R]=s.useState(!1),[_,k]=s.useState(!1),[Q,U]=s.useState(!1),G=ee(r=>r.cart.totalQuantity),H=ye(),{user:o,sessionId:y}=s.useContext(I);s.useEffect(()=>{try{(o!=null&&o._id||y)&&H(Se({userId:o==null?void 0:o._id,sessionId:y}))}catch(r){console.error(r)}},[H,o,y]),s.useEffect(()=>{w(G),N(W)},[G,w,N,W]),s.useEffect(()=>{try{(o!=null&&o._id||y)&&H(Re({userId:o==null?void 0:o._id,sessionId:y}))}catch(r){console.error(r)}},[o,y,H]);const J=s.useCallback(async()=>{U(!0);try{const ke=await(await Ie.get(`/api/products/?search=${m}`)).data;F(ke)}catch(r){console.error("Error fetching products:",r)}finally{U(!1)}},[m]),K=s.useCallback(()=>{F([])},[]);s.useEffect(()=>{m.length>3?(J(),E(!0)):K()},[m,J,K]);const X=r=>{C(r.target.value)},pe=()=>{l(!p)},Y=()=>{E(!1),C("")},ue=()=>{c(!n)},ge=()=>{R(!D),k(!1)},je=()=>{k(!_),R(!1)},fe=()=>{k(!1)},be=()=>{R(!1)},ve=()=>{j(!0),k(!1),R(!1)},we=()=>{g(!0),R(!1),k(!1)},Ne=()=>{localStorage.removeItem("Login"),localStorage.removeItem("Admin"),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),f(!1),S(!1),location.reload("/")},Ce=r=>{window.location.href=r};return e.jsxs("div",{className:"relative",children:[e.jsxs("nav",{className:`text-[#891980]  \r
      font-bold text-sm   p-3 sm:px-5  flex-wrap xl:flex-nowrap  bg-white border-b shadow-md flex fixed w-full  z-50  items-end top-0 xl:justify-around justify-between`,children:[e.jsx($e,{className:"xl:hidden block md:hidden",size:20,onClick:pe}),e.jsx(a,{to:"/",children:e.jsx("div",{className:"xl:ml-4 w-52  md:w-40",children:e.jsx("img",{src:t,alt:"Radiantwhispersstore Logo",className:""})})}),e.jsxs("div",{className:"md:flex  md:flex-row-reverse   items-center  md:w-2/3 md:justify-between   ",children:[e.jsxs("div",{className:"xl:hidden  flex   md:flex gap-4 ",children:[e.jsx("div",{className:"flex items-center gap-1 ",children:e.jsxs("div",{className:"relative",children:[e.jsx(a,{to:"/wishlist",children:e.jsx("span",{children:e.jsx(A,{size:22})})}),e.jsx("div",{style:{fontSize:"10px"},className:"w-4 text-sm  bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2    md:bottom-[-10px]",children:e.jsx("h6",{children:b||0})})]})}),e.jsxs("div",{className:"cursor-pointer relative xl:hidden block ",children:[e.jsxs(a,{to:"/cart",children:[" ",e.jsx(se,{size:20})]}),e.jsx("div",{style:{fontSize:"10px"},className:"w-4 text-sm  bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2    md:bottom-[-10px]",children:e.jsx("h6",{children:v})})]}),e.jsxs("div",{className:"cursor-pointer relative  hidden ",children:[e.jsx(A,{size:22}),e.jsx("div",{style:{fontSize:"10px"},className:"w-4 text-sm text-white  h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2 md:bottom-[-10px]",children:e.jsx("p",{children:b||0})})]}),e.jsx(te,{size:27,className:"hidden md:block ",onClick:ue})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:" hidden xl:block md:block lg:block  ",children:e.jsxs("div",{className:" border  md:items-center md:mr-10 md:mt-0 xl:mr-20 flex  w-[500px] md:w-[400px]  p-2 rounded-lg border-[#891980]   gap-3 items-center mt-6 xl:mt-0",children:[e.jsx(re,{}),e.jsx("input",{type:"text",value:m,onChange:X,placeholder:"Search",style:{background:0,outline:"0"},className:"w-full"}),Q&&e.jsx(le,{className:"animate-spin"}),e.jsx(O,{showProducts:P,searchedProducts:M,handleClickBack:Y})]})})})]}),e.jsxs("div",{className:" xl:hidden md:hidden w-full  pl-2",children:[e.jsxs("div",{className:"border  md:items-center md:mr-10 md:mt-0 xl:mr-20 flex w-full  p-2 rounded-lg border-[#891980]   gap-3 items-center mt-6 xl:mt-0",children:[e.jsx(re,{}),e.jsx("input",{type:"text",value:m,onChange:X,placeholder:"Search",style:{background:0,outline:"0"},className:"w-full"}),Q&&e.jsx(le,{className:"animate-spin"})]}),e.jsx(O,{showProducts:P,searchedProducts:M,handleClickBack:Y})]}),e.jsxs("div",{className:"xl:flex gap-3  items-center hidden pr-10",children:[e.jsxs("div",{className:"relative group ",children:[e.jsx("button",{onMouseEnter:()=>k(!1),className:"border-2 p-2  xl:w-20   text-[12px]    rounded-lg border-[#891980] hover:bg-[#891980] hover:text-white",children:"About us"}),e.jsx(ce,{name:"About us",right:"0px",info:`  At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. \r
\r
That's why we're dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin.`})]}),e.jsx("div",{className:"relative group",children:e.jsx("button",{onClick:je,className:"border-2 p-2  xl:w-24 text-[12px]    rounded-lg border-[#891980] bg-[#891980] text-white shadow-lg hover:bg-white hover:text-[#891980]",children:"Contact us"})}),e.jsxs("div",{className:"flex gap-4 ml-12 border border-[#891980] p-2 rounded-md",children:[e.jsx(a,{to:"/wishlist",children:e.jsxs("div",{className:"cursor-pointer relative md:block",children:[e.jsx(A,{size:22}),e.jsx("div",{style:{fontSize:"10px"},className:"w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2",children:e.jsx("p",{children:b||0})})]})}),e.jsx(a,{to:"/cart",children:e.jsxs("div",{className:"cursor-pointer relative ",children:[e.jsx(se,{size:20}),e.jsx("div",{style:{fontSize:"10px"},className:"w-4 text-sm bg-black text-white h-4 rounded-full border absolute flex justify-center items-center bottom-[-10px] left-2",children:e.jsx("h6",{children:v})})]})}),e.jsx(te,{size:27,className:"hidden md:block cursor-pointer",onClick:ge}),D&&e.jsxs("div",{className:"w-40 md:block lg:block   bg-white border absolute xl:top-[72px] 2xl:top-[68px] p-3 pb-4 rounded-lg",children:[e.jsx("span",{className:"text-black cursor-pointer flex justify-end",onClick:be,children:e.jsx(ie,{})}),!u&&e.jsxs("ul",{children:[e.jsxs("li",{className:"mt-3 flex items-center gap-1 ",onClick:we,children:[e.jsx(ze,{}),e.jsx(a,{children:"Login"})]}),e.jsxs("li",{className:"mt-3 flex items-center gap-1",onClick:ve,children:[e.jsx(qe,{}),e.jsx(a,{children:"Signup"})]})," "]}),e.jsxs("div",{children:[u&&e.jsxs("ul",{children:[e.jsxs("li",{className:"mt-3 flex items-center cursor-pointer gap-1",onClick:()=>Ce("/myaccount"),children:[e.jsx(q,{}),"My Account"]}),e.jsxs("li",{className:"mt-3 flex items-center cursor-pointer gap-1",onClick:Ne,children:[e.jsx($,{}),e.jsx(a,{children:"Logout"})]})]}),u&&h==!0&&e.jsx("button",{className:"mt-3 flex items-center gap-1",children:e.jsx(a,{to:"/adminHome",children:"Switch to Admin"})})]})]}),_&&e.jsxs("div",{className:"w-40 text-[12px] text-[#878787]  bg-white border absolute 2xl:top-[68px] xl:top-[70px] right-44 p-3 pb-4 rounded-lg",children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("p",{children:"Conatct-Us"}),e.jsx("span",{className:"text-black cursor-pointer",onClick:fe,children:e.jsx(ie,{})})]}),e.jsx("hr",{}),e.jsxs("ul",{children:[e.jsx("a",{href:"https://wa.link/m4ypbh",children:e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(Ve,{}),"0707789800099"]})}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(B,{})," Instagram"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(Z,{})," Facebook"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(T,{})," Email"]})]})]})]})]})]}),d&&e.jsx(Ae,{setOpenLogin:g}),x&&e.jsx(Oe,{setOpenRegister:j})]})};de.propTypes={isOpen:i.bool.isRequired,setIsOpen:i.func.isRequired,logoSrc:i.string.isRequired,isSideOpen:i.bool.isRequired,setSideOpen:i.func.isRequired};function xe(t){return L({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M21.0082 3C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082ZM20 5H4V19H20V5ZM18 15V17H6V15H18ZM12 7V13H6V7H12ZM18 11V13H14V11H18ZM10 9H8V11H10V9ZM18 7V9H14V7H18Z"},child:[]}]})(t)}function he(t){return L({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 14V22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"},child:[]}]})(t)}const Fe=()=>{const{isOpen:t,Back:n,handleLogin:c,handleRegister:p,login:l,isadmin:d,setisadmin:g,setLogin:j}=s.useContext(I),[x,u]=s.useState(!1),[h,f]=s.useState(!1),S=()=>{u(!x),f(!1)},v=()=>{f(!h),u(!1)},w=()=>{c(),n()},b=()=>{p(),n()},N=()=>{localStorage.removeItem("Login"),localStorage.removeItem("Admin"),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),g(!1),j(!1),location.reload("/")},m=C=>{window.location.href=C};return e.jsx("div",{className:"xl:hidden  lg:hidden md:hidden block sm:block",children:e.jsxs("div",{className:`menu fixed z-[10000] top-0 bg-white p-2 w-1/3 h-full overflow-hidden left-0 transition-all duration-300
      ${t?"translate-x-0":"-translate-x-full"}
  `,children:[e.jsxs("div",{className:"mt-3 flex justify-between items-center ",children:[e.jsx("div",{className:"w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]",children:e.jsx("img",{src:"/RadiantwhispersstoreLogo.png",alt:""})}),e.jsx("div",{}),e.jsx("p",{className:"cursor-pointer",children:e.jsx(He,{onClick:n})})]}),e.jsxs("div",{className:"mt-10 text-[#545353] relative",children:[e.jsx("ul",{children:e.jsxs("li",{className:`flex items-center gap-1 ${x?"mb-0":"mb-4"}  mt-32`,onClick:S,children:[e.jsx("span",{children:e.jsx(ae,{})}),e.jsx(a,{to:"/",children:e.jsx("span",{children:"Contact"})}),e.jsx("span",{className:"icon",children:x?e.jsx(z,{}):e.jsx(V,{})})]})}),e.jsx("div",{className:`mb-7 fixed  bg-white p-4 shadow-lg transform transition-transform duration-300 ${x?"block":"hidden"}`,children:e.jsxs("ul",{className:"text-[10px]",children:[e.jsx("a",{href:"https://wa.link/m4ypbh",children:e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(oe,{}),"0707789800099"]})}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(B,{}),"  Instagram"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(Z,{}),"  Facebook"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(T,{})," Email"]})]})}),e.jsx("ul",{children:e.jsxs("li",{className:`flex items-center gap-1 ${h?"mb-0":"mb-4"} `,onClick:v,children:[e.jsx("span",{children:e.jsx(xe,{})}),e.jsx(a,{to:"/",children:e.jsx("span",{children:"About"})}),e.jsx("span",{className:"icon",children:h?e.jsx(z,{}):e.jsx(V,{})})]})}),e.jsx("div",{className:`mb-7 fixed  w-3/4 bg-white p-2 shadow-lg transform transition-transform duration-300 ${h?"block":"hidden"}`,children:e.jsx("p",{className:"text-[10px]",children:"At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. That's why we're dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin."})}),!l&&e.jsxs("ul",{className:"mt-3 ",children:[e.jsxs("li",{onClick:b,className:"flex items-center gap-1 mb-4 cursor-pointer",children:[e.jsx("span",{children:e.jsx(Le,{})}),"Register"]}),e.jsxs("li",{onClick:w,className:"flex items-center gap-1 mb-4 cursor-pointer",children:[e.jsx("span",{children:e.jsx(ne,{})}),"Login"]})]}),l&&e.jsxs("ul",{className:"mt-5 ",children:[!d&&e.jsxs("li",{className:"flex items-center gap-1 mb-4 cursor-pointer",onClick:()=>m("/myaccount"),children:[e.jsx("span",{children:e.jsx(q,{})}),"My Account"]}),e.jsxs("li",{onClick:N,className:"flex items-center gap-1 mb-4 cursor-pointer ",children:[e.jsx("span",{children:e.jsx($,{})}),"Log Out"]})]}),l&&d&&e.jsx("ul",{children:e.jsxs("li",{className:"flex items-center gap-1 mb-4 cursor-pointer",children:[e.jsx(he,{}),e.jsx(a,{to:"/adminHome",children:"Switch to Admin"})]})})]})]})})},me=({isSideOpen:t,setSideOpen:n})=>{const{handleLogin:c,handleRegister:p,setisadmin:l,setLogin:d,login:g,isadmin:j}=s.useContext(I),[x,u]=s.useState(!1),[h,f]=s.useState(!1),S=()=>{u(!x),f(!1)},v=()=>{f(!h),u(!1)},w=()=>{p(),n(!1)},b=()=>{c(),n(!1)},N=()=>{n(!1),console.log(t)},m=()=>{localStorage.removeItem("Login"),localStorage.removeItem("Admin"),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),l(!1),d(!1),location.reload("/")},C=M=>{window.location.href=M};return e.jsx("div",{className:"relative h-full xl:hidden sm:hidden lg:block hidden md:block  2xl:hidden",children:e.jsxs("div",{className:`fixed top-0 z-[5000000000]  md:right-0 w-64 h-full bg-white p-4 transform transition-transform duration-300 ease-in-out
          ${t?"translate-x-0":"translate-x-full"} `,children:[e.jsxs("div",{className:"mt-3 flex justify-between items-center ",children:[e.jsx("div",{className:"w-[80px] h-[30px] flex justify-center items-center  md:w-[80px]",children:e.jsx("img",{src:"/RadiantwhispersstoreLogo.png",alt:""})}),e.jsx("p",{className:"cursor-pointer",children:e.jsx(Be,{onClick:N})})]}),e.jsxs("div",{className:"mt-10 text-[#545353]",children:[e.jsx("ul",{children:e.jsxs("li",{className:`flex items-center gap-1 ${x?"mb-0":"mb-4"}  mt-32`,onClick:S,children:[e.jsx("span",{children:e.jsx(ae,{})}),e.jsx(a,{to:"/",children:e.jsx("span",{children:"Contact"})}),e.jsx("span",{className:"icon",children:x?e.jsx(z,{}):e.jsx(V,{})})]})}),e.jsx("div",{className:`mb-7 fixed left-3  bg-white p-4 shadow-lg transform transition-transform duration-300 ${x?"block":"hidden"}`,children:e.jsxs("ul",{className:"text-[10px]",children:[e.jsx("a",{href:"https://wa.link/m4ypbh",children:e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(oe,{}),"0707789800099"]})}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(B,{}),"  Instagram"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(Z,{}),"  Facebook"]}),e.jsxs("li",{className:"mt-3 flex gap-1 items-center cursor-pointer  hover:bg-slate-400 hover:p-2 hover:text-white rounded-lg",children:[e.jsx(T,{})," Email"]})]})}),e.jsx("ul",{children:e.jsxs("li",{className:`flex items-center gap-1 ${h?"mb-0":"mb-4"} `,onClick:v,children:[e.jsx("span",{children:e.jsx(xe,{})}),e.jsx(a,{to:"/",children:e.jsx("span",{children:"About"})}),e.jsx("span",{className:"icon",children:h?e.jsx(z,{}):e.jsx(V,{})})]})}),e.jsx("div",{className:`mb-7 fixed left-3 bg-white p-4 w-3/4 shadow-lg transform transition-transform duration-300 ${h?"block":"hidden"}`,children:e.jsx("p",{className:"text-[10px]",children:"At Radiant Whispers, we believe that every individual deserves to feel confident and comfortable in their own skin. That's why we're dedicated to providing high-quality, natural body creams that moisturize, soothe, and protect your skin."})}),!g&&e.jsxs("ul",{className:"mt-3 ",children:[e.jsxs("li",{onClick:w,className:"flex items-center gap-1 mb-4  cursor-pointer",children:[e.jsx("span",{children:e.jsx(Ze,{})}),"Register"]}),e.jsxs("li",{onClick:b,className:"flex items-center gap-1 mb-4 cursor-pointer",children:[" ",e.jsx("span",{children:e.jsx(ne,{})}),"Login"]})]}),g&&e.jsxs("ul",{className:"mt-5 ",children:[!j&&e.jsxs("li",{className:"flex items-center gap-1 mb-4 cursor-pointer ",onClick:()=>C("/myaccount"),children:[e.jsx("span",{children:e.jsx(q,{})}),"My Account"]}),e.jsxs("li",{onClick:m,className:"flex items-center gap-1 mb-4 cursor-pointer",children:[" ",e.jsx("span",{children:e.jsx($,{})}),"Log Out"]})]}),g&&j&&e.jsx("ul",{children:e.jsxs("li",{className:"flex items-center gap-1 mb-4 cursor-pointer",children:[e.jsx(he,{}),e.jsx(a,{to:"/adminHome",children:"Switch to Admin"})]})})]})]})})};me.propTypes={isSideOpen:i.bool.isRequired,setSideOpen:i.func.isRequired};const Pe=({children:t})=>{const{isOpen:n,setIsOpen:c,Back:p}=s.useContext(I),[l,d]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(de,{logoSrc:"/RadiantwhispersstoreLogo.png",setIsOpen:c,isOpen:n,Back:p,isSideOpen:l,setSideOpen:d}),e.jsx(Fe,{}),l&&e.jsx(me,{isSideOpen:l,setSideOpen:d}),t,e.jsx(Me,{logoSrc:"/RadiantwhispersstoreLogo.png"})]})};Pe.propTypes={children:i.node.isRequired};export{Pe as D,ss as T};