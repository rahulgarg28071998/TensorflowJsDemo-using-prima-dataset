async function init(event) {

    const model = await tf.loadLayersModel('model.json');
    // model.predict()
    console.log('model loaded from storage');
    model.predict(tf.tensor2d([
        [1, 1, 1, 1, 1, 1, 1, 1]
    ])).print();

    let data = []
    data.push(parseFloat(document.getElementById("Pregnancies").value));
    data.push(parseFloat(document.getElementById("Glucose").value));
    data.push(parseFloat(document.getElementById("BloodPressure").value));
    data.push(parseFloat(document.getElementById("SkinThickness").value));
    data.push(parseFloat(document.getElementById("Insulin").value));
    data.push(parseFloat(document.getElementById("BMI").value));
    data.push(parseFloat(document.getElementById("DiabetesPedigreeFunction").value));
    data.push(parseFloat(document.getElementById("Age").value));
    console.log(data);

    var pred = model.predict(tf.tensor2d([data]));
    const tensorData = pred.dataSync();
    console.log(tensorData[0]);
    var filteredPrediction = tensorData[0] > 0.5 ? 1 : 0;
    document.getElementById("Prediction").innerText = "probability : " + tensorData[0] + "\n prediction : " + filteredPrediction;
}

// init();