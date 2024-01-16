

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
    buildQuizPage(); 
}

function removeFrontPage() {

    let divText = document.getElementById("text");

    let h1 = document.getElementById("head");
    divText.removeChild(h1); 
    
    let div = document.getElementById("div");
    let button = document.getElementById("startButton");
    div.removeChild(button);


  for (let index = 0; index < 3; index++) {
    let div = document.getElementById("text" + index);
    div.remove(); 
 }

 for (let index = 0; index < 2; index++) {
    let h = document.getElementById("header" + index);
    h.remove();
 }

}

function buildQuizPage() {
    let div = document.getElementById("div");

    let video = document.createElement("video");
    video.setAttribute("id", "video"); 
    video.setAttribute("src", "../SnowShift/animations/animation1/grafik01.mp4");
    video.setAttribute("type", "video/mp4"); 
    video.setAttribute("autoplay", true); 
    video.setAttribute("alt", "animation showing two different snow masses");
    div.appendChild(video);

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
    questionbox.setAttribute("class", "introduction-container");
    div.appendChild(questionbox); 

    let question = document.createElement("p");
    question.innerHTML = "1960 fielen auf dem Feldberg in einem Winter insgesamt 6,06 Meter Schnee. <br> <br> Wie viel Meter sind es heute?"
    questionbox.appendChild(question); 

    var inputElement = document.createElement('input');

    inputElement.type = 'number';

    inputElement.id = 'userInput';
    inputElement.name = 'userInput';
    inputElement.placeholder = 'Gebe eine Zahl wie zum Beispiel 2,34 ein'; 

    var inputContainer = document.getElementById('inputContainer');
    div.appendChild(inputElement);

    inputElement.addEventListener('input', function() {
        var enteredNumber = inputElement.value;
        console.log('Eingegebene Zahl:', enteredNumber);
    });
}
