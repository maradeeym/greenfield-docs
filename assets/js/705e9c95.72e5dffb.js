"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1881],{79145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>y,metadata:()=>u,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),s=n(26389),o=n(94891),r=n(75190),p=n(47507),l=n(24310),m=n(63303),d=(n(75035),n(85162));const y={id:"abci-query",title:"ABCIQuery",description:"ABCIQuery defines a query handler that supports ABCI queries",sidebar_label:"ABCIQuery",hide_title:!0,hide_table_of_contents:!0,api:{description:"ABCIQuery defines a query handler that supports ABCI queries\ndirectly to the\n\napplication, bypassing Tendermint completely. The ABCI query must contain\n\na valid and supported path, including app, custom, p2p, and store.",operationId:"ABCIQuery",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{code:{type:"integer",format:"int64"},log:{type:"string"},info:{type:"string"},index:{type:"string",format:"int64"},key:{type:"string",format:"byte"},value:{type:"string",format:"byte"},proof_ops:{type:"object",properties:{ops:{type:"array",items:{type:"object",properties:{type:{type:"string"},key:{type:"string",format:"byte"},data:{type:"string",format:"byte"}},description:"ProofOp defines an operation used for calculating Merkle root. The data could\nbe arbitrary format, providing necessary data for example neighbouring node\nhash.\n\nNote: This type is a duplicate of the ProofOp proto type defined in Tendermint."}}},description:"ProofOps is Merkle proof defined by the list of ProofOps.\n\nNote: This type is a duplicate of the ProofOps proto type defined in Tendermint."},height:{type:"string",format:"int64"},codespace:{type:"string"}},description:"ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.\n\nNote: This type is a duplicate of the ResponseQuery proto type defined in\nTendermint."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com. As of May 2023, there are no widely used type server\nimplementations and no plans to implement one.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"data",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"path",in:"query",required:!1,schema:{type:"string"}},{name:"height",in:"query",required:!1,schema:{type:"string",format:"int64"}},{name:"prove",in:"query",required:!1,schema:{type:"boolean"}}],tags:["base"],method:"get",path:"/cosmos/base/tendermint/v1beta1/abci_query",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ABCIQuery",description:{content:"ABCIQuery defines a query handler that supports ABCI queries\ndirectly to the\n\napplication, bypassing Tendermint completely. The ABCI query must contain\n\na valid and supported path, including app, custom, p2p, and store.",type:"text/plain"},url:{path:["cosmos","base","tendermint","v1beta1","abci_query"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"data",value:""},{disabled:!1,key:"path",value:""},{disabled:!1,key:"height",value:""},{disabled:!1,key:"prove",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},c=void 0,u={unversionedId:"greenfield-api/abci-query",id:"greenfield-api/abci-query",title:"ABCIQuery",description:"ABCIQuery defines a query handler that supports ABCI queries",source:"@site/docs/greenfield-api/abci-query.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/abci-query",permalink:"/greenfield-docs/docs/greenfield-api/abci-query",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"abci-query",title:"ABCIQuery",description:"ABCIQuery defines a query handler that supports ABCI queries",sidebar_label:"ABCIQuery",hide_title:!0,hide_table_of_contents:!0,api:{description:"ABCIQuery defines a query handler that supports ABCI queries\ndirectly to the\n\napplication, bypassing Tendermint completely. The ABCI query must contain\n\na valid and supported path, including app, custom, p2p, and store.",operationId:"ABCIQuery",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{code:{type:"integer",format:"int64"},log:{type:"string"},info:{type:"string"},index:{type:"string",format:"int64"},key:{type:"string",format:"byte"},value:{type:"string",format:"byte"},proof_ops:{type:"object",properties:{ops:{type:"array",items:{type:"object",properties:{type:{type:"string"},key:{type:"string",format:"byte"},data:{type:"string",format:"byte"}},description:"ProofOp defines an operation used for calculating Merkle root. The data could\nbe arbitrary format, providing necessary data for example neighbouring node\nhash.\n\nNote: This type is a duplicate of the ProofOp proto type defined in Tendermint."}}},description:"ProofOps is Merkle proof defined by the list of ProofOps.\n\nNote: This type is a duplicate of the ProofOps proto type defined in Tendermint."},height:{type:"string",format:"int64"},codespace:{type:"string"}},description:"ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.\n\nNote: This type is a duplicate of the ResponseQuery proto type defined in\nTendermint."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com. As of May 2023, there are no widely used type server\nimplementations and no plans to implement one.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n    // or ...\n    if (any.isSameTypeAs(Foo.getDefaultInstance())) {\n      foo = any.unpack(Foo.getDefaultInstance());\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := anypb.New(foo)\n     if err != nil {\n       ...\n     }\n     ...\n     foo := &pb.Foo{}\n     if err := any.UnmarshalTo(foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"data",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"path",in:"query",required:!1,schema:{type:"string"}},{name:"height",in:"query",required:!1,schema:{type:"string",format:"int64"}},{name:"prove",in:"query",required:!1,schema:{type:"boolean"}}],tags:["base"],method:"get",path:"/cosmos/base/tendermint/v1beta1/abci_query",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"ABCIQuery",description:{content:"ABCIQuery defines a query handler that supports ABCI queries\ndirectly to the\n\napplication, bypassing Tendermint completely. The ABCI query must contain\n\na valid and supported path, including app, custom, p2p, and store.",type:"text/plain"},url:{path:["cosmos","base","tendermint","v1beta1","abci_query"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"data",value:""},{disabled:!1,key:"path",value:""},{disabled:!1,key:"height",value:""},{disabled:!1,key:"prove",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"SupplyOf",permalink:"/greenfield-docs/docs/greenfield-api/supply-of"},next:{title:"GetLatestBlock",permalink:"/greenfield-docs/docs/greenfield-api/get-latest-block"}},h={},f=[{value:"ABCIQuery",id:"abciquery",level:2}],g={toc:f},b="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"abciquery"},"ABCIQuery"),(0,i.kt)("p",null,"ABCIQuery defines a query handler that supports ABCI queries\ndirectly to the"),(0,i.kt)("p",null,"application, bypassing Tendermint completely. The ABCI query must contain"),(0,i.kt)("p",null,"a valid and supported path, including app, custom, p2p, and store."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"data",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"path",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"height",in:"query",required:!1,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"prove",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"log",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"index",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"proof_ops"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"ProofOps is Merkle proof defined by the list of ProofOps."),(0,i.kt)("p",null,"Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.")),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"ops"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"data",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(l.Z,{collapsible:!1,name:"height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"codespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "code": 0,\n  "log": "string",\n  "info": "string",\n  "index": "string",\n  "key": "string",\n  "value": "string",\n  "proof_ops": {\n    "ops": [\n      {\n        "type": "string",\n        "key": "string",\n        "data": "string"\n      }\n    ]\n  },\n  "height": "string",\n  "codespace": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com. As of May 2023, there are no widely used type server\nimplementations and no plans to implement one.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);