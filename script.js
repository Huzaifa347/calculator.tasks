let display = document.getElementById('display');
let memory = 0;
// Clear display
function clearDisplay() {
  display.value = '';
}
// Clear last entry
function clearEntry() {
  display.value = display.value.slice(0, -1);
}
// Append character
function appendCharacter(char) {
  if (char === '√(') {
    display.value += 'Math.sqrt(';
  } else if (char === '1/') {
    display.value = 1/$("display.value");
  }
   else {
    display.value += char;
  }
}
// Calculate result
function calculate() {
  try {
    display.value = eval(display.value.replace('Math.sqrt', 'Math.sqrt'));
  } catch {
    display.value = 'Error';
  }
}
// Memory functions
function memoryStore() {
  memory = parseFloat(display.value) || 0;
}
function memoryRecall() {
  display.value += memory;
}
function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}