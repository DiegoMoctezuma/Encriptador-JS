//Variables
let textoEncriptarDesencriptar = "";
let textoEncriptado = "";

let botonCopiar = document.getElementById("btnCopiar");

//Funciones
function mostrarTextoEncriptado(){
    textoEncriptarDesencriptar = document.getElementById("textEnDes").value;

    if(textoEncriptarDesencriptar.length != 0){
        encriptar();
        document.getElementById("imgTextEnDes").style.display = "none";
        document.getElementById("btnCopiar").style.display = "block";
        document.getElementById("textEncript").innerHTML = textoEncriptado;
        document.getElementById("titleEnDes").innerHTML = "Texto encriptado";
    }else {
        condicionesIniciales();
    }
    return;
}

function mostrarTextoDesencriptado(){
    textoEncriptarDesencriptar = document.getElementById("textEnDes").value;

    if(textoEncriptarDesencriptar.length != 0){
        desencriptar();
        document.getElementById("imgTextEnDes").style.display = "none";
        document.getElementById("btnCopiar").style.display = "block";
        document.getElementById("textEncript").innerHTML = textoEncriptado;
        document.getElementById("titleEnDes").innerHTML = "Texto desencriptado";
    }else {
        condicionesIniciales();
    }
    return;
}

//Encriptar
function encriptar(){
    document.getElementById("textEnDes").value = "";

    textoEncriptado = textoEncriptarDesencriptar
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");
    
    botonCopiar.innerHTML = "Copiar";
    botonCopiar.style.backgroundColor = "#E3E3E3";
    botonCopiar.style.color = "#0a3871";
    botonCopiar.style.border = "1px solid #0a3871";
    return;
}
//Desencriptar
function desencriptar(){
    document.getElementById("textEnDes").value = "";

    textoEncriptado = textoEncriptarDesencriptar
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    botonCopiar.innerHTML = "Copiar";
    botonCopiar.style.backgroundColor = "#E3E3E3";
    botonCopiar.style.color = "#0a3871";
    botonCopiar.style.border = "1px solid #0a3871";
    return;
}

botonCopiar.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(document.getElementById("textEncript").innerHTML);
        botonCopiar.innerHTML = "Texto copiado";
        botonCopiar.style.backgroundColor = "green";
        botonCopiar.style.color = "white";
        botonCopiar.style.border = "none";
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
});

//Condiciones iniciales
function condicionesIniciales(){
    document.getElementById("imgTextEnDes").style.display = "block";
    document.getElementById("btnCopiar").style.display = "none";
    document.getElementById("titleEnDes").innerHTML = "Ningún mensaje fue encontrado";
    document.getElementById("textEncript").innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
    botonCopiar.innerHTML = "Copiar";
    botonCopiar.style.backgroundColor = "#E3E3E3";
    botonCopiar.style.color = "#0a3871";
    botonCopiar.style.border = "1px solid #0a3871";
    return;
}

condicionesIniciales();