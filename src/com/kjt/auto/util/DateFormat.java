
package com.kjt.auto.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * @author lsh
 * @description: 日期时间操作管理
 * */
public class DateFormat {	
	private static final Logger logger = LoggerFactory.getLogger(DateFormat.class.getName());
	
	/**
	 * @description 获取当前系统时间
	 * @param String format:时间格式
	 * <BR/> yyyy-MM-dd
	 * <BR/> yyyy/MM/dd
	 * <BR/> yyyy-MM-dd HH:mm:ss
	 * <BR/> yyyy-MM-dd HH:mm:ss:SSS  
	 * */
	public static String getCurrentTime(String format){
		
		//设置时间格式
		SimpleDateFormat simpleDateFormat=new SimpleDateFormat(format);
		//按指定格式获取当前系统日期
		String date=simpleDateFormat.format(new Date()).toString();
		
		return date;
		
	}
	
	/**计算两个时间差，精确到毫秒,第一个参数减第二个参数
	 * @param beforeTime 开始时间
	 * @param afterTime 结束时间
	 * */
	public static String timeDifference(String beforeTime,String afterTime){
		String differenceInfo=null;
		long difference=0;
		SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss:SSS");
		
		
		try {
			
			Date begin=simpleDateFormat.parse(beforeTime);
			Date end=simpleDateFormat.parse(afterTime);
			difference=(end.getTime()-begin.getTime());
			
			long day = difference / (24 * 60 * 60 * 1000);
			long hour = (difference / (60 * 60 * 1000) - day * 24);
			long min = ((difference / (60 * 1000)) - day * 24 * 60 - hour * 60);
			long s = (difference / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
			long ms = (difference - day * 24 * 60 * 60 * 1000 - hour * 60 * 60 * 1000- min * 60 * 1000 - s * 1000);
			
			if(day>0){
				//log.info(day + "天" + hour + "小时" + min + "分" + s + "秒" + ms+ "毫秒");
				differenceInfo= day + "天" + hour + "小时" + min + "分" + s + "秒" + ms+ "毫秒";
			}else if(hour>0 && day<1){
				//log.info(hour + "小时" + min + "分" + s + "秒" + ms+ "毫秒");
				differenceInfo=  hour + "小时" + min + "分" + s + "秒" + ms+ "毫秒";
			}else if(min>0 && hour<1 ){
				//log.info(min + "分" + s + "秒" + ms+ "毫秒");
				differenceInfo=  min + "分" + s + "秒" + ms+ "毫秒";
			}else if(s>0 && min<1 ){
				//log.info(s + "秒" + ms+ "毫秒");
				differenceInfo= s + "秒" + ms+ "毫秒";
			}else if(ms>0 && s<1){
				//log.info(ms+ "毫秒");
				differenceInfo=  ms+ "毫秒";
			}
			
			
			
		} catch (ParseException e) {
			
			logger.error("ParseException",e);
			e.printStackTrace();
			
		}
		
			return differenceInfo;	
		
	}
	


	
	/**
	 * @description 日期转String类型
	 * @param date
	 * @param format
	 * @return String
	 */
	public static String Date2String(Date date, String format) {
		SimpleDateFormat formatDate = null;
	
		formatDate = new SimpleDateFormat(format);
		
		return formatDate.format(date);
	}
	
	/**
	 * @description 日期转Date类型
	 * @param str
	 * @param format
	 * @return Date
	 */
	public static Date String2Date(String str, String format) {
		Date date = null;
		
		SimpleDateFormat sdf = new SimpleDateFormat(format,Locale.CHINA);
		try {
			date = sdf.parse(str.trim());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
		
		return date;
	}
	
	
	
	
}
