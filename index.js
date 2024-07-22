let display = document.getElementsByClassName("dispaly")[0];

function appendTodispay(input) {
  display.value += input;
}

function clearDispay() {
  display.value = "";
}

function calcultae() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "والله الخطاء ماهو مني  ";
  }
}
