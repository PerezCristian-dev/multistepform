// JavaScript source code
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);


function dibujarRectangulo(x, y, base, altura, color) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = color;
    pincel.fillRect(x, y, base, altura);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, base, altura);
}

function escribirTexto(x, y, texto) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.font = "15px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(texto, x, y);
}


var datos = [];
var legenda = [];
var position = 10;
var size = 50;

/*600*/

function createDatosyLegenda() {

    var barras = document.getElementById("cantidadBarras");
    var valores = document.getElementById("valores");
    var legendas = document.getElementById("valores");

    datos.push(valores.Value);
    legenda.push(legendas.Value);


}

function crearGraficos(numeroDeBarras, ValorMaximo, color, valor) {



    dibujarRectangulo(10, 100, 50, 100, "red");

}

var valor = 300;
var canvaslatura = document.querySelector("canvas").height;
var tamaño = canvaslatura - valor;
var posicion = 10
var etiqueta = "Rosas"



dibujarRectangulo(posicion, tamaño, 50, valor, "grey");
dibujarRectangulo(posicion, tamaño2, 50, valor, "red");
escribirTexto(posicion, tamaño - 2, etiqueta);
escribirTexto(posicion, tamaño + (valor / 2), valor);