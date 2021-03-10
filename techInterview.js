const b = [[null, 0, 0, 1], [0, null, null, null], [0, null, null, null], [1, null, null, null]];

const print = function (array) {
  // loop each row
  for (let i = 0; i < array.length; i++) {
    // console.log(i)
    let l = "|"
    // loop each column
    for (let k = 0; k < array[i].length; k++) {
      // console.log(k)
      if (array[i][k] === 0) {
        l += "O";
      }
      else if (array[i][k] === 1) {
        l += "X";
      }
      else {
        l += " |";
      }
    }
    console.log(l)
  }
}

print(b);

// Sample output:
// | | O | O | X |
// | O | | | |
// | O | | | |
// | X | | | |

