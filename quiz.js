

window.addEventListener("load", handleLoad);

let values = []; 

function handleLoad() {
    console.log("ggg");

    let div = document.getElementById("div");
    let button = document.createElement("button"); 
    button.setAttribute("id", "startButton"); 
    button.innerHTML = "Start";
    div.appendChild(button);

    let logo = document.getElementById("logo");
    logo.addEventListener("click", LogoKlick)
    
    button.addEventListener("click", StartClick);

}

function LogoKlick() {
    window.location.href = '/../SnowShift/index.html'
    values.length = 0; 
}

function StartClick() {

    removeFrontPage();
    buildQuizPageGeneral(); 
    buildQuizPage1(); 
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

function buildQuizPageGeneral() {

    if (document.getElementById("div")) {
        let div = document.getElementById("div");
        div.setAttribute("id", "div1"); 
    } else {
        let div = document.createElement("div");
        div.setAttribute("id", "div1");
        document.body.appendChild(div);  
    }
    let div = document.getElementById("div1"); 

    let video = document.createElement("video");
    video.setAttribute("id", "video"); 
    video.setAttribute("src", "../SnowShift/animations/animation1/grafik01.mp4");
    video.setAttribute("type", "video/mp4"); 
    video.setAttribute("autoplay", true); 
    video.setAttribute("alt", "animation showing two different snow masses");
    div.appendChild(video);

    let neonBeam = document.createElement("div");
    neonBeam.setAttribute("id", "neonBeam"); 
    div.appendChild(neonBeam); 

    let questionbox = document.createElement("div");
    questionbox.setAttribute("class", "introduction-container");
    questionbox.setAttribute("id", "questionbox");
    questionbox.setAttribute("width", "20%"); 
    div.appendChild(questionbox); 

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    document.body.appendChild(div2); 

    let inputElement = document.createElement("input");

    inputElement.type = 'number'; 
    inputElement.setAttribute("id", "inputElement");
    div2.appendChild(inputElement); 

    inputElement.addEventListener('input', function() {
    var enteredNumber = inputElement.value;
    values.push(enteredNumber); 
    console.log(values); 
    });

    let button = document.createElement("button"); 
    button.setAttribute("id", "goOnButton"); 
    button.innerHTML = "Weiter";
    document.body.appendChild(button);
}

function buildQuizPage1() {
    let video = document.getElementById("video");
    video.setAttribute("src", "../SnowShift/animations/animation1/grafik01.mp4");
    video.setAttribute("alt", "animation showing two different snow masses");

    let question = document.createElement("p");
    question.innerHTML = "1960 fielen auf dem Feldberg in einem Winter insgesamt 6,06 Meter Schnee. <br> <br> Wie viel Meter sind es heute?"
    let questionbox = document.getElementById("questionbox"); 
    questionbox.appendChild(question); 

    let div2 = document.getElementById("div2")

    let schrift1 = document.createElement("p")
    schrift1.innerHTML = "1960";
    schrift1.setAttribute ("id", "timecall1");
    div2.appendChild(schrift1);

    let schrift2 = document.createElement("p")
    schrift2.innerHTML = "heute";
    schrift2.setAttribute ("id", "timecall2");
    div2.appendChild(schrift2);

    
    let button = document.getElementById("goOnButton"); 
    button.addEventListener("click", NextQuestion2);
}

function NextQuestion2() {
    let input = document.getElementById("inputElement");
    if (input.value == 0) {
        alert("Gebe eine Antwort ein!");
    } else {
        deletePage();
        buildQuizPage2();
    }
    }

function deletePage() {
   let div1 = document.getElementById("div1");
   div1.remove();

   let div2 = document.getElementById("div2");
   div2.remove(); 

   let button = document.getElementById("goOnButton");
   button.remove(); 
}

function buildQuizPage2() {
    buildQuizPageGeneral(); 

    let video = document.getElementById("video");
    video.setAttribute("src", "../SnowShift/animations/animation2/grafik02.mp4");
    video.setAttribute("alt", "animation of a decreasing water mass");

    let question = document.createElement("p");
    question.innerHTML = "Zur Schneeerzeugung mit Schneekanonen halten Skigebietsbetreiber Wasser in Beschneiungsteichen zurück. <br> Dieses Wasser kommt  nicht im Tal an. <br> <br> Um bis zu wie viel Prozent hat die Wassermenge in Flüssen in den französischen Alpen abgenommen, seit es Schneekanonen gibt?"
    let questionbox = document.getElementById("questionbox"); 
    questionbox.appendChild(question); 

    let div2 = document.getElementById("div2")

    let schrift1 = document.createElement("p")
    schrift1.innerHTML = "1960";
    schrift1.setAttribute ("id", "timecall1");
    schrift1.style.opacity = "0"; 
    div2.appendChild(schrift1);

    let schrift2 = document.createElement("p")
    schrift2.innerHTML = "heute";
    schrift2.setAttribute ("id", "timecall2");
    schrift2.style.opacity = "0"; 
    div2.appendChild(schrift2);
    
    let button = document.getElementById("goOnButton"); 
    button.addEventListener("click", NextQuestion3);
}

function NextQuestion3() {
    let input = document.getElementById("inputElement");
    if (input.value == 0) {
        alert("Gebe eine Antwort ein!");
    } else {
        deletePage();
        buildQuizPage3();
    }
    }

function buildQuizPage3() {
    buildQuizPageGeneral(); 
    
    let video = document.getElementById("video");
    video.setAttribute("src", "../SnowShift/animations/animation3/grafik03.mp4");
    video.setAttribute("alt", "animation of dots represtenting ski arenas disappearing");
    
    let question = document.createElement("p");
    question.innerHTML = "Um Schneekanonen zu betreiben, halten Skigebietsbetreiber Wasser in Beschneiungsteichen zurück. <br> Dieses Wasser kommt  nicht im Tal an. <br> <br> Um bis zu wie viel Prozent hat die Wassermenge in Flüssen in den französischen Alpen abgenommen, seit es Schneekanonen gibt?"
    let questionbox = document.getElementById("questionbox"); 
    questionbox.appendChild(question); 

    let neonBeam = document.getElementById("neonBeam");
    neonBeam.style.left= "33%"; 

    let div2 = document.getElementById("div2")

    let schrift1 = document.createElement("p")
    schrift1.innerHTML = "1960";
    schrift1.setAttribute ("id", "timecall1");
    schrift1.style.opacity = "0"; 
    div2.appendChild(schrift1);
    
    let button = document.getElementById("goOnButton"); 
    button.addEventListener("click", NextQuestion3);
    }