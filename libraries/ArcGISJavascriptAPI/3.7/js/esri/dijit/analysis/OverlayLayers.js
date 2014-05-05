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
require({cache:{"url:esri/dijit/analysis/templates/OverlayLayers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_overlaylayersToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"overlayLayersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.overlayLayers}\x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"closeIcon"\x3e              \r\n                  \x3cimg data-dojo-attach-point\x3d"_closeImg" border\x3d"0"/\x3e\x3c/a\x3e            \r\n                \x3c/div\x3e\r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_overlaylayersTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_overlaylayersToolDescription"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d""\x3e${i18n.chooseOverlayLayer}\x3c/label\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin05  longInput"  style\x3d"width:125%;margin-top:10px;table-layout:fixed;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_overlayFeaturesSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" width\x3d"1%"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"OverlayLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd width\x3d"99%" colspan\x3d"2" style\x3d"white-space:nowrap;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"longTextInput"\x3e${i18n.chooseOverlayMethod}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OverlayType"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e          \r\n        \x3c/tr\x3e  \r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"width:33%" align\x3d\'center\'\x3e\r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\',checked:true" data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" data-dojo-attach-point\x3d"_intersectBtnCtr" style\x3d"width:100%" data-dojo-attach-event\x3d"onClick:_handleIntersectBtnCtrClick" \x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleIntersectBtnClick" data-dojo-attach-point\x3d"_intersectBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'intersectLayersIcon\',checked:true, style:\'width:36px;height:36px;\',label:\'intersect\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.intersect}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:33%" align\x3d\'center\'\x3e  \r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\'"  data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" data-dojo-attach-point\x3d"_unionBtnCtr" style\x3d"width:100%" data-dojo-attach-event\x3d"onClick:_handleUnionBtnCtrClick"\x3e          \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleUnionBtnClick" data-dojo-attach-point\x3d"_unionBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'unionLayersIcon\' ,   style:\'width:36px;height:36px;\',label:\'union\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.union}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"width:33%" align\x3d\'center\'\x3e\r\n            \x3cdiv class\x3d"esriContainerSelector" data-dojo-props\x3d"groupName:\'overlayType\'"  data-dojo-type\x3d"esri/dijit/analysis/AnalysisToggleButton" style\x3d"width:100%" data-dojo-attach-point\x3d"_eraseBtnCtr" data-dojo-attach-event\x3d"onClick:_handleEraseBtnCtrClick"\x3e\r\n              \x3cdiv  data-dojo-type\x3d"esri/dijit/analysis/GroupToggleButton" class\x3d"" data-dojo-attach-event\x3d"onClick:_handleEraseBtnClick" data-dojo-attach-point\x3d"_eraseBtn" data-dojo-props\x3d"groupName:\'overlayType\',showLabel:false,iconClass:\'eraseLayersIcon\',   style:\'width:36px;height:36px;\',label:\'erase\'"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel\x3e${i18n.erase}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e               \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true" class\x3d"longTextInput esriLeadingMargin05" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true" style\x3d"width:60%;height:auto"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_overlaylayersToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv style\x3d"width:100%;padding:0.5em 0 0.5em 0"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv"class\x3d"esriSelectLabel" style\x3d"font-size:smaller;"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e     \r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3cimg src\x3d\'images/close.gif\' border\x3d\'0\'/\x3e \r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/OverlayLayers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/i18n dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox esri/kernel esri/dijit/analysis/AnalysisBase esri/dijit/analysis/CreditEstimator esri/dijit/analysis/AnalysisToggleButton esri/dijit/analysis/GroupToggleButton esri/dijit/analysis/utils dojo/text!esri/dijit/analysis/templates/OverlayLayers.html".split(" "),
function(k,r,d,l,n,c,p,s,t,D,e,f,m,E,F,u,q,v,w,x,y,z,G,H,I,J,K,L,M,N,O,A,B,P,Q,R,g,C){k=r([v,w,x,y,z,B],{declaredClass:"esri.dijit.analysis.OverlayLayers",templateString:C,basePath:k.toUrl("esri/dijit/analysis"),widgetsInTemplate:!0,inputLayer:null,overlayLayer:null,overlayType:"intersect",tolerance:0,snapToInput:!1,returnFeatureCollection:!1,outputLayerName:null,showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,i18n:null,toolName:"OverlayLayers",helpFileName:"OverlayLayers",resultParameter:"Outputlayer",
constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);l.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,t.getLocalization("esri","jsapi").overlayLayersTool)},postCreate:function(){this.inherited(arguments);u.add(this._form.domNode,"esriSimpleForm");m.set(this._closeImg,"src",this.basePath+"/images/close.gif");this._outputLayerInput.set("validator",
d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:!1})},_handleSaveBtnClick:function(a){if(this._form.validate()){this._saveBtn.set("disabled",!0);a={};var b={},h;a.InputLayer=c.toJson(g.constructAnalysisInputLyrObj(this.inputLayer));"0"!==this._overlayFeaturesSelect.get("value")&&(h=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1],a.OverlayLayer=c.toJson(g.constructAnalysisInputLyrObj(h)));
a.OverlayType=this.get("overlayType");this.returnFeatureCollection||(a.OutputName=c.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.Tolerance=this.tolerance;a.SnapToInput=this.snapToInput;this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=c.toJson({extent:this.map.extent}));this.returnFeatureCollection&&(h={outSR:this.map.spatialReference},this.showChooseExtent&&(h.extent=this.map.extent),a.context=c.toJson(h));b.jobParams=a;b.itemParams={description:this.i18n.itemDescription,
tags:e.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");this.execute(b)}},_handleShowCreditsClick:function(a){a.preventDefault();a={};if(this._form.validate()){a.InputLayer=c.toJson(g.constructAnalysisInputLyrObj(this.inputLayer));if("0"!==this._overlayFeaturesSelect.get("value")){var b=this.overlayLayer[this._overlayFeaturesSelect.get("value")-
1];a.OverlayLayer=c.toJson(g.constructAnalysisInputLyrObj(b))}a.OverlayType=this.get("overlayType");this.returnFeatureCollection||(a.OutputName=c.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.Tolerance=this.tolerance;a.SnapToInput=this.snapToInput;this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.Context=c.toJson({extent:this.map.extent}));this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},
_save:function(){},_sortbyGeometryType:function(a,b){if("esriGeometryPolygon"===a.geometryType)return-1;if("esriGeometryPolygon"===b.geometryType)return 1;if("esriGeometryPolyline"===a.geometryType)return-1;if("esriGeometryPolyline"===b.geometryType)return 1;if("esriGeometryPoint"===a.geometryType)return-1;if("esriGeometryPoint"===b.geometryType)return 1},_buildUI:function(){this._loadConnections();g.initHelpLinks(this.domNode,this.showHelp);this.inputLayer&&m.set(this._overlaylayersToolDescription,
"innerHTML",e.substitute(this.i18n.overlayDefine,{layername:this.inputLayer.name}));this.overlayLayer&&(this.overlayLayer=l.filter(this.overlayLayer,function(a){if(this.inputLayer!==a&&("esriGeometryPolygon"===a.geometryType||"esriGeometryPoint"===a.geometryType||"esriGeometryPolyline"===a.geometryType))return!0},this),this.overlayLayer.sort(d.hitch(this,this._sortbyGeometryType)),this._selectedIndex=1,l.forEach(this.overlayLayer,function(a,b){this._overlayFeaturesSelect.addOption({value:b+1,label:a.name})},
this),this._handleLayerChange(1));this.overlayType&&("intersect"===this.overlayType?(this._intersectBtn.set("checked",!0),this._handleIntersectBtnClick()):"union"===this.overlayType?(this._unionBtn.set("checked",!0),this._handleUnionBtnClick()):"erase"===this.overlayType&&(this._eraseBtn.set("checked",!0),this._handleEraseBtnClick()));this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);f.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&
this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;this._webMapFolderSelect.set("store",a);this._webMapFolderSelect.set("value",this.portalUser.username)}));f.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"block":"none");f.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1))},_handleLayerChange:function(a){var b,
d,c;a=this.overlayLayer[a-1];b=!1;c=this.get("overlayType");d="esriGeometryPolygon"!==this.inputLayer.geometryType||"esriGeometryPolygon"!==a.geometryType;a&&(this._unionBtn.set("disabled",d),this._unionBtn.set("iconClass",d?"unionLayersDisabledIcon":"unionLayersIcon"),"esriGeometryPolygon"===this.inputLayer.geometryType?b="esriGeometryPolygon"===this.inputLayer.geometryType&&"esriGeometryPolygon"!==a.geometryType:"esriGeometryPolyline"===this.inputLayer.geometryType?b="esriGeometryPolyline"===this.inputLayer.geometryType&&
"esriGeometryPoint"===a.geometryType:"esriGeometryPolyline"===this.inputLayer.geometryType&&(b=!0),this._eraseBtn.set("disabled",b),this._eraseBtn.set("iconClass",b?"eraseLayersDisabledIcon":"eraseLayersIcon"),"union"===c&&("esriGeometryPolygon"!==this.inputLayer.geometryType||"esriGeometryPolygon"!==a.geometryType)?(this._showMessages(this.i18n.overlayLayerPolyMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"erase"===c&&"esriGeometryPolyline"===this.inputLayer.geometryType&&
"esriGeometryPoint"===a.geometryType?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"erase"===c&&"esriGeometryPolygon"===this.inputLayer.geometryType&&"esriGeometryPolygon"!==a.geometryType?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"intersect"===c?this._handleIntersectBtnCtrClick():"union"===c?this._handleUnionBtnCtrClick():
"erase"===c&&this._handleEraseBtnClick())},_showMessages:function(a){m.set(this._bodyNode,"innerHTML",a);p.fadeIn({node:this._errorMessagePane,easing:q.quadIn,onEnd:d.hitch(this,function(){f.set(this._errorMessagePane,{display:""})})}).play();window.setTimeout(d.hitch(this,this._handleCloseMsg),3E3)},_handleCloseMsg:function(a){a&&a.preventDefault();p.fadeOut({node:this._errorMessagePane,easing:q.quadOut,onEnd:d.hitch(this,function(){f.set(this._errorMessagePane,{display:"none"})})}).play()},_handleUnionBtnCtrClick:function(){this._unionBtnCtr.set("checked",
!0);this._unionBtn.set("checked",!0);this._handleUnionBtnClick()},_handleIntersectBtnCtrClick:function(){this._intersectBtnCtr.set("checked",!0);this._intersectBtn.set("checked",!0);this._handleIntersectBtnClick()},_handleEraseBtnCtrClick:function(){this._eraseBtnCtr.set("checked",!0);this._eraseBtn.set("checked",!0);this._handleEraseBtnClick()},_handleUnionBtnClick:function(a){a=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1].name;this._outputLayerInput.set("value",e.substitute(this.i18n.unionOutputLyrName,
{layername:this.inputLayer.name,overlayname:a}));this._unionBtn.focus();this.set("OverlayType","union")},_handleEraseBtnClick:function(a){a=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1].name;this._eraseBtn.focus();this._outputLayerInput.set("value",e.substitute(this.i18n.eraseOutputLyrName,{layername:this.inputLayer.name,overlayname:a}));this.set("OverlayType","erase")},_handleIntersectBtnClick:function(a){a=this.overlayLayer[this._overlayFeaturesSelect.get("value")-1].name;this._intersectBtn.focus();
this._outputLayerInput.set("value",e.substitute(this.i18n.intersectOutputLyrName,{layername:this.inputLayer.name,overlayname:a}));this.set("OverlayType","intersect")},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(a){this.inputLayer=a},_setOverlayLayerAttr:function(a){this.overlayLayer=a},_setOverlayTypeAttr:function(a){this.overlayType=a},_getOverlayTypeAttr:function(){return this.overlayType},
_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setMapAttr:function(a){this.map=a},_getMapAttr:function(){return this.map},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===a.length||0===e.trim(a).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this._outputLayerInput.set("invalidMessage",
this.i18n.invalidServiceName),!1):98<a.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),!1):!0},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},
_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))},onSave:function(){},onClose:function(){}});s("extend-esri")&&d.setObject("dijit.analysis.OverlayLayers",k,A);return k});