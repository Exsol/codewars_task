// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    let amountOdd = 0;
    let amountEven = 0;
    let answer = 0;

    for ( let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0)
            amountEven++;
        if (integers[i] % 2 != 0)
            amountOdd++;

        if (amountEven > 2 || amountOdd > 2) break;
    }
    let even = amountEven < amountOdd ? true : false;
    if (even) {
        for ( let i = 0; i < integers.length; i++) {
            if ( integers[i] % 2 == 0)
                answer = integers[i];
        }
    } else {
        for ( let i = 0; i < integers.length; i++) {
            if ( integers[i] % 2 != 0)
                answer = integers[i];
        }
    }
    return answer;
}