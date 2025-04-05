// PAGE ELEMENTS ----------------------------------------

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
