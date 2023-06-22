/// <reference types="cypress" />
describe('Cenário 01 - User Login + Navigation', () => {
  it('Login Navigate', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })
})