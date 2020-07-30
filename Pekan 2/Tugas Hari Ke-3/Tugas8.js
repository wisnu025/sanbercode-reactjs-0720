//soal no 1
let phi='3.14'

const luaslingkaran = (jari)=> Math.round(phi*jari*jari)
const kelilinglingkaran = (jari)=> Math.round(2*phi*jari)

console.log("Luas Lingkaran adalah = "+luaslingkaran(10))
console.log("keliling Lingkaran adalah = " +kelilinglingkaran(10))

// //soal no 2
let kalimat=""

var kalimatgabung =(kata1,kata2,kata3,kata4,kata5)=> kalimat=`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`

console.log(kalimatgabung("saya","adalah","seorang","frontend","develover"));



//soal no 3

let buku = [
  { nama: "angular", totalPage: 55, price: 35000 },
  { nama: "vue", totalPage: 67, price: 25000 },
  { nama: "react", totalPage: 10, price: 3500 }
]

class books {
  constructor(name, totalPage, price) {
    this.name = []
    this.totalPage = []
    this.price = []

    buku.forEach(item => {
      this.name.push(item.nama)
      this.totalPage.push(item.totalPage)
      this.price.push(item.price)
    })
  }
}

class komik extends books {
    constructor(name, totalPage, price, isColorful) {
      super(name, totalPage, price)
      this.isColorful = []
    }
    hasil() {
      let listBook = []
      this.price.forEach(item => {
        if (item >= 30000) {
          return this.isColorful.push(true)
        } else {
          return this.isColorful.push(false)
        }
       })

      for (let i = 0; this.name.length > i; i++) {
        listBook.push({'name' :this.name[i], 'totalPage' :this.totalPage[i], 'price' :this.price[i], 'isColorful' :this.isColorful[i] })
      }

      console.log('daftar buku :' , listBook)
  }
}
    
let bukuGw = new komik()
return bukuGw.hasil()
