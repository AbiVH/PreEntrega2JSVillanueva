// Crear menu

// El programa debe de tener
// Registrar jugador
// Editar datos del jugador -> (id,nombre,sexo,edad,talla de uniforme,posicion)
// Eliminar jugador del equipo
// Mostrar equipo
// Mostrar precio del uniforme de todo el equipo

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

// Agregamos los jugadores al equipo -> equipo[...] para tener un registro de los id
equipo.push(jugador1, jugador2, jugador3, jugador4, jugador5);

// Agregamos los jugadores al equipo -> equipo[...] para actuzalizar el equipo después de una eliminación
let equipoActualizado = equipo.concat("");

// Función para mostrar al equipo
function mostrarEquipo() {
  console.clear();
  console.log("equipo");
  equipo.forEach((jugadores) => console.log(jugadores));
  console.log("equipoActualizado");
  equipoActualizado.forEach((jugadores) => console.log(jugadores));
}

// Función para agregar los datos del nuevo jugador
function DatosNuevoJugador(id, nombre, sexo, edad, tallaUniforme, posicion) {
  console.clear();
  (this.id = id),
    (this.nombre = nombre),
    (this.sexo = sexo),
    (this.edad = edad),
    (this.tallaUniforme = tallaUniforme),
    (this.posicion = posicion);
}

// Funcion para el registro de jugador
function registroJugador() {
  console.clear();
  let id = equipo.length + 1;
  let nombre = prompt(`Ingrese el nombre del jugador`);
  let sexo;
  // Elije el usuario el sexo del jugador
  // El ciclo hace que elija una opcion válida para que en el condicional se guarde el dato como "masculino" o "femenino"; sólo hay esas tres opciones
  do {
    sexo = parseInt(
      prompt(`
    Seleccione la talla de uniforme que requiere
    1.- masculino
    2.- femenino`)
    );
  } while (sexo != 1 && sexo != 2);
  switch (sexo) {
    case 1:
      sexo = "masculino";
      break;
    case 2:
      sexo = "femenino";
      break;
    default:
      break;
  }

  let edad = parseInt(prompt(`Ingrese la edad del jugador`));

  // Elije el usuario la talla del uniforme del jugador
  // El ciclo hace que elija una opcion válida para que en el condicional se guarde el dato como "Chico", "Mediano" o "Grande"; sólo hay esas tres opciones

  let tallaUniforme;
  do {
    tallaUniforme = parseInt(
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

  let posicion;
  do {
    posicion = parseInt(
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
    edad,
    tallaUniforme,
    posicion
  );
  equipoActualizado.push(nuevoJugador);
  equipo.push(nuevoJugador);

  mostrarEquipo();
}

// Función para eliminar jugador
function eliminarJugador(idEliminarJugador) {
  // Pido los datos desde el switch para que pueda reutilizar la función de eliminarJugador() en la función de editarJugador()

  equipoActualizado.splice(idEliminarJugador - 1, 1);
  mostrarEquipo();
}

// Función para filtrar jugadores entre categoría femenil y varonil
function filtradoEquipo(categoria) {
  console.clear();
  let equipoFiltrado = equipoActualizado.filter(
    (equipo) => equipo.sexo === categoria
  );
  equipoFiltrado.forEach((jugadores) => console.log(jugadores));
}

// Función para la busqueda de algún jugador
function busquedaJugador() {
  let buscarNombreJugador = prompt(
    `Ingrese el nombre del jugador que quiere buscar`
  );
  let buscarJugador = equipoActualizado.find(
    (nombreJugador) =>
      nombreJugador.nombre.toLowerCase() === buscarNombreJugador.toLowerCase
  );
  if (buscarJugador) {
    console.clear();
    console.log(buscarJugador);
  } else {
    console.clear();
    console.log(`No se encontró ningún jugador con ese nombre`);
  }
}

let opcion;
let catergoria;

// MENU PRINCIPAL
do {
  opcion = parseInt(
    prompt(`
  1.- Registro de jugador
  2.- Eliminar jugador
  3.- Mostrar equipo
  4.- Filtrado de equipo femenil
  5.- Filtrado de equipo varonil
  6.- Busqueda de jugador 
  7.- Mostrar precio del uniforme
  0.-Salir`)
  );

  switch (opcion) {
    case 1:
      registroJugador();
      break;
    case 2:
      // Pido los datos desde el switch para que pueda reutilizar la función de eliminarJugador() en la función de editarJugador()
      console.clear();
      mostrarEquipo();
      let idEliminarJugador = parseInt(
        prompt(
          `Abra la consola, observe y coloque el id del jugador que requiere eliminar`
        )
      );
      eliminarJugador(idEliminarJugador);

      break;
    case 3:
      mostrarEquipo();
      break;
    case 4:
      categoria = "Femenino";
      filtradoEquipo(categoria);
      break;
    case 5:
      categoria = "Masculino";
      filtradoEquipo(categoria);
      break;

    case 6:
      busquedaJugador();
      break;
    case 7:
      mostrarPrecioUniforme();
      break;
    case 0:
      break;
    default:
      console.log(`Por favor elija una opción válida`);
  }
} while (opcion != 0);
