// screen
const screen = document.querySelector('.screen');

// keypad
const keypad = document.querySelector('.keypad');
const keys = keypad.querySelectorAll('button');

// numbers
const numberKeys = Array.from(keypad.querySelectorAll('.number-btn'));

// operators
const operatorKeys = Array.from(keypad.querySelectorAll('.operator-btn'));
const operatorNodeList = keypad.querySelectorAll('.operator-btn');

var firstOperand = undefined;
var secondOperand = undefined;
var operator = undefined;
var isEnteringFirst = true;

keys.forEach(key => {
    key.addEventListener('click', () => {


        operatorNodeList.forEach(opKey => {
            if(opKey.textContent !== '=' && !numberKeys.includes(key) && key.textContent !== '+/-' && key.textContent !== '%'){
                opKey.style.backgroundColor = 'orange';
            }
        })


        if(key.textContent === 'AC'){
            firstOperand = undefined;
            secondOperand = undefined;
            operator = undefined;
            isEnteringFirst = true;
            screen.textContent = '0';
        }
        else if(key.textContent === 'C'){
            if(firstOperand === Number(screen.textContent)){
                firstOperand = secondOperand = undefined;
            }
            screen.textContent = '0';
            isEnteringFirst = true;
        }
        else if(key.textContent === '%'){
            screen.textContent = Math.round((screen.textContent/100)*100000)/100000;
            isEnteringFirst = true;
        }
        else if(key.textContent === '+/-'){
            screen.textContent *= -1;
        }
        else if(numberKeys.includes(key)){
            if(isEnteringFirst === true){
                screen.textContent = '';
            }
            screen.textContent += key.textContent;
            isEnteringFirst = false;
        }
        else if(operatorKeys.includes(key)){

            if(firstOperand === undefined){
                // checking whether number after converting is not Nan
                if(!isNaN(Number(screen.textContent))){
                    firstOperand = Number(screen.textContent);
                    operator = key.textContent;
                }
                else if(isNaN(Number(screen.textContent))){
                    screen.textContent = 'Nan';
                    setTimeout(() => {
                        screen.textContent = '0';
                    }, 550);
                    isEnteringFirst = true;
                    return;
                }
                
            }
            else if(firstOperand !== undefined){
                // checking whether number after converting is not Nan
                if(!isNaN(Number(screen.textContent))){
                    secondOperand = Number(screen.textContent);
                }
                else if(isNaN(Number(screen.textContent))){
                    screen.textContent = 'Nan';
                    setTimeout(() => {
                        screen.textContent = '0';
                    }, 550);
                    isEnteringFirst = true;
                    return;
                }
            }
            if(secondOperand !== undefined){
                switch(operator){
                    case '/':firstOperand /= secondOperand;
                        break;
                    case '*':firstOperand *= secondOperand;
                        break;
                    case '-':firstOperand -= secondOperand;
                        break;
                    case '+':firstOperand += secondOperand;
                        break;
                }
            }
            screen.textContent = Math.round(firstOperand*100000)/100000;
            if(key.textContent === '='){
                firstOperand = secondOperand = undefined;
            }
            isEnteringFirst = true;
            operator = key.textContent;
            if(key.textContent !== '='){
                key.style.backgroundColor = 'royalblue'
            }  
        }
    })
})

