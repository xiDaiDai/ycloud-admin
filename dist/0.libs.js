webpackJsonp([0],{12:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={b:a.default.observable("i am ucloud-ko-fileupload"),id:a.default.observable("随意绑定一个id"),columns:[{title:"标题1",field:"title",width:"70%"},{title:"备注",field:"memo",width:"30%",type:"component",compFn:function(e){return{name:"y-memocomp",params:{value:e.memo}}}}],rows:a.default.observableArray([{title:"列表",memo:a.default.observable("xxxxxxxadf")},{title:1,memo:a.default.observable("北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海")}])};a.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),a=_interopRequireDefault(n),l=i(16),o=_interopRequireDefault(l);i(17),t.default={init:init,template:o.default}},16:function(e,t){e.exports='<y-box>\n  <y-boxfilter params="title:\'表格\'">\n  </y-boxfilter>\n  <y-boxcontent params="title: \'可编辑表格\'">\n    <y-grid params="columns:$root.columns,rows:$root.rows">\n\n    </y-grid>\n  </y-boxcontent>\n</y-box>\n'},17:function(e,t,i){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(e){var t=this;this.value=e.value,this.visible=a.default.observable(!0),this.handleClick=function(){t.visible(!t.visible())}}var n=i(0),a=_interopRequireDefault(n);i(18);var l=i(19),o=_interopRequireDefault(l);a.default.components.register("y-memocomp",{viewModel:init,template:o.default})},18:function(e,t){},19:function(e,t){e.exports='<div class="y-grid-memo">\n  <span class="y-grid-memo-text" style="margin:10px 0;" data-bind="text:value,visible:visible,click:handleClick"></span>\n  <div data-bind="visible:!visible()">\n    <textarea data-bind="textInput:value" name="" id="" rows="2" style="width: 100%;margin-top:10px;"></textarea>\n    <div class="text-right" style="margin-bottom: 10px;">\n      <y-button params="type:\'primary\',click:handleClick">保存</y-button>\n      <y-button params="click:handleClick">取消</y-button>\n    </div>\n  </div>\n</div>\n'}});
//# sourceMappingURL=0.libs.js.map