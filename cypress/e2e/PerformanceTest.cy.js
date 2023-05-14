describe('Performance Test', () => {
	it('Ejecutar pruebas de rendimiento de Lighthouse con límites personalizados', () => {
		const thresholds = {
			performance: 95,
			accessibility: 95,
			'best-practices': 90,
			'first-contentful-paint': 2000,
			'largest-contentful-paint': 5000,
			'cumulative-layout-shift': 0.1,
			'total-blocking-time': 500,
			seo: 85,
		}
		const lighthouseConfig = {
			formFactor: 'desktop',
			screenEmulation: { disabled: true },
		}
		cy.visit('http://localhost:5000/internacional')
		cy.lighthouse(thresholds, lighthouseConfig)
	})
})
