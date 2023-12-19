"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[712],{13911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>_,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var s=r(87462),a=(r(67294),r(3905)),i=r(26389),p=r(94891),n=r(75190),o=r(47507),l=r(24310),d=r(63303),c=(r(75035),r(85162));const m={id:"query-sp-storage-price",title:"QuerySpStoragePrice",description:"get the latest storage price of specific sp",sidebar_label:"QuerySpStoragePrice",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QuerySpStoragePrice",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sp_storage_price:{type:"object",properties:{sp_id:{type:"integer",format:"int64",title:"sp id"},update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},free_read_quota:{type:"string",format:"uint64",title:"free read quota, in byte"},store_price:{type:"string",title:"store price, in bnb wei per charge byte"}},title:"storage price of a specific sp"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}}],tags:["sp"],description:"get the latest storage price of specific sp",method:"get",path:"/greenfield/sp/sp_storage_price/{sp_addr}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QuerySpStoragePrice",description:{content:"get the latest storage price of specific sp",type:"text/plain"},url:{path:["greenfield","sp","sp_storage_price",":sp_addr"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) operator address of sp",type:"text/plain"},type:"any",value:"",key:"sp_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,u={unversionedId:"greenfield-api/query-sp-storage-price",id:"greenfield-api/query-sp-storage-price",title:"QuerySpStoragePrice",description:"get the latest storage price of specific sp",source:"@site/docs/greenfield-api/query-sp-storage-price.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-sp-storage-price",permalink:"/greenfield-docs/docs/greenfield-api/query-sp-storage-price",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-sp-storage-price",title:"QuerySpStoragePrice",description:"get the latest storage price of specific sp",sidebar_label:"QuerySpStoragePrice",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QuerySpStoragePrice",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{sp_storage_price:{type:"object",properties:{sp_id:{type:"integer",format:"int64",title:"sp id"},update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},free_read_quota:{type:"string",format:"uint64",title:"free read quota, in byte"},store_price:{type:"string",title:"store price, in bnb wei per charge byte"}},title:"storage price of a specific sp"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}}],tags:["sp"],description:"get the latest storage price of specific sp",method:"get",path:"/greenfield/sp/sp_storage_price/{sp_addr}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QuerySpStoragePrice",description:{content:"get the latest storage price of specific sp",type:"text/plain"},url:{path:["greenfield","sp","sp_storage_price",":sp_addr"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) operator address of sp",type:"text/plain"},type:"any",value:"",key:"sp_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SpParams",permalink:"/greenfield-docs/docs/greenfield-api/sp-params"},next:{title:"StorageProviderByOperatorAddress",permalink:"/greenfield-docs/docs/greenfield-api/storage-provider-by-operator-address"}},y={},f=[{value:"QuerySpStoragePrice",id:"queryspstorageprice",level:2}],h={toc:f},b="wrapper";function _(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"queryspstorageprice"},"QuerySpStoragePrice"),(0,a.kt)("p",null,"get the latest storage price of specific sp"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(n.Z,{className:"paramsItem",param:{name:"sp_addr",description:"operator address of sp",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"sp_storage_price"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"sp_id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"sp id"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"update_time_sec",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"read_price",required:!1,schemaName:"read price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"read price, in bnb wei per charge byte"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"free_read_quota",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"free read quota, in byte"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"store_price",required:!1,schemaName:"store price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"store price, in bnb wei per charge byte"},mdxType:"SchemaItem"}))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "sp_storage_price": {\n    "sp_id": 0,\n    "update_time_sec": "string",\n    "read_price": "string",\n    "free_read_quota": "string",\n    "store_price": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);