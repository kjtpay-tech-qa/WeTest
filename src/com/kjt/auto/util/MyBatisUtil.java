package com.kjt.auto.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MyBatisUtil {
	public MyBatisUtil() {
		LogConfiguration.initLog();
	}
	private static final Logger logger = LoggerFactory.getLogger(MyBatisUtil.class);
	
	private static final String CONFIGURATION_PATH = "conf.xml";  
    
    private static final Map<DataSourceEnvironment, SqlSessionFactory> SQLSESSIONFACTORYS   
        = new HashMap<DataSourceEnvironment, SqlSessionFactory>();  
      
    /** 
     * 根据指定的DataSourceEnvironment获取对应的SqlSessionFactory 
     * @param environment 数据源environment 
     * @return SqlSessionFactory 
     */  
    public static SqlSessionFactory getSqlSessionFactory(DataSourceEnvironment environment) {  
          
        SqlSessionFactory sqlSessionFactory = null;
        sqlSessionFactory = SQLSESSIONFACTORYS.get(environment);
        if (sqlSessionFactory != null)
            return sqlSessionFactory;
        else {  
            InputStream inputStream = null;  
            try {
                inputStream = Resources.getResourceAsStream(CONFIGURATION_PATH);  
                sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream, environment.name());  
                 
                logger.info("Get {} SqlSessionFactory successfully.", environment.name());  
            } catch (IOException e) {  
                logger.warn("Get {} SqlSessionFactory error.", environment.name());  
                logger.error(e.getMessage(), e);  
            }
//            finally {  
//                IOUtils.closeQuietly(inputStream);  
//            }
              
            SQLSESSIONFACTORYS.put(environment, sqlSessionFactory);  
            return sqlSessionFactory;  
        }  
    }  
      
    /** 
     * 配置到Configuration.xml文件中的数据源的environment的枚举描述 
     * @author boyce 
     * @version 2014-3-27 
     */  
    public static enum DataSourceEnvironment {
        SC,
        ZSC,
        CS,
        CS2,
    	WETEST;
    } 
	
/*	public static SqlSessionFactory getFactory(){
        String resource = "conf.xml";
        //读取配置文件，使用反射机制来封装
        InputStream is = MyBatisUtil.class.getClassLoader().getResourceAsStream(resource);
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(is);
        return factory;
    }*/
	
	
	
}
