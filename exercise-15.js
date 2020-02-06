// Nama : Fahrul Muhammad Neor
// exercise 15 week 3 phase 0

function groupAnimals(animals) {
    // you can only write your code here!
    var group = []
    for (var i = 0; i < animals.length ; i++){
        var group1 = []
        for (var j = 0; j < animals.length ;j++){
            if (animals[i][0] === animals[j][0]){
                group1.push(animals[j])
                if(i != j){
                    animals[j] = ''
                }
            }
        }
        animals[i] = ''
        if(group1[0] != ''){
            group.push(group1)
        }
    }
    return group.sort(function(a,b){return a > b})

}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]