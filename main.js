"use strict";

// Output
const output = document.querySelector(".output");

// Enter sign
function put(sign) {
  output.value = output.value + sign;
}

// Сlear output
function clearOutput() {
  output.value = " ";
}

// Delete last character
function backspace() {
  const exp = output.value;
  output.value = exp.substring(0, exp.length - 1);
}

// Show result
function result() {
  const exp = output.value;
  if (exp) {
    output.value = eval(exp);
  }
}
