Feature: :Login functionality
@login @smoke
Scenario: :Valid Login

Given user navigate to url
When user logs in to demoblaze
Then user should see user name

@login @regression
Scenario:Invalid login


Given user navigate to url
When user login with invalid credentials
Then user should see an error message
    