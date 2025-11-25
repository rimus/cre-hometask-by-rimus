@login
Feature: Login functionality

  Background:
    Given the user is on the login page

  @negative @UC-1
  Scenario: Test Login Form with Empty Credentials
    When the user fills the login form with username "standard_user"
    And clears the username field
    And clears the password field
    And presses the login button
    Then the user should see a missing username error

  @negative @UC-2
  Scenario: Test Login Form with Only Username
    When the user fills the login form with username "standard_user"
    And clears the password field
    And presses the login button
    Then the user should see a missing password error

  @positive @UC-3
  Scenario Outline: Test Login Form with Valid Credentials
    When the user logs in with valid credentials where username "<username>"
    Then the header logo text should be validated

    Examples:
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             |

  @positive @UC-3
  Scenario: Test Login Form with Valid Credentials
    When the user logs in with valid credentials where username "locked_out_user"
    Then the user should see a user lock out error