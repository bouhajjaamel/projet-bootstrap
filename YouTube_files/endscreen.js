(function(g){var window=this;'use strict';var hJa=function(a,b){a.Ma("onAutonavCoundownStarted",b)},C3=function(a,b,c){var d=b.bb();
g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Be(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.VF&&(b.lengthText?(f=b.lengthText||null,h=b.hw||null):b.lengthSeconds&&(f=g.dL(b.lengthSeconds),h=g.dL(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.bM(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.VF?b.isLivePlayback:null,n=b instanceof g.VF?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Fr||g.OH("Regarder $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.hm(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Ir};b instanceof g.cM&&(d.playlist_length=b.length);a.update(d)},D3=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"En direct"},
{D:"div",Ca:["ytp-autonav-upcoming-stamp"],oa:"\u00c0 venir"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",oa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=
a;this.suggestion=null;this.i=c;this.Oa("click",this.onClick);this.Oa("keypress",this.l)},F3=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"En direct"},{D:"div",Ca:["ytp-autonav-upcoming-stamp"],oa:"\u00c0 venir"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
oa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.H(this,this.i);this.i.Aa(this.element);d||this.N(this.i.Ba("ytp-autonav-endscreen-link-container"),"click",this.PD);this.I.Yb(this.element,this,115127);this.I.Yb(this.i.Ba("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay"});
g.H(this,this.overlay);this.overlay.Aa(this.element);this.u=new g.V({D:"div",K:"ytp-autonav-endscreen-button-container"});g.H(this,this.u);this.u.Aa(this.element);this.cancelButton=new g.V({D:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Annuler la lecture automatique"},oa:"Annuler"});g.H(this,this.cancelButton);this.cancelButton.Aa(this.u.element);this.cancelButton.Oa("click",this.EL,this);this.I.Yb(this.cancelButton.element,this,
115129);this.playButton=new g.V({D:"a",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Lire la vid\u00e9o suivante"},oa:"Regarder"});g.H(this,this.playButton);this.playButton.Aa(this.u.element);this.playButton.Oa("click",this.PD,this);this.I.Yb(this.playButton.element,this,115130);this.B=new g.J(function(){E3(c)},500);
g.H(this,this.B);this.OD();this.N(a,"autonavvisibility",this.OD)},E3=function(a){var b=G3(a),c=Math.min(a.l?Date.now()-a.l:0,b);
H3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.dh()?a.select(!0):a.dh()&&a.B.start()},G3=function(a){var b=a.I.Tn();
return 0<=b?b:g.BC(a.I.T().experiments,"autoplay_time")||1E4},H3=function(a,b){b=void 0===b?-1:b;
a=a.i.Ba("ytp-autonav-endscreen-upnext-header");g.He(a);if(0<=b){b=String(b);var c="Prochaine vid\u00e9o dans $SECONDS".match(/\$SECONDS/gi)[0],d="Prochaine vid\u00e9o dans $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Ge("Prochaine vid\u00e9o dans $SECONDS".slice(0,d)));var e=g.Fe("span");g.rn(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Re(e,b);a.appendChild(e);a.appendChild(g.Ge("Prochaine vid\u00e9o dans $SECONDS".slice(d+c.length)));return}}g.Re(a,"\u00c0 suivre")},I3=function(a,
b){g.V.call(this,{D:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},K3=function(a){g.V.call(this,{D:"div",
Ca:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",oa:"\u00c0 suivre"},{D:"span",K:"ytp-upnext-title",oa:"{{title}}"},{D:"span",K:"ytp-upnext-author",oa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Lire la vid\u00e9o suivante"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
oa:"La lecture automatique est d\u00e9sactiv\u00e9e"}]}]});this.api=a;this.cancelButton=null;this.C=this.Ba("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.Uu,5E3,this);this.l=0;var b=this.Ba("ytp-upnext-cancel");this.cancelButton=new g.V({D:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Annuler la lecture automatique"},oa:"Annuler"});g.H(this,this.cancelButton);this.cancelButton.Oa("click",this.FL,this);this.cancelButton.Aa(b);
this.cancelButton&&this.api.Yb(this.cancelButton.element,this,115129);g.H(this,this.B);this.api.Yb(this.element,this,18788);b=this.Ba("ytp-upnext-autoplay-icon");this.N(b,"click",this.GL);this.api.Yb(b,this,115130);this.QD();this.N(a,"autonavvisibility",this.QD);this.N(a,"mdxnowautoplaying",this.aQ);this.N(a,"mdxautoplaycanceled",this.bQ);this.N(a,"mdxautoplayupnext",this.HJ);J3(this)&&(a=(a=g.UL(this.api.rb()))?a.xN():null)&&this.HJ(a);g.L(this.element,"ytp-upnext-mobile",this.api.T().i)},J3=function(a){return 3===
a.api.getPresentingPlayerType()},iJa=function(a,b){return b?b:0<=a.api.Tn()?a.api.Tn():g.BC(a.api.T().experiments,"autoplay_time")||1E4},L3=function(a,b){b=iJa(a,b);
var c=Math,d=c.min;var e=(0,g.N)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.dh()&&!J3(a)?a.select(!0):a.dh()&&a.i.start()},M3=function(a){I3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"Plus de vid\u00e9os"}]});this.J=new g.V({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new F3(this.player);g.H(this,this.l);this.l.Aa(this.element);a.getVideoData().Mb?this.i=this.l:(this.i=new K3(a),g.YL(this.player,this.i.element,4),g.H(this,this.i));this.overlay=
new g.V({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.H(this,this.overlay);this.overlay.Aa(this.element);this.B=new g.$L(this);g.H(this,this.B);g.H(this,this.table);this.table.Aa(this.element);this.table.show();g.H(this,this.J);this.J.Aa(this.table.element);this.hide()},jJa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.zO(a.player.T(),c);
g.H(a,c);return c})},N3=function(a){var b=a.Cd();
b!==a.C&&(a.C=b,a.player.W("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},O3=function(a){I3.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",oa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.H(this,this.i);this.i.Aa(this.element);var b=a.getVideoData();this.subscribeButton=new g.mN("S'abonner",null,"Se d\u00e9sabonner",null,!0,!1,b.lh,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.Aa(this.i.Ba("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ka);this.Ka();this.hide()},P3=function(a){var b=a.T(),c=g.sB||g.og?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Ca:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",oa:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
oa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",oa:"En direct"},{D:"span",K:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",oa:"{{playlist_length}}"},")"]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.$L(this);g.H(this,this.i);this.Oa("click",this.onClick);this.Oa("keypress",this.u);this.i.N(a,"videodatachange",this.gb);a.vg(this.element,this);this.gb()},Q3=function(a){I3.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.$L(this);g.H(this,this.l);this.G=new g.J(function(){g.K(b.element,"ytp-show-tiles")},0);
g.H(this,this.G);var c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Pr\u00e9c\u00e9dente"},S:[g.lK()]});g.H(this,c);c.Aa(this.element);c.Oa("click",this.KL,this);this.table=new g.dK({D:"div",K:"ytp-endscreen-content"});g.H(this,this.table);this.table.Aa(this.element);c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Suivante"},S:[g.mK()]});g.H(this,c);c.Aa(this.element);c.Oa("click",this.JL,this);a.getVideoData().Mb?this.i=new F3(a,!0):
this.i=new K3(a);g.H(this,this.i);g.YL(this.player,this.i.element,4);this.hide()},R3=function(a){return g.ZL(a.player)&&a.Hr()&&!a.B},kJa=function(a,b){return g.Pc(b.suggestions,function(c){c=g.zO(a.I.T(),c);
g.H(a,c);return c})},S3=function(a){var b=a.Cd();
b!==a.J&&(a.J=b,a.player.W("autonavvisibility"))},T3=function(a){g.kM.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.$L(this);g.H(this,this.listeners);this.env=a.T();lJa(a)?(this.u=!0,mJa(this),this.i?this.endScreen=new M3(a):this.endScreen=new Q3(this.player)):this.env.Qb?this.endScreen=new O3(this.player):this.endScreen=new I3(this.player);g.H(this,this.endScreen);g.YL(this.player,this.endScreen.element,4);nJa(this);this.listeners.N(a,"videodatachange",this.gb,this);this.listeners.N(a,g.aw("endscreen"),function(c){b.pd(c)});
this.listeners.N(a,g.bw("endscreen"),function(c){b.nf(c)})},mJa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Cf&&a.l===b.Mb)return!1;a.i=b.Cf;a.l=b.Mb;return!0},lJa=function(a){a=a.T();
return a.Za&&!a.Qb},nJa=function(a){a.player.Te("endscreen");
var b=a.player.getVideoData();b=new g.Yv(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Yv(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.wd([b,c])};
g.RL.prototype.Tn=g.ca(4,function(){return this.app.Tn()});
g.qW.prototype.Tn=g.ca(3,function(){return this.getVideoData().CE});
g.v(D3,g.V);D3.prototype.select=function(){(this.I.aj(this.suggestion.bb().videoId,this.suggestion.Gd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Tz||void 0)||this.I.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Gb(this.element)};
D3.prototype.onClick=function(a){g.EM(a,this.I,this.i,this.suggestion.Gd||void 0)&&this.select()};
D3.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.bq(a)||(this.select(),g.aq(a))}};
D3.prototype.Td=function(a){g.L(this.element,"ytp-suggestion-card-with-margin",a)};g.v(F3,g.V);g.k=F3.prototype;g.k.xr=function(a){this.suggestion!==a&&(this.suggestion=a,C3(this.i,a),this.playButton.Qa("url",this.suggestion.hm()),this.Td())};
g.k.Td=function(){var a=this.I.wi(!0,this.I.isFullscreen());g.L(this.element,"ytp-autonav-endscreen-small-mode",this.Ee(a));g.L(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.wx);g.L(this.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.I.Cd());g.L(this.I.getRootNode(),"countdown-running",this.dh());g.L(this.element,"ytp-player-content",this.I.Cd());g.lg(this.overlay.element,{width:a.width+"px"});if(!this.dh()){this.I.Cd()?H3(this,Math.round(G3(this)/
1E3)):H3(this);a=!!this.suggestion&&!!this.suggestion.Ir;var b=this.I.Cd()||!a;g.L(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.L(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.gK(this.u,this.I.Cd())}};
g.k.dh=function(){return 0<this.l};
g.k.Lq=function(){this.dh()||(this.l=Date.now(),E3(this),hJa(this.I,G3(this)),g.L(this.I.getRootNode(),"countdown-running",this.dh()))};
g.k.No=function(){this.ll();E3(this);var a=this.i.Ba("ytp-autonav-endscreen-upnext-header");a&&g.Re(a,"\u00c0 suivre")};
g.k.ll=function(){this.dh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.ll()};
g.k.PD=function(a){g.EM(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Gb(this.playButton.element):a.currentTarget===this.i.Ba("ytp-autonav-endscreen-link-container")&&(a=this.i.Ba("ytp-autonav-endscreen-link-container"),this.I.fb(a,!0),this.I.Gb(a)),this.select())};
g.k.EL=function(){this.I.Gb(this.cancelButton.element);g.TL(this.I,!0)};
g.k.OD=function(){var a=this.I.Cd();this.C&&this.vb!==a&&g.gK(this,a);this.Td();this.I.fb(this.element,a);this.I.fb(this.cancelButton.element,a);this.I.fb(this.i.Ba("ytp-autonav-endscreen-link-container"),a);this.I.fb(this.playButton.element,a)};
g.k.Ee=function(a){return 400>a.width||459>a.height};g.v(I3,g.V);g.k=I3.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Hr=function(){return!1};
g.k.Cd=function(){return!1};
g.k.JG=function(){return!1};g.v(K3,g.V);g.k=K3.prototype;g.k.Uu=function(){this.notification&&(this.B.stop(),this.fc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.xr=function(a){this.suggestion=a;C3(this,a,"hqdefault.jpg")};
g.k.QD=function(){g.gK(this,this.api.Cd());this.api.fb(this.element,this.api.Cd());this.api.fb(this.Ba("ytp-upnext-autoplay-icon"),this.api.Cd());this.cancelButton&&this.api.fb(this.cancelButton.element,this.api.Cd())};
g.k.lQ=function(){window.focus();this.Uu()};
g.k.Lq=function(a){var b=this;this.dh()||(g.Wq("a11y-announce","\u00c0 suivre "+this.suggestion.title),this.l=(0,g.N)(),this.i=new g.J(function(){L3(b,a)},25),L3(this,a),hJa(this.api,iJa(this,a)));
g.un(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.dh=function(){return!!this.i};
g.k.No=function(){this.ll();this.l=(0,g.N)();L3(this);g.K(this.element,"ytp-upnext-autoplay-paused")};
g.k.ll=function(){this.dh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.S(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.bb(),this.Uu(),this.notification=new Notification("\u00c0 suivre",{body:b.title,icon:b.Be()}),this.u=this.N(this.notification,"click",this.lQ),this.B.start())}this.ll();this.api.nextVideo(!1,a)};
g.k.GL=function(a){!g.Me(this.cancelButton.element,g.Xp(a))&&g.EM(a,this.api)&&(this.api.Cd()&&this.api.Gb(this.Ba("ytp-upnext-autoplay-icon")),this.select())};
g.k.FL=function(){this.api.Cd()&&this.cancelButton&&this.api.Gb(this.cancelButton.element);g.TL(this.api,!0)};
g.k.aQ=function(a){J3(this);this.show();this.Lq(a)};
g.k.HJ=function(a){J3(this);this.suggestion&&this.suggestion.bb().videoId===a.bb().videoId||this.xr(a)};
g.k.bQ=function(){J3(this);this.ll();this.hide()};
g.k.ra=function(){this.ll();this.Uu();g.V.prototype.ra.call(this)};g.v(M3,I3);g.k=M3.prototype;g.k.create=function(){I3.prototype.create.call(this);this.B.N(this.player,"appresize",this.Td);this.B.N(this.player,"onVideoAreaChange",this.Td);this.B.N(this.player,"videodatachange",this.gb);this.B.N(this.player,"autonavchange",this.RD);this.B.N(this.player,"autonavcancel",this.HL);this.gb()};
g.k.show=function(){I3.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.TL(this.player,!1);g.ZL(this.player)&&this.Hr()&&!this.u?(N3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Lq():3===this.videoData.autonavState&&this.i.No()):(g.TL(this.player,!0),N3(this));this.Td()};
g.k.hide=function(){I3.prototype.hide.call(this);this.i.No();N3(this)};
g.k.Td=function(){var a=this.player.wi(!0,this.player.isFullscreen());N3(this);this.l.Td();g.L(this.element,"ytp-autonav-cancelled-small-mode",this.Ee(a));g.L(this.element,"ytp-autonav-cancelled-tiny-mode",this.Zv(a));g.L(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.lg(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.Td(1===c%2)}}};
g.k.gb=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=jJa(this,a))&&this.suggestions.length)for(this.i.xr(this.suggestions[0]),this.i!==this.l&&this.l.xr(this.suggestions[0]),a=0;a<oJa.length;++a){var b=oJa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new D3(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,C3(c,b));g.H(this,this.videos[a]);this.videos[a].Aa(this.J.element)}}this.Td()}};
g.k.RD=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.ll(),this.vb&&this.Td()):(this.G=!0,this.Cd()&&(2===a?this.i.Lq():3===a&&this.i.No()))};
g.k.HL=function(a){a?this.RD(1):(this.u=null,this.G=!1)};
g.k.Hr=function(){return 1!==this.videoData.autonavState};
g.k.Ee=function(a){return(910>a.width||459>a.height)&&!this.Zv(a)&&!(400>=a.width||360>=a.height)};
g.k.Zv=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Cd=function(){return this.vb&&g.ZL(this.player)&&this.Hr()&&!this.u};
var oJa=[1,3,2,4];g.v(O3,I3);O3.prototype.Ka=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.fg,author:a.author});this.subscribeButton.channelId=a.lh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.v(P3,g.V);P3.prototype.select=function(){(this.api.aj(this.suggestion.bb().videoId,this.suggestion.Gd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.Tz||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Gb(this.element)};
P3.prototype.onClick=function(a){g.EM(a,this.api,this.l,this.suggestion.Gd||void 0)&&this.select()};
P3.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.bq(a)||(this.select(),g.aq(a))}};
P3.prototype.gb=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.v(Q3,I3);g.k=Q3.prototype;g.k.create=function(){I3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=kJa(this,a),this.videoData=a);this.Td();this.l.N(this.player,"appresize",this.Td);this.l.N(this.player,"onVideoAreaChange",this.Td);this.l.N(this.player,"videodatachange",this.gb);this.l.N(this.player,"autonavchange",this.Iy);this.l.N(this.player,"autonavcancel",this.IL);a=this.videoData.autonavState;a!==this.L&&this.Iy(a);this.l.N(this.element,"transitionend",this.yR)};
g.k.destroy=function(){g.nu(this.l);g.Gi(this.stills);this.stills=[];this.suggestions=null;I3.prototype.destroy.call(this);g.un(this.element,"ytp-show-tiles");this.G.stop();this.L=this.videoData.autonavState};
g.k.Hr=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){I3.prototype.show.call(this);g.un(this.element,"ytp-show-tiles");this.player.T().i?this.G.yg():this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.TL(this.player,!1);R3(this)?(S3(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Lq():3===this.videoData.autonavState&&this.i.No()):(g.TL(this.player,!0),S3(this))};
g.k.hide=function(){I3.prototype.hide.call(this);this.i.No();S3(this)};
g.k.yR=function(a){g.Xp(a)===this.element&&this.Td()};
g.k.Td=function(){if(this.suggestions&&this.suggestions.length){g.K(this.element,"ytp-endscreen-paginate");var a=this.I.wi(!0,this.I.isFullscreen()),b=g.OL(this.I);b&&(b=b.pe()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Ag(a,m,n);g.lg(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.xr(this.suggestions[0]);this.i instanceof F3&&this.i.Td();g.L(this.element,"ytp-endscreen-takeover",R3(this));S3(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.ee(p+this.u,l),0!==r){t=this.stills[c];t||(t=new P3(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,D=Math.floor(m*(f+r)/b)-x-4;g.tg(t.element,x,u);g.Ag(t.element,D,y);g.lg(t.element,"transitionDelay",(h+f)/20+"s");g.L(t.element,"ytp-videowall-still-mini",1===r);g.L(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.sn(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",C3(r,p,u),g.BD(t)&&(t=p.hm(),t=g.Od(t,g.iN("emb_rel_end")),r.Qa("url",t)),(p=(p=p.Gd)&&p.itct)&&r.api.il(r.element,p));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Je(e.element),g.Fi(e);this.stills.length=c}};
g.k.gb=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=kJa(this,a),this.videoData=a,this.Td())};
g.k.JL=function(){this.u+=this.stills.length;this.Td()};
g.k.KL=function(){this.u-=this.stills.length;this.Td()};
g.k.JG=function(){return this.i.dh()};
g.k.Iy=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.ll(),this.vb&&this.Td()):(this.C=!0,this.vb&&R3(this)&&(2===a?this.i.Lq():3===a&&this.i.No()))};
g.k.IL=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.fb(this.stills[a].element,!0);this.Iy(1)}else this.B=null,this.C=!1;this.Td()};
g.k.Cd=function(){return this.vb&&R3(this)};g.v(T3,g.kM);g.k=T3.prototype;g.k.Xo=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!lJa(this.player)||b;var c=a.Ic||g.MD(a.B),d=this.player.ls();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Cd=function(){return this.endScreen.Cd()};
g.k.fO=function(){return this.Cd()?this.endScreen.JG():!1};
g.k.ra=function(){this.player.Te("endscreen");g.kM.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.BE;if(b&&b.videoId){var c=this.player.rb().hd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.bD?a=!1:(this.player.aj(b.videoId,void 0,void 0,!0,!0,b),c&&c.mw("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.kM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.kM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.pd=function(a){this.Xo()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.nf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.gb=function(){nJa(this);this.u&&mJa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new M3(this.player):this.endScreen=new Q3(this.player),g.H(this,this.endScreen),g.YL(this.player,this.endScreen.element,4))};g.qM.endscreen=T3;})(_yt_player);
