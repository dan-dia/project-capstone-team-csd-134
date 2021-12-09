const form = document.getElementById('form');
const modal = new bootstrap.Modal(document.getElementById('modalResult'));

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
      document.querySelector('.text-name').innerText = name;
      document.querySelector('.text-pregnancies').innerText = pregnancies;
      document.querySelector('.text-glucose').innerText = glucose;
      document.querySelector('.text-bloodPressure').innerText = bloodPressure;
      document.querySelector('.text-skinThickness').innerText = skinThickness;
      document.querySelector('.text-insulin').innerText = insulin;
      document.querySelector('.text-bmi').innerText = bmi;
      document.querySelector('.text-diabetesPedigreeFunction').innerText = diabetesPedigreeFunction;
      document.querySelector('.text-age').innerText = age;
      document.querySelector('#resultPredict').innerText = res.response;
      modal.show();
    })
    .catch(m => console.log(m));
});