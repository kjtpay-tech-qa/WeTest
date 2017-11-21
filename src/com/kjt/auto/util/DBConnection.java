package com.kjt.auto.util;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @note 数据库连接统一封装
 * @author libin11247
 * @date 2017年4月6日
 */
public class DBConnection {
	private Connection connnection = null;
	
	private static final Logger logger = LoggerFactory.getLogger(DBConnection.class);
    private PreparedStatement preparedStatement = null;
    private CallableStatement callableStatement = null;
    private ResultSet resultSet = null;
	private Context envContext;
	private DataSource ds;
	
	private Connection getConnection(String platform) {
		if ("测试".equals(platform)) {
			platform = "cs";
		}else if("测试二".equals(platform)) {
			platform = "cs2";
		}else if ("生产".equals(platform)) {
			platform = "sc";
		}else {
			platform = "zsc";
		}
		
		try {
 			envContext = (Context) new InitialContext().lookup("java:/comp/env");
			ds = (DataSource) envContext.lookup("jdbc/"+platform);
			connnection = ds.getConnection();
		} catch (Exception e) {
			logger.error("sql连接异常！",e);
			e.printStackTrace();
		}
		return connnection;
	}
	
	private ResultSet executeQueryRS(String sql, String platform) {
        try {
            // 获得连接 
            connnection = this.getConnection(platform);
            connnection.setAutoCommit(true);
            // 调用SQL
            preparedStatement = connnection.prepareStatement(sql);
            // 执行
            resultSet = preparedStatement.executeQuery();

            connnection.commit();
        } catch (SQLException e) {
        	logger.error("sql异常！", e);
        	e.printStackTrace();
        }
    
        return resultSet;
    }    
	
	
	private void closeAll() {
        // 关闭结果集对象
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException e) {
            	logger.error("关闭结果集异常！", e);
            }
        }
    
        // 关闭PreparedStatement对象    
        if (preparedStatement != null) {
            try {
                preparedStatement.close();
            } catch (SQLException e) {
            	logger.error("关闭PreparedStatement异常！", e);
            }
        }
            
        // 关闭CallableStatement 对象    
        if (callableStatement != null) {
            try {
                callableStatement.close();
            } catch (SQLException e) {
            	logger.error("关闭CallableStatement异常！", e);
            }
        }
    
        // 关闭Connection 对象
        if (connnection != null) {
            try {
                connnection.close();
            } catch (SQLException e) {
            	logger.error("关闭Connection异常！", e);
            }
        }
    }

}
