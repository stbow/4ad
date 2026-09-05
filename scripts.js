// PAGE ELEMENTS ----------------------------------------
const countersContainer = document.getElementById("counters-container");
const minionsCountElem = document.getElementById("minions-count-text");
const bossCountElem = document.getElementById("boss-count-text");
const charactersContainer = document.getElementById("characters-container");
const charAContainer = document.getElementById("charA-container");
// GAME SETUP -------------------------------------------

//create characters - select from dropdowns, roll for values, save data
//buy equipment, sell equipment

// GAME PLAY --------------------------------------------

function rollDice(num) {
  return Math.floor(Math.random() * (6 * num)) + 1; 
}

function rollRoom() {
  return ((Math.floor(Math.random() * 6) + 1) * 10) + (Math.floor(Math.random() * 6) + 1);
}

// COMBAT ------------------------------------------------

function attack() {

}

function defend() {

}
