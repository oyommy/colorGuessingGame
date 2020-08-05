let numOfBoxes = 6;
let colors = generateRandomColors(numOfBoxes)
let colorBox = document.querySelectorAll(".square")
let pickedColor = pickColor(); 
let colorDisplay = document.querySelector(".color-display")
let messageDisplay = document.querySelector(".message")
let h1 = document.querySelector("#head-boy")
let reset = document.querySelector(".reset")
let easyBtn = document.querySelector(".easy-btn")
let hardBtn = document.querySelector(".hard-btn")
let scoreKeeper = document.querySelector(".counter")
let counter = 0;
// let proBtn = document.querySelector(".pro-btn")

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    // proBtn.classList.remove("selected")
    numOfBoxes = 3
    colors = generateRandomColors(numOfBoxes)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < colorBox.length; i++){
        if(colors[i]){
            colorBox[i].style.backgroundColor = colors[i]
        } else {
            colorBox[i].style.display = 'none'
        }
        // document.querySelectorAll(".square")[0].style.display = 'none'
        // document.querySelectorAll(".square")[1].style.display = 'none'
        // document.querySelectorAll(".square")[2].style.display = 'none'
    }
    
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    // proBtn.classList.remove("selected")
    numOfBoxes = 6
    colors = generateRandomColors(numOfBoxes)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < colorBox.length; i++){
            colorBox[i].style.backgroundColor = colors[i]
            colorBox[i].style.display = 'block'
    }
})

// proBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.remove("selected")
//     proBtn.classList.add("selected")
//     numOfBoxes = 9
//     colors = generateRandomColors(numOfBoxes)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor;
//     for(let i = 0; i < colorBox.length; i++){
//             colorBox[i].style.backgroundColor = colors[i]
//             colorBox[i].style.display = 'block'
//     }

// })
colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function(){
    //generate all neww colors
    colors = generateRandomColors(numOfBoxes)
    //pick a new random color from array
    pickedColor = pickColor()
    //change color display to match picked color
    colorDisplay.textContent = pickedColor
    reset.textContent = "NEW COLOURS"
    messageDisplay.textContent = ""
    //change colors of squares
    for (let i = 0; i < colorBox.length; i++){
        colorBox[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "darkslategrey"
})

for(let i = 0; i < colors.length; i++) {
    // add colors
    colorBox[i].style.backgroundColor = colors[i]; 
    // click listeners
    colorBox[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor
        //compare clicked color to color display
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = 'CORRECT!'
            reset.textContent = "PLAY AGAIN?"
            changeColors(pickedColor)
            h1.style.backgroundColor = pickedColor;
            counter += 5
            scoreKeeper.textContent = counter;
        } else {
            this.style.backgroundColor = 'darkslategrey'
            messageDisplay.textContent = 'Oops, Try Again!'
            counter -= 1
            scoreKeeper.textContent = counter;
        }
    })
}

function changeColors(color){
    //loop through squares
    for(let i = 0; i < colorBox.length; i++) {
          // change colors to match color display
          colorBox[i].style.backgroundColor = color;
    } 
  
}


function pickColor(){
    // let r = Math.floor(Math.random() * 256)
    // let g = Math.floor(Math.random() * 256)
    // let b = Math.floor(Math.random() * 256)
    // return `rgb(${r},${g},${b})`
    // console.log("rgb(" + r + "," + g + "," + b + ")");
    let random =  Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    //make an array
    let arr = []
    //repeat num times
    for (var i = 0; i < num; i++){
        //add num random colors to array
        arr.push(randomColor())
    }
    
    //return that array
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}