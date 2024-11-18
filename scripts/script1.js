
var userInput = document.getElementById('stickers1');
var userInput2 = document.getElementById('stickers2');
var userInput3 = document.getElementById('stickers3');
var totalMsg = document.getElementById('totalMsg');

function totalInput(){
    
    let a = parseInt(userInput.value) || 0;
    let b = parseInt(userInput2.value) || 0;
    let c = parseInt(userInput3.value) || 0;

    let total = a + b + c;

    return total;
}

function resultadoMsg(){

    let total = totalInput();

    if(total === 0){
        totalMsg.textContent = 'Selecciona la cantidad de stickers que quieres llevar';
    } else if (total > 10){
        totalMsg.textContent = 'Llevas demasiados stickers';
    } else if (total <= 10){
        totalMsg.textContent = `Llevas ${total} stickers`;
    }
}


userInput.addEventListener('input', resultadoMsg);
userInput2.addEventListener('input', resultadoMsg);
userInput3.addEventListener('input', resultadoMsg);