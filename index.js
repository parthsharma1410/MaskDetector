// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="index.css">
//     <link rel="preconnect" href="https://fonts.gstatic.com">
//     <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Zen+Dots&display=swap" rel="stylesheet">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
//     <title>Document</title>
// </head>
// <body>
//     <nav class="navbar navbar-light bg-light">
//         <div class="container">
//           <a class="navbar-brand" href="#">
//             <img src="/img/mask.svg" alt="Mask Detector" width="40" height="30">
//             <img src="/img/mask detector.svg" alt="" width="100" height="50">
//           </a>
//         </div>
//       </nav>
//     <h3 class="heading">PLEASE LOOK STRAIGHT INTO THE CAMERA</h3> <br>
// <button class='btnstart' type="button" onclick="init()">Start Detection</button> <br> <br>
// <div id="webcam-container"></div>
// <div id="label-container"></div>
// <div id='no-mask'>
//     <h3 class="heading1">ENTRY DENIED</h3> <br>
//     <p class="heading">Please cover your nose and mouth adequately with a mask and try again </p> <br><br>
//     <img class="image" src="./img/no-mask.svg" alt="NO-MASK" width="800" height="200">
// </div>
// <div id='mask'>
//     <h3 class="heading2">YOU MAY ENTER!</h3> <br>
//     <p class="heading">Thank you for being a responsible citizen & following Covid-19 guidelines!</p> <br><br>
//     <img class='image' src="./img/mask-on.svg" alt="MASK-ON" width="800" height="200">
// </div>
// <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
// <script type="text/javascript">
//     // More API functions here:
//     // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

//     // the link to your model provided by Teachable Machine export panel
//     const URL = "https://teachablemachine.withgoogle.com/models/xUl7rnoZP/";

//     let model, webcam, labelContainer, maxPredictions;

//     // Load the image model and setup the webcam
//     async function init() {
//         const modelURL = URL + "model.json";
//         const metadataURL = URL + "metadata.json";

//         // load the model and metadata
//         // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
//         // or files from your local hard drive
//         // Note: the pose library adds "tmImage" object to your window (window.tmImage)
//         model = await tmImage.load(modelURL, metadataURL);
//         maxPredictions = model.getTotalClasses();

//         // Convenience function to setup a webcam
//         const flip = true; // whether to flip the webcam
//         webcam = new tmImage.Webcam(500, 400, flip); // width, height, flip
//         await webcam.setup(); // request access to the webcam
//         await webcam.play();
//         window.requestAnimationFrame(loop);

//         // append elements to the DOM
//         document.getElementById("webcam-container").appendChild(webcam.canvas);
//         labelContainer = document.getElementById("label-container");
//         for (let i = 0; i < maxPredictions; i++) { // and class labels
//             labelContainer.appendChild(document.createElement("div"));
//         }
//     }

//     async function loop() {
//         webcam.update(); // update the webcam frame
//         await predict();
//         window.requestAnimationFrame(loop);
//     }

//     // run the webcam image through the image model
//     async function predict() {
//     // predict can take in an image, video or canvas html element
//     const prediction = await model.predict(webcam.canvas);
//     for (let i = 0; i < maxPredictions; i++) {
//         const classPrediction =
//             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//         labelContainer.childNodes[i].innerHTML = classPrediction;
//         console.log(prediction[i].className)

//         let flag = 0;

//         if(prediction[i].className === 'NO MASK' && prediction[i].probability.toFixed(2) > 0.5 && flag == 0){
//             document.getElementById("no-mask").style.visibility="visible";
//             document.getElementById("mask").style.height="0px";
//             flag = 1;
//             break
//         } 

//         if(prediction[i].className === 'MASK' && prediction[i].probability.toFixed(2) > 0.5 && flag == 0){
//             document.getElementById("mask").style.visibility="visible";
//             document.getElementById("no-mask").style.height="0px";
//             break
//         }
//     }
// }
// </script>
// </body>
// </html>