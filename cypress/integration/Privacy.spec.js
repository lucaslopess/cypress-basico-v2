
describe('Política de privacidade TAT', function (){

    beforeEach(function (){
        cy.visit('./src/privacy.html')
    })


    it('Verifica text', function () {
        cy.contains('Talking About Testing')
            .should('be.visible')
    });
})