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

    model.predict(tf.tensor2d([data])).print();
}

// init();