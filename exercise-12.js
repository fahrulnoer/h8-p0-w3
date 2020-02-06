// Nama : Fahrul Muhammad Neor
// exercise 12 week 3 phase 0

function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var difference= [];
    var correct= 0;
    if(arr[0] <  arr[1]){
        for(var a = 0; a < (arr.length - 1); a++){
            difference +=arr[a + 1]/arr[a];
            if(difference.length > 1 && difference[a] === difference[a - 1]){
                correct += 1;
            }
        }
    return correct === (difference.length - 1);
    }
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false