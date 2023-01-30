"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[49,998],{6998:(e,s,n)=>{n.r(s),n.d(s,{BasePage:()=>t});class t{constructor(e,s,n,t){this.walletConnect=e,this.algodClient=n,this.algoIndexer=t,this.holdings=s}}},1049:(e,s,n)=>{n.r(s),n.d(s,{Wallet:()=>a});var t=n(6998);class a extends t.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML="\n    <h1>Wallet</h1>\n\n    ",this.displayHoldings()}displayHoldings(){if(this.holdings)for(const e in this.holdings){const s=this.holdings[e],n=document.createElement("h2");if(n.textContent="My "+s.collections[0].displayName,this.ui.append(n),!s.nfts.length){const e=document.createElement("div");e.innerHTML='<div class="dark-text mb-5">No assets</div>',this.ui.append(e);continue}const t=document.createElement("div");t.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5";for(const n of s.nfts){const s=document.createElement("div");s.id=`nft-${n.assetId}`,s.className="col",n.amount>1&&n.amount;let a="";if("bathers"===e&&(a=`<div class="me-2"><a href="?grinder&bather=${n.assetId}" data-page-link="grinder&bather=${n.assetId}" title="Open in Grinder"><img src="assets/grinder-icon.png" width="32"></a></div>`),"caffeineCards"!=e)s.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${n.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n\n                        <div>\n                              <h4>${n.name}</h4>\n                              <span class="asset-id">${n.assetId}</span>\n                        </div>\n                     \n                        <div class="flex-fill d-flex flex-row justify-content-end align-items-end">\n                            ${a}\n                            <div class="dropdown"></div>\n                        </div>\n                    </div>\n\n                </div>\n            `;else{let e="";if(n.metadata.properties){for(const s in n.metadata.properties)e+=`<span class="custom-badge">${s}</span> `;e+="<br>"}let t="";if(n.metadata.require){let e=[];for(const s in n.metadata.require)e.push(`<span class="custom-badge light">${s}: ${n.metadata.require[s]}</span>`);t=`<span class="custom-badge dark">Require:</span> ${e.join(" ")}`}s.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${n.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n                        <h4>${n.name}</h4>\n                        <div class="d-flex justify-content-between">\n                            <span class="asset-id">${n.assetId}</span>\n                            ${n.amount}\n                        </div>\n                        <div class="mt-3">\n                              ${e} ${t}<br>\n                        </div>\n                        <div class="flex-fill d-flex justify-content-end align-items-end mt-2">\n                              <div class="dropdown"></div>\n                        </div>\n                    </div>\n                </div>\n\n                \n            `}s.querySelector(".dropdown").innerHTML=`\n                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                <img src="assets/more.png" class="more">\n                </a>\n                <ul class="dropdown-menu">\n                    <li><a class="dropdown-item" href="https://www.nftexplorer.app/asset/${n.assetId}" target="_blank">NFTExplorer</a></li>\n                    <li><a class="dropdown-item" href="https://www.randgallery.com/algo-collection/?address=${n.assetId}" target="_blank">RandGallery</a></li>\n                    <li><a class="dropdown-item" href="https://algoxnft.com/asset/${n.assetId}" target="_blank">ALGOxNFT</a></li>\n                    <li><a class="dropdown-item" href="https://shufl.app/detail/${n.assetId}" target="_blank">Shufl</a></li>\n                </ul>\n          `,t.append(s),n.handleImageError(s.querySelector(".nft-img"))}this.ui.append(t)}}}}}]);