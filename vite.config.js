import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

const getConfig = ({ command, mode }) => ({
  server: {
    hmr: true,
    watch: {
      usePolling: true
    },
  },
  plugins: [
    react(),
    legacy(),
  ],
})

export default getConfig;