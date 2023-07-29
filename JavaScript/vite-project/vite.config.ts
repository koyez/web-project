import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MySDK',
      fileName: 'my-sdk'
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        exports: "auto"
      }
    }
  }
});
