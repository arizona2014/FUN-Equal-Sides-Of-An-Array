function findEvenIndex(arr)
{
  sum = arr.reduce((pv, cv) => pv+cv, 0);
  sumBefore = arr[0];
  sum -= sumBefore;
  var searchedElement = -1;
  for(let i=1;i<arr.length;i++){
    sumAfter = sum - arr[i];
    if(sumBefore === sumAfter){
      searchedElement = i;
      break;
    } else {
      sum = sumAfter;
      sumBefore += arr[i];
    }
  }
  return searchedElement;
}

TESTS:

Test Results:
 FindEvenIndex
 Tests (4 of 4 Assertions)
Completed in 7ms
You have passed all of the tests! :)