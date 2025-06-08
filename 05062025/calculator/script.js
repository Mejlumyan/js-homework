const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = ''; // input is empty for start

buttons.forEach(button => { // array method 
  button.addEventListener('click', () => {
    const btnValue = button.textContent; // text content for clicked button 

    if (button.id === 'clear') {  // if i click clear btn
      currentInput = '';
      display.value = '0';
      return;
    }

    if (button.id === 'equal') {
      try {
        let result = currentInput;
        currentInput = eval(result).toString();
        display.value = currentInput;
      } catch {
        display.value = 'Error'; // if i click = without some expression(5+3 for example). 
        currentInput = '';
      }
      return;
    }

    const operators = ['+', '-', '*', '/']
    const lastChar = currentInput.slice(-1)

    if (operators.includes(btnValue)) {
      if (currentInput === '') return
      if (operators.includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + btnValue
        display.value = currentInput
        return
      }
    }

    currentInput += btnValue
    display.value = currentInput
  })
})
