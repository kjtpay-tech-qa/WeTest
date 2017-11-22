<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*,java.io.*,java.sql.*,javax.sql.*,javax.naming.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
request.setAttribute("vEnter", "\n");
request.setAttribute("vLessThan", "<");
request.setAttribute("vGreaterThan", ">");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>执行结果详情</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is test page">
	
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/test_result.js" charset="utf-8"></script>
	
	<link rel="stylesheet" type="text/css" href="css/inner.css" />
	<link rel="icon" href="favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
	
  </head>
  <body>
 	<div class="main">
  <!--   <h4>测试结果详情</h4>
    
    <span style="color: red;">注:....</span> -->

	<div class="recodeTable">
		<div class="content-box"></div>
		<table class="recordThead">
		</table>
		<table class="bordered">
			<thead>
				<tr>
					<th id="test_suite_id">testSuiteId</th>
					<th id="case_description">用例描述</th>
					<th id="input_params">接口入参</th>
					<th id="baseline_params">预期返回</th>
					<th id="output_params">实际返回</th>
					<th id="case_result">执行结果</th>
					<th id="gmt_update">测试时间</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${list}" var="cs">
					<tr>
						<td id="test_suite_id">${cs.test_suite_id}</td>
						<td id="case_description">${cs.case_description}</td>
						<td id="input_params">${fn:replace(cs.input_params,vEnter,"<BR />")}</td>
						<td id="baseline_params">
							${fn:replace(fn:replace(fn:replace(cs.baseline_params,vLessThan,"&lt;"),vGreaterThan,"&gt;"),vEnter,"<BR />")}
						</td>
						<td id="output_params">
							${fn:replace(fn:replace(fn:replace(cs.output_params,vLessThan,"&lt;"),vGreaterThan,"&gt;"),vEnter,"<BR />")}
						</td>
						<td id="case_result">${cs.case_result}</td>
						<td id="gmt_update"><fmt:formatDate value="${cs.gmt_update}"
								pattern="yyyy-MM-dd HH:mm:ss" /></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>

	<div class="foot"></div>
	</div>
		<div><img src="img/fire.png" align="middle" class="fire">
    </div>
</body>
</html>