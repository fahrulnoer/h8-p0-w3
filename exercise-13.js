// Nama : Fahrul Muhammad Neor
// exercise 13 week 3 phase 0

function targetTerdekat(arr) {
    // you can only write your code here!
    var target1 = []
    var target2 = []
    for (var i = 0 ; i < arr.length ; i++){
        if (arr[i] == 'o'){
        target1.push(i)
    }
        else {
            if (arr[i] == 'x'){
                target2.push(i)
            }
        }
    }

    if (target2.length == 0){
    return 0
    }

    var jarak = []
    for (var j = 0; j < target2.length; j++){      
        jarak[j] = Math.abs(target2[j]-target1)
    }

    var hasil = jarak.sort(function(a,b){return a-b})
    return hasil[0]
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2