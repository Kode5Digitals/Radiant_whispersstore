import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

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
    },
    plugins: [react()],
  }
})