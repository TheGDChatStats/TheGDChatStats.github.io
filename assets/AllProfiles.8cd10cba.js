import{h as l,j as d}from"./datas.65c6bde9.js";import{_,r as m,o as a,c as r,a as e,F as u,b as h,d as p,w as f,e as g,t as v}from"./index.8d5402d0.js";class b{getProfile(t){return l.get(`/${t}`)}}const N=new b,$={data(){return{data:d,url:""}},methods:{getProfile(s,t){N.getProfile(s).then(n=>{this.data.players[t].username=n.data.username})},putName(s,t){this.getProfile(s.id,t)}},mounted(){this.data.players.forEach(this.putName),console.log(this.data.players[0].username)}},y={class:"home"},P=e("header",{id:"head",class:"secondary"},null,-1),k={class:"container"},x={class:"jumbotron top-space col-sm-12"},w={class:"container"},j=["src"],B=e("br",null,null,-1),V=e("br",null,null,-1);function C(s,t,n,D,i,E){const c=m("router-link");return a(),r("div",y,[P,e("div",k,[e("div",x,[e("div",w,[(a(!0),r(u,null,h(i.data.players,o=>(a(),r("div",{key:o.name},[e("img",{src:`http://gdbrowser.com/icon/${o.username}?form=icon&size=60`},null,8,j),p(c,{class:"btn btn-danger",to:{path:`/profiles/${o.displayName}`}},{default:f(()=>[g(v(o.displayName),1)]),_:2},1032,["to"]),B,V]))),128))])])])])}var z=_($,[["render",C]]);export{z as default};
