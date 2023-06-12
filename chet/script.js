var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'кот'];

function chet (massive) {
    for (num = 0; num < massive.length; num++) {
        if (massive[num] % 2 == 0) {
            document.write('Число ' + massive[num] + ' четное ');
        }
        else if (massive[num] % 2 == 1) {
            document.write('Число ' + massive[num] + ' нечетное ');
        }
        else {
            console.warn(massive[num] + ' - не число');
        }
    }
}

chet(numbers);