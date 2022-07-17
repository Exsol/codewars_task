//An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
    let arr = str.toLowerCase().split('');
    let arr2 = arr.filter((val, ind, arr) => arr.indexOf(val) === ind);
    return arr.length===arr2.length
}