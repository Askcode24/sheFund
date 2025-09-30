import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
    },
  },
  video: false,
  viewportWidth: 1280,
  viewportHeight: 800,
});
