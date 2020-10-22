
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
	["Black Widow", 120],
	
	["Winter Games", defaultValue],
	["Trampoline", defaultValue],
	["Hurdle", defaultValue],
	["Wave Racer", defaultValue],
	["Extreme Everysports", defaultValue],
	
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
	["Pygmy Wrangler", 30],
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
	["Living Ice", 20],
	
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

/* ==============================
Fungal Caverns
============================== */	
	["Sporeticus", 15],
	["Spore Muncher", 15],
	["Mouldy Mole", 15],
	["Spiked Burrower", 15],
	["Bitter Root", 8],
	["Mush", 8],
	["Quillback", 8],
	["Lumahead", 8],
	["Funglore", 8],
	["Mushroom Sprite", 10],
	["Floating Spore", 10],
	["Nightshade Masquerade", 25],

	["Cavern Crumbler", 10],
	["Stone Maiden", 10],
	["Crag Elder", 10],
	["Dirt Thing", 10],
	["Crystalline Slasher", 10],
	["Splintered Stone Sentry", 30], // 26 hunts with GGC
	["Shattered Obsidian", 20], // 17 hunts with GGC
	["Gemstone Worshipper", 60], // 57 hunts with GGC

	["Gemorpher", 8],
	["Crystal Controller", 10],
	["Crystalback", 10],
	["Crystal Cave Worm", 25],
	["Stalagmite", 15],

	["Crystal Golem", 30],
	["Crystal Queen", 12],
	["Crystal Lurker", 15],
	["Crystal Observer", 10],

	["Huntereater", 70],
	["Diamondhide", 250], // one person lf 250 another sniping for 23? 8%ar with diamond cheese
	["Crystal Behemoth", 30],

/* ==============================
Zokor
============================== */	
	["Lost Legionnaire", defaultValue],
	["Lost", defaultValue],
	["Reanimated Carver", 10],
	["Corridor Bruiser", 10],
	["Shadow Stalker", 10],

	["Mushroom Harvester", 10],
	["Mush Monster", 10],
	["Nightshade Nanny", 10],
	["Nightshade Fungalmancer", 15],

	["Summoning Scholar", 8],
	["Sanguinarian", defaultValue],
	["Mystic Guardian", 20],
	["Mystic Herald", 15],
	["Mystic Scholar", 20],
	["Ethereal Guardian", 15],
	["Ancient Scribe", 15],
	["Soul Binder", 220],

	["Drudge", 10],
	["Masked Pikeman", defaultValue],
	["Solemn Soldier", defaultValue],
	["Mind Tearer", 15],
	["Dark Templar", 10],
	["Battle Cleric", 8],
	["Sir Fleekio", 8],
	["Paladin Weapon Master", 220],

	["RR-8", 10],
	["Ash Golem", 10],
	["Tech Golem", 10],
	["Automated Stone Sentry", 20],
	["Fungal Technomorph", 30],
	["Exo-Tech", 10],
	["Matron of Machinery", 10],
	["Manaforge Smith", 220],

	["Hired Eidolon", 15],
	["Mimic", 10],
	["Treasure Brawler", 25],
	["Matron of Wealth", 20],
	["Molten Midas", 20],

	["Decrepit Tentacle Terror", defaultValue],
	["Retired Minotaur", 350],

/* ==============================
Zokor
============================== */	
	["Nightshade Maiden", defaultValue],
	["Spore Salesman", defaultValue],
	["Nightshade Flower Girl", defaultValue],

	["Breeze Borrower", defaultValue],
	["Windy Farmer", defaultValue],
	["Cloud Collector", defaultValue],
	["Rainwater Purifier", defaultValue],
	["Homeopathic Apothecary", defaultValue],

	["Wind Watcher", defaultValue],
	["Charming Chimer", defaultValue],
	["Fluttering Flutist", defaultValue],
	["Cycloness", defaultValue],
	["Wind Warrior", defaultValue],

	["Rain Collector", defaultValue],
	["Rain Wallower", defaultValue],
	["Rain Summoner", defaultValue],
	["Monsoon Maker", defaultValue],
	["Rainmancer", defaultValue],

	["Thunder Strike", defaultValue],
	["Violet Stormchild", defaultValue],
	["Thunderlord", defaultValue], // might not work because emoji in the name, but it's only in Mopi maps
	["Thundering Watcher", defaultValue],
	["Dragoon", defaultValue],
	["Ful'Mina, The Mountain Queen", defaultValue],

/* ==============================
Floating Isles (not setting values yet)
============================== */	
	["Skydiver", defaultValue],
	["Sky Greaser", defaultValue],
	["Launchpad Labourer", defaultValue],
	["Cloud Miner", defaultValue],

	["Daydreamer", defaultValue],
	["Kite Flyer", defaultValue],

	["Ground Gavaleer", defaultValue],
	["Sky Swordsman", defaultValue],
	["Herc", defaultValue],
	["Sky Squire", defaultValue],

	["Astrological Astronomer", defaultValue],
	["Overcaster", defaultValue],
	["Stratocaster", defaultValue],
	["Shadow Sage", defaultValue],

	["Worried Wayfinder", defaultValue],
	["Gyrologer", defaultValue],
	["Seasoned Islandographer", defaultValue],
	["Captain Cloudkicker", defaultValue],

	["Sky Glass Sorcerer", defaultValue],
	["Sky Glass Galzier", defaultValue],
	["Sky Dancer", defaultValue],
	["Sky Highborne", defaultValue],

	["Spry Sky Explorer", defaultValue],
	["Spry Sky Seer", defaultValue],
	["Cumulost", defaultValue],
	["Spheric Diviner", defaultValue],

	["Nimbomancer", defaultValue],
	["Sky Surfer", defaultValue],
	["Cute Cloud Conjurer", defaultValue],
	["Mist Maker", defaultValue],

	["Tiny Dragonfly", defaultValue],
	["Lancer Guard", defaultValue],
	["Dragonbreather", defaultValue],
	["Regal Spearman", defaultValue],

	["Devious Gentleman", defaultValue],
	["Stack of Thieves", defaultValue],
	["Lawbender", defaultValue],
	["Agent M", defaultValue],

	["Suave Pirate", defaultValue],
	["Cutthroat Pirate", defaultValue],
	["Cutthroat Cannoneer", defaultValue],
	["Scarlet Revenger", defaultValue],
	["Maritime Pirate", defaultValue],
	["Admiral Cloudbeard", defaultValue],

	["Warden of Rain", defaultValue],
	["Warden of Fog", defaultValue],
	["Warden of Frost", defaultValue],
	["Warden of Wind", defaultValue],

	["Paragon of Strength", defaultValue],
	["Paragon of Shadow", defaultValue],
	["Paragon of Tactics", defaultValue],
	["Paragon of Arcane", defaultValue],
	["Paragon of Forgotten", defaultValue],
	["Paragon of Water", defaultValue],
	["Paragon of Dragons", defaultValue],
	["Paragon of the Lawless", defaultValue],

	["Richard the Rich", defaultValue],

/* ==============================
Gnawnia Rift
============================== */		
	["Micro", 20],
	["Brawny", 10],
	["Riftweaver", 10],
	["Greyrun", 8],
	["Dream Drifter", 35],
	["Excitable Electric", 15],
	["Supernatural", 10],
	["Agitated Gentle Giant", 10],
	["Mighty Mole", 25],

	["Rift Guardian", 10],
	["Cyborg", 10],
	["Shard Centurion", 10],
	["Spiritual Steel", 10],
	["Raw Diamond", 15],
	["Wealth", 10], // better ar in furomarift
	["Goliath Field", defaultValue],

/* ==============================
Burroughs Rift
============================== */		
	["Amplified White", 15],
	["Amplified Grey", 15],
	["Amplified Brown", 15],
	["Cybernetic Specialist", 10],
	["Rift Bio Engineer", 8],
	["Automated Sentry", 15],
	["Surgeon Bot", 8],
	["Evil Scientist", 8],
	["Doktor", 8],
	["Portable Generator", 30],

	["Prototype", 10],
	["Robat", 10],
	["Phase Zombie", 10],
	["Count Vampire", 12],
	["Tech Ravenous Zombie", 12],
	["Zombot Unipire the Third", 10],
	["Lycanoid", 10],
	["Revenant", 10],

	["Pneumatic Dirt Displacement", 15],
	["Itty Bitty Rifty Burroughs", 12],
	["Rifterranian", 10],
	["Clump", 15],
	["Cyber Miner", 20],
	["Master Exploder", 8],
	["Boulder Biter", 10],

	["Mecha Tail", 20],
	["Radioactive Ooze", 15],
	["Toxikinetic", 15],
	["Toxic Avenger", 20],
	["Rancid Bog Beast", 15],
	["Super Mega Mecha Ultra RoboGold", 10],
	["Plutonium Tentacle", 20],
	["Assassin Beast", 45],

	["Menace of the Rift", 25],
	["Monstrous Abomination", 25],
	["Big Bad Behemoth Burroughs", 20],

/* ==============================
Whisker Woods Rift
============================== */	
	["Mossy Moosker", 10],
	["Cranky Caterpillar", 10],
	["Bloomed Sylvan", 10],
	["Spirit of Balance", 10],
	["Fungal Frog", 10],
	["Karmachameleon", 10],
	["Red Coat Bear", 10],
	["Medicine", 10],
	["Twisted Treant", 10],
	["Water Sprite", 10],
	["Treant Queen", 10],
	["Spirit Fox", 10],
	["Red-Eyed Watcher Owl", 10],
	["Rift Tiger", 10],
	["Nomadic Warrior", 10],
	["Crazed Goblin", 10],
	["Tree Troll", 10],
	["Winged Harpy", 10],

	["Cyclops Barbarian", 30],
	["Centaur Ranger", 30],
	["Tri-dra", 30],
	["Cherry Sprite", 12],
	["Naturalist", 12],
	["Grizzled Silth", 12],
	["Gilded Leaf", 30],
	["Monstrous Black Widow", defaultValue],

/* ==============================
Furoma Rift
============================== */		
	["Enlightened Labourer", 25],
	["Dumpling Delivery", 10],
	["Armored Archer", 10],
	["Shinobi", 12],
	["Shaolin Kung Fu", 10],
	["Wandering Monk", 10],
	["Militant Samurai", 15],
	["Dancing Assassin", 10],
	["Student of the Chi Belt", 12],
	["Student of the Chi Claw", 12],
	["Student of the Chi Fang", 12],
	["Master of the Chi Belt", defaultValue],
	["Master of the Chi Fang", defaultValue],
	["Master of the Chi Claw", defaultValue],
	["Grand Master of the Dojo", defaultValue],
	["Supreme Sensei", defaultValue],
	["Ascended Elder", defaultValue],

/* ==============================
Bristle Woods Rift
============================== */	
	["Skeletal Champion", defaultValue],
	["Record Keeper's Assistant", defaultValue],
	["Record Keeper", defaultValue],
	["Sentient Slime", 10],
	["Dread Knight", defaultValue],
	["Portal Plunderer", defaultValue],
	["Clockwork Timespinner", defaultValue],
	["Epoch Golem", defaultValue],
	["Chamber Cleaver", 10],
	["Portal Pursuer", defaultValue],
	["Vigilant Ward", defaultValue],
	["Timelost Thaumaturge", 10],
	["Shackled Servant", defaultValue],
	["Portal Paladin", defaultValue],
	["Harbinger of Death", 40],
	["Timeslither Pythoness", 10],
	["Carrion Medium", 10],
	["Timeless Lich", 10],
	["Chronomaster", 10],
	["Absolute Acolyte", 20],

/* ==============================
Valour Rift
============================== */	
	["Timid Explorer", defaultValue],
	["Elixir Maker", defaultValue],
	["Terrified Adventurer", defaultValue],
	["Unwavering Adventurer", defaultValue],
	["Berzerker", defaultValue],
	["Lumi-lancer", defaultValue],
	["Puppetto", defaultValue],
	["Puppet Champion", defaultValue],
	["Cutpurse", defaultValue],
	["Champion Thief", defaultValue],
	["Martial", defaultValue],
	["Praetorian Champion", defaultValue],
	["One-Mouse Band", defaultValue],
	["Champion Danseuse", defaultValue],
	["Mouse of Elements", defaultValue],
	["Magic Champion", defaultValue],
	["Cursed Crusader", defaultValue],
	["Fallen Champion Footman", defaultValue],
	["Withered Remains", defaultValue],
	["Arch Champion Necromancer", defaultValue],
	["Possessed Armaments", defaultValue],
	["Prestigious Adventurer", defaultValue],
	["Soldier of the Shade", defaultValue],
	["Bulwark of Ascent", defaultValue],
	["Shade of the Eclipse", defaultValue],
	["The Total Eclipse", 20],
	
/* ==============================
Toxic Spill
============================== */	

/* ==============================
Event Mice
============================== */	
	["default", defaultValue],
]);

