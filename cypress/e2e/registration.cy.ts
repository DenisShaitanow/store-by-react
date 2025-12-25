
describe('проверяем доступность приложения', function() {
    it('сервис должен быть доступен по адресу localhost:5173', function() {
        cy.visit('http://localhost:5173'); 

        cy.get('[data-cy="sun"]').scrollIntoView().should('be.visible').click();

        cy.get('[data-cy="registrationButton"]', {timeout: 6000}).scrollIntoView().should('be.visible').click();
        cy.url().should('include', '/registration');

        cy.get('[data-cy="registrationInputEmail"]').scrollIntoView().clear().type('test@mail.ru');
        cy.get('[data-cy="registrationInputPassword"]').scrollIntoView().clear().type('123456789');

        cy.get('[data-cy="buttonStep1"]').scrollIntoView().should('have.not.attr', 'disabled');
        cy.get('[data-cy="buttonStep1"]').scrollIntoView().should('be.visible').click();
        

        cy.get('[data-cy="registrationInputName"]').scrollIntoView().clear().type('вася');
        cy.get('[data-cy="registrationInputSurname"]').scrollIntoView().clear().type('пупкин');
        cy.get('[data-cy="registrationInputCity"]').scrollIntoView().clear().type('тамбов');
        cy.get('[data-cy="inputDroppdownSelect"]').click();
        cy.get('[data-cy="genderOption0"]').click();
        cy.get('[data-cy="registrationInputBirthday"]').type('11.04.1992');
        cy.get('[data-cy="containerFormStep2"]').click();

        cy.get('[data-cy="registrationButton"]').scrollIntoView().should('have.not.attr', 'disabled');
        cy.get('[data-cy="registrationButton"]').scrollIntoView().should('be.visible').click();
        
        cy.url().should('include', '/');
    });
}); 

