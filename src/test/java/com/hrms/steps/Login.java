package com.hrms.steps;

import org.junit.Assert;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigsReader;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login extends CommonMethods {
	
	@When("user enter valid admin username and password")
	public void user_enter_valid_admin_username_and_password() {
		sendText(login.username, ConfigsReader.getProperty("username"));
		sendText(login.password, ConfigsReader.getProperty("password"));
	}

	@When("user click on login button")
	public void user_click_on_login_button() {
		click(login.loginBtn);
	}

	@Then("admin user is successfully logged in")
	public void admin_user_is_successfully_logged_in() {
		String expected = "Welcome Admin";
		String actual = dashboard.welcome.getText();
		Assert.assertEquals("Welcome message is not displayed or not correct ", expected, actual);
		System.out.println(actual);
	}


}
