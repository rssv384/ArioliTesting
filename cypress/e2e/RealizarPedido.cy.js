/// <reference types="cypress" />

beforeEach(() => {
	// Paso 1: Abrir la página web
	cy.visit('http://127.0.0.1:5000/')
})

// CASOS DE PRUEBA
describe('Pruebas para el área funcional REALIZAR PEDIDO', () => {
	it('Caso 1: Realizar pedido exitosamente', () => {
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

		// Paso 4: Acceder al catálogo
		cy.get('#navbarNav > ul > li:nth-child(1) > a').click()

		// Paso 5: Agregar producto al carrito
		cy.get(
			'body > div:nth-child(4) > div > section > form > div > div:nth-child(1) > div > button'
		).click()

		// Paso 6: Acceder al carrito
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > form:nth-child(4) > input'
		).click()

		// Paso 7: Confirmar pedido
		cy.get(
			'body > div > div > section > form > div:nth-child(2) > button'
		).click()

		// Paso 8: Verificar mensaje de confirmación
		cy.on('window:alert', (str) => {
			expect(str).to.equal('¡Su pedido se ha realizado con éxito!')
		})
	})

	it('Caso 2: Realizar pedido sin haber iniciado sesión', () => {
		// Paso 2: Acceder al catálogo
		cy.get('#navbarNav > ul > li:nth-child(1) > a').click()

		// Paso 3: Acceder al carrito
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > form:nth-child(4) > input'
		).click()

		// Paso 4: Verificar mensaje de inicio de sesion
		cy.contains('Inicia sesión primero.').should('be.visible')
	})
})
