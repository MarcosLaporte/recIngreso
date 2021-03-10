function mostrar() {
  let nombre, edad, sexo, puesto, sueldo, seguir;
  let sueP = 0,
    sueA = 0,
    sueQ = 0;
  let contP = 0,
    contA = 0,
    contQ = 0;
  let promP, promA, promQ;
  let sueF = 0,
    sueM = 0,
    sueNB = 0;
  let contF = 0,
    nomFMaxSue, flagFSue = 0, maxSueF = 0;
	let contPNB = 0;

  do {
    nombre = prompt("Ingrese su nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Reingrese su nombre:");
    }
    edad = prompt("Ingrese su edad:");
    while (isNaN(edad) || edad < 0) {
      edad = prompt("Error. Reingrese su edad:");
    }
    sexo = prompt("Ingrese su sexo: (f/m/nb)").toLowerCase();
    while (!(sexo == "f" || sexo == "m" || sexo == "nb")) {
      sexo = prompt("Error. Reingrese su sexo: (f/m/nb)").toLowerCase();
    }
    puesto = prompt(
      "Ingrese su puesto: (programador/analista/Qa)"
    ).toLowerCase();
    while (
      !(puesto == "programador" || puesto == "analista" || puesto == "qa")
    ) {
      puesto = prompt(
        "Error. Reingrese su puesto: (programador/analista/Qa)"
      ).toLowerCase();
    }
    sueldo = parseFloat(prompt("Ingrese su sueldo:"));
    while (sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)) {
      sueldo = parseFloat(
        prompt("Error. Reingrese su sueldo: (Entre 15000 y 70000)")
      );
    }
    switch (puesto) {
      case "programador":
        sueP += sueldo;
        contP++;
        break;
      case "analista":
        sueA += sueldo;
        contA++;
        break;
      case "qa":
        sueQ += sueldo;
        contQ++;
        break;
    }
    switch (sexo) {
      case "f":
        sueF += sueldo;
        contF++;

        break;
      case "m":
        sueM += sueldo;
        break;
      case "nb":
        sueNB += sueldo;
        break;
    }
	if(puesto == "programador" && sexo == "nb" && (sueldo > 20000 && sueldo < 50000)){
		contPNB++;
	}
    seguir = prompt("Escriba 's' si quiere continuar.").toLowerCase();
} while (seguir == "s");

if (sueP == 0) {
	promP = "No se ingresaron programadores.";
} else if (sueP > 0) {
	promP = `El promedio de sueldo de programadores es $${sueP / contP}.`;
}
if (sueA == 0) {
	promA = "No se ingresaron analistas.";
} else if (sueA > 0) {
	promA = `El promedio de sueldo de analistas es $${sueA / contA}.`;
}
if (sueQ == 0) {
	promQ = "No se ingresaron Qa.";
} else if (sueQ > 0) {
	promQ = `El promedio de sueldo de Qa es $${sueQ / contQ}.`;
}

alert(`a) ${promP} \n${promA} \n${promQ}`);

if (sueF > sueM && sueF > sueNB) {
	alert(`b) El sexo con el mayor sueldo es el femenino.`);
}
if (sueM > sueF && sueM > sueNB) {
	alert(`b) El sexo con el mayor sueldo es el masculino.`);
}
if (sueNB > sueM && sueNB > sueF) {
	alert(`b) El sexo con el mayor sueldo es el no binario.`);
}

if (flagFSue || sueldo > maxSueF) {
	maxSueF = sueldo;
	nomFMaxSue = nombre;
}
  if (contF == 0) {
    alert(`c) No se ingresaron femeninos.`);
  } else {
    alert(
      `c) El nombre del empleado femenino con más sueldo es ${nomFMaxSue}.`
    );
  }
  if(contPNB == 0){
	  alert(`d) No se ingresaron programadores no binarios con sueldos entre 20000 y 50000.`)
  }
  else if(contPNB > 0){
	  alert(`d) La cantidad de programadores no binarios con sueldos entre 20000 y 50000 es de ${contPNB}.`)
  }
}
