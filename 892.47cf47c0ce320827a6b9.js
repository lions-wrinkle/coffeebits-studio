"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[892,998],{6998:(e,t,s)=>{s.r(t),s.d(t,{BasePage:()=>i});class i{constructor(e,t,s,i){this.walletConnect=e,this.algodClient=s,this.algoIndexer=i,this.holdings=t}}},6892:(e,t,s)=>{s.r(t),s.d(t,{Browse:()=>a});var i=s(6998),n=s(7304),o=s(5190);class a extends i.BasePage{constructor(...e){super(...arguments),this.collectionName=e[e.length-1],this.title="","caffeineCards"===this.collectionName?this.title="Caffeine Cards":"bathers"===this.collectionName&&(this.title="Bathers"),this.ui=document.createElement("div"),this.ui.innerHTML=`\n    <h1 class="mb-0">${this.title}</h1>\n    <div class="dark-text mb-4">Browse all ${this.title}</div>\n    <div class="row mb-3" id="filters"></div>\n    `,this.collection,this.bathersWithPacks,this.loadAll()}sleep(e){return new Promise((t=>setTimeout(t,e)))}async loadAll(){const e=document.createElement("p");e.textContent=`Loading ${this.title}...`,this.ui.append(e);const t=o.Z.filter((e=>e.name===this.collectionName))[0];if(this.collection=new n.tf([t]),await this.collection.load(this.algoIndexer),"bathers"===this.collectionName){const{loadPacks:e}=await Promise.all([s.e(393),s.e(298)]).then(s.bind(s,5298));try{const t=await e();t&&t.length>0&&(this.bathersWithPacks=t.map((e=>e[0])))}catch(e){console.error(e)}}e.remove(),this.displayList()}displayList(){if(!this.collection.nfts.length){const e=document.createElement("div");return e.innerHTML='<div class="dark-text mb-5">No assets</div>',void this.ui.append(e)}const e=this.ui.querySelector("#filters");let t;"caffeineCards"===this.collectionName&&(t='<div class="col-6 col-md-3">\n        <select class="form-control custom-form-control" id="filter-type">\n          <option value="">Card type</option>\n          <option value="Body">Body</option>\n          <option value="Clothes">Clothes</option>\n          <option value="Cup">Cup</option>\n          <option value="Decoration">Decoration</option>\n          <option value="Mini Cup">Mini Cup</option>\n          <option value="Power">Power</option>\n          <option value="Room">Room</option>\n        </select>\n        <span id="filter-type-loading" hidden>Searching...</span>\n      </div>'),e.innerHTML=`\n    <div class="col-6 col-md-3">\n      <input type="search" class="form-control custom-form-control" placeholder="Name or asset ID" id="filter-search" style="max-width: 16rem;">\n    </div>\n      ${t||""}\n    </div>\n    `,e.querySelector("#filter-search").addEventListener("keypress",this.search.bind(this),!1),t&&e.querySelector("#filter-type").addEventListener("change",this.filterType.bind(this),!1);const s=document.createElement("div");s.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5",this.ui.append(s);let i=new IntersectionObserver(this.loadVisibleNFTs.bind(this),{root:null,rootMargin:"0px",threshold:0}),n=0;for(const e of this.collection.nfts){const t=document.createElement("div");t.id=`nft-${n}`,t.className="col nft-item",t.dataset.i=n;let o="bathers"===this.collectionName?"placeholder-bather":"placeholder-card";if(t.innerHTML=`\n          <div class="list-item h-100 d-flex flex-column">\n              <div class="ratio ratio-1x1 ${o}">\n                <img src="" class="nft-img img-fluid" loading="lazy" hidden>\n              </div>\n              <div class="list-item-text flex-fill d-flex flex-column">\n                  <h4>${e.name}</h4>\n                  <div class="d-flex justify-content-between">\n                      <span class="asset-id">${e.assetId}</span>\n                      ${e.total}\n                  </div>\n                  <div class="mt-3 nft-properties">\n                  </div>\n                  <div class="flex-fill d-flex justify-content-between align-items-end mt-2">\n                        <div class="nft-special"></div>\n                        <div class="dropdown"></div>\n                  </div>\n              </div>\n          </div>\n      `,t.querySelector(".dropdown").innerHTML=`\n          <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n          <img src="assets/more.png" class="more">\n          </a>\n          <ul class="dropdown-menu">\n              <li><a class="dropdown-item" href="https://www.nftexplorer.app/asset/${e.assetId}" target="_blank">NFTExplorer</a></li>\n              <li><a class="dropdown-item" href="https://www.randgallery.com/algo-collection/?address=${e.assetId}" target="_blank">RandGallery</a></li>\n              <li><a class="dropdown-item" href="https://algoxnft.com/asset/${e.assetId}" target="_blank">ALGOxNFT</a></li>\n          </ul>\n    `,"bathers"===this.collectionName&&this.bathersWithPacks&&this.bathersWithPacks.includes(e.assetId)){const e=t.querySelector(".nft-special");e.dataset.bsTitle="The pack tied to this Bather has not been opened yet",e.dataset.bsToggle="tooltip",e.dataset.bsCustomClass="custom-tooltip",e.innerHTML='<img src="assets/pack-icon.png">',new window.bootstrap.Tooltip(e)}s.append(t),n++,i.observe(t)}}loadVisibleNFTs(e,t){e.forEach((e=>{if(!e.isIntersecting)return;const t=e.target,s=this.collection.nfts[t.dataset.i];s.loading||(s.load(this.algoIndexer,!1).then((()=>{const e=t.querySelector(".nft-img");if(e.src=s.imageUrl,e.hidden=!1,s.handleImageError(e),"caffeineCards"===this.collectionName){let e="";if(s.metadata.properties){for(const t in s.metadata.properties)e+=`<span class="custom-badge">${t}</span> `;e+="<br>"}let i="";if(s.metadata.require){let e=[];for(const t in s.metadata.require)e.push(`<span class="custom-badge light">${t}: ${s.metadata.require[t]}</span>`);i=`<span class="custom-badge dark">Require:</span> ${e.join(" ")}`}t.querySelector(".nft-properties").innerHTML=`${e} ${i}<br>`;const n=t.querySelector(".nft-special");n.innerHTML='&#128293; <span id="burn-count">...</span>',n.dataset.bsTitle="Number of card definitively burned",n.dataset.bsToggle="tooltip",n.dataset.bsCustomClass="custom-tooltip",new window.bootstrap.Tooltip(n),this.algodClient.accountAssetInformation(s.metadata.burn_address,s.assetId).do().then((e=>{n.innerHTML=`&#128293; <span id="burn-count">${e["asset-holding"].amount}</span>`}))}})),s.loading=!0,this.sleep(100))}))}search(e){if("Enter"!==e.key)return;const t=e.currentTarget.value;if(!t)return void this.ui.querySelectorAll(".nft-item").forEach((e=>{e.hidden=!1}));let s=t.split(" ");s=s.map((e=>e.trim().toLowerCase())),s=s.filter((e=>e));let i=0;for(const e of this.collection.nfts){let t=!1;e:for(const i of s){if(e.name.toLowerCase().includes(i)||e.assetId==i){t=!0;break}if(e.metadata&&e.metadata.properties)for(const s in e.metadata.properties)if(s.toLowerCase().includes(i)||e.metadata.properties[s].toLowerCase().includes(i)){t=!0;break e}}this.ui.querySelector(`#nft-${i}`).hidden=!t,i++}}async filterType(e){const t=this.ui.querySelector("#filter-type-loading");t.hidden=!1;const s=e?.currentTarget?.value;if(this.ui.querySelectorAll(".nft-item").forEach((e=>{e.hidden=!!s})),!s)return void(t.hidden=!0);let i=0;for(const e of this.collection.nfts){let t=!1;e.isLoaded||await e.load(this.algoIndexer),e.metadata?.properties?.[s]&&(t=!0);this.ui.querySelector(`#nft-${i}`).hidden=!t,i++}t.hidden=!0}}}}]);