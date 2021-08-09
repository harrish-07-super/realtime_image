function preload(){
    
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tNVvb0EYH/model.json",modelLoaded);
}

function modelLoaded() {
    console.log("Model is loaded!")
}



function draw(){
    image(camera,0,0,300,300);
 classifier.classify(camera,got_result);
}

function got_result(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("accuracy_name").innerHTML=results[0].confidence.toFixed(2);

}
}