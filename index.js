let randomNumbers1 = Math.random()*6+1;
randomNumbers1 = Math.round(Math.floor(randomNumbers1));

let randomNumbers2 = Math.random()*6+1;
randomNumbers2 = Math.round(Math.floor(randomNumbers2));

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumbers1+".png");

document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumbers2+".png");

if(randomNumbers1===randomNumbers2){

    console.log("Draw!");
    document.querySelector("h1").innerHTML = "Draw!"

}else if(randomNumbers1>randomNumbers2){

    console.log("Player 1!");
    document.querySelector("h1").innerHTML = "Player 1!!"
}else{

    console.log("Player 2!");
    document.querySelector("h1").innerHTML = "Player2!"
}

console.log(randomNumbers1);