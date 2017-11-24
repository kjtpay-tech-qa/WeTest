package com.kjt.auto.dao;

import java.util.List;
import java.util.Map;

import com.kjt.auto.bean.TestResultDetail;

public interface TestSuiteResultDao {
	/**
	 * queryResultDetailsByTestPurposeAndOperator: 根据测试目的和执行人，查询测试结果.
	 * @author libin1@kjtpay.com.cn
	 * @param @param map
	 * @param @return 
	 * @return List<TestResultDetail>
	 */
	List<TestResultDetail> queryResultDetailsByTestPurposeAndOperator(@SuppressWarnings("rawtypes") Map map);
	
}
