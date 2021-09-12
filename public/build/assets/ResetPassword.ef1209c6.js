import{d as o,H as a,r as s,o as t,g as e,s as r,w as i,f as l,n as d,j as n,F as m,u}from"./vendor.a36873b3.js";import{_ as p}from"./AuthenticationCard.9cbdad50.js";import{_ as f}from"./AuthenticationCardLogo.8910210b.js";import{_ as c}from"./Button.9e794eb8.js";import{_ as w}from"./Input.3370192f.js";import{_ as b}from"./Label.e03d479b.js";import{_ as j}from"./ValidationErrors.ed736101.js";const h=o({components:{Head:a,JetAuthenticationCard:p,JetAuthenticationCardLogo:f,JetButton:c,JetInput:w,JetLabel:b,JetValidationErrors:j},props:{email:String,token:String},data(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit(){this.form.post(this.route("password.update"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}}),_={class:"mt-4"},V={class:"mt-4"},v={class:"flex items-center justify-end mt-4"},g=u(" Reset Password ");h.render=function(o,a,u,p,f,c){const w=s("Head"),b=s("jet-authentication-card-logo"),j=s("jet-validation-errors"),h=s("jet-label"),k=s("jet-input"),J=s("jet-button"),y=s("jet-authentication-card");return t(),e(m,null,[r(w,{title:"Reset Password"}),r(y,null,{logo:i((()=>[r(b)])),default:i((()=>[r(j,{class:"mb-4"}),l("form",{onSubmit:a[3]||(a[3]=n(((...a)=>o.submit&&o.submit(...a)),["prevent"]))},[l("div",null,[r(h,{for:"email",value:"Email"}),r(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":a[0]||(a[0]=a=>o.form.email=a),required:"",autofocus:""},null,8,["modelValue"])]),l("div",_,[r(h,{for:"password",value:"Password"}),r(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":a[1]||(a[1]=a=>o.form.password=a),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),l("div",V,[r(h,{for:"password_confirmation",value:"Confirm Password"}),r(k,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:o.form.password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=a=>o.form.password_confirmation=a),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),l("div",v,[r(J,{class:d({"opacity-25":o.form.processing}),disabled:o.form.processing},{default:i((()=>[g])),_:1},8,["class","disabled"])])],32)])),_:1})],64)};export{h as default};