let bg = document.getElementById("bg");
let gameContainer = document.getElementById('game');
// Function to hide the splash screen and show the game
function startGame() {
    // Make the splash screen fade out
    bg.style.opacity = "0";

    // Wait for the fade-out effect to complete
    setTimeout(function() {
        // Hide the splash screen completely
        bg.style.display = "none";

        // Show the game container
        gameContainer.style.display = "block";
    }, 1000); // 1-second delay
}

// Run the function when the user clicks the splash screen
bg.addEventListener('click', startGame);



let randomNumber = Math.floor(Math.random()*100)+1;
// document.write(randomNumber);

//getting id's from html to js
const input = document.getElementById("input");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const restartButton = document.getElementById("restartButton");

//onclick is an event:(only applied to links and buttons and image)"mostly"
//arrow function is more  like a for loop??
checkButton.onclick = () => {
    const guess = Number(input.value);
    input.blur();
    if(guess < 1 || guess > 100){
        result.style.visibility = "visible";
        result.textContent = "Please enter a number between 1 to 100";
        result.style.color = "red";
    }
    else if(guess === randomNumber){
        result.style.visibility = "visible";
        result.textContent = "Congratulations,You Won🎉🥳!";
        result.style.color = "green";
        //disabled is a method of Javascript
        checkButton.style.visibility = "hidden";
        restartButton.style.visibility = "visible";
        input.disabled = true;
    }
    else{
        result.textContent = guess < randomNumber?"Too low,Try Again!":"Too high Try Again!";
        result.style.visibility = "visible";
        result.style.color="orange";
    }
    input.value = "";
}
input.onclick = () => {
    // When the input field is clicked again, remove the result text and focus on the input field
    input.focus();
    result.style.visibility = "hidden"; // Hide the result line
}
restartButton.onclick = () =>{
    randomNumber = Math.floor(Math.random()*100)+1;
    result.textContent="";
    input.disabled=false;
    checkButton.style.visibility = "visible";
    restartButton.style.visibility = "hidden";
    input.focus();
    result.style.visibility = "hidden";
};