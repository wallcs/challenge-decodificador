
function codificarTexto() {
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
    console.log(plainTextFinal)
}

function decodificarTexto() {
    let cipherText = document.getElementById('texto-entrada').value;
    let cipherTextArray = Array.from(cipherText)
    let cipherTextFinal = '';
   
    for (let j = 0; j < cipherTextArray.length; j++) {
        console.log(j)
    }
    console.log(plainTextFinal)
}