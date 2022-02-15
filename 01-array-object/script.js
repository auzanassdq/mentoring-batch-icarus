let buah = ["jeruk", "pisang", "mangga", "rambutan"]

// cara manual
// console.log(buah[0])
// console.log(buah[1])
// console.log(buah[2])

console.log(buah.length)

// cara loop for biasa
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i])
}

// cara forEach
// utk mengulang data
buah.forEach((item) => {
  if (item == "jeruk") {
    console.log(item)
  }
})

// cara map
// utk mengulang data dan mengolahnya
// lalu di kembalikan
let newBuah = buah.map((item) => {
  return item + " manis"
})

console.log(newBuah)

// Reduce
// utk mengulang data dan menjumlahkannya
let angka = [10,20,30]

let hasil = angka.reduce((prevItem, currItem) => {
  return prevItem + currItem
}, 0)

console.log(hasil)



// Object
let kucing = {
  nama: "Tom",
  warna: "Biru",
  musuh: "Jerry",
  tidur: function () {
    return "Tom sedang tidur"
  }
}
console.log(kucing.nama)

// array of object
let film = [ 
  {nama: "Spiderman", tahun: 2021},
  {nama: "Multiverse of madnes", tahun: 2022},
]

let kelasSkilvul = [
  {nama: "HTML", harga: 200, poin: 810}, 
  {nama: "CSS", harga: 200, poin: 350}, 
  {nama: "JS", harga: 400, poin: 1130}
]

console.log(film[1].nama)


// array 2D
let matrix = [
  [1,2],
  [3,4],
  [5,6],
]

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j])
  }
}