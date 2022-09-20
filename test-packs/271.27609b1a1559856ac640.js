"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[271,998,298],{6998:(t,a,e)=>{e.r(a),e.d(a,{BasePage:()=>s});class s{constructor(t,a,e,s){this.walletConnect=t,this.algodClient=e,this.algoIndexer=s,this.holdings=a}}},1271:(t,a,e)=>{e.r(a),e.d(a,{Home:()=>i});var s=e(6998),n=e(5298);class i extends s.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n        \x3c!--<h1>Welcome to the Studio</h1>--\x3e\n        <div class="text-center">\n        <img src="assets/logo-studio.png" width="160" alt="The Studio" class="mb-4">\n        <p id="info-message"></p>\n        </div>\n        <div class="springboard d-flex flex-column flex-md-row w-100">\n\n            <div class="flex-fill springboard-item springboard-main-item mb-3 me-md-2">\n                <a href="?grinder" class="d-block" style="background-image: url(\'assets/springbord-grinder.png\'); background-color: #d39e27;" data-page-link="grinder">\n                    <h3>Grinder</h3>\n                    <p>Use Caffeine Cards to evolve your Bathers</p>\n                </a>\n            </div>\n\n            <div class="flex-fill d-flex flex-column">\n                <div class="flex-fill springboard-item mb-3 ms-md-2">\n                    <a href="?cards" class="d-block"\n                        style="background-image: url(\'assets/springboard-cards.png\'); background-color: #bb5f00;" data-page-link="cards">\n                        <h3>Caffeine<br>Cards</h3>\n                        <p>Browse all cards</p>\n                    </a>\n                </div>\n                <div class="flex-fill springboard-item mb-3 ms-md-2">\n                    <a href="?good-morning" class="d-block"\n                        style="background-image: url(\'assets/springboard-gm.png\'); background-color: #12c1b1;" data-page-link="good-morning">\n                        <h3>Good Morning!</h3>\n                        <p>Generate GM GIFs featuring your Bathers</p>\n                    </a>\n                </div>\n\n            </div>\n        ',this.loadPacks()}async loadPacks(){const t=await(0,n.loadPacks)(this.holdings);t&&t.claimablePacks.length>0&&(this.ui.querySelector("#info-message").innerHTML=`<a href="?packs" data-page-link="packs">You have ${t.claimablePacks.length} Caffeine Cards to claim!</a>`,window.enableNavigationLinks())}}},5298:(t,a,e)=>{e.r(a),e.d(a,{Packs:()=>l,loadPacks:()=>c});var s=e(6998),n=e(7304),i=e(4050),o=e(4393);const r="https://api.atomixwap.xyz";async function c(t){let a=await fetch(`${r}/caffeine-card-pack/get-all`);if(200===a.status){let e=await a.json();const s=t.bathers.nfts.map((t=>t.assetId));let n=[];for(const t of e.packs)s.includes(t[0])&&n.push(t);return{claimablePacks:n,escrowAddress:e.escrowAddress}}throw new Error(`Can't load packs. Error ${a.status}`)}class l extends s.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n    <h1>Caffeine Cards Packs</h1>\n    <p id="packs-status" class="dark-text text-center">Loading packs...</p>\n    ',this.claimablePacks,this.escrowAddress,this.fetchPacks()}async fetchPacks(){const t=this.ui.querySelector("#packs-status");try{const a=await c(this.holdings);if(this.claimablePacks=a.claimablePacks,this.escrowAddress=a.escrowAddress,this.claimablePacks.length>0){let a="";this.claimablePacks.length>1&&(a="s"),t.textContent=`${this.claimablePacks.length} pack${a} to claim!`}else t.innerHTML='<img src="assets/pack0-0.png" style="width: 240px; opacity: 0.2;" class="mb-3"><br>\n        No pack to open.<br>\n        Make sure Bathers are unlisted to see your packs.<br><br>\n        A Caffeine Card is given for every Bather bought in the <a href="https://instantshuffle.com/shuffle/Y1ybuqKKZU6O4Kl2hzD5" target="_blank">Instant Shuffle.</a>\n        ';const e=document.createElement("div");e.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5 justify-content-center",this.ui.append(e);for(const t of this.claimablePacks){const a=document.createElement("div");a.className="col text-center ps-3 pe-3",e.append(a);const s=document.createElement("canvas");s.className="w-100 mb-0";const n=new d(s,t[1],this.algoIndexer);await n.load(),a.append(s);const i=document.createElement("div");i.className="dark-text mt-0 pt-0 mb-2 hidden-pack-name",i.style.opacity="0",i.style["max-height"]="0",i.textContent=n.nft.name,a.append(i);const o=document.createElement("button");o.className="open-pack-button",o.textContent="Open",o.dataset.batherId=t[0],o.dataset.caffeineCardId=t[1],o.addEventListener("click",this.openPack.bind(this,n,i),!1),a.append(o)}}catch(a){console.error(a),t.textContent=a.message}}disableAllButtons(t){this.ui.querySelectorAll(".open-pack-button").forEach((a=>{a===t||a.dataset.opened||(a.className="open-pack-button soft-disabled",a.disabled=!0)}))}enableAllButtons(t){this.ui.querySelectorAll(".open-pack-button").forEach((a=>{a===t||a.dataset.opened||(a.className="open-pack-button",a.disabled=!1)}))}async openPack(t,a,e){const s=e.currentTarget;this.disableAllButtons(s);const n=s.dataset.batherId,o=s.dataset.caffeineCardId;try{s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',s.disabled=!0;let e=await this.algodClient.getTransactionParams().do(),c=[i.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.walletConnect.walletAddress,to:this.walletConnect.walletAddress,amount:0,assetIndex:parseInt(o),suggestedParams:e}),i.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.escrowAddress,to:this.walletConnect.walletAddress,amount:1,assetIndex:parseInt(o),suggestedParams:e})];i.assignGroupID(c);const l=await this.walletConnect.signTransactions(c),d={batherId:n,txn:btoa(String.fromCharCode.apply(null,l[0])),suggestedParams:e};s.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>\n      Opening...',s.disabled=!0;const h=await fetch(r+"/caffeine-card-pack/claim",{method:"POST",body:JSON.stringify(d),headers:{Accept:"application/json","Content-Type":"application/json"}});if(200!==h.status){let t;try{t=await h.json()}catch(t){}throw t&&t.error?new Error(t.error):new Error(`Error ${h.status}`)}s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">\n        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n      </svg>\n        Opened',s.disabled=!0,s.dataset.opened=!0,t.animate(),a.style.opacity="1",a.style["max-height"]="500px",this.enableAllButtons(s)}catch(t){console.error(t),alert(t.message),s.textContent="Open",s.disabled=!1,this.enableAllButtons(s)}}}class d{constructor(t,a,e){this.caffeineCardId=a,this.algoIndexer=e,this.width=660,this.height=960,this.imageWidth=960,this.numAnimationImage=4,this.canvas=t,this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.context.imageSmoothingEnabled=!1,this.context.translate(-(this.imageWidth-this.width)/2,0),this.nft,this.cardImage,this.cardMask,this.animationImages}async load(){await this.loadAllImage()}static loadImage(t){return new Promise(((a,e)=>{const s=new Image;s.onload=()=>{a(s)},s.onerror=t=>{e(t)},s.src=t}))}async loadAllImage(){this.animationImages=[];const t=this.caffeineCardId%4,a=await d.loadImage(`assets/pack${t}-0.png`);this.animationImages.push(a),this.drawPack(),this.cardMask=await d.loadImage("assets/card-mask.png");const e=await this.algoIndexer.lookupAssetByID(this.caffeineCardId).do();this.nft=new n.Sm(this.caffeineCardId,e.asset),await this.nft.load(this.algoIndexer);try{this.cardImage=await d.loadImage(this.nft.imageUrl)}catch(t){try{this.cardImage=await d.loadImage(this.nft.imageUrlAlternate)}catch(t){this.cardImage=await d.loadImage("assets/empty-card.png")}}for(let a=1;a<=this.numAnimationImage;a++){const e=await d.loadImage(`assets/pack${t}-${a}.png`);this.animationImages.push(e)}}async drawPack(){this.context.drawImage(this.animationImages[0],0,0,this.imageWidth,this.height)}static easeInOutQuad(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}async animate(){let t=.15,a=1;const e=setInterval((()=>{if(this.context.clearRect(0,0,this.imageWidth,this.height),this.context.drawImage(this.cardMask,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-in",this.context.drawImage(this.cardImage,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-over",this.context.drawImage(this.animationImages[a],0,0,this.imageWidth,this.height),a===this.numAnimationImage){clearInterval(e),o.sparkles(this.canvas),t=.05;const a=.8;let s=0;const n=setInterval((()=>{const e=d.easeInOutQuad(s/a)*this.height;this.context.clearRect(0,0,this.imageWidth,this.height),this.context.drawImage(this.cardMask,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-in",this.context.drawImage(this.cardImage,0,0,this.imageWidth,this.height),this.context.globalCompositeOperation="source-over",this.context.drawImage(this.animationImages[this.numAnimationImage],0,e,this.imageWidth,this.height),s+=t,s>=a&&clearInterval(n)}),1e3*t)}a++}),1e3*t)}}}}]);