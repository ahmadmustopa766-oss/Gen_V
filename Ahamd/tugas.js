
function hitungLuasSegitiga(alas, tinggi) {
    let luas = 0.5 * alas * tinggi;
    return luas;
}


let nilaiAlas = 10;
let nilaiTinggi = 5;
let hasilLuas = hitungLuasSegitiga(nilaiAlas, nilaiTinggi);

console.log("Luas segitiga adalah: " + hasilLuas); 







function cekAngka(angka) {
    if (angka > 0) {
        return "Angka Positif";
    } else if (angka < 0) {
        return "Angka Negatif";
    } else {
        return "Angka 0 (Nol)";
    }
}


console.log(cekAngka(15));  // Hasil: Angka Positif
console.log(cekAngka(-7));  // Hasil: Angka Negatif
console.log(cekAngka(0));   // Hasil: Angka 0 (Nol)
