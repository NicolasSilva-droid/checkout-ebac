import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import browsePage from '../pageobjects/browse.page'

describe('Cart', () => {
    it('checkout', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="addNewAddress"]').click();
        cy.get('[placeholder="Enter your name"]').type('João Paulo');
        cy.get('[placeholder="Enter your mobile number"]').type(48990752348);
        cy.get('[placeholder="Enter your address"]').type('rua jardim governador');
        cy.get('[placeholder="City"]').type('metropolis');
        cy.get('[placeholder="State"]').type('santa rica');
        cy.get('[placeholder="ZipCode"]').type('44471-000');
        cy.get('[data-testid="save"]').click();
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
        cy.get('[data-testid="completeCheckout"]').click()

    });
})