const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');


btn.addEventListener('click', function(){

    let hexColor1 = '#';
    let hexColor2 = '#';
    let hexColor3 = '#';
    let hexColor4 = '#';
    let hexColor5 = '#';

    for (let i = 0; i<6; i++){
        hexColor1 += hex[getRandomNumbers()];
        hexColor2 += hex[getRandomNumbers()];
        hexColor3 += hex[getRandomNumbers()];
        hexColor4 += hex[getRandomNumbers()];
        hexColor5 += hex[getRandomNumbers()];
    }

    
    
    document.querySelector(".c1").textContent = hexColor1;
    document.querySelector(".columna1").style.backgroundColor = hexColor1;

    document.querySelector(".c2").textContent = hexColor2;
    document.querySelector(".columna2").style.backgroundColor = hexColor2;

    document.querySelector(".c3").textContent = hexColor3;
    document.querySelector(".columna3").style.backgroundColor = hexColor3;

    document.querySelector(".c4").textContent = hexColor4;
    document.querySelector(".columna4").style.backgroundColor = hexColor4;

    document.querySelector(".c5").textContent = hexColor5;
    document.querySelector(".columna5").style.backgroundColor = hexColor5;
})






function getRandomNumbers(){
    return Math.floor(Math.random()*hex.length);
}