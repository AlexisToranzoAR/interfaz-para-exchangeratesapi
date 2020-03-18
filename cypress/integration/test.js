/// <reference types="cypress" />

const URL = '127.0.0.1:8080'; 

context('casa-de-cambio', () => {
    before(() => {
        cy.visit(URL);
    })

    it('se asegura de que se pueda ingresar una base', () => {
        cy.get("#base").select('USD');
    })

    it('se asegura que se pueda ingresar una fecha', () => {
        cy.get('#fecha').type('2020-03-02');
    })

    it('se asegura que el boton siguiente funcione correctamente', () => {
        cy.get('#boton-siguiente').click();
        cy.get('#cambios-container').should('exist');
    })

    it('se asegura que los resultados sean correctos', () => {
        cy.get('#cambio-26 td').contains('USD').should('exist');
        cy.get('#cambio-26 td').contains('1').should('exist');
    })
})