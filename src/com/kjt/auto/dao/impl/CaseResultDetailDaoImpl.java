package com.kjt.auto.dao.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.kjt.auto.bean.CaseResultDetail;
import com.kjt.auto.dao.CaseResultDetailDao;
import com.kjt.auto.util.MyBatisUtil;
import com.kjt.auto.util.MyBatisUtil.DataSourceEnvironment;

public class CaseResultDetailDaoImpl implements CaseResultDetailDao {

	@Override
	public List<CaseResultDetail> queryCaseResultDetailsByTestSuiteId(Map map) {
		DataSourceEnvironment environment = MyBatisUtil.DataSourceEnvironment.WETEST;

		SqlSession session = null;  
        try{
            session= MyBatisUtil.getSqlSessionFactory(environment).openSession();
            String statement = "com.kjt.auto.bean.CaseResultDetailMapper.queryCaseResultDetailsByTestSuiteId";
            List<CaseResultDetail> caseResultDetails = session.selectList(statement, map);
            session.commit();
            return caseResultDetails;
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
