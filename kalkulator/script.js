var numbers = [10, 2, 5];

function kalkul(massive) {
    var res = massive[0];
    var znach = prompt('+, -, *, /');
    if (znach == '+') {
        for (var i = 0; i < massive.length; i++) {
            res += massive[i];
        }
        return res;
    }
    else if (znach == '-') {
        for (var i = 1; i < massive.length; i++) {
            res -= massive[i];
        }
        return res;
    }
    else if (znach == '*') {
        for (var i = 1; i < massive.length; i++) {
            res *= massive[i];
        }
        return res;
    }
    else if (znach == '/') {
        for (var i = 1; i < massive.length; i++) {
            res /= massive[i];
        }
        return res;
    }
    else {
        res = 'пользователь ничего не хочет делать!';
        return res;
    }
}

var result = kalkul(numbers);
document.write('Результат: ' + result)