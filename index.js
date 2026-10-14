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

let hasil2 = "";
for(let i = 1; i <= 5; i++){
    for(let j = 0; j < i; j++){
        hasil2 += "*";
    }
    hasil2 += "\n";
}
console.log(hasil2);
