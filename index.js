// async function predict() {
//     // predict can take in an image, video or canvas html element
//     const prediction = await model.predict(webcam.canvas);
//     for (let i = 0; i < maxPredictions; i++) {
//         const classPrediction =
//             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//         labelContainer.childNodes[i].innerHTML = classPrediction;
//         console.log(prediction[i].className)

//         if(prediction[i].className === 'NO MASK' && prediction[i].probability.toFixed(2) > 0.5){
//             document.getElementById("no-mask").style.visibility="visible";
//             break
//         } 
//         if(prediction[i].className === 'MASK' && prediction[i].probability.toFixed(2) > 0.5){
//             document.getElementById("mask").style.visibility="visible";
//             break
//         }
//     }
// }

// #no-mask {
//     visibility: hidden;
//   }
  
//   #mask {
//     visibility: hidden;
//   }

  