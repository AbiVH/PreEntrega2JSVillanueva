// Crear menu

// El programa debe de tener
// Registrar jugador
// Editar datos del jugador -> (id,nombre,sexo,edad,talla de uniforme)
// Eliminar jugador del equipo
// Mostrar equipo
// Mostrar precio del uniforme de todo el equipo

let opcion;

// Iterar equipo
let equipo = [];

function nuevoJugador(id, nombre, sexo, edad, tallaUniforme) {
  (this.id = id),
    (this.nombre = nombre),
    (this.sexo = sexo),
    (this.edad = edad),
    (this.tallaUniforme = tallaUniforme);
}

// Funcion para el registro de jugador
function registroJugador() {
  let id = equipo.length + 1;
  let nombre = prompt(`Ingrese el nombre del jugador`);
  let sexo = prompt(`Ingrese el seexo del jugador`);
  do {
    let tallaUniforme = parseInt(
      prompt(`
    Seleccione la talla de uniforme que requiere
    1.- Chico
    2.- Mediano
    3.- Grande`)
    );
  } while (tallaUniforme != 1 && tallaUniforme != 2 && tallaUniforme != 3);
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
