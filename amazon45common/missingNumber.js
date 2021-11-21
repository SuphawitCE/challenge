/*
You are given an array of positive numbers from 1 to n, 
such that all numbers from 1 to n are present except one number x. 
You have to find x. The input array is not sorted. 
Look at the below array and give it a try before checking the solution.
*/

const missingNumber = (arr) => {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  const answer = (max * (max + 1)) / 2 - sum;
  return answer === 0 ? -1 : answer;
};

module.exports = { missingNumber };
