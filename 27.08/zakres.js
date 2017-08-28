var poczatkowa = parseInt(prompt ('Podaj liczbę początkową:'));
var koncowa = parseInt(prompt ('Podaj liczbę końcową:'));

if (poczatkowa < koncowa) {
    for (i = poczatkowa; i <= koncowa; i++)
        document.write(i + ' ');
}
else if (koncowa < poczatkowa) {
    for (e = poczatkowa; e >= koncowa; e--)
        document.write(e + ' ');
}
else {
    document.write('Te liczby są rowne.');
}
