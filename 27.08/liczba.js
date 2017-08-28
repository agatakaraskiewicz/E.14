var int = prompt ('Podaj liczbę całkowitą:');

if (int >= 0 && int != 0) {
    document.write('Liczba ' + int + ' jest dodatnia.');
}
else if (int <= 0 && int != 0) {
    document.write('Liczba ' + int + ' jest ujemna.');
}
else {
    document.write('Ta liczba to 0.');
}
