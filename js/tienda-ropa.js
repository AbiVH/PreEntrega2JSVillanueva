// // Lista de Carrito
// let carrito = [];

// // Variables para Bottoms
// let cantidadShorts = 0;
// let cantidadPantalon = 0;
// let cantidadPants = 0;

// // Variables para Accesorios
// let cantidadPulsera = 0;
// let cantidadCollar = 0;
// let cantidadAnillo = 0;

// // Variables para Calzado
// let cantidadTenis = 0;
// let cantidadZapatos = 0;
// let cantidadChanclas = 0;

// // Variables para Tops
// let cantidadPlayeras = 0;
// let cantidadCamisas = 0;
// let cantidadChamarra = 0;

// // Variables para ciclos do-while
// let opcionMenuPrincipal;
// let opcionCarritoTops;
// let opcionCarritoBottoms;
// let opcionCarritoCalzado;
// let opcionCarritoAccesorios;

// function apartadoTops() {
//   do {
//     opcionCarritoTops = parseInt(
//       prompt(
//         `   APARTADO DE TOPS
//             (Seleccione para Agregar producto)
//      1.- Playera -> $100
//      2.- Camisa -> $100
//      3.- Chamarra -> $200
//      0.- Salir`
//       )
//     );

//     switch (opcionCarritoTops) {
//       case 1:
//         cantidadPlayeras = cantidadPlayeras++;
//         carrito.push(`Playera -> $100`);
//         alert("Gracias por su compra");
//         break;
//       case 2:
//         cantidadCamisas = cantidadCamisas++;
//         carrito.push(`Camisa -> $100`);
//         alert("Gracias por su compra");
//         break;
//       case 3:
//         cantidadChamarra = cantidadChamarra++;
//         carrito.push(`Chamarra -> $200`);
//         alert("Gracias por su compra");
//         break;
//       case 0:
//         opcionCarritoTops = 0;
//         break;
//       default:
//         alert(`Por favor, elija una opcion del menu`);
//     }
//   } while (opcionCarritoTops != 0);
// }

// function apartadoBottoms() {
//   do {
//     opcionCarritoBottoms = parseInt(
//       prompt(
//         `   APARTADO DE BOTTOMS
//             (Seleccione para Agregar producto)
//      1.- Short -> $100
//      2.- Pantalon -> $150
//      3.- Pants -> $150
//      0.- Salir`
//       )
//     );

//     switch (opcionCarritoBottoms) {
//       case 1:
//         cantidadShorts = cantidadShorts++;
//         carrito.push(`Short -> $100`);
//         alert("Gracias por su compra");
//         break;
//       case 2:
//         cantidadPantalon = cantidadPantalon++;
//         carrito.push(`Pantalon -> $150`);
//         alert("Gracias por su compra");
//         break;
//       case 3:
//         cantidadPants = cantidadPants++;
//         carrito.push(`Pants -> $150`);
//         alert("Gracias por su compra");
//         break;
//       case 0:
//         opcionCarritoBottoms = 0;
//         break;
//       default:
//         alert(`Por favor, elija una opcion del menu`);
//     }
//   } while (opcionCarritoBottoms != 0);
// }

// function apartadoAccesorios() {
//   do {
//     opcionCarritoAccesorios = parseInt(
//       prompt(
//         `   APARTADO DE ACCESORIOS
//             (Seleccione para Agregar producto)
//      1.- Pulsera -> $100
//      2.- Anillo -> $50
//      3.- Collar -> $100
//      0.- Salir`
//       )
//     );

//     switch (opcionCarritoAccesorios) {
//       case 1:
//         cantidadPulsera = cantidadPulsera++;
//         carrito.push(`Pulsera -> $100`);
//         alert("Gracias por su compra");
//         break;
//       case 2:
//         cantidadAnillo = cantidadAnillo++;
//         carrito.push(`Anillo -> $50`);
//         alert("Gracias por su compra");
//         break;
//       case 3:
//         cantidadCollar = cantidadCollar++;
//         carrito.push(`Collares -> $100`);
//         alert("Gracias por su compra");
//         break;
//       case 0:
//         opcionCarritoAccesorios = 0;
//         break;
//       default:
//         alert(`Por favor, elija una opcion del menu`);
//     }
//   } while (opcionCarritoAccesorios != 0);
// }

// function apartadoCalzados() {
//   do {
//     opcionCarritoCalzado = parseInt(
//       prompt(
//         `   APARTADO DE CALZADOS
//             (Seleccione para Agregar producto)
//      1.- Tenis -> $1000
//      2.- Zapatos -> $1000
//      3.- Chanclas -> $500
//      0.- Salir`
//       )
//     );

//     switch (opcionCarritoCalzado) {
//       case 1:
//         cantidadTenis = cantidadTenis++;
//         carrito.push(`Tenis -> $1000`);
//         alert("Gracias por su compra");
//         break;
//       case 2:
//         cantidadZapatos = cantidadZapatos++;
//         carrito.push(`Zapatos -> $1000`);
//         alert("Gracias por su compra");
//         break;
//       case 3:
//         cantidadChanclas = cantidadChanclas++;
//         carrito.push(`Chanclas -> $500`);
//         alert("Gracias por su compra");
//         break;
//       case 0:
//         opcionCarritoCalzado = 0;
//         break;
//       default:
//         alert(`Por favor, elija una opcion del menu`);
//     }
//   } while (opcionCarritoCalzado != 0);
// }

// function verCatalogo() {
//   let opcion = parseInt(
//     prompt(
//       `
//       1.- Apartado de tops
//       2.- Apartado de bottoms
//       3.- Apartado de accesorios
//       4.- Apartado de calzado
//         `
//     )
//   );

//   switch (opcion) {
//     case 1:
//       apartadoTops();
//       break;
//     case 2:
//       apartadoBottoms();
//       break;
//     case 3:
//       apartadoAccesorios();
//       break;
//     case 4:
//       apartadoCalzados();
//       break;
//     default:
//       alert(`Por favor, elija una opcion del menu`);
//   }
// }

// function verCarrito() {
//   carrito.forEach((element) => {
//     alert(element);
//   });
//   alert("Estamos felices de su visita :)");
// }

// do {
//   opcionMenuPrincipal = parseInt(
//     prompt(
//       `           Menu
//     1.- Ver catálogo
//     2.- Ver carrito
//     0.- Salir
//     `
//     )
//   );

//   switch (opcionMenuPrincipal) {
//     case 1:
//       verCatalogo();
//       break;
//     case 2:
//       verCarrito();
//       break;
//     case 0:
//       opcionMenuPrincipal = 0;
//       break;
//     default:
//       alert("Por favor, elija una opción del menu");
//       break;
//   }
// } while (opcionMenuPrincipal != 0);

// Este programa debe de ser un carrito de compra
