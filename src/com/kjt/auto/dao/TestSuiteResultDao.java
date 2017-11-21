package com.kjt.auto.dao;

import java.util.List;
import java.util.Map;

import com.kjt.auto.bean.TestResultDetail;

public interface TestSuiteResultDao {
	List<TestResultDetail> queryResultDetailsByTestPurposeAndOperator(Map map);
	
}
