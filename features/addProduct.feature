Feature: Add a product to cart
@smoke @cart
Scenario:Login as a user and add a product to cart



Given user navigate to url
When user logs in to demoblaze
And user select a product
And user click on add to cart
Then user should see a message
