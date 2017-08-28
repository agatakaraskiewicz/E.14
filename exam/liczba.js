var liczba = parseInt(prompt ('Podaj liczbę całkowitą:'));

if (liczba > 0) {
    document.write('Liczba ' + liczba + ' jest dodatnia.');
}
else if (liczba < 0) {
    document.write('Liczba ' + liczba + ' jest ujemna.');
}
else {
    document.write('Ta liczba to 0.');
}
