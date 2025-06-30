// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAbQD6qqWsP4NeIZcrerDr3GjzcFBVkHwM",
  authDomain: "kiwicash-b690d.firebaseapp.com",
  projectId: "kiwicash-b690d",
  storageBucket: "kiwicash-b690d.firebasestorage.app",
  messagingSenderId: "56859082209",
  appId: "1:56859082209:web:eee9677a246ef6e62126a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
