function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
confirm("Are you ready to play Overlord?");
confirm("ALL OF THE ANSWER'S FIRST LETTER IS CAPITALIZED!!!");
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

var classRole = function(role1) {
    if (role1 === "Archer") {
        alert("You have chosen the Archer class. They specialize in ranged attacks using a bow as a primary weapon and have the secondary weapon choice of dual wield or sword and shield. Archers wear medium armor.");
        alert("Please wait a few seconds for the creation of your Archer class.");
    }
    else if (role1 === "Warrior") {
        alert("You have chosen the Warrior class. They specialize in frontline fighting using a sword and shield or greatsword. They can switch between the two when they need to change between defensive and offensive. Warriors wear heavy armor.");
        alert("Please wait a few seconds for the creation of your Warrior class.");
    }
    else if (role1 === "Rogue") {
        alert("You have chosen the Rogue class. They specialize in frontline fighting but they attack from blind spots or in the darkness using dual wield weapons and using throwing daggers. They can switch between using dual wield daggers (critical chance increase), axes (bleed chance effect), or swords (total weapon damage output increase). Rogues wear medium armor.");
        alert("Please wait a few seconds for the creation of your Rogue class.");
    }
    else if (role1 === "Mage") {
        alert("You have chosen the Mage class. They specialize in magical attacks using the elements of the world to create devastating abilities. They can switch between elements as they choose to deal bonus damage based on element. Mages wear light armor.");
        alert("Please wait a few seconds for the creation of your Mage class.");
    }
    else if (role1 === "Priest") {
        alert("You have chosen the Priest class. They specialize in using magical abilities to recover the physical attributes of those they choose. They can switch between using holy elements or corrupted elements to switch between offensive and defensive and for bonus damage based on element. Priests wear light armor.");
        alert("Please wait a few seconds for the creation of your Priest class.");
    }
};
classRole(prompt("You are now in the class choosing stage. Please choose the class you want to play, the options are Archer, Warrior, Rogue, Mage, or Priest."));

sleep(5000);

var raceRole = function(role2) {
    if (role2 === "Human") {
        alert("You have chosen the Human race.");
        alert("You will start in the city of Sanctuary.");
    }
    else if (role2 === "Elf") {
        alert("You have chosen the Elf race.");
        alert("You will start in the city of Yggdrasil");
    }
    else if (role2 === "Undead") {
        alert("You have chosen the Undead race.");
        alert("You will start in the city of Necroplis.");
    }
    else if (role2 === "Beastman") {
        alert("You have chosen the Beastman race.");
        alert("You will start in the city of the Eastern Federation.");
    }
};
raceRole(prompt("You are now in the race choosing stage, Please choose the race you want to play, the options are Human, Elf, Undead, or Beastman."));

sleep(5000);

var godChoice = function(role3) {
    if (role3 === "Rallos") {
        alert("You have chosen the God of Devestation, Rallos Zek.");
        alert("You will head down the path of war and bloodshed.");
    }
    else if (role3 === "Solusek Ro") {
        alert("You have chosen the God of Flames, Solusek Ro.");
        alert("You will head down a neutral path to choose between good or evil.");
    }
    else if (role3 === "Rodcet Nife") {
        alert("You have chose the God of Tranquility, Rodcet Nife.");
        alert("You will head down a path of bliss and serenity.");
    }
};
godChoice(prompt("You now have the choice to choose a God to lead you down the path you desire to use your power for. Your choices are Rallos Zek(Evil), Solusek Ro(Neutral), or Rodcet Nife(Good)."));


