function startClassification() {

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ymSw_HNuo/model.json", modelReady);
    
    
    }
    
    function modelReady() {
    
    classifier.classify(gotResults)
    
    }
    dog = 0;
    cat = 0;
    img1= document.getElementById("ear.png");
  

    function gotResults(error, results) {
    
    if(error) {
    
    console.log(error);
    
    }
    
    else {
    
    console.log(results)
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;

    document.getElementById("dog").innerHTML = "Dogs detected " + dog;
    document.getElementById("cat").innerHTML = "Cats detected " + cat;
    document.getElementById("dog").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("cat").style.color = "rgb("+r+", "+g+", "+b+")";
    document.getElementById("detect").innerHTML = "Detected Voice of "+ results[0].label;


    if(results[0].label == "Barking") {

    dog = dog + 1;
    img1.src="beagle.png"

    }

    else if(results[0].label == "Meow") {

        cat = cat + 1;
        img1.src="cat.png"

    }
    }}