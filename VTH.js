
//scenes
const screenMainMenu = document.getElementById("screen-main-menu");
const screenFight = document.getElementById("screen-fight");
const screenShop = document.getElementById("screen-shop");
const screenFinalBoss = document.getElementById("screen-final-boss");
const screenPlayerStats = document.getElementById("screen-player-stats");

//buttons
const goMainMenuBtn = document.getElementById("go-main-menu-btn");
const goFightBtn = document.getElementById("go-fight-btn");
const goShopBtn = document.getElementById("go-shop-btn");
const goFinalBossBtn = document.getElementById("go-final-boss-btn");
const showPlayerStatsBtn = document.getElementById("show-player-stats-btn");
let statsBtnIsClicked = false;


const attackBtn = document.getElementById("attack-btn");
let playerDamage = 3;
const playerDamageText = document.getElementById("player-damage-text");
let playerHealth = 100;
let playerHealthText = document.getElementById("player-health-text");
let playerMissChance = 40;
playerHealthText.textContent = playerHealth;
let playerGold = 0;
let playerGoldText = document.getElementById("player-gold-text");
playerGoldText.textContent = playerGold;
const fightTextBox = document.getElementById("fight-text-box");
let currentMonster;
let currentMonsterName;
let currentMonsterImg = document.getElementById("current-monster-img");
let currentMonsterHealth;
let currentMonsterNameText = document.getElementById("current-monster-name-text");
let currentMonsterHealthText = document.getElementById("current-monster-health-text");
let currentMonsterGoldGiven;
let currentMonsterDamage;
let currentMonsterMissChance;
currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
let slayedSlimes = 0;
let slayedWolves = 0;
let WeaponInventoryArray = [
  {
    weaponName:"Sharp Stick",
    weaponID:1,
    weaponCost:25,
    weaponDamage:5
  },
  {
    weaponName:"Wooden Club",
    weaponID:2,
    weaponCost:70,
    weaponDamage:11
  },
  {
    weaponName:"Blunt Iron Sword",
    weaponID:3,
    weaponCost:190,
    weaponDamage:17
  },
  {
    weaponName:"Gold Mace",
    weaponID:4,
    weaponCost:300,
    weaponDamage:24
  },
  {
    weaponName:"Onyx Double Blade",
    weaponID:5,
    weaponCost:760,
    weaponDamage:38
  },
];
const playerOwnedWeaponText = document.getElementById("player-owned-weapon-text")
let ownedWeaponsArray = []
const buyWeapon1Btn = document.getElementById("buy-weapon1-btn");
const buyWeapon2Btn = document.getElementById("buy-weapon2-btn");
const buyWeapon3Btn = document.getElementById("buy-weapon3-btn");
const buyWeapon4Btn = document.getElementById("buy-weapon4-btn");
const buyWeapon5Btn = document.getElementById("buy-weapon5-btn");
let monsterArray = [
  {
    name:"Slime",
    health:15,
    gold:150,
    img:"VTHslime.webp",
    damage:4,
    missChance:70
  },
  {
    name:"Wolf",
    health:35,
    gold:450,
    img:"lupul.png",
    damage:7,
    missChance:65
  },
  {
    name:"Goblin",
    health:80,
    gold:28,
    img:"goblin.png",
    damage:12,
    missChance:60
  },
  {
    name:"Orc",
    health:210,
    gold:52,
    img:"",
    damage:16,
    missChance:50
  }
];
console.log(monsterArray[3].missChance);

 //display the main menu
 goMainMenuBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "block";
  screenShop.style.display = "none";
  screenFinalBoss.style.display = "none";
  screenFight.style.display = "none";
  screenPlayerStats.style.display = "none";
  statsBtnIsClicked = false;
 });
 //display the fight screen
 goFightBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "none";
  screenShop.style.display = "none";
  screenFinalBoss.style.display = "none";
  screenFight.style.display = "flex";
  fightCurrentMonster();
});

// function to add a row to the text box
const addRowToFightTextBox = (textParam) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent +=  `${textParam}`;
  newParagraph.style.marginLeft = "1em";
  fightTextBox.appendChild(newParagraph);
};

// function to fight the current monster
const fightCurrentMonster = () => {
    if(slayedSlimes <= 10) {
      fightSlime();
      slayedSlimes++
      textParam =`You slayed ${slayedSlimes} slimes`;
      addRowToFightTextBox(textParam);
      };
    if(slayedSlimes >= 10) {
      fightWolf();
      slayedWolves++
       textParam =`You slayed ${slayedWolves} wolves`;
      addRowToFightTextBox(textParam);
      console.log(`you slayed ${slayedWolves} wolves`);
      };
    if(slayedWolves >= 10) {
      console.log("u slayed 10 wolves good job bro");
      };
  };

//function to set current monster as slime
  const fightSlime = () => {
    currentMonster = "slime"
    currentMonsterName = monsterArray[0].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[0].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[0].gold
    currentMonsterImg.src = monsterArray[0].img
    currentMonsterDamage = monsterArray[0].damage;
    currentMonsterMissChance = monsterArray[0].missChance;
  };

//function to set current monster as wolf
  const fightWolf = () => {
    currentMonster = "wolf";
    currentMonsterName = monsterArray[1].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[1].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[1].gold;
    currentMonsterImg.src = monsterArray[1].img
    currentMonsterDamage = monsterArray[1].damage;
    currentMonsterMissChance = monsterArray[1].missChance;
  };

// function for the attack action , included miss chance
const attack = () => {
  if(Math.floor(Math.random() * 100 >= playerMissChance)) {
    console.log(`player miss chance is ${playerMissChance}`); 
    currentMonsterHealth = currentMonsterHealth - playerDamage;
    textParam = `Successful hit`;
    addRowToFightTextBox(textParam);
  }else {
    textParam = "Miss!"
    addRowToFightTextBox(textParam);
  }
};
// function to get damaged by the monsters
const getAttacked = () => {
  if(Math.floor(Math.random() * 100 >= currentMonsterMissChance)) {
    playerHealth = playerHealth - currentMonsterDamage;
    playerHealthText.textContent = playerHealth
    textParam = `Monster successful  hit for ${currentMonsterDamage} damage`
    addRowToFightTextBox(textParam);
  }else {
    textParam = "Monster missed"
    addRowToFightTextBox(textParam);
  }
    
  }
// function to attack current monster
attackBtn.addEventListener("click",() => {
  const damageCurrentMonster = () => {
    attack();
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
  if(currentMonsterHealth <= 0) {
    fightCurrentMonster();
    console.log(`Successfully slayed ${currentMonsterName}`);
    textParam = `Gained ${currentMonsterGoldGiven} gold`
    addRowToFightTextBox(textParam)
    playerGold += currentMonsterGoldGiven;
    playerGoldText.textContent = playerGold
  };
  return
  };
  applyDamageFromWeapon();
  damageCurrentMonster();
  getAttacked();
})

//display the shop screen
goShopBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "none";
  screenFight.style.display = "none"
  screenFinalBoss.style.display = "none";
  screenShop.style.display = "block";
});

//function to apply the damage using includes to check for the ID of a weapon in the player's
// owned weapons array
const applyDamageFromWeapon = () => {
  if(ownedWeaponsArray.includes(WeaponInventoryArray[0].weaponID)) {
    playerDamage = WeaponInventoryArray[0].weaponDamage;
    playerDamageText.textContent = `Damage dealt: ${playerDamage}`
    playerOwnedWeaponText.textContent = WeaponInventoryArray[0].weaponName
  }else if(ownedWeaponsArray.includes(WeaponInventoryArray[1].weaponID)) {
    playerDamage = WeaponInventoryArray[1].weaponDamage;
    playerDamageText.textContent = `Damage dealt: ${playerDamage}`
    playerOwnedWeaponText.textContent = WeaponInventoryArray[1].weaponName
  }else if(ownedWeaponsArray.includes(WeaponInventoryArray[2].weaponID)) {
    playerDamage = WeaponInventoryArray[2].weaponDamage;
    playerDamageText.textContent = `Damage dealt: ${playerDamage}`
    playerOwnedWeaponText.textContent = WeaponInventoryArray[2].weaponName
  }else if(ownedWeaponsArray.includes(WeaponInventoryArray[3].weaponID)) {
    playerDamage = WeaponInventoryArray[3].weaponDamage;
    playerDamageText.textContent = `Damage dealt: ${playerDamage}`
    playerOwnedWeaponText.textContent = WeaponInventoryArray[3].weaponName
  }else if(ownedWeaponsArray.includes(WeaponInventoryArray[4].weaponID)) {
    playerDamage = WeaponInventoryArray[4].weaponDamage;
    playerDamageText.textContent = `Damage dealt: ${playerDamage}`
    playerOwnedWeaponText.textContent = WeaponInventoryArray[4].weaponName
  }
};

// function to add weapons
const buyWeapons = () => {

  const buyWeapon1 = () => {
    buyWeapon1Btn.addEventListener("click",() => {
      if(playerGold >= WeaponInventoryArray[0].weaponCost) {
          playerGold -= WeaponInventoryArray[0].weaponCost;
          playerGoldText.textContent = playerGold;
          ownedWeaponsArray = [];
          ownedWeaponsArray.push(WeaponInventoryArray[0].weaponID)
          console.log(ownedWeaponsArray);
      }else{
          alert("not enough moola");
      }
    });  
  };
  const buyWeapon2 = () => {
    buyWeapon2Btn.addEventListener("click",() => {
      if(playerGold >= WeaponInventoryArray[1].weaponCost) {
          playerGold -= WeaponInventoryArray[1].weaponCost;
          playerGoldText.textContent = playerGold;
          ownedWeaponsArray = [];
          ownedWeaponsArray.push(WeaponInventoryArray[1].weaponID)
          console.log(ownedWeaponsArray);
      }else{
          alert("not enough moola");
      }
    });  
  };
  const buyWeapon3 = () => {
    buyWeapon3Btn.addEventListener("click",() => {
      if(playerGold >= WeaponInventoryArray[2].weaponCost) {
          playerGold -= WeaponInventoryArray[2].weaponCost;
          playerGoldText.textContent = playerGold;
          ownedWeaponsArray = [];
          ownedWeaponsArray.push(WeaponInventoryArray[2].weaponID)
          console.log(ownedWeaponsArray);
      }else{
          alert("not enough moola");
      }
    });  
  };
  const buyWeapon4 = () => {
    buyWeapon4Btn.addEventListener("click",() => {
      if(playerGold >= WeaponInventoryArray[3].weaponCost) {
          playerGold -= WeaponInventoryArray[3].weaponCost;
          playerGoldText.textContent = playerGold;
          ownedWeaponsArray = [];
          ownedWeaponsArray.push(WeaponInventoryArray[3].weaponID)
          console.log(ownedWeaponsArray);
      }else{
          alert("not enough moola");
      }
    });  
  };
  const buyWeapon5 = () => {
    buyWeapon5Btn.addEventListener("click",() => {
      if(playerGold >= WeaponInventoryArray[4].weaponCost) {
          playerGold -= WeaponInventoryArray[4].weaponCost;
          playerGoldText.textContent = playerGold;
          ownedWeaponsArray = [];
          ownedWeaponsArray.push(WeaponInventoryArray[4].weaponID)
          console.log(ownedWeaponsArray);
      }else{
          alert("not enough moola");
      }
    });  
  };
  buyWeapon1();
  buyWeapon2();
  buyWeapon3();
  buyWeapon4();
  buyWeapon5();
};
buyWeapons();







// display the final boss screen
goFinalBossBtn.addEventListener("click",() => {
 screenMainMenu.style.display = "none";
 screenFight.style.display = "none";
 screenShop.style.display = "none";
 screenFinalBoss.style.display = "block";
});


//display the player screen
showPlayerStatsBtn.addEventListener("click",() => {
  if(statsBtnIsClicked === false) {
    screenPlayerStats.style.display = "block";
    statsBtnIsClicked = true;
  }else if(statsBtnIsClicked === true) {
    screenPlayerStats.style.display = "none";
    statsBtnIsClicked = false;
  }
});
  






 