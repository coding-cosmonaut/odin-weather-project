const input = document.querySelector("input");
const searchButton = document.querySelector("button");
const resultDiv = document.querySelector(".results");
const windowDiv = document.querySelector(".window");

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

const image = function setImageValueOfGif(url) {
  windowDiv.innerHTML = "";
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("img-gif-window");
  windowDiv.append(img);
};

const render = function renderWeatherData(obj) {
  const values = Object.entries(obj);
  resultDiv.innerHTML = "";
  const ul = document.createElement("ul");

  for (let i = 0; i < values.length; i++) {
    const li = document.createElement("li");
    const [key, value] = values[i];
    if (i === 0) {
      li.innerHTML = `${value}`;
    } else if (i === 1 || i === 2) {
      li.innerHTML = `${key}:  ${value} &degF`;
    } else if (i === 4) {
      li.innerHTML = `${key}:  ${value} mph`;
    } else {
      li.innerHTML = `${key}:  ${value}`;
    }
    ul.appendChild(li);
  }
  resultDiv.append(ul);
};

export { getValue, searchButton, render, placeholder, image };
