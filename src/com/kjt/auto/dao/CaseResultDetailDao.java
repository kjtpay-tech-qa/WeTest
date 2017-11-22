package com.kjt.auto.dao;

import java.util.List;
import java.util.Map;

import com.kjt.auto.bean.CaseResultDetail;

/**
 * @ClassName CaseResultDetailDao
 * @Description TODO
 * @author libin1@kjtpay.com.cn
 * @date 2017-11-22
 */
public interface CaseResultDetailDao {

	/**
	 * queryCaseResultDetailsByTestSuiteId: 根据testSuiteId，列出整份测试用例中每条测试执行详情.
	 * @author libin1@kjtpay.com.cn
	 * @param @param map
	 * @param @return 
	 * @return List<CaseResultDetail>
	 */
	List<CaseResultDetail> queryCaseResultDetailsByTestSuiteId(Map map);
}
