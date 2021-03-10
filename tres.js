function mostrar()
{
	let nombre, cant, marca, precio, seguir;
	let preTot = 0;
	let descFel = 0, cantFel = 0, precioFel = 0;
	let descArg = 0, cantArg = 0, precioArg = 0;
	let contFel = 0, contArg = 0, contIll = 0, contGen = 0;
	let proF = 0, proA = 0, proI = 0;
	let perd = 0;
	let flag = 0, maxVenta = 0, nombreMax = "";
	do {
		nombre = prompt("Ingrese su nombre:");
		while (!isNaN(nombre)) {
			nombre = prompt("Error. Reingrese su nombre:");
		}
		cant = parseInt(prompt("Ingrese cantidad de lámparas:"));
		while (isNaN(cant) || cant < 1) {
			cant = parseInt(prompt("Error. Reingrese cantidad de lámparas:"));
		}
		marca = prompt("Ingrese marca de la lámpara:").toLowerCase();
		while (!(marca == "felipelamparas" || marca == "argentinaluz" || marca == "illuminatis")) {
			marca = prompt("Error. Reingrese marca de la lámpara (FelipeLamparas/ArgentinaLuz/Illuminatis):").toLowerCase();
		}
		precio = parseFloat(prompt("Ingrese el precio de la lámpara:"));
		while (isNaN(precio) || precio < 1) {
			precio = parseFloat(prompt("Reingrese el precio de la lámpara:"));
		}
		switch (marca) {
			case "felipelamaparas":
				contFel++;
				cantFel += cant;
				precioFel += precio * cant;
				break;
			case "argentinaluz":
				contFel++;
				cantArg += cant;
				precioArg += precio * cant;
				break;
			case "illuminatis":
				contIll++;
				break;
		}
		preTot += (precio * cant);
		if (flag == 0) {
			maxVenta = preTot;
			nombreMax = marca;
			flag = 1;
		} else if (maxVenta < preTot) {
			maxVenta = preTot;
			nombreMax = marca;
		}
		contGen++;
		seguir = prompt("Escriba 's' si quiere continuar.").toLowerCase();
	} while (seguir == "s");

	if (cantFel >= 5) {
		descFel = precioFel - (precioFel * .1);
	}
	if (cantArg >= 3) {
		descArg = precioArg - (precioArg * .05);
	}

	perd = Math.round(preTot * 100 / (descArg + descFel));	//B
	
	proF = contFel / contGen;	//C
	proA = contArg / contGen;	//C
	proI = contIll / contGen;	//C
	
	alert(`a) En concepto de todas las ventas realizadas, la empresa recauda ${preTot}.`);
	alert(`b) La empresa perdió ${perd}%.`);
	alert(`c) El promedio de la cantidad de lámparas vendidas es: \nFelipeLámparas: ${proF}. \nArgentinaLuz: ${proA}. \nIlluminatis: ${proI}.`);
	alert(`d) La marca que mas ventas realizó es ${nombreMax}, con un total de ${maxVenta} ventas.`);
}
