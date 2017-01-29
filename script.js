// var myName = "Remy";
//
// function sayHello(myName){
//   alert("Hello " + myName)
// }
//
// sayHello(myName);



var animal = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById("best-animal")

function getBestAnimal(){
  // get the user's favorite animal
  // store the favorite animal as a variable
    var fave = prompt("What is your favorite animal?")
    console.log(fave)

    //if the value of fave is empty
    if (fave == ''){
      //do something
      
      bestAnimal.textContent = "Shiba Inu"
    //if user does not enter animal
  } else {
    // change the best-animal to match the user's input
    var bestAnimal = document.getElementById("best-animal")
    bestAnimal.textContent = fave;

  }





  }
}
getBestAnimal()
