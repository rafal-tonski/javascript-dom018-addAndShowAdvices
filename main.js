const btnAddAdvice = document.querySelector(".add");
const btnReset = document.querySelector(".clean");
const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowOptions = document.querySelector(".showOptions");
let advice = document.querySelector("h1");

const input = document.querySelector("input");

let options = [];
let currentOption = "";

const drawOption = () => {
  return options[Math.floor(Math.random() * options.length)];
};

btnAddAdvice.addEventListener("click", (e) => {
  e.preventDefault();
  currentOption = input.value;
  for (option of options) {
    if (option === currentOption) return;
  }
  options.push(currentOption);
  input.value = "";
});

btnShowAdvice.addEventListener("click", (e) => {
  e.preventDefault();
  if (!options.length) {
    advice.textContent = "Niestety, nie mam jeszcze w bazie żadnych porad :(";
  } else {
    advice.textContent = drawOption();
  }
});

btnShowOptions.addEventListener("click", (e) => {
  e.preventDefault();
  if (!options.length) {
    alert("Niestety, nie mam jeszcze w bazie żadnych porad :(");
  } else {
    alert(options.join("; "));
  }
});

btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  options = [];
  advice.textContent = "";
});
