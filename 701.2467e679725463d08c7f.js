(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[701,998],{4853:()=>{},7644:(e,r,i)=>{"use strict";i.d(r,{i:()=>m});var a=i(4853);const t=48,n=48;function o(e,r,i){const a=4*(r*i.width+e);return[i.data[a],i.data[a+1],i.data[a+2],i.data[a+3]]}function p(e,r,i,a){const t=4*(r*a.width+e);a.data[t]=i[0],a.data[t+1]=i[1],a.data[t+2]=i[2],a.data[t+3]=i[3]}function l(e){const r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16),t=parseInt(e.slice(7,9),16);return isNaN(t)?[r,i,a,255]:[r,i,a,t]}async function s(e){if(!e.length)return;const r=await u(e[0]),i=r.width,a=r.height,t=c(i,a).getContext("2d");t.imageSmoothingEnabled=!1;for(const r of e){const e=await u(r);t.drawImage(e,0,0,i,a)}const n=c(i,a),l=n.getContext("2d"),s=t.getImageData(0,0,i,a);let g,d=l.getImageData(0,0,i,a);e:for(let e=0;e<i;e++)for(let r=a-1;r>=0;r--){if(r<g)break e;const i=o(e,r,s);if(i[3]>0){p(e,r+1,[i[0],i[1],i[2],.2*i[3]],d);const a=o(e,r-1,s);p(e,r+2,[a[0],a[1],a[2],.08*a[3]],d),g||(g=r);continue e}}return l.putImageData(d,0,0),n}async function g(e,r,i){const a=await u(e),t=a.width,n=a.height,l=c(t,n),s=l.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(a,0,0,t,n);const g=c(t,n),d=g.getContext("2d");d.imageSmoothingEnabled=!1;const m=c(t,n).getContext("2d");m.imageSmoothingEnabled=!1;for(const e of i){const r=await u(e);m.drawImage(r,0,0,t,n)}const h=s.getImageData(0,0,t,n),_=d.getImageData(0,0,t,n),f=m.getImageData(0,0,t,n);for(let e=1;e<n-1;e++)for(let i=1;i<t-1;i++){const a=o(i,e,h),t=o(i,e,f),n=o(i-1,e,h),l=o(i+1,e,h),s=o(i,e-1,h),g=o(i,e+1,h);0===n[3]&&a[3]>0&&t[3]<255&&p(i-1,e,r,_),0===l[3]&&a[3]>0&&t[3]<255&&p(i+1,e,r,_),0===s[3]&&a[3]>0&&t[3]<255&&p(i,e-1,r,_),0===g[3]&&a[3]>0&&t[3]<255&&p(i,e+1,r,_)}return d.putImageData(_,0,0),s.drawImage(g,0,0,t,n),l}function d(e,r,i){const a=e.width,t=e.height,n=c(a,t),s=n.getContext("2d");s.imageSmoothingEnabled=!1,s.drawImage(e,0,0,a,t);const g=s.getImageData(0,0,a,t);let d=255,u=0;for(let e=1;e<t-1;e++)for(let r=1;r<a-1;r++){const i=o(r,e,g);i[3]>0&&(d=Math.min(d,i[0]),u=Math.max(u,i[0]))}const m=l(r),h=l(i);let _=[];for(let e=1;e<t-1;e++)for(let r=1;r<a-1;r++){const i=o(r,e,g);if(i[3]>0){const a=(i[0]-u)/(u-d);_[0]=h[0]-(m[0]-h[0])*a,_[1]=h[1]-(m[1]-h[1])*a,_[2]=h[2]-(m[2]-h[2])*a,_[3]=i[3],p(r,e,_,g)}}return s.putImageData(g,0,0),n}function c(e,r){if("object"==typeof window){const i=document.createElement("canvas");return i.width=e,i.height=r,i}return a.createCanvas(e,r)}async function u(e){return"object"==typeof window?new Promise((r=>{const i=new Image;i.addEventListener("load",(()=>{r(i)})),i.src=e})):a.loadImage(e)}async function m(e,r,i,a=!1){const o=function(e,r){let i=[],a=0,t=!1;for(const n of r.layers)for(const o of n.items){const p=Object.keys(o.properties).length;let l=0;for(const r in e)o.properties[r]&&o.properties[r]===e[r]&&l++;if(p===l){a+=l;const p=Object.assign({},o);if(p.layer=n.name,p.layer_folder_name=n.folder_name,p.z||(p.z=n.z),p.dynamic_hair_color)for(const i in e)if("Hair Color"===i){for(const a of r.hairColors)if(a.name===e[i]){p.minHairColor=a.min,p.maxHairColor=a.max,t=!0;break}break}i.push(p)}}return a+=t?1:0,Object.keys(e).length!==a&&(console.log("Error with at least one property!"),console.log(e)),i}(e,r);let p;a&&(p=[]);const m=c(t,n),h=m.getContext("2d");h.imageSmoothingEnabled=!1;let _=[],f=[],w=[];for(const e of o){const r=`${i}/${e.layer_folder_name}/${e.file}`,a={layer:e.layer,filepath:r,z:e.z,blend:e.blend};if(e.glow&&(a.glow=e.glow),e.file&&_.push(a),e.foreground_file&&e.foreground_z){const r=`${i}/${e.layer_folder_name}/${e.foreground_file}`;_.push({layer:e.layer,filepath:r,z:e.foreground_z})}if(e.dynamic_hair_color&&e.hair_mask_file){const r=`${i}/${e.layer_folder_name}/${e.hair_mask_file}`;_.push({layer:e.layer,filepath:r,z:e.z,dynamicHairColor:e.dynamic_hair_color,minHairColor:e.minHairColor,maxHairColor:e.maxHairColor})}else e.dynamic_hair_color&&console.log(`Missing hair mask for ${e.properties}`);e.file&&["body","clothes"].includes(e.layer)&&f.push(r),e.file&&["head","clothes"].includes(e.layer)&&w.push(r)}for(let e=_.length-1;e>=0;e--){const r=_[e];["body","clothes"].includes(r.layer)&&_.splice(e,0,{filepath:"reflection",z:r.z+1})}_.sort(((e,r)=>e.z-r.z));for(const e of _)if(a&&h.clearRect(0,0,t,n),e.blend?h.globalCompositeOperation=e.blend:h.globalCompositeOperation="source-over","reflection"===e.filepath){const e=await s(f);h.drawImage(e,0,0,t,n),a&&p.push({name:"reflection",imageData:h.getImageData(0,0,t,n)})}else if(e.glow){const r=l(e.glow),i=await g(e.filepath,r,w);h.drawImage(i,0,0,t,n),a&&p.push({name:"glow",imageData:h.getImageData(0,0,t,n)})}else{let r=await u(e.filepath);e.dynamicHairColor&&(r=d(r,e.minHairColor,e.maxHairColor)),h.drawImage(r,0,0,t,n),a&&p.push({name:e.layer,imageData:h.getImageData(0,0,t,n)})}return a?p:m}},2871:(e,r,i)=>{"use strict";i.d(r,{Z:()=>a});class a{constructor(e,r){this.nfts=e,this.clickListener=r,this.ui=document.createElement("ul"),this.ui.className="dropdown-menu",this.displayNfts()}displayNfts(){if(0===this.nfts.length){const e=document.createElement("li");this.ui.append(e),e.innerHTML='<a class="dropdown-item disabled">No assets</a>'}else{const e=document.createElement("div");e.className="mb-2 ps-3 pe-3 pt-1";const r=document.createElement("input");r.type="text",r.className="form-control",r.placeholder="Name, asset ID or trait",e.append(r),this.ui.append(e),r.addEventListener("input",this.filter.bind(this),!1)}let e=0;for(const r of this.nfts){const i=document.createElement("li"),a=document.createElement("a");a.className="dropdown-item",a.href="#",a.dataset.index=e,a.id=`nft-${e}`,a.innerHTML=`<img src="${r.imageUrl}"> ${r.name}`,a.addEventListener("click",this.clickListener,!1),i.append(a),this.ui.append(i),e++}}filter(e){const r=e.currentTarget.value;if(!r)return;let i=r.split(" ");i=i.map((e=>e.trim().toLowerCase())),i=i.filter((e=>e));let a=0;for(const e of this.nfts){let r=!1;e:for(const a of i){if(e.name.toLowerCase().includes(a)||e.assetId==a){r=!0;break}if(e.metadata&&e.metadata.properties)for(const i in e.metadata.properties)if(i.toLowerCase().includes(a)||e.metadata.properties[i].toLowerCase().includes(a)){r=!0;break e}}this.ui.querySelector(`#nft-${a}`).hidden=!r,a++}console.log(i)}}},6998:(e,r,i)=>{"use strict";i.r(r),i.d(r,{BasePage:()=>a});class a{constructor(e,r,i,a){this.walletConnect=e,this.algodClient=i,this.algoIndexer=a,this.holdings=r}}},4714:e=>{"use strict";e.exports=JSON.parse('{"layers":[{"name":"room","folder_name":"00_room","z":0,"items":[{"properties":{"Room":"The Café","Place":"Indoor","Time":"Day"},"file":"the-cafe.png","weight":35},{"properties":{"Room":"The Beach","Place":"Outdoor","Time":"Day"},"file":"the-beach.png","weight":18},{"properties":{"Room":"The Beach","Place":"Outdoor","Time":"Dawn"},"file":"the-beach-dawn.png","require":{"Room":"The Beach"},"card":true,"card_name":"The Beach (Dawn)","card_image_file":"the-beach-dawn.png","card_unit_name":"CARDBCDW","card_quantity":150},{"properties":{"Room":"The Shed","Place":"Indoor","Time":"Day"},"file":"the-shed.png","weight":25},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Day"},"file":"the-roof.png","weight":15},{"properties":{"Room":"The Roof","Place":"Outdoor","Time":"Dusk"},"file":"the-roof-dusk.png","require":{"Room":"The Roof"},"card":true,"card_name":"The Roof (Dusk)","card_image_file":"the-roof-dusk.png","card_unit_name":"CARDRFDK","card_quantity":100},{"properties":{"Room":"The Pool","Place":"Indoor","Time":"Day"},"file":"the-pool.png","weight":4,"foreground_file":"the-pool-foreground.png","foreground_z":25},{"properties":{"Room":"The Pool","Place":"Indoor","Time":"Night"},"file":"the-pool-night.png","require":{"Room":"The Pool"},"foreground_file":"the-pool-night-foreground.png","foreground_z":25,"card":true,"card_name":"The Pool (Night)","card_image_file":"the-pool-night.png","card_unit_name":"CARDPLNG","card_quantity":33}]},{"name":"decoration","folder_name":"01_decoration","z":10,"items":[{"properties":{"Decoration":"Looks Rare Light"},"file":"looks-rare.png","require":{"Place":"Indoor"},"card":true,"card_name":"Looks Rare","card_image_file":"looks-rare.png","card_unit_name":"CARDLKRR","card_quantity":33},{"properties":{"Decoration":"Hundred Points Neon"},"file":"neon-hundred.png","require":{"Place":"Indoor"},"card":true,"card_name":"Hundred Neon","card_image_file":"neon-hundred.png","card_unit_name":"CARDUDNN","card_quantity":99},{"properties":{"Decoration":"Lightning Neon"},"file":"neon-lightning.png","require":{"Place":"Indoor"},"card":true,"card_name":"Lightning Neon","card_image_file":"neon-lightning.png","card_unit_name":"CARDLGNN","card_quantity":66},{"properties":{"Decoration":"YBG"},"file":"ybg.png","require":{"Place":"Indoor"},"card":true,"card_name":"YBG","card_image_file":"ybg.png","card_unit_name":"CARDYBGF","card_quantity":99},{"properties":{"Decoration":"Rugs"},"file":"rugs.png","require":{"Place":"Indoor"},"card":true,"card_name":"Rugs","card_image_file":"rugs.png","card_unit_name":"CARDRUGS","card_quantity":66},{"properties":{"Decoration":"Ficus"},"file":"ficus.png","card":true,"card_name":"Ficus","card_image_file":"ficus.png","card_unit_name":"CARDFICS","card_quantity":333},{"properties":{"Decoration":"Cactus"},"file":"cactus.png","card":true,"card_name":"Cactus","card_image_file":"cactus.png","card_unit_name":"CARDCCTS","card_quantity":333},{"properties":{"Decoration":"None"},"file":null,"weight":1}]},{"name":"cup","folder_name":"02_cup","z":20,"items":[{"properties":{"Cup":"Basic"},"file":"basic.png","weight":100},{"properties":{"Cup":"Bath Club"},"file":"bath-club.png","weight":20},{"properties":{"Cup":"Green Dot"},"file":"dot-green.png","weight":15},{"properties":{"Cup":"Blue"},"file":"blue.png","weight":35},{"properties":{"Cup":"Red Lines"},"file":"lines-red.png","weight":25},{"properties":{"Cup":"Blue Lines"},"file":"lines-blue.png","weight":35},{"properties":{"Cup":"Eyes"},"file":"eyes.png","weight":20},{"properties":{"Cup":"Pink"},"file":"pink.png","weight":35},{"properties":{"Cup":"Heart"},"file":"heart.png","weight":15},{"properties":{"Cup":"Earth"},"file":"earth.png","weight":10},{"properties":{"Cup":"Moon"},"file":"moon.png","weight":5},{"properties":{"Cup":"Fire"},"file":"fire.png","card":true,"card_name":"Fire Mug","card_image_file":"fire-mug.png","card_unit_name":"CARDFIRM","card_quantity":66},{"properties":{"Cup":"YBG"},"file":"ybg.png","card":true,"card_name":"YBG Mug","card_image_file":"ybg-mug.png","card_unit_name":"CARDYNGM","card_quantity":33},{"properties":{"Cup":"Golden Crown"},"file":"golden-crown.png","card":true,"card_name":"Golden Crown Mug","card_image_file":"golden-crown-mug.png","card_unit_name":"CARDGLDC","card_quantity":12},{"properties":{"Cup":"Camo"},"file":"camo.png","card":true,"card_name":"Camo Mug","card_image_file":"camo-mug.png","card_unit_name":"CARDCMOM","card_quantity":33},{"properties":{"Cup":"Glass"},"file":"glass.png","card":true,"card_name":"Glass Mug","card_image_file":"glass-mug.png","card_unit_name":"CARDGLSM","card_quantity":10},{"properties":{"Cup":"Mummy"},"file":"mummy.png","card":true,"card_name":"Mummy Mug","card_image_file":"mummy-mug.png","card_unit_name":"CARDMMYM","card_quantity":33},{"properties":{"Cup":"Espresso"},"require":{"Room":"The Café"},"file":"espresso.png","card":true,"card_name":"Espresso","card_image_file":"espresso-cup.png","card_unit_name":"CARDESPR","card_quantity":33}]},{"name":"body","folder_name":"04_body","z":40,"items":[{"properties":{"Body":"Pale"},"file":"pale.png","weight":9},{"properties":{"Body":"Tan"},"file":"tan.png","weight":11},{"properties":{"Body":"Pink"},"file":"pink.png","weight":3},{"properties":{"Body":"Dark"},"file":"dark.png","weight":9},{"properties":{"Body":"Atomic"},"file":"atomic.png","glow":"#C5FF0730","card":true,"card_name":"Atomic Body","card_image_file":"atomic-body.png","card_unit_name":"CARDATMB","card_quantity":76},{"properties":{"Body":"Diamond"},"file":"diamond.png","glow":"#C2FFFD30","card":true,"card_name":"Diamond Body","card_image_file":"diamond-body.png","card_unit_name":"CARDDMDB","card_quantity":24},{"properties":{"Body":"Gold"},"file":"gold.png","glow":"#FFDF1230","card":true,"card_name":"Gold Body","card_image_file":"gold-body.png","card_unit_name":"CARDGLDB","card_quantity":3},{"properties":{"Body":"Silver"},"file":"silver.png","glow":"#FFFFFF30","card":true,"card_name":"Silver Body","card_image_file":"silver-body.png","card_unit_name":"CARDSLVB","card_quantity":64},{"properties":{"Body":"Copper"},"file":"copper.png","glow":"#FF852E30","card":true,"card_name":"Copper Body","card_image_file":"copper-body.png","card_unit_name":"CARDCPRB","card_quantity":66},{"properties":{"Body":"Ice"},"file":"ice.png","card":true,"card_name":"Ice Body","card_image_file":"ice-body.png","card_unit_name":"CARDICEB","card_quantity":66},{"properties":{"Body":"Glass"},"file":"glass.png","card":true,"card_name":"Glass Body","card_image_file":"glass-body.png","card_unit_name":"CARDGLSB","card_quantity":66}]},{"name":"mouth","folder_name":"05_mouth","z":50,"items":[{"properties":{"Mouth":"Basic"},"file":"basic.png","weight":1,"blend":"multiply"}]},{"name":"clothes","folder_name":"06_clothes","z":60,"items":[{"properties":{"Clothes":"Pink Tee"},"file":"tee-pink.png","weight":10},{"properties":{"Clothes":"Green Tee"},"file":"tee-green.png","weight":20},{"properties":{"Clothes":"Navy Blue Tee"},"file":"tee-navy-blue.png","weight":20},{"properties":{"Clothes":"Heart Tee"},"file":"tee-heart.png","require":{"Mini Cup":"Grey"},"weight":5},{"properties":{"Clothes":"Camo Tee"},"file":"tee-camo.png","weight":5},{"properties":{"Clothes":"Tie and Dye Tee"},"file":"tee-tie-and-dye.png","require":{"Mini Cup":"Grey"},"weight":6},{"properties":{"Clothes":"Tracksuit"},"file":"tracksuit.png","weight":10},{"properties":{"Clothes":"Arm Buoy"},"file":"arm-buoy.png","weight":5},{"properties":{"Clothes":"Baseball Shirt"},"file":"shirt-baseball.png","require":{"Mini Cup":"Grey"},"weight":20},{"properties":{"Clothes":"Black Jersey"},"file":"jersey-black.png","require":{"Mini Cup":"Grey"},"weight":10},{"properties":{"Clothes":"Green Jersey"},"file":"jersey-green.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Striped Tank"},"file":"tank-stripes.png","weight":10},{"properties":{"Clothes":"Bicolor Tank"},"file":"tank-bicolor.png","weight":10},{"properties":{"Clothes":"Christmas Jumper"},"file":"christmas-jumper.png","weight":15},{"properties":{"Clothes":"Orange Jumper"},"file":"jumper-orange.png","weight":20},{"properties":{"Clothes":"Scarf"},"file":"scarf.png","weight":10},{"properties":{"Clothes":"Green Shirt"},"file":"green-shirt.png","require":{"Mini Cup":"Grey"},"weight":20},{"properties":{"Clothes":"Lumberjack"},"file":"lumberjack.png","weight":10},{"properties":{"Clothes":"Blue Puffy"},"file":"puffy-blue.png","weight":10},{"properties":{"Clothes":"Orange and Cream Puffy"},"file":"puffy-cream-orange.png","weight":5},{"properties":{"Clothes":"Yellow and Green Puffy"},"file":"puffy-yellow-green.png","weight":5},{"properties":{"Clothes":"Blue Double Tee"},"file":"double-tee-blue.png","weight":20},{"properties":{"Clothes":"Lightning Double Tee"},"file":"double-tee-lightning.png","weight":10},{"properties":{"Clothes":"Long Sleeves Black"},"require":{"Mini Cup":"Basic"},"file":"tee-black-long-sleeves.png","weight":25},{"properties":{"Clothes":"Red Suspenders"},"file":"suspenders-red.png","require":{"Mini Cup":"Grey"},"weight":8},{"properties":{"Clothes":"Blue Suspenders"},"file":"suspenders-blue.png","require":{"Mini Cup":"Grey"},"weight":10},{"properties":{"Clothes":"White Shirt"},"file":"shirt-white.png","require":{"Mini Cup":"Grey"},"weight":25},{"properties":{"Clothes":"Blue Shirt"},"file":"shirt-blue.png","weight":20},{"properties":{"Clothes":"Denim Shirt"},"file":"shirt-denim.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Hawaii Shirt"},"file":"shirt-hawaii.png","require":{"Mini Cup":"Grey"},"weight":15},{"properties":{"Clothes":"Pink Hoodie"},"file":"hoodie-pink.png","weight":20},{"properties":{"Clothes":"Yellow Hoodie"},"file":"hoodie-yellow.png","weight":10},{"properties":{"Clothes":"Striped Long Sleeves"},"file":"tee-stripes-long-sleeves.png","weight":18},{"properties":{"Clothes":"Striped Tee"},"file":"tee-striped.png","weight":15},{"properties":{"Clothes":"Rainbow Tee"},"file":"tee-rainbow.png","weight":5},{"properties":{"Clothes":"Blue Polo"},"file":"polo-blue.png","weight":20},{"properties":{"Clothes":"Purple Polo"},"file":"polo-purple.png","weight":15},{"properties":{"Clothes":"Nips"},"file":null,"weight":3}]},{"name":"beard","folder_name":"07_beard","z":70,"items":[{"properties":{"Beard":"Beard"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"beard.png","weight":10},{"properties":{"Beard":"Big Beard"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"beard-big.png","weight":20},{"properties":{"Beard":"Goatee"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"goatee.png","weight":5},{"properties":{"Beard":"Mustache"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"mustache.png","weight":15},{"properties":{"Beard":"Stubble"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"stubble.png","weight":10},{"properties":{"Beard":"None"},"file":null,"weight":100}]},{"name":"minicup","folder_name":"08_mini_cup","z":80,"items":[{"properties":{"Mini Cup":"Basic"},"file":"basic.png","weight":1},{"properties":{"Mini Cup":"Grey"},"file":"grey.png","weight":1},{"properties":{"Mini Cup":"Gold"},"file":"gold.png","card":true,"card_name":"Gold Minimug","card_image_file":"gold-minicup.png","card_unit_name":"CARDGLDM","card_quantity":3},{"properties":{"Mini Cup":"Atomic"},"file":"atomic.png","card":true,"card_name":"Atomic Minimug","card_image_file":"atomic-minicup.png","card_unit_name":"CARDATMM","card_quantity":33}]},{"name":"head","folder_name":"09_head","z":90,"items":[{"properties":{"Head":"Short Hair"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"hair-short.png","weight":10},{"properties":{"Head":"Quiff"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"quiff.png","weight":8},{"properties":{"Head":"Bun"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"bun.png","weight":3},{"properties":{"Head":"Long Hair"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"long.png","weight":3},{"properties":{"Head":"Parting"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"parting.png","weight":4},{"properties":{"Head":"Mullet"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"mullet.png","weight":3},{"properties":{"Head":"Fringe"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"fringe.png","weight":3},{"properties":{"Head":"Messy"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"messy.png","weight":4},{"properties":{"Head":"Hawk"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"hawk.png","weight":1},{"properties":{"Head":"Pompadour"},"file":null,"dynamic_hair_color":true,"hair_mask_file":"pompadour.png","weight":2},{"properties":{"Head":"Swim Cap Blue"},"file":"swim-cap-blue.png","weight":6},{"properties":{"Head":"Swim Cap White"},"file":"swim-cap-white.png","weight":3},{"properties":{"Head":"Bucket Pink"},"file":"bucket-pink.png","dynamic_hair_color":true,"hair_mask_file":"bucket-pink-hair.png","weight":5},{"properties":{"Head":"Bucket Green"},"file":"bucket-green.png","dynamic_hair_color":true,"hair_mask_file":"bucket-green-hair.png","weight":4},{"properties":{"Head":"Red Cap"},"file":"cap-red.png","weight":5},{"properties":{"Head":"Green Cap"},"file":"cap-green.png","dynamic_hair_color":true,"hair_mask_file":"cap-green-hair.png","weight":3},{"properties":{"Head":"Backward Cap"},"file":"cap-backward.png","dynamic_hair_color":true,"hair_mask_file":"cap-backward-hair.png","weight":3},{"properties":{"Head":"Chapka"},"file":"chapka.png","require":{"Eyes":"Basic"},"weight":3},{"properties":{"Head":"Red Racing Helmet"},"file":"racing-helmet-red.png","require":{"Eyes":"Basic"},"weight":1},{"properties":{"Head":"White Racing Helmet"},"file":"racing-helmet-white.png","require":{"Eyes":"Basic"},"weight":1},{"properties":{"Head":"Yellow Beanie"},"file":"beanie-yellow.png","dynamic_hair_color":true,"hair_mask_file":"beanie-yellow-hair.png","weight":4},{"properties":{"Head":"Orange Beanie"},"file":"beanie-orange.png","weight":4},{"properties":{"Head":"Pompom Beanie"},"file":"beanie-pompom.png","dynamic_hair_color":true,"hair_mask_file":"beanie-pompom-hair.png","weight":2},{"properties":{"Head":"Red and Blue Headband"},"file":"headband-red-blue.png","dynamic_hair_color":true,"hair_mask_file":"headband-red-blue-hair.png","weight":4},{"properties":{"Head":"Orange and Green Headband"},"file":"headband-green-orange.png","dynamic_hair_color":true,"hair_mask_file":"headband-green-orange-hair.png","weight":4},{"properties":{"Head":"Shushi Chef"},"file":"shushi-chef.png","weight":2},{"properties":{"Head":"Army Cap"},"file":"cap-army.png","dynamic_hair_color":true,"hair_mask_file":"cap-army-hair.png","weight":2},{"properties":{"Head":"Crown"},"file":"crown.png","dynamic_hair_color":true,"hair_mask_file":"crown-hair.png","weight":1},{"properties":{"Head":"Sprout"},"file":"sprout.png","weight":3},{"properties":{"Head":"Red Bandana"},"file":"bandana-red.png","weight":2},{"properties":{"Head":"Blue Bandana"},"file":"bandana-blue.png","weight":4},{"properties":{"Head":"Straw Hat"},"file":"straw-hat.png","dynamic_hair_color":true,"hair_mask_file":"straw-hat-hair.png","weight":4},{"properties":{"Head":"Headphones"},"file":"headphones.png","require":{"Eyes":"Basic"},"z":105,"dynamic_hair_color":true,"hair_mask_file":"headphones-hair.png","weight":5},{"properties":{"Head":"Bald"},"file":null,"weight":6}]},{"name":"eyes","folder_name":"10_eyes","z":100,"items":[{"properties":{"Eyes":"Basic"},"file":"basic.png","weight":100,"z":85,"foreground_file":"basic-white.png","foreground_z":85,"blend":"multiply"},{"properties":{"Eyes":"3D Glasses"},"require":{"Head":"Short Hair"},"file":"3d-glasses.png","weight":16},{"properties":{"Eyes":"Glasses"},"file":"glasses.png","weight":16},{"properties":{"Eyes":"Scuba Goggles"},"file":"scuba-goggles.png","weight":20},{"properties":{"Eyes":"Ski Goggles"},"file":"ski-goggles.png","weight":8},{"properties":{"Eyes":"Purple Sunglasses"},"file":"sunglasses-purple.png","weight":2},{"properties":{"Eyes":"Orange Sunglasses"},"file":"sunglasses-orange.png","weight":3},{"properties":{"Eyes":"Sunglasses"},"file":"sunglasses.png","weight":6}]},{"name":"power","folder_name":"11_power","z":110,"items":[{"properties":{"Power":"Love"},"file":"love.png","foreground_file":"love-foreground.png","foreground_z":35,"card":true,"card_name":"Love Power","card_image_file":"love-power.png","card_unit_name":"CARDLOVP","card_quantity":109},{"properties":{"Power":"Lightnings"},"file":"lightnings.png","card":true,"card_name":"Lightnings Power","card_image_file":"lightnings-power.png","card_unit_name":"CARDLGNG","card_quantity":95},{"properties":{"Power":"Sparkles"},"file":"sparkles.png","card":true,"card_name":"Sparkles Power","card_image_file":"sparkles-power.png","card_unit_name":"CARDSPKP","card_quantity":66},{"properties":{"Power":"Bubblegum"},"file":"bubblegum.png","card":true,"card_name":"Bubblegum Power","card_image_file":"bubblegum-power.png","card_unit_name":"CARDBBGP","card_quantity":33},{"properties":{"Power":"Barfing Rainbow"},"file":"barfing-rainbow.png","card":true,"card_name":"Barfing Rainbow Power","card_image_file":"barfing-rainbow-power.png","card_unit_name":"CARDBRRP","card_quantity":63},{"properties":{"Power":"Cloudy"},"file":"cloudy.png","foreground_file":"cloudy-foreground.png","foreground_z":35,"card":true,"card_name":"Cloudy Power","card_image_file":"cloudy-power.png","card_unit_name":"CARDCLDP","card_quantity":142},{"properties":{"Power":"Fire"},"file":"fire.png","card":true,"card_name":"Fire Power","card_image_file":"fire-power.png","card_unit_name":"CARDFIRP","card_quantity":130},{"properties":{"Power":"Mingos"},"file":"mingos.png","card":true,"card_name":"Mingo Power","card_image_file":"mingos-power.png","card_unit_name":"CARDMNGP","card_quantity":50},{"properties":{"Power":"Halo"},"z":35,"file":"halo.png","card":true,"card_name":"Halo Power","card_image_file":"halo-power.png","card_unit_name":"CARDHLOP","card_quantity":56},{"properties":{"Power":"Laser Eyes"},"file":"laser.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Laser Eyes Power","card_image_file":"laser-power.png","card_unit_name":"CARDLSRP","card_quantity":40},{"properties":{"Power":"Sun Eyes"},"file":"sun-eyes.png","z":85,"require":{"Eyes":"Basic"},"card":true,"card_name":"Sun Eyes Power","card_image_file":"sun-eyes-power.png","card_unit_name":"CARDSUNP","card_quantity":52},{"properties":{"Power":"Whales"},"file":"whales.png","foreground_file":"whales-foreground.png","foreground_z":35,"card":true,"card_name":"Whales Power","card_image_file":"whales-power.png","card_unit_name":"CARDWHLP","card_quantity":44},{"properties":{"Power":"Nessie"},"file":"nessie.png","foreground_file":"nessie-foreground.png","foreground_z":35,"card":true,"card_name":"Nessie Power","card_image_file":"nessie-power.png","card_unit_name":"CARDNSSP","card_quantity":10},{"properties":{"Power":"Paper Boat"},"file":"paper-boat.png","foreground_file":"paper-boat-foreground.png","foreground_z":35,"card":true,"card_name":"Paper Boat Power","card_image_file":"paper-boat-power.png","card_unit_name":"CARDPPBP","card_quantity":17},{"properties":{"Power":"Duck"},"file":"duck.png","foreground_file":"duck.png","foreground_z":35,"card":true,"card_name":"Duck Power","card_image_file":"duck-power.png","card_unit_name":"CARDDCKP","card_quantity":66},{"properties":{"Power":"Rain"},"file":"rain.png","card":true,"card_name":"Rain Power","card_image_file":"rain-power.png","card_unit_name":"CARDRANP","card_quantity":23},{"properties":{"Power":"None"},"file":null,"weight":1}]}],"hairColors":[{"name":"Blonde","min":"#E3BB3AFF","max":"#EAD07AFF","weight":10},{"name":"Brown","min":"#583519FF","max":"#996431FF","weight":40},{"name":"Dark","min":"#191411FF","max":"#5E432FFF","weight":40},{"name":"Red","min":"#BC4A0DFF","max":"#D66426FF","weight":8},{"name":"Grey","min":"#7A7660FF","max":"#B1AFA0FF","weight":13}]}')}}]);