import type { TestRunnerConfig } from '@storybook/test-runner'
import { checkA11y, injectAxe } from 'axe-playwright'

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page) {
    // Accessibility Testing
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    })

    // Snapshot Testing
    const elementHandler = await page.$('#storybook-root')
    if (elementHandler !== null) {
      const innerHTML = await elementHandler.innerHTML()
      // @ts-ignore
      expect(innerHTML).toMatchSnapshot()
    }
  }
}

export default config
