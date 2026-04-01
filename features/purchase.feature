Feature: Purchase 
Scenario:To purchase the product

Given user navigate to url
When user logs in to demoblaze
And user select a product
And user purchase the product
Then user should see purchase text


