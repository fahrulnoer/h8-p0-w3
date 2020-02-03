// Nama : Fahrul Muhammad Neor
// exercise 2 week 3 phase 0

//input "hello world!"
//output
// "!dlrow olleh"

function balikString(word) {
    var reverse = ''
    for (var i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }
    return reverse
}

console.log(balikString('Hello world!'));