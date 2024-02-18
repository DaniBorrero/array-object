

const propiedades_alquiler = [
    {
        nombre: 'Lujoso Apartamento en el Centro Histórico',
        src: 'https://placekitten.com/700/400',
        descripcion: 'Encantador apartamento de 3 habitaciones en el corazón del centro histórico. Espacios amplios y vistas impresionantes.',
        ubicacion: 'Calle Principal 123, Ciudad Ejemplo',
        habitaciones: 3,
        bathroom: 2,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Moderna con Jardín Sereno',
        src: 'https://placekitten.com/700/401',
        descripcion: 'Hermosa casa con diseño moderno y un tranquilo jardín. Perfecta para aquellos que buscan un oasis de paz.',
        ubicacion: 'Avenida Tranquila 456, Pueblo Ejemplo',
        habitaciones: 4,
        bathroom: 3,
        costo: 2500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Piso Ejecutivo con Vista al Mar',
        src: 'https://placekitten.com/701/400',
        descripcion: 'Elegante piso ejecutivo con impresionantes vistas al mar. Totalmente amueblado y equipado para el profesional moderno.',
        ubicacion: 'Paseo Marítimo 789, Ciudad Ejemplo',
        habitaciones: 2,
        bathroom: 2,
        costo: 4000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Chalet Familiar con Piscina Privada',
        src: 'https://placekitten.com/701/401',
        descripcion: 'Amplio chalet ideal para familias, con piscina privada y áreas verdes. La combinación perfecta de comodidad y entretenimiento.',
        ubicacion: 'Calle Residencial 101, Pueblo Ejemplo',
        habitaciones: 5,
        bathroom: 4,
        costo: 3500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Estudio Loft en el Distrito Artístico',
        src: 'https://placekitten.com/702/400',
        descripcion: 'Moderno estudio loft ubicado en el vibrante distrito artístico. Diseño contemporáneo y acceso a galerías de arte y cafeterías locales.',
        ubicacion: 'Calle Creativa 234, Ciudad Ejemplo',
        habitaciones: 1,
        bathroom: 1,
        costo: 2000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de Campo con Vistas Panorámicas',
        src: 'https://placekitten.com/702/401',
        descripcion: 'Encantadora casa de campo con impresionantes vistas panorámicas. Perfecta para aquellos que buscan tranquilidad y conexión con la naturaleza.',
        ubicacion: 'Camino Rural 567, Pueblo Ejemplo',
        habitaciones: 3,
        bathroom: 2,
        costo: 2800,
        smoke: true,
        pets: true
    },
];


const sectionAlquiler = document.getElementById('sectionAlquiler')

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

showCards(sectionAlquiler, propiedades_alquiler);

