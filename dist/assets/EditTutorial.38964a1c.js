import{T as d}from"./TutorialDataService.22fa1299.js";import{_ as c,J as V,at as f,Q as m,as as h,i as e,L as i,al as T,S as n,W as p}from"./index.ab6c987a.js";import{V as _}from"./VForm.e765d93b.js";import{V as r}from"./VTextField.a94c18e8.js";import{a as g,V as s}from"./http-common.ff210ea6.js";const v={name:"edit-tutorial",props:["id"],data(){return{tutorial:{},message:"Enter data and click save"}},methods:{retrieveTutorial(){d.get(this.id).then(o=>{this.tutorial=o.data}).catch(o=>{this.message=o.response.data.message})},updateTutorial(){var o={title:this.tutorial.title,description:this.tutorial.description};d.update(this.id,o).then(t=>{this.tutorial.id=t.data.id,console.log("add "+t.data),this.$router.push({name:"tutorials"})}).catch(t=>{this.message=t.response.data.message})},cancel(){this.$router.push({name:"tutorials"})}},mounted(){this.retrieveTutorial()}},x=m("h1",null,"Tutorial Edit",-1),b=p("Save"),k=p("Cancel");function C(o,t,B,D,l,u){return V(),f(T,null,[x,m("h4",null,h(l.message),1),e(_,null,{default:i(()=>[e(r,{label:"Title",modelValue:l.tutorial.title,"onUpdate:modelValue":t[0]||(t[0]=a=>l.tutorial.title=a)},null,8,["modelValue"]),e(r,{label:"Description",modelValue:l.tutorial.description,"onUpdate:modelValue":t[1]||(t[1]=a=>l.tutorial.description=a)},null,8,["modelValue"]),e(r,{label:"Description",modelValue:l.tutorial.published,"onUpdate:modelValue":t[2]||(t[2]=a=>l.tutorial.published=a)},null,8,["modelValue"]),e(g,{justify:"center"},{default:i(()=>[e(s,{col:"2"}),e(s,{col:"2"},{default:i(()=>[e(n,{color:"success",onClick:t[3]||(t[3]=a=>u.updateTutorial())},{default:i(()=>[b]),_:1})]),_:1}),e(s,{col:"2"},{default:i(()=>[e(n,{color:"info",onClick:t[4]||(t[4]=a=>u.cancel())},{default:i(()=>[k]),_:1})]),_:1}),e(s,{col:"2"})]),_:1})]),_:1})],64)}var w=c(v,[["render",C]]);export{w as default};