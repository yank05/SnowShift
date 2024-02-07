

window.addEventListener("load", handleLoad);

let values = []; 
let correctAnswers = ['2.92', '70%', '175']; 
let result; 

function handleLoad() {

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

    let banner1 = document.getElementById("banner1");
    banner1.remove(); 
    let banner2 = document.getElementById("banner2");
    banner2.remove(); 


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

    if (document.getElementById("imgBox")) {
        let imgDiv = document.getElementById("imgBox");
        let img = document.createElement("img");
        img.setAttribute("id", "img"); 
        imgDiv.appendChild(img); 
    } else {
        let imgDiv = document.getElementById("text");
        imgDiv.setAttribute("id", "imgBox");
        document.body.insertBefore(imgBox, div1);

        let img = document.createElement("img");
        img.setAttribute("id", "img"); 
        imgDiv.appendChild(img); 
    
    }
    
    let questionbox = document.createElement("div");
    questionbox.setAttribute("class", "introduction-container");
    questionbox.setAttribute("id", "questionbox");
    questionbox.setAttribute("width", "20%"); 
    div.appendChild(questionbox); 

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    document.body.insertBefore(div2, div1); 

    let inputElement = document.createElement("input");

    inputElement.type = 'number'; 
    inputElement.setAttribute("id", "inputElement");
    div1.appendChild(inputElement); 

    let button = document.createElement("button"); 
    button.setAttribute("id", "goOnButton"); 
    button.innerHTML = "Weiter";
    div1.appendChild(button);
}

function buildQuizPage1() {
    let img = document.getElementById("img");
    img.setAttribute("src", "../SnowShift/animations/animation1/grafik01.gif");
    img.setAttribute("alt", "animation showing two different snow masses");

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
    } else if (input.value > 6 || input.value < 0) {
        alert("Diese Antwort ergibt keinen Sinn!"); 
    } else {
        var enteredNumber = inputElement.value;
        values.push(enteredNumber); 
        deletePage();
        buildQuizPage2();
    }
    }

function deletePage() {

   let div1 = document.getElementById("div1");
   div1.remove();

   let div2 = document.getElementById("div2");
   div2.remove(); 
}

function buildQuizPage2() {
    buildQuizPageGeneral(); 

    let img = document.getElementById("img");
    img.setAttribute("src", "../SnowShift/animations/animation2/grafik02.gif");
    img.setAttribute("alt", "animation of a decreasing water mass");

    let question = document.createElement("p");
    question.innerHTML = "Zur Schneeerzeugung mit Schneekanonen halten Skigebietsbetreiber Wasser in Beschneiungsteichen zurück. <br> Dieses Wasser kommt  nicht im Tal an. <br> <br> Um bis zu wie viel Prozent hat die Wassermenge in Flüssen in den französischen Alpen abgenommen, seit es Schneekanonen gibt?"
    let questionbox = document.getElementById("questionbox"); 
    questionbox.appendChild(question); 
    
    let button = document.getElementById("goOnButton"); 
    button.addEventListener("click", NextQuestion3);
}

function NextQuestion3() {
    let input = document.getElementById("inputElement");
    if (input.value == 0) {
        alert("Gebe eine Antwort ein!");
    } else if (input.value > 100 || input.value < 0) {
        alert("Diese Antwort ergibt keinen Sinn!"); 
    } else {
        var enteredNumber = inputElement.value;
        values.push(enteredNumber); 
        deletePage();
        buildQuizPage3();
    }
    }

function buildQuizPage3() {
    buildQuizPageGeneral(); 
    
    let img = document.getElementById("img");
    img.setAttribute("src", "../SnowShift/animations/animation3/grafik03.gif");
    img.setAttribute("alt", "animation of dots represtenting ski arenas disappearing");
    
    let question = document.createElement("p");
    question.innerHTML = "2023 gab es in Deutschland etwa 700 Skigebiete. <br> Wie viele davon sind in den nächsten Jahren direkt von einer Schließung bedroht?"
    let questionbox = document.getElementById("questionbox"); 
    questionbox.appendChild(question); 

    let div2 = document.getElementById("div2")
    
    let button = document.getElementById("goOnButton"); 
    button.addEventListener("click", finals);
    }

function finals() {
    let input = document.getElementById("inputElement");
    if (input.value == 0) {
        alert("Gebe eine Antwort ein!");
    } else if (input.value > 700 || input.value < 0) {
        alert("Diese Antwort ergibt keinen Sinn!"); 
    } else {
        var enteredNumber = inputElement.value;
        values.push(enteredNumber); 
        deletePage();
        let img = document.getElementById("imgBox");
        img.remove(); 
        buildFinalPage();
    }

    }

function buildFinalPage() {
    calculateResult(); 

    let div1 = document.createElement("div");
    div1.setAttribute("id", "resultBox"); 
    document.body.appendChild(div1);

    let resultText = document.createElement("p");
    resultText.setAttribute("id", "headerResult"); 
    resultText.innerHTML = "Dein Ergebnis";
    div1.appendChild(resultText); 

    let resultPercent = document.createElement("h1");
    resultPercent.innerHTML = result + "%";
    div1.appendChild(resultPercent); 

    let explanation = document.createElement("p");
    explanation.setAttribute("id", "explanation");

    if (result > 0) {
        explanation.innerHTML = "Deine Werte weichen um " + result + "% vom Ergebnis ab.<br/>Du überschätzt die Folgen der Klimakrise auf das Skifahren."
    }
    else {
        explanation.innerHTML = "Deine Werte weichen um " + result + "% vom Ergebnis ab.<br/>Du unterschätzt die Folgen der Klimakrise auf das Skifahren."
    }
    div1.appendChild(explanation); 
     
    for (let index = 1; index < 4; index++) {
        let box = document.createElement("details");
        div1.appendChild(box);
        let summary = document.createElement("summary");
        summary.innerHTML = "Antwort auf Frage " + index; 
        box.appendChild(summary);
        
        let p = document.createElement("p");
        
        console.log(index); 
        if (index == 1) {
            p.innerHTML = "Die korrekte Antwort bei Frage 1 ist 2.92 Meter. Die Menge an Schnee, die insgesamt auf dem Feldberg fällt hat sich damit in den letzten 40 Jahren mehr als halbiert."
        } else if (index == 2) {
            p.innerHTML = "Die korrekte Antwort bei Frage 2 ist bis zu 70%. Im Winter wird für die Beschneiung so viel Wasser verbraucht wie eine Stadt mit 1,5 Mio. Menschen in einem Jahr benötigt. <br/> Das Wasser wird " + 
            "im Winter zurückgehalten und gespeichert, es fehlt dann in den Flüssen. Das führt dazu, dass teilweise bis zu 70% weniger Wasser im Tal ankommt. Hier kommt es in Frankreich bereits zu Konflikten zwischen Skigebiets" +
            "betreibern und Bauern."
        } else if (index == 3) {
            p.innerHTML = "Die korrekte Antwort bei Frage 3 ist bis zu 175. Mindestens 25% der Skigebiete in Deutschland, insbesondere in niedrigeren Lagen werden in den kommenden Jahren auch mit künstlicher Beschneiung nur schwer " +
            "überleben, weil es einfach zu warm wird."
        } else {
            alert("Fehler!");  
        }
        box.appendChild(p)
    }




}

function calculateResult() {
    let totalDeviationPercent = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        let userAnswer = parseFloat(values[i]);
        let correctAnswer = parseFloat(correctAnswers[i]);


        let deviation = ((userAnswer - correctAnswer) / correctAnswer) * 100;

        totalDeviationPercent += deviation;
    }

    let averageDeviationPercent = totalDeviationPercent / correctAnswers.length;

    result = Math.round(averageDeviationPercent * 100) / 100;
}

    