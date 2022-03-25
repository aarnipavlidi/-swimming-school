/// <reference types="cypress" />

import { websiteMainTitle } from "../../../../src/utils/cypress";

describe(`Testing login page for ${websiteMainTitle} website`, () => {

  beforeEach(() => {
    cy.viewport(390, 844)
    cy.visit('/pavmin')
  })

  it("testing stuff", () => {

    cy.location('pathname')
      .should('eq', '/pavmin')

    cy.get('.animated-background > div')
      .within(() => {

        cy.get('#headerContentContainer > h4')
          .should('have.class', 'title-font')
          .and('have.text', 'Dashboard')

        cy.get('#headerContentContainer > p')
          .should('have.class', 'content-font')
          .and('have.text', 'Please login ')

        

      })


  })




})