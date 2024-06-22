const datossitioweb = [
  {
    nombre: "Transportes Palacios",
    descripcion: "Es una página web que promociona el acarreo de materiales en la zona centro-norte de Honduras.",
  },
  {
    nombre: "Sitio de noticias",
    descripcion: "Esta destinado para publicar artículos, noticias y reportajes.",
  },
  {
    nombre: "Página de deportes",
    descripcion: "Dedicada a proporcionar noticias y actualizaciones sobre los deportes más populares del mundo.",
  }
];

const datosaplicacionesescritorio = [
  {
    nombre: "Beauty Salon",
    descripcion: "La aplicación facilita la programación de citas, el envío de recordatorios automáticos, la administración del inventario de productos, así como la gestión detallada de la información de clientes y la generación de reportes financieros precisos.",
  },
  {
    nombre: "Junta de Agua",
    descripcion: "Permite registrar información sobre los miembros de la junta, llevar un seguimiento de los pagos de los usuarios, programar mantenimientos y enviar notificaciones importantes.",
  }
];

const datosappsmoviles = [
  {
    nombre: "WeChat",
    descripcion: "Es una app de mensajería instantánea que ofrece un registro y acceso seguro, además de un diseño intuitivo y fácil para cualquier usuario.",
  },
];

function actualizarTarjetas(seccionId, datos) {
  const tarjetas = document.querySelectorAll(`#${seccionId} .card`);
  datos.forEach((proyecto, index) => {
    const tarjeta = tarjetas[index];
    if (tarjeta) {
      const h4 = tarjeta.querySelector("h4");
      const p = tarjeta.querySelector("p");
      if (h4) h4.textContent = proyecto.nombre;
      if (p) p.textContent = proyecto.descripcion;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarTarjetas("sitiosweb", datossitioweb);
  actualizarTarjetas("appsescritorio", datosaplicacionesescritorio);
  actualizarTarjetas("appsmoviles", datosappsmoviles);
});