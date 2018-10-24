describe('Add', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('adds a todo', () => {
        cy.get('[data-cy=add-form] input').type('test');
        cy.get('[data-cy=add-form').submit();
        cy.get('[data-cy=item').should('have.length', 1);
        cy.get('[data-cy=item').should('contain', 'test');
    })

    it('persists after reload', () => {
        cy.get('[data-cy=add-form] input').type('test');
        cy.get('[data-cy=add-form').submit();
        cy.get('[data-cy=item').should('contain', 'test');
        cy.reload();
        cy.get('[data-cy=item').should('contain', 'test');
    });
})