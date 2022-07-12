import{T as m}from"./TutorialDataService.22fa1299.js";import{_ as p,J as f,at as V,Q as d,as as _,i as e,L as a,al as h,S as u,W as c}from"./index.ab6c987a.js";import{V as v}from"./VForm.e765d93b.js";import{V as n}from"./VTextField.a94c18e8.js";import{a as T,V as s}from"./http-common.ff210ea6.js";const g={name:"add-tutorial",data(){return{tutorial:{id:null,title:"",description:"",published:!1},message:"Enter data and click save"}},methods:{saveTutorial(){var i={title:this.tutorial.title,description:this.tutorial.description};m.create(i).then(t=>{this.tutorial.id=t.data.id,console.log("add "+t.data),this.$router.push({name:"tutorials"})}).catch(t=>{this.message=t.response.data.message})},cancel(){this.$router.push({name:"tutorials"})}}},x=d("h1",null,"Tutorial Add",-1),k=c("Save"),C=c("Cancel");function B(i,t,S,b,l,r){return f(),V(h,null,[x,d("h4",null,_(l.message),1),e(v,null,{default:a(()=>[e(n,{label:"Title",modelValue:l.tutorial.title,"onUpdate:modelValue":t[0]||(t[0]=o=>l.tutorial.title=o)},null,8,["modelValue"]),e(n,{label:"Description",modelValue:l.tutorial.description,"onUpdate:modelValue":t[1]||(t[1]=o=>l.tutorial.description=o)},null,8,["modelValue"]),e(T,{justify:"center"},{default:a(()=>[e(s,{col:"2"}),e(s,{col:"2"},{default:a(()=>[e(u,{color:"success",onClick:t[2]||(t[2]=o=>r.saveTutorial())},{default:a(()=>[k]),_:1})]),_:1}),e(s,{col:"2"},{default:a(()=>[e(u,{color:"info",onClick:t[3]||(t[3]=o=>r.cancel())},{default:a(()=>[C]),_:1})]),_:1}),e(s,{col:"2"})]),_:1})]),_:1})],64)}var A=p(g,[["render",B]]);export{A as default};
