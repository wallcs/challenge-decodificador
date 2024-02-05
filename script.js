
function codificarTexto() {
    let plainText = document.getElementById('texto-entrada').value;
    let plainTextArray = Array.from(plainText);
    let plainTextFinal = '';
 
    for (let i = 0; i < plainTextArray.length; i++) {
        if (plainTextArray[i] == 'a') {
            // plainTextFinal.concat(plainTextArray[i]);
            console.log('tem letra a')
        }     
    }

}

function decodificarTexto() {
    let cipherText = document.getElementById('texto-entrada').value;
    let cipherTextArray = Array.from(cipherText)
    let cipherTextFinal = '';
   
    for (let j = 0; j < cipherTextArray.length; j++) {
        console.log(j)
    }
}