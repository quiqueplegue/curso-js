#!/usr/bin/rhino

var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var file_name = arguments[0];
var f = new FileReader(file_name);
var br = new BufferedReader( f );

var comparando = new Array;
//var best_anotador = new String;
var best_anotador = 0;
var anotacion_actual = 0;
var line = new String;

line = br.readLine();
var titulos = new String( line );
var texto_titulos = titulos.split(", ");

while((line = br.readLine()) != null) {
	var estaLinea = new String( line );
	var comparando = estaLinea.split(", ");
	anotacion_actual = parseInt(comparando[3]);

	if (anotacion_actual > best_anotador){
		best_anotador = anotacion_actual;
	}

	var aJson = new Object();
	aJson.jugador = parseInt(comparando[0]);
	aJson.rebotes = parseInt(comparando[1]);
	aJson.asistencias = parseInt(comparando[2]);
	aJson.puntos = parseInt(comparando[3]);

	var aJsonText = JSON.stringify(aJson, ", ");
	print("Json: " + aJsonText);
}

var best_anotador_Json = JSON.stringify(best_anotador);
print("Mejor anotador: " + best_anotador_Json + " " + texto_titulos[3] + " \n");
