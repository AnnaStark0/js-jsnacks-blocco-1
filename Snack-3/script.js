//JSnack 3
/*Stampa le potenze di 2 fino a 1000.*/


//Mia soluzione sbagliata
/*let n = 2;
let power;

for (let n = 2; n < 10 ; n++) {
   power = Math.pow(2, 2);
}
console.log(power);*/

//--BOH--


//Correzione 1

/*let i = 1;

let risPotenza = 1;

while (risPotenza < 1000) {
   console.log(risPotenza);
   
   risPotenza = Math.pow (2 , i);
   i++;
   
}*/


//Correzione 2

let risPotenza = 1;
while (risPotenza < 1000) {
   console.log(risPotenza);
   risPotenza *= 2;
}