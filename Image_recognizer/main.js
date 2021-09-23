Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
Webcam.attach(document.getElementById("cam"))

function selfie() {
    Webcam.snap(function (data) {
        document.getElementById("preview").innerHTML = "<img id='cap-selfie' src=' " + data + " '>"
    })
}
console.log(ml5.version)
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Gd8UUgdDw/model.json", modelload)
                      
function modelload() {
    console.log("model is loaded")
}

function check() {
    var img = document.getElementById("cap-selfie")
    classifier.classify(img, identify)
}

function identify(error, results) {
    if (error) {
        console.error(error)
    }else{
        console.log(results)
        label = results[0].label
            document.getElementById("obj-name").innerHTML = label.charAt(0).toUpperCase() + label.slice(1)
            document.getElementById("obj-accu").innerHTML = results[0].confidence.toFixed(2)
        
    }
}
