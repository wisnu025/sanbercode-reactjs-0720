//soal no 1
function Sanbers() {
  return "Haloo Sanbers!"
  }
console.log(Sanbers()); 

//soal no 2
var kali = function (angka1, angka2)
{
    return angka1 * angka2;
}
var num1 = 12
var num2 = 4
 
var hasilKali = kali(num1, num2)
console.log(hasilKali)

//soal no 3
function introduce(nama,umur,alamat,hobby)
{
    var nma= " Nama saya "
    var umr= " umur saya "
    var almt= " alamat saya "
    var hby= " dan saya punya hobby "
    var thn=" Tahun "
    var km =","
    var sr="!"
    return nma+nama+km+
      umr+umur+thn+km+
      almt+alamat+km+
      hby+hobby+sr
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan);




