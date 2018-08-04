webpackJsonp([3],{232:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(320),o=e(261);for(var i in o)"default"!==i&&function(t){e.d(r,t,function(){return o[t]})}(i);var a=e(80),u=Object(a.a)(o.default,n.a,n.b,!1,null,null,null);u.options.__file="src\\components\\pay\\payOrder.vue",r.default=u.exports},261:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(262),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(r,t,function(){return n[t]})}(i);r.default=o.a},262:function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),e(323),r.default={data:function(){return{orderInfo:{},interval:0}},created:function(){this.getOrderInfoData(),this.cycleGetPayStatus()},methods:{getOrderInfoData:function(){var t=this,r="site/validate/order/getorder/"+this.$route.query.orderId;this.$axios.get(r).then(function(r){var e=r.data.message[0];2===e.status?t.$router.push("paySuccess"):t.orderInfo=e})},cycleGetPayStatus:function(){var t=this;this.interval=setInterval(function(){var r="site/validate/order/getorder/"+t.$route.query.orderId;t.$axios.get(r).then(function(r){2===r.data.message[0].status&&t.$router.push("paySuccess")})},3e3)}},mounted:function(){var r=this;setTimeout(function(){t("#container2").erweima({text:"http://47.106.148.205:8899/site/validate/pay/alipay/"+r.$route.query.orderId,mode:4,mSize:30,image:t("#imgLogo")[0]})},20)},beforeDestroy:function(){clearInterval(this.interval)}}}).call(r,e(47))},320:function(t,r,e){"use strict";var n=e(321);e.d(r,"a",function(){return n.a}),e.d(r,"b",function(){return n.b})},321:function(t,r,e){"use strict";e.d(r,"a",function(){return n}),e.d(r,"b",function(){return o});var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"section"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"bg-wrap"},[t._m(1),t._v(" "),e("div",{staticClass:"form-box payment"},[e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-18"},[e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("订 单 号：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.order_no))])])]),t._v(" "),e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("收货人姓名：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.accept_name))])])])]),t._v(" "),e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("送货地址：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.area)+t._s(t.orderInfo.address)+"\n                                        ")])])]),t._v(" "),e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("手机号码：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.mobile))])])])]),t._v(" "),e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("支付金额：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.order_amount)+" 元")])])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"el-row"},[e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("备        注：")]),t._v(" "),e("dd",[t._v(t._s(t.orderInfo.message))])])])])]),t._v(" "),t._m(3)])])])])])])},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"section"},[e("div",{staticClass:"location"},[e("span",[t._v("当前位置：")]),t._v(" "),e("a",{attrs:{href:"/index.html"}},[t._v("首页")]),t._v(" >\n            "),e("a",{attrs:{href:"javascript:;"}},[t._v("支付中心")])])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"nav-tit pay"},[e("a",{staticClass:"selected",attrs:{href:"javascript:;"}},[t._v("支付中心")])])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"el-col el-col-12"},[e("dl",{staticClass:"form-group"},[e("dt",[t._v("支付方式：")]),t._v(" "),e("dd",[t._v("在线支付")])])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"el-col el-col-6"},[n("img",{attrs:{id:"imgLogo",src:e(322),hidden:""}}),t._v(" "),n("div",{attrs:{id:"container2"}},[n("canvas",{attrs:{width:"300",height:"300"}})])])}];n._withStripped=!0},322:function(t,r,e){t.exports=e.p+"statics/alipay-16d43cd3.png"},323:function(t,r,e){"use strict";(function(t){!function(t){var r=function(t,r,e,n){var o=c(e,r);o.addData(t),o.make(),n=n||0;var i=o.getModuleCount(),a=o.getModuleCount()+2*n;this.text=t,this.level=r,this.version=e,this.moduleCount=a,this.isDark=function(t,r){return t-=n,r-=n,!(0>t||t>=i||0>r||r>=i)&&o.isDark(t,r)},this.addBlank=function(t,r,e,n){var o=this.isDark,i=1/a;this.isDark=function(a,u){var s=u*i,f=a*i,l=s+i,c=f+i;return o(a,u)&&(t>l||s>e||r>c||f>n)}}},e=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))}(),n="[object Opera]"!==Object.prototype.toString.call(window.opera),o=function(t,e,n,o,i){for(n=Math.max(1,n||1),o=Math.min(40,o||40);n<=o;n+=1)try{return new r(t,e,n,i)}catch(t){}},i=function(t,r,e,n,o,i,a,u){t.isDark(a,u)&&r.rect(n,o,i,i)},a=function(t,r,e,n,o,i,a,u){var s=t.isDark;t=n+i;var f=o+i;e=e.radius*i;var l=a-1,c=a+1,d=u-1,g=u+1,v=s(a,u),h=s(l,d);i=s(l,u);var m=s(l,g),l=s(a,g),g=s(c,g);u=s(c,u),c=s(c,d),a=s(a,d),v?(h=!i&&!a,i=!i&&!l,l=!u&&!l,a=!u&&!a,h?r.moveTo(n+e,o):r.moveTo(n,o),i?(r.lineTo(t-e,o),r.arcTo(t,o,t,f,e)):r.lineTo(t,o),l?(r.lineTo(t,f-e),r.arcTo(t,f,n,f,e)):r.lineTo(t,f),a?(r.lineTo(n+e,f),r.arcTo(n,f,n,o,e)):r.lineTo(n,f),h?(r.lineTo(n,o+e),r.arcTo(n,o,t,o,e)):r.lineTo(n,o)):(s=i&&l&&m,l=u&&l&&g,u=u&&a&&c,i&&a&&h&&(r.moveTo(n+e,o),r.lineTo(n,o),r.lineTo(n,o+e),r.arcTo(n,o,n+e,o,e)),s&&(r.moveTo(t-e,o),r.lineTo(t,o),r.lineTo(t,o+e),r.arcTo(t,o,t-e,o,e)),l&&(r.moveTo(t-e,f),r.lineTo(t,f),r.lineTo(t,f-e),r.arcTo(t,f,t-e,f,e)),u&&(r.moveTo(n+e,f),r.lineTo(n,f),r.lineTo(n,f-e),r.arcTo(n,f,n+e,f,e)))},u=function(r,e){var u=o(e.text,e.ecLevel,e.minVersion,e.maxVersion,e.quiet);if(!u)return null;var s=t(r).data("qrcode",u),f=s[0].getContext("2d");t(e.background).is("img")?f.drawImage(e.background,0,0,e.size,e.size):e.background&&(f.fillStyle=e.background,f.fillRect(e.left,e.top,e.size,e.size));var l=e.mode;if(1===l||2===l){var l=e.size,c="bold "+e.mSize*l+"px "+e.fontname,d=t("<canvas/>")[0].getContext("2d");d.font=c;var g=d.measureText(e.label).width,d=e.mSize,v=g/l,g=(1-v)*e.mPosX,h=(1-d)*e.mPosY,v=g+v,d=h+d;1===e.mode?u.addBlank(0,h-.01,l,d+.01):u.addBlank(g-.01,h-.01,v+.01,d+.01),f.fillStyle=e.fontcolor,f.font=c,f.fillText(e.label,g*l,h*l+.75*e.mSize*l)}else if(3===l||4===l){var l=e.size,c=e.mSize,d=c*(e.image.naturalWidth||1)/(e.image.naturalHeight||1),g=(1-d)*e.mPosX,h=(1-c)*e.mPosY,v=g+d,m=h+c;3===e.mode?u.addBlank(0,h-.01,l,m+.01):u.addBlank(g-.01,h-.01,v+.01,m+.01),f.drawImage(e.image,g*l,h*l,d*l,c*l)}for(l=u.moduleCount,c=e.size/l,d=i,n&&0<e.radius&&.5>=e.radius&&(d=a),f.beginPath(),g=0;g<l;g+=1)for(h=0;h<l;h+=1)d(u,f,e,e.left+h*c,e.top+g*c,c,g,h);return t(e.fill).is("img")?(f.strokeStyle="rgba(0,0,0,0.5)",f.lineWidth=2,f.stroke(),u=f.globalCompositeOperation,f.globalCompositeOperation="destination-out",f.fill(),f.globalCompositeOperation=u,f.clip(),f.drawImage(e.fill,0,0,e.size,e.size),f.restore()):(f.fillStyle=e.fill,f.fill()),s},s=function(r){var e=t("<canvas/>").attr("width",r.size).attr("height",r.size);return u(e,r)},f=function(r){if(e&&"canvas"===r.render)return s(r);if(e&&"image"===r.render)return t("<img/>").attr("src",s(r)[0].toDataURL("image/png"));var n;if(n=o(r.text,r.ecLevel,r.minVersion,r.maxVersion,r.quiet)){var i,a=r.size,u=r.background,f=Math.floor,l=n.moduleCount,c=f(a/l),f=f(.5*(a-c*l)),a={position:"relative",left:0,top:0,padding:0,margin:0,width:a,height:a};for(r={position:"absolute",padding:0,margin:0,width:c,height:c,"background-color":r.fill},a=t("<div/>").data("qrcode",n).css(a),u&&a.css("background-color",u),u=0;u<l;u+=1)for(i=0;i<l;i+=1)n.isDark(u,i)&&t("<div/>").css(r).css({left:f+i*c,top:f+u*c}).appendTo(a);n=a}else n=null;return n},l={render:"canvas",minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:0,quiet:0,mode:0,mSize:.1,mPosX:.5,mPosY:.5,label:"no label",fontname:"sans",fontcolor:"#000",image:null};t.fn.qrcode=function(r){var e=t.extend({},l,r);return this.each(function(){"canvas"===this.nodeName.toLowerCase()?u(this,e):t(this).append(f(e))})};var c=function(){function t(r,e){if(void 0===r.length)throw Error(r.length+"/"+e);var n=function(){for(var t=0;t<r.length&&0==r[t];)t+=1;for(var n=Array(r.length-t+e),o=0;o<r.length-t;o+=1)n[o]=r[o+t];return n}(),i={get:function(t){return n[t]},getLength:function(){return n.length},multiply:function(r){for(var e=Array(i.getLength()+r.getLength()-1),n=0;n<i.getLength();n+=1)for(var a=0;a<r.getLength();a+=1)e[n+a]^=o.gexp(o.glog(i.get(n))+o.glog(r.get(a)));return t(e,0)},mod:function(r){if(0>i.getLength()-r.getLength())return i;for(var e=o.glog(i.get(0))-o.glog(r.get(0)),n=Array(i.getLength()),a=0;a<i.getLength();a+=1)n[a]=i.get(a);for(a=0;a<r.getLength();a+=1)n[a]^=o.gexp(o.glog(r.get(a))+e);return t(n,0).mod(r)}};return i}var r=function(r,o){var s=e[o],f=null,l=0,c=null,g=[],v={},h=function(e,o){for(var u=l=4*r+17,d=Array(u),v=0;v<u;v+=1){d[v]=Array(u);for(var h=0;h<u;h+=1)d[v][h]=null}for(f=d,m(0,0),m(l-7,0),m(0,l-7),u=n.getPatternPosition(r),d=0;d<u.length;d+=1)for(v=0;v<u.length;v+=1){var h=u[d],p=u[v];if(null==f[h][p])for(var w=-2;2>=w;w+=1)for(var y=-2;2>=y;y+=1)f[h+w][p+y]=-2==w||2==w||-2==y||2==y||0==w&&0==y}for(u=8;u<l-8;u+=1)null==f[u][6]&&(f[u][6]=0==u%2);for(u=8;u<l-8;u+=1)null==f[6][u]&&(f[6][u]=0==u%2);for(u=n.getBCHTypeInfo(s<<3|o),d=0;15>d;d+=1)v=!e&&1==(u>>d&1),6>d?f[d][8]=v:8>d?f[d+1][8]=v:f[l-15+d][8]=v;for(d=0;15>d;d+=1)v=!e&&1==(u>>d&1),8>d?f[8][l-d-1]=v:9>d?f[8][15-d-1+1]=v:f[8][15-d-1]=v;if(f[l-8][8]=!e,7<=r){for(u=n.getBCHTypeNumber(r),d=0;18>d;d+=1)v=!e&&1==(u>>d&1),f[Math.floor(d/3)][d%3+l-8-3]=v;for(d=0;18>d;d+=1)v=!e&&1==(u>>d&1),f[d%3+l-8-3][Math.floor(d/3)]=v}if(null==c){for(u=i.getRSBlocks(r,s),d=a(),v=0;v<g.length;v+=1)h=g[v],d.put(h.getMode(),4),d.put(h.getLength(),n.getLengthInBits(h.getMode(),r)),h.write(d);for(v=h=0;v<u.length;v+=1)h+=u[v].dataCount;if(d.getLengthInBits()>8*h)throw Error("code length overflow. ("+d.getLengthInBits()+">"+8*h+")");for(d.getLengthInBits()+4<=8*h&&d.put(0,4);0!=d.getLengthInBits()%8;)d.putBit(!1);for(;!(d.getLengthInBits()>=8*h)&&(d.put(236,8),!(d.getLengthInBits()>=8*h));)d.put(17,8);for(var C=0,h=v=0,p=Array(u.length),w=Array(u.length),y=0;y<u.length;y+=1){var _=u[y].dataCount,k=u[y].totalCount-_,v=Math.max(v,_),h=Math.max(h,k);p[y]=Array(_);for(var b=0;b<p[y].length;b+=1)p[y][b]=255&d.getBuffer()[b+C];for(C+=_,b=n.getErrorCorrectPolynomial(k),_=t(p[y],b.getLength()-1).mod(b),w[y]=Array(b.getLength()-1),b=0;b<w[y].length;b+=1)k=b+_.getLength()-w[y].length,w[y][b]=0<=k?_.get(k):0}for(b=d=0;b<u.length;b+=1)d+=u[b].totalCount;for(d=Array(d),b=C=0;b<v;b+=1)for(y=0;y<u.length;y+=1)b<p[y].length&&(d[C]=p[y][b],C+=1);for(b=0;b<h;b+=1)for(y=0;y<u.length;y+=1)b<w[y].length&&(d[C]=w[y][b],C+=1);c=d}for(u=c,d=-1,v=l-1,h=7,p=0,w=n.getMaskFunction(o),y=l-1;0<y;y-=2)for(6==y&&--y;;){for(b=0;2>b;b+=1)null==f[v][y-b]&&(C=!1,p<u.length&&(C=1==(u[p]>>>h&1)),w(v,y-b)&&(C=!C),f[v][y-b]=C,-1==--h&&(p+=1,h=7));if(0>(v+=d)||l<=v){v-=d,d=-d;break}}},m=function(t,r){for(var e=-1;7>=e;e+=1)if(!(-1>=t+e||l<=t+e))for(var n=-1;7>=n;n+=1)-1>=r+n||l<=r+n||(f[t+e][r+n]=0<=e&&6>=e&&(0==n||6==n)||0<=n&&6>=n&&(0==e||6==e)||2<=e&&4>=e&&2<=n&&4>=n)};return v.addData=function(t){t=u(t),g.push(t),c=null},v.isDark=function(t,r){if(0>t||l<=t||0>r||l<=r)throw Error(t+","+r);return f[t][r]},v.getModuleCount=function(){return l},v.make=function(){for(var t=0,r=0,e=0;8>e;e+=1){h(!0,e);var o=n.getLostPoint(v);(0==e||t>o)&&(t=o,r=e)}h(!1,r)},v.createTableTag=function(t,r){t=t||2;var e;e='<table style=" border-width: 0px; border-style: none;',e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<v.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<v.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=v.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},v.createImgTag=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=v.getModuleCount()*t+2*r,n=r,o=e-r;return d(e,e,function(r,e){return n<=r&&r<o&&n<=e&&e<o&&v.isDark(Math.floor((e-n)/t),Math.floor((r-n)/t))?0:1})},v};r.stringToBytes=function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r},r.createStringToBytes=function(t,r){var e=function(){for(var e=l(t),n=function(){var t=e.read();if(-1==t)throw Error();return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),s=n(),f=n(),a=String.fromCharCode(a<<8|u);i[a]=s<<8|f,o+=1}if(o!=r)throw Error(o+" != "+r);return i}();return function(t){for(var r=[],n=0;n<t.length;n+=1){var o=t.charCodeAt(n);128>o?r.push(o):(o=e[t.charAt(n)],"number"==typeof o?(255&o)==o?r.push(o):(r.push(o>>>8),r.push(255&o)):r.push(63))}return r}};var e={L:1,M:0,Q:3,H:2},n=function(){var r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e={},n=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r};return e.getBCHTypeInfo=function(t){for(var r=t<<10;0<=n(r)-n(1335);)r^=1335<<n(r)-n(1335);return 21522^(t<<10|r)},e.getBCHTypeNumber=function(t){for(var r=t<<12;0<=n(r)-n(7973);)r^=7973<<n(r)-n(7973);return t<<12|r},e.getPatternPosition=function(t){return r[t-1]},e.getMaskFunction=function(t){switch(t){case 0:return function(t,r){return 0==(t+r)%2};case 1:return function(t,r){return 0==t%2};case 2:return function(t,r){return 0==r%3};case 3:return function(t,r){return 0==(t+r)%3};case 4:return function(t,r){return 0==(Math.floor(t/2)+Math.floor(r/3))%2};case 5:return function(t,r){return 0==t*r%2+t*r%3};case 6:return function(t,r){return 0==(t*r%2+t*r%3)%2};case 7:return function(t,r){return 0==(t*r%3+(t+r)%2)%2};default:throw Error("bad maskPattern:"+t)}},e.getErrorCorrectPolynomial=function(r){for(var e=t([1],0),n=0;n<r;n+=1)e=e.multiply(t([1,o.gexp(n)],0));return e},e.getLengthInBits=function(t,r){if(1<=r&&10>r)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw Error("mode:"+t)}else if(27>r)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw Error("mode:"+t)}else{if(!(41>r))throw Error("type:"+r);switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw Error("mode:"+t)}}},e.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;1>=u;u+=1)if(!(0>n+u||r<=n+u))for(var s=-1;1>=s;s+=1)0>o+s||r<=o+s||0==u&&0==s||a!=t.isDark(n+u,o+s)||(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1)i=0,t.isDark(n,o)&&(i+=1),t.isDark(n+1,o)&&(i+=1),t.isDark(n,o+1)&&(i+=1),t.isDark(n+1,o+1)&&(i+=1),(0==i||4==i)&&(e+=3);for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(o=i=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(i+=1);return t=Math.abs(100*i/r/r-50)/5,e+10*t},e}(),o=function(){for(var t=Array(256),r=Array(256),e=0;8>e;e+=1)t[e]=1<<e;for(e=8;256>e;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;255>e;e+=1)r[t[e]]=e;return{glog:function(t){if(1>t)throw Error("glog("+t+")");return r[t]},gexp:function(r){for(;0>r;)r+=255;for(;256<=r;)r-=255;return t[r]}}}(),i=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},n={},o=function(r,n){switch(n){case e.L:return t[4*(r-1)+0];case e.M:return t[4*(r-1)+1];case e.Q:return t[4*(r-1)+2];case e.H:return t[4*(r-1)+3]}};return n.getRSBlocks=function(t,e){var n=o(t,e);if(void 0===n)throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=n.length/3,a=[],u=0;u<i;u+=1)for(var s=n[3*u+0],f=n[3*u+1],l=n[3*u+2],c=0;c<s;c+=1)a.push(r(f,l));return a},n}(),a=function(){var t=[],r=0,e={getBuffer:function(){return t},get:function(r){return 1==(t[Math.floor(r/8)]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},u=function(t){var e=r.stringToBytes(t);return{getMode:function(){return 4},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}}},s=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r;r="[";for(var e=0;e<t.length;e+=1)0<e&&(r+=","),r+=t[e];return r+"]"}};return r},f=function(){var t=0,r=0,e=0,n="",o={},i=function(t){if(!(0>t)){if(26>t)return 65+t;if(52>t)return t-26+97;if(62>t)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw Error("n:"+t)};return o.writeByte=function(o){for(t=t<<8|255&o,r+=8,e+=1;6<=r;)n+=String.fromCharCode(i(t>>>r-6&63)),r-=6},o.flush=function(){if(0<r&&(n+=String.fromCharCode(i(t<<6-r&63)),r=t=0),0!=e%3)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o},l=function(t){var r=0,e=0,n=0,o=function(t){if(65<=t&&90>=t)return t-65;if(97<=t&&122>=t)return t-97+26;if(48<=t&&57>=t)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw Error("c:"+t)};return{read:function(){for(;8>n;){if(r>=t.length){if(0==n)return-1;throw Error("unexpected end of file./"+n)}var i=t.charAt(r);if(r+=1,"="==i)return n=0,-1;i.match(/^\s$/)||(e=e<<6|o(i.charCodeAt(0)),n+=6)}return i=e>>>n-8&255,n-=8,i}}},c=function(t,r){var e=Array(t*r),n=function(t){var r=0,e=0;return{write:function(n,o){if(0!=n>>>o)throw Error("length over");for(;8<=r+o;)t.writeByte(255&(n<<r|e)),o-=8-r,n>>>=8-r,r=e=0;e|=n<<r,r+=o},flush:function(){0<r&&t.writeByte(e)}}},o=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw Error("dup key:"+n);t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return{setPixel:function(r,n,o){e[n*t+r]=o},write:function(i){i.writeString("GIF87a"),i.writeShort(t),i.writeShort(r),i.writeByte(128),i.writeByte(0),i.writeByte(0),i.writeByte(0),i.writeByte(0),i.writeByte(0),i.writeByte(255),i.writeByte(255),i.writeByte(255),i.writeString(","),i.writeShort(0),i.writeShort(0),i.writeShort(t),i.writeShort(r),i.writeByte(0);var a;a=3;for(var u=o(),f=0;4>f;f+=1)u.add(String.fromCharCode(f));u.add(String.fromCharCode(4)),u.add(String.fromCharCode(5));var f=s(),l=n(f);l.write(4,a);for(var c=0,d=String.fromCharCode(e[c]),c=c+1;c<e.length;){var g=String.fromCharCode(e[c]),c=c+1;u.contains(d+g)?d+=g:(l.write(u.indexOf(d),a),4095>u.size()&&(u.size()==1<<a&&(a+=1),u.add(d+g)),d=g)}for(l.write(u.indexOf(d),a),l.write(5,a),l.flush(),a=f.toByteArray(),i.writeByte(2),u=0;255<a.length-u;)i.writeByte(255),i.writeBytes(a,u,255),u+=255;i.writeByte(a.length-u),i.writeBytes(a,u,a.length-u),i.writeByte(0),i.writeString(";")}}},d=function(t,r,e,n){for(var o=c(t,r),i=0;i<r;i+=1)for(var a=0;a<t;a+=1)o.setPixel(a,i,e(a,i));for(e=s(),o.write(e),o=f(),e=e.toByteArray(),i=0;i<e.length;i+=1)o.writeByte(e[i]);return o.flush(),e='<img src="',e+="data:image/gif;base64,",e+=o,e+='"',e+=' width="',e+=t,e+='"',e+=' height="',e+=r,e+='"',n&&(e+=' alt="',e+=n,e+='"'),e+="/>"};return r}()}(t),function(t){t.fn.erweima=function(r){if(null!=r){if(null!=r.text){var e,n,o,i,a=r.text;for(e="",o=a.length,n=0;n<o;n++)i=a.charCodeAt(n),1<=i&&127>=i?e+=a.charAt(n):(2047<i?(e+=String.fromCharCode(224|i>>12&15),e+=String.fromCharCode(128|i>>6&63)):e+=String.fromCharCode(192|i>>6&31),e+=String.fromCharCode(128|i>>0&63));r.text=e}null!=r.radius&&(a=.01*parseInt(r.radius),r.radius=a),null!=r.mSize&&(a=.01*parseInt(r.mSize),r.mSize=a),null!=r.mPosX&&(a=.01*parseInt(r.mPosX),r.mPosX=a),null!=r.mPosY&&(a=.01*parseInt(r.mPosY),r.mPosY=a)}r=t.extend({render:"canvas",ecLevel:"H",minVersion:6,fill:"#666",background:"#fff",text:"http://www.jq22.com",size:300,radius:.5,quiet:4,mode:2,mSize:.1,mPosX:.5,mPosY:.5,label:"扫码关注我",fontname:"Microsoft YaHei",fontcolor:"orange"},r),t(this).empty().qrcode(r)}}(t)}).call(r,e(47))}});