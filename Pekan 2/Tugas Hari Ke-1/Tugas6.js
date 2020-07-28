//soal no 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var propetypeserta={
    nama :"Asep",
    jeniskelamin :"laki-laki",
    hobi : "baca buku",
    tahunlahir :1992
}
console.log("Nama = " + propetypeserta.nama)
console.log("Jenis kelamin = "+ propetypeserta.jeniskelamin)
console.log("Hobi = " + propetypeserta.hobi)
console.log("Tahun Lahir = " + propetypeserta.tahunlahir)


//soal no 2

var databuah= [
    {nama: "strawberry",warna: "merah",ada_bijinya: "tidak",harga: 9000},
    {nama: "jeruk",warna: "oranye",ada_bijinya: "ada",harga: 8000},
    { nama: "Semangka",warna: "Hijau & Merah",ada_bijinya: "ada",harga: 10000},
    {nama: "Pisang",warna: "Kuning",ada_bijinya: "tidak",harga: 5000}
  ]
  var buah = databuah.filter(function(item){
     return item.nama == "strawberry";
  })
  
  console.log(buah)

  //soal no 3  
function tambah(){
    var datafilm = []
    var flim=
    {
        nama :"Asep",
        durasi :"2 jam",
        genre    : "Komedi",
        tahun :1992
    }
 datafilm.push(flim)
 return datafilm
}
console.log(tambah())

//soal no 4 Release 0
class Animal {
    constructor(name) {
      this.nama = name;
      this.leg = 4;
      this.coldblooded = false;
    }
    get name()
    {
        return this.nama
    }
    get legs()
    {
        return this.leg
    }
    get cold_blooded()
    {
        return this.coldblooded
    }
}
  var sheep = new Animal("shaun");
  console.log(sheep.name)
  console.log(sheep.legs)
  console.log(sheep.cold_blooded)

  //soal no 4 Release 1

  class Ape extends Animal {
    constructor(name,namaape) {
      super(name)
      this.namahewan = namaape;  
    }
    yell() {
      return  this.namahewan="Auoo";
    }
}
  class Frog extends Animal {
    constructor(name,namaforg) {
    super(name)
      this.namahewan2 = namaforg;  
    }
    jump() {
      return  this.namahewan2="hop hop";
    }
}
var sungokong = new Ape("kera sakti")
console.log(sungokong.yell())
var kodok = new Frog("buduk")
console.log(kodok.jump())

//soal no 5
class Clock{
    constructor ({ template }) {
    var timer;
    function render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
}
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();    
