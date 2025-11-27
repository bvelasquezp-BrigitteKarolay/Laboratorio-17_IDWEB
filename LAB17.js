// EJERCICIO 3
document.getElementById("btn-ej3").addEventListener("click", function () {
  const out = document.getElementById("out-ej3");
  try {
    ejecutarError(); 
  } catch (e) {
    out.textContent = "ERROR: " + e.message;
  }
});


// EJERCICIO 4 
document.getElementById("btn-ej4").addEventListener("click", function () {
  const out = document.getElementById("out-ej4");
  try {
    JSON.parse("{id:1}");
  } catch (e) {
    out.textContent = e.name + " - " + e.message;
  }
});


// EJERCICIO 5 
document.getElementById("btn-ej5").addEventListener("click", function () {
  const out = document.getElementById("out-ej5");

  try {
    let x = null;
    console.log(x.propiedad); 
  } catch (e) {
    out.textContent = "FALLO";
  } finally {
    out.textContent += " | SIEMPRE SE EJECUTA";
  }
});


// EJERCICIO 6 
function validarEdad(edad) {
  if (isNaN(edad) || edad < 0) {
    throw new Error("Edad invalida");
  }
  return "Edad valida: " + edad;
}

document.getElementById("btn-ej6").addEventListener("click", function () {
  const out = document.getElementById("out-ej6");
  const valor = Number(document.getElementById("inp-ej6").value);

  try {
    out.textContent = validarEdad(valor);
  } catch (e) {
    out.textContent = "ERROR: " + e.message;
  }
});


// EJERCICIO 7 
document.getElementById("btn-ej7").addEventListener("click", function () {
  const out = document.getElementById("out-ej7");

  try {
    let x = null;
    x.nombre;
  } catch (e) {
    if (e instanceof TypeError) {
      out.textContent = "TYPEERROR: " + e.message;
    } else {
      out.textContent = "OTRO ERROR: " + e.message;
    }
  }
});


// EJERCICIO 8 
function nivel2() {
  try {
    x = variableInexistente + 1;
  } catch (e) {
    document.getElementById("out-ej8").textContent =
      "NIVEL 2 ATRAPO EL ERROR: " + e.message;
    throw e;
  }
}

function nivel1() {
  try {
    nivel2();
  } catch (e) {
    const out = document.getElementById("out-ej8");
    out.textContent += " | NIVEL 1 RECIBIO: " + e.message;
    throw e;
  }
}

document.getElementById("btn-ej8").addEventListener("click", function () {
  const out = document.getElementById("out-ej8");
  out.textContent = "";
  try {
    nivel1();
  } catch (e) {
    out.textContent += " | ERROR FINAL: " + e.message;
  }
});


// EJERCICIO 9
function cargarMensaje(callback) {
  setTimeout(() => callback("Mensaje cargado"), 1000);
}

document.getElementById("btn-ej9").addEventListener("click", function () {
  const out = document.getElementById("out-ej9");
  cargarMensaje(m => (out.textContent = m));
});


// EJERCICIO 10
function cargarUsuario(callback) {
  const tiempo = Math.random() * (1500 - 800) + 800;

  setTimeout(() => {
    callback({ id: 1, nombre: "Juancito" });
  }, tiempo);
}

document.getElementById("btn-ej10").addEventListener("click", function () {
  const out = document.getElementById("out-ej10");
  cargarUsuario(u => {
    out.textContent = "Usuario cargado: " + u.nombre + " (ID: " + u.id + ")";
  });
});


// EJERCICIO 11 
function dividirAsync(a, b, callback) {
  setTimeout(() => {
    if (b === 0) callback(new Error("No se puede dividir entre cero"), null);
    else callback(null, a / b);
  }, 1500);
}

document.getElementById("btn-ej11").addEventListener("click", function () {
  const out = document.getElementById("out-ej11");
  const a = Number(document.getElementById("inp-a-ej11").value);
  const b = Number(document.getElementById("inp-b-ej11").value);

  dividirAsync(a, b, function (err, res) {
    if (err) out.textContent = "ERROR: " + err.message;
    else out.textContent = "RESULTADO: " + res;
  });
});


// EJERCICIO 12
function procesarLista(lista, callback) {
  let contador = 0;

  lista.forEach(num => {
    const tiempo = Math.random() * (1500 - 500) + 500;

    console.log("Procesando " + num);

    setTimeout(() => {
      contador++;
      if (contador === lista.length) callback("Proceso completado");
    }, tiempo);
  });
}

document.getElementById("btn-ej12").addEventListener("click", function () {
  const out = document.getElementById("out-ej12");
  const numeros = document
    .getElementById("inp-lista-ej12")
    .value.split(",")
    .map(x => Number(x.trim()));

  procesarLista(numeros, msg => (out.textContent = msg));
});


// EJERCICIO 13 
function cargarMensajePromesa() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Mensaje cargado"), 1000);
  });
}

document.getElementById("btn-ej13").addEventListener("click", function () {
  const out = document.getElementById("out-ej13");
  cargarMensajePromesa().then(m => (out.textContent = m));
});


// EJERCICIO 14 
function cargarUsuarioPromesa() {
  return new Promise(resolve => {
    const tiempo = Math.random() * (1500 - 800) + 800;
    setTimeout(() => resolve({ id: 1, nombre: "Juancito" }), tiempo);
  });
}

document.getElementById("btn-ej14").addEventListener("click", function () {
  const out = document.getElementById("out-ej14");
  cargarUsuarioPromesa().then(u => {
    out.textContent = "Usuario cargado: " + u.nombre + " (ID: " + u.id + ")";
  });
});


// EJERCICIO 15
function dividirPromesa(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) reject(new Error("No se puede dividir entre cero"));
      else resolve(a / b);
    }, 1500);
  });
}

document.getElementById("btn-ej15").addEventListener("click", function () {
  const out = document.getElementById("out-ej15");
  const a = Number(document.getElementById("inp-a-ej15").value);
  const b = Number(document.getElementById("inp-b-ej15").value);

  dividirPromesa(a, b)
    .then(r => (out.textContent = "RESULTADO: " + r))
    .catch(e => (out.textContent = "ERROR: " + e.message));
});


// EJERCICIO 16
function procesarListaPromesa(lista) {
  let promesas = lista.map(num => {
    const tiempo = Math.random() * (1500 - 500) + 500;

    return new Promise(resolve => {
      console.log("Procesando " + num);
      setTimeout(resolve, tiempo);
    });
  });

  return Promise.all(promesas).then(() => "Proceso completado");
}

document.getElementById("btn-ej16").addEventListener("click", function () {
  const out = document.getElementById("out-ej16");
  const numeros = document
    .getElementById("inp-lista-ej16")
    .value.split(",")
    .map(x => Number(x.trim()));

  procesarListaPromesa(numeros).then(m => (out.textContent = m));
});


// EJERCICIO 17
async function cargarMensajeAsync() {
  return await cargarMensajePromesa();
}

document.getElementById("btn-ej17").addEventListener("click", async function () {
  const out = document.getElementById("out-ej17");
  out.textContent = await cargarMensajeAsync();
});


// EJERCICIO 18
async function cargarUsuarioAsync() {
  return await cargarUsuarioPromesa();
}

document.getElementById("btn-ej18").addEventListener("click", async function () {
  const out = document.getElementById("out-ej18");
  const u = await cargarUsuarioAsync();
  out.textContent = "Usuario cargado: " + u.nombre + " (ID: " + u.id + ")";
});


// EJERCICIO 19 
document.getElementById("btn-ej19").addEventListener("click", async function () {
  const out = document.getElementById("out-ej19");
  const a = Number(document.getElementById("inp-a-ej19").value);
  const b = Number(document.getElementById("inp-b-ej19").value);

  try {
    const r = await dividirPromesa(a, b);
    out.textContent = "RESULTADO: " + r;
  } catch (e) {
    out.textContent = "ERROR: " + e.message;
  }
});


// EJERCICIO 20
async function procesarListaAsync(lista) {
  return await procesarListaPromesa(lista);
}

document.getElementById("btn-ej20").addEventListener("click", async function () {
  const out = document.getElementById("out-ej20");
  const numeros = document
    .getElementById("inp-lista-ej20")
    .value.split(",")
    .map(x => Number(x.trim()));

  out.textContent = await procesarListaAsync(numeros);
});
