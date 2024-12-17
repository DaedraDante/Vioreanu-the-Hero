
//scenes
const screenMainMenu = document.getElementById("screen-main-menu");
const screenFight = document.getElementById("screen-fight");
const screenShop = document.getElementById("screen-shop");
const screenFinalBoss = document.getElementById("screen-final-boss")

//buttons
const goFightBtn = document.getElementById("go-fight-btn");
const goShopBtn = document.getElementById("go-shop-btn");
const goFinalBossBtn = document.getElementById("go-final-boss-btn");

const attackBtn = document.getElementById("attack-btn");
let playerDamage = 35;
let playerHealth = 100;
let playerHealthText = document.getElementById("player-health-text");
playerHealthText.textContent = `You have ${playerHealth} HP`;
let playerGold = 0;
let playerGoldText = document.getElementById("player-gold-text");
playerGoldText.textContent = `You have ${playerGold} gold`;
const fightTextBox = document.getElementById("fight-text-box")
let currentMonster;
let currentMonsterName;
let currentMonsterImg = document.getElementById("current-monster-img")
let currentMonsterHealth;
let currentMonsterNameText = document.getElementById("current-monster-name-text");
let currentMonsterHealthText = document.getElementById("current-monster-health-text");
let currentMonsterGoldGiven;
currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
let slayedSlimes = 0;
let slayedWolves = 0;
let playerWeaponInventoryArray = [];
let monsterArray = [
  {
    name:"Slime",
    health:10,
    gold:4,
    img:"VTHslime.webp"
  },
  {
    name:"Wolf",
    health:35,
    gold:14,
    img:"https://i.pinimg.com/originals/46/65/8f/46658ff0e1a9444cf877574cf16c14ba.png"
  },
  {
    name:"Goblin",
    health:80,
    gold:28,
    img:""
  },
  {
    name:"Orc",
    health:210,
    gold:52,
    img:""
  }
];


 //display the fight screen
 goFightBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "none";
  screenShop.style.display = "none";
  screenFinalBoss.style.display = "none";
  screenFight.style.display = "flex";
  fightCurrentMonster();
});
const addRowToFightTextBox = (textParam) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent +=  `${textParam}`
  fightTextBox.appendChild(newParagraph)
}
const fightCurrentMonster = () => {
    if(slayedSlimes <= 10) {
        fightSlime();
       slayedSlimes++
          textParam =`you slayed ${slayedSlimes} slimes`;
          addRowToFightTextBox(textParam);
      }
    if(slayedSlimes >= 10) {
      fightWolf();
      slayedWolves++
          textParam =`you slayed ${slayedWolves} wolves`;
          addRowToFightTextBox(textParam);
          console.log(`you slayed ${slayedWolves} wolves`);
      }
        if(slayedWolves >= 10) {
          console.log("u slayed 10 wolves good job bro");
      }
  }
    const fightSlime = () => {
    currentMonster = "slime"
    currentMonsterName = monsterArray[0].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[0].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[0].gold
    currentMonsterImg.src = monsterArray[0].img
  }
  const fightWolf = () => {
    currentMonster = "wolf";
    currentMonsterName = monsterArray[1].name;
    currentMonsterNameText.textContent = currentMonsterName;
    currentMonsterHealth = monsterArray[1].health;
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
    currentMonsterGoldGiven = monsterArray[1].gold;
    currentMonsterImg.src = monsterArray[1].img
  }


// function to attack current monster
attackBtn.addEventListener("click",() => {
  const damageCurrentMonster = () => {
    currentMonsterHealth = currentMonsterHealth - playerDamage
    currentMonsterHealthText.textContent = `Health: ${currentMonsterHealth}`;
  if(currentMonsterHealth <= 0) {
    fightCurrentMonster();
    console.log(`Successfully slayed ${currentMonsterName}`);
    playerGold += currentMonsterGoldGiven;
    playerGoldText.textContent = `You have ${playerGold} gold`
  };
  return
  };
  damageCurrentMonster();
})

//display the shop screen
goShopBtn.addEventListener("click",() => {
  screenMainMenu.style.display = "none";
  screenFight.style.display = "none"
  screenFinalBoss.style.display = "none";
  screenShop.style.display = "block";
});



//display the final boss screen
goFinalBossBtn.addEventListener("click",() => {
 screenMainMenu.style.display = "none";
 screenFight.style.display = "none";
 screenShop.style.display = "none";
 screenFinalBoss.style.display = "block";
})

  







 