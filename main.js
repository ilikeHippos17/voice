var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event)  {
    console.log(event);

    var Content = event.results[0][0].transcript;
   

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="I am stupid because I just got pranked")
    {
        console.log("pranked")
        speak();
    }
    
}

function speak(){ 
    var synth = window.speechSynthesis;

    speak_data = "you got trolled L O L. Also say cheese!"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 4500);
}

WebAssembly.compileStreaming({
    width:360,
    height:250,
    iamge_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
       });
}
function save()
{
    link = document.getElementById("link");
    Image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}

