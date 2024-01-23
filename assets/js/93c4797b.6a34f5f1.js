"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=i,u=p["".concat(l,".").concat(h)]||p[h]||f[h]||n;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={title:"Storage FAQ",description:"A list of BNB Greenfield frequently asks questions about storage.",keywords:["BNB Greenfield Storage","BNB Greenfield Storage Pricing"]},o=void 0,s={unversionedId:"faq/storage-faqs",id:"faq/storage-faqs",title:"Storage FAQ",description:"A list of BNB Greenfield frequently asks questions about storage.",source:"@site/docs/faq/storage-faqs.md",sourceDirName:"faq",slug:"/faq/storage-faqs",permalink:"/greenfield-docs/docs/faq/storage-faqs",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/faq/storage-faqs.md",tags:[],version:"current",frontMatter:{title:"Storage FAQ",description:"A list of BNB Greenfield frequently asks questions about storage.",keywords:["BNB Greenfield Storage","BNB Greenfield Storage Pricing"]},sidebar:"faqSidebar",previous:{title:"General FAQ",permalink:"/greenfield-docs/docs/faq/general-faqs"},next:{title:"SP FAQ",permalink:"/greenfield-docs/docs/faq/sp-faqs"}},l={},d=[{value:"How much does it cost to store files in Greenfield?",id:"how-much-does-it-cost-to-store-files-in-greenfield",level:3},{value:"How is my billing calculated?",id:"how-is-my-billing-calculated",level:3},{value:"What is Charged Size?",id:"what-is-charged-size",level:3},{value:"What is Primary/Secondary Store Price?",id:"what-is-primarysecondary-store-price",level:3},{value:"What is Validator Tax Rate?",id:"what-is-validator-tax-rate",level:3},{value:"What is Read Price?",id:"what-is-read-price",level:3},{value:"What is Reserve Time?",id:"what-is-reserve-time",level:3},{value:"What&#39;s best practice to store small files in Greenfield?",id:"whats-best-practice-to-store-small-files-in-greenfield",level:3}],c={toc:d},p="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"how-much-does-it-cost-to-store-files-in-greenfield"},"How much does it cost to store files in Greenfield?"),(0,i.kt)("p",null,"If you're interested in knowing the real-time pricing for storage and querying on Greenfield, we invite you to the ",(0,i.kt)("a",{parentName:"p",href:"https://dcellar.io/pricing-calculator"},"Price Calculator"),"."),(0,i.kt)("h3",{id:"how-is-my-billing-calculated"},"How is my billing calculated?"),(0,i.kt)("p",null,"In Greenfield, bsides transaction fee, users are required to pay two kinds of storage service fees: ",(0,i.kt)("inlineCode",{parentName:"p"},"storage fee")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"download quota fee"),". These storage service fees are charged by Storage Providers (SPs) in a ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment"},"stream payment"),". Users need to lock some BNB when they start using the service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-math"},"Storage Fee = sum(ChargedSize) * (PrimaryStorePrice + SecondaryStorePrice*SecondarySPNumber) * (1+Validator Tax Rate) * ReserveTime\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-math"},"Download Quota Fee = ChargedReadQuota * ReadPrice * (1 + Validator Tax Rate) * ReserveTime\n")),(0,i.kt)("p",null,"Currently,  ",(0,i.kt)("inlineCode",{parentName:"p"},"ReserveTime")," is 180 days and ",(0,i.kt)("inlineCode",{parentName:"p"},"Validator Tax Rate")," is 1%"),(0,i.kt)("h3",{id:"what-is-charged-size"},"What is Charged Size?"),(0,i.kt)("p",null,"The ChargeSize is calculated from the object's payload size, if the payload size is less than 128k then ChargeSize is 128k, otherwise ChargeSize is equal to payload size."),(0,i.kt)("p",null,"If Data Size < 128K, ChargedSize = 128K; else, ChargedSize = Data Size"),(0,i.kt)("p",null,"If object is an empty folder, ChargedSize = 128K"),(0,i.kt)("p",null,"You can query the value from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/storage-params"},"this API")),(0,i.kt)("h3",{id:"what-is-primarysecondary-store-price"},"What is Primary/Secondary Store Price?"),(0,i.kt)("p",null,"Every SP can set their own suggested store price and read price via on-chain transactions. At the first block of each month, the median all SPs' store prices will be calculated as the Primary SP Store Price, the Secondary SP Store Price will be calculated as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/sp-params"},"SecondaryPriceRatio")," (e.g. 12%, which can be governed) multiply the Primary SP Store Price , and the median of all SPs' read prices will be calculated as the Primary SP Read Price. To learn more about it, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment#storage-fee-price-and-adjustment"},"this")),(0,i.kt)("h3",{id:"what-is-validator-tax-rate"},"What is Validator Tax Rate?"),(0,i.kt)("p",null,"For each data related operation on Greenfield, validators can get some rewards for protecting the security and integrity of data (i.e. challenge). Through charging validator tax, part of user's cost will go to validator tax pool, and then become validators' rewards."),(0,i.kt)("p",null,"You can query the value from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/payment-params"},"this API")),(0,i.kt)("h3",{id:"what-is-read-price"},"What is Read Price?"),(0,i.kt)("p",null,"A storage provider can update its free read quote, suggested primary store price and read price. All SPs' suggested primary store and read prices will be used to generate the global primary/secondary store price and read price."),(0,i.kt)("h3",{id:"what-is-reserve-time"},"What is Reserve Time?"),(0,i.kt)("p",null,'The storage fee will be charged on Greenfield in a steam payment style. The fees are paid on Greenfield in the style of "Stream" from users to receiver accounts at a constant rate. By reseveing some balance, users do not need to payment the fee in a very high frequency. Currently, the reserve time is 6 months and it can be governed.'),(0,i.kt)("p",null,"You can query the value from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/payment-params"},"this API")),(0,i.kt)("h3",{id:"whats-best-practice-to-store-small-files-in-greenfield"},"What's best practice to store small files in Greenfield?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The more data bundled, the more $BNB saved")),(0,i.kt)("p",null,"If a single transaction only store a small size file to the Greenfield Network, it is like separate packages being sent through the mail \u2013 even though they were all going to the same destination. It's recommended to take all of the files to reach the ",(0,i.kt)("inlineCode",{parentName:"p"},"Charged Size")," and put them together to get sent as one transaction to the network."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be Mindful to Delete\nCurrently, the reserve time to be charged on Greenfield is 6 months. It means a six-month storage fee will charged even for deleted items.")))}f.isMDXComponent=!0}}]);