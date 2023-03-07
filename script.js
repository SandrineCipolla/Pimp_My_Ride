//etape1: Parsing  : créer une fonction qui prend une ligne string, la décompose en mots (séparés par un espace) et les range dans une structure de donnée
function parseTrip(trip) {
  let elements = trip.split(" ");

  let tripData = {
    client: elements[0],
    start: elements[1],
    duration: elements[2],
    price: elements[3],
  };
  return tripData;
}
let step1 = parseTrip("Perdita 8 10 8");
document.getElementById("Etape1").innerText += "\n" + JSON.stringify(step1);
console.log(step1);

//etape2: Loop Parsing :utiliser la fonction précédente dans une nouvelle fonction prenant en entrée une journée complète de voyages (plusieurs lignes) et retournant une liste de structures comme définies précédemment
function parseTrips(trips) {
  let result = [];
  for (const currentTrip of trips) {
    let currentTripData = parseTrip(currentTrip);
    result.push(currentTripData);
  }
  return result;
}
let step2 = parseTrips([
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
]);
document.getElementById("Etape2").innerText += "\n" + JSON.stringify(step2);
console.log(step2);

//etape 3 Prices: créer une fonction qui prend en argument une liste de voyage et retourne la somme des prix de cet ensemble

let tripListArray = [
  { client: "Roger", start: "0", duration: "5", price: "10" },
  { client: "Pongo", start: "3", duration: "7", price: "14" },
  { client: "Perdita", start: "8", duration: "10", price: "8" },
  { client: "Anita", start: "16", duration: "3", price: "7" },
];
function getTripsPrice(listOfTrip) {
  let totalPrice = 0;
  let addition = "";

  for (const trip of listOfTrip) {
    totalPrice = totalPrice + parseInt(trip.price); // ou totalPrice += parseInt(trip.price);
    if (addition == "") {
      addition = addition + trip.price;
    } else {
      addition += " + " + trip.price; // ou addition = addition + " + " + trip.price;
    }
  }
  addition = addition + " = " + totalPrice;
  console.log("Prix total de tous les voyages:" + addition);
  return addition;
}

let step3 = getTripsPrice(tripListArray);
document.getElementById("Etape3").innerText +=
  "\n" + "Prix total de tous les voyages:" + step3;
console.log(step3);
