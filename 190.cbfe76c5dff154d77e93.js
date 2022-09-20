"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[190,998],{6998:(e,t,s)=>{s.r(t),s.d(t,{BasePage:()=>n});class n{constructor(e,t,s,n){this.walletConnect=e,this.algodClient=s,this.algoIndexer=n,this.holdings=t}}},4190:(e,t,s)=>{s.r(t),s.d(t,{Cards:()=>i});var n=s(6998),a=s(7304),l=s(5190);class i extends n.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n    <h1>Caffeine Cards</h1>\n    <p class="dark-text">Browse all Caffeine Cards</p>\n    ',this.collection,this.loadAllCards()}async loadAllCards(){const e=document.createElement("p");e.textContent="Loading cards...",this.ui.append(e);const t=l.Z.filter((e=>"caffeineCards"===e.name))[0];this.collection=new a.tf([t]),await this.collection.load(this.algoIndexer);const s=this.collection.nfts.length;let n=0;for(const t of this.collection.nfts)t.load(this.algoIndexer).then((()=>{n++,e.textContent=`Loading cards... (${n}/${s})`,n==s&&(e.remove(),this.displayList())}))}displayList(){if(!this.collection.nfts.length){const e=document.createElement("div");return e.innerHTML='<div class="dark-text mb-5">No assets</div>',void this.ui.append(e)}const e=document.createElement("div");e.className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4 mb-5";for(const t of this.collection.nfts){const s=document.createElement("div");s.id=`nft-${t.assetId}`,s.className="col";let n="";if(t.metadata.properties){for(const e in t.metadata.properties)n+=`<span class="custom-badge">${e}</span> `;n+="<br>"}let a="";if(t.metadata.require){let e=[];for(const s in t.metadata.require)e.push(`<span class="custom-badge light">${s}: ${t.metadata.require[s]}</span>`);a=`<span class="custom-badge dark">Require:</span> ${e.join(" ")}`}s.innerHTML=`\n          <div class="list-item h-100 d-flex flex-column">\n              <img src="${t.imageUrl}" class="nft-img img-fluid" loading="lazy">\n              <div class="list-item-text flex-fill d-flex flex-column">\n                  <h4>${t.name}</h4>\n                  <div class="d-flex justify-content-between">\n                      <span class="asset-id">${t.assetId}</span>\n                      ${t.total}\n                  </div>\n                  <div class="mt-3">\n                        ${n} ${a}<br>\n                  </div>\n                  <div class="flex-fill d-flex justify-content-between align-items-end mt-2">\n                        <div>&#128293; <span id="burn-count"></span></div>\n                        <div class="dropdown"></div>\n                  </div>\n              </div>\n          </div>\n      `;const l=s.querySelector("#burn-count");l.textContent="...",this.algodClient.accountAssetInformation(t.metadata.burn_address,t.assetId).do().then((e=>{l.textContent=`${e["asset-holding"].amount}`})),s.querySelector(".dropdown").innerHTML=`\n            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n            <img src="assets/more.png" class="more">\n            </a>\n            <ul class="dropdown-menu">\n                <li><a class="dropdown-item" href="https://www.nftexplorer.app/asset/${t.assetId}" target="_blank">NFTExplorer</a></li>\n                <li><a class="dropdown-item" href="https://www.randgallery.com/algo-collection/?address=${t.assetId}" target="_blank">RandGallery</a></li>\n                <li><a class="dropdown-item" href="https://algoxnft.com/asset/${t.assetId}" target="_blank">ALGOxNFT</a></li>\n            </ul>\n      `,e.append(s),t.handleImageError(s.querySelector(".nft-img"))}this.ui.append(e)}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9zdHVkaW8vLi9zcmMvcGFnZXMvY2FyZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQmFzZVBhZ2Uge1xuXG4gICAgY29uc3RydWN0b3Iod2FsbGV0Q29ubmVjdCwgaG9sZGluZ3MsIGFsZ29kQ2xpZW50LCBhbGdvSW5kZXhlcil7XG5cbiAgICAgICAgdGhpcy53YWxsZXRDb25uZWN0ID0gd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgdGhpcy5hbGdvZENsaWVudCA9IGFsZ29kQ2xpZW50O1xuICAgICAgICB0aGlzLmFsZ29JbmRleGVyID0gYWxnb0luZGV4ZXI7XG4gICAgICAgIHRoaXMuaG9sZGluZ3MgPSBob2xkaW5ncztcblxuICAgICAgICBcblxuICAgIH1cblxufSIsImltcG9ydCB7IEJhc2VQYWdlIH0gZnJvbSBcIi4vYmFzZS5qc1wiO1xuaW1wb3J0IHsgTkZUQ29sbGVjdGlvbiB9IGZyb20gXCJhbGdvLW5mdC11dGlsc1wiO1xuXG5pbXBvcnQgY29sbGVjdGlvbnMgZnJvbSBcIi4uL2NvbGxlY3Rpb25zLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkcyBleHRlbmRzIEJhc2VQYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIHRoaXMudWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMudWkuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5DYWZmZWluZSBDYXJkczwvaDE+XG4gICAgPHAgY2xhc3M9XCJkYXJrLXRleHRcIj5Ccm93c2UgYWxsIENhZmZlaW5lIENhcmRzPC9wPlxuICAgIGA7XG5cbiAgICB0aGlzLmNvbGxlY3Rpb247XG4gICAgdGhpcy5sb2FkQWxsQ2FyZHMoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRBbGxDYXJkcygpe1xuXG4gICAgY29uc3QgbG9hZGluZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2FkaW5nUC50ZXh0Q29udGVudCA9IFwiTG9hZGluZyBjYXJkcy4uLlwiO1xuICAgIHRoaXMudWkuYXBwZW5kKGxvYWRpbmdQKTtcblxuICAgIGNvbnN0IGNhcmRDb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmlsdGVyKGMgPT4gYy5uYW1lID09PSAnY2FmZmVpbmVDYXJkcycpWzBdO1xuXG4gICAgdGhpcy5jb2xsZWN0aW9uID0gbmV3IE5GVENvbGxlY3Rpb24oW2NhcmRDb2xsZWN0aW9uXSk7XG4gICAgYXdhaXQgdGhpcy5jb2xsZWN0aW9uLmxvYWQodGhpcy5hbGdvSW5kZXhlcik7XG5cbiAgICBjb25zdCB0b3RhbCA9IHRoaXMuY29sbGVjdGlvbi5uZnRzLmxlbmd0aDtcbiAgICBsZXQgbG9hZGVkID0gMDtcblxuICAgIC8vbG9hZCBuZnRzXG4gICAgZm9yIChjb25zdCBuZnQgb2YgdGhpcy5jb2xsZWN0aW9uLm5mdHMpe1xuICAgICAgICBuZnQubG9hZCh0aGlzLmFsZ29JbmRleGVyKS50aGVuKCgpID0+IHtcblxuICAgICAgICAgIGxvYWRlZCsrO1xuICAgICAgICAgIGxvYWRpbmdQLnRleHRDb250ZW50ID0gYExvYWRpbmcgY2FyZHMuLi4gKCR7bG9hZGVkfS8ke3RvdGFsfSlgO1xuXG4gICAgICAgICAgaWYgKGxvYWRlZCA9PSB0b3RhbCl7XG5cbiAgICAgICAgICAgIGxvYWRpbmdQLnJlbW92ZSgpO1xuICBcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUxpc3QoKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gIH1cblxuICBkaXNwbGF5TGlzdCgpIHtcblxuXG4gICAgaWYgKCF0aGlzLmNvbGxlY3Rpb24ubmZ0cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVtcHR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGVtcHR5RGl2LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGFyay10ZXh0IG1iLTVcIj5ObyBhc3NldHM8L2Rpdj4nO1xuXG4gICAgICB0aGlzLnVpLmFwcGVuZChlbXB0eURpdik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdFZpZXcuY2xhc3NOYW1lID1cbiAgICAgIFwicm93IHJvdy1jb2xzLTIgcm93LWNvbHMtbWQtMyByb3ctY29scy1sZy00IGd5LTQgbWItNVwiO1xuXG4gICAgZm9yIChjb25zdCBuZnQgb2YgdGhpcy5jb2xsZWN0aW9uLm5mdHMpIHtcbiAgICAgIGNvbnN0IG5mdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuZnREaXYuaWQgPSBgbmZ0LSR7bmZ0LmFzc2V0SWR9YDtcbiAgICAgIG5mdERpdi5jbGFzc05hbWUgPSBcImNvbFwiO1xuXG4gICAgICBsZXQgcHJvcGVydGllc05hbWVzID0gXCJcIjtcblxuICAgICAgaWYgKG5mdC5tZXRhZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIGluIG5mdC5tZXRhZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgcHJvcGVydGllc05hbWVzICs9IGA8c3BhbiBjbGFzcz1cImN1c3RvbS1iYWRnZVwiPiR7cHJvcGVydHlOYW1lfTwvc3Bhbj4gYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXNOYW1lcyArPSBcIjxicj5cIjtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlcXVpcmUgPSBcIlwiO1xuXG4gICAgICBpZiAobmZ0Lm1ldGFkYXRhLnJlcXVpcmUpIHtcbiAgICAgICAgbGV0IHJlcXVpcmVMaXN0ID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCByZXF1aXJlS2V5IGluIG5mdC5tZXRhZGF0YS5yZXF1aXJlKSB7XG4gICAgICAgICAgcmVxdWlyZUxpc3QucHVzaChcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cImN1c3RvbS1iYWRnZSBsaWdodFwiPiR7cmVxdWlyZUtleX06ICR7bmZ0Lm1ldGFkYXRhLnJlcXVpcmVbcmVxdWlyZUtleV19PC9zcGFuPmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWlyZSA9IGA8c3BhbiBjbGFzcz1cImN1c3RvbS1iYWRnZSBkYXJrXCI+UmVxdWlyZTo8L3NwYW4+ICR7cmVxdWlyZUxpc3Quam9pbihcIiBcIil9YDtcbiAgICAgIH1cblxuICAgICAgbmZ0RGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bmZ0LmltYWdlVXJsfVwiIGNsYXNzPVwibmZ0LWltZyBpbWctZmx1aWRcIiBsb2FkaW5nPVwibGF6eVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtLXRleHQgZmxleC1maWxsIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGg0PiR7bmZ0Lm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFzc2V0LWlkXCI+JHtuZnQuYXNzZXRJZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgJHtuZnQudG90YWx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3Byb3BlcnRpZXNOYW1lc30gJHtyZXF1aXJlfTxicj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZmlsbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtZW5kIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JiMxMjgyOTM7IDxzcGFuIGlkPVwiYnVybi1jb3VudFwiPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcblxuICAgICAgLy9sb2FkIGJhbGFuY2UgZnJvbSBidXJuaW5nIGFkZHJlc3NcbiAgICAgIGNvbnN0IGJ1cm5Db3VudFNwYW4gPSBuZnREaXYucXVlcnlTZWxlY3RvcignI2J1cm4tY291bnQnKTtcbiAgICAgIGJ1cm5Db3VudFNwYW4udGV4dENvbnRlbnQgPSAnLi4uJztcblxuICAgICAgdGhpcy5hbGdvZENsaWVudC5hY2NvdW50QXNzZXRJbmZvcm1hdGlvbihuZnQubWV0YWRhdGEuYnVybl9hZGRyZXNzLCBuZnQuYXNzZXRJZCkuZG8oKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBidXJuQ291bnRTcGFuLnRleHRDb250ZW50ID0gYCR7cmVzdWx0Wydhc3NldC1ob2xkaW5nJ10uYW1vdW50fWA7XG4gICAgICB9KTtcblxuICAgICAgLy9hZGQgZHJvcGRvd24gd2l0aCBvcHRpb25zXG4gICAgICBjb25zdCBkcm9wZG93bkRpdiA9IG5mdERpdi5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpO1xuXG4gICAgICBkcm9wZG93bkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9tb3JlLnBuZ1wiIGNsYXNzPVwibW9yZVwiPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly93d3cubmZ0ZXhwbG9yZXIuYXBwL2Fzc2V0LyR7bmZ0LmFzc2V0SWR9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TkZURXhwbG9yZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cImh0dHBzOi8vd3d3LnJhbmRnYWxsZXJ5LmNvbS9hbGdvLWNvbGxlY3Rpb24vP2FkZHJlc3M9JHtuZnQuYXNzZXRJZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SYW5kR2FsbGVyeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiaHR0cHM6Ly9hbGdveG5mdC5jb20vYXNzZXQvJHtuZnQuYXNzZXRJZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BTEdPeE5GVDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgIGA7XG5cbiAgICAgIGxpc3RWaWV3LmFwcGVuZChuZnREaXYpO1xuXG4gICAgICBuZnQuaGFuZGxlSW1hZ2VFcnJvcihuZnREaXYucXVlcnlTZWxlY3RvcignLm5mdC1pbWcnKSlcbiAgICB9XG5cbiAgICB0aGlzLnVpLmFwcGVuZChsaXN0Vmlldyk7XG4gICAgICBcbiAgICBcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJhc2VQYWdlIiwiY29uc3RydWN0b3IiLCJ3YWxsZXRDb25uZWN0IiwiaG9sZGluZ3MiLCJhbGdvZENsaWVudCIsImFsZ29JbmRleGVyIiwidGhpcyIsIkNhcmRzIiwic3VwZXIiLCJhcmd1bWVudHMiLCJ1aSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNvbGxlY3Rpb24iLCJsb2FkQWxsQ2FyZHMiLCJhc3luYyIsImxvYWRpbmdQIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJjYXJkQ29sbGVjdGlvbiIsImMiLCJuYW1lIiwibG9hZCIsInRvdGFsIiwibmZ0cyIsImxlbmd0aCIsImxvYWRlZCIsIm5mdCIsInRoZW4iLCJyZW1vdmUiLCJkaXNwbGF5TGlzdCIsImVtcHR5RGl2IiwibGlzdFZpZXciLCJjbGFzc05hbWUiLCJuZnREaXYiLCJpZCIsImFzc2V0SWQiLCJwcm9wZXJ0aWVzTmFtZXMiLCJtZXRhZGF0YSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJyZXF1aXJlIiwicmVxdWlyZUxpc3QiLCJyZXF1aXJlS2V5IiwicHVzaCIsImpvaW4iLCJpbWFnZVVybCIsImJ1cm5Db3VudFNwYW4iLCJxdWVyeVNlbGVjdG9yIiwiYWNjb3VudEFzc2V0SW5mb3JtYXRpb24iLCJidXJuX2FkZHJlc3MiLCJkbyIsInJlc3VsdCIsImFtb3VudCIsImhhbmRsZUltYWdlRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9