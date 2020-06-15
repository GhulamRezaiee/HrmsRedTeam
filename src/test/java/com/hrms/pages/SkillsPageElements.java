package com.hrms.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.utils.CommonMethods;

public class SkillsPageElements extends CommonMethods {
	
	@FindBy(id = "btnAdd")
	public WebElement addBtn;
	
	@FindBy(id = "skill_name")
	public WebElement skillName;
	
	@FindBy(id = "skill_description")
	public WebElement skillDescription;
	
	@FindBy(id = "btnSave")
	public WebElement saveBtn;
	
	@FindBy(xpath = "//td[@class='tdName tdValue']")
	public List<WebElement> skillNameList;
	
	public SkillsPageElements() {
		PageFactory.initElements(BaseClass.driver, this);
	}

}
