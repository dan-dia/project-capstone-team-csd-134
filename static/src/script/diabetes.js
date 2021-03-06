const form = document.getElementById('form');

/* Button Predict */
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const pregnancies = document.getElementById('pregnancies').value;
    const glucose = document.getElementById('glucose').value;
    const bloodPressure = document.getElementById('bloodPressure').value;
    const skinThickness = document.getElementById('skinThickness').value;
    const insulin = document.getElementById('insulin').value;
    const bmi = document.getElementById('bmi').value;
    const diabetesPedigreeFunction = document.getElementById('diabetesPedigreeFunction').value;
    const age = document.getElementById('age').value;

    const datas = {
        pregnancies: pregnancies,
        glucose: glucose,
        bloodPressure: bloodPressure,
        skinThickness: skinThickness,
        insulin: insulin,
        bmi: bmi,
        diabetesPedigreeFunction: diabetesPedigreeFunction,
        age: age
    };

    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    }


    postData('/process_to_model', datas)
        .then(data => data.json())
        .then(res => {
            const { response } = res;
            const textModalBody = `
            <div class="my-4">
                <p>Berdasarkan data, <span class="text-capitalize fw-bold">${name}</span> dinyatakan : </p>
                <p><span class="fw-bold text-uppercase">${response}</span> terhadap Penyakit Diabetes.</p>
            </div>
            <div class="accordion m-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Data
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body table-responsive">
                            <table class="table table-sm text-start body-tablet-laptop">
                                <tbody>
                                    <tr>
                                        <th>Nama</th>
                                        <td class="text-center text-capitalize">${name}</td>
                                    </tr>
                                    <tr>
                                        <th>Kehamilan</th>
                                        <td class="text-center">${pregnancies}</td>
                                    </tr>
                                    <tr>
                                        <th>Glukosa</th>
                                        <td class="text-center">${glucose}</td>
                                    </tr>
                                    <tr>
                                        <th>Tekanan Darah</th>
                                        <td class="text-center">${bloodPressure}</td>
                                    </tr>
                                    <tr>
                                        <th>Ketebalan Kulit</th>
                                        <td class="text-center">${skinThickness}</td>
                                    </tr>
                                    <tr>
                                        <th>Insulin</th>
                                        <td class="text-center">${insulin}</td>
                                    </tr>
                                    <tr>
                                        <th>BMI</th>
                                        <td class="text-center">${bmi}</td>
                                    </tr>
                                    <tr>
                                        <th>Fungsi Silsilah Diabetes</th>
                                        <td class="text-center">${diabetesPedigreeFunction}</td>
                                    </tr>
                                    <tr>
                                        <th>Umur</th>
                                        <td class="text-center">${age}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table table-sm text-start body-mobile">
                                <tbody>
                                    <tr>
                                        <th>Nama<br><span class="fw-normal text-capitalize">${name}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Kehamilan<br><span class="fw-normal">${pregnancies}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Glukosa<br><span class="fw-normal">${glucose}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Tekanan Darah<br><span class="fw-normal">${bloodPressure}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Ketebalan Kulit<br><span class="fw-normal">${skinThickness}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Insulin<br><span class="fw-normal">${insulin}</span></th>
                                    </tr>
                                    <tr>
                                        <th>BMI<br><span class="fw-normal">${bmi}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Fungsi Silsilah Diabetes<br><span class="fw-normal">${diabetesPedigreeFunction}</span></th>
                                    </tr>
                                    <tr>
                                        <th>Umur<br><span class="fw-normal">${age}</span></th>
                                    </tr>   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;

            let colorBackdrop = '';
            let colorIcon = '';

            if (response === 'negatif') {
                colorBackdrop = 'rgba(25, 135, 84, .6)';
                colorIcon = '#198754';
            } else {
                colorBackdrop = 'rgba(220, 53, 69, .6)';
                colorIcon = '#dc3545';
            }

            Swal.fire({
                title: `<strong>Hasil Prediksi</strong>`,
                icon: 'info',
                html: textModalBody,
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
                focusCancel: true,
                backdrop: colorBackdrop,
                iconColor: colorIcon
            })
        })
        .catch(m => alert(m));
});

/* Button Reset */
const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', function (e) {
    Swal.fire({
        title: 'Reset Data!',
        text: 'Apakah anda ingin menghapus seluruh data pada form ?',
        icon: 'warning',
        confirmButtonText: 'Iya',
        showCancelButton: true,
        cancelButtonText: 'Tidak',
        confirmButtonColor: '#0d6efd'
    }).then((result) => {
        if (result.isConfirmed) {
            const reset = document.querySelector('button[type=reset]');
            reset.click();
            Swal.fire({
                title: 'Reset!',
                text: 'Form berhasil direset.',
                icon: 'success',
                confirmButtonColor: '#0d6efd'
            });
        }
    }

    );
});
