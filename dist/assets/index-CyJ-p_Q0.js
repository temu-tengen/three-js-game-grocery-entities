(function(){let t=document.createElement(`link`).relList;if(t&&t.supports&&t.supports(`modulepreload`))return;for(let t of document.querySelectorAll(`link[rel="modulepreload"]`))r(t);new MutationObserver(t=>{for(let n of t)if(n.type===`childList`)for(let t of n.addedNodes)t.tagName===`LINK`&&t.rel===`modulepreload`&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(t){let n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),n.credentials=t.crossOrigin===`use-credentials`?`include`:t.crossOrigin===`anonymous`?`omit`:`same-origin`,n}function r(t){if(t.ep)return;t.ep=!0;let r=n(t);fetch(t.href,r)}})();var t=`attached`,n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,ee=1029,A=1030,te=1031,ne=1033,re=33776,j=33777,M=33778,N=33779,ie=35840,P=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,F=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,I=2300,Pe=2301,Fe=2302,Ie=2303,L=2400,Le=2401,R=2402,z=2500,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(t){for(let n=t.length-1;n>=0;--n)if(t[n]>=65535)return!0;return!1}function qe(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Je(t){return document.createElementNS(`http://www.w3.org/1999/xhtml`,t)}function Ye(){let t=Je(`canvas`);return t.style.display=`block`,t}var Xe={};function Ze(...t){let n=`THREE.`+t.shift();console.log(n,...t)}function Qe(t){let n=t[0];if(typeof n==`string`&&n.startsWith(`TSL:`)){let n=t[1];n&&n.isStackTrace?t[0]+=` `+n.getLocation():t[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return t}function B(...t){t=Qe(t);let n=`THREE.`+t.shift();{let r=t[0];r&&r.isStackTrace?console.warn(r.getError(n)):console.warn(n,...t)}}function V(...t){t=Qe(t);let n=`THREE.`+t.shift();{let r=t[0];r&&r.isStackTrace?console.error(r.getError(n)):console.error(n,...t)}}function $e(...t){let n=t.join(` `);n in Xe||(Xe[n]=!0,B(...t))}function et(t,n,r){return new Promise(function(i,a){function o(){switch(t.clientWaitSync(n,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(o,r);break;default:i()}}setTimeout(o,r)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){let r=this._listeners;return r!==void 0&&r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){let r=this._listeners;if(r===void 0)return;let i=r[t];if(i!==void 0){let t=i.indexOf(n);t!==-1&&i.splice(t,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let r=n[t.type];if(r!==void 0){t.target=this;let n=r.slice(0);for(let r=0,i=n.length;r<i;r++)n[r].call(this,t);t.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function H(){let t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rt[t&255]+rt[t>>8&255]+rt[t>>16&255]+rt[t>>24&255]+`-`+rt[n&255]+rt[n>>8&255]+`-`+rt[n>>16&15|64]+rt[n>>24&255]+`-`+rt[r&63|128]+rt[r>>8&255]+`-`+rt[r>>16&255]+rt[r>>24&255]+rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]).toLowerCase()}function U(t,n,r){return Math.max(n,Math.min(r,t))}function st(t,n){return(t%n+n)%n}function ct(t,n,r,i,a){return i+(t-n)*(a-i)/(r-n)}function lt(t,n,r){return t===n?0:(r-t)/(n-t)}function ut(t,n,r){return(1-r)*t+r*n}function dt(t,n,r,i){return ut(t,n,1-Math.exp(-r*i))}function ft(t,n=1){return n-Math.abs(st(t,n*2)-n)}function pt(t,n,r){return t<=n?0:t>=r?1:(t=(t-n)/(r-n),t*t*(3-2*t))}function mt(t,n,r){return t<=n?0:t>=r?1:(t=(t-n)/(r-n),t*t*t*(t*(t*6-15)+10))}function ht(t,n){return t+Math.floor(Math.random()*(n-t+1))}function gt(t,n){return t+Math.random()*(n-t)}function _t(t){return t*(.5-Math.random())}function vt(t){t!==void 0&&(it=t);let n=it+=1831565813;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}function yt(t){return t*at}function bt(t){return t*ot}function xt(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function St(t){return 2**Math.ceil(Math.log(t)/Math.LN2)}function Ct(t){return 2**Math.floor(Math.log(t)/Math.LN2)}function wt(t,n,r,i,a){let o=Math.cos,s=Math.sin,c=o(r/2),l=s(r/2),u=o((n+i)/2),d=s((n+i)/2),f=o((n-i)/2),p=s((n-i)/2),m=o((i-n)/2),h=s((i-n)/2);switch(a){case`XYX`:t.set(c*d,l*f,l*p,c*u);break;case`YZY`:t.set(l*p,c*d,l*f,c*u);break;case`ZXZ`:t.set(l*f,l*p,c*d,c*u);break;case`XZX`:t.set(c*d,l*h,l*m,c*u);break;case`YXY`:t.set(l*m,c*d,l*h,c*u);break;case`ZYZ`:t.set(l*h,l*m,c*d,c*u);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+a)}}function Tt(t,n){switch(n.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Et(t,n){switch(n.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Dt={DEG2RAD:at,RAD2DEG:ot,generateUUID:H,clamp:U,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Et,denormalize:Tt},W=class t{static{t.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw Error(`THREE.Vector2: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,r=this.y,i=t.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=U(this.x,t.x,n.x),this.y=U(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=U(this.x,t,n),this.y=U(this.y,t,n),this}clampLength(t,n){let r=this.length();return this.divideScalar(r||1).multiplyScalar(U(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let r=this.dot(t)/n;return Math.acos(U(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let r=Math.cos(n),i=Math.sin(n),a=this.x-t.x,o=this.y-t.y;return this.x=a*r-o*i+t.x,this.y=a*i+o*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(t=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=i}static slerpFlat(t,n,r,i,a,o,s){let c=r[i+0],l=r[i+1],u=r[i+2],d=r[i+3],f=a[o+0],p=a[o+1],m=a[o+2],h=a[o+3];if(d!==h||c!==f||l!==p||u!==m){let t=c*f+l*p+u*m+d*h;t<0&&(f=-f,p=-p,m=-m,h=-h,t=-t);let n=1-s;if(t<.9995){let r=Math.acos(t),i=Math.sin(r);n=Math.sin(n*r)/i,s=Math.sin(s*r)/i,c=c*n+f*s,l=l*n+p*s,u=u*n+m*s,d=d*n+h*s}else{c=c*n+f*s,l=l*n+p*s,u=u*n+m*s,d=d*n+h*s;let t=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=t,l*=t,u*=t,d*=t}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,r,i,a,o){let s=r[i],c=r[i+1],l=r[i+2],u=r[i+3],d=a[o],f=a[o+1],p=a[o+2],m=a[o+3];return t[n]=s*m+u*d+c*p-l*f,t[n+1]=c*m+u*f+l*d-s*p,t[n+2]=l*m+u*p+s*f-c*d,t[n+3]=u*m-s*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,i){return this._x=t,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let r=t._x,i=t._y,a=t._z,o=t._order,s=Math.cos,c=Math.sin,l=s(r/2),u=s(i/2),d=s(a/2),f=c(r/2),p=c(i/2),m=c(a/2);switch(o){case`XYZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`YXZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`ZXY`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`ZYX`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`YZX`:this._x=f*u*d+l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d-f*p*m;break;case`XZY`:this._x=f*u*d-l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d+f*p*m;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let r=n/2,i=Math.sin(r);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,r=n[0],i=n[4],a=n[8],o=n[1],s=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=r+s+d;if(f>0){let t=.5/Math.sqrt(f+1);this._w=.25/t,this._x=(u-c)*t,this._y=(a-l)*t,this._z=(o-i)*t}else if(r>s&&r>d){let t=2*Math.sqrt(1+r-s-d);this._w=(u-c)/t,this._x=.25*t,this._y=(i+o)/t,this._z=(a+l)/t}else if(s>d){let t=2*Math.sqrt(1+s-r-d);this._w=(a-l)/t,this._x=(i+o)/t,this._y=.25*t,this._z=(c+u)/t}else{let t=2*Math.sqrt(1+d-r-s);this._w=(o-i)/t,this._x=(a+l)/t,this._y=(c+u)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(U(this.dot(t),-1,1)))}rotateTowards(t,n){let r=this.angleTo(t);if(r===0)return this;let i=Math.min(1,n/r);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x*=t,this._y*=t,this._z*=t,this._w*=t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let r=t._x,i=t._y,a=t._z,o=t._w,s=n._x,c=n._y,l=n._z,u=n._w;return this._x=r*u+o*s+i*l-a*c,this._y=i*u+o*c+a*s-r*l,this._z=a*u+o*l+r*c-i*s,this._w=o*u-r*s-i*c-a*l,this._onChangeCallback(),this}slerp(t,n){let r=t._x,i=t._y,a=t._z,o=t._w,s=this.dot(t);s<0&&(r=-r,i=-i,a=-a,o=-o,s=-s);let c=1-n;if(s<.9995){let t=Math.acos(s),l=Math.sin(t);c=Math.sin(c*t)/l,n=Math.sin(n*t)/l,this._x=this._x*c+r*n,this._y=this._y*c+i*n,this._z=this._z*c+a*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+r*n,this._y=this._y*c+i*n,this._z=this._z*c+a*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class t{static{t.prototype.isVector3=!0}constructor(t=0,n=0,r=0){this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw Error(`THREE.Vector3: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(At.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(At.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,r=this.y,i=this.z,a=t.elements;return this.x=a[0]*n+a[3]*r+a[6]*i,this.y=a[1]*n+a[4]*r+a[7]*i,this.z=a[2]*n+a[5]*r+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,r=this.y,i=this.z,a=t.elements,o=1/(a[3]*n+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*n+a[4]*r+a[8]*i+a[12])*o,this.y=(a[1]*n+a[5]*r+a[9]*i+a[13])*o,this.z=(a[2]*n+a[6]*r+a[10]*i+a[14])*o,this}applyQuaternion(t){let n=this.x,r=this.y,i=this.z,a=t.x,o=t.y,s=t.z,c=t.w,l=2*(o*i-s*r),u=2*(s*n-a*i),d=2*(a*r-o*n);return this.x=n+c*l+o*d-s*u,this.y=r+c*u+s*l-a*d,this.z=i+c*d+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,r=this.y,i=this.z,a=t.elements;return this.x=a[0]*n+a[4]*r+a[8]*i,this.y=a[1]*n+a[5]*r+a[9]*i,this.z=a[2]*n+a[6]*r+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=U(this.x,t.x,n.x),this.y=U(this.y,t.y,n.y),this.z=U(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=U(this.x,t,n),this.y=U(this.y,t,n),this.z=U(this.z,t,n),this}clampLength(t,n){let r=this.length();return this.divideScalar(r||1).multiplyScalar(U(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let r=t.x,i=t.y,a=t.z,o=n.x,s=n.y,c=n.z;return this.x=i*c-a*s,this.y=a*o-r*c,this.z=r*s-i*o,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return kt.copy(this).projectOnVector(t),this.sub(kt)}reflect(t){return this.sub(kt.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let r=this.dot(t)/n;return Math.acos(U(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,r=this.y-t.y,i=this.z-t.z;return n*n+r*r+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){let i=Math.sin(n)*t;return this.x=i*Math.sin(r),this.y=Math.cos(n)*t,this.z=i*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new G,At=new Ot,K=class t{static{t.prototype.isMatrix3=!0}constructor(t,n,r,i,a,o,s,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(t,n,r,i,a,o,s,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=n,u[4]=a,u[5]=c,u[6]=r,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let r=t.elements,i=n.elements,a=this.elements,o=r[0],s=r[3],c=r[6],l=r[1],u=r[4],d=r[7],f=r[2],p=r[5],m=r[8],h=i[0],g=i[3],_=i[6],v=i[1],y=i[4],b=i[7],x=i[2],S=i[5],C=i[8];return a[0]=o*h+s*v+c*x,a[3]=o*g+s*y+c*S,a[6]=o*_+s*b+c*C,a[1]=l*h+u*v+d*x,a[4]=l*g+u*y+d*S,a[7]=l*_+u*b+d*C,a[2]=f*h+p*v+m*x,a[5]=f*g+p*y+m*S,a[8]=f*_+p*b+m*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8];return n*o*u-n*s*l-r*a*u+r*s*c+i*a*l-i*o*c}invert(){let t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*o-s*l,f=s*c-u*a,p=l*a-o*c,m=n*d+r*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let h=1/m;return t[0]=d*h,t[1]=(i*l-u*r)*h,t[2]=(s*r-i*o)*h,t[3]=f*h,t[4]=(u*n-i*c)*h,t[5]=(i*a-s*n)*h,t[6]=p*h,t[7]=(r*c-l*n)*h,t[8]=(o*n-r*a)*h,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,i,a,o,s){let c=Math.cos(a),l=Math.sin(a);return this.set(r*c,r*l,-r*(c*o+l*s)+o+t,-i*l,i*c,-i*(-l*o+c*s)+s+n,0,0,1),this}scale(t,n){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(t,n)),this}rotate(t){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-t)),this}translate(t,n){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,r=t.elements;for(let t=0;t<9;t++)if(n[t]!==r[t])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){let r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jt=new K,Mt=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let t={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(t,n,r){return this.enabled===!1||n===r||!n||!r||(this.spaces[n].transfer===`srgb`&&(t.r=Ft(t.r),t.g=Ft(t.g),t.b=Ft(t.b)),this.spaces[n].primaries!==this.spaces[r].primaries&&(t.applyMatrix3(this.spaces[n].toXYZ),t.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===`srgb`&&(t.r=It(t.r),t.g=It(t.g),t.b=It(t.b))),t},workingToColorSpace:function(t,n){return this.convert(t,this.workingColorSpace,n)},colorSpaceToWorking:function(t,n){return this.convert(t,n,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===``?Ve:this.spaces[t].transfer},getToneMappingMode:function(t){return this.spaces[t].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(t,n=this.workingColorSpace){return t.fromArray(this.spaces[n].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,n,r){return t.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),t.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),t.colorSpaceToWorking(n,r)}},n=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Be]:{primaries:n,whitePoint:i,transfer:Ve,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:n,whitePoint:i,transfer:He,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),t}var q=Pt();function Ft(t){return t<.04045?t*.0773993808:(t*.9478672986+.0521327014)**2.4}function It(t){return t<.0031308?t*12.92:1.055*t**.41666-.055}var Lt,Rt=class{static getDataURL(t,n=`image/png`){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>`u`)return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Lt===void 0&&(Lt=Je(`canvas`)),Lt.width=t.width,Lt.height=t.height;let n=Lt.getContext(`2d`);t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),r=Lt}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<`u`&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&t instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&t instanceof ImageBitmap){let n=Je(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`);r.drawImage(t,0,0,t.width,t.height);let i=r.getImageData(0,0,t.width,t.height),a=i.data;for(let t=0;t<a.length;t++)a[t]=Ft(a[t]/255)*255;return r.putImageData(i,0,0),n}if(t.data){let n=t.data.slice(0);for(let t=0;t<n.length;t++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[t]=Math.floor(Ft(n[t]/255)*255):n[t]=Ft(n[t]);return{data:n,width:t.width,height:t.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),t}},zt=0,Bt=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=H(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<`u`&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<`u`&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n===null?t.set(0,0,0):t.set(n.width,n.height,n.depth||0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t==`string`;if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let r={uuid:this.uuid,url:``},i=this.data;if(i!==null){let t;if(Array.isArray(i)){t=[];for(let n=0,r=i.length;n<r;n++)i[n].isDataTexture?t.push(Vt(i[n].image)):t.push(Vt(i[n]))}else t=Vt(i);r.url=t}return n||(t.images[this.uuid]=r),r}};function Vt(t){return typeof HTMLImageElement<`u`&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&t instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&t instanceof ImageBitmap?Rt.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new G,Wt=class t extends nt{constructor(n=t.DEFAULT_IMAGE,i=t.DEFAULT_MAPPING,a=r,o=r,s=c,l=u,f=E,p=d,m=t.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=H(),this.name=``,this.source=new Bt(n),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=s,this.minFilter=l,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){B(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let i=this[n];i===void 0?B(`Texture.setValues(): property '${n}' does not exist.`):i&&r&&i.isVector2&&r.isVector2||i&&r&&i.isVector3&&r.isVector3||i&&r&&i.isMatrix3&&r.isMatrix3?i.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t==`string`;if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case n:t.x-=Math.floor(t.x);break;case r:t.x=t.x<0?0:1;break;case i:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x-=Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case n:t.y-=Math.floor(t.y);break;case r:t.y=t.y<0?0:1;break;case i:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y-=Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class t{static{t.prototype.isVector4=!0}constructor(t=0,n=0,r=0,i=1){this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,i){return this.x=t,this.y=n,this.z=r,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw Error(`THREE.Vector4: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w===void 0?1:t.w,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,r=this.y,i=this.z,a=this.w,o=t.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*a,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*a,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*a,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,i,a,o=.01,s=.1,c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],m=c[9],h=c[2],g=c[6],_=c[10];if(Math.abs(u-f)<o&&Math.abs(d-h)<o&&Math.abs(m-g)<o){if(Math.abs(u+f)<s&&Math.abs(d+h)<s&&Math.abs(m+g)<s&&Math.abs(l+p+_-3)<s)return this.set(1,0,0,0),this;n=Math.PI;let t=(l+1)/2,c=(p+1)/2,v=(_+1)/2,y=(u+f)/4,b=(d+h)/4,x=(m+g)/4;return t>c&&t>v?t<o?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(t),i=y/r,a=b/r):c>v?c<o?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(c),r=y/i,a=x/i):v<o?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(v),r=b/a,i=x/a),this.set(r,i,a,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-h)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=U(this.x,t.x,n.x),this.y=U(this.y,t.y,n.y),this.z=U(this.z,t.z,n.z),this.w=U(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=U(this.x,t,n),this.y=U(this.y,t,n),this.z=U(this.z,t,n),this.w=U(this.w,t,n),this}clampLength(t,n){let r=this.length();return this.divideScalar(r||1).multiplyScalar(U(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends nt{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new Gt(0,0,t,n),this.scissorTest=!1,this.viewport=new Gt(0,0,t,n),this.textures=[];let i=new Wt({width:t,height:n,depth:r.depth}),a=r.count;for(let t=0;t<a;t++)this.textures[t]=i.clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let t=0;t<this.textures.length;t++)this.textures[t].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=n,this.textures[i].image.depth=r,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},t.textures[n].image);this.textures[n].source=new Bt(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null){if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture}return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(t=null,n=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:o},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(t=null,n=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:o},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},J=class t{static{t.prototype.isMatrix4=!0}constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){let _=this.elements;return _[0]=t,_[4]=n,_[8]=r,_[12]=i,_[1]=a,_[5]=o,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=p,_[7]=m,_[11]=h,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(t){let n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){let n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,r=t.elements,i=1/Xt.setFromMatrixColumn(t,0).length(),a=1/Xt.setFromMatrixColumn(t,1).length(),o=1/Xt.setFromMatrixColumn(t,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*a,n[5]=r[5]*a,n[6]=r[6]*a,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,r=t.x,i=t.y,a=t.z,o=Math.cos(r),s=Math.sin(r),c=Math.cos(i),l=Math.sin(i),u=Math.cos(a),d=Math.sin(a);if(t.order===`XYZ`){let t=o*u,r=o*d,i=s*u,a=s*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=r+i*l,n[5]=t-a*l,n[9]=-s*c,n[2]=a-t*l,n[6]=i+r*l,n[10]=o*c}else if(t.order===`YXZ`){let t=c*u,r=c*d,i=l*u,a=l*d;n[0]=t+a*s,n[4]=i*s-r,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-s,n[2]=r*s-i,n[6]=a+t*s,n[10]=o*c}else if(t.order===`ZXY`){let t=c*u,r=c*d,i=l*u,a=l*d;n[0]=t-a*s,n[4]=-o*d,n[8]=i+r*s,n[1]=r+i*s,n[5]=o*u,n[9]=a-t*s,n[2]=-o*l,n[6]=s,n[10]=o*c}else if(t.order===`ZYX`){let t=o*u,r=o*d,i=s*u,a=s*d;n[0]=c*u,n[4]=i*l-r,n[8]=t*l+a,n[1]=c*d,n[5]=a*l+t,n[9]=r*l-i,n[2]=-l,n[6]=s*c,n[10]=o*c}else if(t.order===`YZX`){let t=o*c,r=o*l,i=s*c,a=s*l;n[0]=c*u,n[4]=a-t*d,n[8]=i*d+r,n[1]=d,n[5]=o*u,n[9]=-s*u,n[2]=-l*u,n[6]=r*d+i,n[10]=t-a*d}else if(t.order===`XZY`){let t=o*c,r=o*l,i=s*c,a=s*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=t*d+a,n[5]=o*u,n[9]=r*d-i,n[2]=i*d-r,n[6]=s*u,n[10]=a*d+t}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qt,t,$t)}lookAt(t,n,r){let i=this.elements;return nn.subVectors(t,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(r,nn),en.lengthSq()===0&&(Math.abs(r.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(r,nn)),en.normalize(),tn.crossVectors(nn,en),i[0]=en.x,i[4]=tn.x,i[8]=nn.x,i[1]=en.y,i[5]=tn.y,i[9]=nn.y,i[2]=en.z,i[6]=tn.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let r=t.elements,i=n.elements,a=this.elements,o=r[0],s=r[4],c=r[8],l=r[12],u=r[1],d=r[5],f=r[9],p=r[13],m=r[2],h=r[6],g=r[10],_=r[14],v=r[3],y=r[7],b=r[11],x=r[15],S=i[0],C=i[4],w=i[8],T=i[12],E=i[1],D=i[5],O=i[9],k=i[13],ee=i[2],A=i[6],te=i[10],ne=i[14],re=i[3],j=i[7],M=i[11],N=i[15];return a[0]=o*S+s*E+c*ee+l*re,a[4]=o*C+s*D+c*A+l*j,a[8]=o*w+s*O+c*te+l*M,a[12]=o*T+s*k+c*ne+l*N,a[1]=u*S+d*E+f*ee+p*re,a[5]=u*C+d*D+f*A+p*j,a[9]=u*w+d*O+f*te+p*M,a[13]=u*T+d*k+f*ne+p*N,a[2]=m*S+h*E+g*ee+_*re,a[6]=m*C+h*D+g*A+_*j,a[10]=m*w+h*O+g*te+_*M,a[14]=m*T+h*k+g*ne+_*N,a[3]=v*S+y*E+b*ee+x*re,a[7]=v*C+y*D+b*A+x*j,a[11]=v*w+y*O+b*te+x*M,a[15]=v*T+y*k+b*ne+x*N,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],r=t[4],i=t[8],a=t[12],o=t[1],s=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],m=t[3],h=t[7],g=t[11],_=t[15],v=c*p-l*f,y=s*p-l*d,b=s*f-c*d,x=o*p-l*u,S=o*f-c*u,C=o*d-s*u;return n*(h*v-g*y+_*b)-r*(m*v-g*x+_*S)+i*(m*y-h*x+_*C)-a*(m*b-h*S+g*C)}determinantAffine(){let t=this.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10];return n*(o*u-s*l)-r*(a*u-s*c)+i*(a*l-o*c)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=n,i[14]=r),this}invert(){let t=this.elements,n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,ee=v*k-y*O+b*D+x*E-S*T+C*w;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/ee;return t[0]=(s*k-c*O+l*D)*A,t[1]=(i*O-r*k-a*D)*A,t[2]=(h*C-g*S+_*x)*A,t[3]=(f*S-d*C-p*x)*A,t[4]=(c*E-o*k-l*T)*A,t[5]=(n*k-i*E+a*T)*A,t[6]=(g*b-m*C-_*y)*A,t[7]=(u*C-f*b+p*y)*A,t[8]=(o*O-s*E+l*w)*A,t[9]=(r*E-n*O-a*w)*A,t[10]=(m*S-h*b+_*v)*A,t[11]=(d*b-u*S-p*v)*A,t[12]=(s*T-o*D-c*w)*A,t[13]=(n*D-r*T+i*w)*A,t[14]=(h*y-m*x-g*v)*A,t[15]=(u*x-d*y+f*v)*A,this}scale(t){let n=this.elements,r=t.x,i=t.y,a=t.z;return n[0]*=r,n[4]*=i,n[8]*=a,n[1]*=r,n[5]*=i,n[9]*=a,n[2]*=r,n[6]*=i,n[10]*=a,n[3]*=r,n[7]*=i,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let r=Math.cos(n),i=Math.sin(n),a=1-r,o=t.x,s=t.y,c=t.z,l=a*o,u=a*s;return this.set(l*o+r,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+r,u*c-i*o,0,l*c-i*s,u*c+i*o,a*c*c+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,i,a,o){return this.set(1,r,a,0,t,1,o,0,n,i,1,0,0,0,0,1),this}compose(t,n,r){let i=this.elements,a=n._x,o=n._y,s=n._z,c=n._w,l=a+a,u=o+o,d=s+s,f=a*l,p=a*u,m=a*d,h=o*u,g=o*d,_=s*d,v=c*l,y=c*u,b=c*d,x=r.x,S=r.y,C=r.z;return i[0]=(1-(h+_))*x,i[1]=(p+b)*x,i[2]=(m-y)*x,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(f+_))*S,i[6]=(g+v)*S,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,n,r){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let a=this.determinantAffine();if(a===0)return r.set(1,1,1),n.identity(),this;let o=Xt.set(i[0],i[1],i[2]).length(),s=Xt.set(i[4],i[5],i[6]).length(),c=Xt.set(i[8],i[9],i[10]).length();a<0&&(o=-o),Zt.copy(this);let l=1/o,u=1/s,d=1/c;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,n.setFromRotationMatrix(Zt),r.x=o,r.y=s,r.z=c,this}makePerspective(t,n,r,i,a,o,s=Ge,c=!1){let l=this.elements,u=2*a/(n-t),d=2*a/(r-i),f=(n+t)/(n-t),p=(r+i)/(r-i),m,h;if(c)m=a/(o-a),h=o*a/(o-a);else if(s===2e3)m=-(o+a)/(o-a),h=-2*o*a/(o-a);else if(s===2001)m=-o/(o-a),h=-o*a/(o-a);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,r,i,a,o,s=Ge,c=!1){let l=this.elements,u=2/(n-t),d=2/(r-i),f=-(n+t)/(n-t),p=-(r+i)/(r-i),m,h;if(c)m=1/(o-a),h=o/(o-a);else if(s===2e3)m=-2/(o-a),h=-(o+a)/(o-a);else if(s===2001)m=-1/(o-a),h=-a/(o-a);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let n=this.elements,r=t.elements;for(let t=0;t<16;t++)if(n[t]!==r[t])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){let r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}},Xt=new G,Zt=new J,Qt=new G(0,0,0),$t=new G(1,1,1),en=new G,tn=new G,nn=new G,rn=new J,an=new Ot,on=class t{constructor(n=0,r=0,i=0,a=t.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=r,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,i=this._order){return this._x=t,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let i=t.elements,a=i[0],o=i[4],s=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],p=i[10];switch(n){case`XYZ`:this._y=Math.asin(U(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-U(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case`ZXY`:this._x=Math.asin(U(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-U(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case`YZX`:this._z=Math.asin(U(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case`XZY`:this._z=Math.asin(-U(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return rn.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rn,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return an.setFromEuler(this),this.setFromQuaternion(an,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}},cn=0,ln=new G,un=new Ot,dn=new J,fn=new G,pn=new G,mn=new G,hn=new Ot,gn=new G(1,0,0),_n=new G(0,1,0),vn=new G(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class t extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=H(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let n=new G,r=new on,i=new Ot,a=new G(1,1,1);function o(){i.setFromEuler(r,!1)}function s(){r.setFromQuaternion(i,void 0,!1)}r._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new J},normalMatrix:{value:new K}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return un.setFromAxisAngle(t,n),this.quaternion.multiply(un),this}rotateOnWorldAxis(t,n){return un.setFromAxisAngle(t,n),this.quaternion.premultiply(un),this}rotateX(t){return this.rotateOnAxis(gn,t)}rotateY(t){return this.rotateOnAxis(_n,t)}rotateZ(t){return this.rotateOnAxis(vn,t)}translateOnAxis(t,n){return ln.copy(t).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(gn,t)}translateY(t){return this.translateOnAxis(_n,t)}translateZ(t){return this.translateOnAxis(vn,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?fn.copy(t):fn.set(t,n,r);let i=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(V(`Object3D.add: object can't be added as a child of itself.`,t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yn),xn.child=t,this.dispatchEvent(xn),xn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bn),Sn.child=t,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yn),xn.child=t,this.dispatchEvent(xn),xn.child=null,this}getObjectById(t){return this.getObjectByProperty(`id`,t)}getObjectByName(t){return this.getObjectByProperty(`name`,t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,i=this.children.length;r<i;r++){let i=this.children[r].getObjectByProperty(t,n);if(i!==void 0)return i}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,t,mn),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,r=t.y,i=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*r-a[8]*i,a[13]+=r-a[1]*n-a[5]*r-a[9]*i,a[14]+=i-a[2]*n-a[6]*r-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n,r=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateWorldMatrix(!1,!0,r)}}toJSON(t){let n=t===void 0||typeof t==`string`,r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox?t.boundingBox.toJSON():void 0,boundingSphere:t.boundingSphere?t.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(t=>({...t})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(n,r){return n[r.uuid]===void 0&&(n[r.uuid]=r.toJSON(t)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);let n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){let r=n.shapes;if(Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let i=r[n];a(t.shapes,i)}else a(t.shapes,r)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let n=[];for(let r=0,i=this.material.length;r<i;r++)n.push(a(t.materials,this.material[r]));i.material=n}else i.material=a(t.materials,this.material)}if(this.children.length>0){i.children=[];for(let n=0;n<this.children.length;n++)i.children.push(this.children[n].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let n=0;n<this.animations.length;n++){let r=this.animations[n];i.animations.push(a(t.animations,r))}}if(n){let n=o(t.geometries),i=o(t.materials),a=o(t.textures),s=o(t.images),c=o(t.shapes),l=o(t.skeletons),u=o(t.animations),d=o(t.nodes);n.length>0&&(r.geometries=n),i.length>0&&(r.materials=i),a.length>0&&(r.textures=a),s.length>0&&(r.images=s),c.length>0&&(r.shapes=c),l.length>0&&(r.skeletons=l),u.length>0&&(r.animations=u),d.length>0&&(r.nodes=d)}return r.object=i,r;function o(t){let n=[];for(let r in t){let i=t[r];delete i.metadata,n.push(i)}return n}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot===null?null:t.pivot.clone(),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Cn.DEFAULT_UP=new G(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:`connected`,data:t}),this}disconnect(t){return this.dispatchEvent({type:`disconnected`,data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let i=null,a=null,o=null,s=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!==`visible-blurred`){if(l&&t.hand){o=!0;for(let i of t.hand.values()){let t=n.getJointPose(i,r),a=this._getHandJoint(l,i);t!==null&&(a.matrix.fromArray(t.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=t.radius),a.visible=t!==null}let i=l.joints[`index-finger-tip`],a=l.joints[`thumb-tip`],s=i.position.distanceTo(a.position);l.inputState.pinching&&s>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:t.handedness,target:this})):!l.inputState.pinching&&s<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:t,target:this})));s!==null&&(i=n.getPose(t.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let r=new wn;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(t,n,r){return r<0&&(r+=1),r>1&&--r,r<1/6?t+(n-t)*6*r:r<1/2?n:r<2/3?t+(n-t)*6*(2/3-r):t}var Y=class{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n==`number`?this.setHex(n):typeof n==`string`&&this.setStyle(n)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,q.colorSpaceToWorking(this,n),this}setRGB(t,n,r,i=q.workingColorSpace){return this.r=t,this.g=n,this.b=r,q.colorSpaceToWorking(this,i),this}setHSL(t,n,r,i=q.workingColorSpace){if(t=st(t,1),n=U(n,0,1),r=U(r,0,1),n===0)this.r=this.g=this.b=r;else{let i=r<=.5?r*(1+n):r+n-r*n,a=2*r-i;this.r=An(a,i,t+1/3),this.g=An(a,i,t),this.b=An(a,i,t-1/3)}return q.colorSpaceToWorking(this,i),this}setStyle(t,n=ze){function r(n){n!==void 0&&parseFloat(n)<1&&B(`Color: Alpha component of `+t+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,o=i[1],s=i[2];switch(o){case`rgb`:case`rgba`:if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case`hsl`:case`hsla`:if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:B(`Color: Unknown color model `+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);B(`Color: Invalid hex color `+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ze){let r=Dn[t.toLowerCase()];return r===void 0?B(`Color: Unknown color `+t):this.setHex(r,n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ft(t.r),this.g=Ft(t.g),this.b=Ft(t.b),this}copyLinearToSRGB(t){return this.r=It(t.r),this.g=It(t.g),this.b=It(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return q.workingToColorSpace(jn.copy(this),t),Math.round(U(jn.r*255,0,255))*65536+Math.round(U(jn.g*255,0,255))*256+Math.round(U(jn.b*255,0,255))}getHexString(t=ze){return(`000000`+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=q.workingColorSpace){q.workingToColorSpace(jn.copy(this),n);let r=jn.r,i=jn.g,a=jn.b,o=Math.max(r,i,a),s=Math.min(r,i,a),c,l,u=(s+o)/2;if(s===o)c=0,l=0;else{let t=o-s;switch(l=u<=.5?t/(o+s):t/(2-o-s),o){case r:c=(i-a)/t+(i<a?6:0);break;case i:c=(a-r)/t+2;break;case a:c=(r-i)/t+4}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=q.workingColorSpace){return q.workingToColorSpace(jn.copy(this),n),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=ze){q.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b;return t===`srgb`?`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`:`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`}offsetHSL(t,n,r){return this.getHSL(On),this.setHSL(On.h+t,On.s+n,On.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(On),t.getHSL(kn);let r=ut(On.h,kn.h,n),i=ut(On.s,kn.s,n),a=ut(On.l,kn.l,n);return this.setHSL(r,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,r=this.g,i=this.b,a=t.elements;return this.r=a[0]*n+a[3]*r+a[6]*i,this.g=a[1]*n+a[4]*r+a[7]*i,this.b=a[2]*n+a[5]*r+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new Y;Y.NAMES=Dn;var Mn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Nn=new G,Pn=new G,Fn=new G,In=new G,Ln=new G,Rn=new G,zn=new G,Bn=new G,Vn=new G,Hn=new G,Un=new Gt,Wn=new Gt,Gn=new Gt,Kn=class t{constructor(t=new G,n=new G,r=new G){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,i){i.subVectors(r,n),Nn.subVectors(t,n),i.cross(Nn);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,n,r,i,a){Nn.subVectors(i,n),Pn.subVectors(r,n),Fn.subVectors(t,n);let o=Nn.dot(Nn),s=Nn.dot(Pn),c=Nn.dot(Fn),l=Pn.dot(Pn),u=Pn.dot(Fn),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(l*c-s*u)*f,m=(o*u-s*c)*f;return a.set(1-p-m,m,p)}static containsPoint(t,n,r,i){return this.getBarycoord(t,n,r,i,In)!==null&&In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,n,r,i,a,o,s,c){return this.getBarycoord(t,n,r,i,In)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,In.x),c.addScaledVector(o,In.y),c.addScaledVector(s,In.z),c)}static getInterpolatedAttribute(t,n,r,i,a,o){return Un.setScalar(0),Wn.setScalar(0),Gn.setScalar(0),Un.fromBufferAttribute(t,n),Wn.fromBufferAttribute(t,r),Gn.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Un,a.x),o.addScaledVector(Wn,a.y),o.addScaledVector(Gn,a.z),o}static isFrontFacing(t,n,r,i){return Nn.subVectors(r,n),Pn.subVectors(t,n),Nn.cross(Pn).dot(i)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,i){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,n,r,i){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),Nn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return t.getNormal(this.a,this.b,this.c,n)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,r){return t.getBarycoord(n,this.a,this.b,this.c,r)}getInterpolation(n,r,i,a,o){return t.getInterpolation(n,this.a,this.b,this.c,r,i,a,o)}containsPoint(n){return t.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return t.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let r=this.a,i=this.b,a=this.c,o,s;Ln.subVectors(i,r),Rn.subVectors(a,r),Bn.subVectors(t,r);let c=Ln.dot(Bn),l=Rn.dot(Bn);if(c<=0&&l<=0)return n.copy(r);Vn.subVectors(t,i);let u=Ln.dot(Vn),d=Rn.dot(Vn);if(u>=0&&d<=u)return n.copy(i);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(r).addScaledVector(Ln,o);Hn.subVectors(t,a);let p=Ln.dot(Hn),m=Rn.dot(Hn);if(m>=0&&p<=m)return n.copy(a);let h=p*l-c*m;if(h<=0&&l>=0&&m<=0)return s=l/(l-m),n.copy(r).addScaledVector(Rn,s);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return zn.subVectors(a,i),s=(d-u)/(d-u+(p-m)),n.copy(i).addScaledVector(zn,s);let _=1/(g+h+f);return o=h*_,s=f*_,n.copy(r).addScaledVector(Ln,o).addScaledVector(Rn,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Yn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Yn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let r=Yn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let r=t.geometry;if(r!==void 0){let i=r.getAttribute(`position`);if(n===!0&&i!==void 0&&t.isInstancedMesh!==!0)for(let n=0,r=i.count;n<r;n++)t.isMesh===!0?t.getVertexPosition(n,Yn):Yn.fromBufferAttribute(i,n),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox===void 0?(r.boundingBox===null&&r.computeBoundingBox(),Xn.copy(r.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),Xn.copy(t.boundingBox)),Xn.applyMatrix4(t.matrixWorld),this.union(Xn)}let i=t.children;for(let t=0,r=i.length;t<r;t++)this.expandByObject(i[t],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),ir.subVectors(this.max,rr),Zn.subVectors(t.a,rr),Qn.subVectors(t.b,rr),$n.subVectors(t.c,rr),er.subVectors(Qn,Zn),tr.subVectors($n,Qn),nr.subVectors(Zn,$n);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-nr.z,nr.y,er.z,0,-er.x,tr.z,0,-tr.x,nr.z,0,-nr.x,-er.y,er.x,0,-tr.y,tr.x,0,-nr.y,nr.x,0];return!sr(n,Zn,Qn,$n,ir)||(n=[1,0,0,0,1,0,0,0,1],!sr(n,Zn,Qn,$n,ir))?!1:(ar.crossVectors(er,tr),n=[ar.x,ar.y,ar.z],sr(n,Zn,Qn,$n,ir))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,Xn=new qn,Zn=new G,Qn=new G,$n=new G,er=new G,tr=new G,nr=new G,rr=new G,ir=new G,ar=new G,or=new G;function sr(t,n,r,i,a){for(let o=0,s=t.length-3;o<=s;o+=3){or.fromArray(t,o);let s=a.x*Math.abs(or.x)+a.y*Math.abs(or.y)+a.z*Math.abs(or.z),c=n.dot(or),l=r.dot(or),u=i.dot(or);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var cr=new G,lr=new W,ur=0,dr=class extends nt{constructor(t,n,r=!1){if(super(),Array.isArray(t))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ur++}),this.name=``,this.array=t,this.itemSize=n,this.count=t===void 0?0:t.length/n,this.normalized=r,this.usage=We,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=n.array[r+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)lr.fromBufferAttribute(this,n),lr.applyMatrix3(t),this.setXY(n,lr.x,lr.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)cr.fromBufferAttribute(this,n),cr.applyMatrix3(t),this.setXYZ(n,cr.x,cr.y,cr.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)cr.fromBufferAttribute(this,n),cr.applyMatrix4(t),this.setXYZ(n,cr.x,cr.y,cr.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)cr.fromBufferAttribute(this,n),cr.applyNormalMatrix(t),this.setXYZ(n,cr.x,cr.y,cr.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)cr.fromBufferAttribute(this,n),cr.transformDirection(t),this.setXYZ(n,cr.x,cr.y,cr.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Tt(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Et(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Tt(n,this.array)),n}setX(t,n){return this.normalized&&(n=Et(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Tt(n,this.array)),n}setY(t,n){return this.normalized&&(n=Et(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Tt(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Et(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Tt(n,this.array)),n}setW(t,n){return this.normalized&&(n=Et(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,i){return t*=this.itemSize,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=i,this}setXYZW(t,n,r,i,a){return t*=this.itemSize,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array),a=Et(a,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:`dispose`})}},fr=class extends dr{constructor(t,n,r){super(new Uint16Array(t),n,r)}},pr=class extends dr{constructor(t,n,r){super(new Uint32Array(t),n,r)}},mr=class extends dr{constructor(t,n,r){super(new Float32Array(t),n,r)}},hr=new qn,gr=new G,_r=new G,vr=class{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let r=this.center;n===void 0?hr.setFromPoints(t).getCenter(r):r.copy(n);let i=0;for(let n=0,a=t.length;n<a;n++)i=Math.max(i,r.distanceToSquared(t[n]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius*=t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let n=gr.lengthSq();if(n>this.radius*this.radius){let t=Math.sqrt(n),r=(t-this.radius)*.5;this.center.addScaledVector(gr,r/t),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(_r)),this.expandByPoint(gr.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yr=0,br=new J,xr=new Cn,Sr=new G,Cr=new qn,wr=new qn,Tr=new G,Er=class t extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=H(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return this.index=Array.isArray(t)?new(Ke(t)?pr:fr)(t,1):t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new K().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return br.makeRotationFromQuaternion(t),this.applyMatrix4(br),this}rotateX(t){return br.makeRotationX(t),this.applyMatrix4(br),this}rotateY(t){return br.makeRotationY(t),this.applyMatrix4(br),this}rotateZ(t){return br.makeRotationZ(t),this.applyMatrix4(br),this}translate(t,n,r){return br.makeTranslation(t,n,r),this.applyMatrix4(br),this}scale(t,n,r){return br.makeScale(t,n,r),this.applyMatrix4(br),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){let n=this.getAttribute(`position`);if(n===void 0){let n=[];for(let r=0,i=t.length;r<i;r++){let i=t[r];n.push(i.x,i.y,i.z||0)}this.setAttribute(`position`,new mr(n,3))}else{let r=Math.min(t.length,n.count);for(let i=0;i<r;i++){let r=t[i];n.setXYZ(i,r.x,r.y,r.z||0)}t.length>n.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let t=0,r=n.length;t<r;t++){let r=n[t];Cr.setFromBufferAttribute(r),this.morphTargetsRelative?(Tr.addVectors(this.boundingBox.min,Cr.min),this.boundingBox.expandByPoint(Tr),Tr.addVectors(this.boundingBox.max,Cr.max),this.boundingBox.expandByPoint(Tr)):(this.boundingBox.expandByPoint(Cr.min),this.boundingBox.expandByPoint(Cr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(t){let r=this.boundingSphere.center;if(Cr.setFromBufferAttribute(t),n)for(let t=0,r=n.length;t<r;t++){let r=n[t];wr.setFromBufferAttribute(r),this.morphTargetsRelative?(Tr.addVectors(Cr.min,wr.min),Cr.expandByPoint(Tr),Tr.addVectors(Cr.max,wr.max),Cr.expandByPoint(Tr)):(Cr.expandByPoint(wr.min),Cr.expandByPoint(wr.max))}Cr.getCenter(r);let i=0;for(let n=0,a=t.count;n<a;n++)Tr.fromBufferAttribute(t,n),i=Math.max(i,r.distanceToSquared(Tr));if(n)for(let a=0,o=n.length;a<o;a++){let o=n[a],s=this.morphTargetsRelative;for(let n=0,a=o.count;n<a;n++)Tr.fromBufferAttribute(o,n),s&&(Sr.fromBufferAttribute(t,n),Tr.add(Sr)),i=Math.max(i,r.distanceToSquared(Tr))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let r=n.position,i=n.normal,a=n.uv,o=this.getAttribute(`tangent`);(o===void 0||o.count!==r.count)&&(o=new dr(new Float32Array(4*r.count),4),this.setAttribute(`tangent`,o));let s=[],c=[];for(let t=0;t<r.count;t++)s[t]=new G,c[t]=new G;let l=new G,u=new G,d=new G,f=new W,p=new W,m=new W,h=new G,g=new G;function _(t,n,i){l.fromBufferAttribute(r,t),u.fromBufferAttribute(r,n),d.fromBufferAttribute(r,i),f.fromBufferAttribute(a,t),p.fromBufferAttribute(a,n),m.fromBufferAttribute(a,i),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let o=1/(p.x*m.y-m.x*p.y);isFinite(o)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(o),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(o),s[t].add(h),s[n].add(h),s[i].add(h),c[t].add(g),c[n].add(g),c[i].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let n=0,r=v.length;n<r;++n){let r=v[n],i=r.start,a=r.count;for(let n=i,r=i+a;n<r;n+=3)_(t.getX(n+0),t.getX(n+1),t.getX(n+2))}let y=new G,b=new G,x=new G,S=new G;function C(t){x.fromBufferAttribute(i,t),S.copy(x);let n=s[t];y.copy(n),y.sub(x.multiplyScalar(x.dot(n))).normalize(),b.crossVectors(S,n);let r=b.dot(c[t])<0?-1:1;o.setXYZW(t,y.x,y.y,y.z,r)}for(let n=0,r=v.length;n<r;++n){let r=v[n],i=r.start,a=r.count;for(let n=i,r=i+a;n<r;n+=3)C(t.getX(n+0)),C(t.getX(n+1)),C(t.getX(n+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute(`position`);if(n!==void 0){let r=this.getAttribute(`normal`);if(r===void 0||r.count!==n.count)r=new dr(new Float32Array(n.count*3),3),this.setAttribute(`normal`,r);else for(let t=0,n=r.count;t<n;t++)r.setXYZ(t,0,0,0);let i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G,d=new G;if(t)for(let f=0,p=t.count;f<p;f+=3){let p=t.getX(f+0),m=t.getX(f+1),h=t.getX(f+2);i.fromBufferAttribute(n,p),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,h),u.subVectors(o,a),d.subVectors(i,a),u.cross(d),s.fromBufferAttribute(r,p),c.fromBufferAttribute(r,m),l.fromBufferAttribute(r,h),s.add(u),c.add(u),l.add(u),r.setXYZ(p,s.x,s.y,s.z),r.setXYZ(m,c.x,c.y,c.z),r.setXYZ(h,l.x,l.y,l.z)}else for(let t=0,s=n.count;t<s;t+=3)i.fromBufferAttribute(n,t+0),a.fromBufferAttribute(n,t+1),o.fromBufferAttribute(n,t+2),u.subVectors(o,a),d.subVectors(i,a),u.cross(d),r.setXYZ(t+0,u.x,u.y,u.z),r.setXYZ(t+1,u.x,u.y,u.z),r.setXYZ(t+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Tr.fromBufferAttribute(t,n),Tr.normalize(),t.setXYZ(n,Tr.x,Tr.y,Tr.z)}toNonIndexed(){function n(t,n){let r=t.array,i=t.itemSize,a=t.normalized,o=new r.constructor(n.length*i),s=0,c=0;for(let a=0,l=n.length;a<l;a++){s=t.isInterleavedBufferAttribute?n[a]*t.data.stride+t.offset:n[a]*i;for(let t=0;t<i;t++)o[c++]=r[s++]}return new dr(o,i,a)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let r=new t,i=this.index.array,a=this.attributes;for(let t in a){let o=a[t],s=n(o,i);r.setAttribute(t,s)}let o=this.morphAttributes;for(let t in o){let a=[],s=o[t];for(let t=0,r=s.length;t<r;t++){let r=s[t],o=n(r,i);a.push(o)}r.morphAttributes[t]=a}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let t=0,n=s.length;t<n;t++){let n=s[t];r.addGroup(n.start,n.count,n.materialIndex)}return r}toJSON(){let t={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let n=this.parameters;for(let r in n)n[r]!==void 0&&(t[r]=n[r]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let r=this.attributes;for(let n in r){let i=r[n];t.data.attributes[n]=i.toJSON(t.data)}let i={},a=!1;for(let n in this.morphAttributes){let r=this.morphAttributes[n],o=[];for(let n=0,i=r.length;n<i;n++){let i=r[n];o.push(i.toJSON(t.data))}o.length>0&&(i[n]=o,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(t.data.boundingSphere=s.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let i=t.attributes;for(let t in i){let r=i[t];this.setAttribute(t,r.clone(n))}let a=t.morphAttributes;for(let t in a){let r=[],i=a[t];for(let t=0,a=i.length;t<a;t++)r.push(i[t].clone(n));this.morphAttributes[t]=r}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let t=0,n=o.length;t<n;t++){let n=o[t];this.addGroup(n.start,n.count,n.materialIndex)}let s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t===void 0?0:t.length/n,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=H()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=n.array[r+i];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=H()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},Or=new G,kr=class t{constructor(t,n,r,i=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=t,this.itemSize=n,this.offset=r,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)Or.fromBufferAttribute(this,n),Or.applyMatrix4(t),this.setXYZ(n,Or.x,Or.y,Or.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)Or.fromBufferAttribute(this,n),Or.applyNormalMatrix(t),this.setXYZ(n,Or.x,Or.y,Or.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)Or.fromBufferAttribute(this,n),Or.transformDirection(t),this.setXYZ(n,Or.x,Or.y,Or.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Tt(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=Et(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Tt(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Tt(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Tt(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Tt(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=i,this}setXYZW(t,n,r,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array),a=Et(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(n){if(n===void 0){Ze(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new dr(new this.array.constructor(t),this.itemSize,this.normalized)}return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new t(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ze(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=new G,jr=new G,Mr=new K,Nr=class{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,i){return this.normal.set(t,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){let i=Ar.subVectors(r,n).cross(jr.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,r=!0){let i=t.delta(Ar),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/a;return r===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let r=n||Mr.getNormalMatrix(t),i=this.coplanarPoint(Ar).applyMatrix4(t),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pr=0,Fr=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=H(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let r=t[n];if(r===void 0){B(`Material: parameter '${n}' has value of undefined.`);continue}let i=this[n];i===void 0?B(`Material: '${n}' is not a property of THREE.${this.type}.`):i&&i.isColor?i.set(r):i&&i.isVector2&&r&&r.isVector2||i&&i.isEuler&&r&&r.isEuler||i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t==`string`;n&&(t={textures:{},images:{}});let r={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(t=>t.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(t){let n=[];for(let r in t){let i=t[r];delete i.metadata,n.push(i)}return n}if(n){let n=i(t.textures),a=i(t.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(t=>new Nr().fromJSON(t))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(this.vertexColors=typeof t.vertexColors==`number`?t.vertexColors>0:t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new W().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,r=null;if(n!==null){let t=n.length;r=Array(t);for(let i=0;i!==t;++i)r[i]=n[i].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(t){t===!0&&this.version++}},Ir=new G,Lr=new G,Rr=new G,zr=new G,Br=class{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ir)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ir.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ir.copy(this.origin).addScaledVector(this.direction,n),Ir.distanceToSquared(t))}distanceSqToSegment(t,n,r,i){Lr.copy(t).add(n).multiplyScalar(.5),Rr.copy(n).sub(t).normalize(),zr.copy(this.origin).sub(Lr);let a=t.distanceTo(n)*.5,o=-this.direction.dot(Rr),s=zr.dot(this.direction),c=-zr.dot(Rr),l=zr.lengthSq(),u=Math.abs(1-o*o),d,f,p,m;if(u>0){if(d=o*c-s,f=o*s-c,m=a*u,d>=0){if(f>=-m){if(f<=m){let t=1/u;d*=t,f*=t,p=d*(d+o*f+2*s)+f*(o*d+f+2*c)+l}else f=a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l}else f=-a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l}else f<=-m?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l)}else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lr).addScaledVector(Rr,f),p}intersectSphere(t,n){if(t.radius<0)return null;Ir.subVectors(t.center,this.origin);let r=Ir.dot(this.direction),i=Ir.dot(Ir)-r*r,a=t.radius*t.radius;if(i>a)return null;let o=Math.sqrt(a-i),s=r-o,c=r+o;return c<0?null:s<0?this.at(c,n):this.at(s,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){let r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,i,a,o,s,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(r=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(r=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(a=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),r>o||a>i||((a>r||isNaN(r))&&(r=a),(o<i||isNaN(i))&&(i=o),d>=0?(s=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(s=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),r>c||s>i)||((s>r||r!==r)&&(r=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(t){return this.intersectBox(t,Ir)!==null}intersectTriangle(t,n,r,i,a){let o=this.origin,s=this.direction,c=s.x,l=s.y,u=s.z,d=t.x-o.x,f=t.y-o.y,p=t.z-o.z,m=n.x-o.x,h=n.y-o.y,g=n.z-o.z,_=r.x-o.x,v=r.y-o.y,y=r.z-o.z,b=Math.abs(c),x=Math.abs(l),S=Math.abs(u),C,w,T,E,D,O,k,ee,A,te,ne,re;if(b>=x&&b>=S?(T=c,O=d,A=m,re=_,c>=0?(C=l,w=u,E=f,D=p,k=h,ee=g,te=v,ne=y):(C=u,w=l,E=p,D=f,k=g,ee=h,te=y,ne=v)):x>=S?(T=l,O=f,A=h,re=v,l>=0?(C=u,w=c,E=p,D=d,k=g,ee=m,te=y,ne=_):(C=c,w=u,E=d,D=p,k=m,ee=g,te=_,ne=y)):(T=u,O=p,A=g,re=y,u>=0?(C=c,w=l,E=d,D=f,k=m,ee=h,te=_,ne=v):(C=l,w=c,E=f,D=d,k=h,ee=m,te=v,ne=_)),T===0)return null;let j=C/T,M=w/T,N=1/T,ie=E-j*O,P=D-M*O,ae=k-j*A,oe=ee-M*A,se=te-j*re,ce=ne-M*re,le=se*oe-ce*ae,F=ie*ce-P*se,ue=ae*P-oe*ie;if(i){if(le<0||F<0||ue<0)return null}else if((le<0||F<0||ue<0)&&(le>0||F>0||ue>0))return null;let de=le+F+ue;if(de===0)return null;let fe=N*(le*O+F*A+ue*re);return(de>0?fe<0:fe>0)?null:this.at(fe/de,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vr=class extends Fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hr=new J,Ur=new Br,Wr=new vr,Gr=new G,Kr=new G,qr=new G,Jr=new G,Yr=new G,Xr=new G,Zr=new G,Qr=new G,$r=class extends Cn{constructor(t=new Er,n=new Vr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=r.length;t<n;t++){let n=r[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}getVertexPosition(t,n){let r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,t);let s=this.morphTargetInfluences;if(a&&s){Xr.set(0,0,0);for(let r=0,i=a.length;r<i;r++){let i=s[r],c=a[r];i!==0&&(Yr.fromBufferAttribute(c,t),o?Xr.addScaledVector(Yr,i):Xr.addScaledVector(Yr.sub(n),i))}n.add(Xr)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wr.copy(r.boundingSphere),Wr.applyMatrix4(a),Ur.copy(t.ray).recast(t.near),!(Wr.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Wr,Gr)===null||Ur.origin.distanceToSquared(Gr)>(t.far-t.near)**2))&&(Hr.copy(a).invert(),Ur.copy(t.ray).applyMatrix4(Hr),(r.boundingBox===null||Ur.intersectsBox(r.boundingBox)!==!1)&&this._computeIntersections(t,n,Ur)))}_computeIntersections(t,n,r){let i,a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(s!==null){if(Array.isArray(o))for(let a=0,c=f.length;a<c;a++){let c=f[a],m=o[c.materialIndex],h=Math.max(c.start,p.start),g=Math.min(s.count,Math.min(c.start+c.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=s.getX(a),f=s.getX(a+1),p=s.getX(a+2);i=ti(this,m,t,r,l,u,d,o,f,p),i&&(i.faceIndex=Math.floor(a/3),i.face.materialIndex=c.materialIndex,n.push(i))}}else{let a=Math.max(0,p.start),c=Math.min(s.count,p.start+p.count);for(let f=a,p=c;f<p;f+=3){let a=s.getX(f),c=s.getX(f+1),p=s.getX(f+2);i=ti(this,o,t,r,l,u,d,a,c,p),i&&(i.faceIndex=Math.floor(f/3),n.push(i))}}}else if(c!==void 0){if(Array.isArray(o))for(let a=0,s=f.length;a<s;a++){let s=f[a],m=o[s.materialIndex],h=Math.max(s.start,p.start),g=Math.min(c.count,Math.min(s.start+s.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=a,c=a+1,f=a+2;i=ti(this,m,t,r,l,u,d,o,c,f),i&&(i.faceIndex=Math.floor(a/3),i.face.materialIndex=s.materialIndex,n.push(i))}}else{let a=Math.max(0,p.start),s=Math.min(c.count,p.start+p.count);for(let c=a,f=s;c<f;c+=3){let a=c,s=c+1,f=c+2;i=ti(this,o,t,r,l,u,d,a,s,f),i&&(i.faceIndex=Math.floor(c/3),n.push(i))}}}}};function ei(t,n,r,i,a,o,s,c){let l;if(l=n.side===1?i.intersectTriangle(s,o,a,!0,c):i.intersectTriangle(a,o,s,n.side===0,c),l===null)return null;Qr.copy(c),Qr.applyMatrix4(t.matrixWorld);let u=r.ray.origin.distanceTo(Qr);return u<r.near||u>r.far?null:{distance:u,point:Qr.clone(),object:t}}function ti(t,n,r,i,a,o,s,c,l,u){t.getVertexPosition(c,Kr),t.getVertexPosition(l,qr),t.getVertexPosition(u,Jr);let d=ei(t,n,r,i,Kr,qr,Jr,Zr);if(d){let t=new G;Kn.getBarycoord(Zr,Kr,qr,Jr,t),a&&(d.uv=Kn.getInterpolatedAttribute(a,c,l,u,t,new W)),o&&(d.uv1=Kn.getInterpolatedAttribute(o,c,l,u,t,new W)),s&&(d.normal=Kn.getInterpolatedAttribute(s,c,l,u,t,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let n={a:c,b:l,c:u,normal:new G,materialIndex:0};Kn.getNormal(Kr,qr,Jr,n.normal),d.face=n,d.barycoord=t}return d}var ni=new Gt,ri=new Gt,ii=new Gt,ai=new Gt,oi=new J,si=new G,ci=new vr,li=new J,ui=new Br,di=class extends $r{constructor(n,r){super(n,r),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=t,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();let n=t.getAttribute(`position`);for(let t=0;t<n.count;t++)this.getVertexPosition(t,si),this.boundingBox.expandByPoint(si)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vr),this.boundingSphere.makeEmpty();let n=t.getAttribute(`position`);for(let t=0;t<n.count;t++)this.getVertexPosition(t,si),this.boundingSphere.expandByPoint(si)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){let r=this.material,i=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(i),t.ray.intersectsSphere(ci)!==!1&&(li.copy(i).invert(),ui.copy(t.ray).applyMatrix4(li),(this.boundingBox===null||ui.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(t,n,ui)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Gt,n=this.geometry.attributes.skinWeight;for(let r=0,i=n.count;r<i;r++){t.fromBufferAttribute(n,r);let i=1/t.manhattanLength();i===1/0?t.set(1,0,0,0):t.multiplyScalar(i),n.setXYZW(r,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():B(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(t,n){let r=this.skeleton,i=this.geometry;ri.fromBufferAttribute(i.attributes.skinIndex,t),ii.fromBufferAttribute(i.attributes.skinWeight,t),n.isVector4?(ni.copy(n),n.set(0,0,0,0)):(ni.set(...n,1),n.set(0,0,0)),ni.applyMatrix4(this.bindMatrix);for(let t=0;t<4;t++){let i=ii.getComponent(t);if(i!==0){let a=ri.getComponent(t);oi.multiplyMatrices(r.bones[a].matrixWorld,r.boneInverses[a]),n.addScaledVector(ai.copy(ni).applyMatrix4(oi),i)}}return n.isVector4&&(n.w=ni.w),n.applyMatrix4(this.bindMatrixInverse)}},fi=class extends Cn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},pi=class extends Wt{constructor(t=null,n=1,r=1,i,o,s,c,l,u=a,d=a,f,p){super(null,s,c,l,u,d,i,o,f,p),this.isDataTexture=!0,this.image={data:t,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mi=new J,hi=new J,gi=class t{constructor(t=[],n=[]){this.uuid=H(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){B(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let t=0,n=this.bones.length;t<n;t++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){let n=new J;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,n=this.boneInverses,r=this.boneMatrices,i=this.boneTexture;for(let i=0,a=t.length;i<a;i++){let a=t[i]?t[i].matrixWorld:hi;mi.multiplyMatrices(a,n[i]),mi.toArray(r,i*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let n=new Float32Array(t*t*4);n.set(this.boneMatrices);let r=new pi(n,t,t,E,_);return r.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=r,this}getBoneByName(t){for(let n=0,r=this.bones.length;n<r;n++){let r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let r=0,i=t.bones.length;r<i;r++){let i=t.bones[r],a=n[i];a===void 0&&(B(`Skeleton: No bone found with UUID:`,i),a=new fi),this.bones.push(a),this.boneInverses.push(new J().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};t.uuid=this.uuid;let n=this.bones,r=this.boneInverses;for(let i=0,a=n.length;i<a;i++){let a=n[i];t.bones.push(a.uuid);let o=r[i];t.boneInverses.push(o.toArray())}return t}},_i=class extends dr{constructor(t,n,r,i=1){super(t,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vi=new J,yi=new J,bi=[],xi=new qn,Si=new J,Ci=new $r,wi=new vr,Ti=class extends $r{constructor(t,n,r){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<r;t++)this.setMatrixAt(t,Si)}computeBoundingBox(){let t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,vi),xi.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(xi)}computeBoundingSphere(){let t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new vr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,vi),wi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(wi)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){let r=n.morphTargetInfluences,i=this.morphTexture.source.data.data,a=t*(r.length+1)+1;for(let t=0;t<r.length;t++)r[t]=i[a+t]}raycast(t,n){let r=this.matrixWorld,i=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wi.copy(this.boundingSphere),wi.applyMatrix4(r),t.ray.intersectsSphere(wi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,vi),yi.multiplyMatrices(r,vi),Ci.matrixWorld=yi,Ci.raycast(t,bi);for(let t=0,r=bi.length;t<r;t++){let r=bi[t];r.instanceId=a,r.object=this,n.push(r)}bi.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){let r=n.morphTargetInfluences,i=r.length+1;this.morphTexture===null&&(this.morphTexture=new pi(new Float32Array(i*this.count),i,this.count,k,_));let a=this.morphTexture.source.data.data,o=0;for(let t=0;t<r.length;t++)o+=r[t];let s=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return a[c]=s,a.set(r,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new vr,Di=new W(.5,.5),Oi=new G,ki=class{constructor(t=new Nr,n=new Nr,r=new Nr,i=new Nr,a=new Nr,o=new Nr){this.planes=[t,n,r,i,a,o]}set(t,n,r,i,a,o){let s=this.planes;return s[0].copy(t),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(a),s[5].copy(o),this}copy(t){let n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=Ge,r=!1){let i=this.planes,a=t.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],p=a[7],m=a[8],h=a[9],g=a[10],_=a[11],v=a[12],y=a[13],b=a[14],x=a[15];if(i[0].setComponents(l-o,p-u,_-m,x-v).normalize(),i[1].setComponents(l+o,p+u,_+m,x+v).normalize(),i[2].setComponents(l+s,p+d,_+h,x+y).normalize(),i[3].setComponents(l-s,p-d,_-h,x-y).normalize(),r)i[4].setComponents(c,f,g,b).normalize(),i[5].setComponents(l-c,p-f,_-g,x-b).normalize();else if(i[4].setComponents(l-c,p-f,_-g,x-b).normalize(),n===2e3)i[5].setComponents(l+c,p+f,_+g,x+b).normalize();else if(n===2001)i[5].setComponents(c,f,g,b).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476+Di.distanceTo(t.center),Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let n=this.planes,r=t.center,i=-t.radius;for(let t=0;t<6;t++)if(n[t].distanceToPoint(r)<i)return!1;return!0}intersectsBox(t){let n=this.planes;for(let r=0;r<6;r++){let i=n[r];if(Oi.x=i.normal.x>0?t.max.x:t.min.x,Oi.y=i.normal.y>0?t.max.y:t.min.y,Oi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ai=class extends Fr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ji=new G,Mi=new G,Ni=new J,Pi=new Br,Fi=new vr,Ii=new G,Li=new G,Ri=class extends Cn{constructor(t=new Er,n=new Ai){super(),this.isLine=!0,this.type=`Line`,this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,r=[0];for(let t=1,i=n.count;t<i;t++)ji.fromBufferAttribute(n,t-1),Mi.fromBufferAttribute(n,t),r[t]=r[t-1],r[t]+=ji.distanceTo(Mi);t.setAttribute(`lineDistance`,new mr(r,1))}else B(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let r=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fi.copy(r.boundingSphere),Fi.applyMatrix4(i),Fi.radius+=a,t.ray.intersectsSphere(Fi)===!1)return;Ni.copy(i).invert(),Pi.copy(t.ray).applyMatrix4(Ni);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,u=r.index,d=r.attributes.position;if(u!==null){let r=Math.max(0,o.start),i=Math.min(u.count,o.start+o.count);for(let a=r,o=i-1;a<o;a+=l){let r=u.getX(a),i=u.getX(a+1),o=zi(this,t,Pi,c,r,i,a);o&&n.push(o)}if(this.isLineLoop){let a=u.getX(i-1),o=u.getX(r),s=zi(this,t,Pi,c,a,o,i-1);s&&n.push(s)}}else{let r=Math.max(0,o.start),i=Math.min(d.count,o.start+o.count);for(let a=r,o=i-1;a<o;a+=l){let r=zi(this,t,Pi,c,a,a+1,a);r&&n.push(r)}if(this.isLineLoop){let a=zi(this,t,Pi,c,i-1,r,i-1);a&&n.push(a)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=r.length;t<n;t++){let n=r[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}};function zi(t,n,r,i,a,o,s){let c=t.geometry.attributes.position;if(ji.fromBufferAttribute(c,a),Mi.fromBufferAttribute(c,o),r.distanceSqToSegment(ji,Mi,Ii,Li)>i)return;Ii.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Ii);if(!(l<n.near||l>n.far))return{distance:l,point:Li.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}var Bi=new G,Vi=new G,Hi=class extends Ri{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,r=[];for(let t=0,i=n.count;t<i;t+=2)Bi.fromBufferAttribute(n,t),Vi.fromBufferAttribute(n,t+1),r[t]=t===0?0:r[t-1],r[t+1]=r[t]+Bi.distanceTo(Vi);t.setAttribute(`lineDistance`,new mr(r,1))}else B(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ui=class extends Ri{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type=`LineLoop`}},Wi=class extends Fr{constructor(t){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gi=new J,Ki=new Br,qi=new vr,Ji=new G,Yi=class extends Cn{constructor(t=new Er,n=new Wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let r=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,o=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qi.copy(r.boundingSphere),qi.applyMatrix4(i),qi.radius+=a,t.ray.intersectsSphere(qi)===!1)return;Gi.copy(i).invert(),Ki.copy(t.ray).applyMatrix4(Gi);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=r.index,u=r.attributes.position;if(l!==null){let r=Math.max(0,o.start),a=Math.min(l.count,o.start+o.count);for(let o=r,s=a;o<s;o++){let r=l.getX(o);Ji.fromBufferAttribute(u,r),Xi(Ji,r,c,i,t,n,this)}}else{let r=Math.max(0,o.start),a=Math.min(u.count,o.start+o.count);for(let o=r,s=a;o<s;o++)Ji.fromBufferAttribute(u,o),Xi(Ji,o,c,i,t,n,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=r.length;t<n;t++){let n=r[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}};function Xi(t,n,r,i,a,o,s){let c=Ki.distanceSqToPoint(t);if(c<r){let r=new G;Ki.closestPointToPoint(t,r),r.applyMatrix4(i);let l=a.ray.origin.distanceTo(r);if(l<a.near||l>a.far)return;o.push({distance:l,distanceToRay:Math.sqrt(c),point:r,index:n,face:null,faceIndex:null,barycoord:null,object:s})}}var Zi=class extends Wt{constructor(t=[],n=301,r,i,a,o,s,c,l,u){super(t,n,r,i,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qi=class extends Wt{constructor(t,n,r=g,i,o,s,c=a,l=a,u,d=D,f=1){if(d!==1026&&d!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:t,height:n,depth:f},i,o,s,c,l,d,r,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bt(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},$i=class extends Qi{constructor(t,n=g,r=301,i,o,s=a,c=a,l,u=D){let d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,n,r,i,o,s,c,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ea=class extends Wt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ta=class t extends Er{constructor(t=1,n=1,r=1,i=1,a=1,o=1){super(),this.type=`BoxGeometry`,this.parameters={width:t,height:n,depth:r,widthSegments:i,heightSegments:a,depthSegments:o};let s=this;i=Math.floor(i),a=Math.floor(a),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;m(`z`,`y`,`x`,-1,-1,r,n,t,o,a,0),m(`z`,`y`,`x`,1,-1,r,n,-t,o,a,1),m(`x`,`z`,`y`,1,1,t,r,n,i,o,2),m(`x`,`z`,`y`,1,-1,t,r,-n,i,o,3),m(`x`,`y`,`z`,1,-1,t,n,r,i,a,4),m(`x`,`y`,`z`,-1,-1,t,n,-r,i,a,5),this.setIndex(c),this.setAttribute(`position`,new mr(l,3)),this.setAttribute(`normal`,new mr(u,3)),this.setAttribute(`uv`,new mr(d,2));function m(t,n,r,i,a,o,m,h,g,_,v){let y=o/g,b=m/_,x=o/2,S=m/2,C=h/2,w=g+1,T=_+1,E=0,D=0,O=new G;for(let o=0;o<T;o++){let s=o*b-S;for(let c=0;c<w;c++)O[t]=(c*y-x)*i,O[n]=s*a,O[r]=C,l.push(O.x,O.y,O.z),O[t]=0,O[n]=0,O[r]=h>0?1:-1,u.push(O.x,O.y,O.z),d.push(c/g),d.push(1-o/_),E+=1}for(let t=0;t<_;t++)for(let n=0;n<g;n++){let r=f+n+w*t,i=f+n+w*(t+1),a=f+(n+1)+w*(t+1),o=f+(n+1)+w*t;c.push(r,i,o),c.push(i,a,o),D+=6}s.addGroup(p,D,v),p+=D,f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(n){return new t(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}},na=class t extends Er{constructor(t=1,n=1,r=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:t,height:n,widthSegments:r,heightSegments:i};let a=t/2,o=n/2,s=Math.floor(r),c=Math.floor(i),l=s+1,u=c+1,d=t/s,f=n/c,p=[],m=[],h=[],g=[];for(let t=0;t<u;t++){let n=t*f-o;for(let r=0;r<l;r++){let i=r*d-a;m.push(i,-n,0),h.push(0,0,1),g.push(r/s),g.push(1-t/c)}}for(let t=0;t<c;t++)for(let n=0;n<s;n++){let r=n+l*t,i=n+l*(t+1),a=n+1+l*(t+1),o=n+1+l*t;p.push(r,i,o),p.push(i,a,o)}this.setIndex(p),this.setAttribute(`position`,new mr(m,3)),this.setAttribute(`normal`,new mr(h,3)),this.setAttribute(`uv`,new mr(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(n){return new t(n.width,n.height,n.widthSegments,n.heightSegments)}};function ra(t){let n={};for(let r in t){n[r]={};for(let i in t[r]){let a=t[r][i];if(aa(a))a.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),n[r][i]=null):n[r][i]=a.clone();else if(Array.isArray(a)){if(aa(a[0])){let t=[];for(let n=0,r=a.length;n<r;n++)t[n]=a[n].clone();n[r][i]=t}else n[r][i]=a.slice()}else n[r][i]=a}}return n}function ia(t){let n={};for(let r=0;r<t.length;r++){let i=ra(t[r]);for(let t in i)n[t]=i[t]}return n}function aa(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function oa(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n}function sa(t){let n=t.getRenderTarget();return n===null?t.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:q.workingColorSpace}var ca={clone:ra,merge:ia},la=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ua=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,da=class extends Fr{constructor(t){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=la,this.fragmentShader=ua,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ra(t.uniforms),this.uniformsGroups=oa(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let i=this.uniforms[r].value;i&&i.isTexture?n.uniforms[r]={type:`t`,value:i.toJSON(t).uuid}:i&&i.isColor?n.uniforms[r]={type:`c`,value:i.getHex()}:i&&i.isVector2?n.uniforms[r]={type:`v2`,value:i.toArray()}:i&&i.isVector3?n.uniforms[r]={type:`v3`,value:i.toArray()}:i&&i.isVector4?n.uniforms[r]={type:`v4`,value:i.toArray()}:i&&i.isMatrix3?n.uniforms[r]={type:`m3`,value:i.toArray()}:i&&i.isMatrix4?n.uniforms[r]={type:`m4`,value:i.toArray()}:n.uniforms[r]={value:i}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let r={};for(let t in this.extensions)this.extensions[t]===!0&&(r[t]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let r in t.uniforms){let i=t.uniforms[r];switch(this.uniforms[r]={},i.type){case`t`:this.uniforms[r].value=n[i.value]||null;break;case`c`:this.uniforms[r].value=new Y().setHex(i.value);break;case`v2`:this.uniforms[r].value=new W().fromArray(i.value);break;case`v3`:this.uniforms[r].value=new G().fromArray(i.value);break;case`v4`:this.uniforms[r].value=new Gt().fromArray(i.value);break;case`m3`:this.uniforms[r].value=new K().fromArray(i.value);break;case`m4`:this.uniforms[r].value=new J().fromArray(i.value);break;default:this.uniforms[r].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},pa=class extends Fr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:``},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ma=class extends pa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return U(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},ha=class extends Fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ga=class extends Fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(t,n){return!t||t.constructor===n?t:typeof n.BYTES_PER_ELEMENT==`number`?new n(t):Array.prototype.slice.call(t)}function va(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function ya(t){function n(n,r){return t[n]-t[r]}let r=t.length,i=Array(r);for(let t=0;t!==r;++t)i[t]=t;return i.sort(n),i}function ba(t,n,r){let i=t.length,a=new t.constructor(i);for(let o=0,s=0;s!==i;++o){let i=r[o]*n;for(let r=0;r!==n;++r)a[s++]=t[i+r]}return a}function xa(t,n,r,i){let a=1,o=t[0];for(;o!==void 0&&o[i]===void 0;)o=t[a++];if(o===void 0)return;let s=o[i];if(s!==void 0){if(Array.isArray(s))do s=o[i],s!==void 0&&(n.push(o.time),r.push(...s)),o=t[a++];while(o!==void 0);else if(s.toArray!==void 0)do s=o[i],s!==void 0&&(n.push(o.time),s.toArray(r,r.length)),o=t[a++];while(o!==void 0);else do s=o[i],s!==void 0&&(n.push(o.time),r.push(s)),o=t[a++];while(o!==void 0)}}var Sa=class{constructor(t,n,r,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i===void 0?new n.constructor(r):i,this.sampleValues=n,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,r=this._cachedIndex,i=n[r],a=n[r-1];validate_interval:{seek:{let o;linear_scan:{forward_scan:if(!(t<i)){for(let o=r+2;;){if(i===void 0){if(t<a)break forward_scan;return r=n.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(a=i,i=n[++r],t<i)break seek}o=n.length;break linear_scan}if(!(t>=a)){let s=n[1];t<s&&(r=2,a=s);for(let o=r-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(i=a,a=n[--r-1],t>=a)break seek}o=r,r=0;break linear_scan}break validate_interval}for(;r<o;){let i=r+o>>>1;t<n[i]?o=i:r=i+1}if(i=n[r],a=n[r-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return r=n.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,a,i)}return this.interpolate_(r,a,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=t*i;for(let t=0;t!==i;++t)n[t]=r[a+t];return n}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ca=class extends Sa{constructor(t,n,r,i){super(t,n,r,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(t,n,r){let i=this.parameterPositions,a=t-2,o=t+1,s=i[a],c=i[o];if(s===void 0)switch(this.getSettings_().endingStart){case Le:a=t,s=2*n-r;break;case R:a=i.length-2,s=n+i[a]-i[a+1];break;default:a=t,s=r}if(c===void 0)switch(this.getSettings_().endingEnd){case Le:o=t,c=2*r-n;break;case R:o=1,c=r+i[1]-i[0];break;default:o=t-1,c=n}let l=(r-n)*.5,u=this.valueSize;this._weightPrev=l/(n-s),this._weightNext=l/(c-r),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(t,n,r,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=t*s,l=c-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(r-n)/(i-n),h=m*m,g=h*m,_=-f*g+2*f*h-f*m,v=(1+f)*g+(-1.5-2*f)*h+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*h+.5*m,b=p*g-p*h;for(let t=0;t!==s;++t)a[t]=_*o[u+t]+v*o[l+t]+y*o[c+t]+b*o[d+t];return a}},wa=class extends Sa{constructor(t,n,r,i){super(t,n,r,i)}interpolate_(t,n,r,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=t*s,l=c-s,u=(r-n)/(i-n),d=1-u;for(let t=0;t!==s;++t)a[t]=o[l+t]*d+o[c+t]*u;return a}},Ta=class extends Sa{constructor(t,n,r,i){super(t,n,r,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends Sa{interpolate_(t,n,r,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=t*s,l=c-s,u=this.inTangents,d=this.outTangents;if(!u||!d){let t=(r-n)/(i-n),u=1-t;for(let n=0;n!==s;++n)a[n]=o[l+n]*u+o[c+n]*t;return a}let f=s*2,p=t-1;for(let m=0;m!==s;++m){let s=o[l+m],h=o[c+m],g=p*f+m*2,_=d[g],v=d[g+1],y=t*f+m*2,b=u[y],x=u[y+1],S=ka(r,n,_,b,i);a[m]=Da(S,s,v,x,h)}return a}};function Da(t,n,r,i,a){let o=1-t;return o*o*o*n+3*o*o*t*r+3*o*t*t*i+t*t*t*a}function Oa(t,n,r,i,a){let o=1-t;return 3*o*o*(r-n)+6*o*t*(i-r)+3*t*t*(a-i)}function ka(t,n,r,i,a){let o=(t-n)/(a-n);for(let s=0;s<8;s++){let s=Da(o,n,r,i,a)-t;if(Math.abs(s)<1e-10)break;let c=Oa(o,n,r,i,a);if(Math.abs(c)<1e-10)break;o=Math.max(0,Math.min(1,o-s/c))}return o}var Aa=class{constructor(t,n,r,i){if(t===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(n===void 0||n.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+t);this.name=t,this.times=_a(n,this.TimeBufferType),this.values=_a(r,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,r;if(n.toJSON!==this.toJSON)r=n.toJSON(t);else{r={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(r.interpolation=n),va(t.settings)&&(r.settings={inTangents:_a(t.settings.inTangents,Array),outTangents:_a(t.settings.outTangents,Array)})}return r.type=t.ValueTypeName,r}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case I:n=this.InterpolantFactoryMethodDiscrete;break;case Pe:n=this.InterpolantFactoryMethodLinear;break;case Fe:n=this.InterpolantFactoryMethodSmooth;break;case Ie:n=this.InterpolantFactoryMethodBezier}if(n===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n)}return B(`KeyframeTrack:`,n),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return I;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Fe;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let r=0,i=n.length;r!==i;++r)n[r]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let r=0,i=n.length;r!==i;++r)n[r]*=t;va(this.settings)&&(ja(this.settings.inTangents,t),ja(this.settings.outTangents,t))}return this}trim(t,n){let r=this.times,i=r.length,a=0,o=i-1;for(;a!==i&&r[a]<t;)++a;for(;o!==-1&&r[o]>n;)--o;if(++o,a!==0||o!==i){a>=o&&(o=Math.max(o,1),a=o-1);let t=this.getValueSize();this.times=r.slice(a,o),this.values=this.values.slice(a*t,o*t)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),t=!1);let r=this.times,i=this.values,a=r.length;a===0&&(V(`KeyframeTrack: Track is empty.`,this),t=!1);let o=null;for(let n=0;n!==a;n++){let i=r[n];if(typeof i==`number`&&isNaN(i)){V(`KeyframeTrack: Time is not a valid number.`,this,n,i),t=!1;break}if(o!==null&&o>i){V(`KeyframeTrack: Out of order keys.`,this,n,i,o),t=!1;break}o=i}if(i!==void 0&&qe(i))for(let n=0,r=i.length;n!==r;++n){let r=i[n];if(isNaN(r)){V(`KeyframeTrack: Value is not a valid number.`,this,n,r),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),r=this.getValueSize(),i=this.getInterpolation()===Fe,a=t.length-1,o=1;for(let s=1;s<a;++s){let a=!1,c=t[s];if(c!==t[s+1]&&(s!==1||c!==t[0])){if(i)a=!0;else{let t=s*r,i=t-r,o=t+r;for(let s=0;s!==r;++s){let r=n[t+s];if(r!==n[i+s]||r!==n[o+s]){a=!0;break}}}}if(a){if(s!==o){t[o]=t[s];let i=s*r,a=o*r;for(let t=0;t!==r;++t)n[a+t]=n[i+t]}++o}}if(a>0){t[o]=t[a];for(let t=a*r,i=o*r,s=0;s!==r;++s)n[i+s]=n[t+s];++o}return o===t.length?(this.times=t,this.values=n):(this.times=t.slice(0,o),this.values=n.slice(0,o*r)),this}clone(){let t=this.times.slice(),n=this.values.slice(),r=this.constructor,i=new r(this.name,t,n);return i.createInterpolant=this.createInterpolant,va(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ja(t,n){for(let r=0,i=t.length;r!==i;r+=2)t[r]*=n}Aa.prototype.ValueTypeName=``,Aa.prototype.TimeBufferType=Float32Array,Aa.prototype.ValueBufferType=Float32Array,Aa.prototype.DefaultInterpolation=Pe;var Ma=class extends Aa{constructor(t,n,r){super(t,n,r)}};Ma.prototype.ValueTypeName=`bool`,Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=I,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Aa{constructor(t,n,r,i){super(t,n,r,i)}};Na.prototype.ValueTypeName=`color`;var Pa=class extends Aa{constructor(t,n,r,i){super(t,n,r,i)}};Pa.prototype.ValueTypeName=`number`;var Fa=class extends Sa{constructor(t,n,r,i){super(t,n,r,i)}interpolate_(t,n,r,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(r-n)/(i-n),l=t*s;for(let t=l+s;l!==t;l+=4)Ot.slerpFlat(a,0,o,l-s,o,l,c);return a}},Ia=class extends Aa{constructor(t,n,r,i){super(t,n,r,i)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName=`quaternion`,Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Aa{constructor(t,n,r){super(t,n,r)}};La.prototype.ValueTypeName=`string`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=I,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Aa{constructor(t,n,r,i){super(t,n,r,i)}};Ra.prototype.ValueTypeName=`vector`;var za=class{constructor(t=``,n=-1,r=[],i=z){this.name=t,this.tracks=r,this.duration=n,this.blendMode=i,this.uuid=H(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let n=[],r=t.tracks,i=1/(t.fps||1);for(let t=0,a=r.length;t!==a;++t)n.push(Va(r[t]).scale(i));let a=new this(t.name,t.duration,n,t.blendMode);return a.uuid=t.uuid,a.userData=JSON.parse(t.userData||`{}`),a}static toJSON(t){let n=[],r=t.tracks,i={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let t=0,i=r.length;t!==i;++t)n.push(Aa.toJSON(r[t]));return i}static CreateFromMorphTargetSequence(t,n,r,i){let a=n.length,o=[];for(let t=0;t<a;t++){let s=[],c=[];s.push((t+a-1)%a,t,(t+1)%a),c.push(0,1,0);let l=ya(s);s=ba(s,1,l),c=ba(c,1,l),!i&&s[0]===0&&(s.push(a),c.push(c[0])),o.push(new Pa(`.morphTargetInfluences[`+n[t].name+`]`,s,c).scale(1/r))}return new this(t,-1,o)}static findByName(t,n){let r=t;if(!Array.isArray(t)){let n=t;r=n.geometry&&n.geometry.animations||n.animations}for(let t=0;t<r.length;t++)if(r[t].name===n)return r[t];return null}static CreateClipsFromMorphTargetSequences(t,n,r){let i={},a=/^([\w-]*?)([\d]+)$/;for(let n=0,r=t.length;n<r;n++){let r=t[n],o=r.name.match(a);if(o&&o.length>1){let t=o[1],n=i[t];n||(i[t]=n=[]),n.push(r)}}let o=[];for(let t in i)o.push(this.CreateFromMorphTargetSequence(t,i[t],n,r));return o}resetDuration(){let t=this.tracks,n=0;for(let r=0,i=t.length;r!==i;++r){let t=this.tracks[r];n=Math.max(n,t.times[t.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t&&=this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let n=new this.constructor(this.name,this.duration,t,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};function Ba(t){switch(t.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Pa;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Ra;case`color`:return Na;case`quaternion`:return Ia;case`bool`:case`boolean`:return Ma;case`string`:return La}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+t)}function Va(t){if(t.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let n=Ba(t.type);if(t.times===void 0){let n=[],r=[];xa(t.keys,n,r,`value`),t.times=n,t.values=r}let r;return r=n.parse===void 0?new n(t.name,t.times,t.values,t.interpolation):n.parse(t),va(t.settings)&&(r.settings={inTangents:_a(t.settings.inTangents,Float32Array),outTangents:_a(t.settings.outTangents,Float32Array)}),r}var Ha={enabled:!1,files:{},add:function(t,n){this.enabled!==!1&&(Ua(t)||(this.files[t]=n))},get:function(t){if(this.enabled!==!1&&!Ua(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Ua(t){try{let n=t.slice(t.indexOf(`:`)+1);return new URL(n).protocol===`blob:`}catch{return!1}}var Wa=new class{constructor(t,n,r){let i=this,a=!1,o=0,s=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(t){s++,a===!1&&i.onStart!==void 0&&i.onStart(t,o,s),a=!0},this.itemEnd=function(t){o++,i.onProgress!==void 0&&i.onProgress(t,o,s),o===s&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(t){i.onError!==void 0&&i.onError(t)},this.resolveURL=function(t){return t=t.normalize(`NFC`),c?c(t):t},this.setURLModifier=function(t){return c=t,this},this.addHandler=function(t,n){return l.push(t,n),this},this.removeHandler=function(t){let n=l.indexOf(t);return n!==-1&&l.splice(n,2),this},this.getHandler=function(t){for(let n=0,r=l.length;n<r;n+=2){let r=l[n],i=l[n+1];if(r.global&&(r.lastIndex=0),r.test(t))return i}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ga=class{constructor(t){this.manager=t===void 0?Wa:t,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(t,n){let r=this;return new Promise(function(i,a){r.load(t,i,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ka={},qa=class extends Error{constructor(t,n){super(t),this.response=n}},Ja=class extends Ga{constructor(t){super(t),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(t,n,r,i){t===void 0&&(t=``),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=Ha.get(`file:${t}`);if(a!==void 0){this.manager.itemStart(t),setTimeout(()=>{n&&n(a),this.manager.itemEnd(t)},0);return}if(Ka[t]!==void 0){Ka[t].push({onLoad:n,onProgress:r,onError:i});return}Ka[t]=[],Ka[t].push({onLoad:n,onProgress:r,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,c=this.responseType;fetch(o).then(n=>{if(n.status===200||n.status===0){if(n.status===0&&B(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||n.body===void 0||n.body.getReader===void 0)return n;let r=Ka[t],i=n.body.getReader(),a=n.headers.get(`X-File-Size`)||n.headers.get(`Content-Length`),o=a?parseInt(a):0,s=o!==0,c=0,l=new ReadableStream({start(t){n();function n(){i.read().then(({done:i,value:a})=>{if(i)t.close();else{c+=a.byteLength;let i=new ProgressEvent(`progress`,{lengthComputable:s,loaded:c,total:o});for(let t=0,n=r.length;t<n;t++){let n=r[t];n.onProgress&&n.onProgress(i)}t.enqueue(a),n()}},n=>{t.error(n)})}}});return new Response(l)}throw new qa(`fetch for "${n.url}" responded with ${n.status}: ${n.statusText}`,n)}).then(t=>{switch(c){case`arraybuffer`:return t.arrayBuffer();case`blob`:return t.blob();case`document`:return t.text().then(t=>new DOMParser().parseFromString(t,s));case`json`:return t.json();default:if(s===``)return t.text();{let n=/charset="?([^;"\s]*)"?/i.exec(s),r=n&&n[1]?n[1].toLowerCase():void 0,i=new TextDecoder(r);return t.arrayBuffer().then(t=>i.decode(t))}}}).then(n=>{Ha.add(`file:${t}`,n);let r=Ka[t];delete Ka[t];for(let t=0,i=r.length;t<i;t++){let i=r[t];i.onLoad&&i.onLoad(n)}}).catch(n=>{let r=Ka[t];if(r===void 0)throw this.manager.itemError(t),n;delete Ka[t];for(let t=0,i=r.length;t<i;t++){let i=r[t];i.onError&&i.onError(n)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ya=new WeakMap,Xa=class extends Ga{constructor(t){super(t)}load(t,n,r,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,o=Ha.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(o),a.manager.itemEnd(t)},0);else{let t=Ya.get(o);t===void 0&&(t=[],Ya.set(o,t)),t.push({onLoad:n,onError:i})}return o}let s=Je(`img`);function c(){u(),n&&n(this);let r=Ya.get(this)||[];for(let t=0;t<r.length;t++){let n=r[t];n.onLoad&&n.onLoad(this)}Ya.delete(this),a.manager.itemEnd(t)}function l(n){u(),i&&i(n),Ha.remove(`image:${t}`);let r=Ya.get(this)||[];for(let t=0;t<r.length;t++){let i=r[t];i.onError&&i.onError(n)}Ya.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function u(){s.removeEventListener(`load`,c,!1),s.removeEventListener(`error`,l,!1)}return s.addEventListener(`load`,c,!1),s.addEventListener(`error`,l,!1),t.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),Ha.add(`image:${t}`,s),a.manager.itemStart(t),s.src=t,s}},Za=class extends Ga{constructor(t){super(t)}load(t,n,r,i){let a=new Wt,o=new Xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(t){a.image=t,a.needsUpdate=!0,n!==void 0&&n(a)},r,i),a}},Qa=class extends Cn{constructor(t,n=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},$a=new J,eo=new G,to=new G,no=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;eo.setFromMatrixPosition(t.matrixWorld),n.position.copy(eo),to.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(to),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,r,i){$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix($a,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,o=i?i.z/a.x:1,s=i?i.w/a.y:1,c=i?i.x/a.x:0,l=i?i.y/a.y:0;t.coordinateSystem===2001||t.reversedDepth?n.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+c,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ro=new G,io=new Ot,ao=new G,oo=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,io,ao),ao.x===1&&ao.y===1&&ao.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,io,ao.set(1,1,1)).invert()}updateWorldMatrix(t,n,r=!1){super.updateWorldMatrix(t,n,r),this.matrixWorld.decompose(ro,io,ao),ao.x===1&&ao.y===1&&ao.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,io,ao.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},so=new G,co=new W,lo=new W,uo=class extends oo{constructor(t=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=t,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ot*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){so.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(so.x,so.y).multiplyScalar(-t/so.z),so.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(so.x,so.y).multiplyScalar(-t/so.z)}getViewSize(t,n){return this.getViewBounds(t,co,lo),n.subVectors(lo,co)}setViewOffset(t,n,r,i,a,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(at*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let t=o.fullWidth,s=o.fullHeight;a+=o.offsetX*i/t,n-=o.offsetY*r/s,i*=o.width/t,r*=o.height/s}let s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,n,n-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},fo=class extends no{constructor(){super(new uo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let n=this.camera,r=ot*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||n.far;(r!==n.fov||i!==n.aspect||a!==n.far)&&(n.fov=r,n.aspect=i,n.far=a,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},po=class extends Qa{constructor(t,n,r=0,i=Math.PI/3,a=0,o=2){super(t,n),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.distance=r,this.angle=i,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new fo}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(t).uuid),n.object.shadow=this.shadow.toJSON(),n}},mo=class extends no{constructor(){super(new uo(90,1,.5,500)),this.isPointLightShadow=!0}},ho=class extends Qa{constructor(t,n,r=0,i=2){super(t,n),this.isPointLight=!0,this.type=`PointLight`,this.distance=r,this.decay=i,this.shadow=new mo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},go=class extends oo{constructor(t=-1,n=1,r=1,i=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=i,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,i,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=r-t,o=r+t,s=i+n,c=i-n;if(this.view!==null&&this.view.enabled){let t=(this.right-this.left)/this.view.fullWidth/this.zoom,n=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=t*this.view.offsetX,o=a+t*this.view.width,s-=n*this.view.offsetY,c=s-n*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},_o=class extends no{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends Qa{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new _o}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},yo=class extends Qa{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type=`AmbientLight`}},bo=class{static extractUrlBase(t){let n=t.lastIndexOf(`/`);return n===-1?`./`:t.slice(0,n+1)}static resolveURL(t,n){return typeof t!=`string`||t===``?``:(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}},xo=new WeakMap,So=class extends Ga{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&B(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&B(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,n,r,i){t===void 0&&(t=``),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,o=Ha.get(`image-bitmap:${t}`);if(o!==void 0){if(a.manager.itemStart(t),o.then){o.then(r=>{xo.has(o)===!0?(i&&i(xo.get(o)),a.manager.itemError(t),a.manager.itemEnd(t)):(n&&n(r),a.manager.itemEnd(t))});return}setTimeout(function(){n&&n(o),a.manager.itemEnd(t)},0);return}let s={};s.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,s.headers=this.requestHeader,s.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,s).then(function(t){return t.blob()}).then(function(t){return createImageBitmap(t,Object.assign({},a.options,{colorSpaceConversion:`none`}))}).then(function(r){return Ha.add(`image-bitmap:${t}`,r),n&&n(r),a.manager.itemEnd(t),r}).catch(function(n){i&&i(n),xo.set(c,n),Ha.remove(`image-bitmap:${t}`),a.manager.itemError(t),a.manager.itemEnd(t)});Ha.add(`image-bitmap:${t}`,c),a.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Co=-90,wo=1,To=class extends Cn{constructor(t,n,r){super(),this.type=`CubeCamera`,this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new uo(Co,wo,t,n);i.layers=this.layers,this.add(i);let a=new uo(Co,wo,t,n);a.layers=this.layers,this.add(a);let o=new uo(Co,wo,t,n);o.layers=this.layers,this.add(o);let s=new uo(Co,wo,t,n);s.layers=this.layers,this.add(s);let c=new uo(Co,wo,t,n);c.layers=this.layers,this.add(c);let l=new uo(Co,wo,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[r,i,a,o,s,c]=n;for(let t of n)this.remove(t);if(t===2e3)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+t);for(let t of n)this.add(t),t.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let h=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;g=t.isWebGLRenderer===!0?t.state.buffers.depth.getReversed():t.reversedDepthBuffer,t.setRenderTarget(r,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(r,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(r,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(r,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(r,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),r.texture.generateMipmaps=h,t.setRenderTarget(r,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,f,p),t.xr.enabled=m,r.texture.needsPMREMUpdate=!0}},Eo=class extends uo{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Do=`\\[\\]\\.:\\/`,Oo=RegExp(`[\\[\\]\\.:\\/]`,`g`),ko=`[^\\[\\]\\.:\\/]`,Ao=`[^`+Do.replace(`\\.`,``)+`]`,jo=`((?:WC+[\\/:])*)`.replace(`WC`,ko),Mo=`(WCOD+)?`.replace(`WCOD`,Ao),No=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ko),Po=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ko),Fo=RegExp(`^`+jo+Mo+No+Po+`$`),Io=[`material`,`materials`,`bones`,`map`],Lo=class{constructor(t,n,r){let i=r||Ro.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,i)}getValue(t,n){this.bind();let r=this._targetGroup.nCachedObjects_,i=this._bindings[r];i!==void 0&&i.getValue(t,n)}setValue(t,n){let r=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=r.length;i!==a;++i)r[i].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].unbind()}},Ro=class t{constructor(n,r,i){this.path=r,this.parsedPath=i||t.parseTrackName(r),this.node=t.findNode(n,this.parsedPath.nodeName),this.rootNode=n,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(n,r,i){return n&&n.isAnimationObjectGroup?new t.Composite(n,r,i):new t(n,r,i)}static sanitizeNodeName(t){return t.replace(/\s/g,`_`).replace(Oo,``)}static parseTrackName(t){let n=Fo.exec(t);if(n===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},i=r.nodeName&&r.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let t=r.nodeName.substring(i+1);Io.indexOf(t)!==-1&&(r.nodeName=r.nodeName.substring(0,i),r.objectName=t)}if(r.propertyName===null||r.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+t);return r}static findNode(t,n){if(n===void 0||n===``||n===`.`||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(t){for(let i=0;i<t.length;i++){let a=t[i];if(a.name===n||a.uuid===n)return a;let o=r(a.children);if(o)return o}return null},i=r(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)t[n++]=r[i]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let i=0,a=r.length;i!==a;++i)r[i]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let n=this.node,r=this.parsedPath,i=r.objectName,a=r.propertyName,o=r.propertyIndex;if(n||(n=t.findNode(this.rootNode,r.nodeName),this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(i){let t=r.objectIndex;switch(i){case`materials`:if(!n.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!n.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}n=n.material.materials;break;case`bones`:if(!n.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}n=n.skeleton.bones;for(let r=0;r<n.length;r++)if(n[r].name===t){t=r;break}break;case`map`:if(`map`in n){n=n.map;break}if(!n.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!n.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}n=n.material.map;break;default:if(n[i]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}n=n[i]}if(t!==void 0){if(n[t]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,n);return}n=n[t]}}let s=n[a];if(s===void 0){let t=r.nodeName;V(`PropertyBinding: Trying to update property for track: `+t+`.`+a+` but it wasn't found.`,n);return}let c=this.Versioning.None;this.targetObject=n,n.isMaterial===!0?c=this.Versioning.NeedsUpdate:n.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(a===`morphTargetInfluences`){if(!n.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!n.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}n.morphTargetDictionary[o]!==void 0&&(o=n.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ro.Composite=Lo,Ro.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ro.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ro.prototype.GetterByBindingType=[Ro.prototype._getValue_direct,Ro.prototype._getValue_array,Ro.prototype._getValue_arrayElement,Ro.prototype._getValue_toArray],Ro.prototype.SetterByBindingTypeAndVersioning=[[Ro.prototype._setValue_direct,Ro.prototype._setValue_direct_setNeedsUpdate,Ro.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ro.prototype._setValue_array,Ro.prototype._setValue_array_setNeedsUpdate,Ro.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ro.prototype._setValue_arrayElement,Ro.prototype._setValue_arrayElement_setNeedsUpdate,Ro.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ro.prototype._setValue_fromArray,Ro.prototype._setValue_fromArray_setNeedsUpdate,Ro.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,B(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}};(class t{static{t.prototype.isMatrix2=!0}constructor(t,n,r,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,r,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let r=0;r<4;r++)this.elements[r]=t[r+n];return this}set(t,n,r,i){let a=this.elements;return a[0]=t,a[2]=n,a[1]=r,a[3]=i,this}});function Bo(t,n,r,i){let a=Vo(i);switch(r){case w:return t*n;case k:return t*n/a.components*a.byteLength;case ee:return t*n/a.components*a.byteLength;case A:return t*n*2/a.components*a.byteLength;case te:return t*n*2/a.components*a.byteLength;case T:return t*n*3/a.components*a.byteLength;case E:return t*n*4/a.components*a.byteLength;case ne:return t*n*4/a.components*a.byteLength;case re:case j:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case M:case N:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case P:case oe:return Math.max(t,16)*Math.max(n,8)/4;case ie:case ae:return Math.max(t,8)*Math.max(n,8)/2;case se:case ce:case F:case ue:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*8;case le:case de:case fe:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case pe:return Math.floor((t+3)/4)*Math.floor((n+3)/4)*16;case me:return Math.floor((t+4)/5)*Math.floor((n+3)/4)*16;case he:return Math.floor((t+4)/5)*Math.floor((n+4)/5)*16;case ge:return Math.floor((t+5)/6)*Math.floor((n+4)/5)*16;case _e:return Math.floor((t+5)/6)*Math.floor((n+5)/6)*16;case ve:return Math.floor((t+7)/8)*Math.floor((n+4)/5)*16;case ye:return Math.floor((t+7)/8)*Math.floor((n+5)/6)*16;case be:return Math.floor((t+7)/8)*Math.floor((n+7)/8)*16;case xe:return Math.floor((t+9)/10)*Math.floor((n+4)/5)*16;case Se:return Math.floor((t+9)/10)*Math.floor((n+5)/6)*16;case Ce:return Math.floor((t+9)/10)*Math.floor((n+7)/8)*16;case we:return Math.floor((t+9)/10)*Math.floor((n+9)/10)*16;case Te:return Math.floor((t+11)/12)*Math.floor((n+9)/10)*16;case Ee:return Math.floor((t+11)/12)*Math.floor((n+11)/12)*16;case De:case Oe:case ke:return Math.ceil(t/4)*Math.ceil(n/4)*16;case Ae:case je:return Math.ceil(t/4)*Math.ceil(n/4)*8;case Me:case Ne:return Math.ceil(t/4)*Math.ceil(n/4)*16}throw Error(`Unable to determine texture byte length for ${r} format.`)}function Vo(t){switch(t){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ho(){let t=null,n=!1,r=null,i=null;function a(n,o){i=t.requestAnimationFrame(a),r(n,o)}return{start:function(){n!==!0&&r!==null&&t!==null&&(i=t.requestAnimationFrame(a),n=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(t){r=t},setContext:function(n){t=n}}}function Uo(t){let n=new WeakMap;function r(n,r){let i=n.array,a=n.usage,o=i.byteLength,s=t.createBuffer();t.bindBuffer(r,s),t.bufferData(r,i,a),n.onUploadCallback();let c;if(i instanceof Float32Array)c=t.FLOAT;else if(typeof Float16Array<`u`&&i instanceof Float16Array)c=t.HALF_FLOAT;else if(i instanceof Uint16Array)c=n.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(i instanceof Int16Array)c=t.SHORT;else if(i instanceof Uint32Array)c=t.UNSIGNED_INT;else if(i instanceof Int32Array)c=t.INT;else if(i instanceof Int8Array)c=t.BYTE;else if(i instanceof Uint8Array)c=t.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=t.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:n.version,size:o}}function i(n,r,i){let a=r.array,o=r.updateRanges;if(t.bindBuffer(i,n),o.length===0)t.bufferSubData(i,0,a);else{o.sort((t,n)=>t.start-n.start);let n=0;for(let t=1;t<o.length;t++){let r=o[n],i=o[t];i.start<=r.start+r.count+1?r.count=Math.max(r.count,i.start+i.count-r.start):(++n,o[n]=i)}o.length=n+1;for(let n=0,r=o.length;n<r;n++){let r=o[n];t.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count)}r.clearUpdateRanges()}r.onUploadCallback()}function a(t){return t.isInterleavedBufferAttribute&&(t=t.data),n.get(t)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);let i=n.get(r);i&&(t.deleteBuffer(i.buffer),n.delete(r))}function s(t,a){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=n.get(t);(!r||r.version<t.version)&&n.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}let o=n.get(t);if(o===void 0)n.set(t,r(t,a));else if(o.version<t.version){if(o.size!==t.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);i(o.buffer,t,a),o.version=t.version}}return{get:a,remove:o,update:s}}var X={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},Wo={basic:{uniforms:ia([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:X.meshbasic_vert,fragmentShader:X.meshbasic_frag},lambert:{uniforms:ia([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:X.meshlambert_vert,fragmentShader:X.meshlambert_frag},phong:{uniforms:ia([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:X.meshphong_vert,fragmentShader:X.meshphong_frag},standard:{uniforms:ia([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag},toon:{uniforms:ia([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new Y(0)}}]),vertexShader:X.meshtoon_vert,fragmentShader:X.meshtoon_frag},matcap:{uniforms:ia([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:X.meshmatcap_vert,fragmentShader:X.meshmatcap_frag},points:{uniforms:ia([Z.points,Z.fog]),vertexShader:X.points_vert,fragmentShader:X.points_frag},dashed:{uniforms:ia([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:X.linedashed_vert,fragmentShader:X.linedashed_frag},depth:{uniforms:ia([Z.common,Z.displacementmap]),vertexShader:X.depth_vert,fragmentShader:X.depth_frag},normal:{uniforms:ia([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:X.meshnormal_vert,fragmentShader:X.meshnormal_frag},sprite:{uniforms:ia([Z.sprite,Z.fog]),vertexShader:X.sprite_vert,fragmentShader:X.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:X.background_vert,fragmentShader:X.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:X.backgroundCube_vert,fragmentShader:X.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:X.cube_vert,fragmentShader:X.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:X.equirect_vert,fragmentShader:X.equirect_frag},distance:{uniforms:ia([Z.common,Z.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:X.distance_vert,fragmentShader:X.distance_frag},shadow:{uniforms:ia([Z.lights,Z.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:X.shadow_vert,fragmentShader:X.shadow_frag}};Wo.physical={uniforms:ia([Wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:X.meshphysical_vert,fragmentShader:X.meshphysical_frag};var Go={r:0,b:0,g:0},Ko=new J,qo=new K;qo.set(-1,0,0,0,1,0,0,0,1);function Jo(t,n,r,i,a,o){let s=new Y(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(t){let r=t.isScene===!0?t.background:null;if(r&&r.isTexture){let i=t.backgroundBlurriness>0;r=n.get(r,i)}return r}function h(n){let i=!1,a=m(n);a===null?_(s,c):a&&a.isColor&&(_(a,1),i=!0);let l=t.xr.getEnvironmentBlendMode();l===`additive`?r.buffers.color.setClear(0,0,0,1,o):l===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||i)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(n,r){let a=m(r);a&&(a.isCubeTexture||a.mapping===306)?(u===void 0&&(u=new $r(new ta(1,1,1),new da({name:`BackgroundCubeMaterial`,uniforms:ra(Wo.backgroundCube.uniforms),vertexShader:Wo.backgroundCube.vertexShader,fragmentShader:Wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(t,n,r){this.matrixWorld.copyPosition(r.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=a,u.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ko.makeRotationFromEuler(r.backgroundRotation)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(qo),u.material.toneMapped=q.getTransfer(a.colorSpace)!==He,(d!==a||f!==a.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=a,f=a.version,p=t.toneMapping),u.layers.enableAll(),n.unshift(u,u.geometry,u.material,0,0,null)):a&&a.isTexture&&(l===void 0&&(l=new $r(new na(2,2),new da({name:`BackgroundMaterial`,uniforms:ra(Wo.background.uniforms),vertexShader:Wo.background.vertexShader,fragmentShader:Wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=a,l.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,l.material.toneMapped=q.getTransfer(a.colorSpace)!==He,a.matrixAutoUpdate===!0&&a.updateMatrix(),l.material.uniforms.uvTransform.value.copy(a.matrix),(d!==a||f!==a.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,d=a,f=a.version,p=t.toneMapping),l.layers.enableAll(),n.unshift(l,l.geometry,l.material,0,0,null))}function _(n,i){n.getRGB(Go,sa(t)),r.buffers.color.setClear(Go.r,Go.g,Go.b,i,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(t,n=1){s.set(t),c=n,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(t){c=t,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Yo(t,n){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=p(null),o=a,s=!1;function c(r,i,a,c,l){let d=!1,p=f(r,c,a,i);o!==p&&(o=p,u(o.object)),d=m(r,c,a,l),d&&h(r,c,a,l),l!==null&&n.update(l,t.ELEMENT_ARRAY_BUFFER),(d||s)&&(s=!1,x(r,i,a,c),l!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(l).buffer))}function l(){return t.createVertexArray()}function u(n){return t.bindVertexArray(n)}function d(n){return t.deleteVertexArray(n)}function f(t,n,r,a){let o=a.wireframe===!0,s=i[n.id];s===void 0&&(s={},i[n.id]=s);let c=t.isInstancedMesh===!0?t.id:0,u=s[c];u===void 0&&(u={},s[c]=u);let d=u[r.id];d===void 0&&(d={},u[r.id]=d);let f=d[o];return f===void 0&&(f=p(l()),d[o]=f),f}function p(t){let n=[],i=[],a=[];for(let t=0;t<r;t++)n[t]=0,i[t]=0,a[t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:n,enabledAttributes:i,attributeDivisors:a,object:t,attributes:{},index:null}}function m(t,n,r,i){let a=o.attributes,s=n.attributes,c=0,l=r.getAttributes();for(let n in l)if(l[n].location>=0){let r=a[n],i=s[n];if(i===void 0&&(n===`instanceMatrix`&&t.instanceMatrix&&(i=t.instanceMatrix),n===`instanceColor`&&t.instanceColor&&(i=t.instanceColor)),r===void 0||r.attribute!==i||i&&r.data!==i.data)return!0;c++}return o.attributesNum!==c||o.index!==i}function h(t,n,r,i){let a={},s=n.attributes,c=0,l=r.getAttributes();for(let n in l)if(l[n].location>=0){let r=s[n];r===void 0&&(n===`instanceMatrix`&&t.instanceMatrix&&(r=t.instanceMatrix),n===`instanceColor`&&t.instanceColor&&(r=t.instanceColor));let i={};i.attribute=r,r&&r.data&&(i.data=r.data),a[n]=i,c++}o.attributes=a,o.attributesNum=c,o.index=i}function g(){let t=o.newAttributes;for(let n=0,r=t.length;n<r;n++)t[n]=0}function _(t){v(t,0)}function v(n,r){let i=o.newAttributes,a=o.enabledAttributes,s=o.attributeDivisors;i[n]=1,a[n]===0&&(t.enableVertexAttribArray(n),a[n]=1),s[n]!==r&&(t.vertexAttribDivisor(n,r),s[n]=r)}function y(){let n=o.newAttributes,r=o.enabledAttributes;for(let i=0,a=r.length;i<a;i++)r[i]!==n[i]&&(t.disableVertexAttribArray(i),r[i]=0)}function b(n,r,i,a,o,s,c){c===!0?t.vertexAttribIPointer(n,r,i,o,s):t.vertexAttribPointer(n,r,i,a,o,s)}function x(r,i,a,o){g();let s=o.attributes,c=a.getAttributes(),l=i.defaultAttributeValues;for(let i in c){let a=c[i];if(a.location>=0){let c=s[i];if(c===void 0&&(i===`instanceMatrix`&&r.instanceMatrix&&(c=r.instanceMatrix),i===`instanceColor`&&r.instanceColor&&(c=r.instanceColor)),c!==void 0){let i=c.normalized,s=c.itemSize,l=n.get(c);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=d===t.INT||d===t.UNSIGNED_INT||c.gpuType===1013;if(c.isInterleavedBufferAttribute){let n=c.data,l=n.stride,m=c.offset;if(n.isInstancedInterleavedBuffer){for(let t=0;t<a.locationSize;t++)v(a.location+t,n.meshPerAttribute);r.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let t=0;t<a.locationSize;t++)_(a.location+t);t.bindBuffer(t.ARRAY_BUFFER,u);for(let t=0;t<a.locationSize;t++)b(a.location+t,s/a.locationSize,d,i,l*f,(m+s/a.locationSize*t)*f,p)}else{if(c.isInstancedBufferAttribute){for(let t=0;t<a.locationSize;t++)v(a.location+t,c.meshPerAttribute);r.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let t=0;t<a.locationSize;t++)_(a.location+t);t.bindBuffer(t.ARRAY_BUFFER,u);for(let t=0;t<a.locationSize;t++)b(a.location+t,s/a.locationSize,d,i,s*f,s/a.locationSize*t*f,p)}}else if(l!==void 0){let n=l[i];if(n!==void 0)switch(n.length){case 2:t.vertexAttrib2fv(a.location,n);break;case 3:t.vertexAttrib3fv(a.location,n);break;case 4:t.vertexAttrib4fv(a.location,n);break;default:t.vertexAttrib1fv(a.location,n)}}}}y()}function S(){E();for(let t in i){let n=i[t];for(let t in n){let r=n[t];for(let t in r){let n=r[t];for(let t in n)d(n[t].object),delete n[t];delete r[t]}}delete i[t]}}function C(t){if(i[t.id]===void 0)return;let n=i[t.id];for(let t in n){let r=n[t];for(let t in r){let n=r[t];for(let t in n)d(n[t].object),delete n[t];delete r[t]}}delete i[t.id]}function w(t){for(let n in i){let r=i[n];for(let n in r){let i=r[n];if(i[t.id]===void 0)continue;let a=i[t.id];for(let t in a)d(a[t].object),delete a[t];delete i[t.id]}}}function T(t){for(let n in i){let r=i[n],a=t.isInstancedMesh===!0?t.id:0,o=r[a];if(o!==void 0){for(let t in o){let n=o[t];for(let t in n)d(n[t].object),delete n[t];delete o[t]}delete r[a],Object.keys(r).length===0&&delete i[n]}}}function E(){D(),s=!0,o!==a&&(o=a,u(o.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function Xo(t,n,r){let i;function a(t){i=t}function o(n,a){t.drawArrays(i,n,a),r.update(a,i,1)}function s(n,a,o){o!==0&&(t.drawArraysInstanced(i,n,a,o),r.update(a,i,o))}function c(t,a,o){if(o===0)return;n.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(i,t,0,a,0,o);let s=0;for(let t=0;t<o;t++)s+=a[t];r.update(s,i,1)}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=c}function Zo(t,n,r,i){let a;function o(){if(a!==void 0)return a;if(n.has(`EXT_texture_filter_anisotropic`)===!0){let r=n.get(`EXT_texture_filter_anisotropic`);a=t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(n){return n===1023||i.convert(n)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(r){let a=r===1016&&(n.has(`EXT_color_buffer_half_float`)||n.has(`EXT_color_buffer_float`));return!(r!==1009&&r!==1015&&!a&&i.convert(r)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(n){if(n===`highp`){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return`highp`;n=`mediump`}return n===`mediump`&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=r.precision===void 0?`highp`:r.precision,d=l(u);d!==u&&(B(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=r.logarithmicDepthBuffer===!0,p=r.reversedDepthBuffer===!0&&n.has(`EXT_clip_control`);r.reversedDepthBuffer===!0&&p===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Qo(t){let n=this,r=null,i=0,a=!1,o=!1,s=new Nr,c=new K,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,n){let r=t.length!==0||n||i!==0||a;return a=n,i=t.length,r},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(t,n){r=d(t,n,0)},this.setState=function(n,s,c){let f=n.clippingPlanes,p=n.clipIntersection,m=n.clipShadows,h=t.get(n);if(!a||f===null||f.length===0||o&&!m)o?d(null):u();else{let t=o?0:i,n=t*4,a=h.clippingState||null;l.value=a,a=d(f,s,n,c);for(let t=0;t!==n;++t)a[t]=r[t];h.clippingState=a,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=t}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function d(t,r,i,a){let o=t===null?0:t.length,u=null;if(o!==0){if(u=l.value,a!==!0||u===null){let n=i+o*4,a=r.matrixWorldInverse;c.getNormalMatrix(a),(u===null||u.length<n)&&(u=new Float32Array(n));for(let n=0,r=i;n!==o;++n,r+=4)s.copy(t[n]).applyMatrix4(a,c),s.normal.toArray(u,r),u[r+3]=s.constant}l.value=u,l.needsUpdate=!0}return n.numPlanes=o,n.numIntersection=0,u}}var $o=4,es=6,ts=20,ns=256,rs=new go,is=new Y,as=null,os=0,ss=0,cs=!1,ls=new G,us=new G,ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,r=.1,i=100,a={}){let{size:o=256,position:s=ls}=a;as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,i,c,s),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(as,os,ss),this._renderer.xr.enabled=cs,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Be,depthBuffer:!1},i=ps(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ps(t,n,r);let{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fs(i)),this._blurMaterial=gs(i,t,n),this._ggxMaterial=hs(i,t,n)}return i}_compileMaterial(t){let n=new $r(new Er,t);this._renderer.compile(n,rs)}_sceneToCubeUV(t,n,r,i,a){let o=new uo(90,1,n,r),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(is),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $r(new ta,new Vr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=t.background;h?h.isColor&&(p.color.copy(h),t.background=null,m=!0):(p.color.copy(is),m=!0);for(let n=0;n<6;n++){let r=n%3;r===0?(o.up.set(0,s[n],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[n],a.y,a.z)):r===1?(o.up.set(0,0,s[n]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[n],a.z)):(o.up.set(0,s[n],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[n]));let u=this._cubeSize;ms(i,r*u,n>2?u:0,u,u),l.setRenderTarget(i),m&&l.render(f,o),l.render(t,o)}l.toneMapping=d,l.autoClear=u,t.background=h}_textureToCubeUV(t,n){let r=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_s());let a=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let s=a.uniforms;s.envMap.value=t;let c=this._cubeSize;ms(n,0,0,3*c,2*c),r.setRenderTarget(n),r.render(o,rs)}_applyPMREM(t){let n=this._renderer,r=n.autoClear;n.autoClear=!1;let i=this._lodMeshes.length;for(let n=1;n<i;n++)this._applyGGXFilter(t,n-1,n);n.autoClear=r}_applyGGXFilter(t,n,r){let i=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms,l=r/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u)*(l*1.25),{_lodMax:f}=this,p=this._sizeLods[r],m=3*p*(r>f-$o?r-f+$o:0),h=4*(this._cubeSize-p);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=f-n,ms(a,m,h,3*p,2*p),i.setRenderTarget(a),i.render(s,rs),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-r,ms(t,m,h,3*p,2*p),i.setRenderTarget(t),i.render(s,rs)}_blur(t,n,r,i){let a=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,r,o),this._blurPass(a,t,r,r,o)}_blurPass(t,n,r,i,a){let o=this._renderer,s=this._blurMaterial,c=this._lodMeshes[i];c.material=s;let l=s.uniforms;l.envMap.value=t.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-r;let u=this._sizeLods[i];ms(n,3*u*(i>this._lodMax-$o?i-this._lodMax+$o:0),4*(this._cubeSize-u),3*u,2*u),o.setRenderTarget(n),o.render(c,rs)}};function fs(t){let n=[],r=[],i=t,a=t-$o+1+es;for(let t=0;t<a;t++){let t=2**i;n.push(t);let a=1/(t-2),o=-a,s=1+a,c=[o,o,s,o,s,s,o,o,s,s,o,s],l=new Float32Array(108),u=new Float32Array(108);for(let t=0;t<6;t++){let n=t%3*2/3-1,r=t>2?0:-1,i=[n,r,0,n+2/3,r,0,n+2/3,r+1,0,n,r,0,n+2/3,r+1,0,n,r+1,0];l.set(i,18*t);for(let n=0;n<6;n++){let r=c[n*2]*2-1,i=c[n*2+1]*2-1;t===0?us.set(1,i,r):t===1?us.set(-r,1,-i):t===2?us.set(-r,i,1):t===3?us.set(-1,i,-r):t===4?us.set(-r,-1,i):us.set(r,i,-1),us.toArray(u,(t*6+n)*3)}}let d=new Er;d.setAttribute(`position`,new dr(l,3)),d.setAttribute(`outputDirection`,new dr(u,3)),r.push(new $r(d,null)),i>$o&&i--}return{lodMeshes:r,sizeLods:n}}function ps(t,n,r){let i=new qt(t,n,r);return i.texture.mapping=306,i.texture.name=`PMREM.cubeUv`,i.scissorTest=!0,i}function ms(t,n,r,i,a){t.viewport.set(n,r,i,a),t.scissor.set(n,r,i,a)}function hs(t,n,r){return new da({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ns,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function gs(t,n,r){return new da({name:`SphericalGaussianBlur`,defines:{SAMPLES:ts,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ys(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _s(){return new da({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vs(){return new da({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bs=class extends qt{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let r={width:t,height:t,depth:1},i=[r,r,r,r,r,r];this.texture=new Zi(i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ta(5,5,5),a=new da({name:`CubemapFromEquirect`,uniforms:ra(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=n;let o=new $r(i,a),s=n.minFilter;return n.minFilter===1008&&(n.minFilter=c),new To(1,10,this).update(t,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,r=!0,i=!0){let a=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,r,i);t.setRenderTarget(a)}};function xs(t){let n=new WeakMap,r=new WeakMap,i=null;function a(t,n=!1){return t==null?null:n?s(t):o(t)}function o(r){if(r&&r.isTexture){let i=r.mapping;if(i===303||i===304){if(n.has(r)){let t=n.get(r).texture;return c(t,r.mapping)}{let i=r.image;if(i&&i.height>0){let a=new bs(i.height);return a.fromEquirectangularTexture(t,r),n.set(r,a),r.addEventListener(`dispose`,u),c(a.texture,r.mapping)}return null}}}return r}function s(n){if(n&&n.isTexture){let a=n.mapping,o=a===303||a===304,s=a===301||a===302;if(o||s){let a=r.get(n),c=a===void 0?0:a.texture.pmremVersion;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return i===null&&(i=new ds(t)),a=o?i.fromEquirectangular(n,a):i.fromCubemap(n,a),a.texture.pmremVersion=n.pmremVersion,r.set(n,a),a.texture;if(a!==void 0)return a.texture;{let c=n.image;return o&&c&&c.height>0||s&&c&&l(c)?(i===null&&(i=new ds(t)),a=o?i.fromEquirectangular(n):i.fromCubemap(n),a.texture.pmremVersion=n.pmremVersion,r.set(n,a),n.addEventListener(`dispose`,d),a.texture):null}}}return n}function c(t,n){return n===303?t.mapping=301:n===304&&(t.mapping=302),t}function l(t){let n=0;for(let r=0;r<6;r++)t[r]!==void 0&&n++;return n===6}function u(t){let r=t.target;r.removeEventListener(`dispose`,u);let i=n.get(r);i!==void 0&&(n.delete(r),i.dispose())}function d(t){let n=t.target;n.removeEventListener(`dispose`,d);let i=r.get(n);i!==void 0&&(r.delete(n),i.dispose())}function f(){n=new WeakMap,r=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function Ss(t){let n={};function r(r){if(n[r]!==void 0)return n[r];let i=t.getExtension(r);return n[r]=i,i}return{has:function(t){return r(t)!==null},init:function(){r(`EXT_color_buffer_float`),r(`WEBGL_clip_cull_distance`),r(`OES_texture_float_linear`),r(`EXT_color_buffer_half_float`),r(`WEBGL_multisampled_render_to_texture`),r(`WEBGL_render_shared_exponent`)},get:function(t){let n=r(t);return n===null&&$e(`WebGLRenderer: `+t+` extension not supported.`),n}}}function Cs(t,n,r,i){let a={},o=new WeakMap;function s(t){let c=t.target;c.index!==null&&n.remove(c.index);for(let t in c.attributes)n.remove(c.attributes[t]);c.removeEventListener(`dispose`,s),delete a[c.id];let l=o.get(c);l&&(n.remove(l),o.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,r.memory.geometries--}function c(t,n){return a[n.id]===!0||(n.addEventListener(`dispose`,s),a[n.id]=!0,r.memory.geometries++),n}function l(r){let i=r.attributes;for(let r in i)n.update(i[r],t.ARRAY_BUFFER)}function u(t){let r=[],i=t.index,a=t.attributes.position,s=0;if(a===void 0)return;if(i!==null){let t=i.array;s=i.version;for(let n=0,i=t.length;n<i;n+=3){let i=t[n+0],a=t[n+1],o=t[n+2];r.push(i,a,a,o,o,i)}}else{let t=a.array;s=a.version;for(let n=0,i=t.length/3-1;n<i;n+=3){let t=n+0,i=n+1,a=n+2;r.push(t,i,i,a,a,t)}}let c=new(a.count>=65535?pr:fr)(r,1);c.version=s;let l=o.get(t);l&&n.remove(l),o.set(t,c)}function d(t){let n=o.get(t);if(n){let r=t.index;r!==null&&n.version<r.version&&u(t)}else u(t);return o.get(t)}return{get:c,update:l,getWireframeAttribute:d}}function ws(t,n,r){let i;function a(t){i=t}let o,s;function c(t){o=t.type,s=t.bytesPerElement}function l(n,a){t.drawElements(i,a,o,n*s),r.update(a,i,1)}function u(n,a,c){c!==0&&(t.drawElementsInstanced(i,a,o,n*s,c),r.update(a,i,c))}function d(t,a,s){if(s===0)return;n.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(i,a,0,o,t,0,s);let c=0;for(let t=0;t<s;t++)c+=a[t];r.update(c,i,1)}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Ts(t){let n={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,i,a){switch(r.calls++,i){case t.TRIANGLES:r.triangles+=n/3*a;break;case t.LINES:r.lines+=n/2*a;break;case t.LINE_STRIP:r.lines+=a*(n-1);break;case t.LINE_LOOP:r.lines+=a*n;break;case t.POINTS:r.points+=a*n;break;default:V(`WebGLInfo: Unknown draw mode:`,i)}}function a(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:n,render:r,programs:null,autoReset:!0,reset:a,update:i}}function Es(t,n,r){let i=new WeakMap,a=new Gt;function o(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=i.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let t=s.morphAttributes.position!==void 0,r=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;t===!0&&(p=1),r===!0&&(p=2),o===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>n.maxTextureSize&&(h=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);let g=new Float32Array(m*h*4*d),v=new Jt(g,m,h,d);v.type=_,v.needsUpdate=!0;let y=p*4;for(let n=0;n<d;n++){let i=c[n],s=l[n],d=u[n],f=m*h*4*n;for(let n=0;n<i.count;n++){let c=n*y;t===!0&&(a.fromBufferAttribute(i,n),g[f+c+0]=a.x,g[f+c+1]=a.y,g[f+c+2]=a.z,g[f+c+3]=0),r===!0&&(a.fromBufferAttribute(s,n),g[f+c+4]=a.x,g[f+c+5]=a.y,g[f+c+6]=a.z,g[f+c+7]=0),o===!0&&(a.fromBufferAttribute(d,n),g[f+c+8]=a.x,g[f+c+9]=a.y,g[f+c+10]=a.z,g[f+c+11]=d.itemSize===4?a.w:1)}}f={count:d,texture:v,size:new W(m,h)},i.set(s,f);function b(){v.dispose(),i.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,`morphTexture`,o.morphTexture,r);else{let n=0;for(let t=0;t<l.length;t++)n+=l[t];let r=s.morphTargetsRelative?1:1-n;c.getUniforms().setValue(t,`morphTargetBaseInfluence`,r),c.getUniforms().setValue(t,`morphTargetInfluences`,l)}c.getUniforms().setValue(t,`morphTargetsTexture`,f.texture,r),c.getUniforms().setValue(t,`morphTargetsTextureSize`,f.size)}return{update:o}}function Ds(t,n,r,i,a){let o=new WeakMap;function s(i){let s=a.render.frame,c=i.geometry,u=n.get(i,c);if(o.get(u)!==s&&(n.update(u),o.set(u,s)),i.isInstancedMesh&&(i.hasEventListener(`dispose`,l)===!1&&i.addEventListener(`dispose`,l),o.get(i)!==s&&(r.update(i.instanceMatrix,t.ARRAY_BUFFER),i.instanceColor!==null&&r.update(i.instanceColor,t.ARRAY_BUFFER),o.set(i,s))),i.isSkinnedMesh){let t=i.skeleton;o.get(t)!==s&&(t.update(),o.set(t,s))}return u}function c(){o=new WeakMap}function l(t){let n=t.target;n.removeEventListener(`dispose`,l),i.releaseStatesOfObject(n),r.remove(n.instanceMatrix),n.instanceColor!==null&&r.remove(n.instanceColor)}return{update:s,dispose:c}}var Os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ks(t,n,r,i,a,o){let s=new qt(n,r,{type:t,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=new Er;u.setAttribute(`position`,new mr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new mr([0,2,0,0,2,0],2));let d=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new $r(u,d),p=new go(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,y=null,b=[],x=!1;this.setSize=function(t,n){s.setSize(t,n),c!==null&&c.setSize(t,n),l!==null&&l.setSize(t,n);for(let r=0;r<b.length;r++){let i=b[r];i.setSize&&i.setSize(t,n)}},this.setEffects=function(t){b=t,x=b.length>0&&b[0].isRenderPass===!0;let n=s.width,r=s.height;b.length>0&&c===null&&(c=new qt(n,r,{type:v,depthBuffer:!1,stencilBuffer:!1}),l=new qt(n,r,{type:v,depthBuffer:!1,stencilBuffer:!1}));for(let t=0;t<b.length;t++){let i=b[t];i.setSize&&i.setSize(n,r)}},this.begin=function(t,n){if(g||t.toneMapping===0&&b.length===0)return!1;if(y=n,n!==null){let t=n.width,r=n.height;(s.width!==t||s.height!==r)&&this.setSize(t,r)}return x===!1&&t.setRenderTarget(s),_=t.toneMapping,t.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(t,n){t.toneMapping=_,g=!0;let r=s,i=c;for(let a=0;a<b.length;a++){let o=b[a];o.enabled!==!1&&(o.render(t,i,r,n),o.needsSwap!==!1&&(r=i,i=i===c?l:c))}if(m!==t.outputColorSpace||h!==t.toneMapping){m=t.outputColorSpace,h=t.toneMapping,d.defines={},q.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let n=Os[h];n&&(d.defines[n]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=r.texture,t.setRenderTarget(y),t.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var As=new Wt,js=new Qi(1,1),Ms=new Jt,Ns=new Yt,Ps=new Zi,Fs=[],Is=[],Ls=new Float32Array(16),Rs=new Float32Array(9),zs=new Float32Array(4);function Bs(t,n,r){let i=t[0];if(i<=0||i>0)return t;let a=n*r,o=Fs[a];if(o===void 0&&(o=new Float32Array(a),Fs[a]=o),n!==0){i.toArray(o,0);for(let i=1,a=0;i!==n;++i)a+=r,t[i].toArray(o,a)}return o}function Vs(t,n){if(t.length!==n.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==n[r])return!1;return!0}function Hs(t,n){for(let r=0,i=n.length;r<i;r++)t[r]=n[r]}function Us(t,n){let r=Is[n];r===void 0&&(r=new Int32Array(n),Is[n]=r);for(let i=0;i!==n;++i)r[i]=t.allocateTextureUnit();return r}function Ws(t,n){let r=this.cache;r[0]!==n&&(t.uniform1f(this.addr,n),r[0]=n)}function Gs(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y)&&(t.uniform2f(this.addr,n.x,n.y),r[0]=n.x,r[1]=n.y);else{if(Vs(r,n))return;t.uniform2fv(this.addr,n),Hs(r,n)}}function Ks(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z)&&(t.uniform3f(this.addr,n.x,n.y,n.z),r[0]=n.x,r[1]=n.y,r[2]=n.z);else if(n.r!==void 0)(r[0]!==n.r||r[1]!==n.g||r[2]!==n.b)&&(t.uniform3f(this.addr,n.r,n.g,n.b),r[0]=n.r,r[1]=n.g,r[2]=n.b);else{if(Vs(r,n))return;t.uniform3fv(this.addr,n),Hs(r,n)}}function qs(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z||r[3]!==n.w)&&(t.uniform4f(this.addr,n.x,n.y,n.z,n.w),r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=n.w);else{if(Vs(r,n))return;t.uniform4fv(this.addr,n),Hs(r,n)}}function Js(t,n){let r=this.cache,i=n.elements;if(i===void 0){if(Vs(r,n))return;t.uniformMatrix2fv(this.addr,!1,n),Hs(r,n)}else{if(Vs(r,i))return;zs.set(i),t.uniformMatrix2fv(this.addr,!1,zs),Hs(r,i)}}function Ys(t,n){let r=this.cache,i=n.elements;if(i===void 0){if(Vs(r,n))return;t.uniformMatrix3fv(this.addr,!1,n),Hs(r,n)}else{if(Vs(r,i))return;Rs.set(i),t.uniformMatrix3fv(this.addr,!1,Rs),Hs(r,i)}}function Xs(t,n){let r=this.cache,i=n.elements;if(i===void 0){if(Vs(r,n))return;t.uniformMatrix4fv(this.addr,!1,n),Hs(r,n)}else{if(Vs(r,i))return;Ls.set(i),t.uniformMatrix4fv(this.addr,!1,Ls),Hs(r,i)}}function Zs(t,n){let r=this.cache;r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n)}function Qs(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y)&&(t.uniform2i(this.addr,n.x,n.y),r[0]=n.x,r[1]=n.y);else{if(Vs(r,n))return;t.uniform2iv(this.addr,n),Hs(r,n)}}function $s(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z)&&(t.uniform3i(this.addr,n.x,n.y,n.z),r[0]=n.x,r[1]=n.y,r[2]=n.z);else{if(Vs(r,n))return;t.uniform3iv(this.addr,n),Hs(r,n)}}function ec(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z||r[3]!==n.w)&&(t.uniform4i(this.addr,n.x,n.y,n.z,n.w),r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=n.w);else{if(Vs(r,n))return;t.uniform4iv(this.addr,n),Hs(r,n)}}function tc(t,n){let r=this.cache;r[0]!==n&&(t.uniform1ui(this.addr,n),r[0]=n)}function nc(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y)&&(t.uniform2ui(this.addr,n.x,n.y),r[0]=n.x,r[1]=n.y);else{if(Vs(r,n))return;t.uniform2uiv(this.addr,n),Hs(r,n)}}function rc(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z)&&(t.uniform3ui(this.addr,n.x,n.y,n.z),r[0]=n.x,r[1]=n.y,r[2]=n.z);else{if(Vs(r,n))return;t.uniform3uiv(this.addr,n),Hs(r,n)}}function ic(t,n){let r=this.cache;if(n.x!==void 0)(r[0]!==n.x||r[1]!==n.y||r[2]!==n.z||r[3]!==n.w)&&(t.uniform4ui(this.addr,n.x,n.y,n.z,n.w),r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=n.w);else{if(Vs(r,n))return;t.uniform4uiv(this.addr,n),Hs(r,n)}}function ac(t,n,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let o;this.type===t.SAMPLER_2D_SHADOW?(js.compareFunction=r.isReversedDepthBuffer()?518:515,o=js):o=As,r.setTexture2D(n||o,a)}function oc(t,n,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTexture3D(n||Ns,a)}function sc(t,n,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTextureCube(n||Ps,a)}function cc(t,n,r){let i=this.cache,a=r.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),r.setTexture2DArray(n||Ms,a)}function lc(t){switch(t){case 5126:return Ws;case 35664:return Gs;case 35665:return Ks;case 35666:return qs;case 35674:return Js;case 35675:return Ys;case 35676:return Xs;case 5124:case 35670:return Zs;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return ec;case 5125:return tc;case 36294:return nc;case 36295:return rc;case 36296:return ic;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}function uc(t,n){t.uniform1fv(this.addr,n)}function dc(t,n){let r=Bs(n,this.size,2);t.uniform2fv(this.addr,r)}function fc(t,n){let r=Bs(n,this.size,3);t.uniform3fv(this.addr,r)}function pc(t,n){let r=Bs(n,this.size,4);t.uniform4fv(this.addr,r)}function mc(t,n){let r=Bs(n,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function hc(t,n){let r=Bs(n,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function gc(t,n){let r=Bs(n,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function _c(t,n){t.uniform1iv(this.addr,n)}function vc(t,n){t.uniform2iv(this.addr,n)}function yc(t,n){t.uniform3iv(this.addr,n)}function bc(t,n){t.uniform4iv(this.addr,n)}function xc(t,n){t.uniform1uiv(this.addr,n)}function Sc(t,n){t.uniform2uiv(this.addr,n)}function Cc(t,n){t.uniform3uiv(this.addr,n)}function wc(t,n){t.uniform4uiv(this.addr,n)}function Tc(t,n,r){let i=this.cache,a=n.length,o=Us(r,a);Vs(i,o)||(t.uniform1iv(this.addr,o),Hs(i,o));let s;s=this.type===t.SAMPLER_2D_SHADOW?js:As;for(let t=0;t!==a;++t)r.setTexture2D(n[t]||s,o[t])}function Ec(t,n,r){let i=this.cache,a=n.length,o=Us(r,a);Vs(i,o)||(t.uniform1iv(this.addr,o),Hs(i,o));for(let t=0;t!==a;++t)r.setTexture3D(n[t]||Ns,o[t])}function Dc(t,n,r){let i=this.cache,a=n.length,o=Us(r,a);Vs(i,o)||(t.uniform1iv(this.addr,o),Hs(i,o));for(let t=0;t!==a;++t)r.setTextureCube(n[t]||Ps,o[t])}function Oc(t,n,r){let i=this.cache,a=n.length,o=Us(r,a);Vs(i,o)||(t.uniform1iv(this.addr,o),Hs(i,o));for(let t=0;t!==a;++t)r.setTexture2DArray(n[t]||Ms,o[t])}function kc(t){switch(t){case 5126:return uc;case 35664:return dc;case 35665:return fc;case 35666:return pc;case 35674:return mc;case 35675:return hc;case 35676:return gc;case 5124:case 35670:return _c;case 35667:case 35671:return vc;case 35668:case 35672:return yc;case 35669:case 35673:return bc;case 5125:return xc;case 36294:return Sc;case 36295:return Cc;case 36296:return wc;case 35678:case 36198:case 36298:case 36306:case 35682:return Tc;case 35679:case 36299:case 36307:return Ec;case 35680:case 36300:case 36308:case 36293:return Dc;case 36289:case 36303:case 36311:case 36292:return Oc}}var Ac=class{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=lc(n.type)}},jc=class{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kc(n.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){let i=this.seq;for(let a=0,o=i.length;a!==o;++a){let o=i[a];o.setValue(t,n[o.id],r)}}},Nc=/(\w+)(\])?(\[|\.)?/g;function Pc(t,n){t.seq.push(n),t.map[n.id]=n}function Fc(t,n,r){let i=t.name,a=i.length;for(Nc.lastIndex=0;;){let o=Nc.exec(i),s=Nc.lastIndex,c=o[1],l=o[2]===`]`,u=o[3];if(l&&(c|=0),u===void 0||u===`[`&&s+2===a){Pc(r,u===void 0?new Ac(c,t,n):new jc(c,t,n));break}{let t=r.map[c];t===void 0&&(t=new Mc(c),Pc(r,t)),r=t}}}var Ic=class{constructor(t,n){this.seq=[],this.map={};let r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){let r=t.getActiveUniform(n,i);Fc(r,t.getUniformLocation(n,r.name),this)}let i=[],a=[];for(let n of this.seq)n.type===t.SAMPLER_2D_SHADOW||n.type===t.SAMPLER_CUBE_SHADOW||n.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(n):a.push(n);i.length>0&&(this.seq=i.concat(a))}setValue(t,n,r,i){let a=this.map[n];a!==void 0&&a.setValue(t,r,i)}setOptional(t,n,r){let i=n[r];i!==void 0&&this.setValue(t,r,i)}static upload(t,n,r,i){for(let a=0,o=n.length;a!==o;++a){let o=n[a],s=r[o.id];s.needsUpdate!==!1&&o.setValue(t,s.value,i)}}static seqWithValue(t,n){let r=[];for(let i=0,a=t.length;i!==a;++i){let a=t[i];a.id in n&&r.push(a)}return r}};function Lc(t,n,r){let i=t.createShader(n);return t.shaderSource(i,r),t.compileShader(i),i}var Rc=37297,zc=0;function Bc(t,n){let r=t.split(`
`),i=[],a=Math.max(n-6,0),o=Math.min(n+6,r.length);for(let t=a;t<o;t++){let a=t+1;i.push(`${a===n?`>`:` `} ${a}: ${r[t]}`)}return i.join(`
`)}var Vc=new K;function Hc(t){q._getMatrix(Vc,q.workingColorSpace,t);let n=`mat3( ${Vc.elements.map(t=>t.toFixed(4))} )`;switch(q.getTransfer(t)){case Ve:return[n,`LinearTransferOETF`];case He:return[n,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,t),[n,`LinearTransferOETF`]}}function Uc(t,n,r){let i=t.getShaderParameter(n,t.COMPILE_STATUS),a=(t.getShaderInfoLog(n)||``).trim();if(i&&a===``)return``;let o=/ERROR: 0:(\d+)/.exec(a);if(o){let i=parseInt(o[1]);return r.toUpperCase()+`

`+a+`

`+Bc(t.getShaderSource(n),i)}return a}function Wc(t,n){let r=Hc(n);return[`vec4 ${t}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,`}`].join(`
`)}var Gc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Kc(t,n){let r=Gc[n];return r===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,n),`vec3 `+t+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+t+`( vec3 color ) { return `+r+`ToneMapping( color ); }`}var qc=new G;function Jc(){return q.getLuminanceCoefficients(qc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${qc.x.toFixed(4)}, ${qc.y.toFixed(4)}, ${qc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Yc(t){return[t.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,t.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Qc).join(`
`)}function Xc(t){let n=[];for(let r in t){let i=t[r];i!==!1&&n.push(`#define `+r+` `+i)}return n.join(`
`)}function Zc(t,n){let r={},i=t.getProgramParameter(n,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){let i=t.getActiveAttrib(n,a),o=i.name,s=1;i.type===t.FLOAT_MAT2&&(s=2),i.type===t.FLOAT_MAT3&&(s=3),i.type===t.FLOAT_MAT4&&(s=4),r[o]={type:i.type,location:t.getAttribLocation(n,o),locationSize:s}}return r}function Qc(t){return t!==``}function $c(t,n){let r=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function el(t,n){return t.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}var tl=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(t){return t.replace(tl,il)}var rl=new Map;function il(t,n){let r=X[n];if(r===void 0){let t=rl.get(n);if(t!==void 0)r=X[t],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,n,t);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+n+`>`)}return nl(r)}var al=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(t){return t.replace(al,sl)}function sl(t,n,r,i){let a=``;for(let t=parseInt(n);t<parseInt(r);t++)a+=i.replace(/\[\s*i\s*\]/g,`[ `+t+` ]`).replace(/UNROLLED_LOOP_INDEX/g,t);return a}function cl(t){let n=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision===`highp`?n+=`
#define HIGH_PRECISION`:t.precision===`mediump`?n+=`
#define MEDIUM_PRECISION`:t.precision===`lowp`&&(n+=`
#define LOW_PRECISION`),n}var ll={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ul(t){return ll[t.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var dl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function fl(t){return t.envMap===!1?`ENVMAP_TYPE_CUBE`:dl[t.envMapMode]||`ENVMAP_TYPE_CUBE`}var pl={302:`ENVMAP_MODE_REFRACTION`};function ml(t){return t.envMap===!1?`ENVMAP_MODE_REFLECTION`:pl[t.envMapMode]||`ENVMAP_MODE_REFLECTION`}var hl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function gl(t){return t.envMap===!1?`ENVMAP_BLENDING_NONE`:hl[t.combine]||`ENVMAP_BLENDING_NONE`}function _l(t){let n=t.envMapCubeUVHeight;if(n===null)return null;let r=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(2**r,112)),texelHeight:i,maxMip:r}}function vl(t,n,r,i){let a=t.getContext(),o=r.defines,s=r.vertexShader,c=r.fragmentShader,l=ul(r),u=fl(r),d=ml(r),f=gl(r),p=_l(r),m=Yc(r),h=Xc(o),g=a.createProgram(),_,v,y=r.glslVersion?`#version `+r.glslVersion+`
`:``;r.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h].filter(Qc).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h].filter(Qc).join(`
`),v.length>0&&(v+=`
`)):(_=[cl(r),`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h,r.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,r.batching?`#define USE_BATCHING`:``,r.batchingColor?`#define USE_BATCHING_COLOR`:``,r.instancing?`#define USE_INSTANCING`:``,r.instancingColor?`#define USE_INSTANCING_COLOR`:``,r.instancingMorph?`#define USE_INSTANCING_MORPH`:``,r.useFog&&r.fog?`#define USE_FOG`:``,r.useFog&&r.fogExp2?`#define FOG_EXP2`:``,r.map?`#define USE_MAP`:``,r.envMap?`#define USE_ENVMAP`:``,r.envMap?`#define `+d:``,r.lightMap?`#define USE_LIGHTMAP`:``,r.aoMap?`#define USE_AOMAP`:``,r.bumpMap?`#define USE_BUMPMAP`:``,r.normalMap?`#define USE_NORMALMAP`:``,r.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,r.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,r.displacementMap?`#define USE_DISPLACEMENTMAP`:``,r.emissiveMap?`#define USE_EMISSIVEMAP`:``,r.anisotropy?`#define USE_ANISOTROPY`:``,r.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,r.clearcoatMap?`#define USE_CLEARCOATMAP`:``,r.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,r.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,r.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,r.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,r.specularMap?`#define USE_SPECULARMAP`:``,r.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,r.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,r.roughnessMap?`#define USE_ROUGHNESSMAP`:``,r.metalnessMap?`#define USE_METALNESSMAP`:``,r.alphaMap?`#define USE_ALPHAMAP`:``,r.alphaHash?`#define USE_ALPHAHASH`:``,r.transmission?`#define USE_TRANSMISSION`:``,r.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,r.thicknessMap?`#define USE_THICKNESSMAP`:``,r.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,r.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,r.mapUv?`#define MAP_UV `+r.mapUv:``,r.alphaMapUv?`#define ALPHAMAP_UV `+r.alphaMapUv:``,r.lightMapUv?`#define LIGHTMAP_UV `+r.lightMapUv:``,r.aoMapUv?`#define AOMAP_UV `+r.aoMapUv:``,r.emissiveMapUv?`#define EMISSIVEMAP_UV `+r.emissiveMapUv:``,r.bumpMapUv?`#define BUMPMAP_UV `+r.bumpMapUv:``,r.normalMapUv?`#define NORMALMAP_UV `+r.normalMapUv:``,r.displacementMapUv?`#define DISPLACEMENTMAP_UV `+r.displacementMapUv:``,r.metalnessMapUv?`#define METALNESSMAP_UV `+r.metalnessMapUv:``,r.roughnessMapUv?`#define ROUGHNESSMAP_UV `+r.roughnessMapUv:``,r.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+r.anisotropyMapUv:``,r.clearcoatMapUv?`#define CLEARCOATMAP_UV `+r.clearcoatMapUv:``,r.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+r.clearcoatNormalMapUv:``,r.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+r.clearcoatRoughnessMapUv:``,r.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+r.iridescenceMapUv:``,r.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+r.iridescenceThicknessMapUv:``,r.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+r.sheenColorMapUv:``,r.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+r.sheenRoughnessMapUv:``,r.specularMapUv?`#define SPECULARMAP_UV `+r.specularMapUv:``,r.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+r.specularColorMapUv:``,r.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+r.specularIntensityMapUv:``,r.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+r.transmissionMapUv:``,r.thicknessMapUv?`#define THICKNESSMAP_UV `+r.thicknessMapUv:``,r.vertexTangents&&r.flatShading===!1?`#define USE_TANGENT`:``,r.vertexNormals?`#define HAS_NORMAL`:``,r.vertexColors?`#define USE_COLOR`:``,r.vertexAlphas?`#define USE_COLOR_ALPHA`:``,r.vertexUv1s?`#define USE_UV1`:``,r.vertexUv2s?`#define USE_UV2`:``,r.vertexUv3s?`#define USE_UV3`:``,r.pointsUvs?`#define USE_POINTS_UV`:``,r.flatShading?`#define FLAT_SHADED`:``,r.skinning?`#define USE_SKINNING`:``,r.morphTargets?`#define USE_MORPHTARGETS`:``,r.morphNormals&&r.flatShading===!1?`#define USE_MORPHNORMALS`:``,r.morphColors?`#define USE_MORPHCOLORS`:``,r.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+r.morphTextureStride:``,r.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+r.morphTargetsCount:``,r.doubleSided?`#define DOUBLE_SIDED`:``,r.flipSided?`#define FLIP_SIDED`:``,r.shadowMapEnabled?`#define USE_SHADOWMAP`:``,r.shadowMapEnabled?`#define `+l:``,r.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,r.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,r.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,r.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Qc).join(`
`),v=[cl(r),`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h,r.useFog&&r.fog?`#define USE_FOG`:``,r.useFog&&r.fogExp2?`#define FOG_EXP2`:``,r.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,r.map?`#define USE_MAP`:``,r.matcap?`#define USE_MATCAP`:``,r.envMap?`#define USE_ENVMAP`:``,r.envMap?`#define `+u:``,r.envMap?`#define `+d:``,r.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,r.lightMap?`#define USE_LIGHTMAP`:``,r.aoMap?`#define USE_AOMAP`:``,r.bumpMap?`#define USE_BUMPMAP`:``,r.normalMap?`#define USE_NORMALMAP`:``,r.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,r.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,r.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,r.emissiveMap?`#define USE_EMISSIVEMAP`:``,r.anisotropy?`#define USE_ANISOTROPY`:``,r.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,r.clearcoat?`#define USE_CLEARCOAT`:``,r.clearcoatMap?`#define USE_CLEARCOATMAP`:``,r.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,r.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,r.dispersion?`#define USE_DISPERSION`:``,r.retroreflection?`#define USE_RETROREFLECTION`:``,r.iridescence?`#define USE_IRIDESCENCE`:``,r.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,r.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,r.specularMap?`#define USE_SPECULARMAP`:``,r.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,r.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,r.roughnessMap?`#define USE_ROUGHNESSMAP`:``,r.metalnessMap?`#define USE_METALNESSMAP`:``,r.alphaMap?`#define USE_ALPHAMAP`:``,r.alphaTest?`#define USE_ALPHATEST`:``,r.alphaHash?`#define USE_ALPHAHASH`:``,r.sheen?`#define USE_SHEEN`:``,r.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,r.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,r.transmission?`#define USE_TRANSMISSION`:``,r.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,r.thicknessMap?`#define USE_THICKNESSMAP`:``,r.vertexTangents&&r.flatShading===!1?`#define USE_TANGENT`:``,r.vertexColors||r.instancingColor?`#define USE_COLOR`:``,r.vertexAlphas||r.batchingColor?`#define USE_COLOR_ALPHA`:``,r.vertexUv1s?`#define USE_UV1`:``,r.vertexUv2s?`#define USE_UV2`:``,r.vertexUv3s?`#define USE_UV3`:``,r.pointsUvs?`#define USE_POINTS_UV`:``,r.gradientMap?`#define USE_GRADIENTMAP`:``,r.flatShading?`#define FLAT_SHADED`:``,r.doubleSided?`#define DOUBLE_SIDED`:``,r.flipSided?`#define FLIP_SIDED`:``,r.shadowMapEnabled?`#define USE_SHADOWMAP`:``,r.shadowMapEnabled?`#define `+l:``,r.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,r.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,r.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,r.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,r.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,r.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,r.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,r.toneMapping===0?``:`#define TONE_MAPPING`,r.toneMapping===0?``:X.tonemapping_pars_fragment,r.toneMapping===0?``:Kc(`toneMapping`,r.toneMapping),r.dithering?`#define DITHERING`:``,r.opaque?`#define OPAQUE`:``,X.colorspace_pars_fragment,Wc(`linearToOutputTexel`,r.outputColorSpace),Jc(),r.useDepthPacking?`#define DEPTH_PACKING `+r.depthPacking:``,`
`].filter(Qc).join(`
`)),s=nl(s),s=$c(s,r),s=el(s,r),c=nl(c),c=$c(c,r),c=el(c,r),s=ol(s),c=ol(c),r.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,r.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,r.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=Lc(a,a.VERTEX_SHADER,b),C=Lc(a,a.FRAGMENT_SHADER,x);a.attachShader(g,S),a.attachShader(g,C),r.index0AttributeName===void 0?r.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,`position`):a.bindAttribLocation(g,0,r.index0AttributeName),a.linkProgram(g);function w(n){if(t.debug.checkShaderErrors){let r=a.getProgramInfoLog(g)||``,i=a.getShaderInfoLog(S)||``,o=a.getShaderInfoLog(C)||``,s=r.trim(),c=i.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1){if(u=!1,typeof t.debug.onShaderError==`function`)t.debug.onShaderError(a,g,S,C);else{let t=Uc(a,S,`vertex`),r=Uc(a,C,`fragment`);V(`WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+n.name+`
Material Type: `+n.type+`

Program Info Log: `+s+`
`+t+`
`+r)}}else s===``?(c===``||l===``)&&(d=!1):B(`WebGLProgram: Program Info Log:`,s);d&&(n.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}a.deleteShader(S),a.deleteShader(C),T=new Ic(a,g),E=Zc(a,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(g,Rc)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=zc++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var yl=0,bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,r){let i=this._getShaderCacheForMaterial(t);return i.has(n)===!1&&(i.add(n),n.usedTimes++),i.has(r)===!1&&(i.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let t of n)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){let n=this.shaderCache,r=n.get(t);return r===void 0&&(r=new xl(t),n.set(t,r)),r}},xl=class{constructor(t){this.id=yl++,this.code=t,this.usedTimes=0}};function Sl(t){return t===1030||t===37490||t===36285}function Cl(t,n,r,i,a,o){let s=new sn,c=new bl,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(t){return l.add(t),t===0?`uv`:`uv${t}`}function g(a,s,u,d,g,_){let v=d.fog,y=g.geometry,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,x=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,S=n.get(a.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&B(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,ee,A;if(w){let t=Wo[w];O=t.vertexShader,k=t.fragmentShader}else{O=a.vertexShader,k=a.fragmentShader;let t=c.getVertexShaderStage(a),n=c.getFragmentShaderStage(a);c.update(a,t,n),ee=t.id,A=n.id}let te=t.getRenderTarget(),ne=t.state.buffers.depth.getReversed(),re=g.isInstancedMesh===!0,j=g.isBatchedMesh===!0,M=!!a.map,N=!!a.matcap,ie=!!S,P=!!a.aoMap,ae=!!a.lightMap,oe=!!a.bumpMap&&a.wireframe===!1,se=!!a.normalMap,ce=!!a.displacementMap,le=!!a.emissiveMap,F=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.dispersion>0,me=a.retroreflectivity>0,he=a.iridescence>0,ge=a.sheen>0,_e=a.transmission>0,ve=de&&!!a.anisotropyMap,ye=fe&&!!a.clearcoatMap,be=fe&&!!a.clearcoatNormalMap,xe=fe&&!!a.clearcoatRoughnessMap,Se=he&&!!a.iridescenceMap,Ce=he&&!!a.iridescenceThicknessMap,we=ge&&!!a.sheenColorMap,Te=ge&&!!a.sheenRoughnessMap,Ee=!!a.specularMap,De=!!a.specularColorMap,Oe=!!a.specularIntensityMap,ke=_e&&!!a.transmissionMap,Ae=_e&&!!a.thicknessMap,je=!!a.gradientMap,Me=!!a.alphaMap,Ne=a.alphaTest>0,I=!!a.alphaHash,Pe=!!a.extensions,Fe=0;a.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=t.toneMapping);let Ie={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:ee,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:j,batchingColor:j&&g._colorsTexture!==null,instancing:re,instancingColor:re&&g.instanceColor!==null,instancingMorph:re&&g.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:q.workingColorSpace,alphaToCoverage:!!a.alphaToCoverage,map:M,matcap:N,envMap:ie,envMapMode:ie&&S.mapping,envMapCubeUVHeight:C,aoMap:P,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&a.normalMapType===1,normalMapTangentSpace:se&&a.normalMapType===0,packedNormalMap:se&&a.normalMapType===0&&Sl(a.normalMap.format),metalnessMap:F,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:I,combine:a.combine,mapUv:M&&h(a.map.channel),aoMapUv:P&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:oe&&h(a.bumpMap.channel),normalMapUv:se&&h(a.normalMap.channel),displacementMapUv:ce&&h(a.displacementMap.channel),emissiveMapUv:le&&h(a.emissiveMap.channel),metalnessMapUv:F&&h(a.metalnessMap.channel),roughnessMapUv:ue&&h(a.roughnessMap.channel),anisotropyMapUv:ve&&h(a.anisotropyMap.channel),clearcoatMapUv:ye&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:be&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:we&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Te&&h(a.sheenRoughnessMap.channel),specularMapUv:Ee&&h(a.specularMap.channel),specularColorMapUv:De&&h(a.specularColorMap.channel),specularIntensityMapUv:Oe&&h(a.specularIntensityMap.channel),transmissionMapUv:ke&&h(a.transmissionMap.channel),thicknessMapUv:Ae&&h(a.thicknessMap.channel),alphaMapUv:Me&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(se||de),vertexNormals:!!y.attributes.normal,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(M||Me),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||y.attributes.normal===void 0&&se===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:s.sun.length,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numSunLightShadows:s.sunShadowMap.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:t.shadowMap.enabled&&u.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:M&&a.map.isVideoTexture===!0&&q.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&a.emissiveMap.isVideoTexture===!0&&q.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Pe&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&a.extensions.multiDraw===!0||j)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function _(n){let r=[];if(n.shaderID?r.push(n.shaderID):(r.push(n.customVertexShaderID),r.push(n.customFragmentShaderID)),n.defines!==void 0)for(let t in n.defines)r.push(t),r.push(n.defines[t]);return n.isRawShaderMaterial===!1&&(v(r,n),y(r,n),r.push(t.outputColorSpace)),r.push(n.customProgramCacheKey),r.join()}function v(t,n){t.push(n.precision),t.push(n.outputColorSpace),t.push(n.envMapMode),t.push(n.envMapCubeUVHeight),t.push(n.mapUv),t.push(n.alphaMapUv),t.push(n.lightMapUv),t.push(n.aoMapUv),t.push(n.bumpMapUv),t.push(n.normalMapUv),t.push(n.displacementMapUv),t.push(n.emissiveMapUv),t.push(n.metalnessMapUv),t.push(n.roughnessMapUv),t.push(n.anisotropyMapUv),t.push(n.clearcoatMapUv),t.push(n.clearcoatNormalMapUv),t.push(n.clearcoatRoughnessMapUv),t.push(n.iridescenceMapUv),t.push(n.iridescenceThicknessMapUv),t.push(n.sheenColorMapUv),t.push(n.sheenRoughnessMapUv),t.push(n.specularMapUv),t.push(n.specularColorMapUv),t.push(n.specularIntensityMapUv),t.push(n.transmissionMapUv),t.push(n.thicknessMapUv),t.push(n.combine),t.push(n.fogExp2),t.push(n.sizeAttenuation),t.push(n.morphTargetsCount),t.push(n.morphAttributeCount),t.push(n.numSunLights),t.push(n.numDirLights),t.push(n.numPointLights),t.push(n.numSpotLights),t.push(n.numSpotLightMaps),t.push(n.numHemiLights),t.push(n.numRectAreaLights),t.push(n.numSunLightShadows),t.push(n.numDirLightShadows),t.push(n.numPointLightShadows),t.push(n.numSpotLightShadows),t.push(n.numSpotLightShadowsWithMaps),t.push(n.numLightProbes),t.push(n.shadowMapType),t.push(n.toneMapping),t.push(n.numClippingPlanes),t.push(n.numClipIntersection),t.push(n.depthPacking)}function y(t,n){s.disableAll(),n.instancing&&s.enable(0),n.instancingColor&&s.enable(1),n.instancingMorph&&s.enable(2),n.matcap&&s.enable(3),n.envMap&&s.enable(4),n.normalMapObjectSpace&&s.enable(5),n.normalMapTangentSpace&&s.enable(6),n.clearcoat&&s.enable(7),n.iridescence&&s.enable(8),n.alphaTest&&s.enable(9),n.vertexColors&&s.enable(10),n.vertexAlphas&&s.enable(11),n.vertexUv1s&&s.enable(12),n.vertexUv2s&&s.enable(13),n.vertexUv3s&&s.enable(14),n.vertexTangents&&s.enable(15),n.anisotropy&&s.enable(16),n.alphaHash&&s.enable(17),n.batching&&s.enable(18),n.dispersion&&s.enable(19),n.retroreflection&&s.enable(24),n.batchingColor&&s.enable(20),n.gradientMap&&s.enable(21),n.packedNormalMap&&s.enable(22),n.vertexNormals&&s.enable(23),t.push(s.mask),s.disableAll(),n.fog&&s.enable(0),n.useFog&&s.enable(1),n.flatShading&&s.enable(2),n.logarithmicDepthBuffer&&s.enable(3),n.reversedDepthBuffer&&s.enable(4),n.skinning&&s.enable(5),n.morphTargets&&s.enable(6),n.morphNormals&&s.enable(7),n.morphColors&&s.enable(8),n.premultipliedAlpha&&s.enable(9),n.shadowMapEnabled&&s.enable(10),n.doubleSided&&s.enable(11),n.flipSided&&s.enable(12),n.useDepthPacking&&s.enable(13),n.dithering&&s.enable(14),n.transmission&&s.enable(15),n.sheen&&s.enable(16),n.opaque&&s.enable(17),n.pointsUvs&&s.enable(18),n.decodeVideoTexture&&s.enable(19),n.decodeVideoTextureEmissive&&s.enable(20),n.alphaToCoverage&&s.enable(21),n.numLightProbeGrids>0&&s.enable(22),n.hasPositionAttribute&&s.enable(23),t.push(s.mask)}function b(t){let n=m[t.type],r;if(n){let t=Wo[n];r=ca.clone(t.uniforms)}else r=t.uniforms;return r}function x(n,r){let i=d.get(r);return i===void 0?(i=new vl(t,r,n,a),u.push(i),d.set(r,i)):++i.usedTimes,i}function S(t){if(--t.usedTimes===0){let n=u.indexOf(t);u[n]=u[u.length-1],u.pop(),d.delete(t.cacheKey),t.destroy()}}function C(t){c.remove(t)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function wl(){let t=new WeakMap;function n(n){return t.has(n)}function r(n){let r=t.get(n);return r===void 0&&(r={},t.set(n,r)),r}function i(n){t.delete(n)}function a(n,r,i){t.get(n)[r]=i}function o(){t=new WeakMap}return{has:n,get:r,remove:i,update:a,dispose:o}}function Tl(t,n){return t.groupOrder===n.groupOrder?t.renderOrder===n.renderOrder?t.material.id===n.material.id?t.materialVariant===n.materialVariant?t.z===n.z?t.id-n.id:t.z-n.z:t.materialVariant-n.materialVariant:t.material.id-n.material.id:t.renderOrder-n.renderOrder:t.groupOrder-n.groupOrder}function El(t,n){return t.groupOrder===n.groupOrder?t.renderOrder===n.renderOrder?t.z===n.z?t.id-n.id:n.z-t.z:t.renderOrder-n.renderOrder:t.groupOrder-n.groupOrder}function Dl(){let t=[],n=0,r=[],i=[],a=[];function o(){n=0,r.length=0,i.length=0,a.length=0}function s(t){let n=0;return t.isInstancedMesh&&(n+=2),t.isSkinnedMesh&&(n+=1),n}function c(r,i,a,o,c,l){let u=t[n];return u===void 0?(u={id:r.id,object:r,geometry:i,material:a,materialVariant:s(r),groupOrder:o,renderOrder:r.renderOrder,z:c,group:l},t[n]=u):(u.id=r.id,u.object=r,u.geometry=i,u.material=a,u.materialVariant=s(r),u.groupOrder=o,u.renderOrder=r.renderOrder,u.z=c,u.group=l),n++,u}function l(t,n,o,s,l,u,d){d.reversedDepth===!0&&(l=-l);let f=c(t,n,o,s,l,u);o.transmission>0?i.push(f):o.transparent===!0?a.push(f):r.push(f)}function u(t,n,o,s,l,u){let d=c(t,n,o,s,l,u);o.transmission>0?i.unshift(d):o.transparent===!0?a.unshift(d):r.unshift(d)}function d(t,n){r.length>1&&r.sort(t||Tl),i.length>1&&i.sort(n||El),a.length>1&&a.sort(n||El)}function f(){for(let r=n,i=t.length;r<i;r++){let n=t[r];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:r,transmissive:i,transparent:a,init:o,push:l,unshift:u,finish:f,sort:d}}function Ol(){let t=new WeakMap;function n(n,r){let i=t.get(n),a;return i===void 0?(a=new Dl,t.set(n,[a])):r>=i.length?(a=new Dl,i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}function kl(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let r;switch(n.type){case`SunLight`:case`DirectionalLight`:r={direction:new G,color:new Y};break;case`SpotLight`:r={position:new G,direction:new G,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:r={position:new G,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:r={direction:new G,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:r={color:new Y,position:new G,halfWidth:new G,halfHeight:new G}}return t[n.id]=r,r}}}function Al(){let t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let r;switch(n.type){case`SunLight`:case`DirectionalLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return t[n.id]=r,r}}}var jl=0;function Ml(t,n){return(n.castShadow?2:0)-(t.castShadow?2:0)+ +!!n.map-!!t.map}function Nl(t){let n=new kl,r=Al(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)i.probe.push(new G);let a=new G,o=new J,s=new J;function c(a){let o=0,s=0,c=0;for(let t=0;t<9;t++)i.probe[t].set(0,0,0);let l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;a.sort(Ml);for(let t=0,C=a.length;t<C;t++){let C=a[t],w=C.color,T=C.intensity,E=C.distance,D=null;if(C.shadow&&C.shadow.map&&(D=C.shadow.map.texture.format===1030?C.shadow.map.texture:C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)o+=w.r*T,s+=w.g*T,c+=w.b*T;else if(C.isLightProbe){for(let t=0;t<9;t++)i.probe[t].addScaledVector(C.sh.coefficients[t],T);S++}else if(C.isSunLight){let t=n.get(C);if(t.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let t=C.shadow,n=r.get(C);n.shadowIntensity=t.intensity,n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize.copy(t.mapSize).multiply(t.getFrameExtents()),i.sunShadow[u]=n,i.sunShadowMap[u]=D;let a=t.getViewportCount();for(let n=0;n<a;n++)i.sunShadowMatrix[d+n]=t.getMatrix(n),i.sunShadowCascade[d+n]=t._cascadeData[n];d+=a,u++}i.sun[l]=t,l++}else if(C.isDirectionalLight){let t=n.get(C);if(t.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let t=C.shadow,n=r.get(C);n.shadowIntensity=t.intensity,n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,i.directionalShadow[f]=n,i.directionalShadowMap[f]=D,i.directionalShadowMatrix[f]=C.shadow.matrix,_++}i.directional[f]=t,f++}else if(C.isSpotLight){let t=n.get(C);t.position.setFromMatrixPosition(C.matrixWorld),t.color.copy(w).multiplyScalar(T),t.distance=E,t.coneCos=Math.cos(C.angle),t.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),t.decay=C.decay,i.spot[m]=t;let a=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,a.updateMatrices(C),C.castShadow&&x++),i.spotLightMatrix[m]=a.matrix,C.castShadow){let t=r.get(C);t.shadowIntensity=a.intensity,t.shadowBias=a.bias,t.shadowNormalBias=a.normalBias,t.shadowRadius=a.radius,t.shadowMapSize=a.mapSize,i.spotShadow[m]=t,i.spotShadowMap[m]=D,y++}m++}else if(C.isRectAreaLight){let t=n.get(C);t.color.copy(w).multiplyScalar(T),t.halfWidth.set(C.width*.5,0,0),t.halfHeight.set(0,C.height*.5,0),i.rectArea[h]=t,h++}else if(C.isPointLight){let t=n.get(C);if(t.color.copy(C.color).multiplyScalar(C.intensity),t.distance=C.distance,t.decay=C.decay,C.castShadow){let t=C.shadow,n=r.get(C);n.shadowIntensity=t.intensity,n.shadowBias=t.bias,n.shadowNormalBias=t.normalBias,n.shadowRadius=t.radius,n.shadowMapSize=t.mapSize,n.shadowCameraNear=t.camera.near,n.shadowCameraFar=t.camera.far,i.pointShadow[p]=n,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=C.shadow.matrix,v++}i.point[p]=t,p++}else if(C.isHemisphereLight){let t=n.get(C);t.skyColor.copy(C.color).multiplyScalar(T),t.groundColor.copy(C.groundColor).multiplyScalar(T),i.hemi[g]=t,g++}}h>0&&(t.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=Z.LTC_FLOAT_1,i.rectAreaLTC2=Z.LTC_FLOAT_2):(i.rectAreaLTC1=Z.LTC_HALF_1,i.rectAreaLTC2=Z.LTC_HALF_2)),i.ambient[0]=o,i.ambient[1]=s,i.ambient[2]=c;let C=i.hash;(C.sunLength!==l||C.directionalLength!==f||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==h||C.hemiLength!==g||C.numSunShadows!==u||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==S)&&(i.sun.length=l,i.directional.length=f,i.spot.length=m,i.rectArea.length=h,i.point.length=p,i.hemi.length=g,i.sunShadow.length=u,i.sunShadowMap.length=u,i.sunShadowMatrix.length=d,i.sunShadowCascade.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.directionalShadowMatrix.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.pointShadowMatrix.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-x,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=S,C.sunLength=l,C.directionalLength=f,C.pointLength=p,C.spotLength=m,C.rectAreaLength=h,C.hemiLength=g,C.numSunShadows=u,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=S,i.version=jl++)}function l(t,n){let r=0,c=0,l=0,u=0,d=0,f=0,p=n.matrixWorldInverse;for(let n=0,m=t.length;n<m;n++){let m=t[n];if(m.isSunLight){let t=i.sun[r];t.direction.setFromMatrixPosition(m.matrixWorld),t.direction.transformDirection(p),r++}else if(m.isDirectionalLight){let t=i.directional[c];t.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),t.direction.sub(a),t.direction.transformDirection(p),c++}else if(m.isSpotLight){let t=i.spot[u];t.position.setFromMatrixPosition(m.matrixWorld),t.position.applyMatrix4(p),t.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),t.direction.sub(a),t.direction.transformDirection(p),u++}else if(m.isRectAreaLight){let t=i.rectArea[d];t.position.setFromMatrixPosition(m.matrixWorld),t.position.applyMatrix4(p),s.identity(),o.copy(m.matrixWorld),o.premultiply(p),s.extractRotation(o),t.halfWidth.set(m.width*.5,0,0),t.halfHeight.set(0,m.height*.5,0),t.halfWidth.applyMatrix4(s),t.halfHeight.applyMatrix4(s),d++}else if(m.isPointLight){let t=i.point[l];t.position.setFromMatrixPosition(m.matrixWorld),t.position.applyMatrix4(p),l++}else if(m.isHemisphereLight){let t=i.hemi[f];t.direction.setFromMatrixPosition(m.matrixWorld),t.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:i}}function Pl(t){let n=new Nl(t),r=[],i=[],a=[];function o(t){f.camera=t,r.length=0,i.length=0,a.length=0}function s(t){r.push(t)}function c(t){i.push(t)}function l(t){a.push(t)}function u(){n.setup(r)}function d(t){n.setupView(r,t)}let f={lightsArray:r,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:c,pushLightProbeGrid:l}}function Fl(t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new Pl(t),n.set(r,[o])):i>=a.length?(o=new Pl(t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var Il=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ll=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rl=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],zl=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Bl=new J,Vl=new G,Hl=new G;function Ul(t,n,r){let i=new ki,o=new W,s=new W,l=new Gt,u=new ha,d=new ga,f={},p=r.maxTextureSize,m={0:1,1:0,2:2},h=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Il,fragmentShader:Ll}),y=h.clone();y.defines.HORIZONTAL_PASS=1;let b=new Er;b.setAttribute(`position`,new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $r(b,h),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(n,r,u){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||n.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),h=t.state;h.setBlending(0),h.buffers.depth.getReversed()===!0?h.buffers.color.setClear(0,0,0,0):h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let y=C!==this.type;y&&r.traverse(function(t){t.material&&(Array.isArray(t.material)?t.material.forEach(t=>t.needsUpdate=!0):t.material.needsUpdate=!0)});for(let d=0,f=n.length;d<f;d++){let f=n[d],m=f.shadow;if(m===void 0){B(`WebGLShadowMap:`,f,`has no shadow.`);continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;o.copy(m.mapSize);let b=m.getFrameExtents();o.multiply(b),s.copy(m.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(s.x=Math.floor(p/b.x),o.x=s.x*b.x,m.mapSize.x=s.x),o.y>p&&(s.y=Math.floor(p/b.y),o.y=s.y*b.y,m.mapSize.y=s.y));let x=t.state.buffers.depth.getReversed();if(m.camera._reversedDepth=x,m.map===null||y===!0){if(m.map!==null&&(m.map.depthTexture!==null&&(m.map.depthTexture.dispose(),m.map.depthTexture=null),m.map.dispose()),this.type===3){if(f.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}m.map=new qt(o.x,o.y,{format:A,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),m.map.texture.name=f.name+`.shadowMap`,m.map.depthTexture=new Qi(o.x,o.y,_),m.map.depthTexture.name=f.name+`.shadowMapDepth`,m.map.depthTexture.format=D,m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=a,m.map.depthTexture.magFilter=a}else f.isPointLight?(m.map=new bs(o.x),m.map.depthTexture=new $i(o.x,g)):(m.map=new qt(o.x,o.y),m.map.depthTexture=new Qi(o.x,o.y,g)),m.map.depthTexture.name=f.name+`.shadowMap`,m.map.depthTexture.format=D,this.type===1?(m.map.depthTexture.compareFunction=x?518:515,m.map.depthTexture.minFilter=c,m.map.depthTexture.magFilter=c):(m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=a,m.map.depthTexture.magFilter=a);m.camera.updateProjectionMatrix()}m.map.isWebGLCubeRenderTarget!==!0&&(m.map.width!==o.x||m.map.height!==o.y)&&m.map.setSize(o.x,o.y);let S=m.map.isWebGLCubeRenderTarget?6:m.getViewportCount();f.isPointLight!==!0&&m.updateMatrices(f,u);for(let n=0;n<S;n++){let a=m.getCamera(n);if(f.isPointLight){let t=m.camera,r=m.matrix,i=f.distance||t.far;i!==t.far&&(t.far=i,t.updateProjectionMatrix()),Vl.setFromMatrixPosition(f.matrixWorld),t.position.copy(Vl),Hl.copy(t.position),Hl.add(Rl[n]),t.up.copy(zl[n]),t.lookAt(Hl),t.updateMatrixWorld(),r.makeTranslation(-Vl.x,-Vl.y,-Vl.z),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),m._frustum.setFromProjectionMatrix(Bl,t.coordinateSystem,t.reversedDepth)}if(m.map.isWebGLCubeRenderTarget)t.setRenderTarget(m.map,n),t.clear();else{n===0&&(t.setRenderTarget(m.map),t.clear());let r=m.getViewport(n);l.set(s.x*r.x,s.y*r.y,s.x*r.z,s.y*r.w),h.viewport(l)}i=m.getFrustum(n),E(r,u,a,f,this.type)}m.isPointLightShadow!==!0&&this.type===3&&w(m,u),m.needsUpdate=!1}C=this.type,S.needsUpdate=!1,t.setRenderTarget(d,f,m)};function w(r,i){let a=n.update(x);h.defines.VSM_SAMPLES!==r.blurSamples&&(h.defines.VSM_SAMPLES=r.blurSamples,y.defines.VSM_SAMPLES=r.blurSamples,h.needsUpdate=!0,y.needsUpdate=!0),r.mapPass===null?r.mapPass=new qt(o.x,o.y,{format:A,type:v}):(r.mapPass.width!==r.map.width||r.mapPass.height!==r.map.height)&&r.mapPass.setSize(r.map.width,r.map.height),h.uniforms.shadow_pass.value=r.map.depthTexture,h.uniforms.resolution.value.set(r.map.width,r.map.height),h.uniforms.radius.value=r.radius,t.setRenderTarget(r.mapPass),t.clear(),t.renderBufferDirect(i,null,a,h,x,null),y.uniforms.shadow_pass.value=r.mapPass.texture,y.uniforms.resolution.value.set(r.map.width,r.map.height),y.uniforms.radius.value=r.radius,t.setRenderTarget(r.map),t.clear(),t.renderBufferDirect(i,null,a,y,x,null)}function T(n,r,i,a){let o=null,s=i.isPointLight===!0?n.customDistanceMaterial:n.customDepthMaterial;if(s!==void 0)o=s;else if(o=i.isPointLight===!0?d:u,t.localClippingEnabled&&r.clipShadows===!0&&Array.isArray(r.clippingPlanes)&&r.clippingPlanes.length!==0||r.displacementMap&&r.displacementScale!==0||r.alphaMap&&r.alphaTest>0||r.map&&r.alphaTest>0||r.alphaToCoverage===!0){let t=o.uuid,n=r.uuid,i=f[t];i===void 0&&(i={},f[t]=i);let a=i[n];a===void 0&&(a=o.clone(),i[n]=a,r.addEventListener(`dispose`,O)),o=a}if(o.visible=r.visible,o.wireframe=r.wireframe,a===3?o.side=r.shadowSide===null?r.side:r.shadowSide:o.side=r.shadowSide===null?m[r.side]:r.shadowSide,o.alphaMap=r.alphaMap,o.alphaTest=r.alphaToCoverage===!0?.5:r.alphaTest,o.map=r.map,o.clipShadows=r.clipShadows,o.clippingPlanes=r.clippingPlanes,o.clipIntersection=r.clipIntersection,o.displacementMap=r.displacementMap,o.displacementScale=r.displacementScale,o.displacementBias=r.displacementBias,o.wireframeLinewidth=r.wireframeLinewidth,o.linewidth=r.linewidth,i.isPointLight===!0&&o.isMeshDistanceMaterial===!0){let n=t.properties.get(o);n.light=i}return o}function E(r,a,o,s,c){if(r.visible===!1)return;if(r.layers.test(a.layers)&&(r.isMesh||r.isLine||r.isPoints)&&(r.castShadow||r.receiveShadow&&c===3)&&(!r.frustumCulled||r.intersectsFrustum(i))){r.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,r.matrixWorld);let i=n.update(r),l=r.material;if(Array.isArray(l)){let n=i.groups;for(let u=0,d=n.length;u<d;u++){let d=n[u],f=l[d.materialIndex];if(f&&f.visible){let n=T(r,f,s,c);r.onBeforeShadow(t,r,a,o,i,n,d),t.renderBufferDirect(o,null,i,n,r,d),r.onAfterShadow(t,r,a,o,i,n,d)}}}else if(l.visible){let n=T(r,l,s,c);r.onBeforeShadow(t,r,a,o,i,n,null),t.renderBufferDirect(o,null,i,n,r,null),r.onAfterShadow(t,r,a,o,i,n,null)}}let l=r.children;for(let t=0,n=l.length;t<n;t++)E(l[t],a,o,s,c)}function O(t){t.target.removeEventListener(`dispose`,O);for(let n in f){let r=f[n],i=t.target.uuid;i in r&&(r[i].dispose(),delete r[i])}}}function Wl(t,n){function r(){let n=!1,r=new Gt,i=null,a=new Gt(0,0,0,0);return{setMask:function(r){i!==r&&!n&&(t.colorMask(r,r,r,r),i=r)},setLocked:function(t){n=t},setClear:function(n,i,o,s,c){c===!0&&(n*=s,i*=s,o*=s),r.set(n,i,o,s),a.equals(r)===!1&&(t.clearColor(n,i,o,s),a.copy(r))},reset:function(){n=!1,i=null,a.set(-1,0,0,0)}}}function i(){let r=!1,i=!1,a=null,o=null,s=null;return{setReversed:function(t){if(i!==t){let r=n.get(`EXT_clip_control`);t?r.clipControlEXT(r.LOWER_LEFT_EXT,r.ZERO_TO_ONE_EXT):r.clipControlEXT(r.LOWER_LEFT_EXT,r.NEGATIVE_ONE_TO_ONE_EXT),i=t;let a=s;s=null,this.setClear(a)}},getReversed:function(){return i},setTest:function(n){n?F(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(n){a!==n&&!r&&(t.depthMask(n),a=n)},setFunc:function(n){if(i&&(n=tt[n]),o!==n){switch(n){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}o=n}},setLocked:function(t){r=t},setClear:function(n){s!==n&&(s=n,i&&(n=1-n),t.clearDepth(n))},reset:function(){r=!1,a=null,o=null,s=null,i=!1}}}function a(){let n=!1,r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null;return{setTest:function(r){n||(r?F(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(i){r!==i&&!n&&(t.stencilMask(i),r=i)},setFunc:function(n,r,s){(i!==n||a!==r||o!==s)&&(t.stencilFunc(n,r,s),i=n,a=r,o=s)},setOp:function(n,r,i){(s!==n||c!==r||l!==i)&&(t.stencilOp(n,r,i),s=n,c=r,l=i)},setLocked:function(t){n=t},setClear:function(n){u!==n&&(t.clearStencil(n),u=n)},reset:function(){n=!1,r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=null}}}let o=new r,s=new i,c=new a,l=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Y(0,0,0),E=0,D=!1,O=null,k=null,ee=null,A=null,te=null,ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,j=0,M=t.getParameter(t.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),re=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(M)[1]),re=j>=1);let N=null,ie={},P=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),oe=new Gt().fromArray(P),se=new Gt().fromArray(ae);function ce(n,r,i,a){let o=new Uint8Array(4),s=t.createTexture();t.bindTexture(n,s),t.texParameteri(n,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(n,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let s=0;s<i;s++)n===t.TEXTURE_3D||n===t.TEXTURE_2D_ARRAY?t.texImage3D(r,0,t.RGBA,1,1,a,0,t.RGBA,t.UNSIGNED_BYTE,o):t.texImage2D(r+s,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,o);return s}let le={};le[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),F(t.DEPTH_TEST),s.setFunc(3),ve(!1),ye(1),F(t.CULL_FACE),ge(0);function F(n){d[n]!==!0&&(t.enable(n),d[n]=!0)}function ue(n){d[n]!==!1&&(t.disable(n),d[n]=!1)}function de(n,r){return p[n]!==r&&(t.bindFramebuffer(n,r),p[n]=r,n===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=r),n===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=r),!0)}function fe(n,r){let i=h,a=!1;if(n){i=m.get(r),i===void 0&&(i=[],m.set(r,i));let o=n.textures;if(i.length!==o.length||i[0]!==t.COLOR_ATTACHMENT0){for(let n=0,r=o.length;n<r;n++)i[n]=t.COLOR_ATTACHMENT0+n;i.length=o.length,a=!0}}else i[0]!==t.BACK&&(i[0]=t.BACK,a=!0);a&&t.drawBuffers(i)}function pe(n){return g!==n&&(t.useProgram(n),g=n,!0)}let me={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};me[103]=t.MIN,me[104]=t.MAX;let he={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function ge(n,r,i,a,o,s,c,l,u,d){if(n===0)_===!0&&(ue(t.BLEND),_=!1);else if(_===!1&&(F(t.BLEND),_=!0),n!==5){if(n!==v||d!==D){if((y!==100||S!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,S=100),d)switch(n){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:V(`WebGLState: Invalid blending: `,n)}else switch(n){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,n)}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=n,D=d}}else o||=r,s||=i,c||=a,(r!==y||o!==S)&&(t.blendEquationSeparate(me[r],me[o]),y=r,S=o),(i!==b||a!==x||s!==C||c!==w)&&(t.blendFuncSeparate(he[i],he[a],he[s],he[c]),b=i,x=a,C=s,w=c),(l.equals(T)===!1||u!==E)&&(t.blendColor(l.r,l.g,l.b,u),T.copy(l),E=u),v=n,D=!1}function _e(n,r){n.side===2?ue(t.CULL_FACE):F(t.CULL_FACE);let i=n.side===1;r&&(i=!i),ve(i),n.blending===1&&n.transparent===!1?ge(0):ge(n.blending,n.blendEquation,n.blendSrc,n.blendDst,n.blendEquationAlpha,n.blendSrcAlpha,n.blendDstAlpha,n.blendColor,n.blendAlpha,n.premultipliedAlpha),s.setFunc(n.depthFunc),s.setTest(n.depthTest),s.setMask(n.depthWrite),o.setMask(n.colorWrite);let a=n.stencilWrite;c.setTest(a),a&&(c.setMask(n.stencilWriteMask),c.setFunc(n.stencilFunc,n.stencilRef,n.stencilFuncMask),c.setOp(n.stencilFail,n.stencilZFail,n.stencilZPass)),xe(n.polygonOffset,n.polygonOffsetFactor,n.polygonOffsetUnits),n.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ve(n){O!==n&&(n?t.frontFace(t.CW):t.frontFace(t.CCW),O=n)}function ye(n){n===0?ue(t.CULL_FACE):(F(t.CULL_FACE),n!==k&&(n===1?t.cullFace(t.BACK):n===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))),k=n}function be(n){n!==ee&&(re&&t.lineWidth(n),ee=n)}function xe(n,r,i){n?(F(t.POLYGON_OFFSET_FILL),(A!==r||te!==i)&&(A=r,te=i,s.getReversed()&&(r=-r),t.polygonOffset(r,i))):ue(t.POLYGON_OFFSET_FILL)}function Se(n){n?F(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function Ce(n){n===void 0&&(n=t.TEXTURE0+ne-1),N!==n&&(t.activeTexture(n),N=n)}function we(n,r,i){i===void 0&&(i=N===null?t.TEXTURE0+ne-1:N);let a=ie[i];a===void 0&&(a={type:void 0,texture:void 0},ie[i]=a),(a.type!==n||a.texture!==r)&&(N!==i&&(t.activeTexture(i),N=i),t.bindTexture(n,r||le[n]),a.type=n,a.texture=r)}function Te(){let n=ie[N];n!==void 0&&n.type!==void 0&&(t.bindTexture(n.type,null),n.type=void 0,n.texture=void 0)}function Ee(){try{t.compressedTexImage2D(...arguments)}catch(t){V(`WebGLState:`,t)}}function De(){try{t.compressedTexImage3D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Oe(){try{t.texSubImage2D(...arguments)}catch(t){V(`WebGLState:`,t)}}function ke(){try{t.texSubImage3D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Ae(){try{t.compressedTexSubImage2D(...arguments)}catch(t){V(`WebGLState:`,t)}}function je(){try{t.compressedTexSubImage3D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Me(){try{t.texStorage2D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Ne(){try{t.texStorage3D(...arguments)}catch(t){V(`WebGLState:`,t)}}function I(){try{t.texImage2D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Pe(){try{t.texImage3D(...arguments)}catch(t){V(`WebGLState:`,t)}}function Fe(n){return f[n]===void 0?t.getParameter(n):f[n]}function Ie(n,r){f[n]!==r&&(t.pixelStorei(n,r),f[n]=r)}function L(n){oe.equals(n)===!1&&(t.scissor(n.x,n.y,n.z,n.w),oe.copy(n))}function Le(n){se.equals(n)===!1&&(t.viewport(n.x,n.y,n.z,n.w),se.copy(n))}function R(n,r){let i=u.get(r);i===void 0&&(i=new WeakMap,u.set(r,i));let a=i.get(n);a===void 0&&(a=t.getUniformBlockIndex(r,n.name),i.set(n,a))}function z(n,r){let i=u.get(r).get(n);l.get(r)!==i&&(t.uniformBlockBinding(r,i,n.__bindingPointIndex),l.set(r,i))}function Re(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},N=null,ie={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new Y(0,0,0),E=0,D=!1,O=null,k=null,ee=null,A=null,te=null,oe.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:F,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:I,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:R,uniformBlockBinding:z,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:L,viewport:Le,reset:Re}}function Gl(t,d,f,p,m,h,g){let _=d.has(`WEBGL_multisampled_render_to_texture`)?d.get(`WEBGL_multisampled_render_to_texture`):null,v=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),y=new W,b=new WeakMap,x=new Set,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(t,n){return w?new OffscreenCanvas(t,n):Je(`canvas`)}function E(t,n,r){let i=1,a=Fe(t);if((a.width>r||a.height>r)&&(i=r/Math.max(a.width,a.height)),i<1){if(typeof HTMLImageElement<`u`&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&t instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&t instanceof ImageBitmap||typeof VideoFrame<`u`&&t instanceof VideoFrame){let r=Math.floor(i*a.width),o=Math.floor(i*a.height);S===void 0&&(S=T(r,o));let s=n?T(r,o):S;return s.width=r,s.height=o,s.getContext(`2d`).drawImage(t,0,0,r,o),B(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+r+`x`+o+`).`),s}return`data`in t&&B(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),t}return t}function D(t){return t.generateMipmaps}function k(n){t.generateMipmap(n)}function ee(n){return n.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:n.isWebGL3DRenderTarget?t.TEXTURE_3D:n.isWebGLArrayRenderTarget||n.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(t[n]!==void 0)return t[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=d.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===t.RED&&(i===t.FLOAT&&(l=t.R32F),i===t.HALF_FLOAT&&(l=t.R16F),i===t.UNSIGNED_BYTE&&(l=t.R8),i===t.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===t.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===t.RED_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.R8UI),i===t.UNSIGNED_SHORT&&(l=t.R16UI),i===t.UNSIGNED_INT&&(l=t.R32UI),i===t.BYTE&&(l=t.R8I),i===t.SHORT&&(l=t.R16I),i===t.INT&&(l=t.R32I)),r===t.RG&&(i===t.FLOAT&&(l=t.RG32F),i===t.HALF_FLOAT&&(l=t.RG16F),i===t.UNSIGNED_BYTE&&(l=t.RG8),i===t.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===t.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===t.RG_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RG8UI),i===t.UNSIGNED_SHORT&&(l=t.RG16UI),i===t.UNSIGNED_INT&&(l=t.RG32UI),i===t.BYTE&&(l=t.RG8I),i===t.SHORT&&(l=t.RG16I),i===t.INT&&(l=t.RG32I)),r===t.RGB_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RGB8UI),i===t.UNSIGNED_SHORT&&(l=t.RGB16UI),i===t.UNSIGNED_INT&&(l=t.RGB32UI),i===t.BYTE&&(l=t.RGB8I),i===t.SHORT&&(l=t.RGB16I),i===t.INT&&(l=t.RGB32I)),r===t.RGBA_INTEGER&&(i===t.UNSIGNED_BYTE&&(l=t.RGBA8UI),i===t.UNSIGNED_SHORT&&(l=t.RGBA16UI),i===t.UNSIGNED_INT&&(l=t.RGBA32UI),i===t.BYTE&&(l=t.RGBA8I),i===t.SHORT&&(l=t.RGBA16I),i===t.INT&&(l=t.RGBA32I)),r===t.RGB&&(i===t.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===t.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===t.UNSIGNED_INT_5_9_9_9_REV&&(l=t.RGB9_E5),i===t.UNSIGNED_INT_10F_11F_11F_REV&&(l=t.R11F_G11F_B10F)),r===t.RGBA){let n=s?Ve:q.getTransfer(o);i===t.FLOAT&&(l=t.RGBA32F),i===t.HALF_FLOAT&&(l=t.RGBA16F),i===t.UNSIGNED_BYTE&&(l=n===`srgb`?t.SRGB8_ALPHA8:t.RGBA8),i===t.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===t.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===t.UNSIGNED_SHORT_4_4_4_4&&(l=t.RGBA4),i===t.UNSIGNED_SHORT_5_5_5_1&&(l=t.RGB5_A1)}return(l===t.R16F||l===t.R32F||l===t.RG16F||l===t.RG32F||l===t.RGBA16F||l===t.RGBA32F)&&d.get(`EXT_color_buffer_float`),l}function te(n,r){let i;return n?r===null||r===1014||r===1020?i=t.DEPTH24_STENCIL8:r===1015?i=t.DEPTH32F_STENCIL8:r===1012&&(i=t.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):r===null||r===1014||r===1020?i=t.DEPTH_COMPONENT24:r===1015?i=t.DEPTH_COMPONENT32F:r===1012&&(i=t.DEPTH_COMPONENT16),i}function ne(t,n){return D(t)===!0||t.isFramebufferTexture&&t.minFilter!==1003&&t.minFilter!==1006?Math.log2(Math.max(n.width,n.height))+1:t.mipmaps!==void 0&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?n.mipmaps.length:1}function re(t){let n=t.target;n.removeEventListener(`dispose`,re),M(n),n.isVideoTexture&&b.delete(n),n.isHTMLTexture&&x.delete(n)}function j(t){let n=t.target;n.removeEventListener(`dispose`,j),ie(n)}function M(t){let n=p.get(t);if(n.__webglInit===void 0)return;let r=t.source,i=C.get(r);if(i){let a=i[n.__cacheKey];a.usedTimes--,a.usedTimes===0&&N(t),Object.keys(i).length===0&&C.delete(r)}p.remove(t)}function N(n){let r=p.get(n);t.deleteTexture(r.__webglTexture);let i=n.source,a=C.get(i);delete a[r.__cacheKey],g.memory.textures--}function ie(n){let r=p.get(n);if(n.depthTexture&&(n.depthTexture.dispose(),p.remove(n.depthTexture)),n.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(r.__webglFramebuffer[n]))for(let i=0;i<r.__webglFramebuffer[n].length;i++)t.deleteFramebuffer(r.__webglFramebuffer[n][i]);else t.deleteFramebuffer(r.__webglFramebuffer[n]);r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[n])}else{if(Array.isArray(r.__webglFramebuffer))for(let n=0;n<r.__webglFramebuffer.length;n++)t.deleteFramebuffer(r.__webglFramebuffer[n]);else t.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let n=0;n<r.__webglColorRenderbuffer.length;n++)r.__webglColorRenderbuffer[n]&&t.deleteRenderbuffer(r.__webglColorRenderbuffer[n]);r.__webglDepthRenderbuffer&&t.deleteRenderbuffer(r.__webglDepthRenderbuffer)}let i=n.textures;for(let n=0,r=i.length;n<r;n++){let r=p.get(i[n]);r.__webglTexture&&(t.deleteTexture(r.__webglTexture),g.memory.textures--),p.remove(i[n])}p.remove(n)}let P=0;function ae(){P=0}function oe(){return P}function se(t){P=t}function ce(){let t=P;return t>=m.maxTextures&&B(`WebGLTextures: Trying to use `+(t+1)+` texture units while this GPU supports only `+m.maxTextures),P+=1,t}function le(t){let n=[];return n.push(t.wrapS),n.push(t.wrapT),n.push(t.wrapR||0),n.push(t.magFilter),n.push(t.minFilter),n.push(t.anisotropy),n.push(t.internalFormat),n.push(t.format),n.push(t.type),n.push(t.generateMipmaps),n.push(t.premultiplyAlpha),n.push(t.flipY),n.push(t.unpackAlignment),n.push(t.colorSpace),n.join()}function F(n,r){let i=p.get(n);if(n.isVideoTexture&&I(n),n.isRenderTargetTexture===!1&&n.isExternalTexture!==!0&&n.version>0&&i.__version!==n.version){let t=n.image;if(t===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(t.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(i,n,r);return}}else n.isExternalTexture&&(i.__webglTexture=n.sourceTexture?n.sourceTexture:null);f.bindTexture(t.TEXTURE_2D,i.__webglTexture,t.TEXTURE0+r)}function ue(n,r){let i=p.get(n);n.isRenderTargetTexture===!1&&n.version>0&&i.__version!==n.version?be(i,n,r):(n.isExternalTexture&&(i.__webglTexture=n.sourceTexture?n.sourceTexture:null),f.bindTexture(t.TEXTURE_2D_ARRAY,i.__webglTexture,t.TEXTURE0+r))}function de(n,r){let i=p.get(n);n.isRenderTargetTexture===!1&&n.version>0&&i.__version!==n.version?be(i,n,r):f.bindTexture(t.TEXTURE_3D,i.__webglTexture,t.TEXTURE0+r)}function fe(n,r){let i=p.get(n);n.isCubeDepthTexture!==!0&&n.version>0&&i.__version!==n.version?xe(i,n,r):f.bindTexture(t.TEXTURE_CUBE_MAP,i.__webglTexture,t.TEXTURE0+r)}let pe={[n]:t.REPEAT,[r]:t.CLAMP_TO_EDGE,[i]:t.MIRRORED_REPEAT},me={[a]:t.NEAREST,[o]:t.NEAREST_MIPMAP_NEAREST,[s]:t.NEAREST_MIPMAP_LINEAR,[c]:t.LINEAR,[l]:t.LINEAR_MIPMAP_NEAREST,[u]:t.LINEAR_MIPMAP_LINEAR},he={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function ge(n,r){if(r.type===1015&&d.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),t.texParameteri(n,t.TEXTURE_WRAP_S,pe[r.wrapS]),t.texParameteri(n,t.TEXTURE_WRAP_T,pe[r.wrapT]),(n===t.TEXTURE_3D||n===t.TEXTURE_2D_ARRAY)&&t.texParameteri(n,t.TEXTURE_WRAP_R,pe[r.wrapR]),t.texParameteri(n,t.TEXTURE_MAG_FILTER,me[r.magFilter]),t.texParameteri(n,t.TEXTURE_MIN_FILTER,me[r.minFilter]),r.compareFunction&&(t.texParameteri(n,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(n,t.TEXTURE_COMPARE_FUNC,he[r.compareFunction])),d.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&d.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||p.get(r).__currentAnisotropy){let i=d.get(`EXT_texture_filter_anisotropic`);t.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,m.getMaxAnisotropy())),p.get(r).__currentAnisotropy=r.anisotropy}}}function _e(n,r){let i=!1;n.__webglInit===void 0&&(n.__webglInit=!0,r.addEventListener(`dispose`,re));let a=r.source,o=C.get(a);o===void 0&&(o={},C.set(a,o));let s=le(r);if(s!==n.__cacheKey){o[s]===void 0&&(o[s]={texture:t.createTexture(),usedTimes:0},g.memory.textures++,i=!0),o[s].usedTimes++;let a=o[n.__cacheKey];a!==void 0&&(o[n.__cacheKey].usedTimes--,a.usedTimes===0&&N(r)),n.__cacheKey=s,n.__webglTexture=o[s].texture}return i}function ve(t,n,r){return Math.floor(Math.floor(t/r)/n)}function ye(n,r,i,a){let o=n.updateRanges;if(o.length===0)f.texSubImage2D(t.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((t,n)=>t.start-n.start);let s=0;for(let t=1;t<o.length;t++){let n=o[s],i=o[t],a=n.start+n.count,c=ve(i.start,r.width,4),l=ve(n.start,r.width,4);i.start<=a+1&&c===l&&ve(i.start+i.count-1,r.width,4)===c?n.count=Math.max(n.count,i.start+i.count-n.start):(++s,o[s]=i)}o.length=s+1;let c=f.getParameter(t.UNPACK_ROW_LENGTH),l=f.getParameter(t.UNPACK_SKIP_PIXELS),u=f.getParameter(t.UNPACK_SKIP_ROWS);f.pixelStorei(t.UNPACK_ROW_LENGTH,r.width);for(let n=0,s=o.length;n<s;n++){let s=o[n],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),p=l;f.pixelStorei(t.UNPACK_SKIP_PIXELS,u),f.pixelStorei(t.UNPACK_SKIP_ROWS,d),f.texSubImage2D(t.TEXTURE_2D,0,u,d,p,1,i,a,r.data)}n.clearUpdateRanges(),f.pixelStorei(t.UNPACK_ROW_LENGTH,c),f.pixelStorei(t.UNPACK_SKIP_PIXELS,l),f.pixelStorei(t.UNPACK_SKIP_ROWS,u)}}function be(n,r,i){let a=t.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=t.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=t.TEXTURE_3D);let o=_e(n,r),s=r.source;f.bindTexture(a,n.__webglTexture,t.TEXTURE0+i);let c=p.get(s);if(s.version!==c.__version||o===!0){if(f.activeTexture(t.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let n=q.getPrimaries(q.workingColorSpace),i=r.colorSpace===``?null:q.getPrimaries(r.colorSpace),a=r.colorSpace===``||n===i?t.NONE:t.BROWSER_DEFAULT_WEBGL;f.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipY),f.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),f.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}f.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment);let n=E(r.image,!1,m.maxTextureSize);n=Pe(r,n);let l=h.convert(r.format,r.colorSpace),u=h.convert(r.type),d=A(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);ge(a,r);let p,g=r.mipmaps,_=r.isVideoTexture!==!0,v=c.__version===void 0||o===!0,y=s.dataReady,b=ne(r,n);if(r.isDepthTexture)d=te(r.format===O,r.type),v&&(_?f.texStorage2D(t.TEXTURE_2D,1,d,n.width,n.height):f.texImage2D(t.TEXTURE_2D,0,d,n.width,n.height,0,l,u,null));else if(r.isDataTexture){if(g.length>0){_&&v&&f.texStorage2D(t.TEXTURE_2D,b,d,g[0].width,g[0].height);for(let n=0,r=g.length;n<r;n++)p=g[n],_?y&&f.texSubImage2D(t.TEXTURE_2D,n,0,0,p.width,p.height,l,u,p.data):f.texImage2D(t.TEXTURE_2D,n,d,p.width,p.height,0,l,u,p.data);r.generateMipmaps=!1}else _?(v&&f.texStorage2D(t.TEXTURE_2D,b,d,n.width,n.height),y&&ye(r,n,l,u)):f.texImage2D(t.TEXTURE_2D,0,d,n.width,n.height,0,l,u,n.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){_&&v&&f.texStorage3D(t.TEXTURE_2D_ARRAY,b,d,g[0].width,g[0].height,n.depth);for(let i=0,a=g.length;i<a;i++)if(p=g[i],r.format!==1023){if(l!==null){if(_){if(y){if(r.layerUpdates.size>0){let n=Bo(p.width,p.height,r.format,r.type);for(let a of r.layerUpdates){let r=p.data.subarray(a*n/p.data.BYTES_PER_ELEMENT,(a+1)*n/p.data.BYTES_PER_ELEMENT);f.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,a,p.width,p.height,1,l,r)}}else f.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,n.depth,l,p.data)}}else f.compressedTexImage3D(t.TEXTURE_2D_ARRAY,i,d,p.width,p.height,n.depth,0,p.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&f.texSubImage3D(t.TEXTURE_2D_ARRAY,i,0,0,0,p.width,p.height,n.depth,l,u,p.data):f.texImage3D(t.TEXTURE_2D_ARRAY,i,d,p.width,p.height,n.depth,0,l,u,p.data);r.layerUpdates.size>0&&r.clearLayerUpdates()}else{_&&v&&f.texStorage2D(t.TEXTURE_2D,b,d,g[0].width,g[0].height);for(let n=0,i=g.length;n<i;n++)p=g[n],r.format===1023?_?y&&f.texSubImage2D(t.TEXTURE_2D,n,0,0,p.width,p.height,l,u,p.data):f.texImage2D(t.TEXTURE_2D,n,d,p.width,p.height,0,l,u,p.data):l===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&f.compressedTexSubImage2D(t.TEXTURE_2D,n,0,0,p.width,p.height,l,p.data):f.compressedTexImage2D(t.TEXTURE_2D,n,d,p.width,p.height,0,p.data)}}else if(r.isDataArrayTexture){if(_){if(v&&f.texStorage3D(t.TEXTURE_2D_ARRAY,b,d,n.width,n.height,n.depth),y){if(r.layerUpdates.size>0){let i=Bo(n.width,n.height,r.format,r.type);for(let a of r.layerUpdates){let r=n.data.subarray(a*i/n.data.BYTES_PER_ELEMENT,(a+1)*i/n.data.BYTES_PER_ELEMENT);f.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,a,n.width,n.height,1,l,u,r)}r.clearLayerUpdates()}else f.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,l,u,n.data)}}else f.texImage3D(t.TEXTURE_2D_ARRAY,0,d,n.width,n.height,n.depth,0,l,u,n.data)}else if(r.isData3DTexture)_?(v&&f.texStorage3D(t.TEXTURE_3D,b,d,n.width,n.height,n.depth),y&&f.texSubImage3D(t.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,l,u,n.data)):f.texImage3D(t.TEXTURE_3D,0,d,n.width,n.height,n.depth,0,l,u,n.data);else if(r.isFramebufferTexture){if(v){if(_)f.texStorage2D(t.TEXTURE_2D,b,d,n.width,n.height);else{let r=n.width,i=n.height;for(let n=0;n<b;n++)f.texImage2D(t.TEXTURE_2D,n,d,r,i,0,l,u,null),r>>=1,i>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in t){let i=t.canvas;if(i.hasAttribute(`layoutsubtree`)||i.setAttribute(`layoutsubtree`,`true`),n.parentNode!==i){i.appendChild(n),x.add(r),i.onpaint=t=>{let n=t.changedElements;for(let t of x)n.includes(t.image)&&(t.needsUpdate=!0)},i.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,n);else{let r=t.RGBA,i=t.RGBA,a=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,r,i,a,n)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let n=Fe(g[0]);f.texStorage2D(t.TEXTURE_2D,b,d,n.width,n.height)}for(let n=0,r=g.length;n<r;n++)p=g[n],_?y&&f.texSubImage2D(t.TEXTURE_2D,n,0,0,l,u,p):f.texImage2D(t.TEXTURE_2D,n,d,l,u,p);r.generateMipmaps=!1}else if(_){if(v){let r=Fe(n);f.texStorage2D(t.TEXTURE_2D,b,d,r.width,r.height)}y&&f.texSubImage2D(t.TEXTURE_2D,0,0,0,l,u,n)}else f.texImage2D(t.TEXTURE_2D,0,d,l,u,n);D(r)&&k(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function xe(n,r,i){if(r.image.length!==6)return;let a=_e(n,r),o=r.source;f.bindTexture(t.TEXTURE_CUBE_MAP,n.__webglTexture,t.TEXTURE0+i);let s=p.get(o);if(o.version!==s.__version||a===!0){f.activeTexture(t.TEXTURE0+i);let n=q.getPrimaries(q.workingColorSpace),c=r.colorSpace===``?null:q.getPrimaries(r.colorSpace),l=r.colorSpace===``||n===c?t.NONE:t.BROWSER_DEFAULT_WEBGL;f.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,r.flipY),f.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),f.pixelStorei(t.UNPACK_ALIGNMENT,r.unpackAlignment),f.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,p=[];for(let t=0;t<6;t++)!u&&!d?p[t]=E(r.image[t],!0,m.maxCubemapSize):p[t]=d?r.image[t].image:r.image[t],p[t]=Pe(r,p[t]);let g=p[0],_=h.convert(r.format,r.colorSpace),v=h.convert(r.type),y=A(r.internalFormat,_,v,r.normalized,r.colorSpace),b=r.isVideoTexture!==!0,x=s.__version===void 0||a===!0,S=o.dataReady,C=ne(r,g);ge(t.TEXTURE_CUBE_MAP,r);let w;if(u){b&&x&&f.texStorage2D(t.TEXTURE_CUBE_MAP,C,y,g.width,g.height);for(let n=0;n<6;n++){w=p[n].mipmaps;for(let i=0;i<w.length;i++){let a=w[i];r.format===1023?b?S&&f.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,0,0,a.width,a.height,_,v,a.data):f.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,y,a.width,a.height,0,_,v,a.data):_===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&f.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,0,0,a.width,a.height,_,a.data):f.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,y,a.width,a.height,0,a.data)}}}else{if(w=r.mipmaps,b&&x){w.length>0&&C++;let n=Fe(p[0]);f.texStorage2D(t.TEXTURE_CUBE_MAP,C,y,n.width,n.height)}for(let n=0;n<6;n++)if(d){b?S&&f.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,p[n].width,p[n].height,_,v,p[n].data):f.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,y,p[n].width,p[n].height,0,_,v,p[n].data);for(let r=0;r<w.length;r++){let i=w[r].image[n].image;b?S&&f.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,r+1,0,0,i.width,i.height,_,v,i.data):f.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,r+1,y,i.width,i.height,0,_,v,i.data)}}else{b?S&&f.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,0,0,_,v,p[n]):f.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,y,_,v,p[n]);for(let r=0;r<w.length;r++){let i=w[r];b?S&&f.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,r+1,0,0,_,v,i.image[n]):f.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+n,r+1,y,_,v,i.image[n])}}}D(r)&&k(t.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function Se(n,r,i,a,o,s){let c=h.convert(i.format,i.colorSpace),l=h.convert(i.type),u=A(i.internalFormat,c,l,i.normalized,i.colorSpace),d=p.get(r),m=p.get(i);if(m.__renderTarget=r,!d.__hasExternalTextures){let n=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===t.TEXTURE_3D||o===t.TEXTURE_2D_ARRAY?f.texImage3D(o,s,u,n,i,r.depth,0,c,l,null):f.texImage2D(o,s,u,n,i,0,c,l,null)}f.bindFramebuffer(t.FRAMEBUFFER,n),Ne(r)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,a,o,m.__webglTexture,0,Me(r)):(o===t.TEXTURE_2D||o>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,a,o,m.__webglTexture,s),f.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(n,r,i){if(t.bindRenderbuffer(t.RENDERBUFFER,n),r.depthBuffer){let a=r.depthTexture,o=a&&a.isDepthTexture?a.type:null,s=te(r.stencilBuffer,o),c=r.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ne(r)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me(r),s,r.width,r.height):i?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me(r),s,r.width,r.height):t.renderbufferStorage(t.RENDERBUFFER,s,r.width,r.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,c,t.RENDERBUFFER,n)}else{let n=r.textures;for(let a=0;a<n.length;a++){let o=n[a],s=h.convert(o.format,o.colorSpace),c=h.convert(o.type),l=A(o.internalFormat,s,c,o.normalized,o.colorSpace);Ne(r)?_.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me(r),l,r.width,r.height):i?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me(r),l,r.width,r.height):t.renderbufferStorage(t.RENDERBUFFER,l,r.width,r.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(n,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(f.bindFramebuffer(t.FRAMEBUFFER,n),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let o=p.get(r.depthTexture);if(o.__renderTarget=r,(!o.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),a){if(o.__webglInit===void 0&&(o.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,re)),o.__webglTexture===void 0){o.__webglTexture=t.createTexture(),f.bindTexture(t.TEXTURE_CUBE_MAP,o.__webglTexture),ge(t.TEXTURE_CUBE_MAP,r.depthTexture);let n=h.convert(r.depthTexture.format),i=h.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=t.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=t.DEPTH24_STENCIL8);for(let o=0;o<6;o++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,a,r.width,r.height,0,n,i,null)}}else F(r.depthTexture,0);let s=o.__webglTexture,c=Me(r),l=a?t.TEXTURE_CUBE_MAP_POSITIVE_X+i:t.TEXTURE_2D,u=r.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)Ne(r)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,u,l,s,0,c):t.framebufferTexture2D(t.FRAMEBUFFER,u,l,s,0);else if(r.depthTexture.format===1027)Ne(r)?_.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,u,l,s,0,c):t.framebufferTexture2D(t.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(n){let r=p.get(n),i=n.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==n.depthTexture){let t=n.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),t){let n=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,t.removeEventListener(`dispose`,n)};t.addEventListener(`dispose`,n),r.__depthDisposeCallback=n}r.__boundDepthTexture=t}if(n.depthTexture&&!r.__autoAllocateDepthBuffer){if(i)for(let t=0;t<6;t++)we(r.__webglFramebuffer[t],n,t);else{let t=n.texture.mipmaps;t&&t.length>0?we(r.__webglFramebuffer[0],n,0):we(r.__webglFramebuffer,n,0)}}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(f.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=t.createRenderbuffer(),Ce(r.__webglDepthbuffer[i],n,!1);else{let a=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,o=r.__webglDepthbuffer[i];t.bindRenderbuffer(t.RENDERBUFFER,o),t.framebufferRenderbuffer(t.FRAMEBUFFER,a,t.RENDERBUFFER,o)}}else{let i=n.texture.mipmaps;if(i&&i.length>0?f.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer[0]):f.bindFramebuffer(t.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=t.createRenderbuffer(),Ce(r.__webglDepthbuffer,n,!1);else{let i=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,i,t.RENDERBUFFER,a)}}f.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(n,r,i){let a=p.get(n);r!==void 0&&Se(a.__webglFramebuffer,n,n.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),i!==void 0&&Te(n)}function De(n){let r=n.texture,i=p.get(n),a=p.get(r);n.addEventListener(`dispose`,j);let o=n.textures,s=n.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=t.createTexture()),a.__version=r.version,g.memory.textures++),s){i.__webglFramebuffer=[];for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer[n]=[];for(let a=0;a<r.mipmaps.length;a++)i.__webglFramebuffer[n][a]=t.createFramebuffer()}else i.__webglFramebuffer[n]=t.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[n]=t.createFramebuffer()}else i.__webglFramebuffer=t.createFramebuffer();if(c)for(let n=0,r=o.length;n<r;n++){let r=p.get(o[n]);r.__webglTexture===void 0&&(r.__webglTexture=t.createTexture(),g.memory.textures++)}if(n.samples>0&&Ne(n)===!1){i.__webglMultisampledFramebuffer=t.createFramebuffer(),i.__webglColorRenderbuffer=[],f.bindFramebuffer(t.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let r=0;r<o.length;r++){let a=o[r];i.__webglColorRenderbuffer[r]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,i.__webglColorRenderbuffer[r]);let s=h.convert(a.format,a.colorSpace),c=h.convert(a.type),l=A(a.internalFormat,s,c,a.normalized,a.colorSpace,n.isXRRenderTarget===!0),u=Me(n);t.renderbufferStorageMultisample(t.RENDERBUFFER,u,l,n.width,n.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+r,t.RENDERBUFFER,i.__webglColorRenderbuffer[r])}t.bindRenderbuffer(t.RENDERBUFFER,null),n.depthBuffer&&(i.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(i.__webglDepthRenderbuffer,n,!0)),f.bindFramebuffer(t.FRAMEBUFFER,null)}}if(s){f.bindTexture(t.TEXTURE_CUBE_MAP,a.__webglTexture),ge(t.TEXTURE_CUBE_MAP,r);for(let a=0;a<6;a++)if(r.mipmaps&&r.mipmaps.length>0)for(let o=0;o<r.mipmaps.length;o++)Se(i.__webglFramebuffer[a][o],n,r,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+a,o);else Se(i.__webglFramebuffer[a],n,r,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+a,0);D(r)&&k(t.TEXTURE_CUBE_MAP),f.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=p.get(a),c=t.TEXTURE_2D;(n.isWebGL3DRenderTarget||n.isWebGLArrayRenderTarget)&&(c=n.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),f.bindTexture(c,s.__webglTexture),ge(c,a),Se(i.__webglFramebuffer,n,a,t.COLOR_ATTACHMENT0+r,c,0),D(a)&&k(c)}f.unbindTexture()}else{let o=t.TEXTURE_2D;if((n.isWebGL3DRenderTarget||n.isWebGLArrayRenderTarget)&&(o=n.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),f.bindTexture(o,a.__webglTexture),ge(o,r),r.mipmaps&&r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)Se(i.__webglFramebuffer[a],n,r,t.COLOR_ATTACHMENT0,o,a);else Se(i.__webglFramebuffer,n,r,t.COLOR_ATTACHMENT0,o,0);D(r)&&k(o),f.unbindTexture()}n.depthBuffer&&Te(n)}function Oe(t){let n=t.textures;for(let r=0,i=n.length;r<i;r++){let i=n[r];if(D(i)){let n=ee(t),r=p.get(i).__webglTexture;f.bindTexture(n,r),k(n),f.unbindTexture()}}}let ke=[],Ae=[];function je(n){if(n.samples>0){if(Ne(n)===!1){let r=n.textures,i=n.width,a=n.height,o=t.COLOR_BUFFER_BIT,s=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,c=p.get(n),l=r.length>1;if(l)for(let n=0;n<r.length;n++)f.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,null),f.bindFramebuffer(t.FRAMEBUFFER,c.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.TEXTURE_2D,null,0);f.bindFramebuffer(t.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer);let u=n.texture.mipmaps;u&&u.length>0?f.bindFramebuffer(t.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):f.bindFramebuffer(t.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let u=0;u<r.length;u++){if(n.resolveDepthBuffer&&(n.depthBuffer&&(o|=t.DEPTH_BUFFER_BIT),n.stencilBuffer&&n.resolveStencilBuffer&&(o|=t.STENCIL_BUFFER_BIT)),l){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,c.__webglColorRenderbuffer[u]);let n=p.get(r[u]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}t.blitFramebuffer(0,0,i,a,0,0,i,a,o,t.NEAREST),v===!0&&(ke.length=0,Ae.length=0,ke.push(t.COLOR_ATTACHMENT0+u),n.depthBuffer&&n.storeMultisampledDepthBuffer===!1&&(ke.push(s),Ae.push(s),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ae)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(f.bindFramebuffer(t.READ_FRAMEBUFFER,null),f.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),l)for(let n=0;n<r.length;n++){f.bindFramebuffer(t.FRAMEBUFFER,c.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let i=p.get(r[n]).__webglTexture;f.bindFramebuffer(t.FRAMEBUFFER,c.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+n,t.TEXTURE_2D,i,0)}f.bindFramebuffer(t.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(n.depthBuffer&&n.storeMultisampledDepthBuffer===!1&&v){let r=n.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[r])}}}function Me(t){return Math.min(m.maxSamples,t.samples)}function Ne(t){let n=p.get(t);return t.samples>0&&d.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(t){let n=g.render.frame;b.get(t)!==n&&(b.set(t,n),t.update())}function Pe(t,n){let r=t.colorSpace,i=t.format,a=t.type;return t.isCompressedTexture===!0||t.isVideoTexture===!0||r!==`srgb-linear`&&r!==``&&(q.getTransfer(r)===`srgb`?(i!==1023||a!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,r)),n}function Fe(t){return typeof HTMLImageElement<`u`&&t instanceof HTMLImageElement?(y.width=t.naturalWidth||t.width,y.height=t.naturalHeight||t.height):typeof VideoFrame<`u`&&t instanceof VideoFrame?(y.width=t.displayWidth,y.height=t.displayHeight):(y.width=t.width,y.height=t.height),y}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=F,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return f.buffers.depth.getReversed()}}function Kl(t,n){function r(r,i=``){let a,o=q.getTransfer(i);if(r===1009)return t.UNSIGNED_BYTE;if(r===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(r===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(r===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===1010)return t.BYTE;if(r===1011)return t.SHORT;if(r===1012)return t.UNSIGNED_SHORT;if(r===1013)return t.INT;if(r===1014)return t.UNSIGNED_INT;if(r===1015)return t.FLOAT;if(r===1016)return t.HALF_FLOAT;if(r===1021)return t.ALPHA;if(r===1022)return t.RGB;if(r===1023)return t.RGBA;if(r===1026)return t.DEPTH_COMPONENT;if(r===1027)return t.DEPTH_STENCIL;if(r===1028)return t.RED;if(r===1029)return t.RED_INTEGER;if(r===1030)return t.RG;if(r===1031)return t.RG_INTEGER;if(r===1033)return t.RGBA_INTEGER;if(r===33776||r===33777||r===33778||r===33779){if(o===`srgb`){if(a=n.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(r===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=n.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(r===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(r===35840||r===35841||r===35842||r===35843){if(a=n.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(r===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(r===36196||r===37492||r===37496||r===37488||r===37489||r===37490||r===37491){if(a=n.get(`WEBGL_compressed_texture_etc`),a!==null){if(r===36196||r===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===37488)return a.COMPRESSED_R11_EAC;if(r===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(r===37490)return a.COMPRESSED_RG11_EAC;if(r===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null}if(r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821){if(a=n.get(`WEBGL_compressed_texture_astc`),a!==null){if(r===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(r===36492||r===36494||r===36495){if(a=n.get(`EXT_texture_compression_bptc`),a!==null){if(r===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(r===36283||r===36284||r===36285||r===36286){if(a=n.get(`EXT_texture_compression_rgtc`),a!==null){if(r===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(r===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return r===1020?t.UNSIGNED_INT_24_8:t[r]===void 0?null:t[r]}return{convert:r}}var ql=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let r=new ea(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,r=new da({vertexShader:ql,fragmentShader:Jl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $r(new na(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends nt{constructor(t,n){super();let r=this,i=null,a=1,o=null,s=`local-floor`,c=1,l=null,u=null,f=null,p=null,m=null,h=null,_=typeof XRWebGLBinding<`u`,v=new Yl,y={},b=n.getContextAttributes(),S=null,C=null,w=[],T=[],k=new W,ee=null,A=null,te=new uo;te.viewport=new Gt;let ne=new uo;ne.viewport=new Gt;let re=[te,ne],j=new Eo,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let n=w[t];return n===void 0&&(n=new En,w[t]=n),n.getTargetRaySpace()},this.getControllerGrip=function(t){let n=w[t];return n===void 0&&(n=new En,w[t]=n),n.getGripSpace()},this.getHand=function(t){let n=w[t];return n===void 0&&(n=new En,w[t]=n),n.getHandSpace()};function ie(t){let n=T.indexOf(t.inputSource);if(n===-1)return;let r=w[n];r!==void 0&&(r.update(t.inputSource,t.frame,l||o),r.dispatchEvent({type:t.type,data:t.inputSource}))}function P(){i.removeEventListener(`select`,ie),i.removeEventListener(`selectstart`,ie),i.removeEventListener(`selectend`,ie),i.removeEventListener(`squeeze`,ie),i.removeEventListener(`squeezestart`,ie),i.removeEventListener(`squeezeend`,ie),i.removeEventListener(`end`,P),i.removeEventListener(`inputsourceschange`,ae);for(let t=0;t<w.length;t++){let n=T[t];n!==null&&(T[t]=null,w[t].disconnect(n))}M=null,N=null,v.reset();for(let t in y)delete y[t];if(t.setRenderTarget(S),m=null,p=null,f=null,i=null,C=null,fe.stop(),r.isPresenting=!1,t.setPixelRatio(ee),t.setSize(k.width,k.height,!1),A!==null){let t=A.camera;t.fov=A.fov,t.zoom=A.zoom,t.updateProjectionMatrix(),A=null}r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(t){a=t,r.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(t){s=t,r.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(t){l=t},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,n)),f},this.getFrame=function(){return h},this.getSession=function(){return i},this.setSession=async function(u){if(i=u,i!==null){if(S=t.getRenderTarget(),i.addEventListener(`select`,ie),i.addEventListener(`selectstart`,ie),i.addEventListener(`selectend`,ie),i.addEventListener(`squeeze`,ie),i.addEventListener(`squeezestart`,ie),i.addEventListener(`squeezeend`,ie),i.addEventListener(`end`,P),i.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await n.makeXRCompatible(),ee=t.getPixelRatio(),t.getSize(k),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let r=null,o=null,s=null;b.depth&&(s=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,r=b.stencil?O:D,o=b.stencil?x:g);let c={colorFormat:n.RGBA8,depthFormat:s,scaleFactor:a};f=this.getBinding(),p=f.createProjectionLayer(c),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),C=new qt(p.textureWidth,p.textureHeight,{format:E,type:d,depthTexture:new Qi(p.textureWidth,p.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,r),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let r={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,n,r),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new qt(m.framebufferWidth,m.framebufferHeight,{format:E,type:d,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(s),fe.setContext(i),fe.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(t){for(let n=0;n<t.removed.length;n++){let r=t.removed[n],i=T.indexOf(r);i>=0&&(T[i]=null,w[i].disconnect(r))}for(let n=0;n<t.added.length;n++){let r=t.added[n],i=T.indexOf(r);if(i===-1){for(let t=0;t<w.length;t++)if(t>=T.length){T.push(r),i=t;break}else if(T[t]===null){T[t]=r,i=t;break}if(i===-1)break}let a=w[i];a&&a.connect(r)}}let oe=new G,se=new G;function ce(t,n,r){oe.setFromMatrixPosition(n.matrixWorld),se.setFromMatrixPosition(r.matrixWorld);let i=oe.distanceTo(se),a=n.projectionMatrix.elements,o=r.projectionMatrix.elements,s=a[14]/(a[10]-1),c=a[14]/(a[10]+1),l=(a[9]+1)/a[5],u=(a[9]-1)/a[5],d=(a[8]-1)/a[0],f=(o[8]+1)/o[0],p=s*d,m=s*f,h=i/(-d+f),g=h*-d;if(n.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(g),t.translateZ(h),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert(),a[10]===-1)t.projectionMatrix.copy(n.projectionMatrix),t.projectionMatrixInverse.copy(n.projectionMatrixInverse);else{let n=s+h,r=c+h,a=p-g,o=m+(i-g),d=l*c/r*n,f=u*c/r*n;t.projectionMatrix.makePerspective(a,o,d,f,n,r),t.projectionMatrixInverse.copy(t.projectionMatrix).invert()}}function le(t,n){n===null?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(n.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.updateCamera=function(t){if(i===null)return;let n=t.near,r=t.far;v.texture!==null&&(v.depthNear>0&&(n=v.depthNear),v.depthFar>0&&(r=v.depthFar)),j.near=ne.near=te.near=n,j.far=ne.far=te.far=r,(M!==j.near||N!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=t.layers.mask|6,te.layers.mask=j.layers.mask&-5,ne.layers.mask=j.layers.mask&-3;let a=t.parent,o=j.cameras;le(j,a);for(let t=0;t<o.length;t++)le(o[t],a);o.length===2?ce(j,te,ne):j.projectionMatrix.copy(te.projectionMatrix),A===null&&t.isPerspectiveCamera&&(A={camera:t,fov:t.fov,zoom:t.zoom}),F(t,j,a)};function F(t,n,r){r===null?t.matrix.copy(n.matrixWorld):(t.matrix.copy(r.matrixWorld),t.matrix.invert(),t.matrix.multiply(n.matrixWorld)),t.matrix.decompose(t.position,t.quaternion,t.scale),t.updateMatrixWorld(!0),t.projectionMatrix.copy(n.projectionMatrix),t.projectionMatrixInverse.copy(n.projectionMatrixInverse),t.isPerspectiveCamera&&(t.fov=ot*2*Math.atan(1/t.projectionMatrix.elements[5]),t.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(p!==null||m!==null)return c},this.setFoveation=function(t){c=t,p!==null&&(p.fixedFoveation=t),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=t)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(j)},this.getCameraTexture=function(t){return y[t]};let ue=null;function de(n,a){if(u=a.getViewerPose(l||o),h=a,u!==null){let n=u.views;m!==null&&(t.setRenderTargetFramebuffer(C,m.framebuffer),t.setRenderTarget(C));let a=!1;n.length!==j.cameras.length&&(j.cameras.length=0,a=!0);for(let r=0;r<n.length;r++){let i=n[r],o=null;if(m!==null)o=m.getViewport(i);else{let n=f.getViewSubImage(p,i);o=n.viewport,r===0&&(t.setRenderTargetTextures(C,n.colorTexture,n.depthStencilTexture),t.setRenderTarget(C))}let s=re[r];s===void 0&&(s=new uo,s.layers.enable(r),s.viewport=new Gt,re[r]=s),s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(i.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),r===0&&(j.matrix.copy(s.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),a===!0&&j.cameras.push(s)}let o=i.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){f=r.getBinding();let t=f.getDepthInformation(n[0]);t&&t.isValid&&t.texture&&v.init(t,i.renderState)}if(o&&o.includes(`camera-access`)&&_){t.state.unbindTexture(),f=r.getBinding();for(let t=0;t<n.length;t++){let r=n[t].camera;if(r){let t=y[r];t||(t=new ea,y[r]=t);let n=f.getCameraImage(r);t.sourceTexture=n}}}}for(let t=0;t<w.length;t++){let n=T[t],r=w[t];n!==null&&r!==void 0&&r.update(n,a,l||o)}ue&&ue(n,a),a.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:a}),h=null}let fe=new Ho;fe.setAnimationLoop(de),this.setAnimationLoop=function(t){ue=t},this.dispose=function(){}}},Zl=new J,Ql=new K;Ql.set(-1,0,0,0,1,0,0,0,1);function $l(t,n){function r(t,n){t.matrixAutoUpdate===!0&&t.updateMatrix(),n.value.copy(t.matrix)}function i(n,r){r.color.getRGB(n.fogColor.value,sa(t)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)}function a(t,n,r,i,a){n.isNodeMaterial?n.uniformsNeedUpdate=!1:n.isMeshBasicMaterial?o(t,n):n.isMeshLambertMaterial?(o(t,n),n.envMap&&(t.envMapIntensity.value=n.envMapIntensity)):n.isMeshToonMaterial?(o(t,n),f(t,n)):n.isMeshPhongMaterial?(o(t,n),d(t,n),n.envMap&&(t.envMapIntensity.value=n.envMapIntensity)):n.isMeshStandardMaterial?(o(t,n),p(t,n),n.isMeshPhysicalMaterial&&m(t,n,a)):n.isMeshMatcapMaterial?(o(t,n),h(t,n)):n.isMeshDepthMaterial?o(t,n):n.isMeshDistanceMaterial?(o(t,n),g(t,n)):n.isMeshNormalMaterial?o(t,n):n.isLineBasicMaterial?(s(t,n),n.isLineDashedMaterial&&c(t,n)):n.isPointsMaterial?l(t,n,r,i):n.isSpriteMaterial?u(t,n):n.isShadowMaterial?(t.color.value.copy(n.color),t.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}function o(t,i){t.opacity.value=i.opacity,i.color&&t.diffuse.value.copy(i.color),i.emissive&&t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(t.map.value=i.map,r(i.map,t.mapTransform)),i.alphaMap&&(t.alphaMap.value=i.alphaMap,r(i.alphaMap,t.alphaMapTransform)),i.bumpMap&&(t.bumpMap.value=i.bumpMap,r(i.bumpMap,t.bumpMapTransform),t.bumpScale.value=i.bumpScale,i.side===1&&(t.bumpScale.value*=-1)),i.normalMap&&(t.normalMap.value=i.normalMap,r(i.normalMap,t.normalMapTransform),t.normalScale.value.copy(i.normalScale),i.side===1&&t.normalScale.value.negate()),i.displacementMap&&(t.displacementMap.value=i.displacementMap,r(i.displacementMap,t.displacementMapTransform),t.displacementScale.value=i.displacementScale,t.displacementBias.value=i.displacementBias),i.emissiveMap&&(t.emissiveMap.value=i.emissiveMap,r(i.emissiveMap,t.emissiveMapTransform)),i.specularMap&&(t.specularMap.value=i.specularMap,r(i.specularMap,t.specularMapTransform)),i.alphaTest>0&&(t.alphaTest.value=i.alphaTest);let a=n.get(i),o=a.envMap,s=a.envMapRotation;o&&(t.envMap.value=o,t.envMapRotation.value.setFromMatrix4(Zl.makeRotationFromEuler(s)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&t.envMapRotation.value.premultiply(Ql),t.reflectivity.value=i.reflectivity,t.ior.value=i.ior,t.refractionRatio.value=i.refractionRatio),i.lightMap&&(t.lightMap.value=i.lightMap,t.lightMapIntensity.value=i.lightMapIntensity,r(i.lightMap,t.lightMapTransform)),i.aoMap&&(t.aoMap.value=i.aoMap,t.aoMapIntensity.value=i.aoMapIntensity,r(i.aoMap,t.aoMapTransform))}function s(t,n){t.diffuse.value.copy(n.color),t.opacity.value=n.opacity,n.map&&(t.map.value=n.map,r(n.map,t.mapTransform))}function c(t,n){t.dashSize.value=n.dashSize,t.totalSize.value=n.dashSize+n.gapSize,t.scale.value=n.scale}function l(t,n,i,a){t.diffuse.value.copy(n.color),t.opacity.value=n.opacity,t.size.value=n.size*i,t.scale.value=a*.5,n.map&&(t.map.value=n.map,r(n.map,t.uvTransform)),n.alphaMap&&(t.alphaMap.value=n.alphaMap,r(n.alphaMap,t.alphaMapTransform)),n.alphaTest>0&&(t.alphaTest.value=n.alphaTest)}function u(t,n){t.diffuse.value.copy(n.color),t.opacity.value=n.opacity,t.rotation.value=n.rotation,n.map&&(t.map.value=n.map,r(n.map,t.mapTransform)),n.alphaMap&&(t.alphaMap.value=n.alphaMap,r(n.alphaMap,t.alphaMapTransform)),n.alphaTest>0&&(t.alphaTest.value=n.alphaTest)}function d(t,n){t.specular.value.copy(n.specular),t.shininess.value=Math.max(n.shininess,1e-4)}function f(t,n){n.gradientMap&&(t.gradientMap.value=n.gradientMap)}function p(t,n){t.metalness.value=n.metalness,n.metalnessMap&&(t.metalnessMap.value=n.metalnessMap,r(n.metalnessMap,t.metalnessMapTransform)),t.roughness.value=n.roughness,n.roughnessMap&&(t.roughnessMap.value=n.roughnessMap,r(n.roughnessMap,t.roughnessMapTransform)),n.envMap&&(t.envMapIntensity.value=n.envMapIntensity)}function m(t,n,i){t.ior.value=n.ior,n.sheen>0&&(t.sheenColor.value.copy(n.sheenColor).multiplyScalar(n.sheen),t.sheenRoughness.value=n.sheenRoughness,n.sheenColorMap&&(t.sheenColorMap.value=n.sheenColorMap,r(n.sheenColorMap,t.sheenColorMapTransform)),n.sheenRoughnessMap&&(t.sheenRoughnessMap.value=n.sheenRoughnessMap,r(n.sheenRoughnessMap,t.sheenRoughnessMapTransform))),n.clearcoat>0&&(t.clearcoat.value=n.clearcoat,t.clearcoatRoughness.value=n.clearcoatRoughness,n.clearcoatMap&&(t.clearcoatMap.value=n.clearcoatMap,r(n.clearcoatMap,t.clearcoatMapTransform)),n.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=n.clearcoatRoughnessMap,r(n.clearcoatRoughnessMap,t.clearcoatRoughnessMapTransform)),n.clearcoatNormalMap&&(t.clearcoatNormalMap.value=n.clearcoatNormalMap,r(n.clearcoatNormalMap,t.clearcoatNormalMapTransform),t.clearcoatNormalScale.value.copy(n.clearcoatNormalScale),n.side===1&&t.clearcoatNormalScale.value.negate())),n.dispersion>0&&(t.dispersion.value=n.dispersion),n.retroreflectivity>0&&(t.retroreflectivity.value=n.retroreflectivity),n.iridescence>0&&(t.iridescence.value=n.iridescence,t.iridescenceIOR.value=n.iridescenceIOR,t.iridescenceThicknessMinimum.value=n.iridescenceThicknessRange[0],t.iridescenceThicknessMaximum.value=n.iridescenceThicknessRange[1],n.iridescenceMap&&(t.iridescenceMap.value=n.iridescenceMap,r(n.iridescenceMap,t.iridescenceMapTransform)),n.iridescenceThicknessMap&&(t.iridescenceThicknessMap.value=n.iridescenceThicknessMap,r(n.iridescenceThicknessMap,t.iridescenceThicknessMapTransform))),n.transmission>0&&(t.transmission.value=n.transmission,t.transmissionSamplerMap.value=i.texture,t.transmissionSamplerSize.value.set(i.width,i.height),n.transmissionMap&&(t.transmissionMap.value=n.transmissionMap,r(n.transmissionMap,t.transmissionMapTransform)),t.thickness.value=n.thickness,n.thicknessMap&&(t.thicknessMap.value=n.thicknessMap,r(n.thicknessMap,t.thicknessMapTransform)),t.attenuationDistance.value=n.attenuationDistance,t.attenuationColor.value.copy(n.attenuationColor)),n.anisotropy>0&&(t.anisotropyVector.value.set(n.anisotropy*Math.cos(n.anisotropyRotation),n.anisotropy*Math.sin(n.anisotropyRotation)),n.anisotropyMap&&(t.anisotropyMap.value=n.anisotropyMap,r(n.anisotropyMap,t.anisotropyMapTransform))),t.specularIntensity.value=n.specularIntensity,t.specularColor.value.copy(n.specularColor),n.specularColorMap&&(t.specularColorMap.value=n.specularColorMap,r(n.specularColorMap,t.specularColorMapTransform)),n.specularIntensityMap&&(t.specularIntensityMap.value=n.specularIntensityMap,r(n.specularIntensityMap,t.specularIntensityMapTransform))}function h(t,n){n.matcap&&(t.matcap.value=n.matcap)}function g(t,r){let i=n.get(r).light;t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),t.nearDistance.value=i.shadow.camera.near,t.farDistance.value=i.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function eu(t,n,r,i){let a={},o={},s=[],c=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(t,n){let r=n.program;i.uniformBlockBinding(t,r)}function u(t,r){let s=a[t.id];s===void 0&&(_(t),s=d(t),a[t.id]=s,t.addEventListener(`dispose`,y));let c=r.program;i.updateUBOMapping(t,c);let l=n.render.frame;o[t.id]!==l&&(p(t),o[t.id]=l)}function d(n){let r=f();n.__bindingPointIndex=r;let i=t.createBuffer(),a=n.__size,o=n.usage;return t.bindBuffer(t.UNIFORM_BUFFER,i),t.bufferData(t.UNIFORM_BUFFER,a,o),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,r,i),i}function f(){for(let t=0;t<c;t++)if(s.indexOf(t)===-1)return s.push(t),t;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(n){let r=a[n.id],i=n.uniforms,o=n.__cache;t.bindBuffer(t.UNIFORM_BUFFER,r);for(let t=0,n=i.length;t<n;t++){let n=i[t];if(Array.isArray(n))for(let r=0,i=n.length;r<i;r++)m(n[r],t,r,o);else m(n,t,0,o)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(n,r,i,a){if(g(n,r,i,a)===!0){let r=n.__offset,i=n.value;if(Array.isArray(i)){let t=0;for(let r=0;r<i.length;r++){let a=i[r],o=v(a);h(a,n.__data,t),typeof a!=`number`&&typeof a!=`boolean`&&!a.isMatrix3&&!ArrayBuffer.isView(a)&&(t+=o.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(i,n.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,r,n.__data)}}function h(t,n,r){typeof t==`number`||typeof t==`boolean`?n[0]=t:t.isMatrix3?(n[0]=t.elements[0],n[1]=t.elements[1],n[2]=t.elements[2],n[3]=0,n[4]=t.elements[3],n[5]=t.elements[4],n[6]=t.elements[5],n[7]=0,n[8]=t.elements[6],n[9]=t.elements[7],n[10]=t.elements[8],n[11]=0):ArrayBuffer.isView(t)?n.set(new t.constructor(t.buffer,t.byteOffset,n.length)):t.toArray(n,r)}function g(t,n,r,i){let a=t.value,o=n+`_`+r;if(i[o]===void 0)return i[o]=typeof a==`number`||typeof a==`boolean`?a:ArrayBuffer.isView(a)?a.slice():a.clone(),!0;{let t=i[o];if(typeof a==`number`||typeof a==`boolean`){if(t!==a)return i[o]=a,!0}else if(ArrayBuffer.isView(a))return!0;else if(t.equals(a)===!1)return t.copy(a),!0}return!1}function _(t){let n=t.uniforms,r=0;for(let t=0,i=n.length;t<i;t++){let i=Array.isArray(n[t])?n[t]:[n[t]];for(let t=0,n=i.length;t<n;t++){let n=i[t],a=Array.isArray(n.value)?n.value:[n.value];for(let t=0,i=a.length;t<i;t++){let i=a[t],o=v(i),s=r%16,c=s%o.boundary,l=s+c;r+=c,l!==0&&16-l<o.storage&&(r+=16-l),n.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),n.__offset=r,r+=o.storage}}}let i=r%16;return i>0&&(r+=16-i),t.__size=r,t.__cache={},this}function v(t){let n={boundary:0,storage:0};return typeof t==`number`||typeof t==`boolean`?(n.boundary=4,n.storage=4):t.isVector2?(n.boundary=8,n.storage=8):t.isVector3||t.isColor?(n.boundary=16,n.storage=12):t.isVector4?(n.boundary=16,n.storage=16):t.isMatrix3?(n.boundary=48,n.storage=48):t.isMatrix4?(n.boundary=64,n.storage=64):t.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(t)?(n.boundary=16,n.storage=t.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,t),n}function y(n){let r=n.target;r.removeEventListener(`dispose`,y);let i=s.indexOf(r.__bindingPointIndex);s.splice(i,1),t.deleteBuffer(a[r.id]),delete a[r.id],delete o[r.id]}function b(){for(let n in a)t.deleteBuffer(a[n]);s=[],a={},o={}}return{bind:l,update:u,dispose:b}}var tu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nu=null;function ru(){return nu===null&&(nu=new pi(tu,16,16,A,v),nu.name=`DFG_LUT`,nu.minFilter=c,nu.magFilter=c,nu.wrapS=r,nu.wrapT=r,nu.generateMipmaps=!1,nu.needsUpdate=!0),nu}var iu=class{constructor(t={}){let{canvas:n=Ye(),context:r=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:_=d}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<`u`&&r instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);S=r.getContextAttributes().alpha}else S=o;let C=_,w=new Set([ne,te,ee]),T=new Set([d,g,m,x,y,b]),E=new Uint32Array(4),D=new Int32Array(4),O=new G,k=null,A=null,re=[],j=[],M=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,ie=!1,P=null,ae=null,oe=null,se=null;this._outputColorSpace=ze;let ce=0,le=0,F=null,ue=-1,de=null,fe=new Gt,pe=new Gt,me=null,he=new Y(0),ge=0,_e=n.width,ve=n.height,ye=1,be=null,xe=null,Se=new Gt(0,0,_e,ve),Ce=new Gt(0,0,_e,ve),we=!1,Te=new ki,Ee=!1,De=!1,Oe=new J,ke=new G,Ae=new Gt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return F===null?ye:1}let I=r;function Pe(t,r){return n.getContext(t,r)}let Fe,Ie,L,Le,R,z,Re,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it,at;try{let t={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in n&&n.setAttribute(`data-engine`,`three.js r186`),n.addEventListener(`webglcontextlost`,U,!1),n.addEventListener(`webglcontextrestored`,st,!1),n.addEventListener(`webglcontextcreationerror`,ct,!1),I===null){let n=`webgl2`;if(I=Pe(n,t),I===null)throw Pe(n)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(t){throw n.removeEventListener(`webglcontextlost`,U,!1),n.removeEventListener(`webglcontextrestored`,st,!1),n.removeEventListener(`webglcontextcreationerror`,ct,!1),V(`WebGLRenderer: `+t.message),t}function ot(){Fe=new Ss(I),Fe.init(),rt=new Kl(I,Fe),Ie=new Zo(I,Fe,t,rt),L=new Wl(I,Fe),Ie.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ae=I.createFramebuffer(),oe=I.createFramebuffer(),se=I.createFramebuffer(),Le=new Ts(I),R=new wl,z=new Gl(I,Fe,L,R,Ie,rt,Le),Re=new xs(N),Be=new Uo(I),it=new Yo(I,Be),Ve=new Cs(I,Be,Le,it),He=new Ds(I,Ve,Be,it,Le),$e=new Es(I,Ie,z),Je=new Qo(R),Ue=new Cl(N,Re,Fe,Ie,it,Je),We=new $l(N,R),Ke=new Ol,qe=new Fl(Fe),Qe=new Jo(N,Re,L,He,S,c),Xe=new Ul(N,He,Ie),at=new eu(I,Le,Ie,L),tt=new Xo(I,Fe,Le),nt=new ws(I,Fe,Le),Le.programs=Ue.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=R,N.renderLists=Ke,N.shadowMap=Xe,N.state=L,N.info=Le}C!==1009&&(M=new ks(C,n.width,n.height,s,i,a));let H=new Xl(N,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let t=Fe.get(`WEBGL_lose_context`);t&&t.loseContext()},this.forceContextRestore=function(){let t=Fe.get(`WEBGL_lose_context`);t&&t.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(t){t!==void 0&&(ye=t,this.setSize(_e,ve,!1))},this.getSize=function(t){return t.set(_e,ve)},this.setSize=function(t,r,i=!0){H.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=t,ve=r,n.width=Math.floor(t*ye),n.height=Math.floor(r*ye),i===!0&&(n.style.width=t+`px`,n.style.height=r+`px`),M!==null&&M.setSize(n.width,n.height),this.setViewport(0,0,t,r))},this.getDrawingBufferSize=function(t){return t.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(t,r,i){_e=t,ve=r,ye=i,n.width=Math.floor(t*i),n.height=Math.floor(r*i),this.setViewport(0,0,t,r)},this.setEffects=function(t){if(C===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(t){for(let n=0;n<t.length;n++)if(t[n].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(t||[])}},this.getCurrentViewport=function(t){return t.copy(fe)},this.getViewport=function(t){return t.copy(Se)},this.setViewport=function(t,n,r,i){t.isVector4?Se.set(t.x,t.y,t.z,t.w):Se.set(t,n,r,i),L.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(t){return t.copy(Ce)},this.setScissor=function(t,n,r,i){t.isVector4?Ce.set(t.x,t.y,t.z,t.w):Ce.set(t,n,r,i),L.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(t){L.setScissorTest(we=t)},this.setOpaqueSort=function(t){be=t},this.setTransparentSort=function(t){xe=t},this.getClearColor=function(t){return t.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(t=!0,n=!0,r=!0){let i=0;if(t){let t=!1;if(F!==null){let n=F.texture.format;t=w.has(n)}if(t){let t=F.texture.type,n=T.has(t),r=Qe.getClearColor(),i=Qe.getClearAlpha(),a=r.r,o=r.g,s=r.b;n?(E[0]=a,E[1]=o,E[2]=s,E[3]=i,I.clearBufferuiv(I.COLOR,0,E)):(D[0]=a,D[1]=o,D[2]=s,D[3]=i,I.clearBufferiv(I.COLOR,0,D))}else i|=I.COLOR_BUFFER_BIT}n&&(i|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),r&&(i|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),i!==0&&I.clear(i)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(t){t.setRenderer(this),P=t},this.dispose=function(){n.removeEventListener(`webglcontextlost`,U,!1),n.removeEventListener(`webglcontextrestored`,st,!1),n.removeEventListener(`webglcontextcreationerror`,ct,!1),Qe.dispose(),Ke.dispose(),qe.dispose(),R.dispose(),Re.dispose(),He.dispose(),it.dispose(),at.dispose(),Ue.dispose(),H.dispose(),H.removeEventListener(`sessionstart`,ht),H.removeEventListener(`sessionend`,gt),_t.stop()};function U(t){t.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),ie=!0}function st(){Ze(`WebGLRenderer: Context Restored.`),ie=!1;let t=Le.autoReset,n=Xe.enabled,r=Xe.autoUpdate,i=Xe.needsUpdate,a=Xe.type;ot(),Le.autoReset=t,Xe.enabled=n,Xe.autoUpdate=r,Xe.needsUpdate=i,Xe.type=a}function ct(t){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,t.statusMessage)}function lt(t){let n=t.target;n.removeEventListener(`dispose`,lt),ut(n)}function ut(t){dt(t),R.remove(t)}function dt(t){let n=R.get(t).programs;n!==void 0&&(n.forEach(function(t){Ue.releaseProgram(t)}),t.isShaderMaterial&&Ue.releaseShaderCache(t))}this.renderBufferDirect=function(t,n,r,i,a,o){n===null&&(n=je);let s=a.isMesh&&a.matrixWorld.determinantAffine()<0,c=Dt(t,n,r,i,a);L.setMaterial(i,s);let l=r.index,u=1;if(i.wireframe===!0){if(l=Ve.getWireframeAttribute(r),l===void 0)return;u=2}let d=r.drawRange,f=r.attributes.position,p=d.start*u,m=(d.start+d.count)*u;o!==null&&(p=Math.max(p,o.start*u),m=Math.min(m,(o.start+o.count)*u)),l===null?f!=null&&(p=Math.max(p,0),m=Math.min(m,f.count)):(p=Math.max(p,0),m=Math.min(m,l.count));let h=m-p;if(h<0||h===1/0)return;it.setup(a,i,c,r,l);let g,_=tt;if(l!==null&&(g=Be.get(l),_=nt,_.setIndex(g)),a.isMesh)i.wireframe===!0?(L.setLineWidth(i.wireframeLinewidth*Ne()),_.setMode(I.LINES)):_.setMode(I.TRIANGLES);else if(a.isLine){let t=i.linewidth;t===void 0&&(t=1),L.setLineWidth(t*Ne()),a.isLineSegments?_.setMode(I.LINES):a.isLineLoop?_.setMode(I.LINE_LOOP):_.setMode(I.LINE_STRIP)}else a.isPoints?_.setMode(I.POINTS):a.isSprite&&_.setMode(I.TRIANGLES);if(a.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))_.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else{let t=a._multiDrawStarts,n=a._multiDrawCounts,r=a._multiDrawCount,o=l?Be.get(l).bytesPerElement:1,s=R.get(i).currentProgram.getUniforms();for(let i=0;i<r;i++)s.setValue(I,`_gl_DrawID`,i),_.render(t[i]/o,n[i])}}else if(a.isInstancedMesh)_.renderInstances(p,h,a.count);else if(r.isInstancedBufferGeometry){let t=r._maxInstanceCount===void 0?1/0:r._maxInstanceCount,n=Math.min(r.instanceCount,t);_.renderInstances(p,h,n)}else _.render(p,h)};function ft(t,n,r,i){P!==null&&t.isNodeMaterial&&P.setObject(i,t),Ee===!0&&Je.setState(t,r,!1),t.transparent===!0&&t.side===2&&t.forceSinglePass===!1?(t.side=1,t.needsUpdate=!0,Ct(t,n,i),t.side=0,t.needsUpdate=!0,Ct(t,n,i),t.side=2):Ct(t,n,i)}this.compile=function(t,n,r=null){r===null&&(r=t),P!==null&&P.renderStart(t,n,r),A=qe.get(r),A.init(n),j.push(A),r.traverseVisible(function(t){t.isLight&&t.layers.test(n.layers)&&(A.pushLight(t),t.castShadow&&A.pushShadow(t))}),t!==r&&t.traverseVisible(function(t){t.isLight&&t.layers.test(n.layers)&&(A.pushLight(t),t.castShadow&&A.pushShadow(t))}),A.setupLights(),P!==null&&P.updateLights(A.state.lightsArray),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),Ee===!0&&Je.setGlobalState(this.clippingPlanes,n),P!==null&&Xe.render(A.state.shadowsArray,r,n);let i=new Set;return t.traverse(function(t){if(!(t.isMesh||t.isPoints||t.isLine||t.isSprite))return;let a=t.material;if(a){if(Array.isArray(a))for(let o=0;o<a.length;o++){let s=a[o];ft(s,r,n,t),i.add(s)}else ft(a,r,n,t),i.add(a)}}),A=j.pop(),P!==null&&P.renderEnd(),i},this.compileAsync=function(t,n,r=null){let i=this.compile(t,n,r);return new Promise(n=>{function r(){i.forEach(function(t){let n=R.get(t).currentProgram;(n===void 0||n.isReady())&&i.delete(t)}),i.size===0?n(t):setTimeout(r,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(r,10):r()})};let pt=null;function mt(t){pt&&pt(t)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new Ho;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(t){pt=t,H.setAnimationLoop(t),t===null?_t.stop():_t.start()},H.addEventListener(`sessionstart`,ht),H.addEventListener(`sessionend`,gt),this.render=function(t,n){if(n!==void 0&&n.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;P!==null&&P.renderStart(t,n);let r=H.enabled===!0&&H.isPresenting===!0,i=M!==null&&(F===null||r)&&M.begin(N,F);if(t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),n.parent===null&&n.matrixWorldAutoUpdate===!0&&n.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(n),n=H.getCamera()),t.isScene===!0&&t.onBeforeRender(N,t,n,F),A=qe.get(t,j.length),A.init(n),A.state.textureUnits=z.getTextureUnits(),j.push(A),Oe.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Ge,n.reversedDepth),De=this.localClippingEnabled,Ee=Je.init(this.clippingPlanes,De),k=Ke.get(t,re.length),k.init(),re.push(k),H.enabled===!0&&H.isPresenting===!0){let t=N.xr.getDepthSensingMesh();t!==null&&vt(t,n,-1/0,N.sortObjects)}vt(t,n,0,N.sortObjects),k.finish(),P!==null&&P.updateLights(A.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Me=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Me&&Qe.addToRenderList(k,t),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Je.beginShadows();let a=A.state.shadowsArray;if(Xe.render(a,t,n),Ee===!0&&Je.endShadows(),(i&&M.hasRenderPass())===!1){let r=k.opaque,i=k.transmissive;if(A.setupLights(),n.isArrayCamera){let a=n.cameras;if(i.length>0)for(let n=0,o=a.length;n<o;n++){let o=a[n];bt(r,i,t,o)}Me&&Qe.render(t);for(let n=0,r=a.length;n<r;n++){let r=a[n];yt(k,t,r,r.viewport)}}else i.length>0&&bt(r,i,t,n),Me&&Qe.render(t),yt(k,t,n)}F!==null&&le===0&&(z.updateMultisampleRenderTarget(F),z.updateRenderTargetMipmap(F)),i&&M.end(N),t.isScene===!0&&t.onAfterRender(N,t,n),it.resetDefaultState(),ue=-1,de=null,j.pop(),j.length>0?(A=j[j.length-1],z.setTextureUnits(A.state.textureUnits),Ee===!0&&Je.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,re.pop(),k=re.length>0?re[re.length-1]:null,P!==null&&P.renderEnd()};function vt(t,n,r,i){if(t.visible===!1)return;if(t.layers.test(n.layers)){if(t.isGroup)r=t.renderOrder;else if(t.isLOD)t.autoUpdate===!0&&t.update(n);else if(t.isLightProbeGrid)A.pushLightProbeGrid(t);else if(t.isLight)A.pushLight(t),t.castShadow&&A.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||t.intersectsFrustum(Te)){i&&Ae.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Oe);let a=He.update(t),o=t.material;o.visible&&k.push(t,a,o,r,Ae.z,null,n)}}else if((t.isMesh||t.isLine||t.isPoints)&&(!t.frustumCulled||t.intersectsFrustum(Te))){let a=He.update(t),o=t.material;if(i&&(t.boundingSphere===void 0?(a.boundingSphere===null&&a.computeBoundingSphere(),Ae.copy(a.boundingSphere.center)):(t.boundingSphere===null&&t.computeBoundingSphere(),Ae.copy(t.boundingSphere.center)),Ae.applyMatrix4(t.matrixWorld).applyMatrix4(Oe)),Array.isArray(o)){let i=a.groups;for(let s=0,c=i.length;s<c;s++){let c=i[s],l=o[c.materialIndex];l&&l.visible&&k.push(t,a,l,r,Ae.z,c,n)}}else o.visible&&k.push(t,a,o,r,Ae.z,null,n)}}let a=t.children;for(let t=0,o=a.length;t<o;t++)vt(a[t],n,r,i)}function yt(t,n,r,i){let{opaque:a,transmissive:o,transparent:s}=t;A.setupLightsView(r),Ee===!0&&Je.setGlobalState(N.clippingPlanes,r),i&&L.viewport(fe.copy(i)),a.length>0&&xt(a,n,r),o.length>0&&xt(o,n,r),s.length>0&&xt(s,n,r),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function bt(t,n,r,i){if((r.isScene===!0?r.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[i.id]===void 0){let t=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[i.id]=new qt(1,1,{generateMipmaps:!0,type:t?v:d,minFilter:u,samples:Math.max(4,Ie.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:q.workingColorSpace})}let o=A.state.transmissionRenderTarget[i.id],s=i.viewport||fe;o.setSize(s.z*N.transmissionResolutionScale,s.w*N.transmissionResolutionScale);let c=N.getRenderTarget(),l=N.getActiveCubeFace(),f=N.getActiveMipmapLevel();N.setRenderTarget(o),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Me&&Qe.render(r);let p=N.toneMapping;N.toneMapping=0;let m=i.viewport;if(i.viewport!==void 0&&(i.viewport=void 0),A.setupLightsView(i),Ee===!0&&Je.setGlobalState(N.clippingPlanes,i),xt(t,r,i),z.updateMultisampleRenderTarget(o),z.updateRenderTargetMipmap(o),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let t=!1;for(let a=0,o=n.length;a<o;a++){let{object:o,geometry:s,material:c,group:l}=n[a];if(c.side===2&&o.layers.test(i.layers)){let n=c.side;c.side=1,c.needsUpdate=!0,St(o,r,i,s,c,l),c.side=n,c.needsUpdate=!0,t=!0}}t===!0&&(z.updateMultisampleRenderTarget(o),z.updateRenderTargetMipmap(o))}N.setRenderTarget(c,l,f),N.setClearColor(he,ge),m!==void 0&&(i.viewport=m),N.toneMapping=p}function xt(t,n,r){let i=n.isScene===!0?n.overrideMaterial:null;for(let a=0,o=t.length;a<o;a++){let o=t[a],{object:s,geometry:c,group:l}=o,u=o.material;u.allowOverride===!0&&i!==null&&(u=i),s.layers.test(r.layers)&&St(s,n,r,c,u,l)}}function St(t,n,r,i,a,o){P!==null&&a.isNodeMaterial&&P.setObject(t,a),t.onBeforeRender(N,n,r,i,a,o),t.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),a.onBeforeRender(N,n,r,i,t,o),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,N.renderBufferDirect(r,n,i,a,t,o),a.side=0,a.needsUpdate=!0,N.renderBufferDirect(r,n,i,a,t,o),a.side=2):N.renderBufferDirect(r,n,i,a,t,o),t.onAfterRender(N,n,r,i,a,o)}function Ct(t,n,r){n.isScene!==!0&&(n=je);let i=R.get(t),a=A.state.lights,o=A.state.shadowsArray,s=a.state.version,c=Ue.getParameters(t,a.state,o,n,r,A.state.lightProbeGridArray),l=Ue.getProgramCacheKey(c),u=i.programs;i.environment=t.isMeshStandardMaterial||t.isMeshLambertMaterial||t.isMeshPhongMaterial?n.environment:null,i.fog=n.fog;let d=t.isMeshStandardMaterial||t.isMeshLambertMaterial&&!t.envMap||t.isMeshPhongMaterial&&!t.envMap;i.envMap=Re.get(t.envMap||i.environment,d),i.envMapRotation=i.environment!==null&&t.envMap===null?n.environmentRotation:t.envMapRotation,u===void 0&&(t.addEventListener(`dispose`,lt),u=new Map,i.programs=u);let f=u.get(l);if(f!==void 0){if(i.currentProgram===f&&i.lightsStateVersion===s)return Tt(t,c),f}else c.uniforms=Ue.getUniforms(t),P!==null&&t.isNodeMaterial&&P.build(t,r,c),t.onBeforeCompile(c,N),f=Ue.acquireProgram(c,l),u.set(l,f),i.uniforms=c.uniforms;let p=i.uniforms;return(!t.isShaderMaterial&&!t.isRawShaderMaterial||t.clipping===!0)&&(p.clippingPlanes=Je.uniform),Tt(t,c),i.needsLights=Ot(t),i.lightsStateVersion=s,i.needsLights&&(p.ambientLightColor.value=a.state.ambient,p.lightProbe.value=a.state.probe,p.sunLights.value=a.state.sun,p.sunLightShadows.value=a.state.sunShadow,p.directionalLights.value=a.state.directional,p.directionalLightShadows.value=a.state.directionalShadow,p.spotLights.value=a.state.spot,p.spotLightShadows.value=a.state.spotShadow,p.rectAreaLights.value=a.state.rectArea,p.ltc_1.value=a.state.rectAreaLTC1,p.ltc_2.value=a.state.rectAreaLTC2,p.pointLights.value=a.state.point,p.pointLightShadows.value=a.state.pointShadow,p.hemisphereLights.value=a.state.hemi,p.sunShadowMatrix.value=a.state.sunShadowMatrix,p.sunShadowCascade.value=a.state.sunShadowCascade,p.directionalShadowMatrix.value=a.state.directionalShadowMatrix,p.spotLightMatrix.value=a.state.spotLightMatrix,p.spotLightMap.value=a.state.spotLightMap,p.pointShadowMatrix.value=a.state.pointShadowMatrix),i.lightProbeGrid=A.state.lightProbeGridArray.length>0,i.currentProgram=f,i.uniformsList=null,f}function wt(t){if(t.uniformsList===null){let n=t.currentProgram.getUniforms();t.uniformsList=Ic.seqWithValue(n.seq,t.uniforms)}return t.uniformsList}function Tt(t,n){let r=R.get(t);r.outputColorSpace=n.outputColorSpace,r.batching=n.batching,r.batchingColor=n.batchingColor,r.instancing=n.instancing,r.instancingColor=n.instancingColor,r.instancingMorph=n.instancingMorph,r.skinning=n.skinning,r.morphTargets=n.morphTargets,r.morphNormals=n.morphNormals,r.morphColors=n.morphColors,r.morphTargetsCount=n.morphTargetsCount,r.numClippingPlanes=n.numClippingPlanes,r.numIntersection=n.numClipIntersection,r.vertexAlphas=n.vertexAlphas,r.vertexTangents=n.vertexTangents,r.toneMapping=n.toneMapping}function Et(t,n){if(t.length===0)return null;if(t.length===1)return t[0].texture===null?null:t[0];O.setFromMatrixPosition(n.matrixWorld);for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.texture!==null&&r.boundingBox.containsPoint(O))return r}return null}function Dt(t,n,r,i,a){n.isScene!==!0&&(n=je),z.resetTextureUnits();let o=n.fog,s=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?n.environment:null,c=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:q.workingColorSpace,l=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,u=Re.get(i.envMap||s,l),d=i.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,f=!!r.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),p=!!r.morphAttributes.position,m=!!r.morphAttributes.normal,h=!!r.morphAttributes.color,g=0;i.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(g=N.toneMapping);let _=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,v=_===void 0?0:_.length,y=R.get(i),b=A.state.lights;if(Ee===!0&&(De===!0||t!==de)){let n=t===de&&i.id===ue;Je.setState(i,t,n)}let x=!1;i.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===c?a.isBatchedMesh&&y.batching===!1||!a.isBatchedMesh&&y.batching===!0||a.isBatchedMesh&&y.batchingColor===!0&&a._colorsTexture===null||a.isBatchedMesh&&y.batchingColor===!1&&a._colorsTexture!==null||a.isInstancedMesh&&y.instancing===!1||!a.isInstancedMesh&&y.instancing===!0||a.isSkinnedMesh&&y.skinning===!1||!a.isSkinnedMesh&&y.skinning===!0||a.isInstancedMesh&&y.instancingColor===!0&&a.instanceColor===null||a.isInstancedMesh&&y.instancingColor===!1&&a.instanceColor!==null||a.isInstancedMesh&&y.instancingMorph===!0&&a.morphTexture===null||a.isInstancedMesh&&y.instancingMorph===!1&&a.morphTexture!==null?x=!0:y.envMap===u?i.fog===!0&&y.fog!==o||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Je.numPlanes||y.numIntersection!==Je.numIntersection)?x=!0:y.vertexAlphas===d&&y.vertexTangents===f&&y.morphTargets===p&&y.morphNormals===m&&y.morphColors===h&&y.toneMapping===g&&y.morphTargetsCount===v?!!y.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=i.version);let S=y.currentProgram;x===!0&&(S=Ct(i,n,a),P&&i.isNodeMaterial&&P.onUpdateProgram(i,S,y));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=y.uniforms;if(L.useProgram(S.program)&&(C=!0,w=!0,T=!0),i.id!==ue&&(ue=i.id,w=!0),y.needsLights){let t=Et(A.state.lightProbeGridArray,a);y.lightProbeGrid!==t&&(y.lightProbeGrid=t,w=!0)}if(C||de!==t){L.buffers.depth.getReversed()&&t.reversedDepth!==!0&&(t._reversedDepth=!0,t.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,t.projectionMatrix),E.setValue(I,`viewMatrix`,t.matrixWorldInverse);let n=E.map.cameraPosition;n!==void 0&&n.setValue(I,ke.setFromMatrixPosition(t.matrixWorld)),Ie.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(t.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&E.setValue(I,`isOrthographic`,t.isOrthographicCamera===!0),de!==t&&(de=t,w=!0,T=!0)}if(y.needsLights&&(b.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,b.state.sunShadowMap,z),b.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,b.state.directionalShadowMap,z),b.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,b.state.spotShadowMap,z),b.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,b.state.pointShadowMap,z)),a.isSkinnedMesh){E.setOptional(I,a,`bindMatrix`),E.setOptional(I,a,`bindMatrixInverse`);let t=a.skeleton;t&&(t.boneTexture===null&&t.computeBoneTexture(),E.setValue(I,`boneTexture`,t.boneTexture,z))}a.isBatchedMesh&&(E.setOptional(I,a,`batchingTexture`),E.setValue(I,`batchingTexture`,a._matricesTexture,z),E.setOptional(I,a,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,a._indirectTexture,z),E.setOptional(I,a,`batchingColorTexture`),a._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,a._colorsTexture,z));let O=r.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&$e.update(a,r,S),(w||y.receiveShadow!==a.receiveShadow)&&(y.receiveShadow=a.receiveShadow,E.setValue(I,`receiveShadow`,a.receiveShadow)),(i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial)&&i.envMap===null&&n.environment!==null&&(D.envMapIntensity.value=n.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=ru()),w){if(E.setValue(I,`toneMappingExposure`,N.toneMappingExposure),y.needsLights&&W(D,T),o&&i.fog===!0&&We.refreshFogUniforms(D,o),We.refreshMaterialUniforms(D,i,ye,ve,A.state.transmissionRenderTarget[t.id]),y.needsLights&&y.lightProbeGrid){let t=y.lightProbeGrid;D.probesSH.value=t.texture,D.probesMin.value.copy(t.boundingBox.min),D.probesMax.value.copy(t.boundingBox.max),D.probesResolution.value.copy(t.resolution)}Ic.upload(I,wt(y),D,z)}if(i.isShaderMaterial&&i.uniformsNeedUpdate===!0&&(Ic.upload(I,wt(y),D,z),i.uniformsNeedUpdate=!1),i.isSpriteMaterial&&E.setValue(I,`center`,a.center),E.setValue(I,`modelViewMatrix`,a.modelViewMatrix),E.setValue(I,`normalMatrix`,a.normalMatrix),E.setValue(I,`modelMatrix`,a.matrixWorld),i.uniformsGroups!==void 0){let t=i.uniformsGroups;for(let n=0,r=t.length;n<r;n++){let r=t[n];at.update(r,S),at.bind(r,S)}}return S}function W(t,n){t.ambientLightColor.needsUpdate=n,t.lightProbe.needsUpdate=n,t.sunLights.needsUpdate=n,t.sunLightShadows.needsUpdate=n,t.directionalLights.needsUpdate=n,t.directionalLightShadows.needsUpdate=n,t.pointLights.needsUpdate=n,t.pointLightShadows.needsUpdate=n,t.spotLights.needsUpdate=n,t.spotLightShadows.needsUpdate=n,t.rectAreaLights.needsUpdate=n,t.hemisphereLights.needsUpdate=n}function Ot(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&t.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(t,n,r){let i=R.get(t);i.__autoAllocateDepthBuffer=t.resolveDepthBuffer===!1,i.__autoAllocateDepthBuffer===!1&&(i.__useRenderToTexture=!1),R.get(t.texture).__webglTexture=n,R.get(t.depthTexture).__webglTexture=i.__autoAllocateDepthBuffer?void 0:r,i.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(t,n){let r=R.get(t);r.__webglFramebuffer=n,r.__useDefaultFramebuffer=n===void 0},this.setRenderTarget=function(t,n=0,r=0){F=t,ce=n,le=r;let i=null,a=!1,o=!1;if(t){let s=R.get(t);if(s.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,s.__webglFramebuffer),fe.copy(t.viewport),pe.copy(t.scissor),me=t.scissorTest,L.viewport(fe),L.scissor(pe),L.setScissorTest(me),ue=-1;return}if(s.__webglFramebuffer===void 0)z.setupRenderTarget(t);else if(s.__hasExternalTextures)z.rebindTextures(t,R.get(t.texture).__webglTexture,R.get(t.depthTexture).__webglTexture);else if(t.depthBuffer){let n=t.depthTexture;if(s.__boundDepthTexture!==n){if(n!==null&&R.has(n)&&(t.width!==n.image.width||t.height!==n.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(t)}}let c=t.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=R.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(i=Array.isArray(l[n])?l[n][r]:l[n],a=!0):i=t.samples>0&&z.useMultisampledRTT(t)===!1?R.get(t).__webglMultisampledFramebuffer:Array.isArray(l)?l[r]:l,fe.copy(t.viewport),pe.copy(t.scissor),me=t.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(r!==0&&(i=ae),L.bindFramebuffer(I.FRAMEBUFFER,i)&&L.drawBuffers(t,i),L.viewport(fe),L.scissor(pe),L.setScissorTest(me),a){let i=R.get(t.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+n,i.__webglTexture,r)}else if(o){let i=n;for(let n=0;n<t.textures.length;n++){let a=R.get(t.textures[n]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+n,a.__webglTexture,r,i)}}else if(t!==null&&r!==0){let n=R.get(t.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,r)}ue=-1};function kt(t){let n=R.get(t);return(n.__readFormat!==t.format||n.__readType!==t.type)&&(n.__readFormat=t.format,n.__readType=t.type,n.__formatReadable=Ie.textureFormatReadable(t.format),n.__typeReadable=Ie.textureTypeReadable(t.type)),n}this.readRenderTargetPixels=function(t,n,r,i,a,o,s,c=0){if(!(t&&t.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let l=R.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){L.bindFramebuffer(I.FRAMEBUFFER,l);try{let s=t.textures[c],l=s.format,u=s.type;t.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+c);let d=kt(s);if(d.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(d.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}n>=0&&n<=t.width-i&&r>=0&&r<=t.height-a&&I.readPixels(n,r,i,a,rt.convert(l),rt.convert(u),o)}finally{let t=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,t)}}},this.readRenderTargetPixelsAsync=async function(t,n,r,i,a,o,s,c=0){if(!(t&&t.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let l=R.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){if(n>=0&&n<=t.width-i&&r>=0&&r<=t.height-a){L.bindFramebuffer(I.FRAMEBUFFER,l);let s=t.textures[c],u=s.format,d=s.type;t.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+c);let f=kt(s);if(f.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(f.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let p=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,p),I.bufferData(I.PIXEL_PACK_BUFFER,o.byteLength,I.STREAM_READ),I.readPixels(n,r,i,a,rt.convert(u),rt.convert(d),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let m=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,m);let h=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await et(I,h,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,p),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,o),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(p),I.deleteSync(h),o}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(t,n=null,r=0){let i=2**-r,a=Math.floor(t.image.width*i),o=Math.floor(t.image.height*i),s=n===null?0:n.x,c=n===null?0:n.y;z.setTexture2D(t,0),I.copyTexSubImage2D(I.TEXTURE_2D,r,0,0,s,c,a,o),L.unbindTexture()},this.copyTextureToTexture=function(t,n,r=null,i=null,a=0,o=0){let s,c,l,u,d,f,p,m,h,g=t.isCompressedTexture?t.mipmaps[o]:t.image;if(r!==null)s=r.max.x-r.min.x,c=r.max.y-r.min.y,l=r.isBox3?r.max.z-r.min.z:1,u=r.min.x,d=r.min.y,f=r.isBox3?r.min.z:0;else{let n=2**-a;s=Math.floor(g.width*n),c=Math.floor(g.height*n),l=t.isDataArrayTexture?g.depth:t.isData3DTexture?Math.floor(g.depth*n):1,u=0,d=0,f=0}i===null?(p=0,m=0,h=0):(p=i.x,m=i.y,h=i.z);let _=rt.convert(n.format),v=rt.convert(n.type),y;n.isData3DTexture?(z.setTexture3D(n,0),y=I.TEXTURE_3D):n.isDataArrayTexture||n.isCompressedArrayTexture?(z.setTexture2DArray(n,0),y=I.TEXTURE_2D_ARRAY):(z.setTexture2D(n,0),y=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,n.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,n.unpackAlignment);let b=L.getParameter(I.UNPACK_ROW_LENGTH),x=L.getParameter(I.UNPACK_IMAGE_HEIGHT),S=L.getParameter(I.UNPACK_SKIP_PIXELS),C=L.getParameter(I.UNPACK_SKIP_ROWS),w=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,g.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,g.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,u),L.pixelStorei(I.UNPACK_SKIP_ROWS,d),L.pixelStorei(I.UNPACK_SKIP_IMAGES,f);let T=t.isDataArrayTexture||t.isData3DTexture,E=n.isDataArrayTexture||n.isData3DTexture;if(t.isDepthTexture){let r=R.get(t),i=R.get(n),g=R.get(r.__renderTarget),_=R.get(i.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,g.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let r=0;r<l;r++)T&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,f+r),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(n).__webglTexture,o,h+r)),I.blitFramebuffer(u,d,s,c,p,m,s,c,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(a!==0||t.isRenderTargetTexture||R.has(t)){let r=R.get(t),i=R.get(n);L.bindFramebuffer(I.READ_FRAMEBUFFER,oe),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,se);for(let t=0;t<l;t++)T?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,f+t):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),E?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,i.__webglTexture,o,h+t):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,i.__webglTexture,o),a===0?E?I.copyTexSubImage3D(y,o,p,m,h+t,u,d,s,c):I.copyTexSubImage2D(y,o,p,m,u,d,s,c):I.blitFramebuffer(u,d,s,c,p,m,s,c,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else E?t.isDataTexture||t.isData3DTexture?I.texSubImage3D(y,o,p,m,h,s,c,l,_,v,g.data):n.isCompressedArrayTexture?I.compressedTexSubImage3D(y,o,p,m,h,s,c,l,_,g.data):I.texSubImage3D(y,o,p,m,h,s,c,l,_,v,g):t.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,o,p,m,s,c,_,v,g.data):t.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,o,p,m,g.width,g.height,_,g.data):I.texSubImage2D(I.TEXTURE_2D,o,p,m,s,c,_,v,g);L.pixelStorei(I.UNPACK_ROW_LENGTH,b),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,x),L.pixelStorei(I.UNPACK_SKIP_PIXELS,S),L.pixelStorei(I.UNPACK_SKIP_ROWS,C),L.pixelStorei(I.UNPACK_SKIP_IMAGES,w),o===0&&n.generateMipmaps&&I.generateMipmap(y),L.unbindTexture()},this.initRenderTarget=function(t){R.get(t).__webglFramebuffer===void 0&&z.setupRenderTarget(t)},this.initTexture=function(t){t.isCubeTexture?z.setTextureCube(t,0):t.isData3DTexture?z.setTexture3D(t,0):t.isDataArrayTexture||t.isCompressedArrayTexture?z.setTexture2DArray(t,0):z.setTexture2D(t,0),L.unbindTexture()},this.resetState=function(){ce=0,le=0,F=null,L.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=q._getDrawingBufferColorSpace(t),n.unpackColorSpace=q._getUnpackColorSpace()}};function au(t,n){if(n===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),t;if(n===2||n===1){let r=t.getIndex();if(r===null){let n=[],i=t.getAttribute(`position`);if(i!==void 0){for(let t=0;t<i.count;t++)n.push(t);t.setIndex(n),r=t.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),t}let i=r.count-2,a=[];if(n===2)for(let t=1;t<=i;t++)a.push(r.getX(0)),a.push(r.getX(t)),a.push(r.getX(t+1));else for(let t=0;t<i;t++)t%2==0?(a.push(r.getX(t)),a.push(r.getX(t+1)),a.push(r.getX(t+2))):(a.push(r.getX(t+2)),a.push(r.getX(t+1)),a.push(r.getX(t)));return a.length/3!==i&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),t.setIndex(a),t.clearGroups(),t}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,n),t}function ou(t){let n=new Map,r=new Map,i=t.clone();return su(t,i,function(t,i){n.set(i,t),r.set(t,i)}),i.traverse(function(t){if(!t.isSkinnedMesh)return;let i=t,a=n.get(t),o=a.skeleton.bones;i.skeleton=a.skeleton.clone(),i.bindMatrix.copy(a.bindMatrix),i.skeleton.bones=o.map(function(t){return r.get(t)}),i.bind(i.skeleton,i.bindMatrix)}),i}function su(t,n,r){r(t,n);for(let i=0;i<t.children.length;i++)su(t.children[i],n.children[i],r)}var cu=class extends Ga{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new Du(t,Q.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Du(t,Q.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ou(t)})}load(t,n,r,i){let a=this,o;if(this.resourcePath!==``)o=this.resourcePath;else if(this.path!==``){let n=bo.extractUrlBase(t);o=bo.resolveURL(n,this.path)}else o=bo.extractUrlBase(t);this.manager.itemStart(t);let s=function(n){i?i(n):console.error(n),a.manager.itemError(t),a.manager.itemEnd(t)},c=new Ja(this.manager);c.setPath(this.path),c.setResponseType(`arraybuffer`),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(r){try{a.parse(r,o,function(r){n(r),a.manager.itemEnd(t)},s)}catch(t){s(t)}},r,s)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,r,i){let a,o={},s={},c=new TextDecoder;if(typeof t==`string`)a=JSON.parse(t);else if(t instanceof ArrayBuffer){if(c.decode(new Uint8Array(t,0,4))===ku){try{o[Q.KHR_BINARY_GLTF]=new Mu(t)}catch(t){i&&i(t);return}a=JSON.parse(o[Q.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(t))}else a=t;if(a.asset===void 0||a.asset.version[0]<2){i&&i(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let l=new id(a,{path:n||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){let n=this.pluginCallbacks[t](l);n.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),s[n.name]=n,o[n.name]=!0}if(a.extensionsUsed)for(let t=0;t<a.extensionsUsed.length;++t){let n=a.extensionsUsed[t],r=a.extensionsRequired||[];switch(n){case Q.KHR_MATERIALS_UNLIT:o[n]=new fu;break;case Q.KHR_DRACO_MESH_COMPRESSION:o[n]=new Nu(a,this.dracoLoader);break;case Q.KHR_TEXTURE_TRANSFORM:o[n]=new Pu;break;case Q.KHR_MESH_QUANTIZATION:o[n]=new Fu;break;default:r.indexOf(n)>=0&&s[n]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+n+`".`)}}l.setExtensions(o),l.setPlugins(s),l.parse(r,i)}parseAsync(t,n){let r=this;return new Promise(function(i,a){r.parse(t,n,i,a)})}};function lu(){let t={};return{get:function(n){return t[n]},add:function(n,r){t[n]=r},remove:function(n){delete t[n]},removeAll:function(){t={}}}}function uu(t,n,r){let i=t.json.materials[n];return i.extensions&&i.extensions[r]?i.extensions[r]:null}var Q={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},du=class{constructor(t){this.parser=t,this.name=Q.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,n=this.parser.json.nodes||[];for(let r=0,i=n.length;r<i;r++){let i=n[r];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(t){let n=this.parser,r=`light:`+t,i=n.cache.get(r);if(i)return i;let a=n.json,o=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t],s,c=new Y(16777215);o.color!==void 0&&c.setRGB(o.color[0],o.color[1],o.color[2],Be);let l=o.range===void 0?0:o.range;switch(o.type){case`directional`:s=new vo(c),s.target.position.set(0,0,-1),s.add(s.target);break;case`point`:s=new ho(c),s.distance=l;break;case`spot`:s=new po(c),s.distance=l,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle===void 0?0:o.spot.innerConeAngle,o.spot.outerConeAngle=o.spot.outerConeAngle===void 0?Math.PI/4:o.spot.outerConeAngle,s.angle=o.spot.outerConeAngle,s.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,s.target.position.set(0,0,-1),s.add(s.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+o.type)}return s.position.set(0,0,0),Xu(s,o),o.intensity!==void 0&&(s.intensity=o.intensity),s.name=n.createUniqueName(o.name||`light_`+t),i=Promise.resolve(s),n.cache.add(r,i),i}getDependency(t,n){if(t===`light`)return this._loadLight(n)}createNodeAttachment(t){let n=this,r=this.parser,i=r.json.nodes[t],a=(i.extensions&&i.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(t){return r._getNodeRef(n.cache,a,t)})}},fu=class{constructor(){this.name=Q.KHR_MATERIALS_UNLIT}getMaterialType(){return Vr}extendParams(t,n,r){let i=[];t.color=new Y(1,1,1),t.opacity=1;let a=n.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let n=a.baseColorFactor;t.color.setRGB(n[0],n[1],n[2],Be),t.opacity=n[3]}a.baseColorTexture!==void 0&&i.push(r.assignTexture(t,`map`,a.baseColorTexture,ze))}return Promise.all(i)}},pu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);return r===null||r.emissiveStrength!==void 0&&(n.emissiveIntensity=r.emissiveStrength),Promise.resolve()}},mu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];if(r.clearcoatFactor!==void 0&&(n.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(n,`clearcoatMap`,r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(n,`clearcoatRoughnessMap`,r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(n,`clearcoatNormalMap`,r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let t=r.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new W(t,t)}return Promise.all(i)}},hu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_DISPERSION}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);return r===null||(n.dispersion=r.dispersion===void 0?0:r.dispersion),Promise.resolve()}},gu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];return r.iridescenceFactor!==void 0&&(n.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(n,`iridescenceMap`,r.iridescenceTexture)),r.iridescenceIor!==void 0&&(n.iridescenceIOR=r.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(n,`iridescenceThicknessMap`,r.iridescenceThicknessTexture)),Promise.all(i)}},_u=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_SHEEN}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];if(n.sheenColor=new Y(0,0,0),n.sheenRoughness=0,n.sheen=1,r.sheenColorFactor!==void 0){let t=r.sheenColorFactor;n.sheenColor.setRGB(t[0],t[1],t[2],Be)}return r.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(n,`sheenColorMap`,r.sheenColorTexture,ze)),r.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(n,`sheenRoughnessMap`,r.sheenRoughnessTexture)),Promise.all(i)}},vu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];return r.transmissionFactor!==void 0&&(n.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(n,`transmissionMap`,r.transmissionTexture)),Promise.all(i)}},yu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_VOLUME}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];n.thickness=r.thicknessFactor===void 0?0:r.thicknessFactor,r.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(n,`thicknessMap`,r.thicknessTexture)),n.attenuationDistance=r.attenuationDistance||1/0;let a=r.attenuationColor||[1,1,1];return n.attenuationColor=new Y().setRGB(a[0],a[1],a[2],Be),Promise.all(i)}},bu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_IOR}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);return r===null||(n.ior=r.ior===void 0?1.5:r.ior,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},xu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_SPECULAR}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];n.specularIntensity=r.specularFactor===void 0?1:r.specularFactor,r.specularTexture!==void 0&&i.push(this.parser.assignTexture(n,`specularIntensityMap`,r.specularTexture));let a=r.specularColorFactor||[1,1,1];return n.specularColor=new Y().setRGB(a[0],a[1],a[2],Be),r.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(n,`specularColorMap`,r.specularColorTexture,ze)),Promise.all(i)}},Su=class{constructor(t){this.parser=t,this.name=Q.EXT_MATERIALS_BUMP}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];return n.bumpScale=r.bumpFactor===void 0?1:r.bumpFactor,r.bumpTexture!==void 0&&i.push(this.parser.assignTexture(n,`bumpMap`,r.bumpTexture)),Promise.all(i)}},Cu=class{constructor(t){this.parser=t,this.name=Q.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return uu(this.parser,t,this.name)===null?null:ma}extendMaterialParams(t,n){let r=uu(this.parser,t,this.name);if(r===null)return Promise.resolve();let i=[];return r.anisotropyStrength!==void 0&&(n.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(n.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(n,`anisotropyMap`,r.anisotropyTexture)),Promise.all(i)}},wu=class{constructor(t){this.parser=t,this.name=Q.KHR_TEXTURE_BASISU}loadTexture(t){let n=this.parser,r=n.json,i=r.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let a=i.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return n.loadTextureImage(t,a.source,o)}},Tu=class{constructor(t){this.parser=t,this.name=Q.EXT_TEXTURE_WEBP}loadTexture(t){let n=this.name,r=this.parser,i=r.json,a=i.textures[t];if(!a.extensions||!a.extensions[n])return null;let o=a.extensions[n],s=i.images[o.source],c=r.textureLoader;if(s.uri){let t=r.options.manager.getHandler(s.uri);t!==null&&(c=t)}return r.loadTextureImage(t,o.source,c)}},Eu=class{constructor(t){this.parser=t,this.name=Q.EXT_TEXTURE_AVIF}loadTexture(t){let n=this.name,r=this.parser,i=r.json,a=i.textures[t];if(!a.extensions||!a.extensions[n])return null;let o=a.extensions[n],s=i.images[o.source],c=r.textureLoader;if(s.uri){let t=r.options.manager.getHandler(s.uri);t!==null&&(c=t)}return r.loadTextureImage(t,o.source,c)}},Du=class{constructor(t,n){this.name=n,this.parser=t}loadBufferView(t){let n=this.parser.json,r=n.bufferViews[t];if(r.extensions&&r.extensions[this.name]){let t=r.extensions[this.name],i=this.parser.getDependency(`buffer`,t.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return i.then(function(n){let r=t.byteOffset||0,i=t.byteLength||0,o=t.count,s=t.byteStride,c=new Uint8Array(n,r,i);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(o,s,c,t.mode,t.filter).then(function(t){return t.buffer}):a.ready.then(function(){let n=new ArrayBuffer(o*s);return a.decodeGltfBuffer(new Uint8Array(n),o,s,c,t.mode,t.filter),n})})}return null}},Ou=class{constructor(t){this.name=Q.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let n=this.parser.json,r=n.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;let i=n.meshes[r.mesh];for(let t of i.primitives)if(t.mode!==zu.TRIANGLES&&t.mode!==zu.TRIANGLE_STRIP&&t.mode!==zu.TRIANGLE_FAN&&t.mode!==void 0)return null;let a=r.extensions[this.name].attributes,o=[],s={};for(let t in a)o.push(this.parser.getDependency(`accessor`,a[t]).then(n=>(s[t]=n,s[t])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(t=>{let n=t.pop(),r=n.isGroup?n.children:[n],i=t[0].count,a=[];for(let t of r){let n=new J,r=new G,o=new Ot,c=new G(1,1,1),l=new Ti(t.geometry,t.material,i);for(let t=0;t<i;t++)s.TRANSLATION&&r.fromBufferAttribute(s.TRANSLATION,t),s.ROTATION&&o.fromBufferAttribute(s.ROTATION,t),s.SCALE&&c.fromBufferAttribute(s.SCALE,t),l.setMatrixAt(t,n.compose(r,o,c));let u=null;for(let t in s)if(t===`_COLOR_0`){let n=s[t];l.instanceColor=new _i(n.array,n.itemSize,n.normalized)}else if(t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`){if(u===null){let t=l.geometry;u=new Er,u.name=t.name;for(let n in t.attributes)u.setAttribute(n,t.attributes[n]);for(let n in t.morphAttributes)u.morphAttributes[n]=t.morphAttributes[n];t.index!==null&&u.setIndex(t.index),u.morphTargetsRelative=t.morphTargetsRelative;for(let n of t.groups)u.addGroup(n.start,n.count,n.materialIndex);t.boundingBox!==null&&(u.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(u.boundingSphere=t.boundingSphere.clone()),u.drawRange.start=t.drawRange.start,u.drawRange.count=t.drawRange.count,u.userData=Object.assign({},t.userData),l.geometry=u}let n=s[t];u.setAttribute(t,new _i(n.array,n.itemSize,n.normalized))}Cn.prototype.copy.call(l,t),this.parser.assignFinalMaterial(l),a.push(l)}return n.isGroup?(n.clear(),n.add(...a),n):a[0]}))}},ku=`glTF`,Au=12,ju={JSON:1313821514,BIN:5130562},Mu=class{constructor(t){this.name=Q.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(t,0,Au),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==ku)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let i=this.header.length-Au,a=new DataView(t,Au),o=0;for(;o<i;){let n=a.getUint32(o,!0);o+=4;let i=a.getUint32(o,!0);if(o+=4,i===ju.JSON){let i=new Uint8Array(t,Au+o,n);this.content=r.decode(i)}else if(i===ju.BIN){let r=Au+o;this.body=t.slice(r,r+n)}o+=n}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Nu=class{constructor(t,n){if(!n)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Q.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){let r=this.json,i=this.dracoLoader,a=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,s={},c={},l={};for(let t in o){let n=Wu[t]||t.toLowerCase();s[n]=o[t]}for(let n in t.attributes){let i=Wu[n]||n.toLowerCase();if(o[n]!==void 0){let a=r.accessors[t.attributes[n]];l[i]=Bu[a.componentType].name,c[i]=a.normalized===!0}}return n.getDependency(`bufferView`,a).then(function(t){return new Promise(function(n,r){i.decodeDracoFile(t,function(t){for(let n in t.attributes){let r=t.attributes[n],i=c[n];i!==void 0&&(r.normalized=i)}n(t)},s,l,Be,r)})})}},Pu=class{constructor(){this.name=Q.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){if((n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0)return t;if(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),n.rotation!==void 0){let n=Math.cos(t.rotation),r=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*r,t.offset.x,-t.repeat.x*r,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},Fu=class{constructor(){this.name=Q.KHR_MESH_QUANTIZATION}},Iu=class extends Sa{constructor(t,n,r,i){super(t,n,r,i)}copySampleValue_(t){let n=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=t*i*3+i;for(let t=0;t!==i;t++)n[t]=r[a+t];return n}interpolate_(t,n,r,i){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=s*2,l=s*3,u=i-n,d=(r-n)/u,f=d*d,p=f*d,m=t*l,h=m-l,g=-2*p+3*f,_=p-f,v=1-g,y=_-f+d;for(let t=0;t!==s;t++){let n=o[h+t+s],r=o[h+t+c]*u,i=o[m+t+s],l=o[m+t]*u;a[t]=v*n+y*r+g*i+_*l}return a}},Lu=new Ot,Ru=class extends Iu{interpolate_(t,n,r,i){let a=super.interpolate_(t,n,r,i);return Lu.fromArray(a).normalize().toArray(a),a}},zu={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bu={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:a,9729:c,9984:o,9985:l,9986:s,9987:u},Hu={33071:r,33648:i,10497:n},Uu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wu={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Gu={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Ku={CUBICSPLINE:void 0,LINEAR:Pe,STEP:I},qu={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Ju(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new pa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),t.DefaultMaterial}function Yu(t,n,r){for(let i in r.extensions)t[i]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[i]=r.extensions[i])}function Xu(t,n){n.extras!==void 0&&(typeof n.extras==`object`?Object.assign(t.userData,n.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+n.extras))}function Zu(t,n,r){let i=!1,a=!1,o=!1;for(let t=0,r=n.length;t<r;t++){let r=n[t];if(r.POSITION!==void 0&&(i=!0),r.NORMAL!==void 0&&(a=!0),r.COLOR_0!==void 0&&(o=!0),i&&a&&o)break}if(!i&&!a&&!o)return Promise.resolve(t);let s=[],c=[],l=[];for(let u=0,d=n.length;u<d;u++){let d=n[u];if(i){let n=d.POSITION===void 0?t.attributes.position:r.getDependency(`accessor`,d.POSITION);s.push(n)}if(a){let n=d.NORMAL===void 0?t.attributes.normal:r.getDependency(`accessor`,d.NORMAL);c.push(n)}if(o){let n=d.COLOR_0===void 0?t.attributes.color:r.getDependency(`accessor`,d.COLOR_0);l.push(n)}}return Promise.all([Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(n){let r=n[0],s=n[1],c=n[2];return i&&(t.morphAttributes.position=r),a&&(t.morphAttributes.normal=s),o&&(t.morphAttributes.color=c),t.morphTargetsRelative=!0,t})}function Qu(t,n){if(t.updateMorphTargets(),n.weights!==void 0)for(let r=0,i=n.weights.length;r<i;r++)t.morphTargetInfluences[r]=n.weights[r];if(n.extras&&Array.isArray(n.extras.targetNames)){let r=n.extras.targetNames;if(t.morphTargetInfluences.length===r.length){t.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++)t.morphTargetDictionary[r[n]]=n}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function $u(t){let n,r=t.extensions&&t.extensions[Q.KHR_DRACO_MESH_COMPRESSION];if(n=r?`draco:`+r.bufferView+`:`+r.indices+`:`+ed(r.attributes):t.indices+`:`+ed(t.attributes)+`:`+t.mode,t.targets!==void 0)for(let r=0,i=t.targets.length;r<i;r++)n+=`:`+ed(t.targets[r]);return n}function ed(t){let n=``,r=Object.keys(t).sort();for(let i=0,a=r.length;i<a;i++)n+=r[i]+`:`+t[r[i]]+`;`;return n}function td(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function nd(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?`image/jpeg`:t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?`image/webp`:t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var rd=new J,id=class{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new lu,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,i=-1,a=!1,o=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let t=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(t)===!0;let n=t.match(/Version\/(\d+)/);i=r&&n?parseInt(n[1],10):-1,a=t.indexOf(`Firefox`)>-1,o=a?t.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||r&&i<17||a&&o<98?new Za(this.options.manager):new So(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ja(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){let r=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(t){return t._markDefs&&t._markDefs()}),Promise.all(this._invokeAll(function(t){return t.beforeRoot&&t.beforeRoot()})).then(function(){return Promise.all([r.getDependencies(`scene`),r.getDependencies(`animation`),r.getDependencies(`camera`)])}).then(function(n){let o={scene:n[0][i.scene||0],scenes:n[0],animations:n[1],cameras:n[2],asset:i.asset,parser:r,userData:{}};return Yu(a,o,i),Xu(o,i),Promise.all(r._invokeAll(function(t){return t.afterRoot&&t.afterRoot(o)})).then(function(){for(let t of o.scenes)t.updateMatrixWorld();t(o)})}).catch(n)}_markDefs(){let t=this.json.nodes||[],n=this.json.skins||[],r=this.json.meshes||[];for(let r=0,i=n.length;r<i;r++){let i=n[r].joints;for(let n=0,r=i.length;n<r;n++)t[i[n]].isBone=!0}for(let n=0,i=t.length;n<i;n++){let i=t[n];i.mesh!==void 0&&(this._addNodeRef(this.meshCache,i.mesh),i.skin!==void 0&&(r[i.mesh].isSkinnedMesh=!0)),i.camera!==void 0&&this._addNodeRef(this.cameraCache,i.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,r){if(t.refs[n]<=1)return r;let i=r.clone(),a=(t,n)=>{let r=this.associations.get(t);r!=null&&this.associations.set(n,r);for(let[r,i]of t.children.entries())a(i,n.children[r])};return a(r,i),i.name+=`_instance_`+t.uses[n]++,i}_invokeOne(t){let n=Object.values(this.plugins);n.push(this);for(let r=0;r<n.length;r++){let i=t(n[r]);if(i)return i}return null}_invokeAll(t){let n=Object.values(this.plugins);n.unshift(this);let r=[];for(let i=0;i<n.length;i++){let a=t(n[i]);a&&r.push(a)}return r}getDependency(t,n){let r=t+`:`+n,i=this.cache.get(r);if(!i){switch(t){case`scene`:i=this.loadScene(n);break;case`node`:i=this._invokeOne(function(t){return t.loadNode&&t.loadNode(n)});break;case`mesh`:i=this._invokeOne(function(t){return t.loadMesh&&t.loadMesh(n)});break;case`accessor`:i=this.loadAccessor(n);break;case`bufferView`:i=this._invokeOne(function(t){return t.loadBufferView&&t.loadBufferView(n)});break;case`buffer`:i=this.loadBuffer(n);break;case`material`:i=this._invokeOne(function(t){return t.loadMaterial&&t.loadMaterial(n)});break;case`texture`:i=this._invokeOne(function(t){return t.loadTexture&&t.loadTexture(n)});break;case`skin`:i=this.loadSkin(n);break;case`animation`:i=this._invokeOne(function(t){return t.loadAnimation&&t.loadAnimation(n)});break;case`camera`:i=this.loadCamera(n);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,n)}),!i)throw Error(`Unknown type: `+t)}this.cache.add(r,i)}return i}getDependencies(t){let n=this.cache.get(t);if(!n){let r=this,i=this.json[t+(t===`mesh`?`es`:`s`)]||[];n=Promise.all(i.map(function(n,i){return r.getDependency(t,i)})),this.cache.add(t,n)}return n}loadBuffer(t){let n=this.json.buffers[t],r=this.fileLoader;if(n.type&&n.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+n.type+` buffer type is not supported.`);if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[Q.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(t,a){r.load(bo.resolveURL(n.uri,i.path),t,void 0,function(){a(Error(`THREE.GLTFLoader: Failed to load buffer "`+n.uri+`".`))})})}loadBufferView(t){let n=this.json.bufferViews[t];return this.getDependency(`buffer`,n.buffer).then(function(t){let r=n.byteLength||0,i=n.byteOffset||0;return t.slice(i,i+r)})}loadAccessor(t){let n=this,r=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let t=Uu[i.type],n=Bu[i.componentType],r=i.normalized===!0,a=new n(i.count*t);return Promise.resolve(new dr(a,t,r))}let a=[];return i.bufferView===void 0?a.push(null):a.push(this.getDependency(`bufferView`,i.bufferView)),i.sparse!==void 0&&(a.push(this.getDependency(`bufferView`,i.sparse.indices.bufferView)),a.push(this.getDependency(`bufferView`,i.sparse.values.bufferView))),Promise.all(a).then(function(t){let a=t[0],o=Uu[i.type],s=Bu[i.componentType],c=s.BYTES_PER_ELEMENT,l=c*o,u=i.byteOffset||0,d=i.bufferView===void 0?void 0:r.bufferViews[i.bufferView].byteStride,f=i.normalized===!0,p,m;if(d&&d!==l){let t=Math.floor(u/d),r=`InterleavedBuffer:`+i.bufferView+`:`+i.componentType+`:`+t+`:`+i.count,l=n.cache.get(r);l||(p=new s(a,t*d,i.count*d/c),l=new Dr(p,d/c),n.cache.add(r,l)),m=new kr(l,o,u%d/c,f)}else p=a===null?new s(i.count*o):new s(a,u,i.count*o),m=new dr(p,o,f);if(i.sparse!==void 0){let n=Uu.SCALAR,r=Bu[i.sparse.indices.componentType],c=i.sparse.indices.byteOffset||0,l=i.sparse.values.byteOffset||0,u=new r(t[1],c,i.sparse.count*n),d=new s(t[2],l,i.sparse.count*o);a!==null&&(m=new dr(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let t=0,n=u.length;t<n;t++){let n=u[t];if(m.setX(n,d[t*o]),o>=2&&m.setY(n,d[t*o+1]),o>=3&&m.setZ(n,d[t*o+2]),o>=4&&m.setW(n,d[t*o+3]),o>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=f}return m})}loadTexture(t){let n=this.json,r=this.options,i=n.textures[t].source,a=n.images[i],o=this.textureLoader;if(a.uri){let t=r.manager.getHandler(a.uri);t!==null&&(o=t)}return this.loadTextureImage(t,i,o)}loadTextureImage(t,n,r){let i=this,a=this.json,o=a.textures[t],s=a.images[n],c=(s.uri||s.bufferView)+`:`+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(n,r).then(function(n){n.flipY=!1,n.name=o.name||s.name||``,n.name===``&&typeof s.uri==`string`&&s.uri.startsWith(`data:image/`)===!1&&(n.name=s.uri);let r=(a.samplers||{})[o.sampler]||{};return n.magFilter=Vu[r.magFilter]||1006,n.minFilter=Vu[r.minFilter]||1008,n.wrapS=Hu[r.wrapS]||1e3,n.wrapT=Hu[r.wrapT]||1e3,n.generateMipmaps=!n.isCompressedTexture&&n.minFilter!==1003&&n.minFilter!==1006,i.associations.set(n,{textures:t}),n}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,n){let r=this,i=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(t=>t.clone());let o=i.images[t],s=self.URL||self.webkitURL,c=o.uri||``,l=!1;if(o.bufferView!==void 0)c=r.getDependency(`bufferView`,o.bufferView).then(function(t){l=!0;let n=new Blob([t],{type:o.mimeType});return c=s.createObjectURL(n),c});else if(o.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+t+` is missing URI and bufferView`);let u=Promise.resolve(c).then(function(t){return new Promise(function(r,i){let o=r;n.isImageBitmapLoader===!0&&(o=function(t){let n=new Wt(t);n.needsUpdate=!0,r(n)}),n.load(bo.resolveURL(t,a.path),o,void 0,i)})}).then(function(t){return l===!0&&s.revokeObjectURL(c),Xu(t,o),t.userData.mimeType=o.mimeType||nd(o.uri),t}).catch(function(t){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,c),t});return this.sourceCache[t]=u,u}assignTexture(t,n,r,i){let a=this;return this.getDependency(`texture`,r.index).then(function(o){if(!o)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(o=o.clone(),o.channel=r.texCoord),a.extensions[Q.KHR_TEXTURE_TRANSFORM]){let t=r.extensions===void 0?void 0:r.extensions[Q.KHR_TEXTURE_TRANSFORM];if(t){let n=a.associations.get(o);o=a.extensions[Q.KHR_TEXTURE_TRANSFORM].extendTexture(o,t),a.associations.set(o,n)}}return i!==void 0&&(o.colorSpace=i),t[n]=o,o})}assignFinalMaterial(t){let n=t.geometry,r=t.material,i=n.attributes.tangent===void 0,a=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(t.isPoints){let t=`PointsMaterial:`+r.uuid,n=this.cache.get(t);n||(n=new Wi,Fr.prototype.copy.call(n,r),n.color.copy(r.color),n.map=r.map,n.sizeAttenuation=!1,this.cache.add(t,n)),r=n}else if(t.isLine){let t=`LineBasicMaterial:`+r.uuid,n=this.cache.get(t);n||(n=new Ai,Fr.prototype.copy.call(n,r),n.color.copy(r.color),n.map=r.map,this.cache.add(t,n)),r=n}if(i||a||o){let t=`ClonedMaterial:`+r.uuid+`:`;i&&(t+=`derivative-tangents:`),a&&(t+=`vertex-colors:`),o&&(t+=`flat-shading:`);let n=this.cache.get(t);n||(n=r.clone(),a&&(n.vertexColors=!0),o&&(n.flatShading=!0),i&&(n.normalScale&&(n.normalScale.y*=-1),n.clearcoatNormalScale&&(n.clearcoatNormalScale.y*=-1)),this.cache.add(t,n),this.associations.set(n,this.associations.get(r))),r=n}t.material=r}getMaterialType(){return pa}loadMaterial(t){let n=this,r=this.json,i=this.extensions,a=r.materials[t],o,s={},c=a.extensions||{},l=[];if(c[Q.KHR_MATERIALS_UNLIT]){let t=i[Q.KHR_MATERIALS_UNLIT];o=t.getMaterialType(),l.push(t.extendParams(s,a,n))}else{let r=a.pbrMetallicRoughness||{};if(s.color=new Y(1,1,1),s.opacity=1,Array.isArray(r.baseColorFactor)){let t=r.baseColorFactor;s.color.setRGB(t[0],t[1],t[2],Be),s.opacity=t[3]}r.baseColorTexture!==void 0&&l.push(n.assignTexture(s,`map`,r.baseColorTexture,ze)),s.metalness=r.metallicFactor===void 0?1:r.metallicFactor,s.roughness=r.roughnessFactor===void 0?1:r.roughnessFactor,r.metallicRoughnessTexture!==void 0&&(l.push(n.assignTexture(s,`metalnessMap`,r.metallicRoughnessTexture)),l.push(n.assignTexture(s,`roughnessMap`,r.metallicRoughnessTexture))),o=this._invokeOne(function(n){return n.getMaterialType&&n.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(n){return n.extendMaterialParams&&n.extendMaterialParams(t,s)})))}a.doubleSided===!0&&(s.side=2);let u=a.alphaMode||qu.OPAQUE;if(u===qu.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===qu.MASK&&(s.alphaTest=a.alphaCutoff===void 0?.5:a.alphaCutoff)),a.normalTexture!==void 0&&o!==Vr&&(l.push(n.assignTexture(s,`normalMap`,a.normalTexture)),s.normalScale=new W(1,1),a.normalTexture.scale!==void 0)){let t=a.normalTexture.scale;s.normalScale.set(t,t)}if(a.occlusionTexture!==void 0&&o!==Vr&&(l.push(n.assignTexture(s,`aoMap`,a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==Vr){let t=a.emissiveFactor;s.emissive=new Y().setRGB(t[0],t[1],t[2],Be)}return a.emissiveTexture!==void 0&&o!==Vr&&l.push(n.assignTexture(s,`emissiveMap`,a.emissiveTexture,ze)),Promise.all(l).then(function(){let r=new o(s);return a.name&&(r.name=a.name),Xu(r,a),n.associations.set(r,{materials:t}),a.extensions&&Yu(i,r,a),r})}createUniqueName(t){let n=Ro.sanitizeNodeName(t||``);return n in this.nodeNamesUsed?n+`_`+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){let n=this,r=this.extensions,i=this.primitiveCache;function a(t){return r[Q.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t,n).then(function(r){return od(r,t,n)})}let o=[];for(let r=0,s=t.length;r<s;r++){let s=t[r],c=$u(s),l=i[c];if(l)o.push(l.promise);else{let t;t=s.extensions&&s.extensions[Q.KHR_DRACO_MESH_COMPRESSION]?a(s):od(new Er,s,n),s.mode===zu.TRIANGLE_STRIP?t=t.then(t=>au(t,1)):s.mode===zu.TRIANGLE_FAN&&(t=t.then(t=>au(t,2))),i[c]={primitive:s,promise:t},o.push(t)}}return Promise.all(o)}loadMesh(t){let n=this,r=this.json,i=this.extensions,a=r.meshes[t],o=a.primitives,s=[];for(let t=0,n=o.length;t<n;t++){let n=o[t].material===void 0?Ju(this.cache):this.getDependency(`material`,o[t].material);s.push(n)}return s.push(n.loadGeometries(o)),Promise.all(s).then(async function(r){let s=r.slice(0,r.length-1),c=r[r.length-1],l=[];for(let r=0,u=c.length;r<u;r++){let u=c[r],d=o[r],f,p=s[r];if(d.mode===zu.TRIANGLES||d.mode===zu.TRIANGLE_STRIP||d.mode===zu.TRIANGLE_FAN||d.mode===void 0){let t=a.isSkinnedMesh===!0,n=u.hasAttribute(`skinIndex`)&&u.hasAttribute(`skinWeight`);t&&n===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),f=t&&n?new di(u,p):new $r(u,p),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(d.mode===zu.LINES)f=new Hi(u,p);else if(d.mode===zu.LINE_STRIP)f=new Ri(u,p);else if(d.mode===zu.LINE_LOOP)f=new Ui(u,p);else if(d.mode===zu.POINTS)f=new Yi(u,p);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+d.mode);Object.keys(f.geometry.morphAttributes).length>0&&Qu(f,a),f.name=n.createUniqueName(a.name||`mesh_`+t),Xu(f,a),d.extensions&&Yu(i,f,d),n.assignFinalMaterial(f),l.push(f)}for(let r=0,i=l.length;r<i;r++)n.associations.set(l[r],{meshes:t,primitives:r});if(l.length===1)return a.extensions&&Yu(i,l[0],a),l[0];let u=new wn;a.extensions&&Yu(i,u,a),n.associations.set(u,{meshes:t});for(let t=0,n=l.length;t<n;t++)u.add(l[t]);return u})}loadCamera(t){let n,r=this.json.cameras[t],i=r[r.type];if(!i)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return r.type===`perspective`?n=new uo(Dt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):r.type===`orthographic`&&(n=new go(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),r.name&&(n.name=this.createUniqueName(r.name)),Xu(n,r),Promise.resolve(n)}loadSkin(t){let n=this.json.skins[t],r=[];for(let t=0,i=n.joints.length;t<i;t++)r.push(this._loadNodeShallow(n.joints[t]));return n.inverseBindMatrices===void 0?r.push(null):r.push(this.getDependency(`accessor`,n.inverseBindMatrices)),Promise.all(r).then(function(t){let r=t.pop(),i=t,a=[],o=[];for(let t=0,s=i.length;t<s;t++){let s=i[t];if(s){a.push(s);let n=new J;r!==null&&n.fromArray(r.array,t*16),o.push(n)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,n.joints[t])}return new gi(a,o)})}loadAnimation(t){let n=this.json,r=this,i=n.animations[t],a=i.name?i.name:`animation_`+t,o=[],s=[],c=[],l=[],u=[];for(let t=0,n=i.channels.length;t<n;t++){let n=i.channels[t],r=i.samplers[n.sampler],a=n.target,d=a.node,f=i.parameters===void 0?r.input:i.parameters[r.input],p=i.parameters===void 0?r.output:i.parameters[r.output];a.node!==void 0&&(o.push(this.getDependency(`node`,d)),s.push(this.getDependency(`accessor`,f)),c.push(this.getDependency(`accessor`,p)),l.push(r),u.push(a))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(t){let n=t[0],o=t[1],s=t[2],c=t[3],l=t[4],u=[];for(let t=0,i=n.length;t<i;t++){let i=n[t],a=o[t],d=s[t],f=c[t],p=l[t];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let m=r._createAnimationTracks(i,a,d,f,p);if(m)for(let t=0;t<m.length;t++)u.push(m[t])}let d=new za(a,void 0,u);return Xu(d,i),d})}createNodeMesh(t){let n=this.json,r=this,i=n.nodes[t];return i.mesh===void 0?null:r.getDependency(`mesh`,i.mesh).then(function(t){let n=r._getNodeRef(r.meshCache,i.mesh,t);return i.weights!==void 0&&n.traverse(function(t){if(t.isMesh)for(let n=0,r=i.weights.length;n<r;n++)t.morphTargetInfluences[n]=i.weights[n]}),n})}loadNode(t){let n=this.json,r=this,i=n.nodes[t],a=r._loadNodeShallow(t),o=[],s=i.children||[];for(let t=0,n=s.length;t<n;t++)o.push(r.getDependency(`node`,s[t]));let c=i.skin===void 0?Promise.resolve(null):r.getDependency(`skin`,i.skin);return Promise.all([a,Promise.all(o),c]).then(function(t){let n=t[0],r=t[1],i=t[2];i!==null&&n.traverse(function(t){t.isSkinnedMesh&&t.bind(i,rd)});for(let t=0,i=r.length;t<i;t++)n.add(r[t]);if(n.userData.pivot!==void 0&&r.length>0){let t=n.userData.pivot,i=r[0];n.pivot=new G().fromArray(t),n.position.x-=t[0],n.position.y-=t[1],n.position.z-=t[2],i.position.set(0,0,0),delete n.userData.pivot}return n})}_loadNodeShallow(t){let n=this.json,r=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let a=n.nodes[t],o=a.name?i.createUniqueName(a.name):``,s=[],c=i._invokeOne(function(n){return n.createNodeMesh&&n.createNodeMesh(t)});return c&&s.push(c),a.camera!==void 0&&s.push(i.getDependency(`camera`,a.camera).then(function(t){return i._getNodeRef(i.cameraCache,a.camera,t)})),i._invokeAll(function(n){return n.createNodeAttachment&&n.createNodeAttachment(t)}).forEach(function(t){s.push(t)}),this.nodeCache[t]=Promise.all(s).then(function(n){let s;if(s=a.isBone===!0?new fi:n.length>1?new wn:n.length===1?n[0]:new Cn,s!==n[0])for(let t=0,r=n.length;t<r;t++)s.add(n[t]);if(a.name&&(s.userData.name=a.name,s.name=o),Xu(s,a),a.extensions&&Yu(r,s,a),a.matrix!==void 0){let t=new J;t.fromArray(a.matrix),s.applyMatrix4(t)}else a.translation!==void 0&&s.position.fromArray(a.translation),a.rotation!==void 0&&s.quaternion.fromArray(a.rotation),a.scale!==void 0&&s.scale.fromArray(a.scale);if(!i.associations.has(s))i.associations.set(s,{});else if(a.mesh!==void 0&&i.meshCache.refs[a.mesh]>1){let t=i.associations.get(s);i.associations.set(s,{...t})}return i.associations.get(s).nodes=t,s}),this.nodeCache[t]}loadScene(t){let n=this.extensions,r=this.json.scenes[t],i=this,a=new wn;r.name&&(a.name=i.createUniqueName(r.name)),Xu(a,r),r.extensions&&Yu(n,a,r);let o=r.nodes||[],s=[];for(let t=0,n=o.length;t<n;t++)s.push(i.getDependency(`node`,o[t]));return Promise.all(s).then(function(t){for(let n=0,r=t.length;n<r;n++){let r=t[n];r.parent===null?a.add(r):a.add(ou(r))}return i.associations=(t=>{let n=new Map;for(let[t,r]of i.associations)(t instanceof Fr||t instanceof Wt)&&n.set(t,r);return t.traverse(t=>{let r=i.associations.get(t);r!=null&&n.set(t,r)}),n})(a),a})}_createAnimationTracks(t,n,r,i,a){let o=[],s=t.name?t.name:t.uuid,c=[];function l(t){t.morphTargetInfluences&&c.push(t.name?t.name:t.uuid)}Gu[a.path]===Gu.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(s);let u;switch(Gu[a.path]){case Gu.weights:u=Pa;break;case Gu.rotation:u=Ia;break;case Gu.translation:case Gu.scale:u=Ra;break;default:switch(r.itemSize){case 1:u=Pa;break;default:u=Ra}}let d=i.interpolation===void 0?Pe:Ku[i.interpolation],f=this._getArrayFromAccessor(r);for(let t=0,r=c.length;t<r;t++){let r=new u(c[t]+`.`+Gu[a.path],n.array,f,d);i.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(r),o.push(r)}return o}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){let t=td(n.constructor),r=new Float32Array(n.length);for(let i=0,a=n.length;i<a;i++)r[i]=n[i]*t;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(t){return new(this instanceof Ia?Ru:Iu)(this.times,this.values,this.getValueSize()/3,t)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ad(t,n,r){let i=n.attributes,a=new qn;if(i.POSITION!==void 0){let t=r.json.accessors[i.POSITION],n=t.min,o=t.max;if(n!==void 0&&o!==void 0){if(a.set(new G(n[0],n[1],n[2]),new G(o[0],o[1],o[2])),t.normalized){let n=td(Bu[t.componentType]);a.min.multiplyScalar(n),a.max.multiplyScalar(n)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let o=n.targets;if(o!==void 0){let t=new G,n=new G;for(let i=0,a=o.length;i<a;i++){let a=o[i];if(a.POSITION!==void 0){let i=r.json.accessors[a.POSITION],o=i.min,s=i.max;if(o!==void 0&&s!==void 0){if(n.setX(Math.max(Math.abs(o[0]),Math.abs(s[0]))),n.setY(Math.max(Math.abs(o[1]),Math.abs(s[1]))),n.setZ(Math.max(Math.abs(o[2]),Math.abs(s[2]))),i.normalized){let t=td(Bu[i.componentType]);n.multiplyScalar(t)}t.max(n)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}a.expandByVector(t)}t.boundingBox=a;let s=new vr;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,t.boundingSphere=s}function od(t,n,r){let i=n.attributes,a=[];function o(n,i){return r.getDependency(`accessor`,n).then(function(n){t.setAttribute(i,n)})}for(let n in i){let r=Wu[n]||n.toLowerCase();r in t.attributes||a.push(o(i[n],r))}if(n.indices!==void 0&&!t.index){let i=r.getDependency(`accessor`,n.indices).then(function(n){t.setIndex(n)});a.push(i)}return q.workingColorSpace!==`srgb-linear`&&`COLOR_0`in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${q.workingColorSpace}" not supported.`),Xu(t,n),ad(t,n,r),Promise.all(a).then(function(){return n.targets===void 0?t:Zu(t,n.targets,r)})}var sd=`/assets/parking-texture-By6wYY-v.png`,cd=`data:image/png;base64,UklGRiwGAABXRUJQVlA4ICAGAADQOQCdASrgAQ4BPlEokkcjoqGhICgAcAoJaW7hIfezxXjbS1f9dmjff/x4/8bvq/7nvcfebHX/kirFWAfFFsPj/62n/74DQ/uLwAKaU/eeoqZ2Z5RFBFv46CLgBj9qbkji6cK1fDyW93QnIxh0+cvcgDPuYAjrLOb/xzGBC+cQ9giBMFIx8eXZb+c7DdxU8OeoqTMMmilNd+XD6WWq71kMMI4CuO852G5v5Pbi8kcH73EpFxkt0QSIwn786dXxHLox6XFT9Taip+40iPKfLz1FT958nnDcVP3qe9d2cj6Auv8GhUuFM/jH6y6LOjkDtaCDkxF1AVg1QQcAP9muHnJiHa61jS0y9CFJLOL2byMPhAK+IUkcQF4UpAg0zukxgZbdbOJCytERcrJQnr8McXKwD3npJ2jT0i1k+0Yg5QV5GiyDFDTyNFmG3WEQnuYfgLHZCaQPtoK8634Y34p6RazDbr4HkD9DFl2GqIIFdYg3XMtrLghPaFCSjjyW934XbRp1mY5jlG/23XwQnMIN/5Y8CopGZP9Rfyo9c7kjlEo38/DFpAb2R+5Q7t7/6UKsV/7PiWmnCf7OvS8dRRHELSSZx9vJbnF+Lgf5Xt6qHojbHSW3Sq+QKQAA/ua5v//ewX/uM//uwX/tM//zsH8a/zB+kW3st56hhoZH4Vhg15d8KG1YiDaqKSJ1i9yEnXs/dDlabzvbOXXfjhQLaqQrsgcONBMbn1NCRvewkL1WOIku2UU92NdMAbO61ovTLXDjS9mCgLqohaTqrl8OZXoQIriRh1SJryuGwn1lgH3CJRdyc/IO9encA+rLHb1yUagSQcxAkRtHUzRF8YMJm9ftMtALgVpCZxY9WFBx1M0wCqmcY7tZtQQCvogPqL0hJTH7IFRfXwwY6kd7hSDIVABBfkczAu+dJZqpkisydhpBgtOYeGz3ygJCVhKKfPLQ/POzgWBBMK6YNIv0l9e1UHxrwlLpVXGozNkKumyTUzHICuK9IZHkCdAAAAHziXuC0BYGPz2TSf5sRDGfcUU5iOaQX3jcBrmOf/4zboWk75CcF8tOCdYGUoy4W9/rdEKy95/uJ3DG1DZ3dq1yp/np+V5RLw7njguLgdSRhnG90HRN5LZVV3RrCeF+027a9gDOD/ULUsfMiAcXp2Mu5HeSfRwR/MSf0Y32SpFL44fl+WRKcNY7py0CNxH+YQOMJ5XdIDlakeFMyogkZpoy+lfovOGE4/3gp/G0gUXS/umWpm1qyJe+xRlZt0Jmam1S5SQJ3rizjvPKFB54kkqw3omnASQInZpzj7sbYDW7ceq8XmNOGHi4laaq7KFQWLQnWGey11V667KdjnTjVDV/Y30x2kjHSU/y2xtzWrDwUtk9LKg1W/eYjkkuigKQDR10o8eczNZxUSPhB9NIBTuDLtmTTZrQi+GIoM7qk0mxr5un9rVh5fMCCwwwFUUTI5zU4QSTxiXieivsd8UjTeUjWVsNfcaJv70Oym7Kz0XYXe+6WQfCzg+MugtCwkeWNPHLbOz6OUJHug3gGPxxFy49vM/Nti+5jWRJHjYTel2BnL0hGPprafLYXC5Suj7xYdlHKwfs7U8pq9Lmxq1WB6TQwNBfCAKByIj6WkNzAGKkCsxt20SHSvHCXA9qZqaB8RUVLkKIX4bGgtKOxHRUYYS42AWHZZjFdYIXrTT1X7/I7NwP4Ntukjbc4yCW6mhs1sjoIs0cJSki3kZMhp3rB3YmdyM4vTM3cmtWGR8Yu728B4DnOBz8wH5Ov/HVLGsN5C1nUV/yMK58/30FXZhxlrkQ4cjAkunKiZmTm1nAEUYmLDwSwneIdbHga3bHsuPYUw+xzW1BjbF37DS/0gt1OCojwh93q2xNDT8lCHHNOZQj5ZyyKyNi4klGUAZWvFoMgULVVqLnJNXx0vc5dQvZrcCh1Gs6W2ii3UyAxNsF1Xg94gdTqmLVVVrRhyaKk+4lgyZVQUwnDiS+QhqBQM72mXadIj9mXm3FELPutlqLFhBWiewZQdFB8ZLf3ywkrzkd3o3cDDkLp6IXcJXIkkbuvaRZxv1Pf3KhAZG2Pfd+jFDxYveyGcBka09AAA==`,ld=`/assets/brick-0k6kz7V2.png`,ud=`/assets/light-brick-CqZNI9mz.png`,dd=`/assets/grass-ekE2yoVB.png`,fd=document.getElementById(`file-progress`),pd=new zo,md=new Mn,hd=document.getElementById(`timeDisp`),gd=document.getElementById(`daysDisp`),_d=new uo(75,window.innerWidth/window.innerHeight,.1,1e3),vd=new iu({antialias:!0});vd.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(vd.domElement);var yd=new Za,bd=yd.load(sd);bd.wrapS=n,bd.wrapT=n,bd.repeat.set(40,40);var xd=new pa({map:bd,roughness:.5}),Sd=yd.load(cd),Cd=yd.load(ld);Cd.wrapS=n,Cd.wrapT=n,Cd.repeat.set(4,4);var wd=new pa({map:Cd,roughness:1}),Td=yd.load(ud);Td.wrapS=n,Td.wrapT=n,Td.repeat.set(4,4);var Ed=new pa({map:Td,roughness:1}),Dd=yd.load(dd);Dd.wrapT=n,Dd.wrapS=n,Dd.repeat.set(30,30);var Od=new pa({map:Dd,roughness:100});md.background=Sd;var kd=new ta(400,400,.05);new pa({color:65280});var Ad=new $r(kd,xd);md.add(Ad);var jd=new $r(new ta(1e3,1e3,.05),Od);jd.position.set(0,0,-.05),md.add(jd);var Md=new cu,Nd=!1;Md.load(`/models/dumpster_low_poly.glb`,function(t){let n=t.scene;md.add(n),n.position.set(-20,40,0),n.rotation.set(Math.PI/2,0,0),n.scale.set(5,5,5)});var Pd,Fd;Md.load(`/models/smily_horror_monster.glb`,function(t){Pd=t.scene,md.add(Pd),Pd.position.set(-20,40,0),Pd.rotation.set(Math.PI/2,0,0),Pd.scale.set(.2,.2,.2),Fd=new Hd(0,-50,10,Pd),Nd=!0});var Id=new pa({color:0}),Ld=new ho(16777215,110,1e3,2);Ld.position.set(10,150,40),md.add(Ld);var Rd=new ho(16777215,110,1e3,2);Rd.position.set(10,80,40),md.add(Rd),new yo(16777215);var zd=new vo(16777215,1);zd.position.set(0,-7,10),md.add(zd);var Bd=-.1,Vd={daytime:!0,nighttime:!1},$=new class{constructor(t,n,r,i){this.movement={forward:!1,backward:!1,left:!1,right:!1,rotateL:!1,rotateR:!1,shiftPressed:!1},this.tiltingLeft=!1,this.dx=0,this.dy=0,this.dz=0,this.walkingSpeed=.2,this.runningSpeed=.5,this.speed=this.walkingSpeed,this.rotationSpeed=.1,this.geo=new ta(1,1,5),this.mesh=new $r(this.geo,i),this.mesh.position.set(t,n,r),md.add(this.mesh),this.prevMeshPos=this.mesh.position,this.mesh.add(_d),this.mesh.position.z=1,_d.position.set(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z+.01),_d.rotation.x=Math.PI/2}update(){this.prevMeshPos=this.mesh.position.clone(),this.dz+=Bd,this.mesh.position.z+=this.dz,this.mesh.translateX(this.dx),this.mesh.translateY(this.dy),this.movement.forward&&(this.dy=this.speed,fd.value=`60`,this.movement.shiftPressed&&(fd.value=`90`),this.mesh.rotation.y>-.05&&this.tiltingLeft==1?(this.mesh.rotation.y-=.005,this.mesh.rotation.y<=-.04&&(this.tiltingLeft=!1)):this.mesh.rotation.y<.05&&!this.tiltingLeft&&(this.mesh.rotation.y+=.005,this.mesh.rotation.y>=.04&&(this.tiltingLeft=!0))),this.movement.backward&&(this.dy=-this.speed,fd.value=`60`,this.movement.shiftPressed&&(fd.value=`90`),this.mesh.rotation.y>-.05&&this.tiltingLeft==1?(this.mesh.rotation.y-=.005,this.mesh.rotation.y<=-.04&&(this.tiltingLeft=!1)):this.mesh.rotation.y<.05&&!this.tiltingLeft&&(this.mesh.rotation.y+=.005,this.mesh.rotation.y>=.04&&(this.tiltingLeft=!0))),this.movement.left&&(this.dx=-this.speed,fd.value=`55`,this.movement.shiftPressed&&(fd.value=`90`),fd.value+=Math.random()*10),this.movement.right&&(this.dx=this.speed,fd.value=`55`,this.movement.shiftPressed&&(fd.value=`90`),fd.value+=Math.random()*10),!this.movement.right&&!this.movement.left&&(this.dx=0),!this.movement.forward&&!this.movement.backward&&(this.dy=0),!this.movement.right&&!this.movement.left&&!this.movement.forward&&!this.movement.backward&&(fd.value=Math.random()*10),this.movement.rotateL&&(this.mesh.rotation.z+=this.rotationSpeed),this.movement.rotateR&&(this.mesh.rotation.z-=this.rotationSpeed),this.mesh.position.z<=10&&(this.mesh.position.z=10,this.dz=0)}}(5,0,10,Id),Hd=class{constructor(t,n,r,i){this.mesh=i,this.mesh.position.set(t,n,r),this.mesh.rotation.set(-Math.PI/2,0,Math.PI),this.speed=.1,this.dy=0,this.dx=0,this.dz=0,this.isClose=!1,this.playerWasHeard=!1}update(){this.dz+=Bd,this.mesh.position.z+=this.dz,this.mesh.position.x+=this.dx,this.mesh.position.y+=this.dy,this.mesh.position.z<=0&&(this.mesh.position.z=0,this.dz=0),fd.value>85&&(this.playerWasHeard=!0),this.playerWasHeard&&(this.speed=fd.value>85?1:fd.value>45?.4:fd.value>10?.2:.1),Vd.nighttime&&(this.isClose=Math.abs($.mesh.position.y-this.mesh.position.y)<90&&Math.abs($.mesh.position.x-this.mesh.position.x)<90,this.mesh.position.y<54?this.mesh.position.x<-5?this.mesh.position.x+=this.speed:this.mesh.position.x>-5?this.mesh.position.x-=this.speed:this.mesh.position.y<60&&(this.mesh.position.y+=this.speed):this.mesh.position.x<$.mesh.position.x&&this.playerWasHeard?this.mesh.position.x+=this.speed:this.mesh.position.x>$.mesh.position.x&&this.playerWasHeard&&(this.mesh.position.x-=this.speed),this.mesh.position.y<$.mesh.position.y&&this.playerWasHeard?this.mesh.position.y+=this.speed:this.playerWasHeard&&(this.mesh.position.y-=this.speed))}},Ud=new class{constructor(t,n,r){this.name=t,this.elements=[],this.x=n,this.y=r}addElement(t,n,r,i,a,o,s,c){let l=new $r(new ta(a,o,s),c);l.position.set(n,r,i),md.add(l),this.elements.push({name:t,mesh:l})}activateCollisions(){for(let t of this.elements){let n=new qn().setFromObject(t.mesh),r=new qn().setFromObject($.mesh);n.intersectsBox(r)&&$.mesh.position.copy($.prevMeshPos)}}getElementByName(t){for(e of this.elements)if(e.name===t)return e}}(`building`,100,100);Ud.addElement(`wall1`,-10,50,0,25,5,50,wd),Ud.addElement(`wall1`,30,50,0,25,5,50,wd),Ud.addElement(`wall1`,10,50,35,65,5,20,wd);var Wd=new $r(new ta(20,.5,50),new pa({color:0}));md.add(Wd),Wd.position.set(10,50,0);var Gd=new pa({color:0});Ud.addElement(`wall2`,-40,52,0,50,2,95,Ed),Ud.addElement(`wall2`,50,52,0,50,2,95,Ed),Ud.addElement(`wall3`,-60,127,0,2,150,95,Ed),Ud.addElement(`wall4`,75,127,0,2,150,95,Ed),Ud.addElement(`wall5`,5,200,0,140,2,95,new pa({color:0})),Ud.addElement(`ceiling1`,10,125,45,150,150,2,wd),Ud.addElement(`floor1`,10,125,.02,150,150,2,new pa({color:0})),Ud.addElement(`counter`,10,150,8,30,8,8,Gd),Ud.addElement(`wall6`,5,-10,0,30,.5,100,wd),Ud.addElement(`wall7`,20,20,0,.5,60,80,wd),Ud.addElement(`wall7`,0,20,0,.5,60,80,wd),document.addEventListener(`keydown`,t=>{switch(t.key){case`w`:$.movement.forward=!0;break;case`s`:$.movement.backward=!0;break;case`a`:$.movement.left=!0;break;case`d`:$.movement.right=!0;break;case`ArrowLeft`:$.movement.rotateL=!0;break;case`ArrowRight`:$.movement.rotateR=!0;break;case`e`:break;case`Shift`:$.speed=$.runningSpeed,$.movement.shiftPressed=!0}}),document.addEventListener(`keyup`,t=>{switch(t.key){case`w`:$.movement.forward=!1;break;case`s`:$.movement.backward=!1;break;case`a`:$.movement.left=!1;break;case`d`:$.movement.right=!1;break;case`ArrowLeft`:$.movement.rotateL=!1;break;case`ArrowRight`:$.movement.rotateR=!1;break;case`e`:break;case`Shift`:$.speed=$.walkingSpeed,$.movement.shiftPressed=!1}});var Kd=(t,n,r)=>{let i=document.getElementById(t);i&&(i.addEventListener(`touchstart`,t=>{t.preventDefault(),n()}),i.addEventListener(`touchend`,t=>{t.preventDefault(),r()}),i.addEventListener(`mousedown`,t=>{t.preventDefault(),n()}),i.addEventListener(`mouseup`,t=>{t.preventDefault(),r()}))};Kd(`btn-forward`,()=>{$.movement.forward=!0},()=>{$.movement.forward=!1}),Kd(`btn-backward`,()=>{$.movement.backward=!0},()=>{$.movement.backward=!1}),Kd(`btn-left`,()=>{$.movement.left=!0},()=>{$.movement.left=!1}),Kd(`btn-right`,()=>{$.movement.right=!0},()=>{$.movement.right=!1}),Kd(`btn-rotL`,()=>{$.movement.rotateL=!0},()=>{$.movement.rotateL=!1}),Kd(`btn-rotR`,()=>{$.movement.rotateR=!0},()=>{$.movement.rotateR=!1}),Kd(`btn-run`,()=>{$.speed=$.runningSpeed,$.movement.shiftPressed=!0},()=>{$.speed=$.walkingSpeed,$.movement.shiftPressed=!1});function qd(t){Math.trunc(t)%2==1?md.backgroundIntensity>0?(md.backgroundIntensity-=.01,Vd.nighttime=!0,Vd.daytime=!1):md.backgroundIntensity=0:Math.trunc(t)%2==0&&(md.backgroundIntensity<1?(md.backgroundIntensity+=.01,Vd.nighttime=!1,Vd.daytime=!0):md.backgroundIntensity=1)}function Jd(){pd.getDelta();let t=pd.getElapsedTime();hd.textContent=`Minutes Passed: `+Math.trunc(t);let n=t/10;if(gd.textContent=`Hours Passed: `+Math.trunc(n),$.update(),Nd&&Fd.update(),Ud.activateCollisions(),Nd&&Fd.isClose){let t=Math.random();t>.7?Ld.visible=!1:t>.3?Ld.visible=!0:t>.1&&(Ld.visible=!1);let n=Math.random();n>.7?Rd.visible=!1:n>.3?Rd.visible=!0:n>.1&&(Rd.visible=!1)}Vd.nighttime&&Nd&&(Fd.mesh.visible=!0),Vd.daytime&&Nd&&(Fd.mesh.visible=!1,Fd.mesh.position.y>0&&(Fd.mesh.position.y-=Fd.speed*5,Ld.visible=!1,Rd.visible=!1),Fd.playerWasHeard=!1),qd(n),requestAnimationFrame(Jd),vd.render(md,_d)}Jd();