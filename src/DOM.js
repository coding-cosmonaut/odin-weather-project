const input = document.querySelector("input");
const searchButton = document.querySelector("button");
const resultDiv = document.querySelector(".results");

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

// const check = function deleteOldUlAndAppendNewUl() {
//   while (resultDiv.firstChild) {

//   }
// }

const render = function renderWeatherData(obj) {
  const values = Object.values(obj);
  resultDiv.innerHTML = "";
  const ul = document.createElement("ul");
  for (let i = 0; i < values.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = values[i];
    ul.appendChild(li);
  }
  resultDiv.append(ul);
};

export { getValue, searchButton, render, placeholder };
