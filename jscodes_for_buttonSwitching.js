let fromCityDisplay = document.getElementById("fromCity");
let toCityDisplay = document.getElementById("toCity");
let returnCityDisplay = document.getElementById("returnCity");
let departDateDisplay = document.getElementById("departDate");
let returnDateDisplay = document.getElementById("returnDate");




let oneWayButton = document.querySelector('.triplinkOneWay');
let twoWayButton = document.querySelector('.triplinkTwoWay');

let returnDateBox = document.querySelector('#returnDateBox');

let returnCityText = document.querySelector('#returnCity');

let returnText = document.querySelector('#returnText')


function oneWayTravel() {
  returnDateBox.style.display = 'none';
  returnCityText.style.display = 'none'
  returnText.style.display = 'none'

  oneWayButton.style.backgroundColor = '#7C83FD';
  oneWayButton.style.color = 'white';

  twoWayButton.style.backgroundColor = 'white';
  twoWayButton.style.color = 'black';

}

function twoWayTravel() {
  returnDateBox.style.display = 'block';
  returnCityText.style.display = 'block'
  returnText.style.display = 'inline-block'
  twoWayButton.style.backgroundColor = '#7C83FD';
  twoWayButton.style.color = 'white';

  oneWayButton.style.backgroundColor = 'white'
  oneWayButton.style.color = 'black'
}

// vadlidation
function validatation(origin, destination, departure, passengers) {
    if(origin == "" || null || destination == "" || null ||
       departure == null || passengers == "Passengers" || passengers < 1) {
        return false;
    } else {
      return true
    }
  
  }

// after this i don,t have any idea how to implement this