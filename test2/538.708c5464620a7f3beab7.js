"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[538],{6538:(e,t,s)=>{s.r(t),s.d(t,{Grinder:()=>l});var a=s(6998),n=(s(5190),s(7304)),i=s(7644),d=s(4050),r=s(2871),o=s(4714);class l extends a.BasePage{constructor(...e){super(...arguments),this.simulator=e[e.length-1],this.ui=document.createElement("div"),this.ui.innerHTML=`\n    <h1>Grinder ${this.simulator?"Simulator":""}</h1>\n    <p class="dark-text">${this.simulator?'Try any Caffeine Card. Go to the <a href="?grinder" data-page-link="grinder" class="text-decoration-underline">regular Grinder</a> to actually use your cards.<br />Get the Caffeine Card of your dreams on <a href="https://www.nftexplorer.app/collection/caffeine-cards" class="text-decoration-underline" target="_blank">secondary market.</a>':'Use your Caffeine Cards to customize your Bathers.<br />Try any Caffeine Card in the <a href="?grinder-simulator" data-page-link="grinder-simulator" class="text-decoration-underline">simulator</a>.'}</p>\n\n    <div class="d-sm-flex flew-row" style="background-color: var(--background-dark);">\n\n        <div class="d-flex flex-column p-3 text-center">\n\n            <img src="assets/default.png" class="mb-2 ms-auto me-auto" id="club-img" style="width: 200px; height: auto">\n\n            <div class="dropdown" id="bath-club-dropdown">\n                <button class="dropdown-toggle button-alt" type="button" data-bs-toggle="dropdown"\n                    aria-expanded="false">\n                    Choose Bather\n                </button>\n            </div>\n            <div class="mb-2 mt-4 ms-auto me-auto justify-content-center row row-cols-2" id="cards" style="width: 200px;">\n              <div class="col text-center" id="default-card" style="width: 200px;">\n                <img src="assets/default-card.png" class="img-fluid" style="width: 200px; height: auto;">\n              </div>\n            </div>\n            <div class="dropdown mb-3" id="cards-dropdown">\n                <button class="dropdown-toggle button-alt mb-2" type="button" data-bs-toggle="dropdown"\n                    aria-expanded="false" id="choose-card-button" disabled>\n                    Add Card\n                </button>\n            </div>\n            ${this.simulator?"":'<button id="button-review" disabled>Review...</button>'}\n\n        </div>\n\n        <div class="d-flex flex-column flex-fill p-3 text-center">\n            <small class="dark-text">preview</small>\n            <img src="assets/default.png" class="w-100 m-auto img-fluid" style="max-width: 480px;" id="merged-img">\n\n        </div>\n\n    </div>`,this.bathersCollection,this.cardsCollection,this.selectedBather,this.selectedCards=[],this.mergedProperties={},this.mergedImgDataURL,this.chooseCardButton=this.ui.querySelector("#choose-card-button"),this.load()}async load(){await this.loadBathers(),this.ui.querySelector("#button-review")?.addEventListener("click",this.review.bind(this));const e=window.location.search,t=new URLSearchParams(e);if(t.has("bather")){const e=parseInt(t.get("bather")),s=this.bathersCollection.nfts.filter((t=>t.assetId===e))?.[0];s&&await this.displayBather(s)}}async loadBathers(){this.bathersCollection=this.holdings.bathers;const e=this.ui.querySelector("#bath-club-dropdown");let t=e.querySelector(".dropdown-menu");t&&t.remove(),t=new r.Z(this.bathersCollection.nfts.filter((e=>e.metadata)),this.didSelectBather.bind(this)),e.append(t.ui)}async didSelectBather(e){e.preventDefault(),this.clearCard();const t=e.currentTarget.dataset.index;if(!t)return;const s=this.bathersCollection.nfts[t];this.mergedProperties=s.metadata.properties,await this.displayBather(s)}async displayBather(e){this.selectedBather=e,this.ui.querySelector("#club-img").src=e.imageUrl,this.validate(),await this.loadCards(),this.chooseCardButton.disabled=!1}clearCard(){this.selectedCards=[],this.chooseCardButton.disabled=!0,this.mergedProperties={},this.ui.querySelector("#default-card").hidden=!1;const e=Array.from(this.ui.querySelector("#cards").children);for(const t of e)"default-card"!==t.id&&t.remove()}async loadCards(){this.simulator?this.cardsCollection||(this.cardsCollection=await this.loadAllCards()):this.cardsCollection=this.holdings.caffeineCards;const e=this.ui.querySelector("#cards-dropdown");let t=e.querySelector("#cards-dropdown-nft");t&&t.remove();let s=[];e:for(const e of this.cardsCollection.nfts){if(e.metadata?.require)for(const t in e.metadata.require)if(this.mergedProperties[t]!=e.metadata.require[t]){s.push(e.assetId);continue e}for(const t of this.selectedCards)if(t.metadata?.properties){for(const a in t.metadata.properties)if(e.metadata.properties[a]){s.push(e.assetId);continue e}}else console.error(new Error(`Error loading properties for card card ${t?.name}`))}t=new r.Z(this.cardsCollection.nfts.filter((e=>e.metadata)),this.didSelectCard.bind(this),"cards-dropdown-nft",s),e.append(t.ui),new window.bootstrap.Dropdown(this.chooseCardButton)}sleep(e){return new Promise((t=>setTimeout(t,e)))}async loadAllCards(){return new Promise((async(e,t)=>{this.chooseCardButton.textContent="Loading...";const{default:a}=await Promise.resolve().then(s.bind(s,5190)),i=a.filter((e=>"caffeineCards"===e.name))[0],d=new n.tf([i]);await d.load(this.algoIndexer);let r=0;for(const s of d.nfts)this.sleep(5),s.load(this.algoIndexer).then((()=>{this.chooseCardButton.textContent=`Loading ${r+1}/${d.nfts.length}...`,r++,r===d.nfts.length&&(this.chooseCardButton.textContent="Add Card",e(d))})).catch((e=>t(e)))}))}async didSelectCard(e){e.preventDefault();const t=e.currentTarget.dataset.index;if(!t)return;const s=this.cardsCollection.nfts[t];this.selectedCards.push(s);const a=this.ui.querySelector("#default-card");a&&(a.hidden=!0);const n=document.createElement("div");n.className="col text-center",n.id=`card-${t}`,n.innerHTML=`\n    <img style="width: 80px; height: auto" src="${s.imageUrl}">\n    <p><a href="javascript:void(0);" id="rm-${t}" data-index="${t}">Remove</a></p>\n    `,n.querySelector(`#rm-${t}`).addEventListener("click",this.removeCard.bind(this),!1),this.ui.querySelector("#cards").append(n),this.validate(),await this.loadCards()}async removeCard(e){e.preventDefault();const t=e.currentTarget.dataset.index;if(!t)return;const s=this.cardsCollection.nfts[t];if(console.log(this.selectedCards.map((e=>e.name))),this.selectedCards=this.selectedCards.filter((e=>e.assetId!=s.assetId)),console.log(this.selectedCards.map((e=>e.name))),0===this.selectedCards.length){const e=this.ui.querySelector("#default-card");e&&(e.hidden=!1)}this.validate(),await this.loadCards(),this.ui.querySelector(`#card-${t}`).remove()}validate(){let e;this.simulator||(e=this.ui.querySelector("#button-review")),this.selectedBather&&this.selectedCards.length>0?(this.simulator||(e.disabled=!1),this.preview()):this.selectedBather?(this.ui.querySelector("#merged-img").src=this.selectedBather.imageUrl,this.simulator||(e.disabled=!0)):this.simulator||(e.disabled=!0)}review(e){const t=document.createElement("div");t.className="modal",t.tabIndex="-1";let s,a=[];for(const e of this.selectedCards)for(const t in e.metadata.properties)o.duplicateCriteria.includes(t)&&a.push(t);a.length>0&&(s=`&#9888;&#65039; This request contains a modification that can generate a duplicate (${a.join(",")}). If it's the case, the request will be canceled and the cards returned to your wallet.<br>`),t.innerHTML=`\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">Review Bather modification</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <div class="text-center mb-3">\n                <img style="width: 320px; height: auto;" id="preview-merged-img">\n            </div>\n\n          <p>\n          Your <strong>${this.selectedBather.name}</strong> will be updated.<br>\n          Your <strong>${this.selectedCards.map((e=>e.name)).join(", ")}</strong> will be burned &#128293;\n          </p>\n\n          <p>You'll get <strong>${11*this.selectedCards.length} $Roar</strong></p>\n            \n          <p>${s||""}&#128337; As the process requires a manual step, update can take up to 24h.<br>\n          &#128236; You will be notified by a zero Algo transaction when the update is complete.</p>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="button-alt" data-bs-dismiss="modal">Close</button>\n          <button type="button" id="send-button">Send request</button>\n        </div>\n      </div>\n    </div>\n    `,t.querySelector("#preview-merged-img").src=this.mergedImgDataURL;const n=t.querySelector("#send-button");n.currentModal=t,n.addEventListener("click",this.send.bind(this),!1),new window.bootstrap.Modal(t,{}).show()}async preview(){let e;this.simulator||(e=this.ui.querySelector("#button-review"),e.disabled=!0,e.textContent="Generating...");const t=this.ui.querySelector("#merged-img");this.mergedProperties=Object.assign({},this.selectedBather.metadata.properties);for(const e of this.selectedCards)for(const t in e.metadata.properties)this.mergedProperties[t]=e.metadata.properties[t];let s=await(0,i.i)(this.mergedProperties,o,"layers_images");this.simulator&&(s=await this.applyWipOverlay(s)),this.mergedImgDataURL=s.toDataURL("image/png"),t.src=this.mergedImgDataURL,this.simulator||(e.disabled=!1,e.textContent="Review...")}applyWipOverlay(e){return new Promise(((t,s)=>{let a=document.createElement("canvas");a.width=52,a.height=52;var n=a.getContext("2d");let i=new Image;i.onload=()=>{n.drawImage(e,2,2),n.drawImage(i,0,0),t(a)},i.onerror=e=>{s(e)},i.src="assets/wip.png"}))}async send(e){const t=e.currentTarget;t.disabled=!0,t.textContent="Waiting for signature...";const s=await this.algodClient.getTransactionParams().do(),a={evolve:this.selectedBather.assetId},n=(new TextEncoder).encode(JSON.stringify(a));if(this.selectedCards.length>13)return void alert("No more than 14 cards can be used at once.");let i=[];for(const e of this.selectedCards)i.push(d.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.walletConnect.walletAddress,to:this.cardsCollection.collections[0].addresses[0],amount:1,assetIndex:e.assetId,suggestedParams:s,note:n}));i.length>1&&d.assignGroupID(i);const r=await this.walletConnect.signTransactions(i),o=t.currentModal;let l;o.innerHTML='\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body ">\n            <div class="text-center mb-3">\n                <img src="assets/grinder.png" style="width: 128px; height: auto;">\n            </div>\n            <div class="text-center mb-3">\n            Sending Caffeine Card to the Grinder...\n            </div>\n        </div>\n      </div>\n    </div>\n    ';try{l=await this.algodClient.sendRawTransaction(r).do(),await d.waitForConfirmation(this.algodClient,l.txId,4),o.innerHTML='\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n          <div class="text-center mb-3">\n          <img src="assets/heart-cup.png" width="60"><br><br>\n          We got your card and your evolution request.<br>\n          We\'ll be back to you very soon.\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" data-bs-dismiss="modal">Close</button>\n        </div>\n      </div>\n    </div>\n    ',o.addEventListener("hidden.bs.modal",(e=>{location.reload()}))}catch(e){o.innerHTML=`\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n          <div class="text-center mb-3">\n          <div class="alert alert-danger" role="alert">${e.message} </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" data-bs-dismiss="modal">Close</button>\n        </div>\n      </div>\n    </div>\n    `,console.error(e)}}}}}]);