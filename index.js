const buttonsOne = document.querySelectorAll(".buttons.one button");
const buttonsTwo = document.querySelectorAll(".buttons.two button");
const buttonsThree = document.querySelectorAll(".buttons.three button");
const inputOne = document.querySelector(".input-one");
const inputTwo = document.querySelector(".input-two");
const inputThree = document.querySelector(".input-three");

const bottomTwo = document.querySelector(".bottom-two");

const miniOne = document.getElementById("miniräknare-one");
const miniTwo = document.getElementById("miniräknare-two");
const miniThree = document.getElementById("miniräknare-three");

const inactiveCalc = document.querySelector(".inactive-calc");
const mainContainer = document.querySelector(".miniräknare-container")

const header = document.querySelector(".header");
const miniHeader = document.querySelector(".mini-header");

const myCalcs = document.querySelectorAll(".calc");

const pickerContainerOne = document.querySelector(".pc-one");
const pickerOriginalOne = document.querySelector(".picker-one-original");
const pickerDarkGreenOne = document.querySelector(".picker-one-darkGreen");
const pickerPurpleOne = document.querySelector(".picker-one-purple");
const pickerRedOne = document.querySelector(".picker-one-red");

const pickerContainerTwo = document.querySelector(".pc-two");
const pickerOriginalTwo = document.querySelector(".picker-original-two")
const pickerPinkTwo = document.querySelector(".picker-pink-two")
const pickerBlueTwo = document.querySelector(".picker-blue-two")
const pickerBlackTwo = document.querySelector(".picker-black-two");


function addPickerOne(){
    
pickerContainerOne.style.display ="flex";
pickerContainerTwo.style.display ="none";

pickerOriginalOne.addEventListener("click",() => {
    miniOne.style.backgroundColor ="#183446";
    inputOne.id="";

    buttonsOne.forEach((button) => {
        if(button.value === "C"){
            button.style.backgroundColor ="#A40606"
            button.style.color ="white";
        }else if(button.value === "="){
            button.style.backgroundColor ="#3c5a99";
            button.style.color ="white";
        }
        button.id ="";
        button.style.boxShadow ="-1px -1px 0 0 #000, 1px 1px 0 0 #000";
        miniOne.style.border ="2px solid black"
    })
})

pickerDarkGreenOne.addEventListener("click",() => {
    miniOne.style.backgroundColor ="#1C7C54";
    inputOne.id ="darkGreen-one";
    inputOne.style.backgroundColor="transparent"
    buttonsOne.forEach((button) => {
        
        if(button.value === "C"){
            button.style.backgroundColor ="#004D00"
            button.style.color ="white";
        }else if(button.value === "="){
            button.style.backgroundColor ="#004D00";
            button.style.color ="white";
        }
        
        button.id ="darkGreen-one"
        button.style.boxShadow ="-1px -1px 0 0 #000, 1px 1px 0 0 #000";
        miniOne.style.border ="2px solid black"
    })
})

pickerPurpleOne.addEventListener("click",() => {
    miniOne.style.backgroundColor ="#7A28CB";
    inputOne.id ="purple-one";
    inputOne.style.backgroundColor="transparent"
    buttonsOne.forEach((button) => {
        
        if(button.value === "C"){
            button.style.backgroundColor ="#AC5AFD"
            button.style.color ="white";
        }else if(button.value === "="){
            button.style.backgroundColor ="#AC5AFD";
            button.style.color ="white";
        }
        
        button.id ="purple-one"
        button.style.boxShadow = "-1px -1px 0 0 #FFF, 1px 1px 0 0 #FFF";
        miniOne.style.border ="2px solid white"
    })
})

pickerRedOne.addEventListener("click",() => {
    miniOne.style.backgroundColor ="#ED1C24";
    inputOne.id ="red-one";
    inputOne.style.backgroundColor="transparent"
    buttonsOne.forEach((button) => {
        
        if(button.value === "C"){
            button.style.backgroundColor ="#A80000"
            button.style.color ="white";
        }else if(button.value === "="){
            button.style.backgroundColor ="#A80000";
            button.style.color ="white";
        }
        
        button.id ="red-one"
        button.style.boxShadow = "-1px -1px 0 0 #FFF, 1px 1px 0 0 #FFF";
        miniOne.style.border ="2px solid white"
    })
})
}

function addPickerTwo(){
    pickerContainerTwo.style.display ="flex";
    pickerContainerOne.style.display = "none";


    pickerOriginalTwo.addEventListener("click",() => {

        miniTwo.style.backgroundColor ="#B14AED";
        bottomTwo.style.backgroundColor ="white";

        buttonsTwo.forEach((button) =>{
            button.id ="";
        })
    })



    pickerPinkTwo.addEventListener("click",() => {
        miniTwo.style.backgroundColor ="#DC0073";
        bottomTwo.style.backgroundColor ="#B80062";

        buttonsTwo.forEach((button) => {
            button.id="pink-two"
            
        })
    })

    pickerBlueTwo.addEventListener("click",() => {
        miniTwo.style.backgroundColor = "#2667FF";
        bottomTwo.style.backgroundColor ="white";

        buttonsTwo.forEach((button) => {
            button.id ="blue-two"
        })
    })


    pickerBlackTwo.addEventListener("click",() => {
        miniTwo.style.backgroundColor ="white"
        bottomTwo.style.background =  "#231F20"
        inputTwo.style.color = "black"

        buttonsTwo.forEach((button) => {
            
        })
    })


}

function checkActive(){
    myCalcs.forEach((calc,index) => {
        if(calc.classList.contains("active")){
           if(index === 0 ){
            miniOne.removeEventListener("click",handleMiniOneClick)
            buttonsOne.forEach((button) => {
                button.addEventListener("click",buttonListenerOne)
            })
           }else if(index ===1){
            miniTwo.removeEventListener("click",handleMiniTwoClick)
            buttonsTwo.forEach((button) => {
                button.addEventListener("click",buttonListenerTwo)
            })
           }else if(index ===2){
            miniThree.removeEventListener("click",handleMiniThreeClick);
            buttonsThree.forEach((button) =>{
                button.addEventListener("click",buttonListenerThree)   
            })
           }
        }else if (calc.classList.contains("inactive")){
            if(index === 0){
                miniOne.addEventListener("click",handleMiniOneClick)
                buttonsOne.forEach((button) => {
                    button.removeEventListener("click",buttonListenerOne)
                })
            }else if(index ===1){
                miniTwo.addEventListener("click",handleMiniTwoClick)
                buttonsTwo.forEach((button) => {
                    button.removeEventListener("click",buttonListenerTwo)
                })
            }else if(index ===2){
                miniThree.addEventListener("click",handleMiniThreeClick)
                buttonsThree.forEach((button) => {
                    button.removeEventListener("click",buttonListenerThree)
                })
            }
        }
    })
}

function buttonListenerOne(event){
    const button = event.target;

    if(button.value === "C"){
        inputOne.value = "";
        }
        else{
         inputOne.value += button.value;
        }
}

function buttonListenerTwo(event){
    const button = event.target;

        if(button.value === "C"){
        inputTwo.value = "";
        }else if(button.value === "Del"){
            inputTwo.value = inputTwo.value.slice(0,-1);
        }
        else{
         inputTwo.value += button.value;
        }
     
}

function buttonListenerThree(event){
    const button = event.target;

        if(button.value === "C"){
        inputThree.value = "";
        }
        else{
         inputThree.value += button.value;
        }
    
}

function handleMiniOneClick(){
    miniOne.style.transform = 'scale(1.3)'
    miniOne.classList.remove("hover");
    miniTwo.style.transform = 'scale(0.4)'
    miniThree.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniTwo)
    inactiveCalc.appendChild(miniThree)
    mainContainer.appendChild(miniOne)
    header.style.display = "none";
    inactiveCalc.style.display = "flex";
    miniTwo.classList.add("hover");
    miniThree.classList.add("hover");
    

   inputTwo.value ="";
   inputThree.value ="";

   miniHeader.style.opacity = "1";
    myCalcs[0].classList.add("active");
    myCalcs[1].classList.remove("active");
    myCalcs[2].classList.remove("active");
    myCalcs[2].classList.add("inactive")
    myCalcs[1].classList.add("inactive")

    checkActive();
    addPickerOne();
}

function handleMiniTwoClick(){
    miniTwo.style.transform = 'scale(1.3)'
    miniTwo.classList.remove("hover");
    miniOne.style.transform = 'scale(0.4)'
    miniThree.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniOne)
    inactiveCalc.appendChild(miniThree)
    mainContainer.appendChild(miniTwo)
    header.style.display = "none";
    inactiveCalc.style.display = "flex";
    miniOne.classList.add("hover");
    miniThree.classList.add("hover");

    inputOne.value ="";
    inputThree.value ="";
    
    miniHeader.style.opacity = "1";
    myCalcs[1].classList.add("active");
    myCalcs[2].classList.remove("active");
    myCalcs[0].classList.remove("active");
    myCalcs[0].classList.add("inactive")
    myCalcs[2].classList.add("inactive")

    checkActive();
    addPickerTwo();
}

function handleMiniThreeClick(){
    miniThree.style.transform = 'scale(1.3)'
    miniThree.classList.remove("hover");
    miniOne.style.transform = 'scale(0.4)'
    miniTwo.style.transform = "scale(0.4)"
    inactiveCalc.appendChild(miniOne)
    inactiveCalc.appendChild(miniTwo)
    mainContainer.appendChild(miniThree)
    header.style.display = "none";
    inactiveCalc.style.display = "flex";
    miniOne.classList.add("hover");
    miniTwo.classList.add("hover");

    inputOne.value ="";
    inputTwo.value ="";
    
    myCalcs[2].classList.add("active");
    myCalcs[1].classList.remove("active");
    myCalcs[0].classList.remove("active");
    myCalcs[0].classList.add("inactive")
    myCalcs[1].classList.add("inactive")
    miniHeader.style.opacity = "1";
    checkActive();
}

miniOne.addEventListener("click",handleMiniOneClick)
miniTwo.addEventListener("click",handleMiniTwoClick)
miniThree.addEventListener("click",handleMiniThreeClick)









inputOne.addEventListener("input",limitInput)
inputTwo.addEventListener("input",limitInput)
inputThree.addEventListener("input", limitInput) 
    




function limitInput(e){
    const allowedCharacters = /^[0-9+\-%x/().\s]*$/;
    if (!allowedCharacters.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^0-9+\-*/().\s]/g, '');
    }
}


