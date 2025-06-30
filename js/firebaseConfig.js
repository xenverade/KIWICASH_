// ✅ firebaseConfig.js (versión modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyAbQD6qqWsP4NeIZcrerDr3GjzcFBVkHwM",
  authDomain: "kiwicash-b690d.firebaseapp.com",
  projectId: "kiwicash-b690d",
  storageBucket: "kiwicash-b690d.appspot.com",
  messagingSenderId: "56859082209",
  appId: "1:56859082209:web:eee9677a246ef6e62126a0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar Firestore
export { db };
