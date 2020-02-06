// Nama : Fahrul Muhammad Neor
// exercise 7 week 3 phase 0

function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var jumlah = 0
    for (var i = 0; i < hitungJumlahKata.length; i++)
        if (kalimat[i] === " ") {
            jumlah = +1;
        }
    jumlah += 1;
    return kalimat.split(" ").length;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5