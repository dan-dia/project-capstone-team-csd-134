# Model Algoritma Sistem Diagnosa Penyakit Diabetes pada Wanita

## Tema Proyek

Dalam proyek kali ini, kita memilih tema Kesehatan Diri dan Mental. Adapun latar belakang kenapa Kita memilih tema ini, antara lain :
- Bidang kesehatan sering dijumpai dalam kegiatan sehari-hari terutama dalam pelayanan kesehatan.
- Dalam pelayanan kesehatan juga sangat berkaitan dengan data-data pasien untuk mendiagnosis penyakit.
- Dari data-data pasien tersebut, kita dapat mengetahui bagaimana cara memastikan jenis penyakit diabetes dengan cepat dan tepat.

## Business Understanding

Diabetes adalah penyakit kronis yang terjadi baik ketika pankreas tidak menghasilkan cukup insulin atau ketika tubuh tidak dapat secara efektif menggunakan insulin atau hormon yang mengatur gula darah yang dihasilkannya. Berdasarkan data WHO pada tahun 2019, diabetes merupakan penyebab kematian kesembilan dengan perkiraan 1,5 juta kematian secara langsung disebabkan oleh diabetes. Melalui penelitian yang dilakukan oleh BMJ Diabetes Research & Care, wanita yang bekerja 45 jam atau lebih dalam seminggu dikaitkan dengan risiko diabetes.

Bayangkan jika Anda seorang petugas medis yang bertugas untuk mengecek data pasien di sebuah perusahaan yang bergerak di bidang jasa pelayanan kesehatan. Pekerjaan ini berhubungan dengan banyak data-data pasien, sehingga memerlukan waktu untuk memastikan pasien benar-benar terjangkit penyakit diabetes. Untuk efisiensi, kami ingin menerapkan automasi pada sistem dalam memprediksi penyakit diabetes dengan teknik predictive modelling.

### Problem Statement

- Teknik predictive apakah yang tepat untuk menentukan penyakit diabetes?
- Apakah dengan dibuatkan sistem diagnosa penyakit diabetes ini hasil akhirnya akan akurat untuk mendiagnosis penyakit ?

### Goals

- Membuat model machine learning yang dapat memprediksi penyakit diabetes dengan tepat.
- Mengetahui bagaimana hasil akhir sistem diagnosa penyakit diabetes.

### Solution Statements

- **Boosting Algorithm**, Metode ini bekerja dengan membangun model dari data latih. Kemudian ia membuat model kedua yang bertugas memperbaiki kesalahan dari model pertama. Model ditambahkan sampai data latih terprediksi dengan baik atau telah mencapai jumlah maksimum model untuk ditambahkan.

- **Decision Tree**, adalah salah satu algoritma supervised learning yang dapat dipakai untuk masalah klasifikasi dan regresi. Decision tree merupakan algoritma yang powerful alias mampu dipakai dalam masalah yang kompleks.

- **K-Nearest Neighbor**, adalah algoritma yang relatif sederhana dibandingkan dengan algoritma lain. Algoritma KNN menggunakan ‘kesamaan fitur’ untuk memprediksi nilai dari setiap data yang baru. Dengan kata lain, setiap data baru diberi nilai berdasarkan seberapa mirip titik tersebut dalam set pelatihan.

- **Random Forest**, salah satu algoritma supervised learning. Ia dapat digunakan untuk menyelesaikan masalah klasifikasi dan regresi. Random forest juga merupakan algoritma yang sering digunakan karena cukup sederhana tetapi memiliki stabilitas yang mumpuni.

- **Support Vector Machines (SVM)**, adalah model ML multifungsi yang dapat digunakan untuk menyelesaikan permasalahan klasifikasi, regresi, dan pendeteksian outlier. Termasuk ke dalam kategori supervised learning, SVM adalah salah satu metode yang paling populer dalam machine learning.

## Data Understanding

Data yang saya gunakan dalam proyek kali ini adalah Diabetes Dataset yang dapat di unduh melalui [Kaggle](https://www.kaggle.com/mathchi/diabetes-data-set), Dan dalam tahap latihan ini saya menggunakan dataset diabetes.csv dan dataset ini cukup bersih.

Dataset ini memiliki 768 data dengan beberapa karakteristik penyebab diabetes. Karakteristik yang dimaksud di sini adalah kondisi numerik seperti Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction dan Age. Kedelapan karakteristik ini yang akan digunakan dalam menemukan pola pada data, sedangkan Outcome merupakan fitur target.

Variabel-variabel pada Diabetes Dataset adalah sebagai berikut:
- Pregnancies: Jumlah kelahiran pada seseorang
- Glucose: Konsentrasi glukosa plasma pada 2 jam dalam tes toleransi glukosa oral
- BloodPressure: Tekanan darah diastolik (mm/Hg)
- SkinThickness: Ketebalan lipatan kulit trisep (mm)
- Insulin: Tingkat insulin 2 jam insulin serum
- BMI: Indeks Massa Tubuh (berat dalam kg / (tinggi dalam meter kuadrat)
- DiabetesPedigreeFunction: Indikator riwayat diabetes dalam keluarga
- Age: Umur seseorang

```
# Mengecek informasi dataset dengan fungsi info()
diabetes.info()
```

## Data Preparation

```
X = diabetes.drop(['Outcome'], axis=1)
y = diabetes['Outcome']
```

```
# Membagi dataset menjadi data latih (train) dan data uji (test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42, shuffle=False)
```

## Modeling

```
# membuat model Random Forest Classification
rfc = RandomForestClassifier()
# melakukan pelatihan model terhadap data
rfc.fit(X_train, y_train)
y_pred_rfc = rfc.predict(X_train)
```

## Evaluation

```
mse = pd.DataFrame(columns=['train', 'test'], index=['DecisionTree', 'SVM', 'RandomForestClassification', 'KNeighborsClassification', 'AdaBoostClassifier'])
model_dict = {'DecisionTree': decisiontree, 'SVM': svm, 'RandomForestClassification': rfc, 'KNeighborsClassification': knnc, 'AdaBoostClassifier':adaboost}
for name, model in model_dict.items():
    mse.loc[name, 'train'] = mean_squared_error(y_true=y_train, y_pred=model.predict(X_train))/1e3 
    mse.loc[name, 'test'] = mean_squared_error(y_true=y_test, y_pred=model.predict(X_test))/1e3
 
mse
```

```
fig, ax = plt.subplots()
mse.sort_values(by='test', ascending=False).plot(kind='barh', ax=ax, zorder=3)
ax.grid(zorder=0)
```
