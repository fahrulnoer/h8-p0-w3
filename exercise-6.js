// Nama : Fahrul Muhammad Neor
// exercise 6 week 3 phase 0

function angkaPalindrome(num) {
    // you can only write your code here!
  var kata = "";
  num++;
  while(true){
    var re = ""
    kata = String(num)
    for (i = kata.length - 1; i >= 0; i--){
      re = re + kata[i];
    }
    if (re === kata){
      return num;
    }
    else {
      num++;
    }
  }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001