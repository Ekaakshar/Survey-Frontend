import{L as f}from"./LessonDataService.13609f09.js";import{_ as V,J as h,at as _,Q as i,as as d,i as s,L as t,al as v,S as u,W as c}from"./index.ab6c987a.js";import{V as L}from"./VForm.e765d93b.js";import{V as m}from"./VTextField.a94c18e8.js";import{a as I,V as a}from"./http-common.ff210ea6.js";const g={name:"add-lesson",props:["tutorialId"],data(){return{lesson:{id:null,title:"",description:"",published:!1},message:"Enter data and click save"}},methods:{saveLesson(){var n={title:this.lesson.title,description:this.lesson.description,tutorialId:this.tutorialId};f.createLesson(this.tutorialId,n).then(e=>{this.lesson.id=e.data.id,this.$router.push({name:"view",params:{id:this.tutorialId}})}).catch(e=>{this.message=e.response.data.message})},cancel(){this.$router.push({name:"view",params:{id:this.tutorialId}})}}},x=i("h1",null,"Add Lesson",-1),k=c("Save"),C=c("Cancel");function w(n,e,p,B,l,r){return h(),_(v,null,[x,i("h4",null,d(l.message),1),i("h4",null,"Tutorial : "+d(p.tutorialId),1),s(L,null,{default:t(()=>[s(m,{label:"Title",modelValue:l.lesson.title,"onUpdate:modelValue":e[0]||(e[0]=o=>l.lesson.title=o)},null,8,["modelValue"]),s(m,{label:"Description",modelValue:l.lesson.description,"onUpdate:modelValue":e[1]||(e[1]=o=>l.lesson.description=o)},null,8,["modelValue"]),s(I,{justify:"center"},{default:t(()=>[s(a,{col:"2"}),s(a,{col:"2"},{default:t(()=>[s(u,{color:"success",onClick:e[2]||(e[2]=o=>r.saveLesson())},{default:t(()=>[k]),_:1})]),_:1}),s(a,{col:"2"},{default:t(()=>[s(u,{color:"info",onClick:e[3]||(e[3]=o=>r.cancel())},{default:t(()=>[C]),_:1})]),_:1}),s(a,{col:"2"})]),_:1})]),_:1})],64)}var N=V(g,[["render",w]]);export{N as default};