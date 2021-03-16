//Min Inclusive, Max Exclusive
function RandBetween(min, max, isRounded = false) {
    if (isRounded) {
        min = Math.ceil(min); //Rounds min up
        max = Math.floor(max); //Rounds max Down
    }
    return Math.floor(Math.random() * (max - min) + min);
}

//Min Inclusive, Max Inclusive
function RandInclude(min, max, isRounded = false) {
    if (isRounded) {
        min = Math.ceil(min); //Rounds min up
        max = Math.floor(max); //Rounds max Down
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Returns a single random element from an array
function RandArr(arr) {
    var max = arr.length;
    var out = RandBetween(0, max);
    return arr[out];
}
