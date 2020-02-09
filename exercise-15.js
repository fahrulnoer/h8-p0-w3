// Nama : Fahrul Muhammad Neor
// exercise 15 week 3 phase 0

function groupAnimals(animals) {
    // you can only write your code here!
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var result = []
    
    for(var i = 0; i < alphabet.length; i++){
      var group = []
      for(var j = 0; j < animals.length; j++){
        if(animals[j][0] === alphabet[i]){
          group.push(animals[j])
        }
      }
      if(group.length > 0){
        result.push(group)
      }
    }
    return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]