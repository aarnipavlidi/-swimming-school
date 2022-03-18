/// <reference types="cypress" />

import { websiteMainTitle, notificationSuccessfulMessage } from "../../../../src/utils/cypress";

describe(`Testing contact page for ${websiteMainTitle} website`, () => {

  beforeEach(() => {
    cy.viewport(390, 844)
    cy.visit('')
  })

  afterEach(() => {
    cy.get('#validationClientName').clear()
    cy.get('#validationClientLastName').clear()
    cy.get('#validationClientEmail').clear()
    cy.get('#validationClientNumber').clear()
    cy.get('#validationClientMessage').clear()
  })

  it('Testing that contact form has proper styling and attributes', () => {
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
          .should('have.length', 3)
          .get('a[href*="otayhteytta"]')
          .click()
          .should('have.class', 'active')
      })
    
    cy.location('pathname')
      .should('eq', '/otayhteytta')

    cy.get('#formContainer > div')
      .should('have.length', 5)
      .first()
      .within(() => {
        cy.get('#labelClientName')
          .should('have.class', 'form-label') 
          .and('have.attr', 'for', 'validationClientName')
          .and('have.text', 'Etunimi')

        cy.get('#validationClientName')
          .should('have.class', 'form-control')
          .and('have.attr', 'required')

        cy.get('#labelClientLastName')
          .should('have.class', 'form-label')
          .and('have.attr', 'for', 'validationClientLastName')
          .and('have.text', 'Sukunimi')

        cy.get('#validationClientLastName')
          .should('have.class', 'form-control')
          .and('have.attr', 'required')
      })
      .next()
      .within(() => {
        cy.get('#labelClientEmail')
          .should('have.class', 'form-label') 
          .and('have.attr', 'for', 'validationClientEmail')
          .and('have.text', 'Sähköposti')

        cy.get('#validationClientEmail')
          .should('have.class', 'form-control')
          .and('have.attr', 'required')

        cy.get('#labelClientNumber')
          .should('have.class', 'form-label')
          .and('have.attr', 'for', 'validationClientNumber')
          .and('have.text', 'Puhelinnumero')

        cy.get('#validationClientNumber')
          .should('have.class', 'form-control')
          .and('have.attr', 'required')
      })
      .next()
      .within(() => {
        cy.get('#labelClientMessage')
          .should('have.class', 'form-label') 
          .and('have.attr', 'for', 'validationClientMessage')
          .and('have.text', 'Viestikenttä')

        cy.get('#validationClientMessage')
          .should('have.class', 'form-control')
          .and('have.attr', 'required')
      })
      .next()
      .within(() => {
        cy.get('#labelButtonNotLoading > button')
          .should('have.text', 'Lähetä')
          .and('have.attr', 'type', 'submit')
      })
  })

  it('Then testing that user is able to type on different input elements and be able to send message forward', () => {

    cy.visit('/otayhteytta')

    cy.location('pathname')
      .should('eq', '/otayhteytta')

    cy.get('#formContainer > div')
    .should('have.length', 5)
    .first()
    .within(() => {
      cy.get('#validationClientName')
        .type('Aarni')
        .should('have.value', 'Aarni')

      cy.get('#validationClientLastName')
        .type('Pavlidi')
        .should('have.value', 'Pavlidi')
    })
    .next()
    .within(() => {
      cy.get('#validationClientEmail')
        .type('testing@email.com')
        .should('have.value', 'testing@email.com')

      cy.get('#validationClientNumber')
        .type('String')
        .should('not.have.value', 'String')
        .type('010123123')
        .should('have.value', '010123123')
    })
    .next()
    .within(() => {
      cy.get('#validationClientMessage')
        .type('Testing this contact form, does this work or not?! Cypress is pretty cool tool <3')
        .should('have.value', 'Testing this contact form, does this work or not?! Cypress is pretty cool tool <3')
    })
    .next()
    .within(() => {
      cy.get('#labelButtonNotLoading > button')
        .should('have.text', 'Lähetä')
        .and('have.attr', 'type', 'submit')
        .click()
        .should('not.be.visible')
    })

    cy.get('#notificationContainerTrue')
      .should('have.class', 'container')
      .should('have.text', notificationSuccessfulMessage)
      .within(() => {
        cy.get('div:last')
          .should('have.class', 'alert-success')
      })
  })
})