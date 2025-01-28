import { SELECTORS } from "../support/selectors";

describe("Ingredient modal works correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should show ingredient detail", () => {
    cy.contains("Конструктор");
    cy.contains("Соберите бургер");

    cy.openIngredientModal();
    cy.get(SELECTORS.modalWindow).contains("Детали ингредиента");
  });

  it("should close modal on button click", () => {
    cy.openIngredientModal();
    cy.get(SELECTORS.modalWindowClose).click();
    cy.get(SELECTORS.modalWindow).should("not.exist");
  });
});

describe("Drag ingredients to constructor works correctly", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow bun to be dragged and dropped to the constructor", () => {
    cy.get(SELECTORS.ingredientItem).should("be.visible");
    cy.dragAndDrop("Краторная булка N-200i", SELECTORS.dropContainer);
    cy.get(SELECTORS.dropContainer).contains("Краторная булка N-200i");
  });

  it("should allow ingredient to be dragged and dropped to the constructor", () => {
    cy.get(SELECTORS.ingredientItem).should("be.visible");
    cy.dragAndDrop("Соус Spicy-X", SELECTORS.dropContainer);
    cy.get(SELECTORS.dropContainer).contains("Соус Spicy-X");
  });
});
