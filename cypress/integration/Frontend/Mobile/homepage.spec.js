/// <reference types="cypress" />

const websiteMainTitle = "Santun Uimakoulu";

const addHomeContent = {
  value: "Home",
  content: {
    secondaryElement: [],
    primaryElement: [
      "Welcome to the homepage, this is a first <p> element.",
      "And this one is a second <p> element. Wohoo!"
    ]
  }
};

const deleteHomeContent = {
  "value": "Home"
};

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
    // Testing that website "main title" is right value.
    cy.get('.custom-navbar-styling > a')
      .first()
      .should('have.text', websiteMainTitle)

    // Testing that "hamburger icon" is visible on mobile
    // view and it is clickable.
    cy.get('.navbar-toggler > span')
      .should('be.visible')
      .click()

    // Finding element with specific id value and then making sure
    // it has right styling and inside of that element we are getting
    // first element with given styling and checking if it has right values.
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





})