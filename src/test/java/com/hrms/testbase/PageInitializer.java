package com.hrms.testbase;

import com.hrms.pages.DashboardPageElements;
import com.hrms.pages.LoginPageElements;
import com.hrms.pages.QualificationsPageElements;
import com.hrms.pages.SkillsPageElements;
import com.hrms.pages.ViewEmployeePageElements;

//initializes all pages class and stores references in static varibales
//that will called/used in test classes
public class PageInitializer extends BaseClass{

	public static QualificationsPageElements qualification;
	public static LoginPageElements login;
	public static DashboardPageElements dashboard;
	public static ViewEmployeePageElements viewEmp;
	public static SkillsPageElements skill;
	
	
	
	public static void initialize() {
		qualification = new QualificationsPageElements();
		login = new LoginPageElements();
		dashboard = new DashboardPageElements();
		viewEmp = new ViewEmployeePageElements();
		skill = new SkillsPageElements();
	}
}