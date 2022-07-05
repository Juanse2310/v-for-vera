alert("bienvenidos a la casa de tatuajes");



let opcion = prompt(
    "ingrese una opcion: \n 1: Presupuesto tatuaje   \n 2: insumos \n 3: turnos \n 4: salir"
);

while (opcion !== "4") {
    if (opcion === "1") {
        calcuPresupuest(arrayPresupuesto);
    }
    if (opcion === "2") {
      alert("proximamente insumos");
    }
    if (opcion === "3") {
      alert("proximamente Turnos");
    }

    opcion = prompt(
        "ingrese una opcion: \n 1: Presupuesto tatuaje   \n 2: insumos \n 3: turnos \n 4: salir"
      );
    }
    class Presupuesto {
        constructor(altura, ancho, color){
            this.altura = this.altura;
            this.ancho = this.ancho;
            this.color = this.color;
        }
    }
    function calcuPresupuesto(arrayPresupuesto){
    let altura = prompt("ingrese la altura del tatuaje ( en CM) ");
    let ancho = prompt("ingrese el ancho del tatuaje ( en CM) ");
    let color = prompt("es a color?? Si / No / No estoy seguro...tal vez.... no lo se... dudo... ");
    
    const nuevoPresupu = new Presupuesto(altura, ancho, color);
    }
    calculo_tamaño = (altura * ancho);
    calculo_cm2 = (0.1 * calculo_tamaño)
    const Preciario = (400);
    //const coloreado = (0.4);
    //const disenio = (0.3);
    calculo_subtotal = (Preciario * calculo_cm2);
    calculo_coloreado = (calculo_subtotal * coloreado);
    console.log("subtotal: " + calculo_subtotal);
    console.log("color: " + calculo_coloreado);
    calculo_final = (calculo_subtotal + calculo_coloreado);
    console.log(calculo_final);
    
    alert("su presupuesto para pincharse es de: $" + calculo_final);