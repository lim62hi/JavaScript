var text = prompt('alert, confirm or prompt?');

function okna (message) {
    if (message == 'alert') {
        alert('При нажатии на кпопку, вы должны заплатить 100 рублей!');
    }
    else if (message == 'confirm') {
        var znach = confirm('Вы согласны?');
        if (znach) {
            console.log('Пользователь согласен заплатить 100 рублей!');
        }
        else {
            console.log('Пользователь не будет платить 100 рублей!');
        }
    }
    else if (message == 'prompt') {
        var znach = prompt('При нажатии на кнопку, вы заплатите 100 рублей?');
        if (znach == 'да') {
            console.log('Пользователь согласен заплатить 100 рублей!');
        }
        else if (znach == 'нет') {
            console.log('Пользователь не будет платить 100 рублей!');
        }
        else {
            alert('Вы адекватный? Напишите что-то нормальное!');
            while (true) {
                var znach = prompt('При нажатии на кнопку, вы заплатите 100 рублей?');
                if (znach == 'да') {
                    console.log('Пользователь согласен заплатить 100 рублей!');
                    break;
                }
                else if (znach == 'нет') {
                    console.log('Пользователь не будет платить 100 рублей!');
                    break;
                }
                else {
                    alert('Да или нет?');
                }
            }
        }
    }
}

okna(text);