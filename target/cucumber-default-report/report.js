$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddNewSkills.feature");
formatter.feature({
  "name": "Add New Skill",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addNewSkill"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Skills page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_navigate_to_Skills_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin add new skill",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addNewSkill"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Add button",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Typing\" and \"How fast can type\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_enter_skill_name_and_skill_discription(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Typing\" skill in the skill table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_see_the_new_skill_in_the_skill_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Admin add new skill");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Adding multiple new skills",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Add button",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003cSkill\u003e\" and \"\u003cDiscription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.step({
  "name": "user see the \"\u003cSkill\u003e\" skill in the skill table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Skill",
        "Discription"
      ]
    },
    {
      "cells": [
        "Project Management",
        "The ability to manage task flow and complete assignments on time"
      ]
    },
    {
      "cells": [
        "Data Analysis",
        "The ability to analyze metrics and extrapolate a practical use from it"
      ]
    },
    {
      "cells": [
        "Teamwork",
        "The ability to work with other people at some point and be successful in a team environment"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Skills page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_navigate_to_Skills_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple new skills",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewSkill"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Add button",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Project Management\" and \"The ability to manage task flow and complete assignments on time\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_enter_skill_name_and_skill_discription(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Project Management\" skill in the skill table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_see_the_new_skill_in_the_skill_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Adding multiple new skills");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Skills page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_navigate_to_Skills_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple new skills",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewSkill"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Add button",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Data Analysis\" and \"The ability to analyze metrics and extrapolate a practical use from it\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_enter_skill_name_and_skill_discription(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Data Analysis\" skill in the skill table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_see_the_new_skill_in_the_skill_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Adding multiple new skills");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Skills page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_navigate_to_Skills_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding multiple new skills",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addNewSkill"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user click on Add button",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Teamwork\" and \"The ability to work with other people at some point and be successful in a team environment\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_enter_skill_name_and_skill_discription(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Teamwork\" skill in the skill table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_see_the_new_skill_in_the_skill_table(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Adding multiple new skills");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/AddSkillToEmployee.feature");
formatter.feature({
  "name": "Add skill to employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addSkillToEmployee"
    }
  ]
});
formatter.scenario({
  "name": "Admin add skill to an employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addSkillToEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Employee List page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_navigate_to_Employee_List_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter employee ID \"14354\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_enter_employee_ID_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on employee ID at result of search",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_employee_ID_at_result_of_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Qualification link",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Qualification_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add button under skills section",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Add_button_under_skills_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Typing\" skill from skill dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_select_skill_from_skill_dropdown(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add \"5\" years of experience and \"Skill Comments\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_add_years_of_experience_and_comments(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Typing\" skill on skill section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_see_the_skill_on_skill_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "Admin add skill to an employee");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin add several skills to an employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigate to Employee List page",
  "keyword": "And "
});
formatter.step({
  "name": "user enter employee ID \"14354\" and click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on employee ID at result of search",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Qualification link",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Add button under skills section",
  "keyword": "When "
});
formatter.step({
  "name": "user select \"\u003cSkill\u003e\" skill from skill dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "user add \"\u003cYears\u003e\" years of experience and \"\u003cComments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.step({
  "name": "user see the \"\u003cSkill\u003e\" skill on skill section",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Skill",
        "Years",
        "Comments"
      ]
    },
    {
      "cells": [
        "Project Management",
        "3",
        "He worked as project manager in the past three years"
      ]
    },
    {
      "cells": [
        "Data Analysis",
        "4",
        "She worked as data analyzer in the past four years"
      ]
    },
    {
      "cells": [
        "Teamwork",
        "6",
        "He always has worked in a team of ten people or more"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Admin add several skills to an employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addSkillToEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Employee List page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_navigate_to_Employee_List_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter employee ID \"14354\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_enter_employee_ID_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on employee ID at result of search",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_employee_ID_at_result_of_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Qualification link",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Qualification_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add button under skills section",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Add_button_under_skills_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Project Management\" skill from skill dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_select_skill_from_skill_dropdown(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add \"3\" years of experience and \"He worked as project manager in the past three years\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_add_years_of_experience_and_comments(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Project Management\" skill on skill section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_see_the_skill_on_skill_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "Admin add several skills to an employee");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin add several skills to an employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addSkillToEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Employee List page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_navigate_to_Employee_List_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter employee ID \"14354\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_enter_employee_ID_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on employee ID at result of search",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_employee_ID_at_result_of_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Qualification link",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Qualification_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add button under skills section",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Add_button_under_skills_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Data Analysis\" skill from skill dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_select_skill_from_skill_dropdown(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add \"4\" years of experience and \"She worked as data analyzer in the past four years\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_add_years_of_experience_and_comments(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Data Analysis\" skill on skill section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_see_the_skill_on_skill_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", "Admin add several skills to an employee");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin add several skills to an employee",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addSkillToEmployee"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged with valid admin credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "com.hrms.steps.AddNewSkills.user_is_logged_with_valid_admin_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to Employee List page",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_navigate_to_Employee_List_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter employee ID \"14354\" and click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_enter_employee_ID_and_click_on_search_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on employee ID at result of search",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_employee_ID_at_result_of_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Qualification link",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Qualification_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Add button under skills section",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_Add_button_under_skills_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"Teamwork\" skill from skill dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_select_skill_from_skill_dropdown(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add \"6\" years of experience and \"He always has worked in a team of ten people or more\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_add_years_of_experience_and_comments(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the \"Teamwork\" skill on skill section",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.steps.AddSkillToEmployee.user_see_the_skill_on_skill_section(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", "Admin add several skills to an employee");
formatter.after({
  "status": "passed"
});
});