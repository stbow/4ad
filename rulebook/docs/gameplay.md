# Gameplay Procedure

## Setup and Entering the Dungeon

[Creating characters](characters.md)

[Entering the dungeon](exploring.md)

## Moving Through the Dungeon and Room Building

```mermaid
swimlane-beta TD
    subgraph SuccessC [If Successful...]
        r3cs@{ shape: flag, label: "If survive, roll D6 Treasure Table" }
        r4cs@{ shape: cloud, label: "Can Search" }
        r5cs@{ shape: cloud, label: "Can Search" }
        r6cs@{ shape: flag, label: "If win, roll D6 Treasure Table" }
        r7cs@{ shape: flag, label: "If win, roll D6 Treasure Table" }
        r8cs@{ shape: cloud, label: "Can Search" }
        r9cs@{ shape: cloud, label: "Can Search" }
        r10cs@{ shape: cloud, label: "Can Search" }
        r11cs[If win, roll D6 for leveling up + D6 Treasure Table]
        r12cs@{ shape: cloud, label: "Can Search" }
    end

    subgraph Corridor
        noteC(["`*if corridor...*`"])
        r2c[Roll D6 Treasure Table] 
        r3c[Roll D6 Traps Table]
        r4c[Empty]
        r5c[Empty. Roll D6 Special Feature Table]
        r6c[Roll D6 Vermin Table]
        r7c[Roll D6 Minions Table]
        r8c[Empty]
        r9c[Empty]
        r10c[Empty]
        r11c[Roll D6 Boss Table]
        r12c[Empty]
    end

    subgraph Roll
        st[Roll D66 for room] ==>
        type[Roll 2D6:] ==>
        r2(2) ---
        r3(3) ---
        r4(4) ---
        r5(5) ---
        r6(6) ---
        r7(7) ---
        r8(8) ---
        r9(9) ---
        r10(10) ---
        r11(11) ---
        r12(12)
    end

    subgraph Room
        noteR(["`*if room...*`"])
        r2r[Roll D6 Treasure Table] 
        r3r[Roll D6 Traps Table]
        r4r[Roll D6 Special Events Table] 
        r5r[Empty. Roll D6 Special Feature Table]
        r6r[Roll D6 Vermin Table]
        r7r[Roll D6 Minions Table]
        r8r[Roll D6 Minions Table]
        r9r[Empty]
        r10r[Roll D6 Weird Monsters Table]
        r11r[Roll D6 Boss Table + 6 on D6 = Final]
        r12r["Dragons Lair (Boss Table)"]
    end

    subgraph SuccessR [If Successful...]
        r3rs@{ shape: flag, label: "If survive, roll D6 Treasure Table" }
        r5rs@{ shape: cloud, label: "Can Search" }
        r6rs@{ shape: flag, label: "If win, roll D6 Treasure Table" }
        r7rs@{ shape: flag, label: "If win, roll D6 Treasure Table" }
        r8rs@{ shape: flag, label: "If win, roll D6 Treasure Table" }
        r9rs@{ shape: cloud, label: "Can Search" }
        r10rs[If win, roll D6 for leveling up + D6 Treasure Table]
        r11rs[If win, roll D6 for leveling up + D6 Treasure Table]
        r12rs[If win, roll D6 for leveling up + D6 Treasure Table]
    end
    
    type -.-> noteC
    type -.-> noteR
    r2 --> r2c
    r2 --> r2r
    r3 --> r3c -.-> r3cs
    r3 --> r3r -.-> r3rs
    r4 --> r4c -.-> r4cs
    r4 --> r4r
    r5 --> r5c -.-> r5cs
    r5 --> r5r -.-> r5rs
    r6 --> r6c -.-> r6cs
    r6 --> r6r -.-> r6rs
    r7 --> r7c -.-> r7cs
    r7 --> r7r -.-> r7rs
    r8 --> r8c -.-> r8cs
    r8 --> r8r -.-> r8rs
    r9 --> r9c -.-> r9cs
    r9 --> r9r -.-> r9rs
    r10 --> r10c -.-> r10cs
    r10 --> r10r -.-> r10rs
    r11 --> r11c -.-> r11cs
    r11 --> r11r -.-> r11rs
    r12 --> r12c -.-> r12cs
    r12 --> r12r -.-> r12rs

    classDef dashedBorder stroke-dasharray: 5 5;
    class r10rs,r11cs,r11rs,r12rs dashedBorder;

    classDef invisible fill:#0000,stroke:#0000,color:#0000,display:none;
```

## Encounters

[Combat and encounters](combat.md)

## Quick Reference Sheet

Warrior: Any weapon, armor, shield. +L to attack rolls.

Cleric: + 1/2 L to attack rolls, +L vs undead. Light or heavy armor, shield, hand weapon, two-handed weapon, sling. Cast Blessing 3 times per adventure. Up to 3 times per adventure, heal d6+L life.

Rogue: +L to disarm traps and defense rolls. Light armor and weapons only. May not use shield. +L to attack rolls vs outnumbered minion.

Wizard: +L when attacking with spells, or on rolls to solve puzzles or riddles. Light weapons or sling only. No armor or shield. 2 spells +1/L.

Barbarian: +L to attack rolls. Shield, light armor, any weapon. No heavy armor. May not use magic items. Rage attack once per game: roll the attack die 3 times, choose best. Against a boss, a rage attack inflicts 2 wounds.

Elf: +L to Attack rolls and spells cast. Any armor, shield. 1 spell x L per adventure, only if wearing light armor and NOT using shield. +1 to attacks or spells vs orcs.

Dwarf: +L to Attack rolls, except with ranged weapons. +1 to Defense rolls vs trolls, ogres, and giants. +1 to attack vs goblins. Any armor, any weapon. Smell treasure: roll d6+L, on a 6+ determine treasure before deciding whether to attack. Greed: party with 2 or more dwarves may not bribe! Always assign at least one coin to every dwarf in the party, if possible. When selling gems or jewelry, get 20% more.

Halfling: +L to defense rolls vs giants, trolls, and ogres. Light armor, light weapons and slings only. No shields. L+1 luck points: spend 1 Luck to reroll a failed Attack or Defense or Treasure roll, or to run away from a combat without receiving an attack.

Attack procedure: (d6 + modifiers)/Monster level= number of minions slain. 1 is always a miss. 6 is always a hit.

Attacking a boss: d6+ modifiers= inflict 1 wound on boss if result is equal or better than level of boss. 1 is always a miss. 6 is always a hit.

Defense procedure: Roll d6, +1 if shield, +1 for light armor, +2 for heavy armor. Rogues add +L. If result is equal to or better than monster’s L, take no damage. A roll of 1 is always a failure, a 6 is always a success. On a failure, take damage and effects as per the monster’s description. Defense rolls during a withdrawal are at +1. Defense Roll Modifiers: Light armor +1, Heavy Armor+2, Shield+1, Rogue: add the rogue’s level, Dwarf defending against a troll or giant +1, Halfling defending against troll, giant, or ogre: add the halfling’s level. -1 if character is carrying more than allowed encumbrance.

Dice explosion: if a die rolls a 6, roll another d6 and add it.

Reactions: Your party may attack first (unless monster description says otherwise) OR wait to see what the monsters will do (roll on the monster’s Reaction table if this is the case).

Retreating from a fight: Possible only if there is a door to be closed/blocked between party and monsters. Monster get one last attack but your characters defend at +1.

Morale procedure: When minions lose more than half their number, or a boss loses more than half its life points, roll d6. 1-3 monsters flee, 4-6 monsters fight.
