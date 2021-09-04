import{_ as s}from"./ActionMessage.8f5478c1.js";import{_ as r}from"./Button.fec46e4f.js";import{_ as o}from"./FormSection.5f765ba6.js";import{_ as e}from"./Input.50ab76f7.js";import{_ as a}from"./InputError.f1d04133.js";import{_ as t}from"./Label.e57b6dd2.js";import{f as n,r as d,o as m,j as l,w as p,e as c,g as u,n as i,x as f}from"./vendor.29602760.js";import"./SectionTitle.eb211a08.js";const w=n({components:{JetActionMessage:s,JetButton:r,JetFormSection:o,JetInput:e,JetInputError:a,JetLabel:t},data(){return{form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword(){this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.password&&(this.form.reset("password","password_confirmation"),this.$refs.password.focus()),this.form.errors.current_password&&(this.form.reset("current_password"),this.$refs.current_password.focus())}})}}}),_=f(" Update Password "),b=f(" Ensure your account is using a long, random password to stay secure. "),g={class:"col-span-6 sm:col-span-4"},j={class:"col-span-6 sm:col-span-4"},h={class:"col-span-6 sm:col-span-4"},v=f(" Saved. "),S=f(" Save ");w.render=function(s,r,o,e,a,t){const n=d("jet-label"),f=d("jet-input"),w=d("jet-input-error"),V=d("jet-action-message"),y=d("jet-button"),P=d("jet-form-section");return m(),l(P,{onSubmitted:s.updatePassword},{title:p((()=>[_])),description:p((()=>[b])),form:p((()=>[c("div",g,[u(n,{for:"current_password",value:"Current Password"}),u(f,{id:"current_password",type:"password",class:"mt-1 block w-full",modelValue:s.form.current_password,"onUpdate:modelValue":r[0]||(r[0]=r=>s.form.current_password=r),ref:"current_password",autocomplete:"current-password"},null,8,["modelValue"]),u(w,{message:s.form.errors.current_password,class:"mt-2"},null,8,["message"])]),c("div",j,[u(n,{for:"password",value:"New Password"}),u(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":r[1]||(r[1]=r=>s.form.password=r),ref:"password",autocomplete:"new-password"},null,8,["modelValue"]),u(w,{message:s.form.errors.password,class:"mt-2"},null,8,["message"])]),c("div",h,[u(n,{for:"password_confirmation",value:"Confirm Password"}),u(f,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":r[2]||(r[2]=r=>s.form.password_confirmation=r),autocomplete:"new-password"},null,8,["modelValue"]),u(w,{message:s.form.errors.password_confirmation,class:"mt-2"},null,8,["message"])])])),actions:p((()=>[u(V,{on:s.form.recentlySuccessful,class:"mr-3"},{default:p((()=>[v])),_:1},8,["on"]),u(y,{class:i({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:p((()=>[S])),_:1},8,["class","disabled"])])),_:1},8,["onSubmitted"])};export{w as default};
