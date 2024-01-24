function isAscii(str_input){
    for(let i = 0; i < str_input.length; i++){
        let charCode = str_input.charCodeAt(i);
        if(charCode == 32 || charCode == 10 || charCode == 33 ||
        (charCode >= 65 && charCode <= 90) || 
        (charCode >= 97 && charCode <= 122)){
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function enc(str_input){
    return !isAscii(str_input) ? "Entrada invalida!" : str_input.toLowerCase().replaceAll("e", "enter")
                                  .replaceAll("i", "imes")
                                  .replaceAll("a", "ai")
                                  .replaceAll("o", "ober")
                                  .replaceAll("u", "ufat");
}

function dec(str_input){
    return !isAscii(str_input) ? "Entrada invalida!" : str_input.toLowerCase().replaceAll("enter", "e")
                                  .replaceAll("imes", "i")
                                  .replaceAll("ai", "a")
                                  .replaceAll("ober", "o")
                                  .replaceAll("ufat", "u");
}

function actualizarOut(strTexto){
    document.getElementById('resultado_p').innerHTML = strTexto;
}

function decTexto(){
    let elemento = document.querySelector("textarea");
    let decOutput = dec(elemento.value);
    actualizarOut(decOutput);
}

function encTexto(){
    let elemento = document.querySelector("textarea");
    let encOutput = enc(elemento.value);
    actualizarOut(encOutput);
}

function onCopy(){
    let texto = document.getElementById('resultado_p').innerHTML;
    navigator.clipboard.writeText(texto);
}