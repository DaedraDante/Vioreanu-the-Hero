
//scenes
const screenMainMenu = document.getElementById("screen-main-menu");
const gameTitle = document.getElementById("game-title");
const screenMenuButtons = document.getElementById("menu-btn-div");
const screenMenuSettings = document.getElementById("menu-settings-div");
const screenFight = document.getElementById("screen-fight");
const screenShop = document.getElementById("screen-shop");
const screenFinalBoss = document.getElementById("screen-final-boss");
const screenPlayerStats = document.getElementById("screen-player-stats");
const buttonAndStatsContainer = document.getElementById("button-and-stats-container");


//sounds
let bgMusic1 = new Audio("Eric Skiff - Underclocked  NO COPYRIGHT 8-bit Music  Background.mp3");
const attackSound = new Audio("77611__joelaudio__sfx_attack_sword_001.wav");
const missSound = new Audio("405548__raclure__cancelmiss-chime.wav");
const getAttackedSound = new Audio("404747__owlstorm__retro-video-game-sfx-ouch.wav");
setTimeout(bgMusic1.play(),100);
bgMusic1.volume = 0.9;
let musicVolumeText = document.getElementById("music-volume-text");

//stuff for color themes
  let root = document.querySelector(":root");
  const getVariableValue = () => {
    let rootStyles = getComputedStyle(root);
    alert("The value of --blue is: " + rootStyles.getPropertyValue('--bgcolor'));
  }
  const setTheme0 = () => {
    root.style.setProperty("--bgcolor","#d2d2ef");
    root.style.setProperty("--primarycolor","#4c50b8");
    root.style.setProperty("--secondarycolor","#898ce1");
    root.style.setProperty("--accentcolor","#585de9");
  }
  const setTheme1 = () => {
    root.style.setProperty("--bgcolor","#fbf5f7");
    root.style.setProperty("--primarycolor","#d03760");
    root.style.setProperty("--secondarycolor","#ef87a3");
    root.style.setProperty("--accentcolor","#f75480");
  }
  const setTheme2 = () => {
    root.style.setProperty("--bgcolor","#f4fff8");
    root.style.setProperty("--primarycolor","#0d9cee");
    root.style.setProperty("--secondarycolor","#6892fd");
    root.style.setProperty("--accentcolor","#4b3afd");
  }
  const setTheme3 = () => {
    root.style.setProperty("--bgcolor","#ecfeff");
    root.style.setProperty("--primarycolor","#0aeefa");
    root.style.setProperty("--secondarycolor","#b67ffc");
    root.style.setProperty("--accentcolor","#db43fb");
  }
//buttons
const menuPlayBtn = document.getElementById("menu-play-btn");
const menuSettingsBtn = document.getElementById("menu-settings-btn");
const goMainMenuBtn = document.getElementById("go-main-menu-btn");
const goFightBtn = document.getElementById("go-fight-btn");
const goShopBtn = document.getElementById("go-shop-btn");
const goFinalBossBtn = document.getElementById("go-final-boss-btn");
const showPlayerStatsBtn = document.getElementById("show-player-stats-btn");
let statsBtnIsClicked = false;
const attackBtn = document.getElementById("attack-btn");

//settings buttons
const settingsBackBtn = document.getElementById("settings-back-btn");
const settingsTurnOffMusicBtn = document.getElementById("settings-turn-off-music-btn");
const settingsMusicVolumeBtn = document.getElementById("settings-music-volume-btn");
const settingsChangeMusicBtn = document.getElementById("settings-change-music-btn");
const settingsChangeColorThemeBtn = document.getElementById("settings-change-color-theme-btn");

//stats and their text values
let playerDamage = 3;
const playerDamageText = document.getElementById("player-damage-text");
let playerHealth = 100;
let playerHealthText = document.getElementById("player-health-text");
playerHealthText.textContent = playerHealth;
let playerMaxHealth = 100;
let playerMaxHealthText = document.getElementById("player-max-health-text");
playerMaxHealthText.textContent = playerMaxHealth
let playerMissChance = 25;
let playerGold = 1000;
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
let slayedGoblins = 0;
let slayedSkeletons = 0;
let slayedLesserDemons = 0;
let slayedSlimesText = document.getElementById("slayed-slimes-text");
let slayedWolvesText = document.getElementById("slayed-wolves-text");
let slayedGoblinsText = document.getElementById("slayed-goblins-text");
let slayedSkeletonsText = document.getElementById("slayed-skeletons-text");
let slayedLesserDemonsText = document.getElementById("slayed-lesser-demons-text");


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
let ArmorInventoryArray = [
  {
    armorName:"Leather Armor",
    armorID:1,
    armorCost:40,
    maxHPGiven:110
  },
  {
    armorName:"Iron Armor",
    armorID:2,
    armorCost:100,
    maxHPGiven:120
  },
  {
    armorName:"Cobalt Armor",
    armorID:3,
    armorCost:210,
    maxHPGiven:135
  },
  {
    armorName:"Palladium Armor",
    armorID:4,
    armorCost:340,
    maxHPGiven:160
  },
  {
    armorName:"Adamantine Armor",
    armorID:5,
    armorCost:700,
    maxHPGiven:200
  },
]
const playerOwnedWeaponText = document.getElementById("player-owned-weapon-text");
const playerOwnedArmorText = document.getElementById("player-owned-armor-text");
const playerStatsMaxHPText = document.getElementById("player-stats-maxHP-text");
playerOwnedWeaponText.textContent = "Fist";
playerOwnedArmorText.textContent = "Lidl Shirt";
let ownedWeaponsArray = [];
const buyWeapon1Btn = document.getElementById("buy-weapon1-btn");
const buyWeapon2Btn = document.getElementById("buy-weapon2-btn");
const buyWeapon3Btn = document.getElementById("buy-weapon3-btn");
const buyWeapon4Btn = document.getElementById("buy-weapon4-btn");
const buyWeapon5Btn = document.getElementById("buy-weapon5-btn");
let ownedArmorArray  = [];
const buyArmor1Btn = document.getElementById("buy-armor1-btn");
const buyArmor2Btn = document.getElementById("buy-armor2-btn");
const buyArmor3Btn = document.getElementById("buy-armor3-btn");
const buyArmor4Btn = document.getElementById("buy-armor4-btn");
const buyArmor5Btn = document.getElementById("buy-armor5-btn");
const buyPotion1Btn = document.getElementById("buy-potion1-btn");


let monsterArray = [
  {
    name:"Slime",
    health:15,
    gold:7,
    img:"VTHslime.webp",
    damage:4,
    missChance:75
  },
  {
    name:"Wolf",
    health:35,
    gold:18,
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
    name:"Skeleton",
    health:210,
    gold:40,
    img:"scheletonul.png",
    damage:15,
    missChance:50
  },
  {
    name:"Lesser Demon",
    health:420,
    gold:68,
    img:"lesserdemonul.png",
    damage:20,
    missChance:45
  }
];
console.log(monsterArray[3].missChance);

 //display settings
 menuSettingsBtn.addEventListener("click",() => {
  screenMenuButtons.style.display = "none";
  screenMenuSettings.style.display = "block";
  gameTitle.style.display = "none";
 });

// settings btn: back to menu
settingsBackBtn.addEventListener("click",() => {
  screenMenuSettings.style.display ="none";
  gameTitle.style.display ="block";
  screenMenuButtons.style.display = "block"
  screenMainMenu.style.display  ="block";
});
// settings btn: turn off music
let musicIsTurnedOff = false;
settingsTurnOffMusicBtn.addEventListener("click",() => {
  if(musicIsTurnedOff === false) {
    bgMusic1.volume = 0.0
    settingsTurnOffMusicBtn.textContent = "Turn on music"
    musicIsTurnedOff = true;
  }else if(musicIsTurnedOff === true) {
    bgMusic1.volume = 0.2
    settingsTurnOffMusicBtn.textContent = "Turn off music"
    musicIsTurnedOff = false;
  }
});
// settings btn: change music
settingsChangeMusicBtn.addEventListener("click",() => {
  alert("wip")
});
 //settings btn: change music volume
settingsMusicVolumeBtn.addEventListener("click",() => {
 
  if(bgMusic1.volume <= 0.9) {
     bgMusic1.volume+= 0.1;
   //  musicVolumeText.textContent  = Math.floor(bgMusic1.volume);
  }else if(bgMusic1.volume >= 0.9) {
     bgMusic1.volume = 0.1;
   //  musicVolumeText.textContent  = Math.floor(bgMusic1.volume);
  };
  console.log(bgMusic1.volume);
  
});
 //settings btn: change music
settingsChangeMusicBtn.addEventListener("click",() => {
});

//settings btn:  change color theme
let themeButtonPressedNTimes = 0
settingsChangeColorThemeBtn.addEventListener("click",() => {
  themeButtonPressedNTimes++
  if(themeButtonPressedNTimes === 1) {
    setTheme1();
  }else if(themeButtonPressedNTimes === 2) {
    setTheme2();
  }else if(themeButtonPressedNTimes === 3) {
    setTheme3();
  }
})

 //display game
 menuPlayBtn.addEventListener("click", () => {
  screenMainMenu.style.display = "none";
  screenShop.style.display = "flex";
  buttonAndStatsContainer.style.display = "block";
 });

 //display the main menu
 goMainMenuBtn.addEventListener("click",() => {
  buttonAndStatsContainer.style.display = "none";
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
      slayedSlimesText.textContent = slayedSlimes;
      textParam =`You slayed ${slayedSlimes} slimes`;
      addRowToFightTextBox(textParam);
      };
    if(slayedSlimes >= 10) {
      fightWolf();
      slayedWolves++
      slayedWolvesText.textContent = slayedWolves;
      textParam =`You slayed ${slayedWolves} wolves`;
      addRowToFightTextBox(textParam);
      };
    if(slayedWolves >= 10) {
      fightGoblin();
      slayedGoblins++
      slayedGoblinsText.textContent = slayedGoblins;
      textParam = `You slayed ${slayedGoblins} goblins`;
      addRowToFightTextBox(textParam);
      };
    if(slayedGoblins >= 10) {
      fightSkeleton();
      slayedSkeletons++
      slayedSkeletonsText.textContent = slayedSkeletons;
      textParam = `You slayed ${slayedSkeletons} skeletons`
      addRowToFightTextBox(textParam);
    }
    if(slayedSkeletons >= 10) {
      fightLesserDemon();
      textParam = `You slayed ${slayedLesserDemons} skeletons`
      addRowToFightTextBox(textParam);
    }
  };

// function to set current monster as slime
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
// function to set current monster as wolf
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
// function to set current monster as goblin
  const fightGoblin = () => {
    currentMonster = "goblin";
    currentMonsterName = monsterArray[2].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[2].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[2].gold;
    currentMonsterImg.src = monsterArray[2].img
    currentMonsterDamage = monsterArray[2].damage;
    currentMonsterMissChance = monsterArray[2].missChance;
  };
// function to set current monster as skeleton
  const fightSkeleton = () => {
    currentMonster = "skeleton";
    currentMonsterName = monsterArray[3].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[3].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[3].gold;
    currentMonsterImg.src = monsterArray[3].img
    currentMonsterDamage = monsterArray[3].damage;
    currentMonsterMissChance = monsterArray[3].missChance;
  };
// function to set current monster as lesser demon
  const fightLesserDemon = () => {
    currentMonster = "lesser demon";
    currentMonsterName = monsterArray[4].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[4].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[4].gold;
    currentMonsterImg.src = monsterArray[4].img
    currentMonsterDamage = monsterArray[4].damage;
    currentMonsterMissChance = monsterArray[4].missChance;
  };

// function for the attack action , included miss chance
const attack = () => {
  if(Math.floor(Math.random() * 100 >= playerMissChance)) {
    console.log(`player miss chance is ${playerMissChance}`); 
    currentMonsterHealth = currentMonsterHealth - playerDamage;
    textParam = `Successful hit for ${playerDamage} damage`;
    addRowToFightTextBox(textParam);
    attackSound.play();
  }else {
    textParam = "Miss!"
    addRowToFightTextBox(textParam);
    missSound.play();
  }
  
};
// function to get damaged by the monsters
const getAttacked = () => {
  if(Math.floor(Math.random() * 100 >= currentMonsterMissChance)) {
    playerHealth = playerHealth - currentMonsterDamage;
    playerHealthText.textContent = playerHealth
    textParam = `Monster hit you for ${currentMonsterDamage} damage`
    addRowToFightTextBox(textParam);
    getAttackedSound.play()
  }else {
    textParam = "Monster missed"
    addRowToFightTextBox(textParam);
    missSound.play();
  }
    
  };
// function to wait between attacks
const intervalOfTime = () => {
  attackBtn.disabled = true;
  attackBtn.textContent = "."
     setTimeout(function () {
     attackBtn.textContent += ".";
  }, 500);
  setTimeout(function () {
    attackBtn.textContent += ".";
 }, 750);
  setTimeout(function () {
    attackBtn.textContent += ".";
 }, 1000);
 setTimeout(function () {
  attackBtn.textContent += ".";
}, 1500);
    setTimeout(function () {
      attackBtn.textContent = "Attack";
      //turn the  button back on
      attackBtn.disabled  = false;
  }, 1500);
  };
// function to attack current monster
attackBtn.addEventListener("click",() => {
const damageCurrentMonster = () => {
    attack();
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
  if(currentMonsterHealth <= 0) {
    fightCurrentMonster();
    // slayedSlimes++
    // slayedSlimesText.textContent = slayedSlimes;
    // textParam =`You slayed ${slayedSlimes} slimes`;
    // addRowToFightTextBox(textParam);
    console.log(`Successfully slayed ${currentMonsterName}`);
    textParam = `Gained ${currentMonsterGoldGiven} gold`

    addRowToFightTextBox(textParam)
    playerGold += currentMonsterGoldGiven;
    playerGoldText.textContent = playerGold
  };
  return
  };
  applyDamageFromWeapon();
  intervalOfTime();
  setTimeout(damageCurrentMonster,1600);
  setTimeout(intervalOfTime,1600)
  setTimeout(getAttacked,3200)
});


//display the shop screen
goShopBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "none";
  screenFight.style.display = "none"
  screenFinalBoss.style.display = "none";
  screenShop.style.display = "flex";
});

// function to apply the damage using includes to check if the ID of a weapon in the player's owned weapons array
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
const applyHPFromArmor = () => {
  if(ownedArmorArray.includes(ArmorInventoryArray[0].armorID)) {
    playerMaxHealth = ArmorInventoryArray[0].maxHPGiven;
    playerMaxHealthText.textContent = playerMaxHealth;
    playerOwnedArmorText.textContent = ArmorInventoryArray[0].armorName;
    playerStatsMaxHPText.textContent = ArmorInventoryArray[0].maxHPGiven;
  }else if(ownedArmorArray.includes(ArmorInventoryArray[1].armorID)) {
    playerMaxHealth = ArmorInventoryArray[1].maxHPGiven;
    playerMaxHealthText.textContent = playerMaxHealth;
    playerOwnedArmorText.textContent = ArmorInventoryArray[1].armorName;
    playerStatsMaxHPText.textContent = ArmorInventoryArray[1].maxHPGiven;
  }else if(ownedArmorArray.includes(ArmorInventoryArray[2].armorID)) {
    playerMaxHealth = ArmorInventoryArray[2].maxHPGiven;
    playerMaxHealthText.textContent = playerMaxHealth;
    playerOwnedArmorText.textContent = ArmorInventoryArray[2].armorName;
    playerStatsMaxHPText.textContent = ArmorInventoryArray[2].maxHPGiven;
  }else if(ownedArmorArray.includes(ArmorInventoryArray[3].armorID)) {
    playerMaxHealth = ArmorInventoryArray[3].maxHPGiven;
    playerMaxHealthText.textContent = playerMaxHealth;
    playerOwnedArmorText.textContent = ArmorInventoryArray[3].armorName;
    playerStatsMaxHPText.textContent = ArmorInventoryArray[3].maxHPGiven;
  }else if(ownedArmorArray.includes(ArmorInventoryArray[4].armorID)) {
    playerMaxHealth = ArmorInventoryArray[4].maxHPGiven;
    playerMaxHealthText.textContent = playerMaxHealth;
    playerOwnedArmorText.textContent = ArmorInventoryArray[4].armorName;
    playerStatsMaxHPText.textContent = ArmorInventoryArray[4].maxHPGiven;
  }
};
// function to buy items
const buyItems = () => {
  // function to buy weapons
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
      };
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
// function to buy armors
const buyArmors = () => {

  const buyArmor1 = () => {
      buyArmor1Btn.addEventListener("click", () => {
        if(playerGold >= ArmorInventoryArray[0].armorCost) {
          playerGold -= ArmorInventoryArray[0].armorCost;
          playerGoldText.textContent = playerGold;
          ownedArmorArray = [];
          ownedArmorArray.push(ArmorInventoryArray[0].armorID);
          console.log(ownedArmorArray);  
          applyHPFromArmor();
        }else {
          alert("not enough moola")
        };
    });
  };
  const buyArmor2 = () => {
    buyArmor2Btn.addEventListener("click", () => {
      if(playerGold >= ArmorInventoryArray[1].armorCost) {
        playerGold -= ArmorInventoryArray[1].armorCost;
        playerGoldText.textContent = playerGold;
        ownedArmorArray = [];
        ownedArmorArray.push(ArmorInventoryArray[1].armorID);
        console.log(ownedArmorArray);  
        applyHPFromArmor();
      }else {
        alert("not enough moola")
      };
  });
  };
  const buyArmor3 = () => {
    buyArmor3Btn.addEventListener("click", () => {
      if(playerGold >= ArmorInventoryArray[2].armorCost) {
        playerGold -= ArmorInventoryArray[2].armorCost;
        playerGoldText.textContent = playerGold;
        ownedArmorArray = [];
        ownedArmorArray.push(ArmorInventoryArray[2].armorID);
        console.log(ownedArmorArray);  
        applyHPFromArmor();
      }else {
        alert("not enough moola")
      };
  });
  };
  const buyArmor4 = () => {
    buyArmor4Btn.addEventListener("click", () => {
      if(playerGold >= ArmorInventoryArray[3].armorCost) {
        playerGold -= ArmorInventoryArray[3].armorCost;
        playerGoldText.textContent = playerGold;
        ownedArmorArray = [];
        ownedArmorArray.push(ArmorInventoryArray[3].armorID);
        console.log(ownedArmorArray);  
        applyHPFromArmor();
      }else {
        alert("not enough moola")
      };
  });
  };
  const buyArmor5 = () => {
    buyArmor5Btn.addEventListener("click", () => {
      if(playerGold >= ArmorInventoryArray[4].armorCost) {
        playerGold -= ArmorInventoryArray[4].armorCost;
        playerGoldText.textContent = playerGold;
        ownedArmorArray = [];
        ownedArmorArray.push(ArmorInventoryArray[4].armorID);
        console.log(ownedArmorArray);  
        applyHPFromArmor();
      }else {
        alert("not enough moola")
      };
  });
  };
  buyArmor1();
  buyArmor2();
  buyArmor3();
  buyArmor4();
  buyArmor5();
};
buyArmors();
// function to buy potions
const buyPotions = () => {

  const buyPotion1 = () => {
    buyPotion1Btn.addEventListener("click",() => {
      if(playerGold >= 15) {
        playerGold -= 15;
        playerGoldText.textContent = playerGold;
        playerHealth += 20;
        playerHealthText.textContent = playerHealth;
        maxHealthCheck();
      }else {
        alert("not enough moola");
      }
    })
  }
  buyPotion1();
}
buyPotions();
};
buyItems();
// function to keep hp under mx hp
const maxHealthCheck = () => {
  if(playerHealth >= playerMaxHealth) {
    playerHealth = playerMaxHealth;
    playerHealthText.textContent = playerHealth;
  }
};
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
  };
  applyDamageFromWeapon();
  applyHPFromArmor();
});
  






 