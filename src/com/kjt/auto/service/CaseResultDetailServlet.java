package com.kjt.auto.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.parser.Feature;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.kjt.auto.bean.CaseResultDetail;
import com.kjt.auto.dao.CaseResultDetailDao;
import com.kjt.auto.dao.impl.CaseResultDetailDaoImpl;

/**
 * Servlet implementation class CaseResultDetailServlet
 */
@WebServlet("/caseResultDetail")
public class CaseResultDetailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private CaseResultDetailDao crdDao = new CaseResultDetailDaoImpl();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CaseResultDetailServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
//		HttpSession session = request.getSession();
		String test_suite_id = request.getParameter("test_suite_id");
		Map map = new HashMap<>();
		map.put("test_suite_id", test_suite_id);
		int pageindex = 1;
		int pagesize = 100;
		int startrow = (pageindex-1)*pagesize;
		map.put("startrow", startrow);
		map.put("pagesize", pagesize);
		List<CaseResultDetail> caseResultDetails = crdDao.queryCaseResultDetailsByTestSuiteId(map);
		List<CaseResultDetail> caseResultDetailsNew = new ArrayList<>();
		for(CaseResultDetail caseResultDetail : caseResultDetails) {
			String input_params = caseResultDetail.getInput_params();
			String output_params = caseResultDetail.getOutput_params();
			String baseline_params = caseResultDetail.getBaseline_params();
			
			Feature features;
			input_params = JSON.toJSONString(JSON.parseObject(input_params), SerializerFeature.PrettyFormat);
			output_params = JSON.toJSONString(JSON.parseObject(output_params), SerializerFeature.PrettyFormat);
			baseline_params = JSON.toJSONString(JSON.parseObject(baseline_params), SerializerFeature.PrettyFormat);
			
			caseResultDetail.setInput_params(input_params);
			caseResultDetail.setBaseline_params(baseline_params);
			caseResultDetail.setOutput_params(output_params);
			caseResultDetailsNew.add(caseResultDetail);
		}
		request.setAttribute("list",caseResultDetailsNew);
		
		try {
            request.getRequestDispatcher("caseResultDetail.jsp").forward(request,
                    response);
        } catch (ServletException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
