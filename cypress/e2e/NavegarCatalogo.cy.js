/// <reference types="cypress" />

// CASOS DE PRUEBA
describe('Pruebas para el área funcional NAVEGAR CATÁLOGO', () => {
	it('Navegar catálogos (iniciando sesión)', () => {
		// Paso 1: Abrir la página web
		cy.visit('http://127.0.0.1:5000/')

		// Paso 2: Buscar y dar clic al botón de inicio de sesion
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
		).click()
		cy.get(
			'#exampleModal > div > div > div.modal-body > a:nth-child(2)'
		).click()

		// Paso 3: Iniciar sesión
		cy.get('[type="text"]').type('si@hotmail.com')
		cy.get('[type="password"]').type('si')
		cy.get('.buttons').click()

		//Paso 4: Acceder a los distintos catálogos
		cy.get('#navbarNav > ul > li:nth-child(6) > a').click()
		cy.url().should('include', 'http://127.0.0.1:5000/products')

		cy.get('#navbarNav > ul > li:nth-child(4) > a').click()
		cy.url().should('include', 'http://127.0.0.1:5000/especial')

		cy.get('#navbarNav > ul > li:nth-child(3) > a').click()
		cy.url().should('include', 'http://127.0.0.1:5000/gourmet')

		cy.get('#navbarNav > ul > li:nth-child(2) > a').click()
		cy.url().should('include', 'http://127.0.0.1:5000/internacional')

		cy.get('#navbarNav > ul > li:nth-child(1) > a').click()
		cy.url().should('include', 'http://127.0.0.1:5000/mexicana')
	})
})
