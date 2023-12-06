

window.addEventListener("load", handleLoad);

function handleLoad() {
    console.log("ggg");

    let div = document.getElementById("div");
    let button = document.createElement("button"); 
    button.setAttribute("id", "startButton"); 
    button.innerHTML = "Start";
    div.appendChild(button);
    
    button.addEventListener("click", StartClick);
}

function StartClick() {

    let div = document.getElementById("div");
    let button = document.getElementById("startButton");
    div.removeChild(button);

    let gif = document.createElement("img");
    gif.setAttribute("src", "../SnowShift/animations/animation1/softbodysim01.gif");
    gif.setAttribute("alt", "animation showing two different snow masses");
    div.appendChild(gif);

    let textbox = document.createElement("div");
    textbox.setAttribute("id", "textbox");
    div.appendChild(textbox); 

    let schrift1 = document.createElement("p")
    schrift1.innerHTML = "1960";
    schrift1.setAttribute ("id", "timecall1");
    textbox.appendChild(schrift1);

    let schrift2 = document.createElement("p")
    schrift2.innerHTML = "heute";
    schrift2.setAttribute ("id", "timecall2");
    textbox.appendChild(schrift2);
}

