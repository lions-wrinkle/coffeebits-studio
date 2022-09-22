"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[358,998],{6998:(t,e,s)=>{s.r(e),s.d(e,{BasePage:()=>a});class a{constructor(t,e,s,a){this.walletConnect=t,this.algodClient=s,this.algoIndexer=a,this.holdings=e}}},2358:(t,e,s)=>{s.r(e),s.d(e,{GrinderQueue:()=>r});var a=s(6998),n=s(5190),o=s(2417);class r extends a.BasePage{constructor(){super(...arguments),this.ui=document.createElement("div"),this.ui.innerHTML='\n    <button class="button-alt" id="refresh-button">Refresh</button>\n    <table class="table" style="table-layout: fixed; color: var(--white);">\n      <thead>\n        <tr>\n          <th scope="col">Txn</th>\n          <th scope="col">Date</th>\n          <th scope="col">Sender</th>\n          <th scope="col">Bather</th>\n          <th scope="col">Card</th>\n          <th scope="col">Status</th>\n        </tr>\n      </thead>\n      <tbody id="table-body">\n      </tbody>\n    </table>\n        ',this.load(),this.ui.querySelector("#refresh-button").addEventListener("click",(()=>{this.load()}),!1)}async load(){const t=n.Z.filter((t=>"caffeineCards"===t.name))[0].addresses[0];let e=!1;(o.Z.algodUrl.includes("testnet")||o.Z.algoIndexerUrl.includes("testnet"))&&(e=!0);let s,a=[];do{const e=await this.algoIndexer.searchForTransactions(t).address(t).addressRole("receiver").txType("axfer").nextToken(s).do();for(const t of e.transactions)1===t["asset-transfer-transaction"].amount&&t.note&&atob(t.note).includes('"evolve":')&&a.push(t);s=e["next-token"]}while(s);a.sort(((t,e)=>e["round-time"]-t.roundtime));const r=this.ui.querySelector("#table-body");r.textContent="";for(const s of a){const a=JSON.parse(atob(s.note)).evolve,n=s["asset-transfer-transaction"]["asset-id"];let o,l;try{o=await this.algoIndexer.lookupAssetByID(a).do()}catch(t){console.error(t)}try{l=await this.algoIndexer.lookupAssetByID(n).do()}catch(t){console.error(t)}let d="";e&&(d="testnet.");let c="";try{const t=await fetch(`https://api.${d}nf.domains/nfd/address?address=${s.sender}`);if(200===t.status){const e=await t.json();c=`<a href="https://${e[0].name}.xyz" target="_blank">${e[0].name}</a>`}}catch(t){console.error(t)}const i=new Date(1e3*s["round-time"]),{statuses:p,groupId:h}=await this.getStatus(s.id,a,n,t);let u="";h&&(u=`<br><small><a href="https://${d}algoexplorer.io/tx/group/${encodeURIComponent(h)}" class="link-secondary" target="_blank">Txns group</a></small>`);const b=document.createElement("tr");b.innerHTML=`\n      <td style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><a href="https://${d}algoexplorer.io/tx/${s.id}" target="_blank">${s.id}</a><br><a href="#" id="btn-${s.id}" style="opacity: 0.5;">copy</a>\n      </td>\n      <td>${i.toLocaleString()}</td>\n      <td style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><a href="https://${d}algoexplorer.io/address/${s.sender}" target="_blank">${s.sender}</a><br>${c}</td>\n      <td><a href="https://www.nftexplorer.app/asset/${a}" target="_blank">${o?o.asset.params.name:"unknown"}</a><br><small class="text-secondary">${a}</small></td>\n      <td><a href="https://www.nftexplorer.app/asset/${n}" target="_blank">${l?l.asset.params.name:"unknown"}</a><br><small class="text-secondary">${n}</small></td>\n      <td>${p.join(" ")}${u}</td>\n      `,r.appendChild(b),b.querySelector(`#btn-${s.id}`).addEventListener("click",(t=>{navigator.clipboard.writeText(s.id),t.preventDefault()}),!1)}}async getStatus(t,e,s,a){let n,o=[];const r=await this.algoIndexer.lookupAssetTransactions(e).txType("acfg").do();for(const e of r.transactions)if(e.note){const s=JSON.parse(atob(e.note));s&&"update"===s.type&&s.requestTxn===t&&(o.push('<span class="badge text-bg-success">updated</span>'),n=e.group)}const l=await this.algoIndexer.lookupAssetTransactions(s).txType("axfer").address(a).addressRole("sender").do();for(const e of l.transactions)if(e.note){const s=JSON.parse(atob(e.note));s&&"burn"===s.type&&s.requestTxn===t&&o.push('<span class="badge text-bg-success">burned</span>')}return 0===o.length&&o.push('<span class="badge text-bg-warning">pending</span>'),{statuses:o,groupId:n}}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZGlvLy4vc3JjL3BhZ2VzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vc3R1ZGlvLy4vc3JjL3BhZ2VzL2dyaW5kZXItcXVldWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgQmFzZVBhZ2Uge1xuXG4gICAgY29uc3RydWN0b3Iod2FsbGV0Q29ubmVjdCwgaG9sZGluZ3MsIGFsZ29kQ2xpZW50LCBhbGdvSW5kZXhlcil7XG5cbiAgICAgICAgdGhpcy53YWxsZXRDb25uZWN0ID0gd2FsbGV0Q29ubmVjdDtcbiAgICAgICAgdGhpcy5hbGdvZENsaWVudCA9IGFsZ29kQ2xpZW50O1xuICAgICAgICB0aGlzLmFsZ29JbmRleGVyID0gYWxnb0luZGV4ZXI7XG4gICAgICAgIHRoaXMuaG9sZGluZ3MgPSBob2xkaW5ncztcblxuICAgICAgICBcblxuICAgIH1cblxufSIsImltcG9ydCB7IEJhc2VQYWdlIH0gZnJvbSBcIi4vYmFzZS5qc1wiO1xuaW1wb3J0IGNvbGxlY3Rpb24gZnJvbSBcIi4uL2NvbGxlY3Rpb25zLmpzXCI7XG5pbXBvcnQgc2V0dGluZ3MgZnJvbSBcImN1c3RvbS1zZXR0aW5nc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmluZGVyUXVldWUgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLnVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnVpLmlubmVySFRNTCA9IGBcbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWFsdFwiIGlkPVwicmVmcmVzaC1idXR0b25cIj5SZWZyZXNoPC9idXR0b24+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIiBzdHlsZT1cInRhYmxlLWxheW91dDogZml4ZWQ7IGNvbG9yOiB2YXIoLS13aGl0ZSk7XCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5UeG48L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlNlbmRlcjwvdGg+XG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QmF0aGVyPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5DYXJkPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBpZD1cInRhYmxlLWJvZHlcIj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgICAgICAgYDtcblxuICAgIHRoaXMubG9hZCgpO1xuXG4gICAgdGhpcy51aS5xdWVyeVNlbGVjdG9yKFwiI3JlZnJlc2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgY29uc3QgY2FyZENvbGxlY3Rpb25JbmZvID0gY29sbGVjdGlvbi5maWx0ZXIoXG4gICAgICAoYykgPT4gYy5uYW1lID09PSBcImNhZmZlaW5lQ2FyZHNcIlxuICAgICk7XG4gICAgY29uc3QgY2FyZENyZWF0b3JBZGRyZXNzID0gY2FyZENvbGxlY3Rpb25JbmZvWzBdLmFkZHJlc3Nlc1swXTtcblxuICAgIGxldCB0ZXN0bmV0ID0gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICBzZXR0aW5ncy5hbGdvZFVybC5pbmNsdWRlcyhcInRlc3RuZXRcIikgfHxcbiAgICAgIHNldHRpbmdzLmFsZ29JbmRleGVyVXJsLmluY2x1ZGVzKFwidGVzdG5ldFwiKVxuICAgICkge1xuICAgICAgdGVzdG5ldCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHRyYW5zYWN0aW9ucyA9IFtdO1xuXG4gICAgbGV0IG5leHRUb2tlbjtcblxuICAgIGRvIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYWxnb0luZGV4ZXJcbiAgICAgICAgLnNlYXJjaEZvclRyYW5zYWN0aW9ucyhjYXJkQ3JlYXRvckFkZHJlc3MpXG4gICAgICAgIC5hZGRyZXNzKGNhcmRDcmVhdG9yQWRkcmVzcylcbiAgICAgICAgLmFkZHJlc3NSb2xlKFwicmVjZWl2ZXJcIilcbiAgICAgICAgLnR4VHlwZShcImF4ZmVyXCIpXG4gICAgICAgIC5uZXh0VG9rZW4obmV4dFRva2VuKVxuICAgICAgICAuZG8oKTtcblxuICAgICAgZm9yIChjb25zdCB0eG4gb2YgcmVzdWx0LnRyYW5zYWN0aW9ucykge1xuICAgICAgICBpZiAodHhuW1wiYXNzZXQtdHJhbnNmZXItdHJhbnNhY3Rpb25cIl0uYW1vdW50ICE9PSAxKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXR4bi5ub3RlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXRvYih0eG4ubm90ZSkuaW5jbHVkZXMoXCJcXFwiZXZvbHZlXFxcIjpcIikpIHtcbiAgICAgICAgICB0cmFuc2FjdGlvbnMucHVzaCh0eG4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5leHRUb2tlbiA9IHJlc3VsdFtcIm5leHQtdG9rZW5cIl07XG4gICAgfSB3aGlsZSAobmV4dFRva2VuKTtcblxuICAgIC8vb3JkZXIgYnkgdGltZSBiYWNrd2FyZFxuICAgIHRyYW5zYWN0aW9ucy5zb3J0KChhLCBiKSA9PiBiW1wicm91bmQtdGltZVwiXSAtIGFbXCJyb3VuZHRpbWVcIl0pO1xuXG4gICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy51aS5xdWVyeVNlbGVjdG9yKFwiI3RhYmxlLWJvZHlcIik7XG4gICAgdGFibGVCb2R5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAoY29uc3QgdHhuIG9mIHRyYW5zYWN0aW9ucykge1xuICAgICAgY29uc3Qgbm90ZSA9IEpTT04ucGFyc2UoYXRvYih0eG4ubm90ZSkpO1xuICAgICAgY29uc3QgYmF0aGVyQXNzZXRJZCA9IG5vdGUuZXZvbHZlO1xuICAgICAgY29uc3QgY2FyZEFzc2V0SWQgPSB0eG5bXCJhc3NldC10cmFuc2Zlci10cmFuc2FjdGlvblwiXVtcImFzc2V0LWlkXCJdO1xuXG4gICAgICAvL2xvYWQgYXNzZXRzIGRldGFpbHNcbiAgICAgIGxldCBiYXRoZXJBc3NldFJlc3VsdDtcbiAgICAgIGxldCBjYXJkQXNzZXRSZXN1bHQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGJhdGhlckFzc2V0UmVzdWx0ID0gYXdhaXQgdGhpcy5hbGdvSW5kZXhlclxuICAgICAgICAgIC5sb29rdXBBc3NldEJ5SUQoYmF0aGVyQXNzZXRJZClcbiAgICAgICAgICAuZG8oKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNhcmRBc3NldFJlc3VsdCA9IGF3YWl0IHRoaXMuYWxnb0luZGV4ZXJcbiAgICAgICAgICAubG9va3VwQXNzZXRCeUlEKGNhcmRBc3NldElkKVxuICAgICAgICAgIC5kbygpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRlc25ldFN1YmRvbWFpbiA9IFwiXCI7XG4gICAgICBpZiAodGVzdG5ldCkge1xuICAgICAgICB0ZXNuZXRTdWJkb21haW4gPSBcInRlc3RuZXQuXCI7XG4gICAgICB9XG5cbiAgICAgIC8vdHJ5IHRvIGxvYWQgbmZkIGFkZHJlc3NcbiAgICAgIC8vbG9vayBmb3IgYW4gbmZkIGRvbWFpbiBhZGRyZXNzXG5cbiAgICAgIGxldCBuZmQgPSBcIlwiO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkuJHt0ZXNuZXRTdWJkb21haW59bmYuZG9tYWlucy9uZmQvYWRkcmVzcz9hZGRyZXNzPSR7dHhuLnNlbmRlcn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgbmZkUmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgbmZkID0gYDxhIGhyZWY9XCJodHRwczovLyR7bmZkUmVzdWx0WzBdLm5hbWV9Lnh5elwiIHRhcmdldD1cIl9ibGFua1wiPiR7bmZkUmVzdWx0WzBdLm5hbWV9PC9hPmA7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdW5kRGF0ZSA9IG5ldyBEYXRlKHR4bltcInJvdW5kLXRpbWVcIl0gKiAxMDAwKTtcblxuICAgICAgY29uc3QgeyBzdGF0dXNlcywgZ3JvdXBJZCB9ID0gYXdhaXQgdGhpcy5nZXRTdGF0dXMoXG4gICAgICAgIHR4bi5pZCxcbiAgICAgICAgYmF0aGVyQXNzZXRJZCxcbiAgICAgICAgY2FyZEFzc2V0SWQsXG4gICAgICAgIGNhcmRDcmVhdG9yQWRkcmVzc1xuICAgICAgKTtcblxuICAgICAgbGV0IGdyb3VwVHhuTGluayA9IFwiXCI7XG4gICAgICBpZiAoZ3JvdXBJZCkge1xuICAgICAgICBncm91cFR4bkxpbmsgPSBgPGJyPjxzbWFsbD48YSBocmVmPVwiaHR0cHM6Ly8ke3Rlc25ldFN1YmRvbWFpbn1hbGdvZXhwbG9yZXIuaW8vdHgvZ3JvdXAvJHtlbmNvZGVVUklDb21wb25lbnQoZ3JvdXBJZCl9XCIgY2xhc3M9XCJsaW5rLXNlY29uZGFyeVwiIHRhcmdldD1cIl9ibGFua1wiPlR4bnMgZ3JvdXA8L2E+PC9zbWFsbD5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUYWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgIG5ld1RhYmxlUm93LmlubmVySFRNTCA9IGBcbiAgICAgIDx0ZCBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB3aGl0ZS1zcGFjZTogbm93cmFwO1wiPjxhIGhyZWY9XCJodHRwczovLyR7dGVzbmV0U3ViZG9tYWlufWFsZ29leHBsb3Jlci5pby90eC8ke1xuICAgICAgICB0eG4uaWRcbiAgICAgIH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3R4bi5pZH08L2E+PGJyPjxhIGhyZWY9XCIjXCIgaWQ9XCJidG4tJHtcbiAgICAgICAgdHhuLmlkXG4gICAgICB9XCIgc3R5bGU9XCJvcGFjaXR5OiAwLjU7XCI+Y29weTwvYT5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+JHtyb3VuZERhdGUudG9Mb2NhbGVTdHJpbmcoKX08L3RkPlxuICAgICAgPHRkIHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7XCI+PGEgaHJlZj1cImh0dHBzOi8vJHt0ZXNuZXRTdWJkb21haW59YWxnb2V4cGxvcmVyLmlvL2FkZHJlc3MvJHtcbiAgICAgICAgdHhuLnNlbmRlclxuICAgICAgfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dHhuLnNlbmRlcn08L2E+PGJyPiR7bmZkfTwvdGQ+XG4gICAgICA8dGQ+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5mdGV4cGxvcmVyLmFwcC9hc3NldC8ke2JhdGhlckFzc2V0SWR9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtcbiAgICAgICAgYmF0aGVyQXNzZXRSZXN1bHQgPyBiYXRoZXJBc3NldFJlc3VsdC5hc3NldC5wYXJhbXMubmFtZSA6IFwidW5rbm93blwiXG4gICAgICB9PC9hPjxicj48c21hbGwgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPiR7YmF0aGVyQXNzZXRJZH08L3NtYWxsPjwvdGQ+XG4gICAgICA8dGQ+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5mdGV4cGxvcmVyLmFwcC9hc3NldC8ke2NhcmRBc3NldElkfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7XG4gICAgICAgIGNhcmRBc3NldFJlc3VsdCA/IGNhcmRBc3NldFJlc3VsdC5hc3NldC5wYXJhbXMubmFtZSA6IFwidW5rbm93blwiXG4gICAgICB9PC9hPjxicj48c21hbGwgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPiR7Y2FyZEFzc2V0SWR9PC9zbWFsbD48L3RkPlxuICAgICAgPHRkPiR7c3RhdHVzZXMuam9pbihcIiBcIil9JHtncm91cFR4bkxpbmt9PC90ZD5cbiAgICAgIGA7XG5cbiAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdUYWJsZVJvdyk7XG5cbiAgICAgIG5ld1RhYmxlUm93LnF1ZXJ5U2VsZWN0b3IoYCNidG4tJHt0eG4uaWR9YCkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0eG4uaWQpO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0U3RhdHVzKHR4bklkLCBiYXRoZXJBc3NldElkLCBjYXJkQXNzZXRJZCwgY2FyZENyZWF0b3JBZGRyZXNzKSB7XG4gICAgbGV0IHN0YXR1c2VzID0gW107XG4gICAgbGV0IGdyb3VwSWQ7XG5cbiAgICAvL2NoZWNrIGlmIGJhdGhlciBhc3NldCBoYXZlIGJlZW4gdXBkYXRlZFxuICAgIGNvbnN0IGJhdGhlckFzc2V0VHJhbnNhY3Rpb25zID0gYXdhaXQgdGhpcy5hbGdvSW5kZXhlclxuICAgICAgLmxvb2t1cEFzc2V0VHJhbnNhY3Rpb25zKGJhdGhlckFzc2V0SWQpXG4gICAgICAudHhUeXBlKFwiYWNmZ1wiKVxuICAgICAgLmRvKCk7XG5cbiAgICBmb3IgKGNvbnN0IGNvbmZpZ1R4biBvZiBiYXRoZXJBc3NldFRyYW5zYWN0aW9ucy50cmFuc2FjdGlvbnMpIHtcbiAgICAgIGlmIChjb25maWdUeG4ubm90ZSkge1xuICAgICAgICBjb25zdCBub3RlSnNvbiA9IEpTT04ucGFyc2UoYXRvYihjb25maWdUeG4ubm90ZSkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBub3RlSnNvbiAmJlxuICAgICAgICAgIG5vdGVKc29uLnR5cGUgPT09IFwidXBkYXRlXCIgJiZcbiAgICAgICAgICBub3RlSnNvbi5yZXF1ZXN0VHhuID09PSB0eG5JZFxuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0dXNlcy5wdXNoKCc8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctc3VjY2Vzc1wiPnVwZGF0ZWQ8L3NwYW4+Jyk7XG4gICAgICAgICAgZ3JvdXBJZCA9IGNvbmZpZ1R4bi5ncm91cDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vY2hlY2sgaWYgY2FyZCBhc3NldCBoYXZlIGJlZW4gYnVybmVkXG4gICAgY29uc3QgY2FyZEFzc2V0VHJhbnNhY3Rpb25zID0gYXdhaXQgdGhpcy5hbGdvSW5kZXhlclxuICAgICAgLmxvb2t1cEFzc2V0VHJhbnNhY3Rpb25zKGNhcmRBc3NldElkKVxuICAgICAgLnR4VHlwZShcImF4ZmVyXCIpXG4gICAgICAuYWRkcmVzcyhjYXJkQ3JlYXRvckFkZHJlc3MpXG4gICAgICAuYWRkcmVzc1JvbGUoXCJzZW5kZXJcIilcbiAgICAgIC5kbygpO1xuXG4gICAgZm9yIChjb25zdCB0cmFuc2ZlcnRUeG4gb2YgY2FyZEFzc2V0VHJhbnNhY3Rpb25zLnRyYW5zYWN0aW9ucykge1xuICAgICAgaWYgKHRyYW5zZmVydFR4bi5ub3RlKSB7XG4gICAgICAgIGNvbnN0IG5vdGVKc29uID0gSlNPTi5wYXJzZShhdG9iKHRyYW5zZmVydFR4bi5ub3RlKSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG5vdGVKc29uICYmXG4gICAgICAgICAgbm90ZUpzb24udHlwZSA9PT0gXCJidXJuXCIgJiZcbiAgICAgICAgICBub3RlSnNvbi5yZXF1ZXN0VHhuID09PSB0eG5JZFxuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0dXNlcy5wdXNoKCc8c3BhbiBjbGFzcz1cImJhZGdlIHRleHQtYmctc3VjY2Vzc1wiPmJ1cm5lZDwvc3Bhbj4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0dXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN0YXR1c2VzLnB1c2goJzxzcGFuIGNsYXNzPVwiYmFkZ2UgdGV4dC1iZy13YXJuaW5nXCI+cGVuZGluZzwvc3Bhbj4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdGF0dXNlcywgZ3JvdXBJZCB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmFzZVBhZ2UiLCJjb25zdHJ1Y3RvciIsIndhbGxldENvbm5lY3QiLCJob2xkaW5ncyIsImFsZ29kQ2xpZW50IiwiYWxnb0luZGV4ZXIiLCJ0aGlzIiwiR3JpbmRlclF1ZXVlIiwic3VwZXIiLCJhcmd1bWVudHMiLCJ1aSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImxvYWQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFzeW5jIiwiY2FyZENyZWF0b3JBZGRyZXNzIiwiYyIsIm5hbWUiLCJhZGRyZXNzZXMiLCJ0ZXN0bmV0IiwibmV4dFRva2VuIiwidHJhbnNhY3Rpb25zIiwicmVzdWx0Iiwic2VhcmNoRm9yVHJhbnNhY3Rpb25zIiwiYWRkcmVzcyIsImFkZHJlc3NSb2xlIiwidHhUeXBlIiwiZG8iLCJ0eG4iLCJhbW91bnQiLCJub3RlIiwiYXRvYiIsImluY2x1ZGVzIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsInRhYmxlQm9keSIsInRleHRDb250ZW50IiwiYmF0aGVyQXNzZXRJZCIsIkpTT04iLCJwYXJzZSIsImV2b2x2ZSIsImNhcmRBc3NldElkIiwiYmF0aGVyQXNzZXRSZXN1bHQiLCJjYXJkQXNzZXRSZXN1bHQiLCJsb29rdXBBc3NldEJ5SUQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ0ZXNuZXRTdWJkb21haW4iLCJuZmQiLCJyZXNwb25zZSIsImZldGNoIiwic2VuZGVyIiwic3RhdHVzIiwibmZkUmVzdWx0IiwianNvbiIsInJvdW5kRGF0ZSIsIkRhdGUiLCJzdGF0dXNlcyIsImdyb3VwSWQiLCJnZXRTdGF0dXMiLCJpZCIsImdyb3VwVHhuTGluayIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5ld1RhYmxlUm93IiwidG9Mb2NhbGVTdHJpbmciLCJhc3NldCIsInBhcmFtcyIsImpvaW4iLCJhcHBlbmRDaGlsZCIsImV2ZW50IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicHJldmVudERlZmF1bHQiLCJ0eG5JZCIsImJhdGhlckFzc2V0VHJhbnNhY3Rpb25zIiwibG9va3VwQXNzZXRUcmFuc2FjdGlvbnMiLCJjb25maWdUeG4iLCJub3RlSnNvbiIsInR5cGUiLCJyZXF1ZXN0VHhuIiwiZ3JvdXAiLCJjYXJkQXNzZXRUcmFuc2FjdGlvbnMiLCJ0cmFuc2ZlcnRUeG4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9