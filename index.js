const buttonsOne = document.querySelectorAll(".buttons.one button");
const buttonsTwo = document.querySelectorAll(".buttons.two button");
const buttonsThree = document.querySelectorAll(".buttons.three button");
const inputOne = document.querySelector(".input-one");
const inputTwo = document.querySelector(".input-two");
const inputThree = document.querySelector(".input-three");

const miniOne = document.getElementById("miniräknare-one");
const miniTwo = document.getElementById("miniräknare-two");
const miniThree = document.getElementById("miniräknare-three");

const inactiveCalc = document.querySelector(".inactive-calc");
const mainContainer = document.querySelector(".miniräknare-container")

const header = document.querySelector(".header");

miniOne.addEventListener("click",() => {
    miniOne.style.transform = 'scale(2)'
    miniOne.classList.remove("hover");
    miniTwo.style.transform = 'scale(0.4)'
    miniThree.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniTwo)
    inactiveCalc.appendChild(miniThree)
    mainContainer.appendChild(miniOne)
    header.style.display = "none";

    miniTwo.classList.add("hover");
    miniThree.classList.add("hover");
})


miniTwo.addEventListener("click",() =>{
    miniTwo.style.transform = 'scale(2)'
    miniTwo.classList.remove("hover");
    miniOne.style.transform = 'scale(0.4)'
    miniThree.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniOne)
    inactiveCalc.appendChild(miniThree)
    mainContainer.appendChild(miniTwo)
    header.style.display = "none";

    miniOne.classList.add("hover");
    miniThree.classList.add("hover");
})

miniThree.addEventListener("click",() =>{
    miniThree.style.transform = 'scale(2)'
    miniThree.classList.remove("hover");
    miniOne.style.transform = 'scale(0.4)'
    miniTwo.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniOne)
    inactiveCalc.appendChild(miniTwo)
    mainContainer.appendChild(miniThree)
    header.style.display = "none";

    miniOne.classList.add("hover");
    miniTwo.classList.add("hover");
})


buttonsOne.forEach((button) => {
    button.addEventListener("click",() => {
       if(button.value === "C"){
       inputOne.value = "";
       }
       else{
        inputOne.value += button.value;
       }
        
    })
})


buttonsTwo.forEach((button) => {
    button.addEventListener("click",() => {
        if(button.value === "C"){
        inputTwo.value = "";
        }else if(button.value === "Del"){
            inputTwo.value = inputTwo.value.slice(0,-1);
        }
        else{
         inputTwo.value += button.value;
        }
     })
})

buttonsThree.forEach((button) =>{
    button.addEventListener("click",() => {
        if(button.value === "C"){
        inputThree.value = "";
        }
        else{
         inputThree.value += button.value;
        }
     })
})

inputOne.addEventListener("input",limitInput)
inputTwo.addEventListener("input",limitInput)
inputThree.addEventListener("input", limitInput) 
    




function limitInput(e){
    const allowedCharacters = /^[0-9+\-%x/().\s]*$/;
    if (!allowedCharacters.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^0-9+\-*/().\s]/g, '');
    }
}


