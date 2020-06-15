@addSkillToEmployee
Feature: Add skill to employee

  @regression
  Scenario: Admin add skill to an employee
    Given user is logged with valid admin credentials
    And user navigate to Employee List page
    And user enter employee ID "14354" and click on search button
    And user click on employee ID at result of search
    And user click on Qualification link
    When user click on Add button under skills section
    And user select "Typing" skill from skill dropdown
    And user add "5" years of experience and "Skill Comments"
    And user click on save button
    Then user see the "Typing" skill on skill section

  @regression
  Scenario Outline: Admin add several skills to an employee
    Given user is logged with valid admin credentials
    And user navigate to Employee List page
    And user enter employee ID "14354" and click on search button
    And user click on employee ID at result of search
    And user click on Qualification link
    When user click on Add button under skills section
    And user select "<Skill>" skill from skill dropdown
    And user add "<Years>" years of experience and "<Comments>"
    And user click on save button
    Then user see the "<Skill>" skill on skill section

    Examples: 
      | Skill              | Years | Comments                                             |
      | Project Management |     3 | He worked as project manager in the past three years |
      | Data Analysis      |     4 | She worked as data analyzer in the past four years   |
      | Teamwork           |     6 | He always has worked in a team of ten people or more |
