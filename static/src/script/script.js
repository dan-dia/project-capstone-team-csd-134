const form = document.getElementById('form');
const modal = new bootstrap.Modal(document.getElementById('modalResult'));

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
            const modalBody = document.querySelector('.modal-body');
            const textModalBody = `
      <p class="my-2 text-capitalize"><span class="fw-bold">Name</span> : ${name}</p>
              <table class="table">
                  <tbody>
                      <tr>
                          <th scope="row">Pregnancies</th>
                          <td>${pregnancies}</td>
                      </tr>
                      <tr>
                          <th scope="row">Glucose</th>
                          <td>${glucose}</td>
                      </tr>
                      <tr>
                          <th scope="row">Blood Pressure</th>
                          <td>${bloodPressure}</td>
                      </tr>
                      <tr>
                          <th scope="row">Skin Thickness</th>
                          <td>${skinThickness}</td>
                      </tr>
                      <tr>
                          <th scope="row">Insulin</th>
                          <td>${insulin}</td>
                      </tr>
                      <tr>
                          <th scope="row">BMI</th>
                          <td>${bmi}</td>
                      </tr>
                      <tr>
                          <th scope="row">Diabetes Pedigree Function</th>
                          <td>${diabetesPedigreeFunction}</td>
                      </tr>
                      <tr>
                          <th scope="row">Age</th>
                          <td>${age}</td>
                      </tr>
                  </tbody>
              </table>
              <div class="text-center">
                  <p>Berdasarkan data diatas anda dinyatakan : </p>
                  <p><span class="fw-bold text-uppercase">${response}</span> terhadap penyakit diabetes.</p>
              </div>`;
            modalBody.innerHTML = textModalBody;
            modal.show();
        })
        .catch(m => console.log(m));
});

/* Button Reset */
form.addEventListener('reset', function (e) {
    modalConfirm = confirm("Do you want to reset this data?");
    if (modalConfirm == true) {
        e.reset();
    } else {
        e.preventDefault();
    }
});

/*form.addEventListener('reset', function (e) {
    e.preventDefault();

    const confirm = document.createElement('div');
    confirm.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">Reset Data</h5>
          </div>
          <div class="modal-body">
            <p>Do you want to reset this data?</p>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          </div>
        </div>
      </div>
    </div>
    `;

    document.body.append(confirm);
    const modal = new bootstrap.Modal(confirm.querySelector('.modal'));
    modal.show();
});*/

/* Footer */
const footerYear = document.getElementById('footerYear');
const date = new Date();

if (date.getFullYear() === 2021) {
    footerYear.innerHTML = date.getFullYear();
} else {
    footerYear.innerHTML = `2021 - ${date.getFullYear()}`;
}
