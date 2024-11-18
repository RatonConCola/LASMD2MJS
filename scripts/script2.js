
const inputKey = document.getElementById('vaultKey');
const inputKey2 = document.getElementById('vaultKey2');
const inputKey3 = document.getElementById('vaultKey3');
const passMsg = document.getElementById('passwordMsg');


const vaultPassword = '911';
const vaultPassword2 = '714';


function mergeKeys() {
    let a = inputKey.value;
    let b = inputKey2.value;
    let c = inputKey3.value;

    
    let passAttempt = a + b + c;
    return passAttempt;  
}


function validateKey() {
    let passAttempt = mergeKeys();  


    if (passAttempt === vaultPassword) {
        passMsg.textContent = 'Password 1 correcto';
    } else if (passAttempt === vaultPassword2) {
        passMsg.textContent = 'Password 2 correcto';
    } else {
        passMsg.textContent = 'Contraseña incorrecta'; 
    }
}


