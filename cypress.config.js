import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse'
import { defineConfig } from 'cypress'
import fs from 'fs'
import { ReportGenerator } from 'lighthouse/report/generator/report-generator.js'

export default defineConfig({
	watchForFileChanges: false,
	e2e: {
		baseUrl: 'http://127.0.0.1:5000/',
		setupNodeEvents(on, config) {
			on('before:browser:launch', (browser = {}, launchOptions) => {
				prepareAudit(launchOptions)
			})

			// Fuente: https://github.com/vrknetha/cypress-lighthouse
			on('task', {
				lighthouse: lighthouse((lighthouseReport) => {
					fs.writeFileSync(
						'./lhreport.html',
						ReportGenerator.generateReport(lighthouseReport.lhr, 'html')
					)
				}),
			})
		},
	},
})
