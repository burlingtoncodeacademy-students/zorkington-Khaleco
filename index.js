const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// Location Class 
class Location {
  constructor(name, description, searchdescipt, roomInventory, interactable){
    this.name = name;
    this.description = description;
    this.searchdescipt = searchdescipt;
    this.roomInventory = roomInventory || ["Nothing of value."];
    this.roomInteractable = interactable;
  }

  add(item){
    if (this.roomInventory.includes("Nothing of value.")) {
      this.roomInventory = [];
    }
    this.roomInventory.push(item);
  }

  removeItem(item){
      this.roomInventory = this.roomInventory.filter(i => i !== item)
      if (this.roomInventory.length == 0){
        this.roomInventory = ["Nothing of value."];
      }
  }
}

// Pedestal class
class Pedestal {
  constructor(Pedestalinventory){
  this.Pedestalinventory = Pedestalinventory;
  }
  add(item){
    this.Pedestalinventory.push(item);
  }
  removeItem(item){
    this.Pedestalinventory = this.Pedestalinventory.filter(i => i !== item)
}
}

// All pedestal objects
var squarePedestal = new Pedestal([]);
var trianglePedestal = new Pedestal([]);
var circlePedestal = new Pedestal([]);
var hexagonPedestal = new Pedestal([]);
// All Location class objects ("Name" , "Description", "Further Description" , ["items"])
const entrance = new Location("You are at the Entrance", "The entrance to the lich's lair lies ahead of you. Peering in you see a long dark 'hallway'", "The sky is clouded and dark. Above the entrance you see a passage enscribed: Dragons fall and stars die,\nIn the end I shall rise.");

const hallway = new Location("You are in the Hallway", "You find yourself in a large hallway in the shape of an L. There are three exits, a door which is labled 'library', at the end of the hallway a room with a 'mural', and the 'entrance'.", "Looking around you spot strange marks on the floor and a slight draft where there shouldn't be one.");

const library = new Location("You are in the Library", "This room is stacked with books all the way to the ceiling. Dust clings to every surface and the air is damp filled with the smell of decaying paper. There is only one exit 'hallway'.", "Looking through the books none catch you eye as useful, execpt one: On The Creation of Phylacterys. When you grab the book a 'passage' opens up to your right. You open the book to find most of its contents rotted. There is but one ledgable passage: Phylacterys are the key to immortalty for any aspiring wizard who cares not for what he must do in order to obtain it, nor what the gerneral populice think of them.");

const passage = new Location("You are in the Passageway", "you enter the small dank passage one end leads to an 'alter' the other the 'library'.", "You notice a 'crackedWall' within the passage peering closed you see a room on the other side. If only you had a way to break it.", "", "crackedWall");
// Upon using the knife to bleed into the bowl, the way to the stairs is revealed
const alter = new Location("You are in the Alter Room", "A small chapel, rows of seats face a large statue of an unknown figure. Below the figure sits a bowl. Below the bowl there is an insciption: For those who dare to follow, you must give me part of your'self'. There is only one exit 'passage'.", "Looking around the room you find little beyond what was noticed at first glance. Looking closer at the bowl you notice deep red stains and the feint sent of iron.", ["knife"], "self");
// secret room contains first item for secret ending 'evilsEnd'
const secretRoom = new Location("You are in a Secret Room", "You enter into a small room containing a small alter. on which a sword lies. Looking closer at the alter you see an insciption: When stars die more are born,\nI will be 'evilsEnd' for this I am sworn. There is only one exit 'passage'", "There is nothing else in this room.", ["evilsEnd"]);

const mural = new Location("You are in the Mural Room", "This room is a semi circle. There is a large mural that encompasses the entire curved wall.", "The mural depicts a shinning star flanked by two dragons, a gold one on the left and a black one on the right.");

const stairs = new Location("You are at the top of the stairs", "Large spiraled stairs lead to the 'hallway' and 'grandHall'.", "Looking around you find nothing of intrest.");

const grandHall = new Location("You are in the Grand Hall", "You enter into a grand hall. Torches line walls giving off a dim light. In the center of the room stants four pedestals facing a 'largeDoor'\n   ( )\n( )   ( )\n   ( )\nEach pedestal is marked. The one closest to the 'largeDoor' has a square carved into it 'sqarePedestal'. The one on the left has a triangle 'trianglePedestal'. The one on the right has a circle 'circlePedestal'. The one furthest from the door has 'hexagonPedestal'. There are two doors on either side of the room and the door to the 'stairs'. Each of the doors has a different color white, black, yellow, and red. 'colorDoor'", "The door is inscibed with a passage: Of the four, the brighted shall face the door", "", ["squarePedestal, HexagonPedestal, trianglePedestal, circlePedestal"]);

const whiteDoor = new Location("You are in the White Room", "The room is filled with candles forming a shrine. At the center there lies a closed book bound in simple leather.", "The book has no cover, no title, and no words within. As you flip through the book a sense of deja vu washes over you. Have you been here? done this already?", ["candle"]);

const redDoor = new Location("You are in the Red Room", "Old wood lines the walls and floor of this room. A small fire is lit in a fireplace softly illuminating the room. Old trinkets line the shelves but one stands out, an empty jar labled: What remains.", "Looking through the colloction nothing catches your eye.", ["emptyJar"]);

const yellowDoor = new Location("You are in the Yellow Room", "This room is made out of white marble with gold trim and accents. A large painting hangs on the wall and befor it sit a pedestal.", "The painting is that of a happy family stading on hill basking in the sun together. One figure sits looking longingly at them in the shadows.", ["goldHeart"]);

const blackDoor = new Location("You are in the Black Room", "Sharp jagged metal pierces the floor and walls of this room. One large braizer sits in the center, red flames reaching for the ceiling. Through the filcker of flame you make out the silhouette of a warhammer.", "Taking a closer look aroud you feel an overwhelming sense of hatred flood your mind.", ["blackHammer"]);

const largeDoor = new Location("You are at the Large Door", "You open the large door connecting the 'grandHall' to the 'mazeStart'.", "Looking around you find nothing of intrest.");

const mazeStart = new Location("You are at the Start of the maze", "haveing come from the 'largeDoor' you look around you see three paths before you, 'right1', 'forward1', 'left1'.");

const right1 = new Location("You are in the maze","You've run into a dead end. The only way to go is 'mazeStart'.");

const forward1 = new Location("You are in the maze","You've run into a dead end. The only way to go is 'mazeStart'.");

const left1 = new Location("You are in the maze", "After a couple of turns you find yourself at another crossroads. There is a path to the 'left2', one 'forward2', and back to 'mazeStart'.");

const left2 = new Location("You are in the maze", "You've run into a dead end. The only way to go is 'left1'.");

const forward2 = new Location("You are in the maze", "The maze continues on for what feels like hours befor you find another crossroads. 'left3', 'forward3', or back to 'left1'.");

const forward3 = new Location("You are in the maze","You've run into a dead end. The only way to go is 'forward2'.", "You notice a small crack in the wall('smallCrackedWall').", "", "smallCrackedWall");
// contains the second half for the secret ending
// player must use 'evilsEnd' on 'phylactery'
const secret = new Location("You are in a secret room", "You enter into a small alcove, dry and forgotten. A strange glow eminates from a crystal heart that sits within an exquisite glass jar, a 'phylactery'. The only exit from this room being 'forward3'.", "There is nothing else in this room but dust and cobwebs.");

const left3 = new Location("You are in the maze", "After following this path for awhile you come across an exit, Ruthom's 'sanctum' or you could turn back 'forward2'");

const sanctum = new Location("You are within Ruthom's Sanctum", "The stench of rot fills the air. Before you lies Ruthom unaware of your presence, or perhaps he simply does not care about your presence, he works away none the less. What he is doing you can only imagine but whatever it is it must be stopped you must 'fight' him. But are you the one to do it? You could turn back 'left3'.", "Alchemical odds and ends and magical items cluter the walls of this room but you don't know what any of them do.");


const locationLookUp = {
  "entrance": entrance,
  "hallway": hallway,
  "library": library,
  "passage": passage, 
  "alter": alter,
  "secretRoom": secretRoom,
  "mural": mural,
  "stairs": stairs,
  "grandHall": grandHall,
  "whiteDoor": whiteDoor,
  "redDoor": redDoor,
  "yellowDoor": yellowDoor,
  "blackDoor": blackDoor,
  "largeDoor": largeDoor,
  "mazeStart": mazeStart,
  "right1": right1,
  "forward1": forward1,
  "left1": left1,
  "left2": left2,
  "forward2": forward2,
  "forward3": forward3,
  "secret": secret,
  "left3": left3,
  "sanctum": sanctum,
}

const locationStates = {
  entrance: ["hallway"],
  hallway: ["entrance", "library", "mural", "stairs"],
  library: ["hallway", "passage"],
  passage: ["alter", "secretRoom", "library"],
  alter: ["passage"],
  secretRoom: ["passage"],
  mural: ["hallway"],
  stairs: ["hallway", "grandHall"],
  grandHall: ["stairs", "whiteDoor", "redDoor", "yellowDoor", "blackDoor", "largeDoor"],
  whiteDoor: ["grandHall"],
  redDoor: ["grandHall"],
  yellowDoor: ["grandHall"],
  blackDoor: ["grandHall"],
  largeDoor: ["grandHall", "mazeStart"],
  mazeStart: ["largeDoor", "right1", "forward1", "left1"],
  right1: ["mazeStart"],
  forward1: ["mazeStart"],
  left1: ["mazeStart", "left2", "forward2"],
  left2: ["left1"],
  forward2: ["left1", "forward3", "left3"],
  forward3: ["forward2", "secret"],
  secret: ["forward3"],
  left3: ["forward2", "sanctum"],
  sanctum: ["left3"],
}


start();

async function start() {
  // players inventory
  var playerInventory = {
    items: ["Nothing of value."],
    
    add(item){
      if (this.items.includes("Nothing of value.")) {
        this.items = [];
      }
      this.items.push(item);
    },
  
    removeItem(item){
      if (!this.items.includes(playerInput[1])){
        console.log(`You do not have ${item}.`);
      } else {
        this.items = this.items.filter(i => i !== item)
        console.log(`You have dropped ${item}.`)
        if (this.items.length == 0){
          this.items = ["Nothing of value."];
        }
      }
    }
  }
  // variables for progression tracking
  var passageUnlocked = false;
  var stairsUnlocked = false;
  var secretRoomUnlocked = false;
  var secretMazeUnlocked = false;
  var largeDoorUnlocked = false;
  var phylacteryBroken = false;
  
  let locationCurrent = "left3"
  const welcomeMessage = `\nThe Lich's Lair\n\nPress Enter to Start\n`;
  let answer = await ask(welcomeMessage);
  console.log("You are an adventurer on a quest to destroy the foul lich known as Ruthom, who you have herd tales of since you were a child. Some time ago he made himself know to you when he took the lives of the ones you loved. From that day forward you swore to be his end. You have been traking him for years and finnaly found the location of his lair. The entrance to the lair lies ahead of you. Peering in you see a long dark 'hallway'\n\ntype 'help' for a list of commands\n")
  var playerInput;
    while(playerInput !== "exit"){
      function move(newLocation) {
        if (locationStates[locationCurrent].includes(newLocation)) {
          locationCurrent = newLocation;
          console.log(`${locationLookUp[locationCurrent].description}\n`);
          console.log(`This room conatains: ${locationLookUp[locationCurrent].roomInventory}\n`)
        } else {
          console.log(`You can not go from ${locationCurrent} to ${newLocation}.`);
        }
      }
      console.log(`${locationLookUp[locationCurrent].name}`); 
      playerInput = await ask(`What would you like to do?\n > `);
      // turns player input into an array
      playerInput = playerInput.split(" ");
      console.log();

        // move player to new room if able
      if (playerInput.includes("move")){
        if (playerInput[1] == "passage" && passageUnlocked == false) {
          console.log(`You do not know of any passage.`)
        } else if (playerInput[1] == "stairs" && stairsUnlocked == false) {
          console.log(`The way remains unopened.`)
        } else if (playerInput[1] == "secretRoom" && secretRoomUnlocked == false) {
          console.log(`The wall remains intact. If only you had a way to break it.`)
        } else if (playerInput[1] == "largeDoor" && largeDoorUnlocked == false) {
          console.log(`The door is unbudgeing. There must be another way to open it.`)
        } else if (playerInput[1] == "secret" && secretMazeUnlocked == false) {
          console.log(`The wall remains intact. If only you had a way to break it.`)
        } else {
        move(playerInput[1]);
        }

        // displays all posible commands
      } else if (playerInput.includes("help")) {
        console.log("list of commands:\n'exit - quits game'\n'help - displays all commands'\n'move (location) - moves to specified location if able'\n'search - gives more detailed discriptions of certian rooms'\n'grab (item) - puts (item) in inventory'\n'inventory - displays all items in inventory'\n'use (item) (object) - uses an item on a specific object\n\nLocations and interactibles will have ' ' around them\n");

        // gives more discription to the room posibly unveiling secrets
      } else if (playerInput.includes("search")){
        if (locationCurrent == "library"){
          passageUnlocked = true;
        }
        console.log(locationLookUp[locationCurrent].searchdescipt + "\n");

        // runs grab function
      } else if (playerInput.includes("grab")){
        // checks if player is in grandHall and if pedestals have the item if true adds item to players inventory and removes it from the room and pedestal
          if (locationCurrent == "grandHall" && squarePedestal.Pedestalinventory.includes(playerInput[1])) {
            playerInventory.add(playerInput[1]);
            squarePedestal.removeItem(playerInput[1]);
            locationLookUp[locationCurrent].removeItem(playerInput[1]);

          } else if (locationCurrent == "grandHall" && circlePedestal.Pedestalinventory.includes(playerInput[1])) {
            playerInventory.add(playerInput[1]);
            circlePedestal.removeItem(playerInput[1]);
            locationLookUp[locationCurrent].removeItem(playerInput[1]);

          } else if (locationCurrent == "grandHall" && hexagonPedestal.Pedestalinventory.includes(playerInput[1])) {
            playerInventory.add(playerInput[1]);
            hexagonPedestal.removeItem(playerInput[1]);
            locationLookUp[locationCurrent].removeItem(playerInput[1]);

          } else if (locationCurrent == "grandHall" && trianglePedestal.Pedestalinventory.includes(playerInput[1])) {
            playerInventory.add(playerInput[1]);
            trianglePedestal.removeItem(playerInput[1]);
            locationLookUp[locationCurrent].removeItem(playerInput[1]);

            // checks if the item is in the room if true adds to player inventory and removes from room
          } else if (locationLookUp[locationCurrent].roomInventory.includes(playerInput[1])) {
            playerInventory.add(playerInput[1]);
            locationLookUp[locationCurrent].removeItem(playerInput[1]);
            console.log(`You pick up the ${playerInput[1]}.\n`)

          } else {
            console.log(`There is no ${playerInput[1]} to pick up.`);
          }

          // displays all items in inventory
      } else if (playerInput.includes("inventory")){
        console.log(`Your inventory contains ${playerInventory.items}`);

        // remove an item from player inventory and add it to the room.
      } else if (playerInput.includes("drop")) {
          if (playerInventory.items.includes(playerInput[1])) {
          playerInventory.removeItem(playerInput[1]);
          locationLookUp[locationCurrent].add(playerInput[1]);
          }

          // runs use function
      } else if (playerInput.includes("use")){
        // checks if item is in inventory and target is valid
        
        // checks for specific interactions
        if (playerInput[1] == "knife" && playerInput[2] == "self") {
          stairsUnlocked = true;
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}. Blood pours from your hand into the bowl. As it does you feel part of youself leave you and a voice in your head: The way to the 'stairs' is now open. You hear stone scrapping on stone coming from the hallway.\n`);
          
        } else if (playerInput[1] == "blackHammer" && playerInput[2] == "crackedWall") {
          secretRoomUnlocked = true;
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}. The wall crumbles reveling a 'secretRoom'.\n`);
          
        } else if (playerInput[1] == "blackHammer" && playerInput[2] == "smallCrackedWall") {
          secretMazeUnlocked = true;
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}. the wall crumbles reveling a 'secret'.\n`);
          
        } else if (playerInput[1] == "evilsEnd" && playerInput[2] == "phylactery") {
          phylacteryBroken = true;
          console.log(`You used ${playerInput[1]} on ${playerInput[2]} Shatting it. Ruthom is now mortal.\n`);
          // Pedestals in grandHall
        } else if (playerInput[2] == "squarePedestal") {
          playerInventory.removeItem(playerInput[1]);
          locationLookUp[locationCurrent].add(playerInput[1]);
          squarePedestal.add(playerInput[1]);
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}\n`);
          
        } else if (playerInput[2] == "hexagonPedestal") {
          playerInventory.removeItem(playerInput[1]);
          locationLookUp[locationCurrent].add(playerInput[1]);
          hexagonPedestal.add(playerInput[1]);
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}\n`);
          
        } else if (playerInput[2] == "circlePedestal") {
          playerInventory.removeItem(playerInput[1]);
          locationLookUp[locationCurrent].add(playerInput[1]);
          circlePedestal.add(playerInput[1]);
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}\n`);
          
        } else if (playerInput[2] == "trianglePedestal") {
          playerInventory.removeItem(playerInput[1]);
          locationLookUp[locationCurrent].add(playerInput[1]);
          trianglePedestal.add(playerInput[1]);
          console.log(`You used ${playerInput[1]} on ${playerInput[2]}\n`);

        } else if (!playerInput[1].includes(playerInventory.items)) {
          console.log(`You do not have ${playerInput[1]}.\n`);

        } else if (!playerInput[2].includes(locationLookUp[locationCurrent].interactable)) {
          console.log(`This room does not contain ${playerInput[2]}\n`);
        }
        // fights for the final battle displays ending based on progression
      } else if (playerInput[0].includes("fight")) {
        if (locationCurrent == "sanctum") {
          if (phylacteryBroken == true) {
            console.log(`You charge at Ruthom confident you will win. You found his phylactery and broke it rending him mortal once more. The fight lasts but a moment, he had not expected you to succeed where so many had failed. You swiftly run him through with your sword ending his unlife once and for all. The day is save, You have won.\n`);
          } else {
            console.log(`You charge at Ruthom confident you will win. You run him through with you sword but Ruthom is unfazed. He chuckles. "Ahh, another fool follows the path of the hero. A shame." He waves his hand and you feel your life ebb from your body. All goes dark. You have died and failed in your mission.\n`);
          }
          console.log("GAME OVER");
          process.exit();
      } else {
        console.log(`There is nothing to fight here.`);
      }
        // exits if - else and stops while loop
      } else if (playerInput.includes("exit")){
        playerInput = await ask("Are you sure? > ");
          if (playerInput == "yes") {
            console.log("You lost your nerve and ran, leaving the lich to continue his plans unfaltered.");
            playerInput = "exit";
          }
          // default message for unknown command
      } else {
        console.log(`You can not ${playerInput}`);
      }

      // checks if pedestal puzzle is complete
      if (squarePedestal.Pedestalinventory.includes("candle") && circlePedestal.Pedestalinventory.includes("blackHammer") && trianglePedestal.Pedestalinventory.includes("goldHeart") && hexagonPedestal.Pedestalinventory.includes("emptyJar")) {
        largeDoorUnlocked = true;
        console.log(`As the last of the items are put in place the 'largeDoor' begins to shift opening the way.\n`)
      }

    }
    process.exit();
}
