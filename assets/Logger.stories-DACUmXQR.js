import{j as e}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import{L as d}from"./LogEntry-BFsc72T_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DiFv87TX.js";function a({timeStamps:s,logs:m,duration:o}){return e.jsxs("div",{className:"w-7/8 p-4 flex-col justify-center relative",children:[e.jsx("div",{className:"flex justify-end",children:s[0]!==s[1]?e.jsxs("div",{className:"flex text-base text-gray-700 font-semibold p-2 mr-2",children:[e.jsx("span",{className:"mr-2",children:`Showing logs for ${s[0]}`}),e.jsx("img",{className:"w-4",src:"Sidepane/arrow-right.png",alt:""}),e.jsx("span",{className:"ml-2",children:`${s[1]}`})]}):e.jsx("div",{className:"flex text-base text-gray-700 font-semibold p-2 mr-2",children:`Showing Live logs from ${s[0]}`})}),e.jsxs("div",{className:"w-full h-full overflow-auto justify-center bg-terminalHead rounded-lg",children:[e.jsxs("div",{className:"flex justify-center p-2",children:[e.jsx("img",{src:"Sidepane/Spinner.svg",alt:""}),e.jsx("div",{className:"ml-4 text-base text-terminalHeadText",children:o=="0"?"Live Logs":`Previous ${o} minutes logs`})]}),e.jsx("div",{className:"border-black"}),e.jsx("div",{className:"inset-0 w-full overflow-auto bg-terminalBody opacity-50",children:m.map((r,c)=>r.timestamp==null||r.timestamp==null?null:e.jsx(d,{type:r.type,timeStamp:r.timestamp,message:r.message},c))})]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Logger"};const v={title:"Components/Logger",component:a,args:{}},g=s=>e.jsx(a,{...s,timeStamps:["10:00","11:00"],logs:[],duration:"5"}),t=g.bind({});t.args={};var i,l,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'args => <Logger {...args} timeStamps={["10:00", "11:00"]} logs={[]} duration={"5"} />',...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const h=["Story"];export{t as Story,h as __namedExportsOrder,v as default};