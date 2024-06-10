const buttonsOne = document.querySelectorAll(".buttons.one button");
const inputOne = document.querySelector(".input-one");



buttonsOne.forEach((button) => {
    button.addEventListener("click",() => {
       inputOne.value += button.value;
    })
})