// soal no 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var hurufbesar = kataKeempat.toUpperCase();
var hurufBesarawal = kataKedua.charAt(0).toUpperCase()+ kataKedua.slice(1);
console.log(kataPertama+" "+hurufBesarawal+" "+kataKetiga+" "+hurufbesar);

// soal no 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
hasil= parseInt(kataPertama)+ parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat);
console.log("jumlah = "+hasil);

//soal no 3

var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga= kalimat.substring(15, 18); 
var kataKeempat= kalimat.substring(19, 24); 
var kataKelima= kalimat.substring(25, 31); 
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal no 4
var nilai=60
if(nilai>80){
    console.log("indeksnya A");
}
else if(nilai<80 && nilai >=70){
    console.log("indeksnya B");
}
else if(nilai<70 && nilai >= 60){
    console.log("indeksnya C");
}
else if(nilai<60 && nilai>=50){
    console.log("indeksnya D");
}
else{
    console.log("E");
}

//soal no 5
var tanggal = 25;
var bulan = 9;
var tahun = 1994;
var namabulan="";
if (bulan <=12){
switch(bulan){
    case 1: namabulan = "januari";
        break;
    case 2: namabulan = "februari";
        break;
    case 3: namabulan = "maret";
        break;
    case 4: namabulan = "april";
        break;
    case 5: namabulan = "mei";
        break;
    case 6: namabulan = "juni"; 
        break;
    case 7: namabulan = "juli";
        break;
    case 8: namabulan = "agustus";
        break;
    case 9: namabulan = "September";
        break;
    case 10: namabulan = "October";
        break;
    case 11: namabulan = "November";
        break;
    case 12: namabulan = "Desember";
        break;
    }

console.log(tanggal+" "+namabulan+" "+tahun);
}
else {
    console.log("Invalid"+" "+"tidak ada bulan ke - "+ bulan);
}






