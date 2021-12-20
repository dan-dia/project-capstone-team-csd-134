/* Nav Active */
const path = document.location.pathname;
const nav = document.querySelectorAll('.nav-link');

function addClassActive(index) {
    nav[index].classList.add('active');
}

function removeClassActive() {
    nav.forEach((n) => {
        n.classList.remove('active');
    });
}

removeClassActive();

if (path === '/diabetes') {
    addClassActive(1);
} else if (path === '/bmi') {
    addClassActive(2);
} else {
    addClassActive(0);
}

/* Footer */
const footerYear = document.getElementById('footerYear');
const date = new Date();

if (date.getFullYear() === 2021) {
    footerYear.innerHTML = date.getFullYear();
} else {
    footerYear.innerHTML = `2021 - ${date.getFullYear()}`;
}
