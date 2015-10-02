function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
confirm("Are you ready to play Overlord?");
var license = prompt("This game is an MMORPG, we take no responsibility toward anything that happens in game or outside that includes the usage of this game. Do you agree to our terms?");
switch (license) {
    case "Yes":
        alert("The game is now executing please give it a few seconds to activate.");
        break;
    case "No":
        alert("Then we cannot allow you to play the game. Come back again when you agree to the terms.");
        break;
    default:
        alert("The game is now executing please give it a few seconds to activate.");
        break;
}
sleep(5000);

var gameRole = function(answer) {
    if (answer === "Archer") {
        alert("You have chosen the Archer class. They specialize in ranged attacks using a bow as a primary weapon and have the secondary weapon choice of dual wield or sword and shield. Archers wear medium armor.");
    }
    else if (answer === "Warrior") {
        alert("You have chosen the Warrior class. They specialize in frontline fighting using a sword and shield or greatsword. They can switch between the two when they need to change between defensive and offensive. Warriors wear heavy armor.");
    }
    else if (answer === "Rogue") {
        alert("You have chosen the Rogue class. They specialize in frontline fighting but they attack from blind spots or in the darkness using dual wield weapons and using throwing daggers. They can switch between using dual wield daggers (critical chance increase), axes (bleed chance effect), or swords (total weapon damage output increase). Rogues wear medium armor.");
    }
    else if (answer === "Mage") {
        alert("You have chosen the Mage class. They specialize in magical attacks using the elements of the world to create devastating abilities. They can switch between elements as they choose to deal bonus damage based on element. Mages wear light armor.");
    }
    else if (answer === "Priest") {
        alert("You have chosen the Priest class. They specialize in using magical abilities to recover the physical attributes of those they choose. They can switch between using holy elements or corrupted elements to switch between offensive and defensive and for bonus damage based on element. Priests wear light armor.");
    }
};
gameRole(prompt("You are now in the class choosing stage. Please choose the class you want to play, the options are Archer, Warrior, Rogue, Mage, or Priest."));