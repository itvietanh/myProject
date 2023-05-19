let input = document.querySelector('.input');
let items = Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if ( input.innerHTML == '0')
        input.innerHTML = '';
        if ( btn.innerHTML == 'AC')
        input.innerHTML = '0';
        else if ( btn.innerHTML == 'DEL') {
            let arrNumber = Array.from(input.innerHTML);
            arrNumber.splice(arrNumber - 1,1);
            if ( arrNumber.length != 0 ) {
                input.innerHTML = arrNumber.join('');
            } else input.innerHTML = '0';
        }
        else if ( btn.innerHTML == '=' ) {
            input.innerHTML = eval(input.innerHTML);
        } else input.innerHTML += btn.innerHTML;
    })
})