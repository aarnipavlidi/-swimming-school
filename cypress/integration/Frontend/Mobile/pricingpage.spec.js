/// <reference types="cypress" />

import { websiteMainTitle, addPricingContent, deletePricingContent } from '../../../../src/utils/cypress';

describe(`Testing pricing page for ${websiteMainTitle} website`, () => {
  
  beforeEach(() => {
    cy.insertOne(addPricingContent)
    cy.log("Added value to the database.")
    cy.viewport(390, 844)
    cy.visit('')
  })

  afterEach(() => {
      cy.deleteMany(deletePricingContent)
      cy.log("Deleted value from the database.")
  })

  it('Checking that user is able to go different page and that page is showing right data from the database', () => {
    cy.get('.custom-navbar-styling > h1')
      .first()
      .should('have.text', websiteMainTitle)

    cy.get('.navbar-toggler > span')
      .should('be.visible')
      .click()

    cy.get('#navbarSupportedContent')
      .should('have.class', 'show')
      .within(() => {
        cy.get('.navbar-nav > li')
          .should('have.length', 3)
          .get('a[href*="hinnasto"]')
          .click()
          .should('have.class', 'active')
      })
    
    cy.location('pathname')
      .should('eq', '/hinnasto')

    cy.get('.row > div')
      .should('have.length', 4)

    cy.get('#pricingContainer > div')
      .should('have.length', 2)
      .first()
      .within(() => {
        cy.get('p:first')
          .should('have.text', 'Hinnat 1 hlö: (Huom. ei sisällä uimahallin sisäänpääsyä)')
        cy.get('.text-center > p')
          .should('have.length', 3)
          .should('have.class', 'content-font')
          .first()
          .should('have.text', '1x45min 10 €')
          .next()
          .should('have.text', '3x45min 15 €')
          .next()
          .should('have.text', '5x45min 25 €')
      })
      .next()
      .within(() => {
        cy.get('p:first')
          .should('have.text', 'Hinnat 2 hlö: (Huom. ei sisällä uimahallin sisäänpääsyä)')
        cy.get('.text-center > p')
          .should('have.length', 3)
          .should('have.class', 'content-font')
          .first()
          .should('have.text', '1x45min 20 €')
          .next()
          .should('have.text', '3x45min 30 €')
          .next()
          .should('have.text', '5x45min 50 €')
      })

    cy.get('#contentContainer > div')
      .should('have.length', 2)
      .first()
      .within(() => {
        cy.get('p')
          .should('have.length', 2)
          .and('have.class', 'content-font')
          .first()
          .should('have.text', 'Welcome to the pricing page, this one is first <p> element and first value for primaryElement object.')
          .next()
          .should('have.text', 'And this one is a second <p> element for same object name. Wohoo!')
      })
      .next()
      .within(() => {
        cy.get('p')
          .should('have.length', 3)
          .and('have.class', 'content-font')
          .first()
          .should('have.text', 'Welcome to the pricing page, this one is first <p> element and first value for secondaryElement object.',)
          .next()
          .should('have.text', 'And this one is a second <p> element for same object name. Wohoo!')
          .next()
          .should('have.text', 'Making a extra value, so we are able to tell difference between two object values.')
      })
  })
})
