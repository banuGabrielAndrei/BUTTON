let btn = document.getElementById("btn");
let buttonColours = ['red', 'yellow', 'green'];
let index = 0;
btn.style.backgroundColor = buttonColours[index];

function changeColour() {
    ++index;
    if (index == buttonColours.length) {
        index = 0;
    }
    btn.style.backgroundColor = buttonColours[index];
    console.log(index);
}

setInterval(changeColour, 10000);