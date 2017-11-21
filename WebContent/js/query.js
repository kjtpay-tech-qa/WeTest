var order_no_type=new Array("交易订单号","商户订单号","支付订单号","机构订单号");
var platform = new Array("准生产","测试","测试二","生产");
var order_type = new Array("全部","入款","出款","退款");
var status1= new Array('全部',"成功","处理中","失败");
var card_type = new Array('全部',"借记","贷记");
var bank_name=new Array("全部","中国银行",'农业银行','工商银行',"建设银行","邮储银行","交通银行","招商银行","中信银行","民生银行","光大银行","广发银行","兴业银行","平安银行","浦发银行","浙商银行","华夏银行","北京银行","上海银行","杭州银行","WECHAT","银联");
var member_type= new Array("全部","个人会员","企业会员","商户");
var verify_status= new Array('全部',"已认证","未认证","L1","L2","L3");
var status2= new Array('全部',"正常",'未激活','注销');
var status3= new Array('全部',"有效",'失效');
var lock_status= new Array('全部','未锁定','已锁定');
var target_member= new Array('全部','是','否');

var monthPatt = "^(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$";	//匹配MMDD
var datePatt = "^(20[1-9]{2})(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$";	//匹配20YYMMDD
var dateRangePatt = "^(20[1-9]{2})(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(20[1-9]{2})(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[0-1])$";	//匹配20YYMMDD20YYMMDD

var record = { 
		_pageindex:1,
		_query:"",
		_platform: "",
		_date: "",
		_order_no_type: "",
		_order_type: "",
		_amount:"",
		_card_type:"",
		_bank_name:"",
		_name:"",
		_trade_type:"",
		_fund_channel:"",
		_status: "",
		_tester: "",
		_member_id: "",
		_member_type: "",
		_member_name: "",
		_login_name: "",
		_verify_status: "",
		_identity_info: "",
		_available_balance: "",
		_lock_status: "",
		_target_member: "",
		_target_address: "",

		set query(query){this._query = query;},
		get query(){return this._query;},
		set platform(platform){this._platform = platform;},
		get platform(){return this._platform;},
		set pageindex(pageindex){this._pageindex = pageindex;},
		get pageindex(){return this._pageindex;},
		set date(date){this._date = date;},
		get date(){return this._date;},
		set order_no_type(order_no_type){this._order_no_type = order_no_type;},
		get order_no_type(){return this._order_no_type;},
		set order_type(order_type){this._order_type = order_type;},
		get order_type(){return this._order_type;},
		set amount(amount){this._amount = amount;},
		get amount(){return this._amount;},
		set card_type(card_type){this._card_type = card_type;},
		get card_type(){return this._card_type;},
		set bank_name(bank_name){this._bank_name = bank_name;},
		get bank_name(){return this._bank_name;},
		set name(name){this._name = name;},
		get name(){return this._name;},
		set trade_type(trade_type){this._trade_type = trade_type;},
		get trade_type(){return this._trade_type;},
		set fund_channel(fund_channel){this._fund_channel = fund_channel;},
		get fund_channel(){return this._fund_channel;},
		set status(status){this._status = status;},
		get status(){return this._status;},
		set tester(tester){this._tester = tester;},
		get tester(){return this._tester;},

		set member_id(member_id){this._member_id = member_id;},
		get member_id(){return this._member_id;},
		set member_type(member_type){this._member_type = member_type;},
		get member_type(){return this._member_type;},
		set member_name(member_name){this._member_name = member_name;},
		get member_name(){return this._member_name;},
		set identity_info(identity_info){this._identity_info = identity_info;},
		get identity_info(){return this._identity_info;},
		set login_name(login_name){this._login_name = login_name;},
		get login_name(){return this._login_name;},
		set available_balance(available_balance){this._available_balance = available_balance;},
		get available_balance(){return this._available_balance;},
		set verify_status(verify_status){this._verify_status = verify_status;},
		get verify_status(){return this._verify_status;},
		set lock_status(lock_status){this._lock_status = lock_status;},
		get lock_status(){return this._lock_status;},
		set target_member(target_member){this._target_member = target_member;},
		get target_member(){return this._target_member;},

		set target_address(target_address){this._target_address = target_address;},
		get target_address(){return this._target_address;}

};


window.onload = function() {
	var cooki = document.cookie;
	if (cooki != "") {
		cooki = "{\"" + cooki + "\"}";
		cooki = cooki.replace(/\s*/g, "").replace(/=/g, '":"').replace(/;/g,'","');
		var json = eval("(" + cooki + ")");
		if(typeof(json.query)=='undefined'){
			query = 'member';
		}else{
			query = json.query;
		}
		record.query = query;
		if(typeof(json.platform)=='undefined'){
			record.platform = escape('准生产');
		}else{
			record.platform = json.platform;
		}
		if(record.platform=='%u751F%u4EA7') {
			$("#tips").get(0).selectedIndex=3;
		}else if(record.platform=='%u6D4B%u8BD5%u4E8C') {
			$("#tips").get(0).selectedIndex=2;
		}else if(record.platform=='%u6D4B%u8BD5') {
			$("#tips").get(0).selectedIndex=1;
		}else {
			$("#tips").get(0).selectedIndex=0;
		}
//		tips.options[selectIndex].selected = true;;
//		document.getElementsByName("xxx")[json.radioindex].checked = true;
	}else{
		record.query = 'member';
		record.platform = '%u51C6%u751F%u4EA7';
	}
	addElement();//添加给th添加li下拉框
	changeLiPosition();//根据浏览器调整li位置
	bindClickEvent();//给li绑定点击事件
	bindCorner();
};

$(function() {
	$("#testrecord").click(function() {
		document.cookie = 'query=order';
		location.href = "/easyquery";
	});
	$("#memberinfo").click(function() {
		document.cookie = 'query=member';
		location.href = "/easyquery";
	});
	$("#messagequery").click(function() {
		document.cookie = 'query=message';
		location.href = "/easyquery";
	});
	$("#signbank").click(function() {
		document.cookie = 'query=signbank';
		location.href = "/easyquery";
	});
	$("#logo").click(function() {
		location.href = "/easyquery";
	});
	$("#notice").click(function() {
		alert('恢复银行筛选功能,地址栏参数优化');
	});
	$("#export").click(function() {
		var len = $('li').length;
		if(len<5){
			alert('短信不支持下载！');
		}else if(len<40){
			alert('签约信息不支持下载！');
		}else{
			var form=$("<form>");// 定义一个form表单
			form.attr({"style":"display:none","action":"easyquery"+window.location.search,"method":"post","target":""});
			var input=$("<input type='hidden' name='query' value='"+record.query+"'>" +
					"<input type='hidden' name='platform' value='"+record.platform+"'>" +
			"<input type='hidden' name='download' value='true'>");
			form.append(input);
			form.appendTo($("body"));
			form.submit();// 表单提交
			form.remove();
		}
	});
});

function bindCorner() {
	if ($("#pageup").length > 0) {
		$("#pageup").click(function() {
			pageto(2);
		});
		addCorner(2);
	}
	if ($("#pagedown").length > 0) {
		$("#pagedown").click(function() {
			pageto(1);
		});
		addCorner(1);
	}
}

function addCorner(index) {
	$("<div id='corner"+index+"'></div>").appendTo($(".corner"));
	var corner = $("#corner"+index);
	var switchopen=0;
	corner.mousedown(function(event){
		switchopen = index;
		changebody();
	});
	$('#record').bind({'mousemove':function(event){
		if(switchopen==1&&event.pageX>1380&&event.pageX<1880){
			corner.css({'width':1880-event.pageX,'height':1880-event.pageX});
		}else if (switchopen==2&&event.pageX>30&&event.pageX<530) {
			corner.css({'width':event.pageX-20,'height':event.pageX-20});
		}
	},'mouseleave':function(){
		corner.css({'width':30,'height':30});
	},'mouseup mouseleave':function(){
		if (switchopen==index) {
			switchopen=0;
			recoverbody();
		}
		if (corner.width()>180) {
			pageto(index);
		}
	}
	});
}

function changebody(){
	$('body').css({'-moz-user-select':'none','-webkit-user-select':'none','-ms-user-select':'none','-o-user-select':'none','user-select':'none'});
	$('#record,.corner').css("cursor","url('../img/cur3.ico'),auto");
}
function recoverbody(){
	$('body').css({'-moz-user-select':'auto','-webkit-user-select':'auto','-ms-user-select':'auto','-o-user-select':'auto','user-select':'auto'});
	$('body,#record,.corner').css("cursor","url('../img/cur1.ico'),auto");
}

var pagenum = parseInt(getParam("pageindex"))?parseInt(getParam("pageindex")):1;
function pageto(index){
	if (index==1) {
		pagenum +=1;
	}else if (index==2) {
		pagenum -=1;
	}else {
		pagenum = $('#pagetxt').val();
	}
	record.pageindex = pagenum;
	location.href = getUrl();
}

document.onkeydown = function(event_e){
	if(window.event)  
		event_e = window.event;  
	var int_keycode = event_e.charCode||event_e.keyCode;  
	if(int_keycode ==13){
		var flag = false;
		if(record.query=='member'){
			var date = document.getElementById("date").value;
			date = date.replace(/\W/g,"");
			var member_id = document.getElementById("member_id").value.trim();
			var member_name = document.getElementById("member_name").value.trim();
			var identity_info = document.getElementById("identity_info").value.trim();
			var login_name = document.getElementById("login_name").value.trim();
			var available_balance = document.getElementById("available_balance").value.trim();

			if (date!=""&&isDate(date)) {
				if (date.match(monthPatt)) {
					date = now.getFullYear()+date;
				}
				if(date.match(datePatt)) {
					date = date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8);
				}else if(date.match(dateRangePatt)){
					date = date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8)+"-"+date.substring(8,12)+"/"+date.substring(12,14)+"/"+date.substring(14,16);					
				}else {
					alert(date);
				}

				record.date = date;
				record.member_id = "";
				flag = true;
			}else if (date=="全部") {
				record.date = date;
				flag = true;
			}			
			if (member_id!=""&&!isNaN(member_id)) {
				record.date = '全部';
				record.member_name = '全部';
				record.login_name = '全部';
				record.identity_info = '全部';
				record.member_id = member_id;
				flag = true;
			}
			if (member_name!=""){
				record.date = '全部';
				record.member_id = '全部';
				record.member_name = member_name;
				flag = true;
			}
			if (identity_info!="") {
				record.date = '全部';
				record.member_id = '全部';
				record.identity_info = identity_info;
				flag = true;
			}
			if (login_name!=""){
				record.date = '全部';
				record.member_id = '全部';
				record.login_name = login_name;
				flag = true;
			}
			if (available_balance!=""){
				record.available_balance = available_balance;
				flag = true;
			}
		}else if(record.query=='message'){
//			var member_name = document.getElementById("member_name").value.trim();
			var target_address = document.getElementById("target_address").value.trim();
//			if (member_name!=""){
//			record.date = '全部';
//			record.member_id = '全部';
//			record.member_name = member_name;
//			flag = true;
//			}
			if (target_address!="") {
//				record.date = '全部';
//				record.member_id = '全部';
				record.target_address = target_address;
				flag = true;
			}
		}else if(record.query=='signbank'){
			var member_id = document.getElementById("member_id").value.trim();
			var login_name = document.getElementById("login_name").value.trim();
			var member_name = document.getElementById("member_name").value.trim();
			if (member_id!=""&&!isNaN(member_id)) {
				record.member_name = '全部';
				record.login_name = '全部';
				record.member_id = member_id;
				flag = true;
			}
			if (login_name!=""){
				record.member_name = '全部';
				record.member_id = '全部';
				record.login_name = login_name;
				flag = true;
			}
			if (member_name!=""){
				record.member_name = member_name;
				flag = true;
			}
		}else{
			var date = document.getElementById("date").value;
			date = date.replace(/\W/g,"");
			var name = document.getElementById("name").value.trim();
			var amount = document.getElementById("amount").value.trim();
			var trade_type = document.getElementById("trade_type").value;
			trade_type = trade_type.replace(/[^\u4e00-\u9fa5]/g,"");
			var fund_channel = document.getElementById("fund_channel").value.trim();
			var tester = document.getElementById("tester").value;
			tester = tester.replace(/[^\u4e00-\u9fa5]/g,"");
			if (date!=""&&isDate(date)) {
				if (date.match(monthPatt)) {
					date = now.getFullYear()+date;
				}
				if(date.match(datePatt)) {
					date = date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8);
				}else if(date.match(dateRangePatt)){
					date = date.substring(0,4)+"/"+date.substring(4,6)+"/"+date.substring(6,8)+"-"+date.substring(8,12)+"/"+date.substring(12,14)+"/"+date.substring(14,16);					
				}else {
					alert(date);
				}
				record.date = date;
				flag = true;
			}else if (date=="全部") {
				record.date = date;
				record.member_id = '全部';
				record.login_name = '全部';
				flag = true;
			}
			if (name!="") {
				record.name = name;
				flag = true;
			}
			if (amount!=""&&isAmount(amount)) {
				record.amount = amount;
				flag = true;
			}
			if (trade_type!=""&&isChinese(trade_type)) {
				record.trade_type = trade_type;
				flag = true;
			}
			if (fund_channel!="") {
				record.fund_channel = fund_channel;
				flag = true;
			}
			if (tester!=""&&isChinese(tester)) {
				record.tester = tester;
				flag = true;
			}
		}
		if(flag){
			location.href = getUrl();
		}
	}
};

function getUrl() {
	var url;
	var pageindex = record.pageindex==NaN?getParam("pageindex"):record.pageindex;
	if(record.query=='member'){
		url = "/easyquery?"+ getCondition(record.date,"date")
		+ getCondition(record.member_id,"member_id")
		+ getCondition(record.member_name,"member_name")
		+ getCondition(record.login_name,"login_name")
		+ getCondition(record.member_type,"member_type")
		+ getCondition(record.verify_status,"verify_status")
		+ getCondition(record.identity_info,"identity_info")
		+ getCondition(record.available_balance,"available_balance")
		+ getCondition(record.status,"status")
		+ getCondition(record.lock_status,"lock_status")
		+ getCondition(record.target_member,"target_member");
	}else if(record.query=='message'){
		url = "/easyquery?" + getCondition(record.target_address,"target_address");
	}else if(record.query=='signbank'){
		url = "/easyquery?"	+ getCondition(record.member_id,"member_id")
		+ getCondition(record.login_name,"login_name")
		+ getCondition(record.bank_name,"bank_name")
		+ getCondition(record.member_name,"member_name")
		+ getCondition(record.status,"status");
	}else{
		url =  "/easyquery?"+ getCondition(record.date,"date")
		+ getCondition(record.order_no_type,"order_no_type")
		+ getCondition(record.order_type,"order_type")
		+ getCondition(record.amount,"amount")
		+ getCondition(record.card_type,"card_type")
		+ getCondition(record.bank_name,"bank_name")
		+ getCondition(record.name,"name")
		+ getCondition(record.trade_type,"trade_type")
		+ getCondition(record.fund_channel,"fund_channel")
		+ getCondition(record.status,"status")
		+ getCondition(record.tester,"tester");
	}
	if (pageindex == 1) {
		url = url.substring(0,url.length-1);
	}else {
		url = url+'pageindex='+pageindex;
	}
	return url;
}

function getCondition(str,param){
	if (str=='') {
		str = getParam(param);
		if (str=='') {
			return '';
		}else{
			return param+'='+ encode(str)+'&';
		}
	}else {
		return param+'='+str+'&';
	}
}

function getParam(param){
	var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null){
		return unescape(r[2]);
	}else {
		return "";
	}
}

function encode(str) {
	if (getBrowser()!='IE') {
		str = escape(str);
	}
	return str;
}

var now = new Date;
var getdate = function(n) {
	now.setDate(now.getDate() - n);
	return now.getFullYear() + "/" + (now.getMonth()>8?(now.getMonth()+1):"0"+(now.getMonth() + 1)) + "/"
	+ (now.getDate() > 9 ? now.getDate() : "0" + now.getDate());
};

function isDate(str) {
	if(!isNaN(str)) {
		if(str.match(monthPatt)){
			if (str.substring(0, 2) > 12) {
				alert("月份不能大于12,请核对!");
				return false;
			}else if (str.substring(2, 4) > 31) {
				alert("日期不能大于31,请核对!");
				return false;
			}else {
				return true;
			}

		}else if(str.match(datePatt)){
			alert("datePatt");
			if (str.substring(4, 6) > 12) {
				alert("月份不能大于12,请核对!");
				return false;
			}else if (str.substring(6, 8) > 31) {
				alert("日期不能大于31,请核对!");
				return false;
			}else {
				return true;
			}

		}else if(str.match(dateRangePatt)) {
			begainStr = str.substring(0,8);
			endStr = str.substring(8,16);
			reg = new RegExp(datePatt);
			if(!reg.test(begainStr) | !reg.test(endStr)) {
				alert("日期范围格式YYYYMMDDYYYYMMDD(如：2017010120170131)");
				return false;
			}else {
				return true;
			}

		}else{			
			alert("请输入正确的日期格式：\n YYYYMMDD(年月日，如：20170101)\n MMDD(月日，如：1205)\n YYYYMMDDYYYYMMDD(日期范围，如：2017010120170131)");
			return false;
		}
	}else {
		alert("请输入正确的日期格式：\n YYYYMMDD(年月日，如：20170101)\n MMDD(月日，如：1205)\n YYYYMMDDYYYYMMDD(日期范围，如：2017010120170131)");
		return false;
	}
}
function isAmount(str){
	if(!isNaN(str))
		if (str.length<13) {
			return true;
		}else{
			alert("输入的金额有误，请重新输入");
			return false;
		}
	return false;
}
function isChinese(str){
	var re=/[\u4e00-\u9fa5]/g;
	if (re.test(str)){
		return true ;
	}else {
		alert("请输入中文");
		return false ;
	}
}

function addElement(){
	var _date,_order_no_type,_platform,_order_type,_amount,_card_type,_bank_name,_name,_trade_type,_fund_channel,_status,_tester,
	_member_id,_member_type,_member_name,_login_name,_verify_status,_identity_info,_available_balance,_lock_status,_target_member, _target_address;
	if (record.query=="member"){
		_date = $("<ul/>").appendTo($("thead .member1"));
		_platform = $("<ul/>").appendTo($("thead .member3"));
		_member_id = $("<ul/>").appendTo($("thead .member4"));
		_member_name = $("<ul/>").appendTo($("thead .member5"));
		_login_name = $("<ul/>").appendTo($("thead .member6"));
		_member_type = $("<ul/>").appendTo($("thead .member7"));
		_verify_status = $("<ul/>").appendTo($("thead .member8"));
		_identity_info = $("<ul/>").appendTo($("thead .member9"));
		_available_balance = $("<ul/>").appendTo($("thead .member10"));
		_status = $("<ul/>").appendTo($("thead .member11"));
		_lock_status = $("<ul/>").appendTo($("thead .member12"));
		_target_member = $("<ul/>").appendTo($("thead .member13"));

		$("<li>"+getdate(0).substring(5)+"</li>").appendTo(_date);
		for (var x = 0; x <6; x++) {
			$("<li>"+getdate(1).substring(5)+"</li>").appendTo(_date);
		}
		$("<li>全部</li><li><input id='date'></li>").appendTo(_date);
		addLi(verify_status,_verify_status);
		addLi(member_type,_member_type);
		addLi(lock_status,_lock_status);
		addLi(status2,_status);
		addLi(target_member,_target_member);
		$("<li>全部</li><li><input id='member_id'></li>").appendTo(_member_id);
		$("<li>全部</li><li><input id='member_name'></li>").appendTo(_member_name);
		$("<li>全部</li><li><input id='identity_info'></li>").appendTo(_identity_info);
		$("<li>全部</li><li><input id='login_name'></li>").appendTo(_login_name);
		$("<li>全部</li><li><input id='available_balance'placeholder='    大于'></li>").appendTo(_available_balance);
		$('#memberinfo').css({'border-bottom':'2px solid #38f','font-weight':'bold','color':'#323232'});
	}else if (record.query=="message") {
		_target_address = $("<ul/>").appendTo($("thead .message3"));
		_platform = $("<ul/>").appendTo($("thead .message5"));

		$("<li>全部</li><li><input id='target_address'></li>").appendTo(_target_address);

		$('#messagequery').css({'border-bottom':'2px solid #38f','font-weight':'bold','color':'#323232'});
	}else if (record.query=="signbank") {
		_member_id = $("<ul/>").appendTo($("thead .signbank3"));
		_login_name = $("<ul/>").appendTo($("thead .signbank4"));
		_bank_name = $("<ul/>").appendTo($("thead .signbank5"));
		_member_name = $("<ul/>").appendTo($("thead .signbank6"));
		_platform = $("<ul/>").appendTo($("thead .signbank9"));
		_status = $("<ul/>").appendTo($("thead .signbank11"));
		addLi(bank_name,_bank_name);
		addLi(status3,_status);
		$("<li>全部</li><li><input id='member_id'></li>").appendTo(_member_id);
		$("<li>全部</li><li><input id='login_name'></li>").appendTo(_login_name);
		$("<li>全部</li><li><input id='member_name'></li>").appendTo(_member_name);
		$('#signbank').css({'border-bottom':'2px solid #38f','font-weight':'bold','color':'#323232'});
	}else{
		_date = $("<ul/>").appendTo($("thead .order1"));
		_platform = $("<ul/>").appendTo($("thead .order4"));
		_order_no_type = $("<ul/>").appendTo($("thead .order2"));
		_order_type = $("<ul/>").appendTo($("thead .order5"));
		_amount = $("<ul/>").appendTo($("thead .order6"));
		_card_type = $("<ul/>").appendTo($("thead .order7"));
		_bank_name = $("<ul/>").appendTo($("thead .order8"));
		_name = $("<ul/>").appendTo($("thead .order9"));
		_trade_type = $("<ul/>").appendTo($("thead .order11"));
		_fund_channel = $("<ul/>").appendTo($("thead .order12"));
		_status = $("<ul/>").appendTo($("thead .order13"));
		_tester = $("<ul/>").appendTo($("thead .order14"));

		$("<li>"+getdate(0).substring(5)+"</li>").appendTo(_date);
		for (var x = 0; x <6; x++) {
			$("<li>"+getdate(1).substring(5)+"</li>").appendTo(_date);
		}
		$("<li>全部</li><li><input id='date'></li>").appendTo(_date);
		addLi(order_no_type,_order_no_type);
		addLi(order_type,_order_type);
		addLi(status1,_status);
		addLi(card_type,_card_type);
		addLi(bank_name,_bank_name);
		$("<li>全部</li><li><input id='name'></li>").appendTo(_name);
		$("<li>全部</li><li><input id='amount'placeholder='   大于'></li>").appendTo(_amount);
		$("<li>全部</li><li><input id='trade_type'></li>").appendTo(_trade_type);
		$("<li>全部</li><li><input id='fund_channel'></li>").appendTo(_fund_channel);
		$("<li>全部</li><li><input id='tester'></li>").appendTo(_tester);
		$('#testrecord').css({'border-bottom':'2px solid #38f','font-weight':'bold','color':'#666'});
	}
	for (var x = 0; x <4; x++) {
		$("<li>"+platform[x]+"</li>").appendTo(_platform);
	}
}

function addLi(arr,str){
	for(var x=0;x<arr.length;x++)
		$("<li>"+arr[x]+"</li>").appendTo(str);
}

function changeLiPosition(){
	if (record.query=='member') {
		for (var i = 0; i < 14; i++) {
			$('.member'+i+' ul').width($(".member"+i).width()-2);
		}
		if (getBrowser()=='Chrome') {
			$('.member3 ul').css("margin-left","0.5px");
			$('.member1 ul,.member4 ul,.member5 ul,.member6 ul,.member7 ul,.member8 ul,.member9 ul,.member10 ul,.member11 ul,.member12 ul').css("margin-left","1px");
		}else if(getBrowser()=='Firefox'){
			$('.member1 ul,.member2 ul,.member3 ul,.member5 ul').css("margin-left","2px");
			$('.member4 ul').css("margin-left","3px");
			$('.member5 ul').css("margin-left","2.5px");
			$('.member6 ul').css("margin-left","0.5px");
			$('.member7 ul').css("margin-left","-2px");
			$('.member8 ul,.member9 ul').css("margin-left","-1px");
		}
	}else if(record.query=='message'){
		for (var i = 0; i < 7; i++) {
			$('.message'+i+' ul').width($(".message"+i).width()-2);
		}
		if (getBrowser()=='Chrome') {
			$('.message3 ul').css("margin-left","2px");
		}else if(getBrowser()=='Firefox'){
			$('.message3 ul').css("margin-left","2px");
		}
	}else if(record.query=='signbank'){
		for (var i = 0; i < 12; i++) {
			$('.signbank'+i+' ul').width($(".signbank"+i).width()-1);
		}
		if (getBrowser()=='Chrome') {
			$('.signbank3 ul,.signbank4 ul,.signbank5 ul,.signbank6 ul').css("margin-left","1px");
		}else if(getBrowser()=='Firefox'){
			$('.signbank3 ul,.signbank4 ul,.signbank5 ul,.signbank6 ul').css("margin-left","1px");
			$('.signbank4 ul').width($('.signbank4 ul').width()-1);
		}
	}else {
		for (var i = 0; i < 18; i++) {
			$('.order'+i+' ul').width($(".order"+i).width()-2);
		}
		if (getBrowser()=='Chrome') {
			$('.order1 ul,.order2 ul,.order4 ul,.order5 ul,.order6 ul,.order9 ul,.order12 ul,.order13 ul,.order14 ul').css("margin-left","2px");
			$('.order7 ul,.order8 ul,.order11 ul').css("margin-left","3px");
		}else if(getBrowser()=='Firefox'){
			$('.order1 ul,.order2 ul,.order9 ul').css("margin-left","2px");
			$('.order4 ul').css("margin-left","-1px");
			$('.order11 ul').css("margin-left","3px");
			$('.order12 ul').css("margin-left","1.2px");
		}
	}
}
function bindClickEvent(){
	var i,li = $('li');
	if(record.query=='member'){
		i = addClickEvent2(li,'date',7);
		i = addClickEvent(li,'date',i);
		i = addClickEvent1(li,'platform',platform,i);
		i = addClickEvent(li,'member_id',i);
		i = addClickEvent(li,'member_name',i);
		i = addClickEvent(li,'login_name',i);
		i = addClickEvent1(li,'member_type',member_type,i);
		i = addClickEvent1(li,'verify_status',verify_status,i);
		i = addClickEvent(li,'identity_info',i);
		i = addClickEvent(li,'available_balance',i);
		i = addClickEvent1(li,'status',status2,i);
		i = addClickEvent1(li,'lock_status',lock_status,i);
		i = addClickEvent1(li,'target_member',target_member,i);
	}else if(record.query=='message'){

		i = addClickEvent(li,'target_address',0);
		i = addClickEvent1(li,'platform',platform,i);

	}else if(record.query=='signbank'){
		i = addClickEvent(li,'member_id',0);
		i = addClickEvent(li,'login_name',i);
		i = addClickEvent1(li,'bank_name',bank_name,i);
		i = addClickEvent(li,'member_name',i);
		i = addClickEvent1(li,'platform',platform,i);
		i = addClickEvent1(li,'status',status3,i);
	}else{
		i = addClickEvent2(li,'date',7);
		i = addClickEvent(li,'date',i);
		i = addClickEvent1(li,'order_no_type',order_no_type,i);
		i = addClickEvent1(li,'platform',platform,i);
		i = addClickEvent1(li,'order_type',order_type,i);
		i = addClickEvent(li,'amount',i);
		i = addClickEvent1(li,'card_type',card_type,i);
		i = addClickEvent1(li,'bank_name',bank_name,i);
		i = addClickEvent(li,'name',i);
		i = addClickEvent(li,'trade_type',i);
		i = addClickEvent(li,'fund_channel',i);
		i = addClickEvent1(li,'status',status1,i);
		i = addClickEvent(li,'tester',i);
	}
}

function addClickEvent(li,str,index){
	li[index].onclick = function(){
		skip(str,'全部');
	};
	return index+=2;
}

function addClickEvent1(li,str,arr,index){
	for (var i = 0; i <arr.length; i++) {
		(function(x){
			li[x+index].onclick = function(){
				skip(str,arr[x]);
			};})(i);
	}
	return index+=arr.length;
}

function addClickEvent2(li,str,length){
	for (var i = 0; i < length; i++) {
		(function(x){
			li[x].onclick = function(){
				skip(str,getdate(x-length + 1));
			};})(i);
	}
	return length;
}

function skip(str,arr){
	if(str=='date'){
		record.date = arr;
	}else if(str=='order_no_type'){
		record.pageindex = pagenum;
		record.order_no_type = arr;
	}else if(str=='platform'){
		record.platform = arr;
		document.cookie = 'platform='+escape(arr);
	}else if(str=='order_type')
		record.order_type = arr;
	else if(str=='amount')
		record.amount = arr;
	else if(str=='card_type')
		record.card_type = arr;
	else if(str=='bank_name')
		record.bank_name = arr;
	else if(str=='name')
		record.name = arr;
	else if(str=='trade_type')
		record.trade_type = arr;
	else if(str=='fund_channel')
		record.fund_channel = arr;
	else if(str=='status')
		record.status = arr;
	else if(str=='tester')
		record.tester = arr;
	else if(str=='member_id')
		record.member_id = arr;
	else if(str=='member_type')
		record.member_type = arr;
	else if(str=='member_name')
		record.member_name = arr;
	else if(str=='identity_info')
		record.identity_info = arr;
	else if(str=='login_name')
		record.login_name = arr;
	else if(str=='verify_status')
		record.verify_status = arr;
	else if(str=='available_balance')
		record.available_balance = arr;
	else if(str=='lock_status')
		record.lock_status = arr;
	else if(str=='target_member')
		record.target_member = arr;
	else if(str=='target_address') {

		record.target_address = arr;
	}

	location.href = getUrl();
}

function getBrowser(){ 
	var agent = navigator.userAgent.toLowerCase(); 
	var Browser =""; 
	if(agent.indexOf("msie") > 0){Browser="IE";} 
	else if(agent.indexOf("firefox") > 0){Browser="Firefox";} 
	else if(agent.indexOf("chrome") > 0){Browser="Chrome";}
	else if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0){Browser="Safari";} 
	else if(agent.indexOf("opera")>=0){Browser="Opera";}else{
		if (navigator.appName=="Netscape") {
			Browser="IE";
		}
	} 
	return Browser; 
} 
