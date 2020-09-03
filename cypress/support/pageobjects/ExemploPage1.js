/*
Page Objects: aqui deixamos os scripts feitos em Cypress.
A ideia do page objects é a de criarmos um arquivo.js para cada página ou fluxo do site. Dessa forma, mantemos a organização e facilitamos a manutenção do código, pois colocamos no arquivo os comandos que são executados na página/fluxo correspondentes ao nome do arquivo.
Ex.: HomePage.js, PdpPage.js, Checkout.js.
*/ 


/// <reference types="Cypress" />

import ExemploPage1Elements from '../elements/LoginElements'
const ExemploPage1Elements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }
}

export default ExemploPage1;