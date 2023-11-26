///  <reference types="Cypress" />
describe('task  management', () => {
    it('should open and close the modal window', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({ force: true })
        cy.get('.backdrop').should('not.exist')
        cy.get('dialog.modal').should('not.exist')
        
    })

    it('should open and close the modal with the cancel button', () => {
        cy.visit('http://localhost:5173/')
        //Testing the button and clicking cancel
        cy.get('div button').click()
        cy.get('.backdrop').should('exist')
        cy.get('dialog.modal').should('exist')
        cy.get('.actions').contains('Cancel').click()
        //Make sure that the dialog and the backdrop are not there anymore
        cy.get('.backdrop').should('not.exist')
        cy.get('dialog.modal').should('not.exist')
    })

    it('should create a new task', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').click()
        cy.get('#title').type('New Task')
        cy.get('#summary').type('Some summary')
        cy.get('.modal').contains('Add Task').click()
        cy.get('.modal').should('not.exist')
        cy.get('.backdrop').should('not.exist')
        //See if the list element exist
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('New Task')
        cy.get('.task p').contains('Some summary')
    })
})