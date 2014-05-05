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
define("esri/symbols/SimpleLineSymbol","dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has dojox/gfx/_base esri/kernel esri/lang esri/symbols/LineSymbol".split(" "),function(a,b,h,k,l,c,f,m){var d={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dashdot",STYLE_DASHDOTDOT:"longdashdotdot",STYLE_NULL:"none",STYLE_SHORTDASH:"shortdash",STYLE_SHORTDOT:"shortdot",STYLE_SHORTDASHDOT:"shortdashdot",STYLE_SHORTDASHDOTDOT:"shortdashdotdot",STYLE_LONGDASH:"longdash",STYLE_LONGDASHDOT:"longdashdot"},
e={color:[0,0,0,1],style:d.STYLE_SOLID,width:1};a=a(m,{declaredClass:"esri.symbol.SimpleLineSymbol",type:"simplelinesymbol",_styles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot",dashdot:"esriSLSDashDot",longdashdotdot:"esriSLSDashDotDot",none:"esriSLSNull",insideframe:"esriSLSInsideFrame",shortdash:"esriSLSShortDash",shortdot:"esriSLSShortDot",shortdashdot:"esriSLSShortDashDot",shortdashdotdot:"esriSLSShortDashDotDot",longdash:"esriSLSLongDash",longdashdot:"esriSLSLongDashDot"},constructor:function(a,
c,g){a?b.isString(a)?(this.style=a,c&&(this.color=c),g&&(this.width=g)):this.style=f.valueOf(this._styles,a.style)||d.STYLE_SOLID:(b.mixin(this,e),this.color=new h(this.color),this.width=l.pt2px(this.width))},setStyle:function(a){this.style=a;return this},getStroke:function(){return this.style===d.STYLE_NULL||0===this.width?null:{color:this.color,style:this.style,width:this.width}},getFill:function(){return null},getShapeDescriptors:function(){return{defaultShape:{type:"path",path:"M -15,0 L 15,0 E"},
fill:null,stroke:this.getStroke()}},toJson:function(){return f.fixJson(b.mixin(this.inherited("toJson",arguments),{type:"esriSLS",style:this._styles[this.style]}))}});b.mixin(a,d);a.defaultProps=e;k("extend-esri")&&(b.setObject("symbol.SimpleLineSymbol",a,c),c.symbol.defaultSimpleLineSymbol=e);return a});