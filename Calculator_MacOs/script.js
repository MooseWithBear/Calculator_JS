let num1; // 첫 번째 피연산자
let num2; // 두 번째 피연산자
let previousOperator; // 연산자
let buffer;
let repeat = false;
let record = false;
let percentInquiry = false;

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelectorAll(".clear");
const calculateButton = document.querySelector(".calculate");
const percentButton = document.querySelector(".percent");
const display = document.getElementById("display");


const fontSizeCheck = (dp) => {
    display.style.fontSize = (dp.length > 10) ? ((dp.length > 25) ? "14px" : "18px") : "35px";
    return;
}


//~ Clear, Backspace handling
const handleClearBackspace = function (clicked) {
    //Backspace
    if (clicked === "←") {
        let deletedComma = display.innerText.replace(/,/g, "");
        let targetNumber = (deletedComma === num1) ? num1 : num2;

        if (deletedComma === targetNumber) {
            targetNumber = targetNumber.substring(0, targetNumber.length - 1);
            buffer = targetNumber;
            display.innerText = addCommasToNumber(targetNumber);
            fontSizeCheck (addCommasToNumber(targetNumber));

            if (targetNumber.length === 0) {
                displayFontSize = "35px";
                display.innerText = "0";
            }

            if (deletedComma === num1) {
                num1 = targetNumber;
            } else {
                num2 = targetNumber;
            }
        }
    }
    //Clear
    if (clicked === "C") {
        display.innerText = "0";
        num1 = "";
        num2 = "";
        buffer = "";
        previousOperator = "";
        repeat = false;
        display.style.fontSize = "35px";
    }
}

clearButton.forEach(function (clearButton) {
    clearButton.addEventListener("click", function (event) {
        let clicked = event.target.innerText;
        handleClearBackspace(clicked);
    })
})


//~ Number handling
const handleNumberInput = function(clicked) {
    if(record) {
        buffer = "0";
        display.innerText = "0"
        record = false;
    } 
    
    if(display.innerText === "0") {
        if (clicked === ".") {
            buffer = "0" + clicked;
        } else {
            buffer = clicked;
            num1 ? num2 = buffer : num1 = buffer;
        }
    }   else if (!previousOperator){
            if(clicked === "." && !buffer.includes(".")) {
                buffer += clicked;
            } else if(clicked !== ".") { // 숫자 버튼이 아닌 경우에만 버퍼에 추가
                percentInquiry ? percentInquiry = false : buffer += clicked;
            }
            num1 = buffer;
    }   else {
            if(clicked === "." && !buffer.includes(".")) {
                buffer += clicked;
            } else if(clicked !== ".") { // 숫자 버튼이 아닌 경우에만 버퍼에 추가
                percentInquiry ? percentInquiry = false : buffer += clicked;
            }
            num2 = buffer;
    }
    
    display.innerText = addCommasToNumber(buffer);
    fontSizeCheck (addCommasToNumber(buffer));
}

numberButton.forEach(function (numberButton) {
    numberButton.addEventListener("click", function (event) {
        let clicked = event.target.innerText;
        handleNumberInput(clicked);
    })
})


//~ Adding Commas 
function addCommasToNumber(number) {
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

//~ Calculate 
const handleCalculate = function () {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (repeat) {
        // 반복수행
    } else {
        if(num1 && num2 && previousOperator) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            num3 = num2;
            switch(previousOperator){
                case "+":
                    buffer = num1 + num2;
                    console.log("더하기 계산가능");
                break;
                case "−":
                    buffer = num1 - num2;
                    console.log("빽기 계산가능");
                break;
                case "×":
                    buffer = num1 * num2;
                    console.log("곱하기 계산가능");
                break;
                case "÷":
                    buffer = num1 / num2;
                    console.log("나누기 계산가능");
                break;
            }
            buffer = parseFloat(buffer.toPrecision(15));
            if (buffer.toString().includes('.')) {
                let parts = buffer.toString().split('.');
                if (parts[1].length > 15) {
                    buffer = buffer.toExponential();
                    display.style.fontSize = "18px"; 
            }else if(parts[1].length > 30) {
                buffer = buffer.toExponential();
                display.style.fontSize = "14px"; 
            }
        }
        if(addCommasToNumber(buffer).length > 20) {
            display.style.fontSize = "18px";
        }else if (addCommasToNumber(buffer).length > 30)  {
            display.style.fontSize = "14px";
        }
        display.innerText = addCommasToNumber(buffer);

            num1 = buffer;
            num2 = "";
            record = true;
            console.log(buffer);
        } else if (record) { 
            switch(previousOperator) {
                case "+":
                    buffer+=num3;
                    break;
                case "−":
                    buffer -= num3;
                    break;
                case "×":
                    buffer *= num3;
                    break;
                case "÷":
                    buffer /= num3;
                    break;
            }
            buffer = parseFloat(buffer.toPrecision(15));
            if (buffer.toString().includes('.')) {
                let parts = buffer.toString().split('.');
                if (parts[1].length > 20) {
                    buffer = buffer.toExponential();
                    display.style.fontSize = "18px";
                } else if (parts[1].length > 30 ) {
                    buffer = buffer.toExponential();
                    display.style.fontSize = "14px";
                }
            } else if (Math.abs(buffer) >= 1e13) {
                buffer = buffer.toExponential();
            }
            if(addCommasToNumber(buffer).length > 20) {
                display.style.fontSize = "18px";
            }else if(addCommasToNumber(buffer).length > 30) {
                display.style.fontSize = "14px";

            }
            display.innerText = addCommasToNumber(buffer);

        } 
        else{console.log("불가요");
    }
        // repeat = true;
    }
}

calculateButton.addEventListener("click", function () {
    handleCalculate();
})


//~ Operator Handling
const handleOperator = function (clicked) {
    previousOperator = clicked;
    buffer="";
}

operatorButton.forEach(function (operatorButton) {
    operatorButton.addEventListener("click", function (event) {
        let clicked = event.target.innerText;
        handleOperator(clicked);
    })
})


//~ Percent Handling
percentButton.addEventListener("click", function (event) {
    handlePercent();
})

const handlePercent = function () {
    buffer = buffer*0.01;
    buffer = parseFloat(buffer.toPrecision(15));
    percentInquiry = true;
    handleNumberInput(buffer);
}


//~ Keyboard input event
document.addEventListener("keydown", function(event) {
    let key = event.key;
    event.target.blur();

    if (!isNaN(parseInt(key)) || key === ".") {
        handleNumberInput(key);
    } else if(key === "Enter") {
        key = "=";
        handleCalculate();
    } else if (key === "Backspace") {
        handleClearBackspace("←");
    } else if (key === "Escape") {
        event.target.blur();
        handleClearBackspace("C");
    } else if (['+', '-', '*', '/'].includes(key)) {
        switch(key) {
            case "+":
                key = "+";
                break;
            case "-":
                key = "−";
                break;
            case "*":
                key = "×";
                break;
            case "/":
                key = "÷";
                break;
        }
        handleOperator(key);
    } else if (key === "%"){
        handlePercent();
    }
});


//~ Display blink animation
document.querySelectorAll(".blink").forEach(function (button) {
    button.addEventListener("click", function () {
        display.classList.add("blinking");
            setTimeout(function () {
        display.classList.remove("blinking");
        }, 150);
        });
    });


    