@addNewSkill
Feature: Add New Skill

  Background: 
    Given user is logged with valid admin credentials
    And user navigate to Skills page

  @regression
  Scenario: Admin add new skill
    When user click on Add button
    And user enter "Typing" and "How fast can type"
    And user click on Save button
    Then user see the "Typing" skill in the skill table

  @regression
  Scenario Outline: Adding multiple new skills
    When user click on Add button
    And user enter "<Skill>" and "<Discription>"
    And user click on Save button
    Then user see the "<Skill>" skill in the skill table

    Examples: 
      | Skill              | Discription                                                                                 |
      | Project Management | The ability to manage task flow and complete assignments on time                            |
      | Data Analysis      | The ability to analyze metrics and extrapolate a practical use from it                      |
      | Teamwork           | The ability to work with other people at some point and be successful in a team environment |
