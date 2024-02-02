var texto = document.querySelector(".areaTexto");
var resultado = document.querySelector(".areaResultado");

function btCripto() {
    const textoEncriptado=criptografar(texto.value)
    resultado.value=textoEncriptado
    resultado.style.backgroundImage="none"
}

function criptografar(textoEncriptado) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado=textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
       }
       return textoEncriptado;

}

function btDescripto() {
    const textoDesencriptado=descriptografar(texto.value)
    resultado.value=textoDesencriptado
    resultado.style.backgroundImage="none"
}

function descriptografar(textoDesencriptado) {
    let matrizCodigo=[["a", "ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    textoDesencriptado=textoDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(textoDesencriptado.includes(matrizCodigo[i][0])) {
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
       }
       return textoDesencriptado;

}

function btCopy() {
    var resultado = document.querySelector(".areaResultado");
    resultado.select();
    document.execCommand("copy");
}

document.querySelector("#copiar").addEventListener("click", btCopy);
