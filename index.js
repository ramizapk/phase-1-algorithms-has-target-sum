function hasTargetSum(array, target) {
  let numObj = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (numObj[complement] !== undefined) {
      return true;
    }
    numObj[array[i]] = i;
  }

  return false;
}

//another way
// function hasTargetSum(array, target) {

//   for (let i = 0; i < array.length; i++) {

//     for (let j = i + 1; j <= array.length; j++) {

//       if ((array[i] + array[j]) == target) {
//         return true;
//       }

//     }
//   }
//   return false
// }


/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the input array.

*/

/* 
  Add your pseudocode here
  1- Initialize an empty object called numObj.

  2- FOR through the input array:
    a. Calculate the complement of the current element with respect to the target value.
    b. Check if the complement already exists in the numObj.
      c. IF it exists, return true.
      d. ELSE, add the current element and its index to the numObj.

  3- RETURN false , If the loop completes without finding a complement.

*/

/*
  Add written explanation of your solution here
  The function takes an array and a target value as input and checks if there exist two numbers in the array that add up to the target value.
   It uses a hash table (an object in JavaScript) to store the elements of the array as keys and their indices as values.
    The loop iterates through the array and for each element, calculates its complement with respect to the target value. 
    If the complement already exists in the hash table, it means that there is a pair of elements that add up to the target value,
     so the function returns true. Otherwise, the function adds the current element and its index to the hash table and continues the loop. 
     If the loop completes without finding a complement, 
     the function returns false, indicating that no such pair of elements exists in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 7, 11, 15], 9));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 7, 9, 15], 13));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 9, 15], 13));
}

module.exports = hasTargetSum;
