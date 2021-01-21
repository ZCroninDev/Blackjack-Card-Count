var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}

// replace any of these "dealt" Cards into the parentheses below  (2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A') and the your last card dealt in the console log parenthesis to determine whether to hold or bet.
	
		
cc(2); cc(5); cc(10); cc(7); cc(6);
console.log(cc("j"))
