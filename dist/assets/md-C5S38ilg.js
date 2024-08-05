import{d as I,z as lt,v as N,t as H,S as ct,E as ht,n as Y,ag as yt,U as dt,o as ut,b as bt,l as gt,I as E,c as At,k as Bt,m as St,q as Ct,s as wt,e as j,aa as V}from"./modules/vue-DHi3ot2U.js";import{l as Dt}from"./lz-string-7V7f_eN4.js";import{c as Rt,l as vt}from"./monaco/bundled-types-CpkQVRP8.js";import{u as pt,f as Mt}from"./slidev/context-CFopLDfk.js";import{a as kt,Y as Lt,C as Ot,Z as Et}from"./index-DTUbufRV.js";import{I as Tt}from"./slidev/default-PBBEjl57.js";import"./modules/file-saver-igGfcqei.js";import"./modules/shiki-CJwp1GBl.js";const Ft=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function zt(e){if(e!=null&&e.__resolved)return e;const n={...Ft,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const M=-1,R=1,w=0;function C(e,n){return[e,n]}function T(e,n,r,s=!0,t){const i=zt(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const o=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[C(w,e)]:[];const c=s;let a=_(e,n);const l=e.substring(0,a);e=e.substring(a),n=n.substring(a),a=x(e,n);const u=e.substring(e.length-a);e=e.substring(0,e.length-a),n=n.substring(0,n.length-a);const g=jt(e,n,i,c,o);return l&&g.unshift(C(w,l)),u&&g.push(C(w,u)),q(g),g}function jt(e,n,r,s,t){let i;if(!e)return[C(R,n)];if(!n)return[C(M,e)];const o=e.length>n.length?e:n,c=e.length>n.length?n:e,a=o.indexOf(c);if(a!==-1)return i=[C(R,o.substring(0,a)),C(w,c),C(R,o.substring(a+c.length))],e.length>n.length&&(i[0][0]=i[2][0]=M),i;if(c.length===1)return[C(M,e),C(R,n)];const l=Pt(e,n,r);if(l){const u=l[0],g=l[1],p=l[2],f=l[3],h=l[4],m=T(u,p,r,s,t),A=T(g,f,r,s,t);return m.concat([C(w,h)],A)}return s&&e.length>100&&n.length>100?Kt(e,n,r,t):Nt(e,n,r,t)}function Kt(e,n,r,s){const t=Vt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,o=T(e,n,r,!1,s);xt(o,i),Zt(o),o.push(C(w,""));let c=0,a=0,l=0,u="",g="";for(;c<o.length;){switch(o[c][0]){case R:l++,g+=o[c][1];break;case M:a++,u+=o[c][1];break;case w:if(a>=1&&l>=1){o.splice(c-a-l,a+l),c=c-a-l;const p=T(u,g,r,!1,s);for(let f=p.length-1;f>=0;f--)o.splice(c,0,p[f]);c=c+p.length}l=0,a=0,u="",g="";break}c++}return o.pop(),o}function Nt(e,n,r,s){const t=e.length,i=n.length,o=Math.ceil((t+i)/2),c=o,a=2*o,l=new Array(a),u=new Array(a);for(let b=0;b<a;b++)l[b]=-1,u[b]=-1;l[c+1]=0,u[c+1]=0;const g=t-i,p=g%2!==0;let f=0,h=0,m=0,A=0;for(let b=0;b<o&&!(new Date().getTime()>s);b++){for(let y=-b+f;y<=b-h;y+=2){const S=c+y;let d;y===-b||y!==b&&l[S-1]<l[S+1]?d=l[S+1]:d=l[S-1]+1;let B=d-y;for(;d<t&&B<i&&e.charAt(d)===n.charAt(B);)d++,B++;if(l[S]=d,d>t)h+=2;else if(B>i)f+=2;else if(p){const D=c+g-y;if(D>=0&&D<a&&u[D]!==-1){const k=t-u[D];if(d>=k)return U(e,n,r,d,B,s)}}}for(let y=-b+m;y<=b-A;y+=2){const S=c+y;let d;y===-b||y!==b&&u[S-1]<u[S+1]?d=u[S+1]:d=u[S-1]+1;let B=d-y;for(;d<t&&B<i&&e.charAt(t-d-1)===n.charAt(i-B-1);)d++,B++;if(u[S]=d,d>t)A+=2;else if(B>i)m+=2;else if(!p){const D=c+g-y;if(D>=0&&D<a&&l[D]!==-1){const k=l[D],F=c+k-D;if(d=t-d,k>=d)return U(e,n,r,k,F,s)}}}}return[C(M,e),C(R,n)]}function U(e,n,r,s,t,i){const o=e.substring(0,s),c=n.substring(0,t),a=e.substring(s),l=n.substring(t),u=T(o,c,r,!1,i),g=T(a,l,r,!1,i);return u.concat(g)}function Vt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(a){let l="",u=0,g=-1,p=r.length;for(;g<a.length-1;){g=a.indexOf(`
`,u),g===-1&&(g=a.length-1);let f=a.substring(u,g+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,f):s[f]!==void 0)?l+=String.fromCharCode(s[f]):(p===t&&(f=a.substring(u),g=a.length),l+=String.fromCharCode(p),s[f]=p,r[p++]=f),u=g+1}return l}const o=i(e);t=65535;const c=i(n);return{chars1:o,chars2:c,lineArray:r}}function xt(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function _(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function x(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function J(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,o=1;for(;;){const c=e.substring(t-o),a=n.indexOf(c);if(a===-1)return i;o+=a,(a===0||e.substring(t-o)===n.substring(0,o))&&(i=o,o++)}}function Pt(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(h,m,A){const b=h.substring(A,A+Math.floor(h.length/4));let y=-1,S="",d,B,D,k;for(;(y=m.indexOf(b,y+1))!==-1;){const F=_(h.substring(A),m.substring(y)),K=x(h.substring(0,A),m.substring(0,y));S.length<K+F&&(S=m.substring(y-K,y)+m.substring(y,y+F),d=h.substring(0,A-K),B=h.substring(A+F),D=m.substring(0,y-K),k=m.substring(y+F))}return S.length*2>=h.length?[d,B,D,k,S]:null}const o=i(s,t,Math.ceil(s.length/4)),c=i(s,t,Math.ceil(s.length/2));let a;if(!o&&!c)return null;c?o?a=o[4].length>c[4].length?o:c:a=c:a=o;let l,u,g,p;e.length>n.length?(l=a[0],u=a[1],g=a[2],p=a[3]):(g=a[0],p=a[1],l=a[2],u=a[3]);const f=a[4];return[l,u,g,p,f]}function Zt(e){let n=!1;const r=[];let s=0,t=null,i=0,o=0,c=0,a=0,l=0;for(;i<e.length;)e[i][0]===w?(r[s++]=i,o=a,c=l,a=0,l=0,t=e[i][1]):(e[i][0]===R?a+=e[i][1].length:l+=e[i][1].length,t&&t.length<=Math.max(o,c)&&t.length<=Math.max(a,l)&&(e.splice(r[s-1],0,C(M,t)),e[r[s-1]+1][0]=R,s--,s--,i=s>0?r[s-1]:-1,o=0,c=0,a=0,l=0,t=null,n=!0)),i++;for(n&&q(e),Yt(e),i=1;i<e.length;){if(e[i-1][0]===M&&e[i][0]===R){const u=e[i-1][1],g=e[i][1],p=J(u,g),f=J(g,u);p>=f?(p>=u.length/2||p>=g.length/2)&&(e.splice(i,0,C(w,g.substring(0,p))),e[i-1][1]=u.substring(0,u.length-p),e[i+1][1]=g.substring(p),i++):(f>=u.length/2||f>=g.length/2)&&(e.splice(i,0,C(w,u.substring(0,f))),e[i-1][0]=R,e[i-1][1]=g.substring(0,g.length-f),e[i+1][0]=M,e[i+1][1]=u.substring(f),i++),i++}i++}}const Q=/[^a-zA-Z0-9]/,W=/\s/,X=/[\r\n]/,Gt=/\n\r?\n$/,Ht=/^\r?\n\r?\n/;function Yt(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),o=t.charAt(0),c=i.match(Q),a=o.match(Q),l=c&&i.match(W),u=a&&o.match(W),g=l&&i.match(X),p=u&&o.match(X),f=g&&s.match(Gt),h=p&&t.match(Ht);return f||h?5:g||p?4:c&&!l&&u?3:l||u?2:c||a?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===w&&e[r+1][0]===w){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const o=x(s,t);if(o){const g=t.substring(t.length-o);s=s.substring(0,s.length-o),t=g+t.substring(0,t.length-o),i=g+i}let c=s,a=t,l=i,u=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const g=n(s,t)+n(t,i);g>=u&&(u=g,c=s,a=t,l=i)}e[r-1][1]!==c&&(c?e[r-1][1]=c:(e.splice(r-1,1),r--),e[r][1]=a,l?e[r+1][1]=l:(e.splice(r+1,1),r--))}r++}}function q(e){e.push(C(w,""));let n=0,r=0,s=0,t="",i="",o;for(;n<e.length;)switch(e[n][0]){case R:s++,i+=e[n][1],n++;break;case M:r++,t+=e[n][1],n++;break;case w:r+s>1?(r!==0&&s!==0&&(o=_(i,t),o!==0&&(n-r-s>0&&e[n-r-s-1][0]===w?e[n-r-s-1][1]+=i.substring(0,o):(e.splice(0,0,C(w,i.substring(0,o))),n++),i=i.substring(o),t=t.substring(o)),o=x(i,t),o!==0&&(e[n][1]=i.substring(i.length-o)+e[n][1],i=i.substring(0,i.length-o),t=t.substring(0,t.length-o))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,C(M,t)),n++),i.length&&(e.splice(n,0,C(R,i)),n++),n++):n!==0&&e[n-1][0]===w?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let c=!1;for(n=1;n<e.length-1;)e[n-1][0]===w&&e[n+1][0]===w&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),c=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),c=!0)),n++;c&&q(e)}const $=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function It(e,n){n?n={...$,...n}:n=$;const r=ft(n);return r.dispatch(e),r.toString()}const _t=Object.freeze(["prototype","__proto__","constructor"]);function ft(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let o="";const c=i.length;c<10?o="unknown:["+i+"]":o=i.slice(8,c-1),o=o.toLowerCase();let a=null;if((a=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):e.ignoreUnknown||this.unkown(t,o);else{let l=Object.keys(t);e.unorderedObjects&&(l=l.sort());let u=[];e.respectType!==!1&&!tt(t)&&(u=_t),e.excludeKeys&&(l=l.filter(p=>!e.excludeKeys(p)),u=u.filter(p=>!e.excludeKeys(p))),s("object:"+(l.length+u.length)+":");const g=p=>{this.dispatch(p),s(":"),e.excludeValues||this.dispatch(t[p]),s(",")};for(const p of l)g(p);for(const p of u)g(p)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const a of t)this.dispatch(a);return}const o=new Map,c=t.map(a=>{const l=ft(e);l.dispatch(a);for(const[u,g]of l.getContext())o.set(u,g);return l.toString()});return r=o,c.sort(),this.array(c,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),tt(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const mt="[native code] }",qt=mt.length;function tt(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-qt)===mt}class L{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||Ut).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new L([...this.words])}}const Ut={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Jt={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,o=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,c=t<<16|i<<8|o;for(let a=0;a<4&&s*8+a*6<e.sigBytes*8;a++)r.push(n.charAt(c>>>6*(3-a)&63))}return r.join("")}},Qt={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new L(r,n)}},Wt={parse(e){return Qt.parse(unescape(encodeURIComponent(e)))}};class Xt{constructor(){this._data=new L,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new L,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Wt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new L(r,i)}}class $t extends Xt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const et=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],te=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],O=[];class ee extends $t{constructor(){super(...arguments),this._hash=new L([...et])}reset(){super.reset(),this._hash=new L([...et])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],o=s[2],c=s[3],a=s[4],l=s[5],u=s[6],g=s[7];for(let p=0;p<64;p++){if(p<16)O[p]=n[r+p]|0;else{const S=O[p-15],d=(S<<25|S>>>7)^(S<<14|S>>>18)^S>>>3,B=O[p-2],D=(B<<15|B>>>17)^(B<<13|B>>>19)^B>>>10;O[p]=d+O[p-7]+D+O[p-16]}const f=a&l^~a&u,h=t&i^t&o^i&o,m=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),A=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=g+A+f+te[p]+O[p],y=m+h;g=u,u=l,l=a,a=c+b|0,c=o,o=i,i=t,t=b+y|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+o|0,s[3]=s[3]+c|0,s[4]=s[4]+a|0,s[5]=s[5]+l|0,s[6]=s[6]+u|0,s[7]=s[7]+g|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ne(e){return new ee().finalize(e).toString(Jt)}function se(e,n={}){const r=typeof e=="string"?e:It(e,n);return ne(r).slice(0,10)}function re(e,n,r="",s=!1){const t=se(e+r);let i=0,o=0;const c=Math.ceil(Math.log10(n.length)),a=ie(n).flatMap((l,u)=>{var f;o=((f=l[0])==null?void 0:f.offset)||i;const g=l[l.length-1];g?i=g.offset+g.content.length:i+=1;const p=[...l,{content:`
`,offset:i}];return s&&p.unshift({key:`${t}-ln-${u+1}`,content:`${String(u+1).padStart(c," ")}  `,offset:o,htmlClass:"shiki-magic-move-line-number"}),p}).map((l,u)=>{const g=l;return g.key||(g.key=`${t}-${u}`),g});return{code:e,hash:t,tokens:a,lineNumbers:s}}function ie(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,o]=s;if(!t&&!o)return r;const c=[{...r,offset:r.offset+t.length,content:i}];return t&&c.unshift({content:t,offset:r.offset}),o&&c.push({content:o,offset:r.offset+t.length+i.length}),c}))}function oe(e,n){let r=0;const s=e.key;let t=0;const i=[];function o(){return t===0?(t++,s):`${s}-${t++}`}for(const c of n)c>r&&i.push({...e,content:e.content.slice(r,c),offset:e.offset+r,key:o()}),r=c;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:o()}),i}function nt(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,o)=>i-o);return t.length?oe(s,t):s}):e}function ae(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=le(e.code,n.code,r),o=s?nt(e.tokens,i.flatMap(l=>l.from)):e.tokens,c=s?nt(n.tokens,i.flatMap(l=>l.to)):n.tokens,a=new Set;if(i.forEach(l=>{var h,m;const u=o.filter(A=>A.offset>=l.from[0]&&A.offset+A.content.length<=l.from[1]),g=c.filter(A=>A.offset>=l.to[0]&&A.offset+A.content.length<=l.to[1]);let p=0,f=0;for(;p<u.length&&f<g.length&&!(!u[p]||!g[f]);)u[p].content===g[f].content?(g[f].key=u[p].key,a.add(u[p].key),p++,f++):((h=u[p+1])==null?void 0:h.content)===g[f].content?p++:(u[p].content===((m=g[f+1])==null?void 0:m.content)||p++,f++)}),t)for(const l of o){if(a.has(l.key)||l.content.length<3||!l.content.match(/^[\w\d_-]+$/))continue;const u=c.find(g=>g.content===l.content&&!a.has(g.key));u&&(u.key=l.key,a.add(l.key))}return{from:o.length===e.tokens.length?e:{...e,tokens:o},to:c.length===n.tokens.length?n:{...n,tokens:c}}}function le(e,n,r={}){var c;let s=T(e,n);s=((c=r.diffCleanup)==null?void 0:c.call(r,s))||s;let t="",i="";const o=[];for(const[a,l]of s)a===0?(o.push({from:[t.length,t.length+l.length],to:[i.length,i.length+l.length],content:l}),t+=l,i+=l):a===-1?t+=l:a===1&&(i+=l);if(t!==e||i!==n)throw new Error("Content mismatch");return o}var ce=Object.defineProperty,he=(e,n,r)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,z=(e,n,r)=>(he(e,typeof n!="symbol"?n+"":n,r),r);const v="shiki-magic-move",P=`${v}-leave-from`,ue=`${v}-leave-to`,st=`${v}-leave-active`,Z=`${v}-enter-from`,G=`${v}-enter-to`,rt=`${v}-enter-active`,it=`${v}-move`,ot=`${v}-container-resize`,at=`${v}-container-restyle`,ge={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class pe{constructor(n,r={}){z(this,"mapDom",new Map),z(this,"container"),z(this,"anchor"),z(this,"previousPromises",[]),z(this,"options"),z(this,"isFirstRender",!0),this.options={...ge,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${v}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.htmlClass&&(n.className=[`${v}-item`,r.htmlClass].join(" ")),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyNodeStyle(n,r){if(r.bg&&(n.style.backgroundColor=r.bg),r.fg&&(n.style.color=r.fg),r.rootStyle){const s=r.rootStyle.split(";");for(const t of s){const[i,o]=t.split(":");i&&o&&n.style.setProperty(i.trim(),o.trim())}}}applyContainerStyle(n){this.options.containerStyle&&this.applyNodeStyle(this.container,n)}registerTransitionEnd(n,r){return()=>{let s=!1,t=()=>{};const i=Promise.race([Promise.allSettled(n.getAnimations().map(o=>o.finished)).then(()=>r()),new Promise(o=>{t=()=>{s||(s=!0,r(),o())}})]);return i.resolve=t,i}}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],o=[];this.previousPromises.forEach(h=>h.resolve()),this.previousPromises=[];const c=[],{globalScale:a}=this.options,l=new Map;let u=this.anchor.getBoundingClientRect();const g=this.container.getBoundingClientRect();for(const h of this.mapDom.values()){const m=h.getBoundingClientRect();l.set(h,{x:m.x-u.x,y:m.y-u.y})}const p=n.tokens.map(h=>{if(this.mapDom.has(h.key)){const m=this.mapDom.get(h.key);return this.applyElementContent(m,h),c.push(()=>{this.applyElementStyle(m,h)}),s.push(m),r.set(h.key,m),this.mapDom.delete(h.key),m}else{const m=document.createElement(h.content===`
`?"br":"span");return this.applyElement(m,h),t.push(m),r.set(h.key,m),m}});for(const[h,m]of this.mapDom)m.tagName!=="BR"&&i.push(m);for(const h of i)h.style.position="absolute";if(this.container.replaceChildren(this.anchor,...p,...i),this.mapDom=r,i.forEach((h,m)=>{h.style.position="absolute";const A=l.get(h);h.style.top=`${A.y/a}px`,h.style.left=`${A.x/a}px`,this.options.stagger?h.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):h.style.removeProperty("--smm-stagger"),h.classList.add(P),h.classList.add(st),c.unshift(()=>{h.classList.remove(P),h.classList.add(ue)}),o.push(this.registerTransitionEnd(h,()=>{h.classList.remove(P),h.classList.remove(st),h.classList.remove(G),h.remove()}))}),this.isFirstRender||t.forEach((h,m)=>{h.classList.add(Z),h.classList.add(rt),this.options.stagger?h.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):h.style.removeProperty("--smm-stagger"),c.push(()=>{h.classList.remove(Z),h.classList.add(G)}),o.push(this.registerTransitionEnd(h,()=>{h.classList.remove(Z),h.classList.remove(rt),h.classList.remove(G)}))}),u=this.anchor.getBoundingClientRect(),s.forEach((h,m)=>{const A=h.getBoundingClientRect(),b={x:A.x-u.x,y:A.y-u.y},y=l.get(h);h.style.transitionDuration=h.style.transitionDelay="0ms";const S=(y.x-b.x)/a,d=(y.y-b.y)/a;h.style.transform=`translate(${S}px, ${d}px)`,this.options.stagger?h.style.setProperty("--smm-stagger",`${m*this.options.stagger}ms`):h.style.removeProperty("--smm-stagger"),c.unshift(()=>{h.classList.add(it),h.style.transform=h.style.transitionDuration=h.style.transitionDelay=""}),o.push(this.registerTransitionEnd(h,()=>{h.classList.remove(it)}))}),this.options.animateContainer&&!this.isFirstRender){const h=this.container.getBoundingClientRect();(h.width!==g.width||h.height!==g.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${g.height/a}px`,this.container.style.width=`${g.width/a}px`,c.unshift(()=>{this.container.classList.add(ot),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${h.height/a}px`,this.container.style.width=`${h.width/a}px`}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(ot),this.container.style.height=this.container.style.width=""})))}this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):(c.push(()=>{this.container.classList.add(at),this.applyContainerStyle(n)}),o.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(at)})))),fe(),c.forEach(h=>h());const f=o.map(h=>h());return this.isFirstRender=!1,this.previousPromises=f,Promise.all(f).then()}}function fe(){return document.body.offsetHeight}const me=I({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=H();let s=!1;return ct(()=>{r.value.innerHTML="",s=!0;const t=new pe(r.value);ht(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await Y();const o=t.render(i);await Y(),n("start"),await o,n("end")}else t.replace(i)},{immediate:!0})}),()=>N("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:yt(e.tokens.tokens,t=>t.content===`
`?N("br",{key:t.key}):N("span",{style:[{color:t.color},t.htmlStyle],class:["shiki-magic-move-item",t.htmlClass],key:t.key},t.content)))}}),ye=I({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=re("",[]);const t=lt(()=>{const i=ae(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>N(me,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}}),de=I({__name:"ShikiMagicMove",props:{at:{type:[String,Number],default:"+1"},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0},lines:{type:Boolean,default:Rt.lineNumbers}},setup(e){const n=e,r=JSON.parse(Dt.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t,$zoom:i}=pt(),{isPrintMode:o}=kt(),c=Lt(),a=H(0),l=H(),u=lt(()=>n.stepRanges.map(g=>g.length?g:["all"]));return dt(()=>{s==null||s.unregister(c)}),ct(()=>{if(!s)return;if(u.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const g=u.value.map(f=>f.length).reduce((f,h)=>f+h,0),p=s.calculateSince(n.at,g-1);s.register(c,p),ht(()=>s.current,()=>{const f=p?s.current-p.start:Ot;let h=r.length-1,m=0,A="all";for(let b=0;b<u.value.length;b++){const y=u.value[b];if(f<m+y.length-1){h=b,A=y[f-m+1];break}m+=y.length||1}Y(async()=>{var d;a.value=h,await vt(0);const b=(d=l.value)==null?void 0:d.querySelector(".shiki");if(!b)return;const S=Array.from(b.children).slice(1).filter(B=>!B.className.includes("shiki-magic-move-leave")).reduce((B,D)=>(D.tagName==="BR"?B.push([]):B[B.length-1].push(D),B),[[]]);Et(A,S.length,1,B=>S[B])})},{immediate:!0})}),(g,p)=>(ut(),bt("div",{ref_key:"container",ref:l,class:"slidev-code-wrapper slidev-code-magic-move relative"},[gt(E(ye),{class:"slidev-code relative shiki overflow-visible",steps:E(r),step:a.value,animate:!E(o),options:{globalScale:E(t)*E(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}}),be=j("h2",null,"level: 2",-1),Ae=j("h1",null,"Shiki Magic Move",-1),Be=j("p",null,[V("Powered by "),j("a",{href:"https://shiki-magic-move.netlify.app/",target:"_blank"},"shiki-magic-move"),V(", Slidev supports animations across multiple code snippets.")],-1),Se=j("p",null,[V("Add multiple code blocks and wrap them with "),j("code",null,"````md magic-move"),V(" (four backticks) to enable the magic move. For example:")],-1),Ce={__name:"slides.md__slidev_9",setup(e){const{$slidev:n,$nav:r,$clicksContext:s,$clicks:t,$page:i,$renderContext:o,$frontmatter:c}=pt();return s.setup(),(a,l)=>{const u=de;return ut(),At(Tt,Ct(wt(E(Mt)(E(c),8))),{default:Bt(()=>[be,Ae,Be,Se,gt(u,St({lines:!0},{"steps-lz":"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","step-ranges":[["*","2","*"],["*","1-2","3-4","3-4,8"],[],[]]}),null,16)]),_:1},16)}}},Ee=Ce;export{Ee as default};
