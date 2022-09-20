"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[538],{6538:(e,t,s)=>{s.r(t),s.d(t,{Grinder:()=>r});var a=s(6998),n=(s(5190),s(7304),s(7644)),d=s(4050),i=s(2871),o=s(4714);class r extends a.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n    <h1>Grinder</h1>\n    <p class="dark-text">Use Caffeine Cards to update your Bathers</p>\n\n    <div class="d-sm-flex flew-row" style="background-color: var(--background-dark);">\n\n        <div class="d-flex flex-column p-3 text-center">\n\n            <img src="assets/default.png" class="mb-2 ms-auto me-auto" id="club-img" style="width: 200px; height: auto">\n\n            <div class="dropdown" id="bath-club-dropdown">\n                <button class="dropdown-toggle button-alt" type="button" data-bs-toggle="dropdown"\n                    aria-expanded="false">\n                    Choose Bather\n                </button>\n            </div>\n\n            <img src="assets/default-card.png" class="mb-2 mt-4 ms-auto me-auto" id="card-img" style="width: 200px; height: auto">\n\n            <div class="dropdown mb-5" id="cards-dropdown">\n                <button class="dropdown-toggle button-alt" type="button" data-bs-toggle="dropdown"\n                    aria-expanded="false" id="choose-card-button" disabled>\n                    Choose Card\n                </button>\n            </div>\n            <button id="button-review" disabled>Review...</button>\n\n        </div>\n\n        <div class="d-flex flex-column flex-fill p-3 text-center">\n            <small class="dark-text">preview</small>\n            <img src="assets/default.png" class="w-100 m-auto img-fluid" style="max-width: 480px;" id="merged-img">\n\n        </div>\n\n    </div>',this.bathersCollection,this.cardsCollection,this.selectedBather,this.selectedCard,this.mergedImgDataURL,this.params,this.chooseCardButton=this.ui.querySelector("#choose-card-button"),this.load()}async load(){await this.loadBathers(),this.params=await this.algodClient.getTransactionParams().do(),this.ui.querySelector("#button-review").addEventListener("click",this.review.bind(this))}async loadBathers(){this.bathersCollection=this.holdings.bathers;const e=this.ui.querySelector("#bath-club-dropdown");let t=e.querySelector(".dropdown-menu");t&&t.remove(),t=new i.Z(this.bathersCollection.nfts,this.didSelectBather.bind(this)),e.append(t.ui)}async didSelectBather(e){this.clearCard();const t=e.currentTarget.dataset.index;if(!t)return;const s=this.bathersCollection.nfts[t];this.selectedBather=s,this.ui.querySelector("#club-img").src=s.imageUrl,this.validate(),await this.loadCards(),this.chooseCardButton.disabled=!1,e.preventDefault()}clearCard(){this.selectedCard=void 0,this.chooseCardButton.disabled=!0,this.ui.querySelector("#card-img").src="assets/default-card.png"}async loadCards(){this.cardsCollection=this.holdings.caffeineCards;const e=this.ui.querySelector("#cards-dropdown");let t=e.querySelector("#cards-dropdown-nft");t&&t.remove();let s=[];for(const e of this.cardsCollection.nfts)if(e.metadata.require)for(const t in e.metadata.require)this.selectedBather.metadata.properties[t]==e.metadata.require[t]||s.push(e.assetId);console.log(s),t=new i.Z(this.cardsCollection.nfts,this.didSelectCard.bind(this),"cards-dropdown-nft",s),e.append(t.ui),new window.bootstrap.Dropdown(this.chooseCardButton)}async didSelectCard(e){const t=e.currentTarget.dataset.index;if(!t)return;const s=this.cardsCollection.nfts[t];this.selectedCard=s,this.ui.querySelector("#card-img").src=s.imageUrl,this.validate(),e.preventDefault()}validate(){const e=this.ui.querySelector("#button-review");this.selectedBather&&this.selectedCard?(e.disabled=!1,this.preview()):this.selectedBather?(this.ui.querySelector("#merged-img").src=this.selectedBather.imageUrl,e.disabled=!0):e.disabled=!0}review(e){const t=document.createElement("div");t.className="modal",t.tabIndex="-1",t.innerHTML=`\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title">Review Bather evolution</h5>\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <div class="text-center mb-3">\n                <img style="width: 320px; height: auto;" id="preview-merged-img">\n            </div>\n\n          <p>\n          Your <strong>${this.selectedBather.name}</strong> will be updated.<br>\n          Your <strong>${this.selectedCard.name}</strong> will be burned &#128293;\n          </p>\n            \n          <p>&#128337; As the process requires a manual step, update can take up to 24h.<br>\n          &#128236; You will be notified by a zero Algo transaction when the evolution is complete.</p>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="button-alt" data-bs-dismiss="modal">Close</button>\n          <button type="button" id="send-button">Send request</button>\n        </div>\n      </div>\n    </div>\n    `,t.querySelector("#preview-merged-img").src=this.mergedImgDataURL;const s=t.querySelector("#send-button");s.currentModal=t,s.addEventListener("click",this.send.bind(this),!1),new window.bootstrap.Modal(t,{}).show()}async preview(){const e=this.ui.querySelector("#button-review");e.disabled=!0,e.textContent="Generating...";const t=this.ui.querySelector("#merged-img"),s=Object.assign({},this.selectedBather.metadata.properties);console.log(this.selectedBather.metadata.properties),console.log(this.selectedCard.metadata.properties);for(const e in this.selectedCard.metadata.properties)s[e]=this.selectedCard.metadata.properties[e];console.log(s);const a=await(0,n.i)(s,o,"layers_images");this.mergedImgDataURL=a.toDataURL("image/png"),t.src=this.mergedImgDataURL,e.disabled=!1,e.textContent="Review..."}async send(e){const t=e.currentTarget;t.disabled=!0,t.textContent="Waiting for signature...";const s={evolve:this.selectedBather.assetId},a=(new TextEncoder).encode(JSON.stringify(s)),n=d.makeAssetTransferTxnWithSuggestedParamsFromObject({from:this.walletConnect.walletAddress,to:this.cardsCollection.collections[0].addresses[0],amount:1,assetIndex:this.selectedCard.assetId,suggestedParams:this.params,note:a}),i=await this.walletConnect.signTransactions([n]),o=t.currentModal;let r;o.innerHTML='\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body ">\n            <div class="text-center mb-3">\n                <img src="assets/grinder.png" style="width: 128px; height: auto;">\n            </div>\n            <div class="text-center mb-3">\n            Sending Caffeine Card to the Grinder...\n            </div>\n        </div>\n      </div>\n    </div>\n    ';try{r=await this.algodClient.sendRawTransaction(i).do(),await d.waitForConfirmation(this.algodClient,r.txId,4),o.innerHTML='\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n          <div class="text-center mb-3">\n          <img src="assets/heart-cup.png" width="60"><br><br>\n          We got your card and your evolution request.<br>\n          We\'ll be back to you very soon.\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" data-bs-dismiss="modal">Close</button>\n        </div>\n      </div>\n    </div>\n    ',o.addEventListener("hidden.bs.modal",(e=>{location.reload()}))}catch(e){o.innerHTML=`\n    <div class="modal-dialog modal-dialog-centered">\n      <div class="modal-content">\n        <div class="modal-header">\n          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n          <div class="text-center mb-3">\n          <div class="alert alert-danger" role="alert">${e.message} </div>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <button type="button" data-bs-dismiss="modal">Close</button>\n        </div>\n      </div>\n    </div>\n    `,console.error(e)}}}}}]);