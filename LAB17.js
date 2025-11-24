// EJERCICIO 3
document.getElementById("btn-ej3").addEventListener("click", function () {
  try {
    noExiste;  // Provocar error
  } catch (e) {
    console.log("EJERCICIO 3 ->", e.message);
  }
});


// EJERCICIO 4 
document.getElementById("btn-ej4").addEventListener("click", function () {
  try {
    JSON.parse("texto inválido");  
  } catch (e) {
    console.log("EJERCICIO 4 ->", e.name, "-", e.message);
  }
});


// EJERCICIO 5
document.getElementById("btn-ej5").addEventListener("click", function () {
  try {
    console.log(variableInexistente); // error
  } catch (e) {
    console.log("falló");
  } finally {
    console.log("siempre se ejecuta");
  }
});


// EJERCICIO 6
function validarEdad(edad) {
  if (isNaN(edad) || edad < 0) {
    throw new Error("Edad inválida");  // metodo importante: throw
  }
  return "Edad correcta";
}

document.getElementById("btn-ej6").addEventListener("click", function () {
  try {
    validarEdad(-5);
  } catch (e) {
    console.log("EJERCICIO 6 ->", e.message);
  }
});


// EJERCICIO 7
document.getElementById("btn-ej7").addEventListener("click", function () {
  try {
    let x = null;
    x.nombre;  // TypeError
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("EJERCICIO 7 -> Es TypeError");
    } else {
      console.log("EJERCICIO 7 -> Otro tipo de error");
    }
  }
});
