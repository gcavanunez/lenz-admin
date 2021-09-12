var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{d as m,H as i,L as n,r as d,o as u,g as c,s as p,w as f,t as b,i as h,f as j,e as w,n as g,j as y,F as v,u as k}from"./vendor.a36873b3.js";import{_ as x}from"./AuthenticationCard.9cbdad50.js";import{_}from"./AuthenticationCardLogo.8910210b.js";import{_ as L}from"./Button.9e794eb8.js";import{_ as O}from"./Input.3370192f.js";import{_ as P}from"./Checkbox.56474599.js";import{_ as V}from"./Label.e03d479b.js";import{_ as J}from"./ValidationErrors.ed736101.js";const C=m({components:{Head:i,JetAuthenticationCard:x,JetAuthenticationCardLogo:_,JetButton:L,JetInput:O,JetCheckbox:P,JetLabel:V,JetValidationErrors:J,Link:n},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.transform((e=>{return m=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&l(e,r,t[r]);return e})({},e),i={remember:this.form.remember?"on":""},t(m,r(i));var m,i})).post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}}),A={key:0,class:"mb-4 font-medium text-sm text-green-600"},E={class:"mt-4"},q={class:"block mt-4"},B={class:"flex items-center"},F=j("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),H={class:"flex items-center justify-end mt-4"},I=k(" Forgot your password? "),R=k(" Log in ");C.render=function(e,t,r,o,s,a){const l=d("Head"),m=d("jet-authentication-card-logo"),i=d("jet-validation-errors"),n=d("jet-label"),k=d("jet-input"),x=d("jet-checkbox"),_=d("Link"),L=d("jet-button"),O=d("jet-authentication-card");return u(),c(v,null,[p(l,{title:"Log in"}),p(O,null,{logo:f((()=>[p(m)])),default:f((()=>[p(i,{class:"mb-4"}),e.status?(u(),c("div",A,b(e.status),1)):h("",!0),j("form",{onSubmit:t[3]||(t[3]=y(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[j("div",null,[p(n,{for:"email",value:"Email"}),p(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.email=t),required:"",autofocus:""},null,8,["modelValue"])]),j("div",E,[p(n,{for:"password",value:"Password"}),p(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),j("div",q,[j("label",B,[p(x,{name:"remember",checked:e.form.remember,"onUpdate:checked":t[2]||(t[2]=t=>e.form.remember=t)},null,8,["checked"]),F])]),j("div",H,[e.canResetPassword?(u(),w(_,{key:0,href:e.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:f((()=>[I])),_:1},8,["href"])):h("",!0),p(L,{class:g(["ml-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:f((()=>[R])),_:1},8,["class","disabled"])])],32)])),_:1})],64)};export{C as default};