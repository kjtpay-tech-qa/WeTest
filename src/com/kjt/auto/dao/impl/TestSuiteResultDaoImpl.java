package com.kjt.auto.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.kjt.auto.bean.TestResultDetail;
import com.kjt.auto.dao.TestSuiteResultDao;
import com.kjt.auto.util.MyBatisUtil;
import com.kjt.auto.util.MyBatisUtil.DataSourceEnvironment;

public class TestSuiteResultDaoImpl implements TestSuiteResultDao {
	@Override
	public List<TestResultDetail> queryResultDetailsByTestPurposeAndOperator(@SuppressWarnings("rawtypes") Map map) {
		DataSourceEnvironment environment = MyBatisUtil.DataSourceEnvironment.WETEST;

		SqlSession session = null;  
        try{
            session= MyBatisUtil.getSqlSessionFactory(environment).openSession();
            String statement = "com.kjt.auto.bean.TestSuiteResultMapper.queryResultDetailsByTestPurposeAndOperator";
            List<TestResultDetail> testResultDetails = session.selectList(statement, map);
            session.commit();
            return testResultDetails;
        }catch(Exception e){
            e.printStackTrace();
            if(session != null) {
            	session.rollback();
            }
        }finally{
            if(session != null){
                session.close();
            }
        }
        return null;
	}
	

}
