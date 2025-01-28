import { SELECTORS } from "./selectors";

Cypress.Commands.add("dragAndDrop", (ingredientName, dropTargetSelector) => {
  cy.get(SELECTORS.ingredientItem)
    .contains(ingredientName)
    .trigger("dragstart");
  cy.get(dropTargetSelector).trigger("drop").trigger("dragend");
});

Cypress.Commands.add("openIngredientModal", () => {
  cy.get(SELECTORS.ingredientItem).first().click();
});
