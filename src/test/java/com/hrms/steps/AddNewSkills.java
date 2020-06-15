package com.hrms.steps;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigsReader;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddNewSkills extends CommonMethods{

	@Given("user is logged with valid admin credentials")
	public void user_is_logged_with_valid_admin_credentials() {
	    sendText(login.username, ConfigsReader.getProperty("username"));
	    sendText(login.password, ConfigsReader.getProperty("password"));
	    click(login.loginBtn);
	}

	@Given("user navigate to Skills page")
	public void user_navigate_to_Skills_page() {
		dashboard.navigateToSkills();
	}

	@When("user click on Add button")
	public void user_click_on_Add_button() {
	    click(skill.addBtn);
	}

	@When("user enter {string} and {string}")
	public void user_enter_skill_name_and_skill_discription(String name, String descrip) {
		sendText(skill.skillName, name);
		sendText(skill.skillDescription, descrip);
	}

	@When("user click on Save button")
	public void user_click_on_Save_button() {
		click(skill.saveBtn);
	}

	@Then("user see the {string} skill in the skill table")
	public void user_see_the_new_skill_in_the_skill_table(String name) {
	   boolean isAdded = tableDataVerification(skill.skillNameList, name);
	   if(isAdded)
		   System.out.println("Skill added successfully");
	   else
		   System.out.println("Skill did not add successfully");
	}

}
