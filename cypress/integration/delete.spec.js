describe('Delete', () => {
    it('deletes a todo', () => {
        localStorage.setItem('todos', 'ett,fyra,två');
        cy.visit('localhost:3000')
        cy.get('[data-cy=delete]:nth(1)')
            .click();
        cy.get('[data-cy=item]')
            .should('have.length', 2)
            .should('not.contain', 'fyra');
    });
})