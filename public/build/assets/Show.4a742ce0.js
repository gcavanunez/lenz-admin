import{_ as o}from"./AppLayout.f1ff62f3.js";import t from"./DeleteUserForm.ff7fef5e.js";import{_ as e}from"./SectionBorder.a457ee0f.js";import s from"./LogoutOtherBrowserSessionsForm.865eb707.js";import r from"./TwoFactorAuthenticationForm.a5856a04.js";import a from"./UpdatePasswordForm.503794fa.js";import m from"./UpdateProfileInformationForm.ba8944d0.js";import{f as i,r as p,o as n,j as f,w as d,e as l,d as c,g as u,k as j,F as g}from"./vendor.29602760.js";import"./Modal.dd37111d.js";import"./SectionTitle.eb211a08.js";import"./DialogModal.0de067de.js";import"./DangerButton.a9eb63cb.js";import"./Input.50ab76f7.js";import"./InputError.f1d04133.js";import"./SecondaryButton.b9140fe7.js";import"./ActionMessage.8f5478c1.js";import"./Button.fec46e4f.js";import"./FormSection.5f765ba6.js";import"./Label.e57b6dd2.js";const F=i({props:["sessions"],components:{AppLayout:o,DeleteUserForm:t,JetSectionBorder:e,LogoutOtherBrowserSessionsForm:s,TwoFactorAuthenticationForm:r,UpdatePasswordForm:a,UpdateProfileInformationForm:m}}),b=l("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},h={key:0},y={key:1},x={key:2};F.render=function(o,t,e,s,r,a){const m=p("update-profile-information-form"),i=p("jet-section-border"),F=p("update-password-form"),P=p("two-factor-authentication-form"),U=p("logout-other-browser-sessions-form"),A=p("delete-user-form"),B=p("app-layout");return n(),f(B,{title:"Profile"},{header:d((()=>[b])),default:d((()=>[l("div",null,[l("div",w,[o.$page.props.jetstream.canUpdateProfileInformation?(n(),c("div",h,[u(m,{user:o.$page.props.user},null,8,["user"]),u(i)])):j("",!0),o.$page.props.jetstream.canUpdatePassword?(n(),c("div",y,[u(F,{class:"mt-10 sm:mt-0"}),u(i)])):j("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(n(),c("div",x,[u(P,{class:"mt-10 sm:mt-0"}),u(i)])):j("",!0),u(U,{sessions:o.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(n(),c(g,{key:3},[u(i),u(A,{class:"mt-10 sm:mt-0"})],64)):j("",!0)])])])),_:1})};export{F as default};