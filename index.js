let hasil = "";
for(let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str += "*";
    }
    str += "\n";
    hasil += str;
}
console.log(hasil);

hasil = "";
for(let i = 1; i <= 5; i++){
    for(let j = 0; j < i; j++){
        hasil += "*";
    }
    hasil += "\n";
}
console.log(hasil);

// PR
// Sgitiga Samakaki
hasil = ""
for(let i = 1; i <= 5; i++){

    let spasi = "";
    for(let j = 5 - i;j > 0;j--){
        spasi += " ";
    }

    let bintang = "";
    for(let k = 1; k <= i; k++){
        if(k % 2 == 0){
            bintang += " * ";
        }else{
            bintang += "*";
        }
    }

    hasil += spasi + bintang + "\n";

}
console.log(hasil);

// Luas Persegi
hasil = "";
for(let i = 0; i < 5; i++){
    hasil += "*";
    for(let j = 0; j < 5 - 2; j++){
        if(i == 0 || i == 4){
            hasil += "*";
        }else {
            hasil += " ";
        }
    }
    hasil += "*\n";
}
console.log(hasil);
