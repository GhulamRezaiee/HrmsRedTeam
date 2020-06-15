@login
Feature: Login to HMRS
	
	@smoke
  Scenario: Login to HMRS with correct admin credentials
    When user enter valid admin username and password
    And user click on login button
    Then admin user is successfully logged in

  
