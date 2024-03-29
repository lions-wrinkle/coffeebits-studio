"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[49,998],{6998:(e,t,a)=>{a.r(t),a.d(t,{BasePage:()=>s});class s{constructor(e,t,a,s){this.walletConnect=e,this.algodClient=a,this.algoIndexer=s,this.holdings=t}}},1049:(e,t,a)=>{a.r(t),a.d(t,{Wallet:()=>n});var s=a(6998);class n extends s.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML="\n    <h1>Wallet</h1>\n\n    ",this.displayHoldings()}async displayHoldings(){if(this.holdings)for(const e in this.holdings){let t;if("bathers"===e){const{loadPacks:e}=await Promise.all([a.e(393),a.e(298)]).then(a.bind(a,5298));try{const a=await e();a&&a.length>0&&(t=a.map((e=>e[0])))}catch(e){console.error(e)}}const s=this.holdings[e],n=document.createElement("h2");if(n.textContent="My "+s.collections[0].displayName,this.ui.append(n),!s.nfts.length){const e=document.createElement("div");e.innerHTML='<div class="dark-text mb-5">No assets</div>',this.ui.append(e);continue}const i=document.createElement("div");i.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5";for(const a of s.nfts){const s=document.createElement("div");s.id=`nft-${a.assetId}`,s.className="col",a.amount>1&&a.amount;let n="";if("bathers"===e&&(n=`<div class="me-2"><a href="?grinder&bather=${a.assetId}" data-page-link="grinder&bather=${a.assetId}" title="Open in Grinder"><img src="assets/grinder-icon.png" width="32"></a></div>`),"caffeineCards"!=e){if(s.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${a.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n\n                        <div>\n                              <h4>${a.name}</h4>\n                              <span class="asset-id">${a.assetId}</span>\n                        </div>\n                     \n                        <div class="flex-fill d-flex flex-row justify-content-between align-items-end">\n\n                            <div class="d-flex align-items-end" id="left">\n                              \n                            </div>\n\n                            <div class="d-flex align-items-end">\n                              ${n}\n                              <div class="dropdown inline"></div>\n                            </div>\n                            \n                        </div>\n                    </div>\n\n                </div>\n            `,a.metadata&&a.metadata.pop_battle_wins&&a.metadata.pop_battle_wins.length>0)for(const e of a.metadata.pop_battle_wins){let t,a;1===e.rank?(t="pop-battle-icon-1st.png",a="1st"):2===e.rank?(t="pop-battle-icon-2nd.png",a="2nd"):3===e.rank&&(t="pop-battle-icon-3rd.png",a="3rd");const n=document.createElement("div");n.dataset.bsTitle=`Pop Battle Winner (${a})`,n.dataset.bsToggle="tooltip",n.dataset.bsCustomClass="custom-tooltip",n.innerHTML=`<img src="assets/${t}" width="32" height="32">`,n.className="me-1",s.querySelector("#left").append(n),new window.bootstrap.Tooltip(n)}if(t&&t.includes(a.assetId)){const e=document.createElement("a");e.href="?packs",e.dataset.pageLink="packs",e.className="d-inline-block",e.dataset.bsTitle="The pack tied to this Bather has not been opened yet.",e.dataset.bsToggle="tooltip",e.dataset.bsCustomClass="custom-tooltip",e.innerHTML='<img src="assets/pack-icon.png">',s.querySelector("#left").append(e);const t=new window.bootstrap.Tooltip(e,{trigger:"hover"});e.onclick=()=>{t.hide()}}}else{let e="",t="";if(a.metadata||(t="⚠︎",e+="⚠︎"),a.metadata?.properties){for(const t in a.metadata.properties)e+=`<span class="custom-badge">${t}</span> `;e+="<br>"}if(a.metadata?.require){let e=[];for(const t in a.metadata.require)e.push(`<span class="custom-badge light">${t}: ${a.metadata.require[t]}</span>`);t=`<span class="custom-badge dark">Require:</span> ${e.join(" ")}`}s.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${a.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n                        <h4>${a.name}</h4>\n                        <div class="d-flex justify-content-between">\n                            <span class="asset-id">${a.assetId}</span>\n                            ${a.amount}\n                        </div>\n                        <div class="mt-3">\n                              ${e} ${t}<br>\n                        </div>\n                        <div class="flex-fill d-flex justify-content-end align-items-end mt-2">\n                              <div class="dropdown"></div>\n                        </div>\n                    </div>\n                </div>\n\n                \n            `}s.querySelector(".dropdown").innerHTML=`\n                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                <img src="assets/more.png" class="more">\n                </a>\n                <ul class="dropdown-menu">\n                    <li><a class="dropdown-item" href="https://www.nftexplorer.app/asset/${a.assetId}" target="_blank">NFTExplorer</a></li>\n                    <li><a class="dropdown-item" href="https://www.asalytic.app/nft/${a.assetId}" target="_blank">Asalytic</a></li>\n                    <li><a class="dropdown-item" href="https://www.randgallery.com/algo-collection/?address=${a.assetId}" target="_blank">RandGallery</a></li>\n                    <li><a class="dropdown-item" href="https://algoxnft.com/asset/${a.assetId}" target="_blank">ALGOxNFT</a></li>\n                    <li><a class="dropdown-item" href="https://shufl.app/detail/${a.assetId}" target="_blank">Shufl</a></li>\n                    <li><a class="dropdown-item" href="https://exa.market/asset/${a.assetId}" target="_blank">exa.market</a></li>\n                </ul>\n          `,i.append(s),a.handleImageError(s.querySelector(".nft-img"))}this.ui.append(i)}window.enableNavigationLinks()}}}}]);