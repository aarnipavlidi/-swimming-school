/// <reference types="cypress" />

import { websiteMainTitle, addHomeContent, deleteHomeContent } from '../../../../src/utils/cypress';

describe(`Testing homepage for ${websiteMainTitle} website`, () => {
  
  beforeEach(() => {
    cy.insertOne(addHomeContent)
    cy.log("Added value to the database.")
    cy.viewport(390, 844)
    cy.visit('/')
  })

  afterEach(() => {
    cy.deleteMany(deleteHomeContent)
    cy.log("Deleted value from the database.")
  })

  it('Making sure that hamburger icon is clickable and different links are shown to the user', () => {
    cy.get('.custom-navbar-styling > a')
      .first()
      .should('have.text', websiteMainTitle)

    cy.get('.navbar-toggler > span')
      .should('be.visible')
      .click()

    cy.get('#navbarSupportedContent')
      .should('have.class', 'show')
      .within(() => {
        cy.get('.navbar-nav > li')
          .first()
          .children('.navbar-content')
          .children('.active')
          .should('have.text', 'Etusivu')
          .should('have.class', 'active')
          .should('have.attr', 'href', '/')
      })
  })

  it('Checking does website render content from database back to the user', () => {
    cy.get('#contentContainer')
      .should('have.class', 'align-self-center')
      .within(() => {
        cy.get('p.content-font')
          .should('be.visible')
          .should('have.length', 2)
      })
  })
})