console.log(`Trabajando con Listas: `);

const bogota = "Bogota";
const Lima = "Lima";
const Santigo="Santigo";
const buenosAires = "Buenos Aires";

console.log (bogota, Lima, Santigo, buenosAires);
let ciudades = [bogota, Lima, Santigo, buenosAires];

console.log (ciudades[0]);
const ciudadesDisponibles = new Array({
    pais: "bogota",
    estado: "newyork",
});

ciudadesDisponibles.push({estado: "miami"});
cantidad = ciudades.length;
console.log(ciudadesDisponibles);
ciudades.pop(bogota);
console.log(ciudades);
console.log(`Tenemos ${cantidad} ciudades disponible`);


