document.addEventListener("DOMContentLoaded", function() {
    const calculator = document.querySelector('.calculator');
    const display = document.getElementById('display');
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'buttons';
    calculator.appendChild(buttonsContainer);
  
    const layout = [
      ['7', '8', '9', '/'],
      ['4', '5', '6', 'x'],
      ['1', '2', '3', '-'],
      ['0', '+'],
      ['C', '=']
    ];
  
    layout.forEach(row => {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      row.forEach(buttonValue => {
        const button = document.createElement('button');
        button.textContent = buttonValue;
        button.classList.add('button');
        if (/[0-9]/.test(buttonValue)) {
          button.classList.add('number');
        } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '/') {
          button.classList.add('operator');
        } else if (buttonValue === '=') {
          button.classList.add('equal');
        } else if (buttonValue === 'C') {
          button.classList.add('clear');
        }
        button.addEventListener('click', () => handleButtonClick(buttonValue));
        rowDiv.appendChild(button);
      });
      buttonsContainer.appendChild(rowDiv);
    });
  
    function handleButtonClick(value) {
      if (value === '=') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (value === 'C') {
        display.value = '';
      } else {
        display.value += value;
      }
    }
  });
  

