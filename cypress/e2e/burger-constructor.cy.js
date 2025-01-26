describe("ingredient modal works correctly", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/react-burger");
  });

  it("show ingredient detail", () => {
    cy.contains("Конструктор");
    cy.contains("Соберите бургер");

    cy.get("[data-testid=ingredient-item]").first().click();
    cy.get("[data-testid=modal-window]").contains("Детали ингредиента");
  });

  it("show should close modal on button click", () => {
    cy.get("[data-testid=ingredient-item]").first().click();
    cy.get("[data-testid=modal-window-close]").click();
    cy.get("[data-testid=modal-window]").should("not.exist");
  });
});

describe("drag ingredients to constructor works correctly", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/react-burger");
  });

  it("should allow bun to be dragged and dropped to the constructor", () => {
    const ingredientSelector = "[data-testid=ingredient-item]";
    const dropTargetSelector = "[data-testid=drop-container]";

    cy.get(ingredientSelector).should("be.visible");
    cy.get(ingredientSelector).contains("Краторная булка N-200i").trigger("dragstart");
    cy.get(dropTargetSelector).trigger("drop").trigger("dragend");
    cy.get(dropTargetSelector).contains("Краторная булка N-200i");
  });

  it("should allow ingredient to be dragged and dropped to the constructor", () => {
    const ingredientSelector = "[data-testid=ingredient-item]";
    const dropTargetSelector = "[data-testid=drop-container]";

    cy.get(ingredientSelector).should("be.visible");
    cy.get(ingredientSelector).contains("Соус Spicy-X").trigger("dragstart");
    cy.get(dropTargetSelector).trigger("drop").trigger("dragend");
    cy.get(dropTargetSelector).contains("Соус Spicy-X");
  });
});
