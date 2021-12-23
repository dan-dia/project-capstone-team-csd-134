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

    if (resultBMI < 18.5) {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-danger">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-danger text-capitalize">berat badan kurang<h3>`;
    } else if (resultBMI >= 18.5 && resultBMI < 25) {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-success">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-success text-capitalize">berat badan normal<h3>`;
    } else if (resultBMI >= 25 && resultBMI < 30) {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-warning">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-warning text-capitalize">berat badan kelebihan<h3>`;
    } else {
        bodyBMI.innerHTML = `
        <h1><span class="badge bg-danger">${resultBMI}</span><h1>
        <h3 class="mt-2 fw-bold text-danger text-capitalize">obesitas<h3>`;
    }
};