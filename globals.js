var charA = {
  name: "",
  class: "",
  order: 0,
  level: 1,
  //startLife: ,currLife: ,gold: , attack: ,defense: 
  lantern: false,
  bandaged: false,
  //abilities
  armEquipped: [],
  armStored: [],
  weapEquipped: [],
  weapStored: [],
  //loot limit
  //spells/scrolls/powers
  quest: null,
  clues: 0,
  status: "alive"
}

const classes = [
  {
    name: "warrior",
    trait: "A warrior always adds his level to his Attack rolls",
    armorAllowed: "shield, light armor, heavy armor", 
    weaponsAllowed: "any",
    startEquip: "light armor, shield and a hand weapon. He may trade in his shield and hand weapon for a two-handed weapon or a bow if he wants.",
    start_wealth: "2d6 gold pieces",
    life: "6 + level"
  }
]

const armor = [
  {
    name: "heavy armor",
    id: "heavarm",
    effect: "+2 defense",
    note: "cannot be reassigned if character dies",
    reassign: false,
    // how to program effect?
    cost: 30,
    value: 15
  }
]

const weapons = [
  {
    name: "bow",
    id: "bow",
    type: "slash",
    description: "This lets a character perform a single attack before the monsters can act EVEN when the monsters act before the party. Then the bow may no longer be used as the monsters and the characters are assumed to be in close combat. The bow user will need to spend a turn to put away the bow and draw another weapon.",
    twoHands: true,
    ranged: true,
    cost: 15,
    value: 7
  },
  {
    name: "hand weapon",
    id: "handweap",
    type: "",
    description: "choose crushing or slashing",
    twoHands: false,
    ranged: true,
    cost: 6,
    value: 3
  }
]

const equipment = [
  {
    name: "bandage",
    id: "bandage",
    effect: "+1 life",
    description: "Each character can apply bandages once per adventure, healing one lost life. The effect of bandages is cumulative with magical healing from potions or spells. Bandages may not be applied during combat.",
    cost: 5,
    value: 2
  },
  {
    name: "blessing spell",
    id: "blessing",
    effect: "remove condition",
    description: "The characters pay the local church to cast a Blessing spell, to remove a game condition such as a curse or being turned to stone from a party member.",
    cost: 100,
    value: 50
  }
]

const entranceRooms = [

]

const rooms = [

]

const roomContents = [
  {
    name: "Treasure found",
    id: "content2",
    description: "Roll on the <a href=\"LINK\" onClick=\"FUNCTION\">Treasure table</a>",
    roll: 2,
  }
]

const specialFeatures = [
  {
    name: "Fountain",
    id: "specialFeat1",
    description: "All wounded characters recover 1 Life the first time they encounter a fountain in an adventure. Further fountains have no effect.",
    flag: 0,
    //how to program effect?
  }
]

const specialEvents = [
  {
    name: "Ghost",
    id: "specialEv1",
    description: "A ghost passes through the party. All characters must save versus level 4 fear or lose 1 life. A cleric adds his level to this roll."
  }
]

const treasure = [
  {
    name: "no treasure",
    id: "treas0",
    description: "no treasure found",
    roll: 0
  }
]

const magicTreasure = [
  {
    name: "Wand of Sleep",
    id: "magTreas1",
    description: "User may cast Sleep spell 3 times before its energy is depleted. Only wizards and elves may use it. Add the user’s level to determine the spell roll, as you would do for a Sleep spell cast by that character.",
    roll: 1
  }
]

const vermin = [
  {
    name: "rats",
    id: "vermin1",
    qty: "3d6",
    level: 1,
    treasure: 0,
    reactions: "1-3 flee, 4-6 fight",
    description: "Level 1, no treasure. Any character wounded has a 1 in 6 chance of losing 1 additional life due to an infected wound.",
    special: "Any character wounded has a 1 in 6 chance of losing 1 additional life due to an infected wound.",
    moraleCheck: true
  }
]

const minions = [
  {
    name: "skeletons",
    id: "minion1a",
    qty: "d6 + 2",
    level: 3,
    treasure: 0,
    undead: true,
    reactions: "always fight to the death",
    modifier1: "crushing weapons +1 attack",
    modifier2: "arrows -1 attack",
    // how to program modifiers?
    moraleCheck: false
  }
]

const boss = [
  {
    name: "mummy",
    id: "boss1",
    life: 4,
    level: 5,
    attacks: 2,
    treasure: 2,
    reactions: "always fight",
    moraleCheck: false,
    special: "Any character killed by a mummy becomes another mummy and must be fought by the party. Mummies are attacked at +2 by the Fireball spell."
    // how to program?
  }
]

const weirdMonsters = [
  {
    name: "minotaur",
    id: "weird1",
    life: 4,
    level: 5,
    attacks: 2,
    treasure: 1,
    reactions: "1-2 bribe (60 gp), 3-4 fight, 6 fight to the death.",
    moraleCheck: true,
    description: "Level 5, 4 life points, 2 attacks, normal treasure. Due to the power of his bull-rush charge, the first Defense roll against a minotaur is at -1. Minotaurs love to eat halflings. Halflings may not use Luck in an encounter with a Minotaur."
  }
]

const quests = [

]