const f={0:"Live Logs",5:"Last 5 minutes",15:"Last 15 minutes",30:"Last 30 minutes",60:"Last 1 hour",180:"Last 3 hours",360:"Last 6 hours"},u=[60*5,60*15,60*30,60*60,60*60*3,60*60*6,60*60*12,60*60*24,60*60*24*2,60*60*24*7,60*60*24*30],m={[60*5]:1,[60*15]:5,[60*30]:15,[60*60]:30,[60*60*3]:60,[60*60*6]:300,[60*60*12]:600,[60*60*24]:900,[60*60*24*2]:1800,[60*60*24*7]:3600,[60*60*24*30]:21600},g=(s,a)=>{const t=a-s,e=u.find(n=>n*1e3>t)||u[u.length-1];return m[e]},h=s=>{let a=new Date(s),t=a.getHours(),e=a.getMinutes();return t=t<10?"0"+t:t,e=e<10?"0"+e:e,`${t}:${e}`},c=s=>{typeof s!==Date&&(s=new Date(s));let a=s.getFullYear(),t=s.getMonth()+1,e=s.getDate(),r=s.getHours(),n=s.getMinutes();return t=t<10?"0"+t:t,e=e<10?"0"+e:e,r=r<10?"0"+r:r,n=n<10?"0"+n:n,`${e}/${t}/${a} ${r}:${n}`};function d(s){let a=new Date;const t=c(a);return a.setMinutes(a.getMinutes()-s),[c(a),t]}function D(s,a){let t=[];const e=g(s,a);for(let r=s;r<=a;r+=e*1e3)t.push(h(r));return t}async function S(s,a,t){const e=await s;let r=[];try{for(let n=0;n<e.length;n++){let o={title:e[n].name,labels:[],datasets:[]};o.labels=D(a,t);let l=e[n].graphLines;for(let i=0;i<l.length;i++)o.datasets.push({id:i,label:l[i].name,data:l[i].values.map((p,L)=>p.value)});r.push(o)}return r}catch(n){console.error("An error occurred while processing metrics data:",n)}}export{c as a,d as g,S as p,f as t};