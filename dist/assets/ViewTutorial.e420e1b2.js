import{T as C}from"./TutorialDataService.22fa1299.js";import{L as h}from"./LessonDataService.13609f09.js";import{_ as L,J as c,K as f,L as e,i as s,Q as a,as as u,S as m,I as V,at as _,al as p,au as E,W as g}from"./index.ab6c987a.js";import{V as n,a as v}from"./http-common.ff210ea6.js";const T={props:{lesson:Object},data(){return{}},methods:{deleteLesson(){this.$emit("deleteLesson")},updateLesson(){this.$emit("updateLesson")}}};function $(o,t,d,D,r,l){return c(),f(v,null,{default:e(()=>[s(n,{cols:"8",sm:"2"},{default:e(()=>[a("span",null,u(d.lesson.title),1)]),_:1}),s(n,{cols:"8",sm:"4"},{default:e(()=>[a("span",null,u(d.lesson.description),1)]),_:1}),s(n,{cols:"8",sm:"1"},{default:e(()=>[s(m,{size:"x-small",icon:"mdi-pencil",onClick:l.updateLesson},null,8,["onClick"])]),_:1}),s(n,{cols:"8",sm:"1"},{default:e(()=>[s(m,{size:"x-small",icon:"mdi-trash-can",onClick:l.deleteLesson},null,8,["onClick"])]),_:1})]),_:1})}var w=L(T,[["render",$]]);const y={name:"view-tutorial",props:["id"],components:{LessonDisplay:w},data(){return{tutorial:{},lessons:[],message:"Add, Edit or Delete Lessons"}},methods:{retrieveLessons(){C.get(this.id).then(o=>{this.tutorial=o.data,h.getAllLessons(this.id).then(t=>{this.lessons=t.data}).catch(t=>{this.message=t.response.data.message})}).catch(o=>{this.message=o.response.data.message})},goEditTutorial(){this.$router.push({name:"edit",params:{id:this.id}})},goEditLesson(o){this.$router.push({name:"editLesson",params:{tutorialId:this.id,lessonId:o.id}})},goAddLesson(){this.$router.push({name:"addLesson",params:{tutorialId:this.id}})},goDeleteLesson(o){h.deleteLesson(o.tutorialId,o.id).then(()=>{this.retrieveLessons()}).catch(t=>{this.message=t.response.data.message})},cancel(){this.$router.push({name:"tutorials"})}},mounted(){this.retrieveLessons()}},A=a("h2",null,"Tutorial View",-1),B=g("Edit"),I=g("Add Lesson"),S=a("span",{class:"text-h6"},"Title",-1),N=a("span",{class:"text-h6"},"Description",-1),z=a("span",{class:"text-h6"},"Edit",-1),U=a("span",{class:"text-h6"},"Delete",-1);function b(o,t,d,D,r,l){const x=V("LessonDisplay");return c(),_(p,null,[A,a("h4",null,u(r.message),1),a("h3",null,u(r.tutorial.title),1),s(m,{color:"success",onClick:t[0]||(t[0]=i=>l.goEditTutorial())},{default:e(()=>[B]),_:1}),s(m,{color:"success",onClick:t[1]||(t[1]=i=>l.goAddLesson(d.id))},{default:e(()=>[I]),_:1}),s(v,null,{default:e(()=>[s(n,{cols:"8",sm:"2"},{default:e(()=>[S]),_:1}),s(n,{cols:"8",sm:"4"},{default:e(()=>[N]),_:1}),s(n,{cols:"8",sm:"1"},{default:e(()=>[z]),_:1}),s(n,{cols:"8",sm:"1"},{default:e(()=>[U]),_:1})]),_:1}),(c(!0),_(p,null,E(r.lessons,i=>(c(),f(x,{key:i.id,lesson:i,onDeleteLesson:k=>l.goDeleteLesson(i),onUpdateLesson:k=>l.goEditLesson(i)},null,8,["lesson","onDeleteLesson","onUpdateLesson"]))),128))],64)}var O=L(y,[["render",b]]);export{O as default};
