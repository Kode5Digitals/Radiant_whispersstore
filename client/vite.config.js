import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_Whatsapp_url': JSON.stringify(env.SOME_KEY),
      'process.env.REACT_APP_Facebook_URL': JSON.stringify(env.SOME_KEY),
      'process.env.REACT_APP_PAYSTACK_PUBLIC_KEY': JSON.stringify(env.SOME_KEY),
      'process.env.REACT_APP_PAYSTACK_SECRET_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [react()],
  }
})