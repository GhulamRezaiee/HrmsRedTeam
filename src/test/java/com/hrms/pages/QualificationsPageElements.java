package com.hrms.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.utils.CommonMethods;

public class QualificationsPageElements {
	
	@FindBy(id = "addSkill")
	public WebElement addSkill;
	
	@FindBy(id = "skill_code")
	public WebElement skillList;
	
	@FindBy(id = "skill_years_of_exp")
	public WebElement yearsOfExp;
	
	@FindBy(id = "skill_comments")
	public WebElement skillComments;
	
	@FindBy(id = "btnSkillSave")
	public WebElement skillSave;
	
	@FindBy(xpath = "//p[@id='actionSkill']/following-sibling::table/tbody/tr/td[2]/a")
	public List<WebElement> skillAddedName;
	
	
	public QualificationsPageElements(){
		PageFactory.initElements(CommonMethods.driver, this);
	}
}
