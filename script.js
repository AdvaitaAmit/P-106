function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vel5jinAV/model.json', modelReady);

}

function modelReady(){
classifier.classify(gotResults);
}

function gotResults(){
    
}