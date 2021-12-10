# Sistem Diagnosa Penyakit Diabetes pada Wanita
Project Capstone Team CSD-134

## Instalasi Project

Masuk kefolder project lalu buka cmd dan ketikan perintah dibawah ini, untuk membuat folder virtual environtment.

`py -3 -m venv venv`

Setelah inisialisasi venv, aktifkan venv dengan perintah:

`venv\Scripts\activate.bat`

Lalu install package yang dibutuhkan:

- pip install Flask
- pip install pandas
- pip install -U scikit-learn

Jika ingin dijalankan dalam mode development atau pengembangan maka ketikkan peritah dibawah ini: (opsional, secara default menggunakan mode production)

`set FLASK_APP=development`

Jalankan project dengan perintah :

`flask run`

Untuk menghentikan project menggunakan `CTRL + C`.

Jika ingin keluar dari venv : `venv\Scripts\deactivate.bat`
