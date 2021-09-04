import{f as s,r as o,o as e,j as t,w as r,d as n,F as a,y as l,e as i,t as c,x as d,k as u,g as m,D as f,n as p}from"./vendor.29602760.js";import{_ as h}from"./ActionMessage.8f5478c1.js";import{_ as g}from"./Modal.dd37111d.js";import{_ as w}from"./Button.fec46e4f.js";import{_ as y}from"./DialogModal.0de067de.js";import{_ as v}from"./Input.50ab76f7.js";import{_ as k}from"./InputError.f1d04133.js";import{_ as x}from"./SecondaryButton.b9140fe7.js";import"./SectionTitle.eb211a08.js";const j=s({props:["sessions"],components:{JetActionMessage:h,JetActionSection:g,JetButton:w,JetDialogModal:y,JetInput:v,JetInputError:k,JetSecondaryButton:x},data(){return{confirmingLogout:!1,form:this.$inertia.form({password:""})}},methods:{confirmLogout(){this.confirmingLogout=!0,setTimeout((()=>this.$refs.password.focus()),250)},logoutOtherBrowserSessions(){this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingLogout=!1,this.form.reset()}}}),_=d(" Browser Sessions "),b=d(" Manage and log out your active sessions on other browsers and devices. "),M=i("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),S={key:0,class:"mt-5 space-y-6"},B={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},C=[i("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1)],L={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},O=[i("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),i("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),i("path",{d:"M11 5h2M12 17v.01"},null,-1)],J={class:"ml-3"},I={class:"text-sm text-gray-600"},D={class:"text-xs text-gray-500"},V={key:0,class:"text-green-500 font-semibold"},A={key:1},E={class:"flex items-center mt-5"},T=d(" Log Out Other Browser Sessions "),$=d(" Done. "),z=d(" Log Out Other Browser Sessions "),F=d(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),H={class:"mt-4"},K=d(" Cancel "),P=d(" Log Out Other Browser Sessions ");j.render=function(s,h,g,w,y,v){const k=o("jet-button"),x=o("jet-action-message"),j=o("jet-input"),U=o("jet-input-error"),q=o("jet-secondary-button"),G=o("jet-dialog-modal"),N=o("jet-action-section");return e(),t(N,null,{title:r((()=>[_])),description:r((()=>[b])),content:r((()=>[M,s.sessions.length>0?(e(),n("div",S,[(e(!0),n(a,null,l(s.sessions,((s,o)=>(e(),n("div",{class:"flex items-center",key:o},[i("div",null,[s.agent.is_desktop?(e(),n("svg",B,C)):(e(),n("svg",L,O))]),i("div",J,[i("div",I,c(s.agent.platform)+" - "+c(s.agent.browser),1),i("div",null,[i("div",D,[d(c(s.ip_address)+", ",1),s.is_current_device?(e(),n("span",V,"This device")):(e(),n("span",A,"Last active "+c(s.last_active),1))])])])])))),128))])):u("",!0),i("div",E,[m(k,{onClick:s.confirmLogout},{default:r((()=>[T])),_:1},8,["onClick"]),m(x,{on:s.form.recentlySuccessful,class:"ml-3"},{default:r((()=>[$])),_:1},8,["on"])]),m(G,{show:s.confirmingLogout,onClose:s.closeModal},{title:r((()=>[z])),content:r((()=>[F,i("div",H,[m(j,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:s.form.password,"onUpdate:modelValue":h[0]||(h[0]=o=>s.form.password=o),onKeyup:f(s.logoutOtherBrowserSessions,["enter"])},null,8,["modelValue","onKeyup"]),m(U,{message:s.form.errors.password,class:"mt-2"},null,8,["message"])])])),footer:r((()=>[m(q,{onClick:s.closeModal},{default:r((()=>[K])),_:1},8,["onClick"]),m(k,{class:p(["ml-2",{"opacity-25":s.form.processing}]),onClick:s.logoutOtherBrowserSessions,disabled:s.form.processing},{default:r((()=>[P])),_:1},8,["onClick","class","disabled"])])),_:1},8,["show","onClose"])])),_:1})};export{j as default};
