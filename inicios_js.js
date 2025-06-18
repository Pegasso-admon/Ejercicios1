//1 - Declara variables que representen tu nombre, edad, estatura en metros, ciudad y si tienes mascota (sí/no).

/*
I can use different methods for this
Using: "var" "let" "const"

"var" -> it has a global scope
"let" -> it has a block scope
"const" -> it has a block scope
*/

let name = "Samuel";
let age = 21;
let height = 173;
let city = "Medellín";
let own_a_pet = true


console.log(name, age, height, city, own_a_pet)


//--------------------------------------------------------------------------------------------------------------------------------------------


//2 - Cambia los valores y explica qué tipo de dato representa cada uno (Muestra en consola el tipo de dato).

/*
From the past exercise I need to change the values and then I need to explain which type of data it
represents each one of it(Show in the console the type of data it is)
*/

name = "Raul";
age = 22;
height = 180;
city = "Santa Marta"
own_a_pet = false


console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof height); //number
console.log(typeof city); //string
console.log(typeof own_a_pet); //boolean


//--------------------------------------------------------------------------------------------------------------------------------------------


//3 - Declara dos variables que se sumen (por ejemplo, cantidad de amigos en dos redes sociales) y una que contenga el resultado de una concatenación.

/*
I need to declare two variables and then add them together
*/

let facebookFriends = 50;
let twitterFriends = 30;
let friendsTotal = facebookFriends + twitterFriends;
let message = "You have " + friendsTotal + " friends in total.";

console.log(message); // Output: You have 80 friends in total.


//--------------------------------------------------------------------------------------------------------------------------------------------


//4 - Una persona quiere entrar a una discoteca. Solo puede si tiene más de 18 años. Muestra un mensaje dependiendo si entra o no.

/*
Basically I will use booleans and conditionals to determine if the person may or may not go to the party
*/

let personAge = 17;

if (personAge > 18) {
  console.log("You are old enough you can go to the disco.")
}
else {
  console.log("You are too young go home kid.") //This will be the message that will be shown
}


//--------------------------------------------------------------------------------------------------------------------------------------------


//5 - Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa si aplica descuento.

/*
As I did in the last exercise I will use booleans
*/

let purchased_products = 4;

if (purchased_products > 3) {
  console.log("You apply for discount!") //This will be the message that will be shown
}
else {
  console.log("You don't apply for discount :(")
}


//--------------------------------------------------------------------------------------------------------------------------------------------


//6 - Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba, aprueba o tiene excelente desempeño.

/*

*/

let grade = 4.5;

if (grade < 3) {
  console.log("You did'nt approved, please study more.");
} else if (grade >= 3 && grade < 4.5) {
  console.log("You approved! Congratulations.");
} else {
  console.log("Exellent performance.");
}


//--------------------------------------------------------------------------------------------------------------------------------------------


//7 - Un semáforo tiene tres colores. Dependiendo del color, se debe mostrar una acción: avanzar, detenerse o esperar.

/* 

*/

let color = "yellow";

if (color === "green") {
  console.log("Proceed");
} else if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Wait");
} else {
  console.log("No valid color");
}


//--------------------------------------------------------------------------------------------------------------------------------------------


//8 - Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de Colombia. Evalúa si una persona puede participar.

/*

*/

let tournamentAge = 14
let isColombian = True

if (tournamentAge >= 15 && tournamentAge <= 35 && isColombian); {
  console.log("You can participate in the tournament!");
} else (tournamentAge < 15) {
  console.log("You can't participate in the tournament")
}

