(self.webpackChunkstudio=self.webpackChunkstudio||[]).push([[512],{194:(e,t,r)=>{r(2606),t.vL=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},t.po=function(e,t){return new Promise((function(r,n){const c=Object.assign(document.createElement("img"),t);function o(){c.onload=null,c.onerror=null}c.onload=function(){o(),r(c)},c.onerror=function(){o(),n(new Error('Failed to load the image "'+e+'"'))},c.src=e}))}},2606:e=>{"use strict";const t="'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+",r=new RegExp("(bold|bolder|lighter|[1-9]00) +","i"),n=new RegExp("(italic|oblique) +","i"),c=new RegExp("(small-caps) +","i"),o=new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +","i"),a=new RegExp(`([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:${t})( *, *(?:${t}))*)`),i={};e.exports=e=>{if(i[e])return i[e];const t=a.exec(e);if(!t)return;const l={weight:"normal",style:"normal",stretch:"normal",variant:"normal",size:parseFloat(t[1]),unit:t[2],family:t[3].replace(/["']/g,"").replace(/ *, */g,",")};let s,f,u,w;const h=e.substring(0,t.index);switch((s=r.exec(h))&&(l.weight=s[1]),(f=n.exec(h))&&(l.style=f[1]),(u=c.exec(h))&&(l.variant=u[1]),(w=o.exec(h))&&(l.stretch=w[1]),l.unit){case"pt":l.size/=.75;break;case"pc":l.size*=16;break;case"in":l.size*=96;break;case"cm":l.size*=96/2.54;break;case"mm":l.size*=96/25.4;break;case"%":break;case"em":case"rem":l.size*=16/.75;break;case"q":l.size*=96/25.4/4}return i[e]=l}},1466:(e,t)=>{var r=Object.defineProperty;r(t,"__esModule",{value:!0}),((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(t,{GIFEncoder:()=>k,applyPalette:()=>g,default:()=>q,nearestColor:()=>v,nearestColorIndex:()=>A,nearestColorIndexWithDistance:()=>x,prequantize:()=>b,quantize:()=>u,snapColorsToPalette:()=>p});function n(e=256){let t=0,r=new Uint8Array(e);return{get buffer(){return r.buffer},reset(){t=0},bytesView:()=>r.subarray(0,t),bytes:()=>r.slice(0,t),writeByte(e){n(t+1),r[t]=e,t++},writeBytes(e,c=0,o=e.length){n(t+o);for(let n=0;n<o;n++)r[t++]=e[n+c]},writeBytesView(e,c=0,o=e.byteLength){n(t+o),r.set(e.subarray(c,c+o),t),t+=o}};function n(e){var n=r.length;if(n>=e)return;e=Math.max(e,n*(n<1048576?2:1.125)>>>0),0!=n&&(e=Math.max(e,256));const c=r;r=new Uint8Array(e),t>0&&r.set(c.subarray(0,t),0)}}var c=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];function o(e,t,r){return e<<8&63488|t<<2&992|r>>3}function a(e,t,r,n){return e>>4|240&t|(240&r)<<4|(240&n)<<8}function i(e,t,r){return e>>4<<8|240&t|r>>4}function l(e,t,r){return e<t?t:e>r?r:e}function s(e){return e*e}function f(e,t,r){var n=0,c=1e100;const o=e[t],a=o.cnt,i=o.ac,l=o.rc,f=o.gc,u=o.bc;for(var w=o.fw;0!=w;w=e[w].fw){const t=e[w],o=t.cnt,y=a*o/(a+o);if(!(y>=c)){var h=0;r&&(h+=y*s(t.ac-i))>=c||(h+=y*s(t.rc-l))>=c||(h+=y*s(t.gc-f))>=c||(h+=y*s(t.bc-u))>=c||(c=h,n=w)}}o.err=c,o.nn=n}function u(e,t,r={}){const{format:n="rgb565",clearAlpha:c=!0,clearAlphaColor:u=0,clearAlphaThreshold:h=0,oneBitAlpha:y=!1}=r;if(!e||!e.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(e instanceof Uint8Array||e instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");const b=new Uint32Array(e.buffer);let g=!1!==r.useSqrt;const m="rgba4444"===n,d=function(e,t){const r=new Array("rgb444"===t?4096:65536),n=e.length;if("rgba4444"===t)for(let t=0;t<n;++t){const n=e[t],c=n>>24&255,o=n>>16&255,i=n>>8&255,l=255&n,s=a(l,i,o,c);let f=s in r?r[s]:r[s]={ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0};f.rc+=l,f.gc+=i,f.bc+=o,f.ac+=c,f.cnt++}else if("rgb444"===t)for(let t=0;t<n;++t){const n=e[t],c=n>>16&255,o=n>>8&255,a=255&n,l=i(a,o,c);let s=l in r?r[l]:r[l]={ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0};s.rc+=a,s.gc+=o,s.bc+=c,s.cnt++}else for(let t=0;t<n;++t){const n=e[t],c=n>>16&255,a=n>>8&255,i=255&n,l=o(i,a,c);let s=l in r?r[l]:r[l]={ac:0,rc:0,gc:0,bc:0,cnt:0,nn:0,fw:0,bk:0,tm:0,mtm:0,err:0};s.rc+=i,s.gc+=a,s.bc+=c,s.cnt++}return r}(b,n),p=d.length,B=p-1,A=new Uint32Array(p+1);for(var x=0,v=0;v<p;++v){const e=d[v];if(null!=e){var k=1/e.cnt;m&&(e.ac*=k),e.rc*=k,e.gc*=k,e.bc*=k,d[x++]=e}}var M,E,U;for(s(t)/x<.022&&(g=!1),v=0;v<x-1;++v)d[v].fw=v+1,d[v+1].bk=v,g&&(d[v].cnt=Math.sqrt(d[v].cnt));for(g&&(d[v].cnt=Math.sqrt(d[v].cnt)),v=0;v<x;++v){f(d,v,!1);var z=d[v].err;for(E=++A[0];E>1&&!(d[M=A[U=E>>1]].err<=z);E=U)A[E]=M;A[E]=v}var q=x-t;for(v=0;v<q;){for(var C;;){var R=A[1];if((C=d[R]).tm>=C.mtm&&d[C.nn].mtm<=C.tm)break;for(C.mtm==B?R=A[1]=A[A[0]--]:(f(d,R,!1),C.tm=v),z=d[R].err,E=1;(U=E+E)<=A[0]&&(U<A[0]&&d[A[U]].err>d[A[U+1]].err&&U++,!(z<=d[M=A[U]].err));E=U)A[E]=M;A[E]=R}var I=d[C.nn],V=C.cnt,G=I.cnt;k=1/(V+G),m&&(C.ac=k*(V*C.ac+G*I.ac)),C.rc=k*(V*C.rc+G*I.rc),C.gc=k*(V*C.gc+G*I.gc),C.bc=k*(V*C.bc+G*I.bc),C.cnt+=I.cnt,C.mtm=++v,d[I.bk].fw=I.fw,d[I.fw].bk=I.bk,I.mtm=B}let F=[];var P=0;for(v=0;;++P){let e=l(Math.round(d[v].rc),0,255),t=l(Math.round(d[v].gc),0,255),r=l(Math.round(d[v].bc),0,255),n=255;m&&(n=l(Math.round(d[v].ac),0,255),y&&(n=n<=("number"==typeof y?y:127)?0:255),c&&n<=h&&(e=t=r=u,n=0));const o=m?[e,t,r,n]:[e,t,r];if(w(F,o)||F.push(o),0==(v=d[v].fw))break}return F}function w(e,t){for(let r=0;r<e.length;r++){const n=e[r];let c=n[0]===t[0]&&n[1]===t[1]&&n[2]===t[2],o=!(n.length>=4&&t.length>=4)||n[3]===t[3];if(c&&o)return!0}return!1}function h(e,t){var r,n=0;for(r=0;r<e.length;r++){const c=e[r]-t[r];n+=c*c}return n}function y(e,t){return t>1?Math.round(e/t)*t:e}function b(e,{roundRGB:t=5,roundAlpha:r=10,oneBitAlpha:n=null}={}){const c=new Uint32Array(e.buffer);for(let e=0;e<c.length;e++){const o=c[e];let a=o>>24&255,i=o>>16&255,l=o>>8&255,s=255&o;a=y(a,r),n&&(a=a<=("number"==typeof n?n:127)?0:255),s=y(s,t),l=y(l,t),i=y(i,t),c[e]=a<<24|i<<16|l<<8|s<<0}}function g(e,t,r="rgb565"){if(!e||!e.buffer)throw new Error("quantize() expected RGBA Uint8Array data");if(!(e instanceof Uint8Array||e instanceof Uint8ClampedArray))throw new Error("quantize() expected RGBA Uint8Array data");if(t.length>256)throw new Error("applyPalette() only works with 256 colors or less");const n=new Uint32Array(e.buffer),c=n.length,l="rgb444"===r?4096:65536,s=new Uint8Array(c),f=new Array(l);if("rgba4444"===r)for(let e=0;e<c;e++){const r=n[e],c=r>>24&255,o=r>>16&255,i=r>>8&255,l=255&r,u=a(l,i,o,c),w=u in f?f[u]:f[u]=m(l,i,o,c,t);s[e]=w}else{const e="rgb444"===r?i:o;for(let r=0;r<c;r++){const c=n[r],o=c>>16&255,a=c>>8&255,i=255&c,l=e(i,a,o),u=l in f?f[l]:f[l]=d(i,a,o,t);s[r]=u}}return s}function m(e,t,r,n,c){let o=0,a=1e100;for(let i=0;i<c.length;i++){const l=c[i];let s=B(l[3]-n);s>a||(s+=B(l[0]-e),s>a||(s+=B(l[1]-t),s>a||(s+=B(l[2]-r),s>a||(a=s,o=i))))}return o}function d(e,t,r,n){let c=0,o=1e100;for(let a=0;a<n.length;a++){const i=n[a];let l=B(i[0]-e);l>o||(l+=B(i[1]-t),l>o||(l+=B(i[2]-r),l>o||(o=l,c=a)))}return c}function p(e,t,r=5){if(!e.length||!t.length)return;const n=e.map((e=>e.slice(0,3))),c=r*r,o=e[0].length;for(let r=0;r<t.length;r++){let a=t[r];a=a.length<o?[a[0],a[1],a[2],255]:a.length>o?a.slice(0,3):a.slice();const i=x(n,a.slice(0,3),h),l=i[0],s=i[1];s>0&&s<=c&&(e[l]=a)}}function B(e){return e*e}function A(e,t,r=h){let n=1/0,c=-1;for(let o=0;o<e.length;o++){const a=r(t,e[o]);a<n&&(n=a,c=o)}return c}function x(e,t,r=h){let n=1/0,c=-1;for(let o=0;o<e.length;o++){const a=r(t,e[o]);a<n&&(n=a,c=o)}return[c,n]}function v(e,t,r=h){return e[A(e,t,r)]}function k(e={}){const{initialCapacity:t=4096,auto:r=!0}=e,o=n(t),a=new Uint8Array(256),i=new Int32Array(5003),l=new Int32Array(5003);let s=!1;return{reset(){o.reset(),s=!1},finish(){o.writeByte(59)},bytes:()=>o.bytes(),bytesView:()=>o.bytesView(),get buffer(){return o.buffer},get stream(){return o},writeHeader:f,writeFrame(e,t,u,w={}){const{transparent:h=!1,transparentIndex:y=0,delay:b=0,palette:g=null,repeat:m=0,colorDepth:d=8,dispose:p=-1}=w;let B=!1;if(r?s||(B=!0,f(),s=!0):B=Boolean(w.first),t=Math.max(0,Math.floor(t)),u=Math.max(0,Math.floor(u)),B){if(!g)throw new Error("First frame must include a { palette } option");!function(e,t,r,n,c=8){const o=128|c-1<<4|z(n.length)-1;E(e,t),E(e,r),e.writeBytes([o,0,0])}(o,t,u,g,d),M(o,g),m>=0&&function(e,t){e.writeByte(33),e.writeByte(255),e.writeByte(11),U(e,"NETSCAPE2.0"),e.writeByte(3),e.writeByte(1),E(e,t),e.writeByte(0)}(o,m)}const A=Math.round(b/10);!function(e,t,r,n,c){var o,a;e.writeByte(33),e.writeByte(249),e.writeByte(4),c<0&&(c=0,n=!1),n?(o=1,a=2):(o=0,a=0),t>=0&&(a=7&t),a<<=2;e.writeByte(0|a|o),E(e,r),e.writeByte(c||0),e.writeByte(0)}(o,p,A,h,y);const x=Boolean(g)&&!B;!function(e,t,r,n){if(e.writeByte(44),E(e,0),E(e,0),E(e,t),E(e,r),n){const t=0,r=0,c=z(n.length)-1;e.writeByte(128|t|r|0|c)}else e.writeByte(0)}(o,t,u,x?g:null),x&&M(o,g),function(e,t,r,o,a=8,i,l,s){!function(e,t,r,o,a=n(512),i=new Uint8Array(256),l=new Int32Array(5003),s=new Int32Array(5003)){const f=l.length,u=Math.max(2,o);i.fill(0),s.fill(0),l.fill(-1);let w=0,h=0;const y=u+1,b=y;let g=!1,m=b,d=(1<<m)-1;const p=1<<y-1,B=p+1;let A=p+2,x=0,v=r[0],k=0;for(let e=f;e<65536;e*=2)++k;k=8-k,a.writeByte(u),E(p);const M=r.length;for(let e=1;e<M;e++)e:{const t=r[e],n=(t<<12)+v;let c=t<<k^v;if(l[c]===n){v=s[c];break e}const o=0===c?1:f-c;for(;l[c]>=0;)if(c-=o,c<0&&(c+=f),l[c]===n){v=s[c];break e}E(v),v=t,A<4096?(s[c]=A++,l[c]=n):(l.fill(-1),A=p+2,g=!0,E(p))}return E(v),E(B),a.writeByte(0),a.bytesView();function E(e){for(w&=c[h],h>0?w|=e<<h:w=e,h+=m;h>=8;)i[x++]=255&w,x>=254&&(a.writeByte(x),a.writeBytesView(i,0,x),x=0),w>>=8,h-=8;if((A>d||g)&&(g?(m=b,d=(1<<m)-1,g=!1):(++m,d=12===m?1<<m:(1<<m)-1)),e==B){for(;h>0;)i[x++]=255&w,x>=254&&(a.writeByte(x),a.writeBytesView(i,0,x),x=0),w>>=8,h-=8;x>0&&(a.writeByte(x),a.writeBytesView(i,0,x),x=0)}}}(0,0,t,a,e,i,l,s)}(o,e,0,0,d,a,i,l)}};function f(){U(o,"GIF89a")}}function M(e,t){const r=1<<z(t.length);for(let n=0;n<r;n++){let r=[0,0,0];n<t.length&&(r=t[n]),e.writeByte(r[0]),e.writeByte(r[1]),e.writeByte(r[2])}}function E(e,t){e.writeByte(255&t),e.writeByte(t>>8&255)}function U(e,t){for(var r=0;r<t.length;r++)e.writeByte(t.charCodeAt(r))}function z(e){return Math.max(Math.ceil(Math.log2(e)),1)}var q=k}}]);