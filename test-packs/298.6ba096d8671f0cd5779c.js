"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[298,998],{6998:(t,a,e)=>{e.r(a),e.d(a,{BasePage:()=>s});class s{constructor(t,a,e,s){this.walletConnect=t,this.algodClient=e,this.algoIndexer=s,this.holdings=a}}},5298:(t,a,e)=>{e.r(a),e.d(a,{Packs:()=>h,loadPacks:()=>o});var s=e(6998),i=e(7304),n=e(4050),r=e(4393);const c="https://api.atomixwap.xyz";async function o(t){let a=await fetch(`${c}/caffeine-card-pack/get-all`);if(200===a.status){let e=await a.json();const s=t.bathers.nfts.map((t=>t.assetId));let i=[];for(const t of e.packs)s.includes(t[0])&&i.push(t);return{claimablePacks:i,suggestedParams:e.suggestedParams,escrowAddress:e.escrowAddress}}throw new Error(`Can't load packs. Error ${a.status}`)}class h extends s.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n    <h1>Caffeine Cards Packs</h1>\n    <p id="packs-status" class="dark-text text-center">Loading packs...</p>\n    ',this.claimablePacks,this.suggestedParams,this.escrowAddress,this.fetchPacks()}async fetchPacks(){const t=this.ui.querySelector("#packs-status");try{const a=await o(this.holdings);if(this.claimablePacks=a.claimablePacks,this.suggestedParams=a.suggestedParams,this.escrowAddress=a.escrowAddress,this.claimablePacks.length>0){let a="";this.claimablePacks.length>1&&(a="s"),t.textContent=`${this.claimablePacks.length} pack${a} to claim!`}else t.innerHTML='<img src="assets/pack0-0.png" style="width: 240px; opacity: 0.2;" class="mb-3"><br>\n        No pack to open.<br>\n        A Caffeine Card is given for every Bather bought in the <a href="https://instantshuffle.com/shuffle/Y1ybuqKKZU6O4Kl2hzD5" target="_blank">Instant Shuffle.</a>\n        ';const e=document.createElement("div");e.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5 justify-content-center",this.ui.append(e);for(const t of this.claimablePacks){const a=document.createElement("div");a.className="col text-center ps-3 pe-3",e.append(a);const s=document.createElement("canvas");s.className="w-100 mb-2";const i=new d(s,t[1],this.algoIndexer);a.append(s);const n=document.createElement("button");n.textContent="Open",n.dataset.batherId=t[0],n.dataset.caffeineCardId=t[1],n.addEventListener("click",this.openPack.bind(this,i),!1),a.append(n)}}catch(a){console.error(a),t.textContent=a.message}}async openPack(t,a){const e=a.currentTarget,s=e.dataset.batherId,i=e.dataset.caffeineCardId;try{e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',e.disabled=!0;let a=[n.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.walletConnect.walletAddress,to:this.walletConnect.walletAddress,amount:0,assetIndex:parseInt(i),suggestedParams:this.suggestedParams}),n.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.escrowAddress,to:this.walletConnect.walletAddress,amount:1,assetIndex:parseInt(i),suggestedParams:this.suggestedParams})];n.assignGroupID(a);const r=await this.walletConnect.signTransactions(a),o={batherId:s,txn:btoa(String.fromCharCode.apply(null,r[0]))};e.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n      Opening...',e.disabled=!0;const h=await fetch(c+"/caffeine-card-pack/claim",{method:"POST",body:JSON.stringify(o),headers:{Accept:"application/json","Content-Type":"application/json"}});if(200!==h.status){let t;try{t=await h.json()}catch(t){}throw t&&t.error?new Error(t.error):new Error(`Error ${h.status}`)}e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">\n        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n      </svg>\n        Opened',e.disabled=!0,t.animate()}catch(t){console.error(t),alert(t.message),e.textContent="Open",e.disabled=!1}}}class d{constructor(t,a,e){this.caffeineCardId=a,this.algoIndexer=e,this.width=660,this.height=960,this.imageWidth=960,this.numAnimationImage=4,this.canvas=t,this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.context.translate(-(this.imageWidth-this.width)/2,0),this.cardImage,this.cardMask,this.animationImages,this.loadAllImage()}static loadImage(t){return new Promise(((a,e)=>{const s=new Image;s.onload=()=>{a(s)},s.onerror=t=>{e(t)},s.src=t}))}async loadAllImage(){this.animationImages=[];const t=this.caffeineCardId%4,a=await d.loadImage(`assets/pack${t}-0.png`);this.animationImages.push(a),this.drawPack(),this.cardMask=await d.loadImage("assets/card-mask.png");const e=await this.algoIndexer.lookupAssetByID(this.caffeineCardId).do(),s=new i.Sm(this.caffeineCardId,e.asset);await s.load(this.algoIndexer);try{this.cardImage=await d.loadImage(s.imageUrl)}catch(t){try{this.cardImage=await d.loadImage(s.imageUrlAlternate)}catch(t){this.cardImage=await d.loadImage("assets/empty-card.png")}}for(let a=1;a<=this.numAnimationImage;a++){const e=await d.loadImage(`assets/pack${t}-${a}.png`);this.animationImages.push(e)}}async drawPack(){this.context.drawImage(this.animationImages[0],0,0,this.imageWidth,this.height)}static easeInOutQuad(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}async animate(){let t=.15,a=1;const e=setInterval((()=>{if(this.context.clearRect(0,0,this.imageWidth,this.height),this.context.drawImage(this.cardMask,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-in",this.context.drawImage(this.cardImage,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-over",this.context.drawImage(this.animationImages[a],0,0,this.imageWidth,this.height),a===this.numAnimationImage){clearInterval(e),r.sparkles(this.canvas),t=.05;const a=.8;let s=0;const i=setInterval((()=>{const e=d.easeInOutQuad(s/a)*this.height;this.context.clearRect(0,0,this.imageWidth,this.height),this.context.drawImage(this.cardMask,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-in",this.context.drawImage(this.cardImage,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-over",this.context.drawImage(this.animationImages[this.numAnimationImage],0,e,this.imageWidth,this.height),s+=t,s>=a&&clearInterval(i)}),1e3*t)}a++}),1e3*t)}}}}]);