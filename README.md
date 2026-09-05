/ (project root)
  index.html            ← tracker (existing)
  styles.css             ← shared palette/fonts (existing)
  globals.js              ← shared data: classes, armor, weapons, equipment, treasure, magicTreasure, vermin, minions, boss, weirdMonsters, quests, roomContents, etc.
  scripts.js              ← tracker logic (existing)

  /rulebook/
    index.html             ← landing page / table of contents
    getting-started.html
    character-creation.html
    combat.html
    exploring-dungeon.html
    progression.html
    reference-tables.html   ← the searchable/filterable one
    solo-gm-guidance.html
    appendix.html

    rulebook-styles.css    ← prose-specific styles (headings, cross-ref links, table layout) — extends styles.css, doesn't replace it
    rulebook-nav.js         ← injects the shared nav bar into every page
    rulebook-tables.js      ← renders + filters reference-tables.html from globals.js data


1. Core Mechanics — the stuff you need to understand before anything else makes sense, and what you look back at mid-game when a card says "save versus level 3 poison" or you draw a scroll

Dice codes, explosive six
Save versus...
Spells & scrolls (what they are, how casting works)

2. Character Creation

The 8 classes
Equipment

3. Exploring the Dungeon

Entrance rooms, room generation
Moving through the dungeon
Searching rooms, secret doors, hidden treasure, traps, locked doors

4. Combat & Encounters

How to attack, marching order, defense modifiers, who's attacked
Fleeing, monster reactions
When combat ends, looting

5. Progression & Endgame — merged, per your note

Leveling up
Fallen heroes, turned to stone, clues and dying characters
Splitting the party
Final boss, time limits, leaving the dungeon

6. Reference Tables — plain scrollable page, one table per section, hatred summary folded in as just another table

7. Appendix

FAQ
Shorthand symbols