let btn = document.getElementById("btn");
btn.style.backgroundColor = "red";
    
function changeColour() {
    if (btn.style.backgroundColor == "red") {
        btn.style.backgroundColor = "yellow";
    } else if (btn.style.backgroundColor == "yellow") {
        btn.style.backgroundColor = "green";
    } else if(btn.style.backgroundColor == "green") {
        btn.style.backgroundColor = "red";
    }
}

setInterval(changeColour, 10000);