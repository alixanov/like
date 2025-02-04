import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/reactjs-js-template',
    plugins: [
        // Allows using React dev server along with building a React application with Vite.
        // https://npmjs.com/package/@vitejs/plugin-react-swc
        react(),
    ],
    publicDir: './public',
    server: {
        // Exposes your dev server and makes it accessible for the devices in the same network.
        host: true,
        port: 5173,
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
        },
    },
});
