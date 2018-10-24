describe('Todo app', () => {
    it('renders the header', () => {
        cy.visit('localhost:3000');
        cy.get('[data-cy=header]').should('contain', 'SYSON');
    })

    it('renders saved todos', () => {
        localStorage.setItem('todos', 'ett,två,tre');
        cy.visit('localhost:3000');
        cy.get('[data-cy=item]').should('have.length', 3);
        cy.get('[data-cy=item]').should('contain', 'ett');
        cy.get('[data-cy=item]').should('contain', 'två');
        cy.get('[data-cy=item]').should('contain', 'tre');
    })
})