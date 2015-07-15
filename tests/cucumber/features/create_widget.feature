Feature: Creating a widget

  As a user, so that I can create a new widget, I want to click a button and see my new widget.

  @dev
  Scenario: Clicking the 'Add new -> News Item' menu will create a News Item
    Given I am logged in
    When I click the Add new menu
    And I click the News Item menu item
    Then I should see a content item of type News
