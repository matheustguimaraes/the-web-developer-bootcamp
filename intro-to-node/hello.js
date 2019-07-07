var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);

function average(numbers) {
    temp = 0;
    for (var i = 0, len = numbers.length; i < len; i++) {
        temp += numbers[i];
    }
    console.log(parseInt(temp / numbers.length));
}

