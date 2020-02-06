// Nama : Fahrul Muhammad Neor
// exercise 5 week 3 phase 0

function palindrome(kata) {
    // you can only write your code here!
    var re = '';
    for (i = kata.length - 1; i >= 0; i--){
      re = re + kata[i];
    }
    if (re === kata) {
      return true
    } else {
      return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false