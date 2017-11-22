package com.kjt.auto.bean;

import java.util.Date;

/**
 * @ClassName CaseResultDetail
 * @Description 单条用例执行详情
 * @author libin1@kjtpay.com.cn
 * @date 2017-11-22
 */
public class CaseResultDetail {

	private int test_suite_id;
	
	private int case_detail_id;
	
	private String case_description;
	
	private String input_params;
	
	private String output_params;
	
	private String baseline_params;
	
	private Date gmt_create;
	
	private Date gmt_update;
	
	private String case_result;



	public int getTest_suite_id() {
		return test_suite_id;
	}

	public void setTest_suite_id(int test_suite_id) {
		this.test_suite_id = test_suite_id;
	}

	public int getCase_detail_id() {
		return case_detail_id;
	}

	public void setCase_detail_id(int case_detail_id) {
		this.case_detail_id = case_detail_id;
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

	public String getCase_description() {
		return case_description;
	}

	public void setCase_description(String case_description) {
		this.case_description = case_description;
	}

	public String getInput_params() {
		return input_params;
	}

	public void setInput_params(String input_params) {
		this.input_params = input_params;
	}

	public String getOutput_params() {
		return output_params;
	}

	public void setOutput_params(String output_params) {
		this.output_params = output_params;
	}

	public String getBaseline_params() {
		return baseline_params;
	}

	public void setBaseline_params(String baseline_params) {
		this.baseline_params = baseline_params;
	}

	public String getCase_result() {
		return case_result;
	}

	public void setCase_result(String case_result) {
		this.case_result = case_result;
	}
	
	
}
