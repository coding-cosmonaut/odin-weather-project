const input = document.querySelector("input");
const searchButton = document.querySelector("button");
const lis = document.querySelectorAll("li");

const getValue = function getInputValue() {
  return input.value;
};

const placeholder = function showAndRemoveErrorPlaceholder(status) {
  if (status === "remove") {
    input.classList.remove("input-error");
    return;
  }
  input.setAttribute("placeholder", "Please enter valid city");
  input.classList.add("input-error");
};

const display = function changeDisplayValue() {};

const render = function renderWeatherData(obj) {
  const values = Object.values(obj);
  for (let i = 0; i < lis.length; i++) {
    console.log(lis, "lis", lis[i]);
    lis[i].innerHTML = values[i];
  }
};

export { getValue, searchButton, render, placeholder };
