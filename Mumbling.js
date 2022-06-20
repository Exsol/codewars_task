// This time no story, no theory. The examples below show you how to write function accum:
function accum(s) {
    let arr = s.split("")
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].toUpperCase()+arr[i].repeat(i).toLowerCase())
    }
    return result.join("-");
}