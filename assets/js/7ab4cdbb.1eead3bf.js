"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={},o="SP Workflow",s={unversionedId:"guide/storage-provider/introduction/workflow",id:"guide/storage-provider/introduction/workflow",title:"SP Workflow",description:"This section will combine all the current and existing workflows of SP to help you understand how SP works and how internal state flows.",source:"@site/docs/guide/storage-provider/introduction/workflow.md",sourceDirName:"guide/storage-provider/introduction",slug:"/guide/storage-provider/introduction/workflow",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/workflow",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/introduction/workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/overview"},next:{title:"The Greenfield Storage Provider Standard",permalink:"/greenfield-docs/docs/guide/storage-provider/introduction/standard"}},l={},c=[{value:"Get Approval",id:"get-approval",level:2},{value:"Upload Object",id:"upload-object",level:2},{value:"Gateway",id:"gateway",level:3},{value:"Uploader",id:"uploader",level:3},{value:"TaskExecutor",id:"taskexecutor",level:3},{value:"Receiver",id:"receiver",level:3},{value:"TaskExecutor",id:"taskexecutor-1",level:3},{value:"Download Object",id:"download-object",level:2},{value:"Gateway",id:"gateway-1",level:3},{value:"Downloader",id:"downloader",level:3},{value:"QueryMeta",id:"querymeta",level:2},{value:"Gateway",id:"gateway-2",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Get Challenge Piece Info",id:"get-challenge-piece-info",level:2},{value:"Gateway",id:"gateway-3",level:3},{value:"Downloader",id:"downloader-1",level:3},{value:"GC Object",id:"gc-object",level:2},{value:"GC ZombiePiece",id:"gc-zombiepiece",level:2},{value:"GC Meta",id:"gc-meta",level:2},{value:"Migrate Bucket",id:"migrate-bucket",level:2},{value:"SP Exit",id:"sp-exit",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sp-workflow"},"SP Workflow"),(0,i.kt)("p",null,"This section will combine all the current and existing workflows of SP to help you understand how SP works and how internal state flows."),(0,i.kt)("h2",{id:"get-approval"},"Get Approval"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/get_approval"},"GetApproval")," API includes actions: ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateBucket")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateObject"),". To upload an object into SP, you must first send a CreateBucket approval request, which will create a bucket on the Greenfield blockchain. If the request is successful, you can then send a CreateObject approval request. Both of these actions are used to determine whether SP is willing to serve the request. SP may reject users with a bad reputation or specific objects or buckets. SP approves the request by signing a message for the action and responding to the users. By default, SP will serve the request, but it can refuse if it chooses to do so. Each SP can customize its own strategy for accepting or rejecting requests."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/07-get_approval.jpg",width:"1000",height:"100"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gateway receives GetApproval requests from the request originator."),(0,i.kt)("li",{parentName:"ul"},"Gateway verifies the signature of request to ensure that the request has not been tampered with."),(0,i.kt)("li",{parentName:"ul"},"Gateway invokes Authenticator to check the authorization to ensure the corresponding account is existed."),(0,i.kt)("li",{parentName:"ul"},"Gateway invokes Approver to fills the CreateBucket/CreateObject message timeout field and dispatches the request to Signer service."),(0,i.kt)("li",{parentName:"ul"},"Gets Signature from Signer, fills the message's approval signature field, and returns to the request originator.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")),(0,i.kt)("p",null,"By default, each account can create a maximum of 100 buckets."),(0,i.kt)("p",null,"If users send multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateBucket")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateObject")," approval requests in a short period of time, SP will provide the same results due to an expired blockchain height that is set to prevent repeated requests, such as DDoS attacks."),(0,i.kt)("p",null,"See request and response details for this API: ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/get_approval"},"GetApproval"),"."),(0,i.kt)("h2",{id:"upload-object"},"Upload Object"),(0,i.kt)("p",null,"After successfully sending requests to the ",(0,i.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/docs/api-sdk/storage-provider-rest/get_approval.html"},"GetApproval")," API and receiving results, you can upload an object to SP. This API involves two steps: first, users manually upload an object to PrimarySP; second, after a successful upload to PrimarySP, the object is automatically replicated to secondarySP to ensure data reliability."),(0,i.kt)("p",null,"Upload to PrimarySP flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/08-put_object.jpg",width:"1000",height:"100"})),(0,i.kt)("h3",{id:"gateway"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/gateway"},"Gateway")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gateway receives PutObject requests from client."),(0,i.kt)("li",{parentName:"ul"},"Gateway verifies the signature of request to ensure that the request has not been tampered with."),(0,i.kt)("li",{parentName:"ul"},"Gateway invokes Authenticator to check the authorization to ensure the corresponding account has permissions on resources."),(0,i.kt)("li",{parentName:"ul"},"Dispatches the request to Uploader module.")),(0,i.kt)("h3",{id:"uploader"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/uploader"},"Uploader")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uploader accepts object data in a streaming format and divides it into segments based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"MaxSegmentSize"),", which is determined by consensus in the Greenfield chain. The segmented data is then stored in the PieceStore."),(0,i.kt)("li",{parentName:"ul"},"Uploader creates a TaskContext with an initial state of ",(0,i.kt)("inlineCode",{parentName:"li"},"INIT_UNSPECIFIED"),". Upon beginning the upload of segments, the TaskContext's state transitions to ",(0,i.kt)("inlineCode",{parentName:"li"},"UPLOAD_OBJECT_DOING"),". Once all segments have been uploaded, the TaskContext's state changes to ",(0,i.kt)("inlineCode",{parentName:"li"},"UPLOAD_OBJECT_DONE"),". In the event of any abnormal situations during the upload, the TaskContext's state will change to ",(0,i.kt)("inlineCode",{parentName:"li"},"UPLOAD_OBJECT_ERROR"),"."),(0,i.kt)("li",{parentName:"ul"},"After uploading all segments, insert segments data checksums and root checksum into the SP DB."),(0,i.kt)("li",{parentName:"ul"},"Uploader creates an upload object task for Manager and returns a success message to the client indicating that the put object request is successful.")),(0,i.kt)("h3",{id:"taskexecutor"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/taskexecutor"},"TaskExecutor")),(0,i.kt)("p",null,"Replicate to SecondarySP flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/09-replicate_object.jpg",width:"1000",height:"100"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Executor fetch ReplicatePieceTask from the Manager which help pick a proper virtual group."),(0,i.kt)("li",{parentName:"ul"},"The object data is asynchronously replicated to virtual group secondary SPs."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor retrieves segments from the PieceStore in parallel and uses ",(0,i.kt)("inlineCode",{parentName:"li"},"Erasure Coding(EC)")," to compute a data redundancy solution for these segments, generating the corresponding EC pieces. The EC pieces are then organized into six replicate data groups, with each group containing several EC pieces based on the Redundancy policy."),(0,i.kt)("li",{parentName:"ul"},"Then sends the replicate data groups in streaming to the selected secondary SPs in parallel."),(0,i.kt)("li",{parentName:"ul"},"The TaskContext's secondary SP information is updated once the replication of a secondary SP is completed. The TaskContext's state changes from ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLICATE_OBJECT_DOING")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLICATE_OBJECT_DONE")," only after all secondary SPs have completed replication.")),(0,i.kt)("h3",{id:"receiver"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/receiver"},"Receiver")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receiver checks whether the SecondarySP approval is self-signed and has timed out. If either of these conditions is true, the system returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGNATURE_ERROR")," to TaskExecutor."),(0,i.kt)("li",{parentName:"ul"},"Receiver works in secondary SP, receives EC pieces that belong to the same replicate data group, and uploads the EC pieces to the secondary SP PieceStore."),(0,i.kt)("li",{parentName:"ul"},"Computes the EC pieces integrity checksum, sign the integrity checksum by SP's approval private key, then returns these to TaskExecutor.")),(0,i.kt)("h3",{id:"taskexecutor-1"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/taskexecutor"},"TaskExecutor")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receives the response from secondary SPs' Receiver, and unsigned the signature to compare with the secondary SP's approval public key."),(0,i.kt)("li",{parentName:"ul"},"Sends the MsgSealObject to the Signer for signing the seal object transaction and broadcasting to the Greenfield chain with the secondary SPs' integrity hash and signature. The state of the TaskContext turns to ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_OBJECT_DOING")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLICATE_OBJECT_DONE"),". If Signer succeeds to broadcast the SealObjectTX, changes ",(0,i.kt)("inlineCode",{parentName:"li"},"SEAL_OBJECT_TX_DOING")," state immediately into ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGN_OBJECT_DONE")," state."),(0,i.kt)("li",{parentName:"ul"},"Monitor the execution results of seal object transaction on the Greenfield chain to determine whether the seal is successful. If so, the TaskContext state is changed into ",(0,i.kt)("inlineCode",{parentName:"li"},"SEAL_OBJECT_DONE")," state.")),(0,i.kt)("p",null,"See request and response details for this API: ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/put_object"},"PutObject"),"."),(0,i.kt)("h2",{id:"download-object"},"Download Object"),(0,i.kt)("p",null,"Users can download an object from PrimarySP. The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/10-get_object.jpg",width:"1000",height:"100"})),(0,i.kt)("h3",{id:"gateway-1"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/gateway"},"Gateway")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receives the GetObject request from the client."),(0,i.kt)("li",{parentName:"ul"},"Verifies the signature of request to ensure that the request has not been tampered with."),(0,i.kt)("li",{parentName:"ul"},"Checks the authorization to ensure the corresponding account has permissions on resources."),(0,i.kt)("li",{parentName:"ul"},"Checks the object state and payment account state to ensure the object is uploaded in the primary SP, and the payment account is active."),(0,i.kt)("li",{parentName:"ul"},"Dispatches the request to Downloader.")),(0,i.kt)("h3",{id:"downloader"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/downloader"},"Downloader")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receives the GetObject request from the Gateway service."),(0,i.kt)("li",{parentName:"ul"},"Check whether the read traffic exceeds the quota.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If exceeds the quota, the Downloader refuses to serve and returns a not-enough-quota error to the Gateway."),(0,i.kt)("li",{parentName:"ul"},"If the quota is sufficient, Downloader inserts read record into the SP traffic-db."))),(0,i.kt)("li",{parentName:"ul"},"Downloader splits the GetObject request into GetPiece requests (which support range reads) to retrieve the corresponding piece payload data. Downloader then streams the object payload data back to the Gateway.")),(0,i.kt)("p",null,"See request and response details for this API: ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/put_object"},"GetObject"),"."),(0,i.kt)("h2",{id:"querymeta"},"QueryMeta"),(0,i.kt)("p",null,"Users maybe want to query some metadata about buckets, objects, bucket read quota or bucket read records from SP. SP provides related APIs about querying metadata. The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/11-query_meta.jpg",width:"800",height:"100"})),(0,i.kt)("h3",{id:"gateway-2"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/gateway"},"Gateway")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receives the QueryMeta request from the client."),(0,i.kt)("li",{parentName:"ul"},"Verifies the signature of request to ensure that the request has not been tampered with."),(0,i.kt)("li",{parentName:"ul"},"Checks the authorization to ensure the corresponding account has permissions on resources."),(0,i.kt)("li",{parentName:"ul"},"Dispatches the request to Metadata.")),(0,i.kt)("h3",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata receives the QueryMeta request from Gateway."),(0,i.kt)("li",{parentName:"ul"},"Metadata queries bucket or object from SP DB or BS DB.")),(0,i.kt)("h2",{id:"get-challenge-piece-info"},"Get Challenge Piece Info"),(0,i.kt)("p",null,"Ensuring data integrity and availability is always the top priority for any decentralized storage network. To achieve better high availability (HA), we use data challenges instead of storage proofs. The system continuously issues data challenges to random pieces on the greenfield chain, and SP that stores the challenged piece responds using the challenge workflow. Each SP splits the object payload data into segments, stores the segment data in the PieceStore, and stores the segment checksum in SP DB."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/12-challenge.jpg",width:"1000",height:"100"})),(0,i.kt)("h3",{id:"gateway-3"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/gateway"},"Gateway")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Receives the Challenge request from the client."),(0,i.kt)("li",{parentName:"ul"},"Verifies the signature of request to ensure that the request has not been tampered with."),(0,i.kt)("li",{parentName:"ul"},"Checks the authorization to ensure the corresponding account has permissions on resources."),(0,i.kt)("li",{parentName:"ul"},"Dispatches the request to Downloader.")),(0,i.kt)("h3",{id:"downloader-1"},(0,i.kt)("a",{parentName:"h3",href:"/greenfield-docs/docs/guide/storage-provider/modules/downloader"},"Downloader")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloader receives the Challenge request from Gateway."),(0,i.kt)("li",{parentName:"ul"},"Returns all segment data checksums and challenge segment data payload to Gateway.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Retrieve all segment data checksums from the SP DB."),(0,i.kt)("li",{parentName:"ul"},"Get the challenge segment data from PieceStore.")))),(0,i.kt)("h2",{id:"gc-object"},"GC Object"),(0,i.kt)("p",null,"GC is used to delete objects whose metadata on Greenfield chain has already been deleted, reducing the cost of each SP and data size in Greenfield chain. This function is automatically executed in Manager daemon mode."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/13-gc_object.jpg",width:"800",height:"100"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manager dispatches GCObjectTask to TaskExecutor."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor send requests to Metadata to query deleted objects in order."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor delete payload data which is stored in PieceStore.")),(0,i.kt)("h2",{id:"gc-zombiepiece"},"GC ZombiePiece"),(0,i.kt)("p",null,"GC ZombiePiece is an abstract interface to record the information for collecting the piece store space by deleting zombie pieces data that dues to any exception, the piece data meta is not on chain but the pieces have been stored in piece store, or the piece should not be stored on the correct SP node. This function is automatically executed in Manager daemon mode."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gc-zombie-flow",src:a(34964).Z,width:"1612",height:"838"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("i",null,"GC ZombiePiece")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manager dispatches GCZombiePieceTask to TaskExecutor."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor send requests to SPDB to query integrity meta in order."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor determines whether a piece is a ZombiePiece based on the IntegrityMeta table. Scans all IntegrityMeta within the current object ID range specified in GCZombiePieceTask (StartObjectId, EndObjectId)."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor determines whether a piece is a ZombiePiece based on the PieceHash table. Scans all PieceHash within the current object ID range specified in GCZombiePieceTask (StartObjectId, EndObjectId)."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor delete payload data which is stored in PieceStore.")),(0,i.kt)("h2",{id:"gc-meta"},"GC Meta"),(0,i.kt)("p",null,"GCMetaTask is an abstract interface to record the information for collecting the SP meta store space by deleting the expired data. This function is automatically executed in Manager daemon mode."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"gc-meta-flow",src:a(29535).Z,width:"1360",height:"526"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("i",null,"GC Meta")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manager dispatches GCMetaTask to TaskExecutor, triggered by gcMetaTicker."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor send requests to SPDB to delete entries from BucketTraffic using SpDBImpl::DeleteAllBucketTrafficExpired for expired BucketTrafficTable."),(0,i.kt)("li",{parentName:"ul"},"TaskExecutor send requests to SPDB to delete entries from ReadRecord using SpDBImpl::DeleteAllReadRecordExpired for expired ReadRecord table.")),(0,i.kt)("h2",{id:"migrate-bucket"},"Migrate Bucket"),(0,i.kt)("p",null,"Bucket user can select primary sp freely and use the migration bucket to migrate the sp service when they feel that the SP service quality is poor."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/14-bucket_migrate.jpg",width:"1000",height:"100"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The bucket user should ask new primary sp for migration bucket, and get the approval of the new primary SP."),(0,i.kt)("li",{parentName:"ul"},"The bucket user submits a MigrationBucket transaction with the approval of the new primary SP."),(0,i.kt)("li",{parentName:"ul"},"The dest sp subscribes event from chain, and produce migrate execute plan."),(0,i.kt)("li",{parentName:"ul"},"The dest sp executor fetch migrate gvg task to execute, and period report progress."),(0,i.kt)("li",{parentName:"ul"},"The dest sp sends the complete tx if all the gvg task are completed in execute plan.")),(0,i.kt)("h2",{id:"sp-exit"},"SP Exit"),(0,i.kt)("p",null,"Greenfield allows for the participation of SPs and also allows them to exit according to their wishes."),(0,i.kt)("p",null,"The flow chart is shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/static/asset/14-sp_exit.jpg",width:"1000",height:"100"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The src sp self applying for exit by sending the StorageProviderExit transaction to the blockchain."),(0,i.kt)("li",{parentName:"ul"},"The src sp subscribes event from chain, and produce exit execute plan."),(0,i.kt)("li",{parentName:"ul"},"The src sp dispatches swap out info dest sp."),(0,i.kt)("li",{parentName:"ul"},"The dest sp produces gvg migrate task by swap out unit."),(0,i.kt)("li",{parentName:"ul"},"The dest sp executor fetch migrate gvg task to execute, and period report progress."),(0,i.kt)("li",{parentName:"ul"},"The dest sp sends the complete swap out tx if all the gvg task are completed in swap out."),(0,i.kt)("li",{parentName:"ul"},"The src sp sends the complete sp exit tx if all the swap out are completed.")))}p.isMDXComponent=!0},29535:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/13-gc-meta-e5d241e75b2985a6cee491b9f841c332.png"},34964:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/13-gc-zombie-5ab0ac9dad6e3c70c4344cb76ad42154.png"}}]);