//PART II
//etape1: Parsing  : Modifiez votre fonction parseTrip(trip) pour qu'elle retourne une structure de type Trip

  class Trip {
    constructor(name, start, duration, price) {
      this.name = name;
      this.start = parseInt(start);
      this.duration = duration;
      this.price = price;
      this.end = parseInt(start) + parseInt(duration);
    }

    isCompatible(trip) {
      if (this.end <= trip.start ) {
        return true
      } else {
        return false
      }
    }
  }

  function parseTrip(trip) {
    let elements = trip.split(" ");

    let tripData = new Trip(elements[0],elements[1],elements[2], elements[3]);
    return tripData;
  }

  let step1 = parseTrip("Perdita 8 10 8");
  console.log("step1",step1);

// //etape2: Loop Parsing :Votre fonction parseTrips(trips) ne devrait pas changer énormément, faites en sorte qu'elle retourne un tableau de [Trip]

function parseTrips(trips) {
  let result = [];
  for (const currentTrip of trips) {
    let elements = currentTrip.split(" ");
    let currentTripData = new Trip(elements[0], elements[1], elements[2], elements[3]);
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

console.log("step2",step2);

// //etape 3 End Trip: Calculez l'heure de fin de chaque voyage directement dans le constructeur de votre objet `Trip` .

//Par exemple, **Anita** aura une nouvelle propriété `end` qui aura pour valeur 19 car `16 + 3 = 19`.

function endTrip(tripData) {
  let elements = tripData.split(" ");

  let trip = new Trip(elements[0], elements[1], elements[2], elements[3],elements[4]);
  return trip.end
}
// let step3 =endTrip(["Anita",16,3,7]);

let step3 =endTrip("Perdita 8 10 8");
console.log("step3",step3)

// function endTrip(tripDataArray) {
//   let results = [];
  
//   for (let i = 0; i < tripDataArray.length; i++) {
//     let tripData = tripDataArray[i];
//     let trip = new Trip(tripData[0], tripData[1], tripData[2], tripData[3]);
//     results.push(trip.end);
//   }
  
//   return results;
// }

// let step3 = endTrip([
//   ["Roger", 0, 5, 10],
//   ["Pongo", 3, 7, 14],
//   ["Perdita", 8, 10, 8],
//   ["Anita", 16, 3, 7]
// ]);

// console.log("step3", step3);


// //etape 4: Compatibility : Créez une fonction isCompatible(trip) dans votre objet Trip qui comparent deux structures Trip et retourne un booléen déterminant si les structures sont compatibles ou non.

// let trip = new Trip("Roger 0 5 10");
// let anotherTrip = new Trip("Perdita 8 10 8");

let trip = new Trip("Roger", 0, 5, 10);
let anotherTrip = new Trip("Perdita", 8, 10, 8);

let step4 =trip.isCompatible(anotherTrip);
console.log("step4",step4);

// //etape 5: Possibilities Modifiez votre fonction findCompatibilities(trips) qui retourne les ensembles de voyages compatibles.

function findCompatibilities(trips) {
  let result = [];

  trips.forEach((tripA, indexA) => {
    for (let indexB = 0; indexB < trips.length; indexB++) {
      let tripB = trips[indexB];
      if (tripA.isCompatible(tripB)) {
        console.log(tripA.name, "est compatible avec", tripB.name);
        result.push([tripA, tripB]);
      } else if (indexA === indexB) {
        console.log(tripA.name, "est compatible avec lui-même");
        result.push([tripA]);
      }
    }
  });

  console.log(result);
  return result;
}

// Création d'instances de la classe Trip
let trip1 = new Trip("Roger", 0, 5, 10);
let trip2 = new Trip("Perdita", 8, 10, 8);
let trip3 = new Trip("Anita", 16, 3, 7);
let trip4 = new Trip("Pongo", 3, 7, 14);

// Création d'un tableau de voyages
let tripListArray = [trip1, trip2, trip3,trip4];

// Appel de la fonction findCompatibilities avec le tableau de voyages
let step5 = findCompatibilities(tripListArray);
console.log("step5",step5)


// //etape 6 : Final Choice : Développez une dernière fonction findBestPrice(trips), qui renverra le combo ou le voyage seul qui rapportera le plus à votre entreprise.
// //Avec l'exemple précédent, la meilleur combinaison est Pongo (3h -> 10h) et Anita (16h -> 19h) car 14 + 7 = 21.
// //==> dans le resulat de (findCompatibilities) quelle ligne rapporte le plus.

function findBestPrice(trips) {
  let bestCombo = findCompatibilities(trips);
  let bestPrice = 0;
  let bestTripCombo = "";

  for (let i = 0; i < bestCombo.length; i++) {
    let combo = bestCombo[i];
    let totalPrice = 0;
    let tripCombo = "";

    for (let j = 0; j < combo.length; j++) {
      let trip = combo[j];
      totalPrice += trip.price;
      tripCombo += trip.name + " ";
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

  return {
    combo: bestCombo,
    bestPrice: bestPrice,
    bestTripCombo: bestTripCombo,
  };
}

let step6 = findBestPrice(tripListArray);
console.log(
  "Meilleure combinaison de voyages: " +
    step6.bestTripCombo +
    " pour un gain total " +
    step6.bestPrice
);

