const propiedades_ventas = [
    {
        nombre: 'Ático Moderno con Terraza Privada',
        src: 'https://placekitten.com/703/400',
        descripcion: 'Espectacular ático con diseño moderno y una terraza privada con vistas panorámicas. Ideal para quienes buscan lujo y comodidad.',
        ubicacion: 'Calle Exclusiva 567, Ciudad Imaginaria',
        habitaciones: 3,
        bathroom: 2,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento Vintage en el Barrio Bohemio',
        src: 'https://placekitten.com/703/401',
        descripcion: 'Encantador apartamento con estilo vintage ubicado en el animado barrio bohemio. Cercano a galerías de arte y cafeterías.',
        ubicacion: 'Avenida Creativa 789, Ciudad Imaginaria',
        habitaciones: 2,
        bathroom: 1,
        costo: 3200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de Playa con Acceso Privado a la Arena',
        src: 'https://placekitten.com/704/400',
        descripcion: 'Acogedora casa de playa con acceso privado a la arena. Perfecta para disfrutar de días soleados y noches tranquilas junto al mar.',
        ubicacion: 'Calle Costera 123, Ciudad Imaginaria',
        habitaciones: 4,
        bathroom: 3,
        costo: 5500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Loft Industrial en el Centro Urbano',
        src: 'https://placekitten.com/704/401',
        descripcion: 'Amplio loft con diseño industrial en el centro urbano. Espacios abiertos y detalles modernos para una experiencia única.',
        ubicacion: 'Calle Urbana 456, Ciudad Imaginaria',
        habitaciones: 1,
        bathroom: 1,
        costo: 2800,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Colonial con Patio Encantador',
        src: 'https://placekitten.com/705/400',
        descripcion: 'Elegante casa colonial con un patio encantador. Detalles arquitectónicos clásicos y comodidades modernas en armonía.',
        ubicacion: 'Calle Histórica 101, Ciudad Imaginaria',
        habitaciones: 5,
        bathroom: 4,
        costo: 4800,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Piso Minimalista con Vistas a la Montaña',
        src: 'https://placekitten.com/705/401',
        descripcion: 'Moderno piso minimalista con impresionantes vistas a la montaña. Diseño limpio y elegante para una experiencia tranquila.',
        ubicacion: 'Avenida Serena 234, Ciudad Imaginaria',
        habitaciones: 2,
        bathroom: 2,
        costo: 3700,
        smoke: false,
        pets: true
    },
];

const sectionAlquiler = document.getElementById('sectionVentas')

const showCards = (elementId,propiedades) => {
    propiedades.forEach((i) => {
      const card = document.createElement("div");
      card.className = `col-md-4 mb-4`;
      card.innerHTML = `
      <div class="card">
        <img src=${i.src} />
        <div class="card-body">
          <h5 class="card-title">${i.nombre}</h5>
          <p class="card-text">
            ${i.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${i.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i>${i.habitaciones} |
            <i class="fas fa-bath"></i>${i.bathroom}
          </p>
          <p><i class="fas fa-dollar-sign"></i>${i.costo}</p>
            ${
              i.smoke
                ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
            }
            ${
              i.pets
                ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
            }
        </div>
      </div>
      `;
  
      elementId.appendChild(card);
    });
  };

showCards(sectionVentas, propiedades_ventas);