"use strict";(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[641,998],{6998:(e,t,s)=>{s.r(t),s.d(t,{BasePage:()=>n});class n{constructor(e,t,s,n){this.walletConnect=e,this.algodClient=s,this.algoIndexer=n,this.holdings=t}}},2641:(e,t,s)=>{s.r(t),s.d(t,{Connect:()=>o});var n=s(6998);class o extends n.BasePage{constructor(){super(...arguments);const e=document.createElement("div");e.innerHTML='\n        <div class="text-center">\n            <h1><img src="assets/logo-studio.png" width="180" alt="The Studio" class="mb-2"></h1>\n            Reserved area for CoffeeBits Bath Club members.<br>\n            <small>Connect wallet</small>\n            <div id="wallet-connect" class="mt-2"></div>\n            <br>\n            <a href="https://coffeebits.xyz">More infos about CoffeeBits</a>\n            <br><br>\n            <span style="color:#699af0;">Due to the ongoing investigation into the supposed myalgo hack, access with this wallet is disabled.\n            <a href="https://twitter.com/myalgo_/status/1632862464244162560" target="_blank" style="color: #699af0;">More info</a></span>\n            <br><br>\n            <span style="color: #8b4301">Powered by <a href="https://algonode.io/" style="color: #8b4301" target="_blank">Algonode.io</a></span>\n        </div>\n        <a href="https://coffeebits.xyz" style="position: absolute; left: 0; top: 10%;"><img src="assets/sign.png" style="height:90px;"></a><br/>\n        \n        ',e.querySelector("#wallet-connect").append(this.walletConnect.ui),this.ui=e}}}}]);