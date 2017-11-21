
package com.kjt.auto.util;

import java.util.Properties;

import org.apache.log4j.PropertyConfigurator;


/**
 * @note 日志生成配置管理器
 * @author libin11247
 * @date 2017年4月17日
 */
public class LogConfiguration {
	/**初始化日志配置文件*/
	public static void initLog(){
		
		PropertyConfigurator.configure(LogConfiguration.class.getResource("../resources/log4j.properties"));
		
/*		Properties properties=new Properties();
		
		properties.setProperty("log4j.rootLogger", "info,console,E");
		properties.setProperty("log4j.appender.file.encoding", "UTF-8");
		properties.setProperty("log4j.appender.console", "org.apache.log4j.ConsoleAppender");
		properties.setProperty("log4j.appender.console.layout", "org.apache.log4j.PatternLayout");
		properties.setProperty("log4j.appender.console.layout.ConversionPattern", "%d{yyyy-MM-dd HH:mm:ss} %p: %l %m %n");
		
		properties.setProperty("log4j.appender.stdout", "org.apache.log4j.ConsoleAppender");
		properties.setProperty("log4j.appender.stdout.layout", "org.apache.log4j.PatternLayout");
		
		properties.setProperty("log4j.logger.com.ibatis","info");
		properties.setProperty("log4j.logger.com.ibatis.common.jdbc.SimpleDataSource","info");
		properties.setProperty("log4j.logger.com.ibatis.common.jdbc.ScriptRunner","info");
		properties.setProperty("log4j.logger.com.ibatis.sqlmap.engine.impl.SqlMapClientDelegate","info");
		properties.setProperty("log4j.logger.java.sql.Connection","info");
		properties.setProperty("log4j.logger.java.sql.Statement","info");
		properties.setProperty("log4j.logger.java.sql.PreparedStatement","info,stdout");
		
		properties.setProperty("catalina.org.apache.juli.FileHandler.level", "WARNING");
		properties.setProperty("catalina.org.apache.juli.FileHandler.directory", "${catalina.home}/logs");
		properties.setProperty("catalina.org.apache.juli.FileHandler.prefix", "catalina.");
		
		
		//日志输出路径
//		String logPath="${catalina.home}/logs/"+"easyquery_"+DateFormat.getCurrentTime("yyyy-MM-dd")+".log";
		String logPath="${catalina.home}/logs/"+"easyquery.log";
		properties.setProperty("log4j.appender.E", "org.apache.log4j.FileAppender");
		properties.setProperty("log4j.appender.E.file", logPath);
		properties.setProperty("log4j.appender.E.file.DatePattern", "'.'yyyy-MM-dd''");
		properties.setProperty("log4j.appender.E.layout", "org.apache.log4j.PatternLayout");
		properties.setProperty("log4j.appender.E.layout.ConversionPattern", "%d{yyyy-MM-dd HH:mm:ss} %p: %l %m %n");
		
		*//**使配置生效，读取java的配置文件*//*
		PropertyConfigurator.configure(properties);*/
		
	}

}
