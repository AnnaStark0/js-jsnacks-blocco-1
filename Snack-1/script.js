//JSnack 1
/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while*/


//Ciclo FOR

/*let somma = 0;

for (let i = 0; i <5; i++) {
    let n = parseInt(prompt('Inserisci un numero'));

    somma += n;
}

console.log(somma);*/


//Ciclo WHILE

let i = 0;
let somma = 0;

while (i < 5)  {
    let n = parseInt(prompt('Inserisci un numero'));

    somma += n;

    i++;
}

console.log(somma);

