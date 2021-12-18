const bmiForm = document.getElementById('bmiForm');

bmiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const resultBMI = document.getElementById('bmiResult');
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        resultBMI.innerHTML = `
        <h1 id="result"><span class="badge bg-danger">${bmi}</span><h1>
        <h3 id="result" class="mt-2 fw-bold text-danger">UNDER WEIGHT<h3>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        resultBMI.innerHTML = `
        <h1 id="result"><span class="badge bg-success">${bmi}</span><h1>
        <h3 id="result" class="mt-2 fw-bold text-success">NORMAL<h3>`;
    } else {
        resultBMI.innerHTML = `
        <h1 id="result"><span class="badge bg-danger">${bmi}</span><h1>
        <h3 id="result" class="mt-2 fw-bold text-danger">OVER WEIGHT<h3>`;
    }
};