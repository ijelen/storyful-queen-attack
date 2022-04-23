/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("A visitor", function () {
  it("loads the chess board", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Option three: Queen Atack");
    cy.contains("Can't attack.");
  });

  it("places both queens in the same column", () => {
    cy.get("#field22").click();
    cy.get("#field25").click();
    cy.contains("Can attack.");
  });

  it("places both queens in the same row", () => {
    cy.get("#field26").click();
    cy.get("#field66").click();
    cy.contains("Can attack.");
  });

  it("places both queens in the major diagonal (\\)", () => {
    cy.get("#field33").click();
    cy.get("#field66").click();
    cy.contains("Can attack.");
  });

  it("places both queens in the minor diagonal (/)", () => {
    cy.get("#field52").click();
    cy.get("#field25").click();
    cy.contains("Can attack.");
  });
});
