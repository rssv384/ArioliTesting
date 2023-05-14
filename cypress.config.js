const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		watchForFileChanges: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})

const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')
// const { pa11y } = require("@cypress-audit/pa11y");
module.exports = {
	e2e: {
		watchForFileChanges: false,
		baseUrl: 'http://localhost:5000', // this is your app
		setupNodeEvents(on, config) {
			on('before:browser:launch', (browser = {}, launchOptions) => {
				prepareAudit(launchOptions)
			})
			on('task', {
				lighthouse: lighthouse(),
				// pa11y: pa11y(console.log.bind(console)),
			})
		},
	},
}
