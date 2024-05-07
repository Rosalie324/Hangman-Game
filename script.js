const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userContainer = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const resaultText = document.getElementById("reault-text");
const canvas = document.getElementById("canvas");

let options = {
    fruit : [
        "Apple",
        "Blueberry",
        "Mandarine",
        "Mango",
        "Watermelon",
        "Guava"
    ],
    countries : [
        "Laos",
        "Cameroon",
        "kiribati",
        "Mauritania",
        "Krygzstan",
        "Liechtenstein"
    ],
    Animal : [
        "Orangutans",
        "Panther",
        "Hedgehog",
        "Zebra",
        "Tarantulas",
        "Rhinoceros "
    ]
};

//count
let winCount = 0;
let count = 0;
let chosenWord = "";

//display button options
const displayOptions = () => {
    optionsContainer.innerHTML += <h3>Please Select An Option</h3>;

    let  buttonContainer = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class = "options" onclick = "generateWord ('${value}')" >${value}</button>`;

    }
    optionsContainer.appendChild(buttonContainer);
};
//block all the buttons
const block = () => {
    let optionsButtons = document.querySelectorAll();
    let letterButtons = document.querySelectorAll(".letters");

    //disable all the options
    optionsButtons.forEach((button) => {
        button.disable = true ;
    });

    //disable all letters
    letterButtons.forEach((button) => {
        button.disabled.true ;
    });

    newGameContainer.classList.remove("hide");
};

//word Generator
const generateWord = (optionValue) => {
    let optionsButtons = doc.querySelectorAll(".options");
    
    //if option value matches the button innerText then highlight the button
    optionsButtons.forEach((button) =>
    {
        if (button.innerText.toLowerCase () === optionValue ) {

        }
        button.disabled = true ;
    });

    //initially hide letters, clears, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";
    let optionArray = options[optionValue];

    //choose random word
    chosenWord = optionArray[Math.floor (Math.random()* optionArray.length)];
    chosenWord = chosenWord.toUpperCase();

    //replace every letter with span containing dash
    let displayItem = chosenWord.replace (/./g, '<span class = "dashes">_</span>');

    //display each element as span
    userInputSection.innerHTML = displayItem;

};

//initial function (called when page/user process new game)
const initializer = () => {
    winCount = 0;
    count = 0;  
//initially erase all content and an hide letters and new game botton

userInputSection.innerHTML = "" ;
optionsContainer.innerHTML = ""; 
letterContainer.classList.add("hide");
newGameContainer.classList.add ("hide");
letterContainer.innerHTML = "";

//for creating letter buttons
for (let i=65; i < 91 ; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    
    //character button click
     button.addEventListener("click" , () => {
        let charArray = chosenWord.split("");
        let dashes = document.getElementByIdClassName("dashes");

        //if array contains clicked value replace the matched dashe with letter else dram on canvas

        if(charArray.includes(button.innerText)) {
            charArray.forEach((char,index) => {

                //if character in array is same a clicked button
                if(char === button.innerText){

                    //replace dash with letter
                    dash[index].innerText = char;
                
                    //increment counter
                    winCount += 1;

                    //if wincount equal word length
                    if (winCount == charArray.length){
                        result.innerHTML = `<h2 class='win-msg'> You Win!</h2><p>The word was <span>${chosenWord}</span></p>`
                        blocker();
                        
                    }
                }

            });
            }else{
                count += 1;
                drawMan(count);
                if (count == 6){
                    resultText.innerHTML =`<h2 class='lose-msg'>Game Over!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            //diable clicked button
            
     })
}

}