/*1.12 Immediately-Invoked Adventure!
Write one line of code that calls adventureSelector, passes it 3 as an argument, and that immediately invokes the function that gets returned. Here’s adventureSelector for your reference:

  function adventureSelector(userChoice) {
    if (userChoice == 1) {
      return function() {
        alert("You selected the Vines of Doom!");
      };
    } else if (userChoice == 2) {
      return function() {
        alert("Looks like you want the Lake of Despair!");
      };
    } else if (userChoice == 3) {
      return function() {
        alert("The Caves of Catastrophe!");
      };
    }
  }
*/

adventureSelector(3)();