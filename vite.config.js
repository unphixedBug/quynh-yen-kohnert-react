import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/quynh-yen-kohnert-react/' : '/', // Gestion conditionnelle de base
}));
