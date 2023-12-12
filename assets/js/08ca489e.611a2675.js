"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Storage Module",order:1},s="Storage Module",i={unversionedId:"guide/greenfield-blockchain/modules/storage-module",id:"guide/greenfield-blockchain/modules/storage-module",title:"Storage Module",description:"Concepts",source:"@site/docs/guide/greenfield-blockchain/modules/storage-module.md",sourceDirName:"guide/greenfield-blockchain/modules",slug:"/guide/greenfield-blockchain/modules/storage-module",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-module",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/modules/storage-module.md",tags:[],version:"current",frontMatter:{title:"Storage Module",order:1},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/overview"},next:{title:"Storage Provider",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider"}},c={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Bucket",id:"bucket",level:3},{value:"Object",id:"object",level:3},{value:"Group",id:"group",level:2},{value:"State",id:"state",level:2},{value:"Params",id:"params",level:3},{value:"Messages",id:"messages",level:2},{value:"MsgCreateBucket",id:"msgcreatebucket",level:3},{value:"MsgDeleteBucket",id:"msgdeletebucket",level:3},{value:"MsgUpdateBucketInfo",id:"msgupdatebucketinfo",level:3},{value:"MsgCreateObject",id:"msgcreateobject",level:3},{value:"MsgDeleteObject",id:"msgdeleteobject",level:3},{value:"MsgSealObject",id:"msgsealobject",level:3},{value:"MsgCopyObject",id:"msgcopyobject",level:3},{value:"MsgRejectSealObject",id:"msgrejectsealobject",level:3},{value:"MsgCancelCreateObject",id:"msgcancelcreateobject",level:3},{value:"MsgCreateGroup",id:"msgcreategroup",level:3},{value:"MsgDeleteGroup",id:"msgdeletegroup",level:3},{value:"MsgLeaveGroup",id:"msgleavegroup",level:3},{value:"MsgMirrorObject",id:"msgmirrorobject",level:3},{value:"MsgMirrorBucket",id:"msgmirrorbucket",level:3},{value:"MsgMirrorGroup",id:"msgmirrorgroup",level:3},{value:"MsgMigrateBucket",id:"msgmigratebucket",level:3},{value:"MsgCancelMigrateBucket",id:"msgcancelmigratebucket",level:3},{value:"MsgSetTag",id:"msgsettag",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storage-module"},"Storage Module"),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("h3",{id:"bucket"},"Bucket"),(0,o.kt)("p",null,"A bucket serves as a logical container for storing objects in Greenfield. Each bucket is assigned a unique name by the user at the time of creation. It's essential that bucket names be globally unique within the Greenfield namespace to avoid duplication of names. Additionally, bucket names must conform to DNS naming conventions, consisting of one or more labels separated by periods."),(0,o.kt)("p",null,'Objects can be uploaded to a bucket using various methods, such as the gnfd cmd or SDKs, after the bucket has been created. Objects within a bucket can be organized and managed like folders, also referred to as "prefixes". Besides, each object is assigned a unique key (a string value) to identify it within the bucket.'),(0,o.kt)("p",null,"Each user account can create multiple buckets, with the account owning each created bucket. Every bucket should have its Primary SP associated with it, along with payment accounts for Read and Store. The owner's address will be the default payment account."),(0,o.kt)("h3",{id:"object"},"Object"),(0,o.kt)("p",null,"An object represents a fundamental unit of storage in Greenfield, consisting of both data and associated metadata. Each object has a unique name (a string value) within a bucket, identifying it."),(0,o.kt)("p",null,"Although objects are primarily used to store files in Greenfield, they can contain any data type, including text, images, videos, and program binaries. Users can upload, download, copy, or move objects using various methods such as the gnfd cmd and SDKs."),(0,o.kt)("p",null,"Objects in Greenfield have several critical features, including their name and ID, owner, hosting bucket, size and timestamps, content type, checkSums for storage pieces, storage status, and associated SP information. Object metadata is stored using the bucket name as its prefix, allowing iteration through all objects within the same bucket. However, doing so for a large bucket with numerous objects may require considerable effort."),(0,o.kt)("p",null,"Objects in Greenfield have several important characteristics, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"name and ID"),(0,o.kt)("li",{parentName:"ul"},"owner"),(0,o.kt)("li",{parentName:"ul"},"bucket that hosts it"),(0,o.kt)("li",{parentName:"ul"},"size and timestamps"),(0,o.kt)("li",{parentName:"ul"},"content type"),(0,o.kt)("li",{parentName:"ul"},"checkSums for the storage pieces"),(0,o.kt)("li",{parentName:"ul"},"storage status"),(0,o.kt)("li",{parentName:"ul"},"associated SP information"),(0,o.kt)("li",{parentName:"ul"},"tags")),(0,o.kt)("h2",{id:"group"},"Group"),(0,o.kt)("p",null,"A Group is a collection of accounts that share the same permissions. The group name cannot be duplicated under the same user. However, a group cannot create or own any resources, nor can it be a member of another group."),(0,o.kt)("p",null,"To ensure that the on-chain permission check can be completed within a constant time, only a limited number of groups can be associated with a resource for permissions."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"The storage module keeps state of the following primary objects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BucketInfo")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L14C1-L41C2"},"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L14C1-L41C2")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ObjectInfo:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L54C4-L87"},"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L54C4-L87")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GroupInfo")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L89-L104"},"https://github.com/bnb-chain/greenfield/blob/v1.0.0/proto/greenfield/storage/types.proto#L89-L104")),(0,o.kt)("p",null,"The primary objects are intended to be stored and accessed mainly using the auto-incremented sequence ",(0,o.kt)("inlineCode",{parentName:"p"},"ID"),".\nHowever, additional indices are also maintained for each primary object to ensure compatibility with the S3 object storage."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BucketInfo: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x11 | hash(bucketName) -> BigEndian(bucketId)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ObjectInfo: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x12 | hash(bucketName)_hash(objectName) -> BigEndian(objectId)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GroupInfo: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x13 | OwnerAddr_hash(groupName) -> BigEndian(groupId)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"BucketInfoById: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x21 | BigEndian(bucketId) -> ProtoBuf(BucketInfo)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ObjectInfoById: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x22 | BigEndian(objectId) -> ProtoBuf(ObjectInfo)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GroupInfoById: ",(0,o.kt)("inlineCode",{parentName:"p"},"0x23 | BigEndian(groupId) -> ProtoBuf(GroupInfo)")))),(0,o.kt)("h3",{id:"params"},"Params"),(0,o.kt)("p",null,"The storage module contains the following parameters,\nthey can be updated with governance."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"),(0,o.kt)("th",{parentName:"tr",align:null},"meaning"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MaxSegmentSize"),(0,o.kt)("td",{parentName:"tr",align:null},"16M"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum size of the segment. The payload data of an object will split into several segment. Only the size of the last segment can be less than MaxSegmentSize, others is equals.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RedundantDataChunkNum"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of the data chunks in Erasure-Code algorithm.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RedundantParityChunkNum"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of the parity chunks in Erasure-Code algorithm.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MaxPayloadSize"),(0,o.kt)("td",{parentName:"tr",align:null},"32G"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum size of the payload data that allowed in greenfield storage network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MinChargeSize"),(0,o.kt)("td",{parentName:"tr",align:null},"128KB"),(0,o.kt)("td",{parentName:"tr",align:null},"The minimum charge size of the payload, objects smaller than this size will be charged as this size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MaxBucketsPerAccount"),(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of buckets that can be created per account")))),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"In this section, we'll list out the various messages that are associated with storage modules."),(0,o.kt)("h3",{id:"msgcreatebucket"},"MsgCreateBucket"),(0,o.kt)("p",null,"Used to create a new bucket. Buckets are used to contain storage objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateBucket {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator defines the account address of bucket creator, it is also the bucket owner.\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines a globally unique name of bucket\n  string bucket_name = 2;\n  // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,\n  // otherwise every greenfield user can read it.\n  VisibilityType visibility = 3;\n  // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator\n  string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // primary_sp_address defines the address of primary sp.\n  string primary_sp_address = 5 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n  common.Approval primary_sp_approval = 6;\n  // charged_read_quota defines the read data that users are charged for, measured in bytes.\n  // The available read data for each user is the sum of the free read data provided by SP and\n  // the ChargeReadQuota specified here.\n  uint64 charged_read_quota = 7;\n  // tags defines a list of tags which will be set to the bucket\n  ResourceTags tags = 8 [(gogoproto.nullable) = false];\n}\n')),(0,o.kt)("h3",{id:"msgdeletebucket"},"MsgDeleteBucket"),(0,o.kt)("p",null,"Used to delete an existing bucket. It is important to note that you cannot delete a non-empty bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgDeleteBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // creator defines the account address of the grantee who has the DeleteBucket permission of the bucket to be deleted.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket to be deleted.\n  string bucket_name = 2;\n}\n')),(0,o.kt)("h3",{id:"msgupdatebucketinfo"},"MsgUpdateBucketInfo"),(0,o.kt)("p",null,"Used to update the information in a bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgUpdateBucketInfo {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of bucket which you\'ll update\n  string bucket_name = 2;\n  // charged_read_quota defines the traffic quota that you read from primary sp\n  // if read_quota is nil, it means don\'t change the read_quota\n  common.UInt64Value charged_read_quota = 3;\n  // payment_address defines the account address of the payment account\n  // if payment_address is empty, it means don\'t change the payment_address\n  string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,\n  // otherwise every greenfield user can read it.\n  VisibilityType visibility = 5;\n}\n')),(0,o.kt)("h3",{id:"msgcreateobject"},"MsgCreateObject"),(0,o.kt)("p",null,"Used to create an initial object under a bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateObject {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // creator defines the account address of object uploader\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n  // object_name defines the name of object\n  string object_name = 3;\n  // payload_size defines size of the object\'s payload\n  uint64 payload_size = 4;\n  // visibility means the object is private or public. if private, only object owner or grantee can access it,\n  // otherwise every greenfield user can access it.\n  VisibilityType visibility = 5;\n  // content_type defines a standard MIME type describing the format of the object.\n  string content_type = 6;\n  // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n  Approval primary_sp_approval = 7;\n  // expect_checksums defines a list of hashes which was generate by redundancy algorithm.\n  repeated bytes expect_checksums = 8;\n  // redundancy_type can be ec or replica\n  RedundancyType redundancy_type = 9;\n  // tags defines a list of tags which will be set to the object\n  ResourceTags tags = 10 [(gogoproto.nullable) = false];\n}\n')),(0,o.kt)("h3",{id:"msgdeleteobject"},"MsgDeleteObject"),(0,o.kt)("p",null,"Used to delete object that is no longer useful, the deleted storage object is not recoverable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgDeleteObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator who has the DeleteObject permission of the object to be deleted.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket where the object which to be deleted is stored.\n  string bucket_name = 2;\n  // object_name defines the name of the object which to be deleted.\n  string object_name = 3;\n}\n\n')),(0,o.kt)("h3",{id:"msgsealobject"},"MsgSealObject"),(0,o.kt)("p",null,"With this message, Storage providers seal an object once the underlying files are well saved by both primary and second SPs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgSealObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of primary SP\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n  // object_name defines the name of object to be sealed.\n  string object_name = 3;\n  // global_virtual_group_id defines the id of global virtual group\n  uint32 global_virtual_group_id = 4;\n  // secondary_sp_bls_agg_signatures defines the aggregate bls signature of the secondary sp that can\n  // acknowledge that the payload data has received and stored.\n  bytes secondary_sp_bls_agg_signatures = 5;\n}\n')),(0,o.kt)("h3",{id:"msgcopyobject"},"MsgCopyObject"),(0,o.kt)("p",null,"Used to send a copy of an object to another user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCopyObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator who has the CopyObject permission.\n  string operator = 1;\n  // src_bucket_name defines the name of the bucket where the object to be copied is located\n  string src_bucket_name = 2;\n  // dst_bucket_name defines the name of the bucket where the object is copied to.\n  string dst_bucket_name = 3;\n  // src_object_name defines the name of the object which to be copied\n  string src_object_name = 4;\n  // dst_object_name defines the name of the object which is copied to\n  string dst_object_name = 5;\n  // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user\'s request.\n  common.Approval dst_primary_sp_approval = 6;\n}\n')),(0,o.kt)("h3",{id:"msgrejectsealobject"},"MsgRejectSealObject"),(0,o.kt)("p",null,"A storage provider may reject to seal an object if it refuses to, or be unable to do so due to unexpected errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgRejectSealObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the object owner\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket where the object is stored.\n  string bucket_name = 2;\n  // object_name defines the name of unsealed object to be reject.\n  string object_name = 3;\n}\n')),(0,o.kt)("h3",{id:"msgcancelcreateobject"},"MsgCancelCreateObject"),(0,o.kt)("p",null,"The users are able to cancel an initial object before it is sealed with this message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCancelCreateObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket\n  string bucket_name = 2;\n  // object_name defines the name of the object\n  string object_name = 3;\n}\n')),(0,o.kt)("h3",{id:"msgcreategroup"},"MsgCreateGroup"),(0,o.kt)("p",null,"Used to create a new group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCreateGroup {\n  option (cosmos.msg.v1.signer) = "creator";\n\n  // owner defines the account address of group owner who create the group\n  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // group_name defines the name of the group. it\'s not globally unique.\n  string group_name = 2;\n  // extra defines extra info for the group\n  string extra = 3;\n  // tags defines a list of tags which will be set to the group\n  ResourceTags tags = 4 [(gogoproto.nullable) = false];\n}\n')),(0,o.kt)("h3",{id:"msgdeletegroup"},"MsgDeleteGroup"),(0,o.kt)("p",null,"Used to delete a group that is no longer used. Please note that the underlying members are not deleted yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgDeleteGroup {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator who has the DeleteGroup permission of the group to be deleted.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // group_name defines the name of the group which to be deleted\n  string group_name = 2;\n}\n\n')),(0,o.kt)("h3",{id:"msgleavegroup"},"MsgLeaveGroup"),(0,o.kt)("p",null,"A group member can choose to leave a group by sending this message. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgLeaveGroup {\n  option (cosmos.msg.v1.signer) = "member";\n\n  // member defines the account address of the member who want to leave the group\n  string member = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // group_owner defines the owner of the group you want to leave\n  string group_owner = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // group_name defines the name of the group you want to leave\n  string group_name = 3;\n}\n')),(0,o.kt)("h3",{id:"msgmirrorobject"},"MsgMirrorObject"),(0,o.kt)("p",null,"Mirror an object to the destination chain as NFT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgMirrorObject {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the object owner.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // id defines the unique u256 for object.\n  string id = 2 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // bucket_name defines the name of the bucket where the object is stored\n  string bucket_name = 3;\n  // object_name defines the name of object\n  string object_name = 4;\n  // destination chain id\n  uint32 dest_chain_id = 5;\n}\n')),(0,o.kt)("h3",{id:"msgmirrorbucket"},"MsgMirrorBucket"),(0,o.kt)("p",null,"Mirror a bucket to the destination chain as NFT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgMirrorBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the bucket owner.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // id defines the unique u256 for bucket.\n  string id = 2 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // bucket_name defines a globally unique name of bucket\n  string bucket_name = 3;\n  // destination chain id\n  uint32 dest_chain_id = 4;\n}\n')),(0,o.kt)("h3",{id:"msgmirrorgroup"},"MsgMirrorGroup"),(0,o.kt)("p",null,"Mirror a group to the destination chain as NFT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgMirrorGroup {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the group owner.\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // id defines the unique u256 for group.\n  string id = 2 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // group_name defines the name of the group\n  string group_name = 3;\n  // destination chain id\n  uint32 dest_chain_id = 4;\n}\n')),(0,o.kt)("h3",{id:"msgmigratebucket"},"MsgMigrateBucket"),(0,o.kt)("p",null,"Migrate a bucket to another primary SP."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgMigrateBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the operator who initial the migrate bucket\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket that need to be migrated\n  string bucket_name = 2;\n  // dst_primary_sp_id defines the destination SP for migration\n  uint32 dst_primary_sp_id = 3;\n  // dst_primary_sp_approval defines the approval of destination sp\n  common.Approval dst_primary_sp_approval = 4;\n}\n')),(0,o.kt)("h3",{id:"msgcancelmigratebucket"},"MsgCancelMigrateBucket"),(0,o.kt)("p",null,"Cancel an existing bucket migration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgCancelMigrateBucket {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the account address of the msg operator.\n  // Only the user can send this transaction to cancel the migrate bucket\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name defines the name of the bucket that need to be migrated\n  string bucket_name = 2;\n}\n')),(0,o.kt)("h3",{id:"msgsettag"},"MsgSetTag"),(0,o.kt)("p",null,"Used to update the tags of a resource. The old tags will be overwritten directly. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgSetTag {\n  option (cosmos.msg.v1.signer) = "operator";\n\n  // operator defines the operator who adds the tags\n  string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // resource defines a greenfield standard resource name that can be generated by GRN structure\n  string resource = 2;\n  // tags defines a list of tags which will be set to the resource\n  ResourceTags tags = 3;\n}\n')))}p.isMDXComponent=!0}}]);