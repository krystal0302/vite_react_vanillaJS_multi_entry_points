// vite.config.js
/** @type {import('vite').UserConfig} */

import fs from 'fs'
import { resolve } from 'path'
import 'process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

const ROOT = resolve(__dirname, 'src');
console.log(`ROOT ${ROOT}`)

const PUBLIC = resolve(__dirname, 'src/public');
console.log(`PUBLIC ${PUBLIC}`)

const ASSETS = resolve(__dirname, 'src/assets');
console.log(`ASSETS ${ASSETS}`)

const OUTPUT_DIR = resolve(__dirname, 'dist');
console.log(`OUTPUT_DIR ${OUTPUT_DIR}`)

function test() {
  let a = resolve(ROOT, 'ui/test2/index.html')
  console.log(a)
  return a
}

function getInput() {
  let inputs = {};
  const files = fs.readdirSync(ROOT);
  const htmlFiles = files.filter(file => file.endsWith('.html'));
    htmlFiles.forEach(file => {
      const inputKey = file.replace('.html', '');
      console.log(inputKey);
      inputs[inputKey] = resolve(ROOT, file);
  });

  console.log(inputs)

  return inputs;
}

export default defineConfig( ({ command, mode }) => {
  return {
    root: ROOT,
    publicDir: PUBLIC,
    resolve: {
      alias: {
        '@':  ROOT,
        '@assets':  ASSETS,
      },
    },
    server: {
      port: 4050,
      open: '/web_gl_test.html'
    },
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: OUTPUT_DIR,
      rollupOptions: {
        input: getInput()
        // {
        //   dashobard: resolve(ROOT, 'dashobard.html'),
        //   visTest: resolve(ROOT, 'visNetworkTest.html'),
        //   drawflow: resolve(ROOT, 'drawflowTest.html'),
        // }
      }
    },
    plugins: [react()],
    esbuild: {
      loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
        plugins: [
          {
            name: 'load-js-files-as-jsx',
            setup(build) {
              build.onLoad(
                {
                  filter: /src\\.*\.js$/ },
                  async (args) => ({
                    loader: 'jsx',
                    contents: await fs.readFile(args.path, 'utf8'),
                  })
              );
            },
          },
        ],
      },
    },
  }
})
