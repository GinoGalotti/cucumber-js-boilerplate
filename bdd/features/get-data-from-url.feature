Feature: Example Feature

  Scenario: Example Scenario
    #This should be parametrized per environment, having something like "Lightning-ui" so it's decoupled
    Given I visit 'https://lightning.staging-owl.com'
    And I write 'https://www.import.io/about/contact-details/' as text
    When I click Example
    And I click on tab number '1'
    Then I should see some data
    When I click on tab number '2'
    Then I should see some data
