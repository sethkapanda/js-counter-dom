const countLabel= document.getElementById("countLabel");
const decreaseButton= document.getElementById("decreaseBtn");
const resetButton= document.getElementById("resetBtn");
const increaseButton= document.getElementById("increaseBtn");
let count= 0;


//Decrease
const decrease= ()=>{
    count-=1;
    countLabel.textContent= count;
}

//reset
const countReset= ()=>{
    count=0;
    countLabel.textContent= count;
}

//function for inccrease button
const increase= ()=>{
    count++;
    countLabel.textContent= count;
}

decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", countReset);
increaseButton.addEventListener("click", increase);
