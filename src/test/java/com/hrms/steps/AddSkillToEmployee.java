package com.hrms.steps;

import com.hrms.utils.CommonMethods;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class AddSkillToEmployee extends CommonMethods {
	
	@Given("user navigate to Employee List page")
	public void user_navigate_to_Employee_List_page() {
		dashboard.navigateToEmployeeList();
	}

	@Given("user enter employee ID {string} and click on search button")
	public void user_enter_employee_ID_and_click_on_search_button(String idNumber) {
		sendText(viewEmp.empID, idNumber);
		click(viewEmp.searchBtn);
	}

	@Given("user click on employee ID at result of search")
	public void user_click_on_employee_ID_at_result_of_search() {
	    click(viewEmp.searchedID);
	}

	@Given("user click on Qualification link")
	public void user_click_on_Qualification_link() {
	    click(viewEmp.sideNavQualification);
	}

	@When("user click on Add button under skills section")
	public void user_click_on_Add_button_under_skills_section() {
	    click(qualification.addSkill);
	}

	@When("user select {string} skill from skill dropdown")
	public void user_select_skill_from_skill_dropdown(String skill_name) {
	    selectDdValue(qualification.skillList, skill_name);
	}

	@When("user add {string} years of experience and {string}")
	public void user_add_years_of_experience_and_comments(String years, String comments) {
	    sendText(qualification.yearsOfExp, years);
	    sendText(qualification.skillComments, comments);
	}

	@When("user click on save button")
	public void user_click_on_save_button() throws InterruptedException {
	    click(qualification.skillSave);
	    wait(2);
	}

	@Then("user see the {string} skill on skill section")
	public void user_see_the_skill_on_skill_section(String skillname) {
	    boolean isAvailable = tableDataVerification(qualification.skillAddedName, skillname);
	    if(isAvailable)
	    	System.out.println("Skill added successfully");
	    else
	    	System.out.println("Skill does not added successfully");
	    	
	}

}
