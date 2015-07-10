Feature: Creating a widget

  As a user, so that I can create a new widget, I want to click a button and see my new widget.

  @dev
  Scenario: Clicking the 'create widget' button will create and show a widget
    Given I am logged in
    When I click the Add new menu
    And I click the News Item menu item
    Then I should see a widget named "Alpha"
