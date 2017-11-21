package com.kjt.auto.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@RequestMapping(value = "")
public class WeTestController {

	@ResponseBody
	@RequestMapping( value = "recordTable.do", method = RequestMethod.GET)
    public String recordTable() {
		

		
        return "请求参数填写出错或必填参数未填写";
    }
	
	@RequestMapping(value = "upload.do", method = RequestMethod.POST, produces="text/html;charset=UTF-8")
	@ResponseBody
	public void upload(MultipartFile file) throws IOException {

		File f = new File(file.getName());
		if (!f.exists()) {
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(f));
			stream.write(file.getBytes());
			stream.flush();
			stream.close();
			
		}else {
			
		}
		
	}
}
