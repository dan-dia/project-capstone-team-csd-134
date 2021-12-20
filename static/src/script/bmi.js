const bmiForm = document.getElementById('bmiForm');

bmiForm.addEventListener('submit', function (e) {
    e.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bodyBMI = document.getElementById('bodyBMI');
    const resultBMI = (weight / ((height * height) / 10000)).toFixed(1);

    if (resultBMI < 18.6) {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-danger">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-danger">UNDER WEIGHT<h3>`;
    } else if (resultBMI >= 18.6 && resultBMI < 24.9) {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-success">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-success">NORMAL<h3>`;
    } else {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-danger">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-danger">OVER WEIGHT<h3>`;
    }
};