package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.utils.CommonMethods;

public class ViewEmployeePageElements {
	
	@FindBy (id = "empsearch_id")
	public WebElement empID;
	
	@FindBy(id = "searchBtn")
	public  WebElement searchBtn;
	
	@FindBy(xpath = "//table[@id='resultTable']/tbody/tr/td[2]/a")
	public WebElement searchedID;
	
	@FindBy(xpath = "//ul[@id='sidenav']/li[10]/a")
	public WebElement sideNavQualification;
	
	public ViewEmployeePageElements(){
		PageFactory.initElements(CommonMethods.driver, this);
	}
	
}
