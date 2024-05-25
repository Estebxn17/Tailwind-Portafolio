/* Primero */


function manejarRestablecimiento(){

    alert("El formulario ha sido restablecido ");

    document.getElementById("nombre").value = "";
}

/* Segundo */

function confirmarRestablecimiento(){

    return confirm("¿Estas Seguro de Restablecer?");
}

/* Tercero */
function guardarDatos(){
    const nombreGuardado = document.getElementById("nombre").value;

    alert("Los valores se han guardado temporalmente")
}

// Tailwind Configuracion

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'press-start': ["Oswald", 'sans-serif'],
        },
      },
    },
  };