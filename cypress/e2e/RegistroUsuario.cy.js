/// <reference types="cypress" />

beforeEach(() => {
	// Paso 1: Abrir la página web
	cy.visit('http://127.0.0.1:5000/')

	// Paso 2: Buscar y dar clic al botón de usuario
	cy.get(
		'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
	).click()
	cy.get('#exampleModal > div > div > div.modal-body > a:nth-child(1)').click()
})

// CASOS DE PRUEBA
describe('Pruebas para el área funcional REGISTRO DE USUARIO', () => {
	it('Caso 1: Registro exitoso', () => {
		// Paso 3: Ingresar datos y dar click al botón de crear cuenta
		cy.get('.row > :nth-child(1) > .form-control').type('usuario')
		cy.get(':nth-child(2) > .form-control').type('prueba')
		cy.get('#email').type('prueba@hotmail.com')
		cy.get('#password').type('prueba')

		cy.get('#register').click()

		// Paso 4: Desplegar la pagina de inicio
		cy.url().should('include', 'http://127.0.0.1:5000/')
	})

	it('Caso 2: Registro con correo ya existente', () => {
		// Paso 3: Ingresar datos y dar click al botón de crear cuenta
		cy.get('.row > :nth-child(1) > .form-control').type('usuario')
		cy.get(':nth-child(2) > .form-control').type('prueba')
		cy.get('#email').type('si@hotmail.com')
		cy.get('#password').type('prueba')

		cy.get('#register').click()

		// Paso 4: Mostrar mensaje de correo ya registrado
		cy.contains('Error: Correo ya registrado').should('be.visible')
	})

	it('Caso 3: Registro con campos vacíos', () => {
		// Paso 3: Dar click en el botón de crear cuenta
		cy.get('#register').click()

		// Paso 4: Mostrar mensaje de falta de datos
		cy.contains('Error: Falta ingresar datos').should('be.visible')
	})
})
