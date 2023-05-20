/// <reference types="cypress" />

beforeEach(() => {
	// Paso 1: Abrir la página web
	cy.visit('http://127.0.0.1:5000/')

	// Paso 2: Buscar y dar clic al botón de inicio de sesion
	cy.get(
		'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
	).click()
	cy.get('#exampleModal > div > div > div.modal-body > a:nth-child(2)').click()
})

// CASOS DE PRUEBA
describe('Pruebas para el área funcional INICIAR/CERRAR SESIÓN', () => {
	it('Caso 1: Iniciar sesión correctamente', () => {
		// Paso 3: Ingresar correo y contraseña. Dar click en el botón de inicio de sesión
		cy.get('[type="text"]').type('si@hotmail.com')
		cy.get('[type="password"]').type('si')
		cy.get('.buttons').click()

		// Paso 4: Desplegar la pagina de inicio
		cy.url().should('include', 'http://127.0.0.1:5000/')

		// Paso 5: Muestra el mensaje de bienvenida
		cy.get('.rounded').click()
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
		).click()
		cy.contains('Bienvenido').should('be.visible')
	})

	it('Caso 2: Iniciar sesión con datos erróneos o faltantes', () => {
		// Paso 3: Ingresar datos y dar click en el botón de inicio de sesión
		cy.get('[type="text"]').type('si@hotmail.com')
		cy.get('[type="password"]').type('no')

		cy.get('.buttons').click()

		// Paso 4: Mostrar mensaje de datos erroneos
		cy.contains('Error:').should('be.visible')
	})

	it('Caso 3: Iniciar sesión con ambos campos vacíos', () => {
		// Paso 3: Dar click en el botón de iniciar sesión
		cy.get('.buttons').click()

		// Paso 4: Mostrar mensaje de datos erróneos
		cy.contains('Error:').should('be.visible')
	})

	it('Caso 4: Cerrar sesión', () => {
		// Paso 3: Iniciar sesión
		cy.get('[type="text"]').type('si@hotmail.com')
		cy.get('[type="password"]').type('si')
		cy.get('.buttons').click()

		// Paso 2: Desplegar la pagina de inicio
		cy.url().should('include', 'http://127.0.0.1:5000/')

		// Paso 3: ir al menú principal
		cy.get('.rounded').click()

		// Paso 4: Cerrar sesión
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
		).click()

		cy.get('.modal-body > .btn').click()

		//Paso 5: Comprobar que se cerró sesión
		cy.get(
			'body > nav.navbar.navbar-expand-lg.navbar-light.bg-warning.bd-example > div > ul > li > input'
		).click()
		cy.get(
			'#exampleModal > div > div > div.modal-body > a:nth-child(2)'
		).click()
		cy.url().should('include', 'http://127.0.0.1:5000/inicio')
	})
})
