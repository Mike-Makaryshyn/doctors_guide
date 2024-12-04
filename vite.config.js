import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
   rollupOptions: {
     external: ['jspdf', 'react-firebase-hooks', 'jspdf-autotable', 'react-firebase-hooks/auth', 'firebase/firestore', 'firebase/auth', 'firebase/app'], // Exclude jsPDF from the bundle
   },
 },
};
