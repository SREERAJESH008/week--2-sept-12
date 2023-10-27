// 1. Implement a function to find the first non-repeating character in a string.

// function firstNonRepeatingCharacter(str) {
//   // Implementation here
// }
// // Test cases
// console.log(firstNonRepeatingCharacter("programming")); // "r"
// console.log(firstNonRepeatingCharacter("aabbcc")); // null
// console.log(firstNonRepeatingCharacter("abcdef")); // "a"

// function firstNonRepeatingCharacter(str) {
//   const charCount = {};

//   for (const char of str) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }
//   return null;
// }

// Test cases
// console.log(firstNonRepeatingCharacter("programming"));
// console.log(firstNonRepeatingCharacter("aabbcc"));
// console.log(firstNonRepeatingCharacter("abcdef")); 

// 2. Write a function that flattens a nested object, preserving the keys.
// function flattenObject(obj) {
//   // Implementation here
// }
// // Test case
// const nestedObject = {
//   a: 1,
//   b: { c: 2, d: { e: 3, f: 4 } },
//   g: 5,
// };
// console.log(flattenObject(nestedObject));
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f': 4, 'g': 5 }

// function flattenObject(obj, parentKey = "") {
//   const result = {};

//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         Object.assign(result, flattenObject(obj[key], newKey));
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }

//   return result;
// }

// const nestedObject = {
//   a: 1,
//   b: { c: 2, d: { e: 3, f: 4 } },
//   g: 5,
// };

// console.log(flattenObject(nestedObject));

// 3.Create a function to find the median of two sorted arrays.
// function findMedianSortedArrays(nums1, nums2) {
//   // Implementation here
// }
// // Test cases
// console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// function findMedianSortedArrays(nums1, nums2) {
//   const mergedArray = mergeSortedArrays(nums1, nums2);

//   const totalLength = mergedArray.length;
//   if (totalLength % 2 === 0) {
//     // If the total length is even, return the average of the two middle elements
//     const mid = totalLength / 2;
//     return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
//   } else {
//     // If the total length is odd, return the middle element
//     const mid = Math.floor(totalLength / 2);
//     return mergedArray[mid];
//   }
// }

// function mergeSortedArrays(arr1, arr2) {
//   const merged = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     merged.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     merged.push(arr2[j]);
//     j++;
//   }

//   return merged;
// }
// console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

//  4.Implement a function to reverse words in a sentence without reversing the characters within each word.
// function reverseWords(sentence) {
//   // Implementation here
// }
// // Test cases
// console.log(reverseWords("Hello World")); // "World Hello"
// console.log(reverseWords("The quick brown fox")); // "fox brown quick The"

// function reverseWords(sentence) {
//   const words = sentence.split(' ');

//   // Reverse the order of the words
//   const reversedWords = words.reverse();

//   // Join the reversed words into a new sentence
//   const reversedSentence = reversedWords.join(' ');

//   return reversedSentence;
// }

// // Test cases
// console.log(reverseWords("Hello World")); // "World Hello"
// console.log(reverseWords("The quick brown fox")); // "fox brown quick The"

// 5.Write a function to calculate the sum of all multiples of 3 or 5 below a given number.
// function sumMultiplesOf3And5(limit) {
//   // Implementation here
// }
// // Test cases
// console.log(sumMultiplesOf3And5(10)); // 23 (3 + 5 + 6 + 9)
// console.log(sumMultiplesOf3And5(20)); // 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)


// function sumMultiplesOf3And5(limit) {
//   let sum = 0;

//   for (let i = 1; i < limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// // Test cases
// console.log(sumMultiplesOf3And5(10)); // 23 (3 + 5 + 6 + 9)
// // console.log(sumMultiplesOf3And5(20)); // 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)

// 6.Create a function to find the intersection of two sorted arrays, allowing for duplicate elements.
// function intersectWithDuplicates(arr1, arr2) {
//   // Implementation here
// }
// // Test cases
// console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 2, 3]
// console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2])); // [3, 2, 1]

// function intersectWithDuplicates(arr1, arr2) {
//   const result = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] === arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//       j++;
//     } else if (arr1[i] < arr2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return result;
// }

// // Test cases
// console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 2, 3]
// console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2])); // [3, 2, 1]







