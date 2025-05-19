import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                panel: resolve(__dirname, 'src/panel.html'),
                main: resolve(__dirname, 'src/index.html'),
                create: resolve(__dirname, 'src/create.html'),
                register: resolve(__dirname, 'src/register.html'),
                login: resolve(__dirname, 'src/login.html'),
                forgetPassword: resolve(__dirname, 'src/forget-password.html'),
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
})
