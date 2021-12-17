# Sistem Diagnosa Penyakit Diabetes pada Wanita
Project Capstone Team CSD-134

![Kaggle](https://img.shields.io/badge/Dataset-Kaggle-blue.svg) ![Flask](https://img.shields.io/badge/Python-Flask-red) ![scikit-learnn](https://img.shields.io/badge/Library-Scikit_Learn-orange.svg) ![Numpy](https://img.shields.io/badge/Library-Numpy-brightgreen) ![pandas](https://img.shields.io/badge/Library-pandas-yellow)

## Project Installation

Masuk kefolder project lalu buka cmd dan ketikan perintah dibawah ini, untuk membuat folder virtual environtment:

`py -3 -m venv venv` atau `virtualenv venv`

Setelah inisialisasi venv, aktifkan venv dengan perintah:

`venv\Scripts\activate.bat`

Lalu install package yang dibutuhkan:

- `pip install Flask`
- `pip install pandas`
- `pip install numpy`
- `pip install -U scikit-learn`

Jika ingin dijalankan dalam mode development atau pengembangan maka ketikkan peritah dibawah ini: (opsional, secara default menggunakan mode production)

`set FLASK_ENV=development`

Jalankan project dengan perintah :

`flask run`

Untuk menghentikan project menggunakan `CTRL + C`.

Jika ingin keluar dari venv : `venv\Scripts\deactivate.bat`
