let number = "";
let array = [];
let i = 0;

document.querySelector(".container").addEventListener("click", (e) => {
  //? Operatörler
  if (e.target.classList.contains(".add")) {
    number = "";
    sum += array[i];
    i++;
  }
});

const a = document.querySelector(".operator");
