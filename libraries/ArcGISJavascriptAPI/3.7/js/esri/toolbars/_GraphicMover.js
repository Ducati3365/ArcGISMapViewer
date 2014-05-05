/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/toolbars/_GraphicMover","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/json dojo/has dojo/dom-style dojox/gfx/Moveable dojox/gfx/Mover dojox/gfx/matrix esri/kernel esri/geometry/webMercatorUtils esri/geometry/ScreenPoint".split(" "),function(l,m,d,n,t,p,u,v,q,r,s,w){var g=l(null,{declaredClass:"esri.toolbars._GraphicMover",constructor:function(a,b,f){this.graphic=a;this.map=b;this.toolbar=f;this._enableGraphicMover();this._moved=!1},refresh:function(a){var b=this.graphic.getDojoShape();
if(b&&(a||!b._hostGraphic))this._disableGraphicMover(),this._enableGraphicMover()},destroy:function(){this._disableGraphicMover()},hasMoved:function(){return this._moved},_enableGraphicMover:function(){var a=this.graphic,b=a.getDojoShape();b&&(b._hostGraphic=a,this._moveable=new u(b,{mover:g.Mover}),this._moveStartHandle=d.connect(this._moveable,"onMoveStart",this,this._moveStartHandler),this._firstMoveHandle=d.connect(this._moveable,"onFirstMove",this,this._firstMoveHandler),this._movingHandle=d.connect(this._moveable,
"onMoving",this,this._movingHandler),this._moveStopHandle=d.connect(this._moveable,"onMoveStop",this,this._moveStopHandler),(a=b.getEventSource())&&p.set(a,"cursor",this.toolbar._cursors.move))},_disableGraphicMover:function(){var a=this._moveable;if(a){d.disconnect(this._moveStartHandle);d.disconnect(this._firstMoveHandle);d.disconnect(this._movingHandle);d.disconnect(this._moveStopHandle);var b=a.shape;b&&(b._hostGraphic=null,(b=b.getEventSource())&&p.set(b,"cursor",null));a.destroy()}this._moveable=
null},_moveStartHandler:function(){var a=this.graphic,b=this.map;this._startTx=a.getDojoShape().getTransform();"point"===this.graphic.geometry.type&&b.snappingManager&&b.snappingManager._setUpSnapping();this.toolbar.onGraphicMoveStart(a)},_firstMoveHandler:function(){this.toolbar._beginOperation("MOVE");this.toolbar.onGraphicFirstMove(this.graphic)},_movingHandler:function(a){this.toolbar.onGraphicMove(this.graphic,a.shape.getTransform())},_moveStopHandler:function(a){var b=this.graphic,f=this.toolbar,
c=this.map,e=f._geo?s.geographicToWebMercator(b.geometry):b.geometry,k=e.type,d=b.getDojoShape(),h=d.getTransform();if(n.toJson(h)!==n.toJson(this._startTx)){this._moved=!0;switch(k){case "point":var k=[h,q.invert(this._startTx)],g;c.snappingManager&&(g=c.snappingManager._snappingPoint);e=g||c.toMap(q.multiplyPoint(k,c.toScreen(e,!0)));c.snappingManager&&c.snappingManager._killOffSnapping();break;case "polyline":e=this._updatePolyGeometry(e,e.paths,h);break;case "polygon":e=this._updatePolyGeometry(e,
e.rings,h)}d.setTransform(null);b.setGeometry(f._geo?s.webMercatorToGeographic(e,!0):e)}else this._moved=!1;f._endOperation("MOVE");f.onGraphicMoveStop(b,h);this._moved||(a=a.__e,c=this.map.position,a=new w(a.pageX-c.x,a.pageY-c.y),f.onGraphicClick(b,{screenPoint:a,mapPoint:this.map.toMap(a)}))},_updatePolyGeometry:function(a,b,f){var c=this.map,e=a.getPoint(0,0),c=c.toMap(c.toScreen(e).offset(f.dx,f.dy));f=c.x-e.x;for(var e=c.y-e.y,d,g,h,c=0;c<b.length;c++){g=b[c];for(d=0;d<g.length;d++)h=a.getPoint(c,
d),a.setPoint(c,d,h.offset(f,e))}return a}});g.Mover=l(v,{declaredClass:"esri.toolbars._Mover",constructor:function(a,b,d){this.__e=b}});t("extend-esri")&&(m.setObject("toolbars._GraphicMover",g,r),m.setObject("toolbars._Mover",g.Mover,r));return g});