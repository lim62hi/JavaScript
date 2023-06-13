function kalkul(el) {
    var massive = [count1, count2]
    var res = massive[0];
    var znach = prompt('+, -, *, /');
    if (znach == '+') {
        for (var i = 1; i < massive.length; i++) {
            res += massive[i];
        }
        console.log('Результат: ' + res);
        el.innerHTML = res;
    }
    else if (znach == '-') {
        for (var i = 1; i < massive.length; i++) {
            res -= massive[i];
        }
        console.log('Результат: ' + res);
        el.innerHTML = res;
    }
    else if (znach == '*') {
        for (var i = 1; i < massive.length; i++) {
            res *= massive[i];
        }
        console.log('Результат: ' + res);
        el.innerHTML = res;
    }
    else if (znach == '/') {
        for (var i = 1; i < massive.length; i++) {
            res /= massive[i];
        }
        console.log('Результат: ' + res);
        el.innerHTML = res;
    }
    else {
        res = 'пользователь ничего не хочет делать!';
        console.warn('Результат вычисления: ' + res);
    }
}

var count1 = 0;
var count2 = 0;

function counter1(el) {
    count1++;
    el.innerHTML = count1;
}

function counter2(el) {
    count2++;
    el.innerHTML = count2;
}
