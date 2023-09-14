let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH', 'PEAKS']
let indice =  Math.floor(Math.random() * diccionario.length);
console.log (indice);
let palabra;

fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
 	.then(response => response.json())
 	.then(response => {
         console.log(response)
         palabra = response[0].toUpperCase()
     })
 	.catch(err => console.error(err));
console.log (palabra);


const button = document.getElementById ("guess-button");
button.addEventListener("click", intentar);
const input = document.getElementById("guess-input");
let intentos = 6;

button.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    if (INTENTO.length != 5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }
    if (INTENTO === palabra) {
        const emoji = "😃";
        terminar("<h1>GANASTE😃</h1>");
        button.disabled = true;
        return;
    }
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "green";
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "yellow";
            console.log(INTENTO[i], "AMARILLO");
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "gray";
            console.log(INTENTO[i], "GRIS");
        }
        ROW.appendChild(SPAN);
    }
    GRID.appendChild(ROW);
    intentos--;
    if (intentos === 0) {
        const emoji = "😞";  
        terminar("<h1>PERDISTE😞</h1>");
        button.disabled = true;
    }
}

    function leerIntento(){
        let intento = document.getElementById("guess-input");
        intento = intento.value;
        intento = intento.toUpperCase(); 
        return intento;
    }
    function terminar(mensaje){
        const input = document.getElementById("guess-input");
        input.disabled = true;
        buttondisabled = true;
        let contenedor = document.getElementById('mensaje');
        contenedor.innerHTML = mensaje;
    }

