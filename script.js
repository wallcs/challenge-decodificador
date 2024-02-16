function hideElement() {
    document.getElementById("textoResultado").removeAttribute("hidden");
    document.getElementById("imagem").style.display = "none";
    document.getElementById("titulo").style.display = "none";
    document.getElementById("paragrafo").style.display = "none";
}

function exibeMensagem(mensagem) { 
        document.getElementById("textoResultado").innerHTML = mensagem;
}

function codificarTexto() { // Funcao codificar - Analisa letra por letra e troca as vogais pelo codigo correspondente
    let plainText = document.getElementById('texto-entrada').value;
    let plainTextArray = Array.from(plainText);
    let plainTextFinal = '';

    for (let i = 0; i < plainTextArray.length; i++) {
    if (plainTextArray[i] == 'a') {
        plainTextFinal = plainTextFinal.concat('ai');
        } else if (plainTextArray[i] == 'e') {
        plainTextFinal = plainTextFinal.concat('enter');
        } else if (plainTextArray[i] == 'i') {
            plainTextFinal = plainTextFinal.concat('imes');
        } else if (plainTextArray[i] == 'o') {
            plainTextFinal = plainTextFinal.concat('ober');
        } else if (plainTextArray[i] == 'u') {
            plainTextFinal = plainTextFinal.concat('ufat');
        } else {
            plainTextFinal = plainTextFinal.concat(plainTextArray[i]);
        }           
    }
    hideElement();
    exibeMensagem(plainTextFinal);
}

function decodificarTexto() { // Funcao decodificar - Usa o metodo replace() para trocar a parte codificada do texto para a vogal correspondente
    let cipherText = document.getElementById('texto-entrada').value;
    let cipherTextFinal = '';
   
    cipherTextFinal = cipherText.replace(/ai/ig, 'a').replace(/enter/ig, 'e').replace(/imes/ig, 'i').replace(/ober/ig, 'o').replace(/ufat/ig, 'u');
    
    hideElement();   
    exibeMensagem(cipherTextFinal);
}