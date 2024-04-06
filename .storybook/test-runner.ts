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
    await page.setViewportSize({ width: 1000, height: 1000 })

    // Accessibility test
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true
      }
    })

    // Snapshot test
    const elementHandler = await page.$('#storybook-root')
    if (elementHandler !== null) {
      const innerHTML = await elementHandler.innerHTML()
      // @ts-ignore
      expect(innerHTML).toMatchSnapshot()
    }
  }
}

export default config
