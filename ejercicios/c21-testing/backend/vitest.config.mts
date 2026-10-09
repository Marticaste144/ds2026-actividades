import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    env: {
      JWT_SECRET: 'secreto-exclusivo-para-tests',
      DATABASE_URL: 'postgresql://postgres:postgres@localhost:5432/libreria',
    },
  },
})
