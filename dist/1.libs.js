webpackJsonp([1],{13:function(e,a,t){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function init(){var e={selectList:r.default.observableArray([{value:1,label:"北京"},{value:2,label:"上海"},{value:3,label:"天津"},{value:4,label:"附件"},{value:5,label:"超过二十个字的参照超过二十个字的参照超过二十个字的参照"},{value:6,label:"Blaskdf"}]),multiselect:r.default.observableArray(),modalVisible:r.default.observable(!1),showModal:function(){e.modalVisible(!0)},loadSelectData:function(e,a){if(e)setTimeout(function(){var t=[{value:"1",label:"ABCCEFGH"},{value:"2",label:"我们都是中国人"}],l=t.filter(function(a){return a.label.toLowerCase().indexOf(e.toLowerCase())>=0});a(l)},300);else{a([{email:"",enterpriseId:30,value:31703,moblie:"",organizationId:41,organizationName:"北京采购部",personCode:"kbczy",label:"开标操作员",suporgCode:"p01",suporgName:"1网上商城运营方",userId:889,userName:"newtest"}])}}};r.default.applyBindings(e,document.getElementById("app"))}Object.defineProperty(a,"__esModule",{value:!0});var l=t(0),r=_interopRequireDefault(l),o=t(22),i=_interopRequireDefault(o);a.default={init:init,template:i.default}},22:function(e,a){e.exports='<y-box>\n  <y-boxfilter params="title:\'下拉\'">\n  </y-boxfilter>\n  <y-boxcontent params="title: \'基本信息(支持外层容器overflow:hidden)\'">\n    <div class="row">\n    <y-form params="labelWidth: \'150px\'">\n      <div class="col-md-4">\n        <y-formitem params="label:\'输入框\'">\n          <y-input params="placeholder:\'请输入文字\'"></y-input>\n        </y-formitem>\n        <y-formitem params="label:\'下拉框\'">\n          <y-select params="dataList:$root.selectList"></y-select>\n        </y-formitem>\n        <y-formitem params="label: \'可删除\'">\n          <y-select params="dataList:$root.selectList,clearable:true"></y-select>\n        </y-formitem>\n        <y-formitem params="label: \'多选\'">\n          <y-select\n            params="dataList:$root.selectList,multiValue:$root.multiselect,clearable:true,multiple:true"></y-select>\n        </y-formitem>\n        <y-formitem params="label:\'搜索过滤\'">\n          <y-select params="dataList:$root.selectList,clearable:true,filterable:true"></y-select>\n        </y-formitem>\n        <y-formitem params="label:\'远程查询\'">\n          <y-select params="loadData: $root.loadSelectData,clearable:true,filterable:true"></y-select>\n        </y-formitem>\n        <y-formitem params="label:\'带参照\'">\n          <y-select params="hasmore:true, onmore:$root.showModal,loadData: $root.loadSelectData,clearable:true,filterable:true"></y-select>\n        </y-formitem>\n      </div>\n    </y-form>\n    <y-modal params="visible: $root.modalVisible, width:\'500px\',errormsg:\'请选择组织\',title:\'组织选择！\'">\n      <div>一个参照</div>\n    </y-modal>\n    </div>\n  </y-boxcontent>\n</y-box>\n'}});
//# sourceMappingURL=1.libs.js.map