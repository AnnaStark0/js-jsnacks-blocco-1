//JSnack 2
/*Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.*/

parolaUno = prompt('Inserisci una parola');

parolaDue = prompt('Inserisci un altra parola');

if (parolaUno.length == parolaDue.length) {
    console.log(parolaUno + ' e ' + parolaDue);

} else if (parolaUno.length < parolaDue.length){
    console.log(parolaDue);

} else if (parolaUno.length > parolaDue.length){
    console.log(parolaUno);
}

