// BUTTON CALL
let resetBtn = document.getElementById("resetBtn");
let input;
let gridContainer = document.getElementById("gridContainer");
createGrid(16);

resetBtn.addEventListener('click',() => {input = prompt("How many squares per side do you want?(1-100)","16")
    if (input > 0 && input <= 100) {
        gridContainer.querySelectorAll('*').forEach(n => n.remove());
        createGrid(input);
        //console.log(input);
    } else {
        alert ("You have to put in a Number between 1 and 100!")
    }
});

//CREATING THE GRID

function createGrid(num){
    let squareSize = (100/ num);
    let squares = num * num;
    console.log(squares);
    for (let i = 0; i < squares; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.width = `${squareSize}%`;
        newDiv.style.height = `${squareSize}%`;
        newDiv.classList.add("grid");
        gridContainer.appendChild(newDiv);
    }

// COLOR CHANGE
    const boxes = document.querySelectorAll(".grid");
    boxes.forEach((box) => box.addEventListener('mouseover',() => 
        box.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`,{once:true}))
    
}

function random(){
    let randomNum = Math.round(Math.random()*256);
    return randomNum;
}