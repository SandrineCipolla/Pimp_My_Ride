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
// document.getElementById("Etape1").innerText += "\n" + JSON.stringify(step1);
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
// document.getElementById("Etape2").innerText += "\n" + JSON.stringify(step2);
console.log(step2);

//etape 3 Prices: créer une fonction qui prend en argument une liste de voyage et retourne la somme des prix de cet ensemble

let tripListArray = [
  { client: "Roger", start: "0", duration: "5", price: "10" },
  { client: "Pongo", start: "3", duration: "7", price: "14" },
  { client: "Perdita", start: "8", duration: "10", price: "8" },
  { client: "Anita", start: "16", duration: "3", price: "7" },
  { client: "Roger", start: "0", duration: "5", price: "10" },
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
// document.getElementById("Etape3").innerText +=
//   "\n" + "Prix total de tous les voyages:" + step3;
console.log(step3);

//etape 4: Compatibility : Créez une fonction `checkCompatibility(tripA, tripB)` qui comparent deux structures `voyages` et retourne un booléen déterminant si les structures sont compatibles ou non.
//Il s'agit de déterminer si un vol (représenté par une structure `trips`) n'empiète pas sur les horaires d'un autre.

let tripA = { client: "Roger", start: 0, duration: 5, price: 10 };
let tripB = { client: "Pongo", start: 3, duration: 7, price: 14 };
let tripC = { client: "Perdita", start: 8, duration: 10, price: 8 };
let tripD = { client: "Anita", start: 16, duration: 3, price: 7 };

function checkCompatibility(tripA, tripB) {
  let startA = parseInt(tripA.start);
  let durationA = parseInt(tripA.duration);
  let startB = parseInt(tripB.start);

  if (startA + durationA > startB) {
    return false;
  }
  return true;
}
console.log(checkCompatibility(tripA, tripB));
let step4 = checkCompatibility(tripA, tripB);
// document.getElementById("Etape4").innerText += "\n" + step4;

//etape 5: Possibilities Développez une fonction findCompatibilities(trips) qui retourne,
// à partir d'une liste de voyages, tous les ensembles de voyages compatibles les uns avec les autres.
// function findCompatibilities(trips)

function findCompatibilities(trips) {
  let result = [];

  trips.forEach((tripA, indexA) => {
    for (let indexB = 0; indexB < trips.length; indexB++) {
      let tripB = trips[indexB];
      if (checkCompatibility(tripA, tripB)) {
        console.log(tripA.client, "est comptabile avec ", tripB.client);
        result.push([tripA, tripB]);
      } else if (indexA === indexB) {
        console.log(tripA.client, "est comptabile avec ", tripB.client);
        result.push([tripA]);
      }
    }
  });
  console.log("etape 5",result);
  return result;
}

let step5 = findCompatibilities(tripListArray);
// document.getElementById("Etape5").innerText += "\n " + JSON.stringify(step5);

//etape 6 : Final Choice : Développez une dernière fonction findBestPrice(trips), qui renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise.
//Avec l'exemple précédent, la meilleur combinaison est Pongo (3h -> 10h) et Anita (16h -> 19h) car 14 + 7 = 21.
//==> dans le resulat de (findCompatibilities) quelle ligne rapporte le plus.

function findBestPrice(trips) {
  // pour chaque ligne du résulat de findCompatibilities(tripListArray)
  //comparer les prix et retenir le plus grand
  let bestCombo = findCompatibilities(trips);
  let bestPrice = 0;
  let bestTripCombo = "";

  for (let i = 0; i < bestCombo.length; i++) {
    let combo = bestCombo[i];
    let totalPrice = 0;
    let tripCombo = "";

    for (let j = 0; j < combo.length; j++) {
      let trip = combo[j];
      totalPrice += parseInt(trip.price);
      tripCombo += trip.client + " ";
    }
    if (totalPrice > bestPrice) {
      bestPrice = totalPrice;
      bestTripCombo = tripCombo;
    }
  }
  console.log(
    "Meilleure combinaison de voyages: " +
      bestTripCombo +
      " pour un gain total " +
      bestPrice
  );
  console.log(bestCombo);
  return bestCombo;
}
findBestPrice(tripListArray);

let step6 =
  "Meilleure combinaison de voyages: " +
  bestTripCombo +
  " pour un gain total " +
  bestPrice;
// document.getElementById("Etape6").innerText += "\n " + step6;
