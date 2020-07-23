// soal 1
console.log("LOOPING PERTAMA");
var angka =2;
while (angka<=20)
{
console.log(angka+ " - I love coding");
angka+=2
}

console.log("LOOPING KEDUA");
var angkakebalik =20;
while (angkakebalik>0)
{
console.log(angkakebalik+ " - I will become a frontend developer");
angkakebalik-=2
}

// soal no 2
for(var angkano2=1; angkano2<=20; angkano2++)
{
if(angkano2%3==0 && angkano2%2==1 )
{
    console.log(angkano2 + " - I Love Coding")
}
else if(angkano2%2==0)
{
    console.log(angkano2 + " - Berkualitas") 
}
else
{
    console.log(angkano2 + " - santai")
}
}

// soal no 3
for (var lop1 = 1; lop1 <= 7; lop1++) {
    var hasil = '';
      for (var lop2 = 1; lop2 <= lop1; lop2++) {
      hasil += "#";
      }
      console.log(hasil);
  }
  


//soal no 4
var kalimat="saya sangat senang belajar javascript"
var jadi = kalimat.split(" ")
console.log(jadi)  

//soal no 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
var lopparray ="";
var lopingbuah;
for (lopingbuah=0; lopingbuah<=4; lopingbuah++)
{
    lopparray= daftarBuah[lopingbuah]
    console.log(lopparray);
   
}


   	