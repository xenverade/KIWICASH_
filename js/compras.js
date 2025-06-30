import { db } from './firebaseConfig.js';
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
  const listaCompras = document.getElementById("lista-compras");
  if (!listaCompras) return;

  try {
    const comprasQuery = query(collection(db, "compras"), orderBy("fecha", "desc"));
    const snapshot = await getDocs(comprasQuery);

    if (snapshot.empty) {
      listaCompras.innerHTML = "<p>No hay compras registradas aún.</p>";
      return;
    }

    listaCompras.innerHTML = ""; // limpia antes de renderizar

    snapshot.forEach(doc => {
      const compra = doc.data();

      const div = document.createElement("div");
      div.style.cssText = `
        margin-bottom: 1.5rem;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 8px;
        background: #f9f9f9;
      `;

      const productosHTML = compra.productos.map(p => `
        <li>${p.titulo} x${p.cantidad} - S/ ${(p.precio * p.cantidad).toFixed(2)}</li>
      `).join("");

      const fechaCompra = compra.fecha?.seconds
        ? new Date(compra.fecha.seconds * 1000).toLocaleString()
        : "Fecha no disponible";

      div.innerHTML = `
        <h4>🕓 ${fechaCompra}</h4>
        <ul>${productosHTML}</ul>
        <p><strong>Total:</strong> S/ ${compra.total.toFixed(2)}</p>
        <p><strong>Método:</strong> ${compra.metodo}</p>
      `;

      listaCompras.appendChild(div);
    });

  } catch (error) {
    console.error("❌ Error al cargar compras:", error);
    listaCompras.innerHTML = "<p>Error al obtener compras.</p>";
  }
});
