describe('Edit', () => {
    it('edits a value', () => {
        localStorage.setItem('todos', 'ett,fyra,tre');
        cy.visit('localhost:3000')
        cy.get('[data-cy=edit]:nth(1)')
            .click();
        cy.get('[data-cy=edit-form]').should('exist');
        cy.get('[data-cy=edit-form] input').clear().type('två');
        cy.get('[data-cy=edit-form]').submit();
        cy.get('[data-cy=item]:nth(1)')
            .should('contain', 'två')
            .should('not.contain', 'fyra');
        cy.get('[data-cy=edit-form]').should('not.exist');
    })
});