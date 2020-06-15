package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;



public class DashboardPageElements extends CommonMethods{

	@FindBy(id = "welcome")
	public WebElement welcome;
	
	@FindBy(xpath = "//a[@id='menu_admin_viewAdminModule']")
	public WebElement admin;
	
	@FindBy(xpath = "//a[@id='menu_admin_Qualifications']")
	public WebElement qualification;
	
	@FindBy(xpath = "//a[@id='menu_admin_viewSkills']")
	public WebElement skills;

	@FindBy(xpath = "//a[@id='menu_pim_viewPimModule']")
	public WebElement PIM;
	
	@FindBy(xpath = "//a[@id='menu_pim_viewEmployeeList']")
	public WebElement empList;
	
	public DashboardPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}
	
	public void navigateToEmployeeList() {
		jsClick(PIM);
		jsClick(empList);
	}
	
	public void navigateToSkills() {
		jsClick(admin);
		jsClick(qualification);
		jsClick(skills);
	}
}
