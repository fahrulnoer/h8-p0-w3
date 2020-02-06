// Nama : Fahrul Muhammad Neor
// exercise 9 week 3 phase 0

function cariMean(arr) {
    // you can only write your code here!

    var sum = 0;
    var count = arr.length;
    for (var i = 0; i < count; i++) {
      sum = sum + arr[i];
    }
    return Math.round(sum / count);
}  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7