(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[701,998],{4853:()=>{},7644:(e,r,a)=>{"use strict";a.d(r,{i:()=>_});var i=a(4853);const n=48,t=48;function o(e,r,a){const i=4*(r*a.width+e);return[a.data[i],a.data[i+1],a.data[i+2],a.data[i+3]]}function p(e,r,a,i){const n=4*(r*i.width+e);i.data[n]=a[0],i.data[n+1]=a[1],i.data[n+2]=a[2],i.data[n+3]=a[3]}function l(e){const r=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16),n=parseInt(e.slice(7,9),16);return isNaN(n)?[r,a,i,255]:[r,a,i,n]}async function d(e){if(!e.length)return;const r=await u(e[0]),a=r.width,i=r.height,n=s(a,i).getContext("2d");n.imageSmoothingEnabled=!1;for(const r of e){const e=await u(r);n.drawImage(e,0,0,a,i)}const t=s(a,i),l=t.getContext("2d"),d=n.getImageData(0,0,a,i);let c,g=l.getImageData(0,0,a,i);e:for(let e=0;e<a;e++)for(let r=i-1;r>=0;r--){if(r<c)break e;const a=o(e,r,d);if(a[3]>0){p(e,r+1,[a[0],a[1],a[2],.2*a[3]],g);const i=o(e,r-1,d);p(e,r+2,[i[0],i[1],i[2],.08*i[3]],g),c||(c=r);continue e}}return l.putImageData(g,0,0),t}async function c(e,r,a){const i=await u(e),n=i.width,t=i.height,l=s(n,t),d=l.getContext("2d");d.imageSmoothingEnabled=!1,d.drawImage(i,0,0,n,t);const c=s(n,t),g=c.getContext("2d");g.imageSmoothingEnabled=!1;const _=s(n,t).getContext("2d");_.imageSmoothingEnabled=!1;for(const e of a){const r=await u(e);_.drawImage(r,0,0,n,t)}const m=d.getImageData(0,0,n,t),f=g.getImageData(0,0,n,t),h=_.getImageData(0,0,n,t);for(let e=1;e<t-1;e++)for(let a=1;a<n-1;a++){const i=o(a,e,m),n=o(a,e,h),t=o(a-1,e,m),l=o(a+1,e,m),d=o(a,e-1,m),c=o(a,e+1,m);0===t[3]&&i[3]>0&&n[3]<255&&p(a-1,e,r,f),0===l[3]&&i[3]>0&&n[3]<255&&p(a+1,e,r,f),0===d[3]&&i[3]>0&&n[3]<255&&p(a,e-1,r,f),0===c[3]&&i[3]>0&&n[3]<255&&p(a,e+1,r,f)}return g.putImageData(f,0,0),d.drawImage(c,0,0,n,t),l}function g(e,r,a){const i=e.width,n=e.height,t=s(i,n),d=t.getContext("2d");d.imageSmoothingEnabled=!1,d.drawImage(e,0,0,i,n);const c=d.getImageData(0,0,i,n);let g=255,u=0;for(let e=1;e<n-1;e++)for(let r=1;r<i-1;r++){const a=o(r,e,c);a[3]>0&&(g=Math.min(g,a[0]),u=Math.max(u,a[0]))}const _=l(r),m=l(a);let f=[];for(let e=1;e<n-1;e++)for(let r=1;r<i-1;r++){const a=o(r,e,c);if(a[3]>0){const i=(a[0]-u)/(u-g);f[0]=m[0]-(_[0]-m[0])*i,f[1]=m[1]-(_[1]-m[1])*i,f[2]=m[2]-(_[2]-m[2])*i,f[3]=a[3],p(r,e,f,c)}}return d.putImageData(c,0,0),t}function s(e,r){if("object"==typeof window){const a=document.createElement("canvas");return a.width=e,a.height=r,a}return i.createCanvas(e,r)}async function u(e){return"object"==typeof window?new Promise((r=>{const a=new Image;a.addEventListener("load",(()=>{r(a)})),a.src=e})):i.loadImage(e)}async function _(e,r,a,i=!1){const o=function(e,r){let a=[],i=0,n=!1;for(const t of r.layers)for(const o of t.items){const p=Object.keys(o.properties).length;let l=0;for(const r in e)o.properties[r]&&o.properties[r]===e[r]&&l++;if(p===l){i+=l;const p=Object.assign({},o);if(p.layer=t.name,p.layer_folder_name=t.folder_name,p.z||(p.z=t.z),p.dynamic_hair_color)for(const a in e)if("Hair Color"===a){for(const i of r.hairColors)if(i.name===e[a]){p.minHairColor=i.min,p.maxHairColor=i.max,n=!0;break}break}a.push(p)}}return i+=n?1:0,Object.keys(e).length!==i&&(console.log("Error with at least one property!"),console.log(`Requested properties: ${Object.keys(e).length}, found: ${i}`),console.log(e)),a}(e,r);let p;i&&(p=[]);const _=s(n,t),m=_.getContext("2d");m.imageSmoothingEnabled=!1;let f=[],h=[],y=[];for(const e of o){const r=`${a}/${e.layer_folder_name}/${e.file}`,i={layer:e.layer,filepath:r,z:e.z,blend:e.blend};if(e.glow&&(i.glow=e.glow),e.file&&f.push(i),e.foreground_file&&e.foreground_z){const r=`${a}/${e.layer_folder_name}/${e.foreground_file}`;f.push({layer:e.layer,filepath:r,z:e.foreground_z})}if(e.dynamic_hair_color&&e.hair_mask_file){const r=`${a}/${e.layer_folder_name}/${e.hair_mask_file}`;f.push({layer:e.layer,filepath:r,z:e.z,dynamicHairColor:e.dynamic_hair_color,minHairColor:e.minHairColor,maxHairColor:e.maxHairColor}),y.push(r)}else e.dynamic_hair_color&&console.log(`Missing hair mask for ${e.properties}`);e.file&&["body","clothes"].includes(e.layer)&&h.push(r),e.file&&["head","clothes"].includes(e.layer)&&y.push(r)}for(let e=f.length-1;e>=0;e--){const r=f[e];["body","clothes"].includes(r.layer)&&f.splice(e,0,{filepath:"reflection",z:r.z+1})}f.sort(((e,r)=>e.z-r.z));for(const e of f)if(i&&m.clearRect(0,0,n,t),e.blend?m.globalCompositeOperation=e.blend:m.globalCompositeOperation="source-over","reflection"===e.filepath){const e=await d(h);m.drawImage(e,0,0,n,t),i&&p.push({name:"reflection",imageData:m.getImageData(0,0,n,t),composite:m.globalCompositeOperation})}else if(e.glow){const r=l(e.glow),a=await c(e.filepath,r,y);m.drawImage(a,0,0,n,t),i&&p.push({name:"glow",imageData:m.getImageData(0,0,n,t),composite:m.globalCompositeOperation})}else{let r=await u(e.filepath);e.dynamicHairColor&&(r=g(r,e.minHairColor,e.maxHairColor)),m.drawImage(r,0,0,n,t),i&&p.push({name:e.layer,imageData:m.getImageData(0,0,n,t),composite:m.globalCompositeOperation})}return i?p:_}},2871:(e,r,a)=>{"use strict";a.d(r,{Z:()=>i});class i{constructor(e,r,a,i){this.nfts=e,this.clickListener=r,this.disabledAssetIds=i,this.ui=document.createElement("ul"),this.ui.className="dropdown-menu",this.ui.id=a,this.displayNfts()}displayNfts(){if(0===this.nfts.length){const e=document.createElement("li");this.ui.append(e),e.innerHTML='<a class="dropdown-item disabled">No assets</a>'}else{const e=document.createElement("div");e.className="mb-2 ps-3 pe-3 pt-1";const r=document.createElement("input");r.type="search",r.className="form-control",r.placeholder="Name, asset ID or trait",e.append(r),this.ui.append(e),r.addEventListener("input",this.filter.bind(this),!1),r.addEventListener("search",this.filter.bind(this),!1)}let e=0;for(const r of this.nfts){const a=document.createElement("li"),i=document.createElement("a");i.className="dropdown-item",i.href="#",i.dataset.index=e,i.id=`nft-${e}`;let n="";this.disabledAssetIds&&this.disabledAssetIds.includes(r.assetId)&&(i.className="dropdown-item disabled",n=' style="opacity: 0.5;"'),i.innerHTML=`<img src="${r.imageUrl}" ${n} class="nft-img"> ${r.name}`,r.handleImageError(i.querySelector(".nft-img")),i.addEventListener("click",this.clickListener,!1),a.append(i),this.ui.append(a),e++}}filter(e){const r=e.currentTarget.value;if(!r)return void this.ui.querySelectorAll(".dropdown-item").forEach((e=>{e.hidden=!1}));let a=r.split(" ");a=a.map((e=>e.trim().toLowerCase())),a=a.filter((e=>e));let i=0;for(const e of this.nfts){let r=!1;e:for(const i of a){if(e.name.toLowerCase().includes(i)||e.assetId==i){r=!0;break}if(e.metadata&&e.metadata.properties)for(const a in e.metadata.properties)if(a.toLowerCase().includes(i)||e.metadata.properties[a].toLowerCase().includes(i)){r=!0;break e}}this.ui.querySelector(`#nft-${i}`).hidden=!r,i++}}}},6998:(e,r,a)=>{"use strict";a.r(r),a.d(r,{BasePage:()=>i});class i{constructor(e,r,a,i){this.walletConnect=e,this.algodClient=a,this.algoIndexer=i,this.holdings=r}}},4714:e=>{"use strict";e.exports=JSON.parse('{"layers":[{"name":"room","folder_name":"00_room","z":0,"items":[{"properties":{"Room":"The Café","Place":"Indoor","Time":"Day"},"file":"the-cafe.png","weight":35},{"properties":{"Room":"The Café","Place":"Indoor","Time":"Night"},"file":"the-cafe-night.png","require":{"Room":"The Café"},"weight":35,"card":true,"card_name":"The Café (Night)","card_image_file":"the-cafe-night.png","card_unit_name":"CARDCAFN","card_quantity":222},{"properties":{"Room":"The Beach","Place":"Outdoor","Time":"Day"},"file":"the-beach.png","weight":18},{"properties":{"Room":"The Beach","Place":"Outdoor","Time":"Dawn"},"file":"the-beach-dawn.png","require":{"Room":"The Beach"},"card":true,"card_name":"The Beach (Dawn)","card_image_file":"the-beach-dawn.png","card_unit_name":"CARDBCDW","card_quantity":150},{"properties":{"Room":"The Beach","Place":"Outdoor","Time":"Night"},"file":"the-beach-night.png","require":{"Room":"The Beach"},"card":true,"card_name":"The Beach (Night)","card_image_file":"the-beach-night.png","card_unit_name":"CARDBCNG","card_quantity":88},{"properties":{"Room":"The Shed","Place":"Indoor","Time":"Night"},"file":"the-shed-night.png","weight":25,"require":{"Room":"The Shed"},"card":true,"card_name":"The Shed (Night)","card_image_file":"the-shed-night.png","card_unit_name":"CARDSHDN","card_quantity":111},{"properties":{"Room":"The Shed","Place":"Indoor","Time":"Day"},"file":"the-shed.png","weight":25},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Day"},"file":"the-roof.png","weight":15},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Dusk"},"file":"the-roof-dusk.png","require":{"Room":"The Roof"},"card":true,"card_name":"The Roof (Dusk)","card_image_file":"the-roof-dusk.png","card_unit_name":"CARDRFDK","card_quantity":111},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Rainbow"},"file":"the-roof-rainbow.png","require":{"Room":"The Roof"},"card":true,"card_name":"The Roof (Rainbow)","card_image_file":"the-roof-rainbow.png","card_unit_name":"CARDRFRW","card_quantity":66},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Snow"},"file":"the-roof-snow.png","foreground_file":"the-roof-snow-foreground.png","foreground_z":115,"require":{"Room":"The Roof"},"card":true,"card_name":"The Roof (Snow)","card_image_file":"the-roof-snow.png","card_unit_name":"CARDSNOW","card_quantity":44},{"properties":{"Room":"The Pool","Place":"Indoor","Time":"Day"},"file":"the-pool.png","weight":4,"foreground_file":"the-pool-foreground.png","foreground_z":25},{"properties":{"Room":"The Pool","Place":"Indoor","Time":"Night"},"file":"the-pool-night.png","require":{"Room":"The Pool"},"foreground_file":"the-pool-night-foreground.png","foreground_z":25,"card":true,"card_name":"The Pool (Night)","card_image_file":"the-pool-night.png","card_unit_name":"CARDPLNG","card_quantity":33}]},{"name":"decoration","folder_name":"01_decoration","z":10,"items":[{"properties":{"Decoration":"Looks Rare Light"},"file":"looks-rare.png","require":{"Place":"Indoor"},"card":true,"card_name":"Looks Rare","card_image_file":"looks-rare.png","card_unit_name":"CARDLKRR","card_quantity":11},{"properties":{"Decoration":"Hundred Neon"},"file":"neon-hundred.png","require":{"Place":"Indoor"},"card":true,"card_name":"Hundred Neon","card_image_file":"neon-hundred.png","card_unit_name":"CARDUDNN","card_quantity":99},{"properties":{"Decoration":"Lightning Neon"},"file":"neon-lightning.png","require":{"Place":"Indoor"},"card":true,"card_name":"Lightning Neon","card_image_file":"neon-lightning.png","card_unit_name":"CARDLGNN","card_quantity":66},{"properties":{"Decoration":"Clouds Neon"},"file":"neon-clouds.png","require":{"Place":"Indoor"},"card":true,"card_name":"Clouds Neon","card_image_file":"neon-clouds.png","card_unit_name":"CARDCLDN","card_quantity":111},{"properties":{"Decoration":"Heart Neon"},"file":"neon-heart.png","require":{"Place":"Indoor"},"card":true,"card_name":"Heart Neon","card_image_file":"neon-heart.png","card_unit_name":"CARDHRTN","card_quantity":99},{"properties":{"Decoration":"Diamond Neon"},"file":"neon-diamond.png","require":{"Place":"Indoor"},"card":true,"card_name":"Diamond Neon","card_image_file":"neon-diamond.png","card_unit_name":"CARDDMDN","card_quantity":33},{"properties":{"Decoration":"Rocket Neon"},"file":"neon-rocket.png","require":{"Place":"Indoor"},"card":true,"card_name":"Rocket Neon","card_image_file":"neon-rocket.png","card_unit_name":"CARDRKTN","card_quantity":88},{"properties":{"Decoration":"Framed YBG"},"file":"ybg.png","require":{"Place":"Indoor"},"card":true,"card_name":"Framed YBG","card_image_file":"ybg.png","card_unit_name":"CARDYBGF","card_quantity":99},{"properties":{"Decoration":"Kanagawa Wave"},"file":"kanagawa-wave.png","require":{"Place":"Indoor"},"card":true,"card_name":"Kanagawa Wave","card_image_file":"kanagawa-wave.png","card_unit_name":"CARDKNWW","card_quantity":66},{"properties":{"Decoration":"Screenprint"},"file":"screenprint.png","require":{"Place":"Indoor"},"card":true,"card_name":"Screenprint","card_image_file":"screenprint.png","card_unit_name":"CARDSCRP","card_quantity":66},{"properties":{"Decoration":"Rugs"},"file":"rugs.png","require":{"Place":"Indoor"},"card":true,"card_name":"Rugs","card_image_file":"rugs.png","card_unit_name":"CARDRUGS","card_quantity":66},{"properties":{"Decoration":"Ficus"},"file":"ficus.png","card":true,"card_name":"Ficus","card_image_file":"ficus.png","card_unit_name":"CARDFICS","card_quantity":333},{"properties":{"Decoration":"Cactus"},"file":"cactus.png","card":true,"card_name":"Cactus","card_image_file":"cactus.png","card_unit_name":"CARDCCTS","card_quantity":333},{"properties":{"Decoration":"Green Wall"},"file":"green-wall.png","require":{"Place":"Indoor"},"card":true,"card_name":"Green Wall","card_image_file":"green-wall.png","card_unit_name":"CARDGRNW","card_quantity":222,"collab":true},{"properties":{"Decoration":"MNGO Neon"},"file":"neon-mngo.png","require":{"Place":"Indoor"},"card":true,"card_name":"MNGO Neon","card_image_file":"neon-mngo.png","card_unit_name":"CARDMGNN","card_quantity":59,"collab":true},{"properties":{"Decoration":"Trok Painting"},"file":"trok-paint.png","require":{"Room":"The Café"},"card":true,"card_name":"Trok Painting","card_image_file":"trok-paint.png","card_unit_name":"CARDTKPT","card_quantity":14,"collab":true},{"properties":{"Decoration":"Crown Painting"},"file":"crown.png","require":{"Room":"The Café"},"card":true,"card_name":"Crown Painting","card_image_file":"crown.png","card_unit_name":"CARDCRWN","card_quantity":33,"collab":true},{"properties":{"Decoration":"CoffeeDAO Neon"},"file":"neon-bean.png","require":{"Place":"Indoor"},"card":true,"card_name":"CoffeeDAO Neon","card_image_file":"neon-bean.png","card_unit_name":"CARDCFDN","card_quantity":40,"collab":true},{"properties":{"Decoration":"Trinley Painting"},"file":"trinley.png","require":{"Place":"Indoor"},"card":true,"card_name":"Trinley Painting","card_image_file":"trinley.png","card_unit_name":"CARDTYPT","card_quantity":37,"collab":true},{"properties":{"Decoration":"None"},"file":null,"weight":1}]},{"name":"cup","folder_name":"02_cup","z":20,"items":[{"properties":{"Cup":"Basic"},"file":"basic.png","weight":100},{"properties":{"Cup":"Bath Club"},"file":"bath-club.png","weight":20},{"properties":{"Cup":"Green Dot"},"file":"dot-green.png","weight":15},{"properties":{"Cup":"Blue"},"file":"blue.png","weight":35},{"properties":{"Cup":"Red Lines"},"file":"lines-red.png","weight":25},{"properties":{"Cup":"Blue Lines"},"file":"lines-blue.png","weight":35},{"properties":{"Cup":"Eyes"},"file":"eyes.png","weight":20},{"properties":{"Cup":"Pink"},"file":"pink.png","weight":35},{"properties":{"Cup":"Heart"},"file":"heart.png","weight":15},{"properties":{"Cup":"Earth"},"file":"earth.png","weight":10},{"properties":{"Cup":"Moon"},"file":"moon.png","weight":5},{"properties":{"Cup":"Fire"},"file":"fire.png","card":true,"card_name":"Fire Mug","card_image_file":"fire-mug.png","card_unit_name":"CARDFIRM","card_quantity":66},{"properties":{"Cup":"YBG"},"file":"ybg.png","card":true,"card_name":"YBG Mug","card_image_file":"ybg-mug.png","card_unit_name":"CARDYNGM","card_quantity":66},{"properties":{"Cup":"Golden Crown"},"file":"golden-crown.png","card":true,"card_name":"Golden Crown Mug","card_image_file":"golden-crown-mug.png","card_unit_name":"CARDGLDC","card_quantity":12},{"properties":{"Cup":"Camo"},"file":"camo.png","card":true,"card_name":"Camo Mug","card_image_file":"camo-mug.png","card_unit_name":"CARDCMOM","card_quantity":44},{"properties":{"Cup":"Glass"},"file":"glass.png","card":true,"card_name":"Glass Mug","card_image_file":"glass-mug.png","card_unit_name":"CARDGLSM","card_quantity":11},{"properties":{"Cup":"Mummy"},"file":"mummy.png","card":true,"card_name":"Mummy Mug","card_image_file":"mummy-mug.png","card_unit_name":"CARDMMYM","card_quantity":33},{"properties":{"Cup":"Pixel Monster"},"file":"pixel-monster.png","card":true,"card_name":"Pixel Monster","card_image_file":"pixel-monster.png","card_unit_name":"CARDPXLM","card_quantity":66},{"properties":{"Cup":"Atomic"},"file":"atomic.png","card":true,"card_name":"Atomic Mug","card_image_file":"atomic-mug.png","card_unit_name":"CARDATCM","card_quantity":44},{"properties":{"Cup":"Silver"},"file":"silver.png","card":true,"card_name":"Silver Mug","card_image_file":"silver-mug.png","card_unit_name":"CARDSLVM","card_quantity":99},{"properties":{"Cup":"Copper"},"file":"copper.png","card":true,"card_name":"Copper Mug","card_image_file":"copper-mug.png","card_unit_name":"CARDCPRM","card_quantity":111},{"properties":{"Cup":"Purple"},"file":"purple.png","card":true,"card_name":"Purple Mug","card_image_file":"purple-mug.png","card_unit_name":"CARDPRLM","card_quantity":77},{"properties":{"Cup":"Espresso"},"require":{"Room":"The Café"},"file":"espresso.png","card":true,"card_name":"Espresso","card_image_file":"espresso-cup.png","card_unit_name":"CARDESPR","card_quantity":99},{"properties":{"Cup":"Al Goanna"},"file":"algoanna.png","card":true,"card_name":"Al Goanna Mug","card_image_file":"algoanna-mug.png","card_unit_name":"CARDAGNM","card_quantity":20,"collab":true},{"properties":{"Cup":"CGF"},"file":"cgf.png","card":true,"card_name":"CGF Mug","card_image_file":"cgf-mug.png","card_unit_name":"CARDCGFM","card_quantity":63,"collab":true},{"properties":{"Cup":"Gekofam"},"file":"geko.png","card":true,"card_name":"Gekofam Mug","card_image_file":"geko-mug.png","card_unit_name":"CARDGKOM","card_quantity":19,"collab":true},{"properties":{"Cup":"Yieldling"},"file":"yieldling.png","card":true,"card_name":"Yieldling Mug","card_image_file":"yieldling-mug.png","card_unit_name":"CARDYDGM","card_quantity":22,"collab":true},{"properties":{"Cup":"Young Brute Gang"},"file":"youngbrutegang.png","card":true,"card_name":"Young Brute Gang","card_image_file":"youngbrutegang-mug.png","card_unit_name":"CARDYBGM","card_quantity":10,"collab":true},{"properties":{"Cup":"Nalgos"},"file":"nalgos.png","card":true,"card_name":"Nalgos Mug","card_image_file":"nalgos-mug.png","card_unit_name":"CARDNLGM","card_quantity":34,"collab":true},{"properties":{"Cup":"SoulPod"},"file":"soulpod.png","card":true,"card_name":"SoulPod Mug","card_image_file":"soulpod-mug.png","card_unit_name":"CARDSPDM","card_quantity":27,"collab":true},{"properties":{"Cup":"SoulPod Moss"},"file":"soulpod-moss.png","card":true,"card_name":"SoulPod Moss Mug","card_image_file":"soulpod-moss-mug.png","card_unit_name":"CARDSPMM","card_quantity":28,"collab":true},{"properties":{"Cup":"Grocery Shop Game"},"file":"lemon-legion.png","card":true,"card_name":"Grocery Shop Game","card_image_file":"lemon-legion-mug.png","card_unit_name":"CARDGSGM","card_quantity":42,"collab":true}]},{"name":"body","folder_name":"04_body","z":40,"items":[{"properties":{"Body":"Pale"},"file":"pale.png","weight":9},{"properties":{"Body":"Tan"},"file":"tan.png","weight":9},{"properties":{"Body":"Pink"},"file":"pink.png","weight":3},{"properties":{"Body":"Dark"},"file":"dark.png","weight":9},{"properties":{"Body":"Atomic"},"file":"atomic.png","glow":"#C5FF0730","card":true,"card_name":"Atomic Body","card_image_file":"atomic-body.png","card_unit_name":"CARDATMB","card_quantity":76},{"properties":{"Body":"Diamond"},"file":"diamond.png","glow":"#C2FFFD30","card":true,"card_name":"Diamond Body","card_image_file":"diamond-body.png","card_unit_name":"CARDDMDB","card_quantity":24},{"properties":{"Body":"Gold"},"file":"gold.png","glow":"#FFDF1230","card":true,"card_name":"Gold Body","card_image_file":"gold-body.png","card_unit_name":"CARDGLDB","card_quantity":3},{"properties":{"Body":"Silver"},"file":"silver.png","glow":"#FFFFFF30","card":true,"card_name":"Silver Body","card_image_file":"silver-body.png","card_unit_name":"CARDSLVB","card_quantity":64},{"properties":{"Body":"Copper"},"file":"copper.png","glow":"#FF852E30","card":true,"card_name":"Copper Body","card_image_file":"copper-body.png","card_unit_name":"CARDCPRB","card_quantity":99},{"properties":{"Body":"Ice"},"file":"ice.png","card":true,"card_name":"Ice Body","card_image_file":"ice-body.png","card_unit_name":"CARDICEB","card_quantity":66},{"properties":{"Body":"Glass"},"file":"glass.png","card":true,"card_name":"Glass Body","card_image_file":"glass-body.png","card_unit_name":"CARDGLSB","card_quantity":11},{"properties":{"Body":"Acid"},"file":"acid.png","card":true,"card_name":"Acid Body","card_image_file":"acid-body.png","card_unit_name":"CARDACDB","card_quantity":11},{"properties":{"Body":"Camo"},"file":"camo.png","card":true,"card_name":"Camo Body","card_image_file":"camo-body.png","card_unit_name":"CARDCMOB","card_quantity":33}]},{"name":"mouth","folder_name":"05_mouth","z":50,"items":[{"properties":{"Mouth":"Basic"},"file":"basic.png","weight":1,"blend":"multiply"}]},{"name":"clothes","folder_name":"06_clothes","z":60,"items":[{"properties":{"Clothes":"Pink Tee"},"file":"tee-pink.png","weight":10},{"properties":{"Clothes":"Green Tee"},"file":"tee-green.png","weight":20},{"properties":{"Clothes":"Navy Blue Tee"},"file":"tee-navy-blue.png","weight":20},{"properties":{"Clothes":"Heart Tee"},"file":"tee-heart.png","require":{"Mini Cup":"Grey"},"weight":5},{"properties":{"Clothes":"Camo Tee"},"file":"tee-camo.png","weight":8},{"properties":{"Clothes":"Tie and Dye Tee"},"file":"tee-tie-and-dye.png","require":{"Mini Cup":"Grey"},"weight":6},{"properties":{"Clothes":"Tracksuit"},"file":"tracksuit.png","weight":10},{"properties":{"Clothes":"Arm Buoy"},"file":"arm-buoy.png","weight":5},{"properties":{"Clothes":"Baseball Shirt"},"file":"shirt-baseball.png","require":{"Mini Cup":"Grey"},"weight":20},{"properties":{"Clothes":"Black Jersey"},"file":"jersey-black.png","require":{"Mini Cup":"Grey"},"weight":10},{"properties":{"Clothes":"Green Jersey"},"file":"jersey-green.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Striped Tank"},"file":"tank-stripes.png","weight":10},{"properties":{"Clothes":"Bicolor Tank"},"file":"tank-bicolor.png","weight":10},{"properties":{"Clothes":"Christmas Jumper"},"file":"christmas-jumper.png","weight":15},{"properties":{"Clothes":"Orange Jumper"},"file":"jumper-orange.png","weight":12},{"properties":{"Clothes":"Scarf"},"file":"scarf.png","weight":10},{"properties":{"Clothes":"Green Shirt"},"file":"green-shirt.png","require":{"Mini Cup":"Grey"},"weight":20},{"properties":{"Clothes":"Lumberjack"},"file":"lumberjack.png","weight":18},{"properties":{"Clothes":"Blue Puffy"},"file":"puffy-blue.png","weight":10},{"properties":{"Clothes":"Orange and Cream Puffy"},"file":"puffy-cream-orange.png","weight":5},{"properties":{"Clothes":"Yellow and Green Puffy"},"file":"puffy-yellow-green.png","weight":5},{"properties":{"Clothes":"Blue Double Tee"},"file":"double-tee-blue.png","weight":20},{"properties":{"Clothes":"Lightning Double Tee"},"file":"double-tee-lightning.png","weight":10},{"properties":{"Clothes":"Long Sleeves Black"},"require":{"Mini Cup":"Basic"},"file":"tee-black-long-sleeves.png","weight":25},{"properties":{"Clothes":"Red Suspenders"},"file":"suspenders-red.png","require":{"Mini Cup":"Grey"},"weight":8},{"properties":{"Clothes":"Blue Suspenders"},"file":"suspenders-blue.png","require":{"Mini Cup":"Grey"},"weight":10},{"properties":{"Clothes":"White Shirt"},"file":"shirt-white.png","require":{"Mini Cup":"Grey"},"weight":25},{"properties":{"Clothes":"Blue Shirt"},"file":"shirt-blue.png","weight":15},{"properties":{"Clothes":"Denim Shirt"},"file":"shirt-denim.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Hawaii Shirt"},"file":"shirt-hawaii.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Pink Hoodie"},"file":"hoodie-pink.png","weight":20},{"properties":{"Clothes":"Yellow Hoodie"},"file":"hoodie-yellow.png","weight":10},{"properties":{"Clothes":"Striped Long Sleeves"},"file":"tee-stripes-long-sleeves.png","weight":18},{"properties":{"Clothes":"Striped Tee"},"file":"tee-striped.png","weight":15},{"properties":{"Clothes":"Rainbow Tee"},"file":"tee-rainbow.png","weight":5},{"properties":{"Clothes":"Blue Polo"},"require":{"Mini Cup":"Basic"},"file":"polo-blue.png","weight":20},{"properties":{"Clothes":"Purple Polo"},"require":{"Mini Cup":"Basic"},"file":"polo-purple.png","weight":15},{"properties":{"Clothes":"Nips"},"file":null,"weight":3}]},{"name":"beard","folder_name":"07_beard","z":70,"items":[{"properties":{"Beard":"Beard"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"beard.png","weight":10},{"properties":{"Beard":"Big Beard"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"beard-big.png","weight":20},{"properties":{"Beard":"Goatee"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"goatee.png","weight":10},{"properties":{"Beard":"Mustache"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"mustache.png","weight":5},{"properties":{"Beard":"Stubble"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"stubble.png","weight":10},{"properties":{"Beard":"None"},"file":null,"weight":100}]},{"name":"minicup","folder_name":"08_mini_cup","z":80,"items":[{"properties":{"Mini Cup":"Basic"},"file":"basic.png","weight":10},{"properties":{"Mini Cup":"Grey"},"file":"grey.png","weight":10},{"properties":{"Mini Cup":"Gold"},"file":"gold.png","card":true,"card_name":"Gold Minimug","card_image_file":"gold-minicup.png","card_unit_name":"CARDGLDM","card_quantity":3},{"properties":{"Mini Cup":"Atomic"},"file":"atomic.png","card":true,"card_name":"Atomic Minimug","card_image_file":"atomic-minicup.png","card_unit_name":"CARDATMM","card_quantity":33},{"properties":{"Mini Cup":"French Press Pot"},"file":"french-press-pot.png","card":true,"card_name":"French Press Pot","card_image_file":"french-press-pot.png","card_unit_name":"CARDFRCP","card_quantity":33},{"properties":{"Mini Cup":"Moka Pot"},"file":"moka-pot.png","card":true,"card_name":"Moka Pot","card_image_file":"moka-pot.png","card_unit_name":"CARDMKAP","card_quantity":88}]},{"name":"head","folder_name":"09_head","z":90,"items":[{"properties":{"Head":"Short Hair"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"hair-short.png","weight":10},{"properties":{"Head":"Quiff"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"quiff.png","weight":8},{"properties":{"Head":"Bun"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"bun.png","weight":3},{"properties":{"Head":"Long Hair"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"long.png","weight":3},{"properties":{"Head":"Parting"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"parting.png","weight":4},{"properties":{"Head":"Mullet"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"mullet.png","weight":3},{"properties":{"Head":"Fringe"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"fringe.png","weight":3},{"properties":{"Head":"Messy"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"messy.png","weight":4},{"properties":{"Head":"Hawk"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"hawk.png","weight":1},{"properties":{"Head":"Pompadour"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"pompadour.png","weight":2},{"properties":{"Head":"Swim Cap Blue"},"file":"swim-cap-blue.png","weight":6},{"properties":{"Head":"Swim Cap White"},"file":"swim-cap-white.png","weight":4},{"properties":{"Head":"Bucket Pink"},"file":"bucket-pink.png","dynamic_hair_color":true,"hair_mask_file":"bucket-pink-hair.png","weight":5},{"properties":{"Head":"Bucket Green"},"file":"bucket-green.png","dynamic_hair_color":true,"hair_mask_file":"bucket-green-hair.png","weight":4},{"properties":{"Head":"Red Cap"},"file":"cap-red.png","weight":5},{"properties":{"Head":"Green Cap"},"file":"cap-green.png","dynamic_hair_color":true,"hair_mask_file":"cap-green-hair.png","weight":3},{"properties":{"Head":"Backward Cap"},"file":"cap-backward.png","dynamic_hair_color":true,"hair_mask_file":"cap-backward-hair.png","weight":3},{"properties":{"Head":"Chapka"},"file":"chapka.png","require":{"Eyes":"Basic"},"weight":3},{"properties":{"Head":"Red Racing Helmet"},"file":"racing-helmet-red.png","require":{"Eyes":"Basic"},"weight":3},{"properties":{"Head":"White Racing Helmet"},"file":"racing-helmet-white.png","require":{"Eyes":"Basic"},"weight":2},{"properties":{"Head":"Yellow Beanie"},"file":"beanie-yellow.png","dynamic_hair_color":true,"hair_mask_file":"beanie-yellow-hair.png","weight":4},{"properties":{"Head":"Orange Beanie"},"file":"beanie-orange.png","weight":4},{"properties":{"Head":"Pompom Beanie"},"file":"beanie-pompom.png","dynamic_hair_color":true,"hair_mask_file":"beanie-pompom-hair.png","weight":2},{"properties":{"Head":"Red and Blue Headband"},"file":"headband-red-blue.png","dynamic_hair_color":true,"hair_mask_file":"headband-red-blue-hair.png","weight":4},{"properties":{"Head":"Orange and Green Headband"},"file":"headband-green-orange.png","dynamic_hair_color":true,"hair_mask_file":"headband-green-orange-hair.png","weight":4},{"properties":{"Head":"Shushi Chef"},"file":"shushi-chef.png","weight":2},{"properties":{"Head":"Army Cap"},"file":"cap-army.png","dynamic_hair_color":true,"hair_mask_file":"cap-army-hair.png","weight":2},{"properties":{"Head":"Crown"},"file":"crown.png","dynamic_hair_color":true,"hair_mask_file":"crown-hair.png","weight":1},{"properties":{"Head":"Sprout"},"file":"sprout.png","weight":3},{"properties":{"Head":"Red Bandana"},"file":"bandana-red.png","weight":2},{"properties":{"Head":"Blue Bandana"},"file":"bandana-blue.png","weight":4},{"properties":{"Head":"Straw Hat"},"file":"straw-hat.png","dynamic_hair_color":true,"hair_mask_file":"straw-hat-hair.png","weight":4},{"properties":{"Head":"Headphones"},"file":"headphones.png","require":{"Eyes":"Basic"},"z":105,"dynamic_hair_color":true,"hair_mask_file":"headphones-hair.png","weight":5},{"properties":{"Head":"Bald"},"file":null,"weight":6}]},{"name":"eyes","folder_name":"10_eyes","z":100,"items":[{"properties":{"Eyes":"Basic"},"file":"basic.png","weight":100,"z":85,"foreground_file":"basic-white.png","foreground_z":85,"blend":"multiply"},{"properties":{"Eyes":"3D Glasses"},"require":{"Head":"Short Hair"},"file":"3d-glasses.png","weight":16},{"properties":{"Eyes":"Glasses"},"file":"glasses.png","weight":20},{"properties":{"Eyes":"Scuba Goggles"},"file":"scuba-goggles.png","weight":16},{"properties":{"Eyes":"Ski Goggles"},"file":"ski-goggles.png","weight":5},{"properties":{"Eyes":"Purple Sunglasses"},"file":"sunglasses-purple.png","weight":6},{"properties":{"Eyes":"Orange Sunglasses"},"file":"sunglasses-orange.png","weight":8},{"properties":{"Eyes":"Sunglasses"},"file":"sunglasses.png","weight":6}]},{"name":"power","folder_name":"11_power","z":110,"items":[{"properties":{"Power":"Love"},"file":"love.png","foreground_file":"love-foreground.png","foreground_z":35,"card":true,"card_name":"Love","card_image_file":"love-power.png","card_unit_name":"CARDLOVP","card_quantity":109},{"properties":{"Power":"Lightnings"},"file":"lightnings.png","card":true,"card_name":"Lightnings","card_image_file":"lightnings-power.png","card_unit_name":"CARDLGNG","card_quantity":95},{"properties":{"Power":"Sparkles"},"file":"sparkles.png","card":true,"card_name":"Sparkles","card_image_file":"sparkles-power.png","card_unit_name":"CARDSPKP","card_quantity":66},{"properties":{"Power":"Bubblegum"},"file":"bubblegum.png","card":true,"card_name":"Bubblegum","card_image_file":"bubblegum-power.png","card_unit_name":"CARDBBGP","card_quantity":33},{"properties":{"Power":"Barfing Rainbow"},"file":"barfing-rainbow.png","card":true,"card_name":"Barfing Rainbow","card_image_file":"barfing-rainbow-power.png","card_unit_name":"CARDBRRP","card_quantity":63},{"properties":{"Power":"Barfing Atomic"},"file":"barfing-atomic.png","card":true,"card_name":"Barfing Atomic","card_image_file":"barfing-atomic-power.png","card_unit_name":"CARDBRAP","card_quantity":44},{"properties":{"Power":"Cloudy"},"file":"cloudy.png","foreground_file":"cloudy-foreground.png","foreground_z":35,"card":true,"card_name":"Cloudy","card_image_file":"cloudy-power.png","card_unit_name":"CARDCLDP","card_quantity":142},{"properties":{"Power":"Fire"},"file":"fire.png","card":true,"card_name":"Fire","card_image_file":"fire-power.png","card_unit_name":"CARDFIRP","card_quantity":130},{"properties":{"Power":"Mingos"},"file":"mingos.png","card":true,"card_name":"Mingos","card_image_file":"mingos-power.png","card_unit_name":"CARDMNGP","card_quantity":50},{"properties":{"Power":"Halo"},"z":35,"file":"halo.png","card":true,"card_name":"Halo","card_image_file":"halo-power.png","card_unit_name":"CARDHLOP","card_quantity":56},{"properties":{"Power":"Laser Eyes"},"file":"laser.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Laser Eyes","card_image_file":"laser-power.png","card_unit_name":"CARDLSRP","card_quantity":40},{"properties":{"Power":"Green Laser Eyes"},"file":"green-laser.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Green Laser Eyes","card_image_file":"green-laser-power.png","card_unit_name":"CARDGLRP","card_quantity":66},{"properties":{"Power":"Devil Eyes"},"file":"devil-eyes.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Devil Eyes","card_image_file":"devil-power.png","card_unit_name":"CARDDVLP","card_quantity":66},{"properties":{"Power":"Blue Rays"},"file":"blue-rays.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Blue Rays","card_image_file":"blue-rays.png","card_unit_name":"CARDBLRP","card_quantity":88},{"properties":{"Power":"Sun Eyes"},"file":"sun-eyes.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Sun Eyes","card_image_file":"sun-eyes-power.png","card_unit_name":"CARDSUNP","card_quantity":52},{"properties":{"Power":"Whales"},"file":"whales.png","foreground_file":"whales-foreground.png","foreground_z":35,"card":true,"card_name":"Whales","card_image_file":"whales-power.png","card_unit_name":"CARDWHLP","card_quantity":44},{"properties":{"Power":"Nessie"},"file":"nessie.png","foreground_file":"nessie-foreground.png","foreground_z":35,"card":true,"card_name":"Nessie","card_image_file":"nessie-power.png","card_unit_name":"CARDNSSP","card_quantity":11},{"properties":{"Power":"Octopus"},"file":"octopus.png","card":true,"card_name":"Octopus","card_image_file":"octopus-power.png","card_unit_name":"CARDOCTP","card_quantity":44},{"properties":{"Power":"Paper Boat"},"file":"paper-boat.png","foreground_file":"paper-boat-foreground.png","foreground_z":35,"card":true,"card_name":"Paper Boat","card_image_file":"paper-boat-power.png","card_unit_name":"CARDPPBP","card_quantity":17},{"properties":{"Power":"Duck"},"file":"duck.png","foreground_file":"duck.png","foreground_z":35,"card":true,"card_name":"Duck","card_image_file":"duck-power.png","card_unit_name":"CARDDCKP","card_quantity":66},{"properties":{"Power":"Rain"},"file":"rain.png","card":true,"card_name":"Rain","card_image_file":"rain-power.png","card_unit_name":"CARDRANP","card_quantity":23},{"properties":{"Power":"Alien Coffee"},"file":"alien-coffee.png","z":25,"card":true,"card_name":"Alien Coffee","card_image_file":"alien-coffee.png","card_unit_name":"CARDALNC","card_quantity":44},{"properties":{"Power":"Lava Coffee"},"file":"lava-coffee.png","z":25,"card":true,"card_name":"Lava Coffee","card_image_file":"lava-coffee.png","card_unit_name":"CARDLVAC","card_quantity":55},{"properties":{"Power":"Atomic Coffee"},"file":"atomic-coffee.png","z":25,"card":true,"card_name":"Atomic Coffee","card_image_file":"atomic-coffee.png","card_unit_name":"CARDATMC","card_quantity":66},{"properties":{"Power":"Golden Coffee"},"file":"golden-coffee.png","z":25,"card":true,"card_name":"Golden Coffee","card_image_file":"golden-coffee.png","card_unit_name":"CARDGOLC","card_quantity":11},{"properties":{"Power":"AOWL"},"file":"algotheowl.png","card":true,"card_name":"AOWL","card_image_file":"algotheowl-power.png","card_unit_name":"CARDOWLP","card_quantity":51,"collab":true},{"properties":{"Power":"None"},"file":null,"weight":1}]}],"hairColors":[{"name":"Blonde","min":"#E3BB3AFF","max":"#EAD07AFF","weight":10},{"name":"Brown","min":"#583519FF","max":"#996431FF","weight":40},{"name":"Dark","min":"#191411FF","max":"#5E432FFF","weight":40},{"name":"Red","min":"#BC4A0DFF","max":"#D66426FF","weight":8},{"name":"Grey","min":"#7A7660FF","max":"#B1AFA0FF","weight":13}]}')}}]);