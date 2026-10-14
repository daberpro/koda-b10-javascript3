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
