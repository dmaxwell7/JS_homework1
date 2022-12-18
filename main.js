//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let find = "";
    for (let i of dog_names) {
        if (dog_string.toLowerCase().includes(i.toLowerCase())){
          find += i;
            return `Matched dog_name: ${find}`
        } else {
            return 'No matches.'
        }
    } console.log(find)
}

console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            // splice
            arr.splice(i, 1, 'even index')
        } // ^replaces even words with 'even index'
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//code war

//1. subtract the sum
function SubtractSum(n){
    return "apple"
  }
console.log(SubtractSum())

//2. Duplicate encoder
function duplicateEncode(str){
    var word = str.toLowerCase();
    var unique = '';
      for (var i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
          unique += '(';
        } else
        unique += ')';
      }
      return unique;
    }
console.log(duplicateEncode('Desroy'))

//3. Find the next perfect square
// ternary operator
function findNextSquare(sq){
    return Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
}

//4.string ends with
function solution(str, ending){
    return str.endsWith(ending);
  }



