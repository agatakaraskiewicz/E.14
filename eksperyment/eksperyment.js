window.onload = function() {
    document.getElementById('liczba').onclick = function() {
        var licz = prompt ('Podaj liczbę całkowitą:');

        if (licz >= 0 && licz != 0) {
            var wynik = document.write('Liczba ' + licz + ' jest dodatnia.');
            document.getElementById('podstrony').innerText;
        }
        else if (int <= 0 && int != 0) {
            var wynik = document.write('Liczba ' + licz + ' jest ujemna.');
            
        }
        else {
            var wynik = document.write('Ta liczba to 0.');
        }
        
        document.getElementById('podstrony').innerText = wynik;
        
    }
    document.getElementById('zakres').onclick = function() {
        var poczatkowa = parseInt(prompt ('Podaj liczbę początkową:'));
        var koncowa = parseInt(prompt ('Podaj liczbę końcową:'));

        if (poczatkowa < koncowa) {
            for (i = poczatkowa; i <= koncowa; i++)
                var wynik2 = document.write(i + ' ');
        }
        else if (koncowa < poczatkowa) {
            for (e = poczatkowa; e >= koncowa; e--)
               var wynik2 = document.write(e + ' ');
        }
        else {
           var wynik2 = document.write('Te liczby są rowne.');
        }
        
        document.getElementById('podstrony').innerText = wynik2;
    }
}