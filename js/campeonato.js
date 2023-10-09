// Crear menu

// El programa debe de tener
// Registrar jugador
// Editar datos del jugador -> (id,nombre,sexo,edad,talla de uniforme,posicion)
// Eliminar jugador del equipo
// Mostrar equipo
// Mostrar precio del uniforme de todo el equipo

let opcion;

// Iterar equipo
let equipo = [];

let jugador1 = new DatosNuevoJugador(
  1,
  "Leo Mata",
  "Masculino",
  20,
  "Mediano",
  "Ala"
);

let jugador2 = new DatosNuevoJugador(
  2,
  "Ana García",
  "Femenino",
  22,
  "Grande",
  "Centro"
);

let jugador3 = new DatosNuevoJugador(
  3,
  "Carlos López",
  "Masculino",
  24,
  "Chico",
  "Ala"
);

let jugador4 = new DatosNuevoJugador(
  4,
  "María Rodríguez",
  "Femenino",
  21,
  "Mediano",
  "Ala"
);

let jugador5 = new DatosNuevoJugador(
  5,
  "Juan Pérez",
  "Masculino",
  23,
  "Grande",
  "Poste"
);

// Agregamos los jugadores al equipo -> equipo[...]
equipo.push(jugador1, jugador2, jugador3, jugador4, jugador5);

// Función para agregar los datos del nuevo jugador
function DatosNuevoJugador(id, nombre, sexo, edad, tallaUniforme, posicion) {
  (this.id = id),
    (this.nombre = nombre),
    (this.sexo = sexo),
    (this.edad = edad),
    (this.tallaUniforme = tallaUniforme),
    (this.posicion = posicion);
}

// Funcion para el registro de jugador
function registroJugador() {
  let id = equipo.length + 1;
  let nombre = prompt(`Ingrese el nombre del jugador`);
  let sexo = prompt(`Ingrese el seexo del jugador`);

  // Elije el usuario la talla del uniforme del jugador
  // El ciclo hace que elija una opcion válida para que en el condicional se guarde el dato como "Chico", "Mediano" o "Grande"; sólo hay esas tres opciones
  do {
    let tallaUniforme = parseInt(
      prompt(`
    Seleccione la talla de uniforme que requiere
    1.- Chico
    2.- Mediano
    3.- Grande`)
    );
  } while (tallaUniforme != 1 && tallaUniforme != 2 && tallaUniforme != 3);

  switch (tallaUniforme) {
    case 1:
      tallaUniforme = "Chico";
      break;
    case 2:
      tallaUniforme = "Mediano";
      break;
    case 3:
      tallaUniforme = "Grande";
      break;
    default:
      break;
  }

  // Elije el usuario la posición del jugador
  // El ciclo hace que elija una opcion válida para que en el condicional se guarde el dato como "Ala", "Centro" o "Poste"; sólo hay esas tres opciones
  do {
    let posicion = parseInt(
      prompt(`
    Seleccione la posición del jugador
    1.- Ala
    2.- Centro
    3.- Poste`)
    );
  } while (posicion != 1 && posicion != 2 && posicion != 3);

  switch (posicion) {
    case 1:
      posicion = "Ala";
      break;
    case 2:
      posicion = "Centro";
      break;
    case 3:
      posicion = "Poste";
      break;
    default:
      break;
  }

  let nuevoJugador = new DatosNuevoJugador(
    id,
    nombre,
    sexo,
    tallaUniforme,
    posicion
  );
  equipo.push(nuevoJugador);
}

// Función para editar los datos de los jugadores
function editarDatosJugador() {
  mostrarEquipo();

  let idEditarDatosJugador = parseInt(
    prompt(
      `Abra la consola, observe y coloque el id del jugador que requiere editar sus datos`
    )
  );
}

do {
  opcion = parseInt(
    prompt(`
  1.- Registro de jugador
  2.- Editar datos del jugador
  3.- Eliminar jugador
  4.- Mostrar equipo
  5.- Mostrar precio del uniforme
  0.-Salir`)
  );

  switch (opcion) {
    case 1:
      registroJugador();
      break;
    case 2:
      editarJugador();
      break;
    case 3:
      eliminarJugador();
      break;
    case 4:
      mostrarEquipo();
      break;
    case 5:
      mostrarPrecioUniforme();
      break;
    case 0:
      break;
    default:
      console.log(`Por favor elija una opción válida`);
  }
} while (opcion != 0);
