document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault();

  const subtotal = parseFloat(document.getElementById('subtotal').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);

  // Validación de entrada
  if (isNaN(subtotal) || isNaN(porcentaje)) {
    document.getElementById('resultado').innerHTML = 
      `<span style="color: red;">Por favor, ingresa valores válidos.</span>`;
    return;
  }

  const propina = subtotal * (porcentaje / 100);
  const total = subtotal + propina;

  document.getElementById('resultado').innerHTML = `
    <p>Propina: $${propina.toFixed(2)}</p>
    <p>Total a pagar: $${total.toFixed(2)}</p>
  `;
});
