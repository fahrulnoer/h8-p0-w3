// Nama : Fahrul Muhammad Neor
// exercise 8 week 3 phase 0

function pasanganTerbesar(num) {
    // you can only write your code here!
    var numstring = String(num);
    var numstring2 = "";
    var numarray = [];
    var numarray2 = 0;

    for (i = 0; i < numstring.length - 1; i++) {
      numstring2 = numstring[i] + numstring[i + 1];
      numarray.push(Number(numstring2));
    }
    
    for (i = 0; i < numarray.length; i++) {
      if (numarray[i] > numarray2) {
        numarray2 = numarray[i];
      }
    }
    return numarray2
  }

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99