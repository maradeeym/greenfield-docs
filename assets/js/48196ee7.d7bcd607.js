"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[482],{1550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>g,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(26389),n=a(94891),o=a(75190),p=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const u={id:"head-group",title:"HeadGroup",description:"Queries a group with specify owner and name .",sidebar_label:"HeadGroup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{group_info:{type:"object",properties:{owner:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},group_name:{type:"string",description:"group_name is the name of group which is unique under an account."},source_type:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN"},id:{type:"string",title:"id is the unique identifier of group"},extra:{type:"string",title:"extra is used to store extra info for the group"},tags:{title:"tags defines a list of tags the group has",type:"object",properties:{tags:{type:"array",items:{type:"object",properties:{key:{type:"string"},value:{type:"string"}}},title:"tags defines a list of tags the resource has"}}}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},{name:"group_name",in:"path",required:!0,schema:{type:"string"}}],tags:["storage"],description:"Queries a group with specify owner and name .",method:"get",path:"/greenfield/storage/head_group/{group_owner}/{group_name}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"HeadGroup",description:{content:"Queries a group with specify owner and name .",type:"text/plain"},url:{path:["greenfield","storage","head_group",":group_owner",":group_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_owner"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,g={unversionedId:"greenfield-api/head-group",id:"greenfield-api/head-group",title:"HeadGroup",description:"Queries a group with specify owner and name .",source:"@site/docs/greenfield-api/head-group.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/head-group",permalink:"/greenfield-docs/docs/greenfield-api/head-group",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"head-group",title:"HeadGroup",description:"Queries a group with specify owner and name .",sidebar_label:"HeadGroup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{group_info:{type:"object",properties:{owner:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},group_name:{type:"string",description:"group_name is the name of group which is unique under an account."},source_type:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN"},id:{type:"string",title:"id is the unique identifier of group"},extra:{type:"string",title:"extra is used to store extra info for the group"},tags:{title:"tags defines a list of tags the group has",type:"object",properties:{tags:{type:"array",items:{type:"object",properties:{key:{type:"string"},value:{type:"string"}}},title:"tags defines a list of tags the resource has"}}}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},{name:"group_name",in:"path",required:!0,schema:{type:"string"}}],tags:["storage"],description:"Queries a group with specify owner and name .",method:"get",path:"/greenfield/storage/head_group/{group_owner}/{group_name}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"HeadGroup",description:{content:"Queries a group with specify owner and name .",type:"text/plain"},url:{path:["greenfield","storage","head_group",":group_owner",":group_name"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_owner"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"group_name"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"HeadBucketNFT",permalink:"/greenfield-docs/docs/greenfield-api/head-bucket-nft"},next:{title:"HeadGroupMember",permalink:"/greenfield-docs/docs/greenfield-api/head-group-member"}},y={},h=[{value:"HeadGroup",id:"headgroup",level:2}],f={toc:h},_="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(_,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"headgroup"},"HeadGroup"),(0,i.kt)("p",null,"Queries a group with specify owner and name ."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"group_owner",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"group_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"group_info"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"owner is the owner of the group. It can not changed once it created."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"group_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"group_name is the name of group which is unique under an account."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"source_type",required:!1,schemaName:"source_type",qualifierMessage:"**Possible values:** [`SOURCE_TYPE_ORIGIN`, `SOURCE_TYPE_MIRROR_PENDING`, `SOURCE_TYPE_BSC_CROSS_CHAIN`, `SOURCE_TYPE_OP_CROSS_CHAIN`]",schema:{title:"source_type",type:"string",enum:["SOURCE_TYPE_ORIGIN","SOURCE_TYPE_MIRROR_PENDING","SOURCE_TYPE_BSC_CROSS_CHAIN","SOURCE_TYPE_OP_CROSS_CHAIN"],default:"SOURCE_TYPE_ORIGIN"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is the unique identifier of group",qualifierMessage:void 0,schema:{type:"string",title:"id is the unique identifier of group"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"extra",required:!1,schemaName:"extra is used to store extra info for the group",qualifierMessage:void 0,schema:{type:"string",title:"extra is used to store extra info for the group"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"tags"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "group_info": {\n    "owner": "string",\n    "group_name": "string",\n    "source_type": "SOURCE_TYPE_ORIGIN",\n    "id": "string",\n    "extra": "string",\n    "tags": {\n      "tags": [\n        {\n          "key": "string",\n          "value": "string"\n        }\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);