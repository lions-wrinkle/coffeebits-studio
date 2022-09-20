"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[49,998],{6998:(e,n,s)=>{s.r(n),s.d(n,{BasePage:()=>t});class t{constructor(e,n,s,t){this.walletConnect=e,this.algodClient=s,this.algoIndexer=t,this.holdings=n}}},1049:(e,n,s)=>{s.r(n),s.d(n,{Wallet:()=>a});var t=s(6998);class a extends t.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML="\n    <h1>Wallet</h1>\n\n    ",this.displayHoldings()}displayHoldings(){if(this.holdings)for(const e in this.holdings){const n=this.holdings[e],s=document.createElement("h2");if(s.textContent="My "+n.collections[0].displayName,this.ui.append(s),!n.nfts.length){const e=document.createElement("div");e.innerHTML='<div class="dark-text mb-5">No assets</div>',this.ui.append(e);continue}const t=document.createElement("div");t.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5";for(const s of n.nfts){const n=document.createElement("div");if(n.id=`nft-${s.assetId}`,n.className="col",s.amount>1&&s.amount,"caffeineCards"!=e)n.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${s.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n\n                        <div>\n                              <h4>${s.name}</h4>\n                              <span class="asset-id">${s.assetId}</span>\n                        </div>\n                     \n                        <div class="flex-fill d-flex flex-row justify-content-end align-items-end">\n                            <div class="dropdown"></div>\n                        </div>\n                    </div>\n\n                </div>\n            `;else{let e="";if(s.metadata.properties){for(const n in s.metadata.properties)e+=`<span class="custom-badge">${n}</span> `;e+="<br>"}let t="";if(s.metadata.require){let e=[];for(const n in s.metadata.require)e.push(`<span class="custom-badge light">${n}: ${s.metadata.require[n]}</span>`);t=`<span class="custom-badge dark">Require:</span> ${e.join(" ")}`}n.innerHTML=`\n                <div class="list-item h-100 d-flex flex-column">\n                    <img src="${s.imageUrl}" class="nft-img img-fluid" loading="lazy">\n                    <div class="list-item-text flex-fill d-flex flex-column">\n                        <h4>${s.name}</h4>\n                        <div class="d-flex justify-content-between">\n                            <span class="asset-id">${s.assetId}</span>\n                            ${s.amount}\n                        </div>\n                        <div class="mt-3">\n                              ${e} ${t}<br>\n                        </div>\n                        <div class="flex-fill d-flex justify-content-end align-items-end mt-2">\n                              <div class="dropdown"></div>\n                        </div>\n                    </div>\n                </div>\n\n                \n            `}n.querySelector(".dropdown").innerHTML=`\n                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n                <img src="assets/more.png" class="more">\n                </a>\n                <ul class="dropdown-menu">\n                    <li><a class="dropdown-item" href="https://www.nftexplorer.app/asset/${s.assetId}" target="_blank">NFTExplorer</a></li>\n                    <li><a class="dropdown-item" href="https://www.randgallery.com/algo-collection/?address=${s.assetId}" target="_blank">RandGallery</a></li>\n                    <li><a class="dropdown-item" href="https://algoxnft.com/asset/${s.assetId}" target="_blank">ALGOxNFT</a></li>\n                </ul>\n          `,t.append(n),s.handleImageError(n.querySelector(".nft-img"))}this.ui.append(t)}}}}}]);