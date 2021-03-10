function mostrar() {
  let nombre, carrera, sexo, cant, nota, edad, i;
  let maxNotF, maxNot, flagNot = 0;
  let minEdF, flagMinEdF = 0, nomMinEdadF;
  let contQ = 0, contF = 0, contS = 0;
  let acumQ = 0, acumF = 0, acumS = 0;
  let contGen = 0, porQ = 0, porF = 0, porS = 0;
  let porcQ, porcF, porcS;
  let flagMat = 0, maxMat, edMaxMat, nomMaxMat;

  for (i = 0; i < 500; i++) {
    nombre = prompt("Ingrese su nombre:");
    while (!isNaN(nombre)) {
      nombre = prompt("Error. Reingrese su nombre:");
    }
    carrera = prompt(
      "Ingrese su carrera: (quimica/fisica/sistemas)"
    ).toLowerCase();
    while (
      !(carrera == "quimica" || carrera == "fisica" || carrera == "sistemas")
    ) {
      carrera = prompt(
        "Error. Reingrese su carrera: (quimica/fisica/sistemas)"
      ).toLowerCase();
    }
    sexo = prompt("Ingrese su sexo: (f/m/nb)").toLowerCase();
    while (!(sexo == "f" || sexo == "m" || sexo == "nb")) {
      sexo = prompt("Error. Reingrese su sexo: (f/m/nb)").toLowerCase();
    }
    cant = parseInt(prompt("Ingrese cantidad de materias:"));
    while (cant < 1 || cant > 5 || isNaN(cant)) {
      cant = parseInt(
        prompt("Error. Reingrese cantidad de materias: (Entre 1 y 5)")
      );
    }
    nota = parseInt(prompt("Ingrese su nota:"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
      nota = parseInt(prompt("Error. Reingrese su nota: (Entre 0 y 10)"));
    }
    edad = prompt("Ingrese su edad:");
    while (isNaN(edad) || edad < 0) {
      edad = prompt("Error. Reingrese su edad:");
    }
    switch(carrera){
        case "quimica":
        acumQ += nota;
        contQ++;
        break;
        case "fisica":
        acumF += nota;
        contF++;
        break;
        case "sistemas":
        acumS += nota;
        contS++;
        break;
    }
    if(carrera == "fisica" && (flagNot == 0 || maxNot < nota)){
        maxNot = nota;
        maxNotF = nombre;
        flagNot = 1;
    }
    if(sexo == "f" && (flagMinEdF == 0 || minEdF > edad)){
        minEdF = edad;
        nomMinEdadF = nombre;
    }
    contGen++
  }
  porQ = (contQ / contGen) * 100;
  if(porQ == 0){
    porcQ = "No se ingresó la carrera química";
  } else {
      porcQ = `El porcentaje de estudiantes que estudia química es ${porQ}`;
  }
  porF = (contF / contGen) * 100;
  if(porF == 0){
    porcF = "No se ingresó la carrera física";
  } else {
      porcF = `El porcentaje de estudiantes que estudia física es ${porF}`;
  }
  porS = (contS / contGen) * 100;
  if(porS == 0){
    porcS = "No se ingresó la carrera de sistemas";
  } else {
      porcS = `El porcentaje de estudiantes que estudia sistemas es ${porS}`;
  }

  if(carrera != "quimica" && (flagMat == 0 || maxMat < cant)){
      maxMat = cant;
      edMaxMat = edad;
      nomMaxMat = nombre;
  }

  alert(`a) El alumno con mejor promedio que estudia física se llama ${maxNotF}.`);
  alert(`b) La alumna más joven se llama ${nomMinEdadF}.`);
  alert(`c) ${porcQ}. \n${porcF}. \n${porcS}.`)
  alert(`d) La persona que cursa más materias, exceptuando química, se llama ${nomMaxMat} y tiene ${edMaxMat} años.`)
}
