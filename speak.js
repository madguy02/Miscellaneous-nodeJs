var inputBar = document.getElementById("inputBar");
var outputBar = document.getElementById("outputBar");
var chosenVoice = 'Lee';
var voices;

//Greet the user
if ('speechSynthesis' in window) {
    // wait on voices to be loaded before fetching list
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
        var greeting = new SpeechSynthesisUtterance("Hello there! I am  Bhaswati, your new A I assistant! I am still in the development phase,so Chill!!contribute towards me to make me live.");
        greeting.voice = voices.filter(function(voice) { return voice.name == chosenVoice; })[0];
        greeting.lang = 'en-US';
        greeting.rate = 0.9;
        window.speechSynthesis.speak(greeting);
    };
}

var speakBtn = document.getElementById("speak");
if ('webkitSpeechRecognition' in window){
    var gettingSpeech = false;
    var recognition = new webkitSpeechRecognition();
    function getSpeech(){
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = function(event) {
            if (event["results"]["0"]["0"]["confidence"] > 0.7){
                inputBar.value = "";
                inputBar.value = event["results"]["0"]["0"]["transcript"];
            }
        }
        recognition.start();
    }
    speakBtn.addEventListener("click",function(){if (gettingSpeech){gettingSpeech=false;recognition.stop();speakBtn.style.borderColor="#592A71";setTimeout(startThinking,1000);}else{window.speechSynthesis.cancel();gettingSpeech=true;getSpeech();speakBtn.style.borderColor="red";}});
}else{
    speakBtn.style.visibility = "hidden";
}
document.onkeypress = function(evt) { //Start on return key
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    if (charCode != 13){
        return;
    }else{
        //Pass the text in the input bar to V
        startThinking();
    }
};


function startThinking(){
    var inputText = inputBar.value;
    //Make the GUI respond to input
    inputBar.value = ""; //Clear the input bar
    inputBar.style.visibility = "hidden";
    outputBar.innerHTML = "Thinking...";
    thinkAbout(inputText);
}

function stopThinking(outputText){
    //Make the GUI respond to output
    inputBar.style.visibility = "visible";
    inputBar.value = "";
    outputBar.innerHTML = outputText;
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(outputText);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.voice = voices.filter(function(voice) { return voice.name == chosenVoice; })[0];
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }
}

function thinkAbout(inputText){
    //Call chatbot processor (needs to return a response string)
    response = placeHolder(inputText);

    //Pass the response back to the GUI
    stopThinking(response);
}


//Placeholder for intros
var attempt = 0;
function placeHolder(inputText){
    var outputText;
    switch(attempt){
        case 0:
            outputText = "I,love, you Bhaswati";
            break;
        case 1:
            outputText = "This is a demo phase of the project ";
            break;
        case 2:
            outputText = "i will be ready real soon haha";
            break;
        default:
            outputText = "So till then enjoy yourself BYE!!!";
    }
    attempt++;

    return outputText;
}

$.ajax({
  url: "https://api.myjson.com/bins/4uij9",
  dataType: "json",
  success: function(data) {
      console.log(data);
  }
})
