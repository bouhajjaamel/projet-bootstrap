(function(g){var window=this;'use strict';var t4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Xf=!1;this.player=a;this.N(a,"minimized",this.Hg);this.N(a,"onStateChange",this.oC)},u4=function(a){g.kM.call(this,a);
this.i=new t4(this.player);this.i.hide();g.YL(this.player,this.i.element,4);a.Ce()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(t4,g.V);g.k=t4.prototype;
g.k.MA=function(){this.tooltip=new g.EP(this.player,this);g.H(this,this.tooltip);g.YL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.jc=new g.aN(this.player);g.H(this,this.jc);this.hg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.hg);this.hg.Aa(this.element);this.N(this.hg.element,"click",this.Nw);var a=new g.V({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.nK()]});g.H(this,a);a.Aa(this.hg.element);this.N(a.element,"click",this.Kh);
a=new g.W_(this.player,this);g.H(this,a);a.Aa(this.hg.element);this.Nn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.H(this,this.Nn);this.Nn.Aa(this.hg.element);this.N(this.Nn.element,"click",this.Nw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.Aa(this.Nn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Aa(this.Nn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.Aa(this.Nn.element);this.vI=new g.BO(this.player,
this,!1);g.H(this,this.vI);this.vI.Aa(b.element);b=new g.yO(this.player,this);g.H(this,b);b.Aa(a.element);this.nextButton=new g.BO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Aa(c.element);this.og=new g.rP(this.player,this);g.H(this,this.og);this.og.Aa(this.hg.element);this.Dc=new g.GO(this.player,this);g.H(this,this.Dc);g.YL(this.player,this.Dc.element,4);this.Aw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.Aw);g.YL(this.player,this.Aw.element,4);a=new g.V({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.nK()]});g.H(this,a);a.Aa(this.Aw.element);this.N(a.element,"click",this.Kh);a=new g.V({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.sK()]});g.H(this,a);a.Aa(this.Aw.element);this.N(a.element,"click",this.OQ);this.N(this.player,"presentingplayerstatechange",this.Cc);this.N(this.player,"appresize",this.qb);this.N(this.player,"fullscreentoggled",this.qb);this.qb()};
g.k.show=function(){this.kd=new g.gn(this.Ho,null,this);this.kd.start();this.Xf||(this.MA(),this.Xf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Dc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.kd&&(this.kd.dispose(),this.kd=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.Xf&&this.Dc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.kd&&(this.kd.dispose(),this.kd=void 0);g.V.prototype.ra.call(this)};
g.k.Kh=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.OQ=function(){this.player.playVideo()};
g.k.Nw=function(a){if(a.target===this.hg.element||a.target===this.Nn.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.qJ(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.Hg=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.Sd=function(){this.Dc.Tb();this.og.Tb()};
g.k.Ho=function(){this.Sd();this.kd&&this.kd.start()};
g.k.Cc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.qb=function(){g.RO(this.Dc,0,this.player.Wa().getPlayerSize().width,!1);g.IO(this.Dc)};
g.k.oC=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.pe=function(){return!1};
g.k.Ee=function(){return!1};
g.k.Gh=function(){return!1};
g.k.mx=function(){};
g.k.Pl=function(){};
g.k.Vp=function(){};
g.k.fm=function(){return null};
g.k.wi=function(){return new g.ag(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Po=function(a,b,c,d,e){var f=0,h=d=0,l=g.Eg(a);if(b){c=g.sn(b,"ytp-prev-button")||g.sn(b,"ytp-next-button");var m=g.sn(b,"ytp-play-button"),n=g.sn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.sn(b,"ytp-miniplayer-button-top-left"),f=g.zg(b,this.element),b=g.Eg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Wa().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.ck=function(){};
g.k.Dj=function(){return!1};g.v(u4,g.kM);u4.prototype.create=function(){};
u4.prototype.Th=function(){return!1};
u4.prototype.load=function(){this.player.hideControls();this.i.show()};
u4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.qM.miniplayer=u4;})(_yt_player);
