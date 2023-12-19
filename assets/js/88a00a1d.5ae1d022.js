"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4414],{20234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>y});var i=n(87462),a=(n(67294),n(3905)),r=n(26389),s=n(94891),l=(n(75190),n(47507)),m=n(24310),o=n(63303),p=(n(75035),n(85162));const d={id:"inturn-attestation-submitter",title:"InturnAttestationSubmitter",description:"Queries the inturn challenger.",sidebar_label:"InturnAttestationSubmitter",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"InturnAttestationSubmitter",responses:{200:{description:"",content:{"*/*":{schema:{type:"object",properties:{bls_pub_key:{type:"string"},submit_interval:{type:"object",properties:{start:{type:"string",format:"uint64"},end:{type:"string",format:"uint64"}}}},description:"QueryInturnAttestationSubmitterResponse is response type for the Query/InturnAttestationSubmitter RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["challenge"],description:"Queries the inturn challenger.",method:"get",path:"/greenfield/challenge/inturn_attestation_submitter",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"InturnAttestationSubmitter",description:{content:"Queries the inturn challenger.",type:"text/plain"},url:{path:["greenfield","challenge","inturn_attestation_submitter"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,c={unversionedId:"greenfield-api/inturn-attestation-submitter",id:"greenfield-api/inturn-attestation-submitter",title:"InturnAttestationSubmitter",description:"Queries the inturn challenger.",source:"@site/docs/greenfield-api/inturn-attestation-submitter.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/inturn-attestation-submitter",permalink:"/greenfield-docs/docs/greenfield-api/inturn-attestation-submitter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"inturn-attestation-submitter",title:"InturnAttestationSubmitter",description:"Queries the inturn challenger.",sidebar_label:"InturnAttestationSubmitter",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"InturnAttestationSubmitter",responses:{200:{description:"",content:{"*/*":{schema:{type:"object",properties:{bls_pub_key:{type:"string"},submit_interval:{type:"object",properties:{start:{type:"string",format:"uint64"},end:{type:"string",format:"uint64"}}}},description:"QueryInturnAttestationSubmitterResponse is response type for the Query/InturnAttestationSubmitter RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["challenge"],description:"Queries the inturn challenger.",method:"get",path:"/greenfield/challenge/inturn_attestation_submitter",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"InturnAttestationSubmitter",description:{content:"Queries the inturn challenger.",type:"text/plain"},url:{path:["greenfield","challenge","inturn_attestation_submitter"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"AttestedChallenge",permalink:"/greenfield-docs/docs/greenfield-api/attested-challenge"},next:{title:"LatestAttestedChallenges",permalink:"/greenfield-docs/docs/greenfield-api/latest-attested-challenges"}},g={},y=[{value:"InturnAttestationSubmitter",id:"inturnattestationsubmitter",level:2}],h={toc:y},b="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inturnattestationsubmitter"},"InturnAttestationSubmitter"),(0,a.kt)("p",null,"Queries the inturn challenger."),(0,a.kt)("div",null,(0,a.kt)(r.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"bls_pub_key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"submit_interval"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"start",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"end",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "bls_pub_key": "string",\n  "submit_interval": {\n    "start": "string",\n    "end": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(o.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);