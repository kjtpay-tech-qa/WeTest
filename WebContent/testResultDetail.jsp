<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page language="java"
	import="java.util.*,java.io.*,java.sql.*,javax.sql.*,javax.naming.*"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">

<title>测试结果预览</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is test page">

<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/test_result.js" charset="utf-8"></script>

<link rel="stylesheet" type="text/css" href="css/inner.css" />
<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

</head>
<body>
	<div class="main">
<!-- 		<h4>测试结果详情</h4>

		<span style="color: red;">注:....</span> -->

		<div class="recodeTable">
			<div class="content-box"></div>
			<table class="recordThead">
			</table>
			<table class="bordered">
				<thead>
					<tr>
						<th id="test_id">testId</th>
						<th id="service_name">被测服务</th>
						<th id="interface_name">接口名称</th>
						<th id="environment">测试环境</th>
						<th id="suite_result">测试结果</th>
						<!-- <th id="passed_cases">通过的用例数</th>
					<th id="executed_cases">已执行的用例数</th>
					<th id="total_cases">总用例数</th> -->
						<th id="test_purpose">测试目的</th>
						<th id="operator">测试人</th>
						<th id="passed_rate">通过率</th>
						<th id="gmt_create">开始时间</th>
						<th id="gmt_update">结束时间</th>
						<th id="suite_operation">操作</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${list}" var="cs">
						<tr>
							<td id="test_id">${cs.test_id}</td>
							<td id="service_name">${cs.service_name}</td>
							<td id="interface_name">${cs.interface_name}</td>
							<c:choose>
								<c:when test="${cs.environment.equalsIgnoreCase('zsc')}">
									<td id="environment">准生产</td>
								</c:when>
								<c:when test="${cs.environment.equalsIgnoreCase('cs1')}">
									<td id="environment">测试1</td>
								</c:when>
								<c:when test="${cs.environment.equalsIgnoreCase('cs2')}">
									<td id="environment">测试2</td>
								</c:when>
								<c:when test="${cs.environment.equalsIgnoreCase('sc')}">
									<td id="environment">生产</td>
								</c:when>
								<c:otherwise>
									<td id="environment">null</td>
								</c:otherwise>
							</c:choose>

							<td id="suite_result">${cs.suite_result}</td>
							<td id="test_purpose">${cs.test_purpose}</td>
							<td id="operator">${cs.operator}</td>
							<td id="passed_rate">${cs.passed_rate}</td>
							<td id="gmt_create"><fmt:formatDate value="${cs.gmt_create}"
									pattern="yyyy-MM-dd HH:mm:ss" /></td>
							<td id="gmt_update"><fmt:formatDate value="${cs.gmt_update}"
									pattern="yyyy-MM-dd HH:mm:ss" /></td>
							<td id="suite_operation"><a style="background-color: yellow"
								onclick="viewSuiteResult(${cs.test_suite_id});">查看详细</a></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>

		<div class="foot"></div>
	</div>
	<div>
		<img src="img/fire.png" align="middle" class="fire">
	</div>
</body>
</html>