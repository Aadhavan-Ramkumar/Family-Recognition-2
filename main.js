Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

Camera = document.getElementById("Camera");

Webcam.attach("Camera");

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Picture").innerHTML = "<img id='CapturedImage' src='" + data_uri + "'>";
    });
}

console.log("Ml5 Version:", ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vtNYrfayk/", ModelLoaded);