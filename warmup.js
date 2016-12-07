'use strict';

// Warmup today will be to create a constructor for a cup that can be used as various types of cups (hot cups, cold cups, use your imagination). It should have properties and methods. You will be turning this in.

var Cup = function (name, coldTempRating, hotTempRating, liquidIntegrity) {
  this.name = name;
  this.coldTempRating = coldTempRating;
  this.hotTempRating = hotTempRating;
  this.liquidIntegrity = liquidIntegrity;
  this.fillCup = false;

//   return {
//     name: this.name,
//     coldTempRating: this.coldTempRating,
//     hotTempRating: this.hotTempRating,
//     fillCup: this.fillCup,
//     hotBeverageFill: function(temp) {
//       if (this.fillcup) {
//         console.log('YOUR CUP RUNNETH OVER!');
//       }
//       if (temp > this.hotTempRating) {
//         this.liquidIntegrity = false;
//       }
//       if (!this.liquidIntegrity) {
//         console.log('Beverage is too hot, your cup has melted.');
//       } else {
//         this.fillCup = true;
//         console.log('Enjoy your tasty, hot beverage.');
//       }
//     },
//
//     coldBeverageFill: function(temp) {
//       if (this.fillcup) {
//         console.log('YOUR CUP RUNNETH OVER!');
//       }
//       if (temp < this.coldTempRating) {
//         this.liquidIntegrity = false;
//       }
//       if (!this.liquidIntegrity) {
//         console.log('Beverage is too cold, your cup has shattered.');
//       } else {
//         this.fillCup = true;
//         console.log('Enjoy your cool beverage.');
//       }
//     },
//
//     drinkBeverage: function () {
//       if (this.fillCup) {
//         console.log('Mmmmm.... deslish.');
//         this.fillCup = false;
//       } else {
//         console.log('Sadly, your cup is empty.');
//       }
//     }
//
//   };
// };

Cup.prototype.hotBeverageFill = function (temp) {
  if (this.fillcup) {
      console.log('YOUR CUP RUNNETH OVER!');
    }
    if (temp > this.hotTempRating) {
      this.liquidIntegrity = false;
    }
    if (!this.liquidIntegrity) {
      console.log('Beverage is too hot, your cup has melted.');
    } else {
      this.fillCup = true;
      console.log('Enjoy your tasty, hot beverage.');
    }
};

Cup.prototype.coldBeverageFill = function (temp) {
  if (this.fillcup) {
     console.log('YOUR CUP RUNNETH OVER!');
    }
    if (temp < this.coldTempRating) {
      this.liquidIntegrity = false;
    }
    if (!this.liquidIntegrity) {
      console.log('Beverage is too cold, your cup has shattered.');
    } else {
      this.fillCup = true;
      console.log('Enjoy your cool beverage.');
   }
};

Cup.prototype.drinkBeverage = function (){
  if (this.fillCup) {
    console.log('Mmmmm.... deslish.');
    this.fillCup = false;
  } else {
    console.log('Sadly, your cup is empty.');
  }

};

var cupA = new Cup ("Cuppa Cuppa", -26, 184, true);
var cupB = new Cup ("World's Greatest Dad", -10, 100, true);
var cupC = new Cup ("Snarky Coffee Meme Cup", 0, 99, true);
var cupD = new Cup ("Winnie The Pooh Cup", -55, 250, true);

cupA.drinkBeverage();
cupD.hotBeverageFill(130);
cupB.coldBeverageFill(40);
cupD.drinkBeverage();

console.log(cupA);
console.log(cupB);
console.log(cupC);
console.log(cupD);
