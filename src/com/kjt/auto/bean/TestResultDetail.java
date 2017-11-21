package com.kjt.auto.bean;

import java.util.Date;

/**
 * @ClassName: TestResultDetail
 * @Description: 整份测试用例执行结果
 * @author libin1@kjtpay.com.cn
 * @date 2017年9月12日 下午4:36:18 
 */
public class TestResultDetail {
	private int test_id;
	
	private String result;
	
	private int suite_result_id;
	
	private int test_suite_id;
	
	private String service_name;
	
	private String interface_name;
	
	private String environment;
	
	private String suite_result;
	
	private String test_purpose;
	
	private String operator;
	
	private int passed_cases;
	
	private int executed_cases;
	
	private int total_cases;
	
	private String passed_rate;
	
	private Date gmt_create;
	
	private Date gmt_update;
	
	private String suite_file;

	public int getSuite_result_id() {
		return suite_result_id;
	}

	public void setSuite_result_id(int suite_result_id) {
		this.suite_result_id = suite_result_id;
	}

	public String getService_name() {
		return service_name;
	}

	public void setService_name(String service_name) {
		this.service_name = service_name;
	}

	public String getInterface_name() {
		return interface_name;
	}

	public void setInterface_name(String interface_name) {
		this.interface_name = interface_name;
	}

	public String getEnvironment() {
		return environment;
	}

	public void setEnvironment(String environment) {
		this.environment = environment;
	}

	public String getSuite_result() {
		return suite_result;
	}

	public void setSuite_result(String suite_result) {
		this.suite_result = suite_result;
	}

	public int getPassed_cases() {
		return passed_cases;
	}

	public void setPassed_cases(int passed_cases) {
		this.passed_cases = passed_cases;
	}

	public int getExecuted_cases() {
		return executed_cases;
	}

	public void setExecuted_cases(int executed_cases) {
		this.executed_cases = executed_cases;
	}

	public int getTotal_cases() {
		return total_cases;
	}

	public void setTotal_cases(int total_cases) {
		this.total_cases = total_cases;
	}

	public String getPassed_rate() {
		return passed_rate;
	}

	public void setPassed_rate(String passed_rate) {
		this.passed_rate = passed_rate;
	}

	public Date getGmt_create() {
		return gmt_create;
	}

	public void setGmt_create(Date gmt_create) {
		this.gmt_create = gmt_create;
	}

	public Date getGmt_update() {
		return gmt_update;
	}

	public void setGmt_update(Date gmt_update) {
		this.gmt_update = gmt_update;
	}

	public String getSuite_file() {
		return suite_file;
	}

	public void setSuite_file(String suite_file) {
		this.suite_file = suite_file;
	}

	public int getTest_id() {
		return test_id;
	}

	public void setTest_id(int test_id) {
		this.test_id = test_id;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getTest_purpose() {
		return test_purpose;
	}

	public void setTest_purpose(String test_purpose) {
		this.test_purpose = test_purpose;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public int getTest_suite_id() {
		return test_suite_id;
	}

	public void setTest_suite_id(int test_suite_id) {
		this.test_suite_id = test_suite_id;
	}
	
	
	
}
