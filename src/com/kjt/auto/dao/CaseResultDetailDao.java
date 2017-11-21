package com.kjt.auto.dao;

import java.util.List;
import java.util.Map;

import com.kjt.auto.bean.CaseResultDetail;

public interface CaseResultDetailDao {

	List<CaseResultDetail> queryCaseResultDetailsByTestSuiteId(Map map);
}
