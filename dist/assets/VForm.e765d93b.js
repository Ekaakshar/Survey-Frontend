var c=Object.defineProperty;var s=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var m=(o,t,e)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,n=(o,t)=>{for(var e in t||(t={}))v.call(t,e)&&m(o,e,t[e]);if(s)for(var e of s(t))V.call(t,e)&&m(o,e,t[e]);return o};import{m as b,c as F}from"./VTextField.a94c18e8.js";import{d as R,a6 as h,h as D,i as S}from"./index.ab6c987a.js";const N=R({name:"VForm",props:n({},b()),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,t){let{slots:e,emit:u}=t;const a=F(o),l=h();function f(r){r.preventDefault(),a.reset()}function i(r){r.preventDefault(),a.validate().then(d=>{let{valid:p}=d;p&&u("submit",r)})}return D(()=>{var r;return S("form",{ref:l,class:"v-form",novalidate:!0,onReset:f,onSubmit:i},[(r=e.default)==null?void 0:r.call(e,a)])}),a}});export{N as V};
