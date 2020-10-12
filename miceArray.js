
var defaultValue = 5;

let miceValues = new Map([
/* ==============================
Indigenous Mice
============================== */
	["White", defaultValue],
	["Grey", defaultValue],
	["Brown", defaultValue],
	["Lightning Rod", defaultValue],
	["Cowardly", defaultValue],
	["Field", defaultValue],
	["Spotted", defaultValue],
	["Tiny", 10],
	["Flying", 8],
	["Scruffy", defaultValue],
	["Dwarf", defaultValue],
	["Speedy", 8],
	["Magic", 30],
	["Spud", defaultValue],
	["Steel", defaultValue],
	["Pugilist", defaultValue],
	["Longtail", defaultValue],
	["Nibbler", 35],
	["Farmhand", 35],
	["Burglar", defaultValue],
	["Master Burglar", defaultValue],
	["Captain Croissant", defaultValue],
	["Pirate", defaultValue],
	
/* ==============================
Mountain Mice
============================== */
	["Pebble", 15],
	["Frozen", defaultValue],
	["Fog", 20],
	["Frosty Snow", 35],
	["Granite", defaultValue],
	["Gold", defaultValue],
	["Diamond", defaultValue],
	["Silvertail", 10],
	["Craggy Ore", defaultValue],
	["Slope Swimmer", defaultValue],
	["Mountain", 8],
	["Abominable Snow", defaultValue],
	
/* ==============================
Whisker Woods
============================== */
	["Moosker", defaultValue],
	["Wiggler", defaultValue],
	["Sylvan", defaultValue],
	["Frog", defaultValue],
	["Chameleon", defaultValue],
	["Bear", defaultValue],
	["Shaman", defaultValue],
	["Treant", defaultValue],
	["Curious Chemist", defaultValue],
	["Wicked Witch of Whisker Woods", defaultValue],
	["Elven Princess", defaultValue],
	["Cherry", defaultValue],
	["Foxy", 30],
	["Goblin", defaultValue],
	["Eagle Owl", defaultValue],
	["Cyclops", defaultValue],
	["Goldleaf", 15],
	["Centaur", defaultValue],
	["Tiger", 25],
	["Fairy", defaultValue],
	["Nomad", 20],
	["Troll", 20],
	["Harpy", 20],
	["Silth", 60],

/* ==============================
Laboratory
============================== */
	["Squeaker Bot", defaultValue],
	["Mutated White", defaultValue],
	["Mutated Grey", defaultValue],
	["Mutated Brown", defaultValue],
	["Clumsy Chemist", defaultValue],
	["Sludge Scientist", defaultValue],
	["Bionic", defaultValue],
	["Monster", defaultValue],
	["Mutated Mole", defaultValue],
	
/* ==============================
Mousoleum
============================== */
	["Gluttonous Zombie", defaultValue],
	["Zombie", defaultValue],
	["Coffin Zombie", defaultValue],
	["Ravenous Zombie", defaultValue],
	["Bat", defaultValue],
	["Giant Snail", defaultValue],
	["Ghost", defaultValue],
	["Vampire", defaultValue],
	["Mummy", defaultValue],
	["Lycan", defaultValue],
	["Mousevina von Vermin", defaultValue],
	
/* ==============================
Town of Digby
============================== */
	["Mole", 15],
	["Nugget", defaultValue],
	["Core Sample", defaultValue],
	["Rock Muncher", defaultValue],
	["Industrious Digger", defaultValue],
	["Stone Cutter", defaultValue],
	["Demolitions", defaultValue],
	["Miner", defaultValue],
	["Lambent Crystal", 8],
	["Itty-Bitty Burroughs", defaultValue],
	["Subterranean", 15],
	["Big Bad Burroughs", 60],
	
/* ==============================
Furoma
============================== */
	["Hapless", 5],
	["Worker", 35],
	["Ninja", defaultValue],
	["Dumpling Chef", 70],
	["Archer", defaultValue],
	["Kung Fu", defaultValue],
	["Monk", defaultValue],
	["Samurai", defaultValue],
	["Student of the Cheese Belt", 8],
	["Student of the Cheese Claw", 8],
	["Student of the Cheese Fang", 8],
	["Assassin", 100],
	["Master of the Cheese Belt", defaultValue],
	["Master of the Cheese Claw", defaultValue],
	["Master of the Cheese Fang", defaultValue],
	["Master of the Dojo", defaultValue],
	["Dojo Sensei", defaultValue],
	
/* ==============================
Forgotten Mice
============================== */
	["Skeleton", defaultValue],
	["Realm Ripper", defaultValue],
	["Keeper's Assistant", defaultValue],
	["Keeper", defaultValue],
	["Gargoyle", defaultValue],
	["Ooze", defaultValue],
	["Scavenger", defaultValue],
	["Spider", defaultValue],
	["Sorcerer", 8],
	["Spectre", 8],
	["Terror Knight", defaultValue],
	["Golem", 8],
	["Gate Guardian", 8],
	["Gorgon", 8],
	["Reaper", 50],
	["Wight", 25],
	["Lich", 25],
	["Chrono", 120],
	["Acolyte", 60],
	
/* ==============================
SS Huntington
============================== */
	["Swabbie", defaultValue],
	["Pinchy", defaultValue],
	["Briegull", defaultValue],
	["Shelder", 200],
	["Shipwrecked", defaultValue],
	["Salt Water Snapper", defaultValue],
	["Cook", 60],
	["Mermouse", 65],
	["Bottled", 8],
	["Water Nymph", defaultValue],
	["Buccaneer", defaultValue],
	["Siren", 8],
	["Captain", defaultValue],
	["Squeaken", 25],
	["Leviathan", 25],
	["Hydra", 15],

/* ==============================
Tribal Isles
============================== */
	["Taleweaver", defaultValue], // Elub Shore
	["Scout", defaultValue],
	["Alchemist", defaultValue],
	["Pack", defaultValue],
	["Mystic", defaultValue],
	["Alnitak", defaultValue],
	["Soothsayer", defaultValue],
	["Vanquisher", defaultValue],
	["Elder", 10],
	["Protector", 8],
	["Champion", 8],
	["Elub Chieftain", 15],
	
	["Narrator", defaultValue], // Nerg Plains
	["Pathfinder", defaultValue],
	["Caretaker", defaultValue],
	["Finder", defaultValue],
	["Beast Tamer", defaultValue],
	["Alnilam", defaultValue],
	["Conjurer", defaultValue],
	["Conqueror", defaultValue],
	["Grandfather", 10],
	["Defender", 8],
	["Slayer", 8],
	["Nerg Chieftain", 15],
	
	["Trailblazer", defaultValue], // Derr Dunes
	["Wordsmith", defaultValue],
	["Healer", defaultValue],
	["Grunt", defaultValue],
	["Spellbinder", defaultValue],
	["Mintaka", defaultValue],
	["Seer", defaultValue],
	["Renegade", defaultValue],
	["Aged", 10],
	["Guardian", 8],
	["Gladiator", 8],
	["Derr Chieftain", 15],
	

/* ==============================
Jungle of Dread and Dracano
============================== */
	["PygmyWrangler", 30],
	["Swarm of Pygmy Mice", defaultValue],
	["Primal", defaultValue],
	["Stonework Warrior", defaultValue],
	["Jurassic", defaultValue],
	["Chitinous", defaultValue],
	["Magma Carrier", defaultValue],
	["Fetid Swamp", defaultValue],
	["Whelpling", defaultValue],
	["Dracnoic Warden", 10],
	["Dragon", 10],
	
/* ==============================
Balack's Cove
============================== */
	["Davy Jones", defaultValue],
	["Tidal Fisher", 15],
	["Twisted Fiend", defaultValue],
	["Brimstone", defaultValue],
	["Riptide", defaultValue],
	["Enslaved Spirit", defaultValue],
	["Elub Lich", 15],
	["Nerg Lich", 15],
	["Derr Lich", 15],
	["Balack the Banished", 60],
	
/* ==============================
King's Gauntlet
============================== */
	["Wound Up White", defaultValue], // tier 1
	["Hapless Marionette", defaultValue],
	["Toy Sylvan", defaultValue],
	["Clockwork Samurai", defaultValue],
	["Sock Puppet Ghost", defaultValue],
	["Puppet Master", defaultValue],
	
	["Impersonator", defaultValue], // tier 2
	["Lockpick", defaultValue],
	["Bandit", defaultValue],
	["Stealth", defaultValue],
	["Escape Artist", defaultValue],
	["Rogue", defaultValue],
	
	["Fencer", defaultValue], // tier 3
	["Page", defaultValue],
	["Berserker", defaultValue],
	["Knight", defaultValue],
	["Phalanx", defaultValue],
	["Cavalier", defaultValue],
	
	["Cowbell", defaultValue], // tier 4
	["Drummer", defaultValue],
	["Dancer", defaultValue],
	["Fiddler", defaultValue],
	["Guqin Player", defaultValue],

	["Black Mage", defaultValue], // tier 5
	["Terra", defaultValue],
	["Ignis", defaultValue],
	["Zephyr", defaultValue],
	["Aquos", defaultValue],
	
	["Sacred Shrine", defaultValue], // tier 6
	["White Mage", defaultValue],
	["Paladin", defaultValue],
	
	["Necromancer", defaultValue], // tier 7
	["Fiend", defaultValue],
	
	["Eclipse", defaultValue], // tier 8
	
/* ==============================
Seasonal Garden only in Zugzwang Scroll Case?
============================== */

/* ==============================
Zugzwang Tower
============================== */
	["Chess Master", 20],
	["Mystic Pawn", defaultValue],
	["Mystic Knight", 8],
	["Mystic Bishop", 10],
	["Mystic Rook", 15],
	["Mystic Queen", 20],
	["Mystic King", 120],
	["Technic Pawn", defaultValue],
	["Technic Knight", 8],
	["Technic Bishop", 10],
	["Technic Rook", 15],
	["Technic Queen", 20],
	["Technic King", 120],	
	
/* ==============================
Crystal Library
============================== */
	["Explorator", defaultValue],
	["Pocketwatch", defaultValue],
	["Bookborn", 8],
	["Tome Sprite", 35],
	["Flutterby", defaultValue],
	["Infiltrator", defaultValue],
	["Effervescent", defaultValue],
	["Walker", defaultValue],
	["Steam Grip", defaultValue],
	["Scribe", defaultValue],
	["Aether", 140],
	["M400", 250],
	["Zurreal the Eternal", 115],
	
/* ==============================
Iceberg
============================== */
	["Living Salt", 15], // misc
	["Frostlance Guard", 20],
	["Frostwing Commander", 20],
	["Icewing", 170],
	["Deep", 230],
	
	["Incompetent Ice Climber", defaultValue], // Bergling
	["Snow Soldier", defaultValue],
	["Polar Bear", defaultValue],
	["Snow Slinger", defaultValue],
	["Iceblock", defaultValue],
	["Wolfskie", defaultValue],
	["Snowblind", defaultValue],
	["Snow Sniper", defaultValue],
	["Living Ice", 10],
	
	["Chipper", defaultValue], // Tunnel Rat
	["Icebreaker", defaultValue],
	
	["Snow Bowler", defaultValue], // Brute
	["Yeti", defaultValue],
	["Mammoth", 15],
	
	["Saboteur", defaultValue], // Bomb Squad
	["Stickybomber", 15],
	["Heavy Blaster", 15],
	
	["Water Wielder", 20], // Zealot
	["Iceblade", 20],
	
	["Lord Splodington", 20], // Generals
	["Princess Fist", 20],
	["Lady Coldsnap", 20],
	["General Drheller", 20],
	
/* ==============================
Varmint Valley
============================== */	
	["Bounty Hunter", defaultValue],
	["Lasso Cowgirl", defaultValue],
	["Prospector", defaultValue],
	["Pyrite", 65],
	["Ruffian", defaultValue],
	["Saloon Gal", defaultValue],
	["Shopkeeper", defaultValue],
	["Tumbleweed", defaultValue],
	
	["Bartender", 8], // Crew
	["Coal Shoveller", 8],
	["Farrier", 8],
	["Parlour Player", 8],
	["Stuffy Banker", 8],
	["Tonic Salesman", 8],
	["Upper Class Lady", 8],
	
	// Ringleaders
	// Train Robbers
	
/* ==============================
Fort Rox
============================== */		
	["Meteorite Snacker", defaultValue], // daytime
	["Mining Materials Manager", 10],
	["Mischievous Meteorite Miner", defaultValue],
	["Hardworking Hauler", defaultValue],
	["Meteorite Miner", defaultValue],
	["Meteorite Mover", defaultValue],
	
	["Night Shift Materials Manager", 10], // Weremice
	["Werehauler", defaultValue],
	["Wealthy Werewarrior", defaultValue],
	["Mischievous Wereminer", defaultValue],
	["Alpha Weremouse", defaultValue],
	["Reveling Lycanthrope", defaultValue],
	["Wereminer", defaultValue],
	
	["Hypnotized Gunslinger", 8], // Cosmic Critters
	["Arcane Summoner", 8],
	["Night Watcher", 8],
	["Cursed Taskmaster", 8],
	["Meteorite Golem", 8],
	["Meteorite Mystic", 8],
	
	["Battering Ram", defaultValue],
	["Nightmancer", 20],
	["Nightfire", 20],
	["Dawn Guardian", 10],
	["Monster of the Meteor", 10],
	["Heart of the Meteor", defaultValue],
	
/* ==============================
Fiery Warpath
============================== */	
	["Desert Archer", defaultValue],
	["Flame Archer", 8],
	["Crimson Ranger", 10],
	["Flame Ordnance", 12],
	["Sand Cavalry", 8],
	["Sandwing Cavalry", 10],
	["Inferno Mage", 8],
	["Magmarage", 10],
	["Vanguard", defaultValue],
	["Sentinel", 8],
	["Crimson Watch", 10],
	["Desert Soldier", defaultValue],
	["Flame Warrior", 8],
	["Crimson Titan", 10],
	["Caravan Guard", 20],
	["Crimson Commander", 10],
	["Gargantuamouse", 25],
	["Artillery Commander", defaultValue],
	["Theurgy Warden", 10],
	["Warmonger", 290],
	
/* ==============================
Muridae Market
============================== */	
	["Snake Charmer", defaultValue],
	["Pie Thief", defaultValue],
	["Desert Architect", 20],
	["Falling Carpet", defaultValue],
	["Spice Merchant", defaultValue],
	["Desert Nomad", 50],
	["Limestone Miner", defaultValue],
	["Lumberjack", defaultValue],
	["Glass Blower", defaultValue],
	["Blacksmith", 15],
	["Mage Weaver", 15],
	["Market Guard", defaultValue],
	["Market Thief", defaultValue],
	
/* ==============================
Living Garden / Twisted Garden
============================== */		
	["Thistle", defaultValue],
	["Bark", defaultValue],
	["Calalilly", defaultValue],
	["Shroom", defaultValue],
	["Camoflower", defaultValue],
	["Strawberry Hotcakes", defaultValue],
	["Thirsty", 10],
	
	["Thorn", 8],
	["Barkshell", 8],
	["Twisted Lilly", 8],
	["Fungal Spore", 8],
	["Camofusion", 8],
	["Twisted Hotcakes", 8],
	["Dehydrated", 8],
	["Carmine the Apothecary", 10],
	["Twisted Carmine", 10],
	["Shattered Carmine", 300],
	
/* ==============================
Lost City / Cursed City
============================== */	
	["Ethereal Enchanter", defaultValue],
	["Ethereal Engineer", defaultValue],
	["Ethereal Thief", defaultValue],
	["Ethereal Librarian", defaultValue],
	["Cursed", defaultValue],
	["Essence Collector", 10],
	
	["Cursed Enchanter", 8],
	["Cursed Engineer", 8],
	["Cursed Thief", 8],
	["Cursed Librarian", 10],
	["Corrupt", 15],
	["Essence Guardian", 8],
	["Dark Magi", 325],
	
/* ==============================
Sand Dunes / Sand Crypts
============================== */	
	["Sand Pilgrim", defaultValue],
	["Grubling Herder", 15],
	["Spiky Devil", defaultValue],
	["Quesodillo", defaultValue],
	["Dunehopper", defaultValue],
	["Grubling", 8],
	
	["Sarcophamouse", 8],
	["Sand Colossus", 8],
	["Serpentine", 8],
	["Scarab", 8],
	["King Grub", 55],
	["King Scarab", 325],
	
/* ==============================
Queso Canyon
============================== */	
	["Sleepy Merchant", 25], // Queso River
	["Tiny Saboteur", defaultValue],
	["Pump Raider", defaultValue],
	["Croquet Crusher", 60],
	["Queso Extractor", defaultValue],
	["Queen Quesada", 10],
	
	["Spice Seer", defaultValue], // Prickly Plains
	["Old Spice Collector", defaultValue],
	["Spice Farmer", defaultValue],
	["Granny Spice", defaultValue],
	["Spice Sovereign", defaultValue],
	["Spice Finder", defaultValue],
	["Spice Raider", defaultValue],
	["Spice Reaper", defaultValue],
	["Inferna, The Engulfed", defaultValue],
	
	["Chip Chiseler", defaultValue], // Cantera Quarry
	["Tiny Toppler", defaultValue],
	["Ore Chipper", defaultValue],
	["Rubble Rummager", defaultValue],
	["Nachore Golem", defaultValue],
	["Rubble Rouser", defaultValue],
	["Grampa Golem", defaultValue],
	["Fiery Crusher", defaultValue],
	["Nachous, The Molten", defaultValue],
	
	["Fuzzy Drake", defaultValue], // Cork Collectors
	["Cork Defender", defaultValue],
	["Burly Bruiser", defaultValue],
	["Corky, the Collector", 280],
	["Horned Cork Hoarder", 15],
	["Rambunctious Rain Rumbler", 20],
	["Corkataur", 25],
	
	["Steam Sailor", defaultValue], // Pressure Set
	["Warming Wyvern", defaultValue],
	["Vaporior", 10],
	["Pyrehyde", 12],
	["Emberstone Scaled", 25],
	
	["Mild Spicekin", 8], // Geyser
	["Sizzle Pup", 8],
	["Smoldersnap", 10],
	["Bearded Elder", 10],
	["Ignatia", 10],
	["Cinderstorm", 10],
	["Bruticus, the Blazing", 10],
	["Stormsurge, the Vile Tempest", 10],
	["Kalor'ignis of the Geyser", 5],
	
/* ==============================
Sunken City Only Predator Pack
============================== */	
	["Carnivore", 35],
	["Serpent Monster", 35],
	["Ancient of the Deep", 40],
	["Tritus", 100],
	
	
	["default", defaultValue],

	
	
	






	

]);

