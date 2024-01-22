"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=o,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={title:"Greenfield for Hugging Face",order:1},r="AI Tutorials Serials: How to use Greenfield for Hugging Face",l={unversionedId:"tutorials/ai/hugging-face-intro",id:"tutorials/ai/hugging-face-intro",title:"Greenfield for Hugging Face",description:"Hugging Face is a leading company and open-source community in the field of natural language processing (NLP) and artificial intelligence. It's similar to GitHub in that it provides a space for developers to code and deploy AI applications, including language models, transformers, text2image, and more.",source:"@site/docs/tutorials/ai/hugging-face-intro.md",sourceDirName:"tutorials/ai",slug:"/tutorials/ai/hugging-face-intro",permalink:"/greenfield-docs/docs/tutorials/ai/hugging-face-intro",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/ai/hugging-face-intro.md",tags:[],version:"current",frontMatter:{title:"Greenfield for Hugging Face",order:1},sidebar:"tutorialsSidebar",previous:{title:"Cross Chain Access Control by CMD",permalink:"/greenfield-docs/docs/tutorials/access-control/quick-start"},next:{title:"Greenfield for Hugging Face",permalink:"/greenfield-docs/docs/tutorials/ai/hugging-face-intro"}},s={},d=[{value:"Data Privacy By Built-in Access Control",id:"data-privacy-by-built-in-access-control",level:2},{value:"Monetization",id:"monetization",level:2},{value:"Transfer Dataset to Greenfield",id:"transfer-dataset-to-greenfield",level:2},{value:"Download Dataset from Greenfield",id:"download-dataset-from-greenfield",level:2},{value:"Transfer Model to Greenfield",id:"transfer-model-to-greenfield",level:2},{value:"Load Model from Greenfield",id:"load-model-from-greenfield",level:2},{value:"Download Object of model from Greenfield",id:"download-object-of-model-from-greenfield",level:2},{value:"Resources",id:"resources",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ai-tutorials-serials-how-to-use-greenfield-for-hugging-face"},"AI Tutorials Serials: How to use Greenfield for Hugging Face"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/"},"Hugging Face")," is a leading company and open-source community in the field of natural language processing (NLP) and artificial intelligence. It's similar to GitHub in that it provides a space for developers to code and deploy AI applications, including language models, transformers, text2image, and more."),(0,o.kt)("p",null,"Using decentralized storage networks for machine learning data storage not only increases efficiency by enabling parallel retrieval from multiple nodes, reducing latency, and enhancing download speeds, but it also offers heightened security. The decentralized architecture eliminates a single point of failure, making the data more resilient against potential security threats. This ensures that even if individual nodes are compromised, the overall integrity and security of the data remain intact."),(0,o.kt)("p",null,"In this tutorial, you will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Why Greenfield is a good choice for storing machine learning data"),(0,o.kt)("li",{parentName:"ul"},"What\u2019s the potential architecture of building AI on Greenfield"),(0,o.kt)("li",{parentName:"ul"},"What\u2019s the process of dataset and model management on Greenfield and sample code")),(0,o.kt)("h1",{id:"why-do-we-need-to-store-machine-learning-data-in-greenfield"},"Why do we need to store machine learning data in Greenfield"),(0,o.kt)("h2",{id:"data-privacy-by-built-in-access-control"},"Data Privacy By Built-in Access Control"),(0,o.kt)("p",null,"Platforms, like Hugging Face, offer the flexibility to make ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/models"},"models")," and ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets"},"datasets")," public or collaborate on them privately within organizational repositories. Users can explore data directly in their browser. Creating private datasets is used to address licensing or privacy concerns."),(0,o.kt)("p",null,"The Greenfield Blockchain is a very good place to store machine learning models and dataset. It offers a comprehensive access control framework of resources, including buckets, objects, and groups, which can be mirrored on the BNB Smart Chain (BSC) as non-fungible tokens (NFTs) adhering to the ERC-721 standard. Smart contracts on BSC can directly manage these mirrored resources, impacting storage formats, access permissions, and other data aspects on Greenfield. This integration enhances flexibility and accessibility, streamlining and optimizing data management across both platforms."),(0,o.kt)("h2",{id:"monetization"},"Monetization"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh7-us.googleusercontent.com/J25Ptj9c7r6IeJ2WHw-cAdbMxmjLmYZPD7fTPUGrGggyS3iqqoPi8F-y40rvxVKaX7wEgjODWHb7xjC63b1Fz74RWQz9j7Ftd3IdUw9rpEwtCbc-swyV1q0KgKb27j6QHvfZDptSMwDjljgeC3lIaSI",alt:"img"})),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.greenfield-sp.bnbchain.org/bsc-testnet.html"},"data marketplace")," on Greenfield empowers users to sell or trade high-quality machine learning datasets and models. Whether you're a seasoned data scientist or an organization with valuable data assets, our marketplace provides a secure and efficient space to monetize your creations or discover unique datasets and models crafted by others."),(0,o.kt)("h1",{id:"the-potential-architecture-of-ai-in-greenfield"},"The Potential Architecture of AI in Greenfield"),(0,o.kt)("p",null,"There are 3 key parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Machine learning datasets and models are stored in Greenfield Storage provider"),(0,o.kt)("li",{parentName:"ul"},"Greenfield Nodes will handle users request to train/execute models"),(0,o.kt)("li",{parentName:"ul"},"Executiion environment can be your own machine or cloud servers. ",(0,o.kt)("a",{parentName:"li",href:"https://www.bnbchain.org/en/blog/greenfield-executable-a-new-initiative-to-unlock-the-potential-of-open-data-economy"},"Greenfield Execute")," will also be able to provide environments for model execution in the future.")),(0,o.kt)("h1",{id:"datasets-management-in-greenfield"},"Datasets Management in Greenfield"),(0,o.kt)("p",null,"The following examples explain how to use Greenfield for Hugging Face datasets management. You will learn how to backup datasets and how to download from Greenfield for training purposes."),(0,o.kt)("h2",{id:"transfer-dataset-to-greenfield"},"Transfer Dataset to Greenfield"),(0,o.kt)("p",null,"If your dataset is already on ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets"},"Hugging Face Hub"),", you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/datasets/v2.8.0/en/package_reference/loading_methods#datasets.load_dataset_builder"},"load_dataset_builder")," function to download. It'll first download raw datasets to your local directory then save it to to Greenfield. Here we transfer the dataset ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets/HuggingFaceH4/no_robots"},"no-robots")," to Greenfield"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    from datasets import load_dataset\n\n    # Load dataset\n\n    dataset = load_dataset("HuggingFaceH4/no_robots")\n\n    # Save locally and prepare upload\n\n    dataset.save_to_disk("your_local_directory")\n\n    zip_output_filename = "you_zip_file_name"\n\n    shutil.make_archive(zip_output_filename, \'\', folder_to_compress)\n\n    # logging.info(f"---\x3e Create Bucket <---")\n\n    create_bucket = await client.bucket.create_bucket(\n\n    bucket_name,\n\n    primary_sp_address=sps[0].operator_address,\n\n    opts=CreateBucketOptions(charged_read_quota=100, visibility=VisibilityType.VISIBILITY_TYPE_PRIVATE),\n\n    )\n\n    logging.info(f"Result: {create_bucket}\\n\\n")\n\n    await client.basic.wait_for_tx(hash=create_bucket)\n\n    ## Create Object\n\n    # First,Open the file in binary mode and read its contents\n\n    content = read_file_to_buffer(zip_output_filename)\n\n    # Send Create Object Transaction\n\n    logging.info(f"---\x3e Create Object <---")\n\n    object = await client.object.create_object(\n\n          bucket_name,\n\n          object_name,\n\n          reader=content,\n\n          opts=CreateObjectOptions()\n\n     )\n\n    logging.info(f"Result: {object}\\n\\n")\n\n    # Send Put Object Transaction to SP and wait for seal\n\n    await client.basic.wait_for_tx(hash=object)\n\n    logging.info(f"---\x3e Put Object <---")\n\n    put_object = await client.object.put_object(\n            bucket_name,\n            object_name,\n            object_size=content.getbuffer().nbytes,\n            reader=content.getvalue(),\n            opts=PutObjectOptions()\n       )\n\n    logging.info(f"Result: {put_object}\\n\\n")\n')),(0,o.kt)("h2",{id:"download-dataset-from-greenfield"},"Download Dataset from Greenfield"),(0,o.kt)("p",null,"Once you've access to a dataset in Greenfield, you can save it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fget_object")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'## Download Object\n\npath = "path/to/your/local/folder"\n\nlogging.info(f"---\x3e Get Object <---")\n\nawait client.object.fget_object(\n\n     bucket_name,\n\n     object_name,\n\n     path,\n\nopts=GetObjectOption()\n\n   )\n\nlogging.info(f"Result: {get_object}\\n\\n")\n')),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"load_from_disk")," method to access your datasets."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from datasets import load_dataset\n\ndataset = load_dataset('parquet', data_files='path/to/my/dataset/folder')\n")),(0,o.kt)("h1",{id:"model-management-in-greenfield"},"Model Management in Greenfield"),(0,o.kt)("p",null,"The following examples explain how to use Greenfield for Hugging Face model management. You will learn how to backup models and how to download from Greenfield for testing and execution purposes."),(0,o.kt)("h2",{id:"transfer-model-to-greenfield"},"Transfer Model to Greenfield"),(0,o.kt)("p",null,"Given the typically substantial size of machine learning models, it is recommended to employ git lfs for downloading them to your local machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git lfs install\n\ngit clone git@hf.co:<MODEL ID> # example: git clone git@hf.co:bigscience/bloom\n")),(0,o.kt)("p",null,"For example, let\u2019s download the ",(0,o.kt)("inlineCode",{parentName:"p"},"t5-small")," model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://huggingface.co/t5-small\n")),(0,o.kt)("p",null,"After obtaining the local binaries, you can utilize the gnfd-cmd tool to upload them to Greenfield. This is particularly advantageous as Greenfield supports resumable object transfers, enhancing the reliability and efficiency of the uploading process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gnfd-cmd object put --visibility=private {path/to/your/local/model} gnfd://{bucket_name}/{object_name}\n")),(0,o.kt)("h2",{id:"load-model-from-greenfield"},"Load Model from Greenfield"),(0,o.kt)("p",null,"First, you can follow the same process to download model files to your local directory."),(0,o.kt)("h2",{id:"download-object-of-model-from-greenfield"},"Download Object of model from Greenfield"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'model_path = "path/to/your/local/folder"\n\nlogging.info(f"---\x3e Get Model <---")\n\nawait client.object.fget_object(\n\n     bucket_name,\n\n     object_name,\n\n     path,\n\nopts=GetObjectOption()\n\n   )\n\nlogging.info(f"Result: {get_object}\\n\\n")\n')),(0,o.kt)("p",null,"Then, you can load and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"t5-small")," model locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from transformers import T5ForConditionalGeneration, T5Tokenizer\n\nmodel_path = \'/path/to/t5-small\'\n\n# Load model and tokenizer\n\nmodel = T5ForConditionalGeneration.from_pretrained(model_path)\n\ntokenizer = T5Tokenizer.from_pretrained(model_dir,legacy=False)\n\n# Prepare input text\n\ninput_text = "translate English to French: The quick brown fox jumps over the lazy dog."\n\n# Tokenize input text\n\ninput_ids = tokenizer.encode(input_text, return_tensors="pt")\n\n# Generate output with max_new_tokens\n\noutput = model.generate(input_ids, max_new_tokens=50) # Generates up to 50 new tokens\n\n# Decode and print the translated text\n\ntranslated_text = tokenizer.decode(output[0], skip_special_tokens=True)\n\nprint(translated_text)\n')),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"In the upcoming articles, we'll delve into more topics to further enhance your understanding and proficiency."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to connect training process and datasets: We'll explore how to seamlessly connect the training process with datasets, ensuring a smooth and effective workflow."),(0,o.kt)("li",{parentName:"ul"},"How to leverage executable for the modeling execution.Additionally, we'll guide you on harnessing the power of executables for efficient modeling execution, providing insights into optimizing your machine learning endeavors.")),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this tutorial, we go through the potential of Greenfield for machine learning workloads, particularly for Hugging Face. By leveraging decentralized storage compatibility, developers can enjoy the enhanced performance, cost-effectiveness, and robust data security inherent in a decentralized cloud storage system. This integration exemplifies a paradigm shift towards more resilient and economical cloud computing solutions"),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Github link:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/maxnodereal/greenfield-python-sdk/blob/main/examples/basic_datasets.py"},"https://github.com/maxnodereal/greenfield-python-sdk/blob/main/examples/basic_datasets.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/maxnodereal/greenfield-python-sdk/blob/main/examples/basic_model.py"},"https://github.com/maxnodereal/greenfield-python-sdk/blob/main/examples/basic_model.py"))))}p.isMDXComponent=!0}}]);