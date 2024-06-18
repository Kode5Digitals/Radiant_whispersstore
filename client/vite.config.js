import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to a file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_APP_WHATSAPP_URL': JSON.stringify(env.VITE_APP_WHATSAPP_URL),
      'process.env.VITE__PAYSTACK_PUBLIC_KEY': JSON.stringify(env.VITE_PAYSTACK_PUBLIC_KEY),
      'process.env.VITE_APP_FACEBOOK_URL': JSON.stringify(env.VITE_APP_FACEBOOK_URL),
    }
    ,
    plugins: [react()],
    optimizeDeps:{
      include: ['jwt-decode'],
    }
    ,
    resolve: {
      alias: {
        // '@pages': path.resolve(__dirname, '/src/pages'),
        '@':  fileURLToPath(new URL('./src/pages', import.meta.url))
      }
    }
  }
  

 
 
})