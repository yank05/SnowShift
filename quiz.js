

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

    removeFrontPage();
    let div = document.getElementById("div");

    let gif = document.createElement("video");
    gif.setAttribute("height", "300px"); 
    gif.setAttribute("src", "../SnowShift/animations/animation1/test01.webm");
    gif.setAttribute("type", "video/webm"); 
    gif.setAttribute("autoplay", true); 
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

    let questionbox = document.createElement("div");
    questionbox.setAttribute("id", "questionbox");
    div.appendChild(questionbox); 

    let question = document.createElement("p");
    question.innerHTML = "1960 fielen auf dem Feldberg in einem Winter insgesamt 6,06 Meter Schnee. <br> <br> Wie viel Meter sind es heute?"
    questionbox.appendChild(question); 
}

function removeFrontPage() {

    let divText = document.getElementById("text");

    let h1 = document.getElementById("head");
    divText.removeChild(h1); 

    let p = document.getElementById("introduction");
    divText.removeChild(p);

    
    let div = document.getElementById("div");
    let button = document.getElementById("startButton");
    div.removeChild(button);
}
