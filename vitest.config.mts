import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.spec.ts'],
      exclude: [...configDefaults.exclude],
      typecheck: {
        tsconfig: './tsconfig.vitest.json'
      },
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        reporter: ['text-summary', 'lcov'],
        all: true,
        enabled: true,
        include: ['**/*.ts', '**/*.vue'],
        exclude: [
          ...(configDefaults.coverage.exclude || []),
          '*.ts',
          '*.vue',
          '**/index.ts',
          '**/types.ts',
          '**/constants.ts',
          '**/enums.ts',
          'types/**/*.ts',
          'constants/**/*.ts'
        ]
      }
    }
  })
)
