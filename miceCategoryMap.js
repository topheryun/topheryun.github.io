
let miceCategoryValues = new Map([
    ["Valour Rift", 1],
    ["Bristle Woods Rift", 2],
    ["Furoma Rift", 3],
    ["Whisker Woods Rift", 4],
    ["Burroughs Rift", 5],
    ["Gnawnia Rift", 6],
    ["Floating Isles", 7],
    ["Moussu Picchu", 8],
    ["Zokor", 9],
    ["Fungal Caverns", 10],
    ["Sunken City", 11],
    ["Queso Geyser", 12],
    ["Cantera Quarry", 13],
    ["Prickly Plains", 14],
    ["Queso River", 15],
    ["Sand Dunes", 16],
    ["Lost City", 17],
    ["Living Garden", 18],
    ["Muridae Market", 19],
    ["Fiery Warpath", 20],
    ["Fort Rox", 21],
    ["Claw Shot City", 22],
    ["Iceberg", 23],
    ["Crystal Library", 24],
    ["Zugzwang Tower", 25],
    ["King's Gauntlet", 26],
    ["Balack's Cove", 27],
    ["Jungle of Dread", 28],
    ["Dracano", 29],
    ["Tribal Isles", 30],
    ["SS Huntington", 31],
    ["Acolyte Realm", 32],
    ["Forbidden Grove", 33],
    ["Catacombs", 34],
    ["Furoma", 35],
    ["Town of Digby", 36],
    ["Mousoleum", 37],
    ["Laboratory", 38],
    ["Whisker Woods", 39],
    ["Misc", 40],
    ["", 99]
    ]);
    
    let miceCategory = new Map([
    /* ==============================
    Indigenous Mice
    ============================== */
        ["White", "Misc"],
        ["Grey", "Misc"],
        ["Brown", "Misc"],
        ["Lightning Rod", "Misc"],
        ["Cowardly", "Misc"],
        ["Field", "Misc"],
        ["Spotted", "Misc"],
        ["Tiny", "Misc"],
        ["Flying", "Misc"],
        ["Scruffy", "Misc"],
        ["Dwarf", "Misc"],
        ["Speedy", "Misc"],
        ["Magic", "Misc"],
        ["Spud", "Misc"],
        ["Steel", "Misc"],
        ["Pugilist", "Misc"],
        ["Longtail", "Misc"],
        ["Nibbler", "Misc"],
        ["Farmhand", "Misc"],
        ["Burglar", "Misc"],
        ["Master Burglar", "Misc"],
        ["Captain Croissant", "Misc"],
        ["Pirate", "Misc"],
        ["Black Widow", "Misc"],
        
        ["Winter Games", "Misc"],
        ["Trampoline", "Misc"],
        ["Hurdle", "Misc"],
        ["Wave Racer", "Misc"],
        ["Extreme Everysports", "Misc"],
        
    /* ==============================
    Mountain Mice
    ============================== */
        ["Pebble", "Misc"],
        ["Frozen", "Misc"],
        ["Fog", "Misc"],
        ["Frosty Snow", "Misc"],
        ["Granite", "Misc"],
        ["Gold", "Misc"],
        ["Diamond", "Misc"],
        ["Silvertail", "Misc"],
        ["Craggy Ore", "Misc"],
        ["Slope Swimmer", "Misc"],
        ["Mountain", "Misc"],
        ["Abominable Snow", "Misc"],
        
    /* ==============================
    Whisker Woods
    ============================== */
        ["Moosker", "Whisker Woods"],
        ["Wiggler", "Whisker Woods"],
        ["Sylvan", "Whisker Woods"],
        ["Frog", "Whisker Woods"],
        ["Chameleon", "Whisker Woods"],
        ["Bear", "Whisker Woods"],
        ["Shaman", "Whisker Woods"],
        ["Treant", "Whisker Woods"],
        ["Curious Chemist", "Whisker Woods"],
        ["Wicked Witch of Whisker Woods", "Whisker Woods"],
        ["Elven Princess", "Whisker Woods"],
        ["Cherry", "Whisker Woods"],
        ["Foxy", "Whisker Woods"],
        ["Goblin", "Whisker Woods"],
        ["Eagle Owl", "Whisker Woods"],
        ["Cyclops", "Whisker Woods"],
        ["Goldleaf", "Whisker Woods"],
        ["Centaur", "Whisker Woods"],
        ["Tiger", "Whisker Woods"],
        ["Fairy", "Whisker Woods"],
        ["Nomad", "Whisker Woods"],
        ["Troll", "Whisker Woods"],
        ["Harpy", "Whisker Woods"],
        ["Silth", "Whisker Woods"],
    
    /* ==============================
    Laboratory
    ============================== */
        ["Squeaker Bot", "Laboratory"],
        ["Mutated White", "Laboratory"],
        ["Mutated Grey", "Laboratory"],
        ["Mutated Brown", "Laboratory"],
        ["Clumsy Chemist", "Laboratory"],
        ["Sludge Scientist", "Laboratory"],
        ["Bionic", "Laboratory"],
        ["Monster", "Laboratory"],
        ["Mutated Mole", "Laboratory"],
        
    /* ==============================
    Mousoleum
    ============================== */
        ["Gluttonous Zombie", "Mousoleum"],
        ["Zombie", "Mousoleum"],
        ["Coffin Zombie", "Mousoleum"],
        ["Ravenous Zombie", "Mousoleum"],
        ["Bat", "Mousoleum"],
        ["Giant Snail", "Mousoleum"],
        ["Ghost", "Mousoleum"],
        ["Vampire", "Mousoleum"],
        ["Mummy", "Mousoleum"],
        ["Lycan", "Mousoleum"],
        ["Mousevina von Vermin", "Mousoleum"],
        
    /* ==============================
    Town of Digby
    ============================== */
        ["Mole", "Town of Digby"],
        ["Nugget", "Town of Digby"],
        ["Core Sample", "Town of Digby"],
        ["Rock Muncher", "Town of Digby"],
        ["Industrious Digger", "Town of Digby"],
        ["Stone Cutter", "Town of Digby"],
        ["Demolitions", "Town of Digby"],
        ["Miner", "Town of Digby"],
        ["Lambent Crystal", "Town of Digby"],
        ["Itty-Bitty Burroughs", "Town of Digby"],
        ["Subterranean", "Town of Digby"],
        ["Big Bad Burroughs", "Town of Digby"],
        
    /* ==============================
    Furoma
    ============================== */
        ["Hapless", "Furoma"],
        ["Worker", "Furoma"],
        ["Ninja", "Furoma"],
        ["Dumpling Chef", "Furoma"],
        ["Archer", "Furoma"],
        ["Kung Fu", "Furoma"],
        ["Monk", "Furoma"],
        ["Samurai", "Furoma"],
        ["Student of the Cheese Belt", "Furoma"],
        ["Student of the Cheese Claw", "Furoma"],
        ["Student of the Cheese Fang", "Furoma"],
        ["Assassin", "Furoma"],
        ["Master of the Cheese Belt", "Furoma"],
        ["Master of the Cheese Claw", "Furoma"],
        ["Master of the Cheese Fang", "Furoma"],
        ["Master of the Dojo", "Furoma"],
        ["Dojo Sensei", "Furoma"],
        
    /* ==============================
    Forgotten Mice
    ============================== */
        ["Skeleton", "Catacombs"],
        ["Realm Ripper", "Acolyte Realm"],
        ["Keeper's Assistant", "Catacombs"],
        ["Keeper", "Catacombs"],
        ["Gargoyle", "Catacombs"],
        ["Ooze", "Catacombs"],
        ["Scavenger", "Catacombs"],
        ["Spider", "Catacombs"],
        ["Sorcerer", "Acolyte Realm"],
        ["Spectre", "Acolyte Realm"],
        ["Terror Knight", "Catacombs"],
        ["Golem", "Acolyte Realm"],
        ["Gate Guardian", "Acolyte Realm"],
        ["Gorgon", "Acolyte Realm"],
        ["Reaper", "Forbidden Grove"],
        ["Wight", "Acolyte Realm"],
        ["Lich", "Acolyte Realm"],
        ["Chrono", "Acolyte Realm"],
        ["Acolyte", "Acolyte Realm"],
        
    /* ==============================
    SS Huntington
    ============================== */
        ["Swabbie", "SS Huntington"],
        ["Pinchy", "SS Huntington"],
        ["Briegull", "SS Huntington"],
        ["Shelder", "SS Huntington"],
        ["Shipwrecked", "SS Huntington"],
        ["Salt Water Snapper", "SS Huntington"],
        ["Cook", "SS Huntington"],
        ["Mermouse", "SS Huntington"],
        ["Bottled", "SS Huntington"],
        ["Water Nymph", "SS Huntington"],
        ["Buccaneer", "SS Huntington"],
        ["Siren", "SS Huntington"],
        ["Captain", "SS Huntington"],
        ["Squeaken", "SS Huntington"],
        ["Leviathan", "SS Huntington"],
        ["Hydra", "SS Huntington"],
    
    /* ==============================
    Tribal Isles
    ============================== */
        ["Taleweaver", "Tribal Isles"], // Elub Shore
        ["Scout", "Tribal Isles"],
        ["Alchemist", "Tribal Isles"],
        ["Pack", "Tribal Isles"],
        ["Mystic", "Tribal Isles"],
        ["Alnitak", "Tribal Isles"],
        ["Soothsayer", "Tribal Isles"],
        ["Vanquisher", "Tribal Isles"],
        ["Elder", "Tribal Isles"],
        ["Protector", "Tribal Isles"],
        ["Champion", "Tribal Isles"],
        ["Elub Chieftain", "Tribal Isles"],
        
        ["Narrator", "Tribal Isles"], // Nerg Plains
        ["Pathfinder", "Tribal Isles"],
        ["Caretaker", "Tribal Isles"],
        ["Finder", "Tribal Isles"],
        ["Beast Tamer", "Tribal Isles"],
        ["Alnilam", "Tribal Isles"],
        ["Conjurer", "Tribal Isles"],
        ["Conqueror", "Tribal Isles"],
        ["Grandfather", "Tribal Isles"],
        ["Defender", "Tribal Isles"],
        ["Slayer", "Tribal Isles"],
        ["Nerg Chieftain", "Tribal Isles"],
        
        ["Trailblazer", "Tribal Isles"], // Derr Dunes
        ["Wordsmith", "Tribal Isles"],
        ["Healer", "Tribal Isles"],
        ["Grunt", "Tribal Isles"],
        ["Spellbinder", "Tribal Isles"],
        ["Mintaka", "Tribal Isles"],
        ["Seer", "Tribal Isles"],
        ["Renegade", "Tribal Isles"],
        ["Aged", "Tribal Isles"],
        ["Guardian", "Tribal Isles"],
        ["Gladiator", "Tribal Isles"],
        ["Derr Chieftain", "Tribal Isles"],
        
    
    /* ==============================
    Jungle of Dread and Dracano
    ============================== */
        ["Pygmy Wrangler", "Jungle of Dread"],
        ["Swarm of Pygmy Mice", "Jungle of Dread"],
        ["Primal", "Jungle of Dread"],
        ["Stonework Warrior", "Jungle of Dread"],
        ["Jurassic", "Jungle of Dread"],
        ["Chitinous", "Jungle of Dread"],
        ["Magma Carrier", "Jungle of Dread"],
        ["Fetid Swamp", "Jungle of Dread"],
        ["Whelpling", "Dracano"],
        ["Draconic Warden", "Dracano"],
        ["Dragon", "Dracano"],
        
    /* ==============================
    Balack's Cove
    ============================== */
        ["Davy Jones", "Balack's Cove"],
        ["Tidal Fisher", "Balack's Cove"],
        ["Twisted Fiend", "Balack's Cove"],
        ["Brimstone", "Balack's Cove"],
        ["Riptide", "Balack's Cove"],
        ["Enslaved Spirit", "Balack's Cove"],
        ["Elub Lich", "Balack's Cove"],
        ["Nerg Lich", "Balack's Cove"],
        ["Derr Lich", "Balack's Cove"],
        ["Balack the Banished", "Balack's Cove"],
        
    /* ==============================
    King's Gauntlet
    ============================== */
        ["Wound Up White", "King's Gauntlet"], // tier 1
        ["Hapless Marionette", "King's Gauntlet"],
        ["Toy Sylvan", "King's Gauntlet"],
        ["Clockwork Samurai", "King's Gauntlet"],
        ["Sock Puppet Ghost", "King's Gauntlet"],
        ["Puppet Master", "King's Gauntlet"],
        
        ["Impersonator", "King's Gauntlet"], // tier 2
        ["Lockpick", "King's Gauntlet"],
        ["Bandit", "King's Gauntlet"],
        ["Stealth", "King's Gauntlet"],
        ["Escape Artist", "King's Gauntlet"],
        ["Rogue", "King's Gauntlet"],
        
        ["Fencer", "King's Gauntlet"], // tier 3
        ["Page", "King's Gauntlet"],
        ["Berserker", "King's Gauntlet"],
        ["Knight", "King's Gauntlet"],
        ["Phalanx", "King's Gauntlet"],
        ["Cavalier", "King's Gauntlet"],
        
        ["Cowbell", "King's Gauntlet"], // tier 4
        ["Drummer", "King's Gauntlet"],
        ["Dancer", "King's Gauntlet"],
        ["Fiddler", "King's Gauntlet"],
        ["Guqin Player", "King's Gauntlet"],
    
        ["Black Mage", "King's Gauntlet"], // tier 5
        ["Terra", "King's Gauntlet"],
        ["Ignis", "King's Gauntlet"],
        ["Zephyr", "King's Gauntlet"],
        ["Aquos", "King's Gauntlet"],
        
        ["Sacred Shrine", "King's Gauntlet"], // tier 6
        ["White Mage", "King's Gauntlet"],
        ["Paladin", "King's Gauntlet"],
        
        ["Necromancer", "King's Gauntlet"], // tier 7
        ["Fiend", "King's Gauntlet"],
        
        ["Eclipse", "King's Gauntlet"], // tier 8
        
    /* ==============================
    Seasonal Garden only in Zugzwang Scroll Case?
    ============================== */
    
    /* ==============================
    Zugzwang Tower
    ============================== */
        ["Chess Master", "Zugzwang Tower"],
        ["Mystic Pawn", "Zugzwang Tower"],
        ["Mystic Knight", "Zugzwang Tower"],
        ["Mystic Bishop", "Zugzwang Tower"],
        ["Mystic Rook", "Zugzwang Tower"],
        ["Mystic Queen", "Zugzwang Tower"],
        ["Mystic King", "Zugzwang Tower"],
        ["Technic Pawn", "Zugzwang Tower"],
        ["Technic Knight", "Zugzwang Tower"],
        ["Technic Bishop", "Zugzwang Tower"],
        ["Technic Rook", "Zugzwang Tower"],
        ["Technic Queen", "Zugzwang Tower"],
        ["Technic King", "Zugzwang Tower"],	
        
    /* ==============================
    Crystal Library
    ============================== */
        ["Explorator", "Crystal Library"],
        ["Pocketwatch", "Crystal Library"],
        ["Bookborn", "Crystal Library"],
        ["Tome Sprite", "Crystal Library"],
        ["Flutterby", "Crystal Library"],
        ["Infiltrator", "Crystal Library"],
        ["Effervescent", "Crystal Library"],
        ["Walker", "Crystal Library"],
        ["Steam Grip", "Crystal Library"],
        ["Scribe", "Crystal Library"],
        ["Aether", "Crystal Library"],
        ["M400", "Crystal Library"],
        ["Zurreal the Eternal", "Crystal Library"],
        
    /* ==============================
    Iceberg
    ============================== */
        ["Living Salt", "Iceberg"], // misc
        ["Frostlance Guard", "Iceberg"],
        ["Frostwing Commander", "Iceberg"],
        ["Icewing", "Iceberg"],
        ["Deep", "Iceberg"],
        
        ["Incompetent Ice Climber", "Iceberg"], // Bergling
        ["Snow Soldier", "Iceberg"],
        ["Polar Bear", "Iceberg"],
        ["Snow Slinger", "Iceberg"],
        ["Iceblock", "Iceberg"],
        ["Wolfskie", "Iceberg"],
        ["Snowblind", "Iceberg"],
        ["Snow Sniper", "Iceberg"],
        ["Living Ice", "Iceberg"],
        
        ["Chipper", "Iceberg"], // Tunnel Rat
        ["Icebreaker", "Iceberg"],
        
        ["Snow Bowler", "Iceberg"], // Brute
        ["Yeti", "Iceberg"],
        ["Mammoth", "Iceberg"],
        
        ["Saboteur", "Iceberg"], // Bomb Squad
        ["Stickybomber", "Iceberg"],
        ["Heavy Blaster", "Iceberg"],
        
        ["Water Wielder", "Iceberg"], // Zealot
        ["Iceblade", "Iceberg"],
        
        ["Lord Splodington", "Iceberg"], // Generals
        ["Princess Fist", "Iceberg"],
        ["Lady Coldsnap", "Iceberg"],
        ["General Drheller", "Iceberg"],
        
    /* ==============================
    Varmint Valley
    ============================== */	
        ["Bounty Hunter", "Claw Shot City"],
        ["Lasso Cowgirl", "Claw Shot City"],
        ["Prospector", "Claw Shot City"],
        ["Pyrite", "Claw Shot City"],
        ["Ruffian", "Claw Shot City"],
        ["Saloon Gal", "Claw Shot City"],
        ["Shopkeeper", "Claw Shot City"],
        ["Tumbleweed", "Claw Shot City"],
        
        ["Bartender", "Claw Shot City"], // Crew
        ["Coal Shoveller", "Claw Shot City"],
        ["Farrier", "Claw Shot City"],
        ["Parlour Player", "Claw Shot City"],
        ["Stuffy Banker", "Claw Shot City"],
        ["Tonic Salesman", "Claw Shot City"],
        ["Upper Class Lady", "Claw Shot City"],
        
        // Ringleaders
        // Train Robbers
        
    /* ==============================
    Fort Rox
    ============================== */		
        ["Meteorite Snacker", "Fort Rox"], // daytime
        ["Mining Materials Manager", "Fort Rox"],
        ["Mischievous Meteorite Miner", "Fort Rox"],
        ["Hardworking Hauler", "Fort Rox"],
        ["Meteorite Miner", "Fort Rox"],
        ["Meteorite Mover", "Fort Rox"],
        
        ["Night Shift Materials Manager", "Fort Rox"], // Weremice
        ["Werehauler", "Fort Rox"],
        ["Wealthy Werewarrior", "Fort Rox"],
        ["Mischievous Wereminer", "Fort Rox"],
        ["Alpha Weremouse", "Fort Rox"],
        ["Reveling Lycanthrope", "Fort Rox"],
        ["Wereminer", "Fort Rox"],
        
        ["Hypnotized Gunslinger", "Fort Rox"], // Cosmic Critters
        ["Arcane Summoner", "Fort Rox"],
        ["Night Watcher", "Fort Rox"],
        ["Cursed Taskmaster", "Fort Rox"],
        ["Meteorite Golem", "Fort Rox"],
        ["Meteorite Mystic", "Fort Rox"],
        
        ["Battering Ram", "Fort Rox"],
        ["Nightmancer", "Fort Rox"],
        ["Nightfire", "Fort Rox"],
        ["Dawn Guardian", "Fort Rox"],
        ["Monster of the Meteor", "Fort Rox"],
        ["Heart of the Meteor", "Fort Rox"],
        
    /* ==============================
    Fiery Warpath
    ============================== */	
        ["Desert Archer", "Fiery Warpath"],
        ["Flame Archer", "Fiery Warpath"],
        ["Crimson Ranger", "Fiery Warpath"],
        ["Flame Ordnance", "Fiery Warpath"],
        ["Sand Cavalry", "Fiery Warpath"],
        ["Sandwing Cavalry", "Fiery Warpath"],
        ["Inferno Mage", "Fiery Warpath"],
        ["Magmarage", "Fiery Warpath"],
        ["Vanguard", "Fiery Warpath"],
        ["Sentinel", "Fiery Warpath"],
        ["Crimson Watch", "Fiery Warpath"],
        ["Desert Soldier", "Fiery Warpath"],
        ["Flame Warrior", "Fiery Warpath"],
        ["Crimson Titan", "Fiery Warpath"],
        ["Caravan Guard", "Fiery Warpath"],
        ["Crimson Commander", "Fiery Warpath"],
        ["Gargantuamouse", "Fiery Warpath"],
        ["Artillery Commander", "Fiery Warpath"],
        ["Theurgy Warden", "Fiery Warpath"],
        ["Warmonger", "Fiery Warpath"],
        
    /* ==============================
    Muridae Market
    ============================== */	
        ["Snake Charmer", "Muridae Market"],
        ["Pie Thief", "Muridae Market"],
        ["Desert Architect", "Muridae Market"],
        ["Falling Carpet", "Muridae Market"],
        ["Spice Merchant", "Muridae Market"],
        ["Desert Nomad", "Muridae Market"],
        ["Limestone Miner", "Muridae Market"],
        ["Lumberjack", "Muridae Market"],
        ["Glass Blower", "Muridae Market"],
        ["Blacksmith", "Muridae Market"],
        ["Mage Weaver", "Muridae Market"],
        ["Market Guard", "Muridae Market"],
        ["Market Thief", "Muridae Market"],
        
    /* ==============================
    Living Garden / Twisted Garden
    ============================== */		
        ["Thistle", "Living Garden"],
        ["Bark", "Living Garden"],
        ["Calalilly", "Living Garden"],
        ["Shroom", "Living Garden"],
        ["Camoflower", "Living Garden"],
        ["Strawberry Hotcakes", "Living Garden"],
        ["Thirsty", "Living Garden"],
        
        ["Thorn", "Living Garden"],
        ["Barkshell", "Living Garden"],
        ["Twisted Lilly", "Living Garden"],
        ["Fungal Spore", "Living Garden"],
        ["Camofusion", "Living Garden"],
        ["Twisted Hotcakes", "Living Garden"],
        ["Dehydrated", "Living Garden"],
        ["Carmine the Apothecary", "Living Garden"],
        ["Twisted Carmine", "Living Garden"],
        ["Shattered Carmine", "Living Garden"],
        
    /* ==============================
    Lost City / Cursed City
    ============================== */	
        ["Ethereal Enchanter", "Lost City"],
        ["Ethereal Engineer", "Lost City"],
        ["Ethereal Thief", "Lost City"],
        ["Ethereal Librarian", "Lost City"],
        ["Cursed", "Lost City"],
        ["Essence Collector", "Lost City"],
        
        ["Cursed Enchanter", "Lost City"],
        ["Cursed Engineer", "Lost City"],
        ["Cursed Thief", "Lost City"],
        ["Cursed Librarian", "Lost City"],
        ["Corrupt", "Lost City"],
        ["Essence Guardian", "Lost City"],
        ["Dark Magi", "Lost City"],
        
    /* ==============================
    Sand Dunes / Sand Crypts
    ============================== */	
        ["Sand Pilgrim", "Sand Dunes"],
        ["Grubling Herder", "Sand Dunes"],
        ["Spiky Devil", "Sand Dunes"],
        ["Quesodillo", "Sand Dunes"],
        ["Dunehopper", "Sand Dunes"],
        ["Grubling", "Sand Dunes"],
        
        ["Sarcophamouse", "Sand Dunes"],
        ["Sand Colossus", "Sand Dunes"],
        ["Serpentine", "Sand Dunes"],
        ["Scarab", "Sand Dunes"],
        ["King Grub", "Sand Dunes"],
        ["King Scarab", "Sand Dunes"],
        
    /* ==============================
    Queso Canyon
    ============================== */	
        ["Sleepy Merchant", "Queso River"], // Queso River
        ["Tiny Saboteur", "Queso River"],
        ["Pump Raider", "Queso River"],
        ["Croquet Crusher", "Queso River"],
        ["Queso Extractor", "Queso River"],
        ["Queen Quesada", "Queso River"],
        
        ["Spice Seer", "Prickly Plains"], // Prickly Plains
        ["Old Spice Collector", "Prickly Plains"],
        ["Spice Farmer", "Prickly Plains"],
        ["Granny Spice", "Prickly Plains"],
        ["Spice Sovereign", "Prickly Plains"],
        ["Spice Finder", "Prickly Plains"],
        ["Spice Raider", "Prickly Plains"],
        ["Spice Reaper", "Prickly Plains"],
        ["Inferna, The Engulfed", "Prickly Plains"],
        
        ["Chip Chiseler", "Cantera Quarry"], // Cantera Quarry
        ["Tiny Toppler", "Cantera Quarry"],
        ["Ore Chipper", "Cantera Quarry"],
        ["Rubble Rummager", "Cantera Quarry"],
        ["Nachore Golem", "Cantera Quarry"],
        ["Rubble Rouser", "Cantera Quarry"],
        ["Grampa Golem", "Cantera Quarry"],
        ["Fiery Crusher", "Cantera Quarry"],
        ["Nachous, The Molten", "Cantera Quarry"],
        
        ["Fuzzy Drake", "Queso Geyser"], // Cork Collectors
        ["Cork Defender", "Queso Geyser"],
        ["Burly Bruiser", "Queso Geyser"],
        ["Corky, the Collector", "Queso Geyser"],
        ["Horned Cork Hoarder", "Queso Geyser"],
        ["Rambunctious Rain Rumbler", "Queso Geyser"],
        ["Corkataur", "Queso Geyser"],
        
        ["Steam Sailor", "Queso Geyser"], // Pressure Set
        ["Warming Wyvern", "Queso Geyser"],
        ["Vaporior", "Queso Geyser"],
        ["Pyrehyde", "Queso Geyser"],
        ["Emberstone Scaled", "Queso Geyser"],
        
        ["Mild Spicekin", "Queso Geyser"], // Geyser
        ["Sizzle Pup", "Queso Geyser"],
        ["Smoldersnap", "Queso Geyser"],
        ["Bearded Elder", "Queso Geyser"],
        ["Ignatia", "Queso Geyser"],
        ["Cinderstorm", "Queso Geyser"],
        ["Bruticus, the Blazing", "Queso Geyser"],
        ["Stormsurge, the Vile Tempest", "Queso Geyser"],
        ["Kalor'ignis of the Geyser", "Queso Geyser"],
        
    /* ==============================
    Sunken City Only Predator Pack
    ============================== */	
        ["Carnivore", "Sunken City"],
        ["Serpent Monster", "Sunken City"],
        ["Ancient of the Deep", "Sunken City"],
        ["Tritus", "Sunken City"],
    
    /* ==============================
    Fungal Caverns
    ============================== */	
        ["Sporeticus", "Fungal Caverns"],
        ["Spore Muncher", "Fungal Caverns"],
        ["Mouldy Mole", "Fungal Caverns"],
        ["Spiked Burrower", "Fungal Caverns"],
        ["Bitter Root", "Fungal Caverns"],
        ["Mush", "Fungal Caverns"],
        ["Quillback", "Fungal Caverns"],
        ["Lumahead", "Fungal Caverns"],
        ["Funglore", "Fungal Caverns"],
        ["Mushroom Sprite", "Fungal Caverns"],
        ["Floating Spore", "Fungal Caverns"],
        ["Nightshade Masquerade", "Fungal Caverns"],
    
        ["Cavern Crumbler", "Fungal Caverns"],
        ["Stone Maiden", "Fungal Caverns"],
        ["Crag Elder", "Fungal Caverns"],
        ["Dirt Thing", "Fungal Caverns"],
        ["Crystalline Slasher", "Fungal Caverns"],
        ["Splintered Stone Sentry", "Fungal Caverns"], // 26 hunts with GGC
        ["Shattered Obsidian", "Fungal Caverns"], // 17 hunts with GGC
        ["Gemstone Worshipper", "Fungal Caverns"], // 57 hunts with GGC
    
        ["Gemorpher", "Fungal Caverns"],
        ["Crystal Controller", "Fungal Caverns"],
        ["Crystalback", "Fungal Caverns"],
        ["Crystal Cave Worm", "Fungal Caverns"],
        ["Stalagmite", "Fungal Caverns"],
    
        ["Crystal Golem", "Fungal Caverns"],
        ["Crystal Queen", "Fungal Caverns"],
        ["Crystal Lurker", "Fungal Caverns"],
        ["Crystal Observer", "Fungal Caverns"],
    
        ["Huntereater", "Fungal Caverns"],
        ["Diamondhide", "Fungal Caverns"], // one person lf 250 another sniping for 23? 8%ar with diamond cheese
        ["Crystal Behemoth", "Fungal Caverns"],
    
    /* ==============================
    Zokor
    ============================== */	
        ["Lost Legionnaire", "Zokor"],
        ["Lost", "Zokor"],
        ["Reanimated Carver", "Zokor"],
        ["Corridor Bruiser", "Zokor"],
        ["Shadow Stalker", "Zokor"],
    
        ["Mushroom Harvester", "Zokor"],
        ["Mush Monster", "Zokor"],
        ["Nightshade Nanny", "Zokor"],
        ["Nightshade Fungalmancer", "Zokor"],
    
        ["Summoning Scholar", "Zokor"],
        ["Sanguinarian", "Zokor"],
        ["Mystic Guardian", "Zokor"],
        ["Mystic Herald", "Zokor"],
        ["Mystic Scholar", "Zokor"],
        ["Ethereal Guardian", "Zokor"],
        ["Ancient Scribe", "Zokor"],
        ["Soul Binder", "Zokor"],
    
        ["Drudge", "Zokor"],
        ["Masked Pikeman", "Zokor"],
        ["Solemn Soldier", "Zokor"],
        ["Mind Tearer", "Zokor"],
        ["Dark Templar", "Zokor"],
        ["Battle Cleric", "Zokor"],
        ["Sir Fleekio", "Zokor"],
        ["Paladin Weapon Master", "Zokor"],
    
        ["RR-8", "Zokor"],
        ["Ash Golem", "Zokor"],
        ["Tech Golem", "Zokor"],
        ["Automated Stone Sentry", "Zokor"],
        ["Fungal Technomorph", "Zokor"],
        ["Exo-Tech", "Zokor"],
        ["Matron of Machinery", "Zokor"],
        ["Manaforge Smith", "Zokor"],
    
        ["Hired Eidolon", "Zokor"],
        ["Mimic", "Zokor"],
        ["Treasure Brawler", "Zokor"],
        ["Matron of Wealth", "Zokor"],
        ["Molten Midas", "Zokor"],
    
        ["Decrepit Tentacle Terror", "Zokor"],
        ["Retired Minotaur", "Zokor"],
    
    /* ==============================
    Moussu Picchu
    ============================== */	
        ["Nightshade Maiden", "Moussu Picchu"],
        ["Spore Salesman", "Moussu Picchu"],
        ["Nightshade Flower Girl", "Moussu Picchu"],
    
        ["Breeze Borrower", "Moussu Picchu"],
        ["Windy Farmer", "Moussu Picchu"],
        ["Cloud Collector", "Moussu Picchu"],
        ["Rainwater Purifier", "Moussu Picchu"],
        ["Homeopathic Apothecary", "Moussu Picchu"],
    
        ["Wind Watcher", "Moussu Picchu"],
        ["Charming Chimer", "Moussu Picchu"],
        ["Fluttering Flutist", "Moussu Picchu"],
        ["Cycloness", "Moussu Picchu"],
        ["Wind Warrior", "Moussu Picchu"],
    
        ["Rain Collector", "Moussu Picchu"],
        ["Rain Wallower", "Moussu Picchu"],
        ["Rain Summoner", "Moussu Picchu"],
        ["Monsoon Maker", "Moussu Picchu"],
        ["Rainmancer", "Moussu Picchu"],
    
        ["Thunder Strike", "Moussu Picchu"],
        ["Violet Stormchild", "Moussu Picchu"],
        ["Thunderlord", "Moussu Picchu"], // might not work because emoji in the name, but it's only in Mopi maps
        ["Thundering Watcher", "Moussu Picchu"],
        ["Dragoon", "Moussu Picchu"],
        ["Ful'Mina, The Mountain Queen", "Moussu Picchu"],
    
    /* ==============================
    Floating Isles (not setting values yet)
    ============================== */	
        ["Skydiver", "Floating Isles"],
        ["Sky Greaser", "Floating Isles"],
        ["Launchpad Labourer", "Floating Isles"],
        ["Cloud Miner", "Floating Isles"],
    
        ["Daydreamer", "Floating Isles"],
        ["Kite Flyer", "Floating Isles"],
    
        ["Ground Gavaleer", "Floating Isles"],
        ["Sky Swordsman", "Floating Isles"],
        ["Herc", "Floating Isles"],
        ["Sky Squire", "Floating Isles"],
    
        ["Astrological Astronomer", "Floating Isles"],
        ["Overcaster", "Floating Isles"],
        ["Stratocaster", "Floating Isles"],
        ["Shadow Sage", "Floating Isles"],
    
        ["Worried Wayfinder", "Floating Isles"],
        ["Gyrologer", "Floating Isles"],
        ["Seasoned Islandographer", "Floating Isles"],
        ["Captain Cloudkicker", "Floating Isles"],
    
        ["Sky Glass Sorcerer", "Floating Isles"],
        ["Sky Glass Galzier", "Floating Isles"],
        ["Sky Dancer", "Floating Isles"],
        ["Sky Highborne", "Floating Isles"],
    
        ["Spry Sky Explorer", "Floating Isles"],
        ["Spry Sky Seer", "Floating Isles"],
        ["Cumulost", "Floating Isles"],
        ["Spheric Diviner", "Floating Isles"],
    
        ["Nimbomancer", "Floating Isles"],
        ["Sky Surfer", "Floating Isles"],
        ["Cute Cloud Conjurer", "Floating Isles"],
        ["Mist Maker", "Floating Isles"],
    
        ["Tiny Dragonfly", "Floating Isles"],
        ["Lancer Guard", "Floating Isles"],
        ["Dragonbreather", "Floating Isles"],
        ["Regal Spearman", "Floating Isles"],
    
        ["Devious Gentleman", "Floating Isles"],
        ["Stack of Thieves", "Floating Isles"],
        ["Lawbender", "Floating Isles"],
        ["Agent M", "Floating Isles"],
    
        ["Suave Pirate", "Floating Isles"],
        ["Cutthroat Pirate", "Floating Isles"],
        ["Cutthroat Cannoneer", "Floating Isles"],
        ["Scarlet Revenger", "Floating Isles"],
        ["Maritime Pirate", "Floating Isles"],
        ["Admiral Cloudbeard", "Floating Isles"],
    
        ["Warden of Rain", "Floating Isles"],
        ["Warden of Fog", "Floating Isles"],
        ["Warden of Frost", "Floating Isles"],
        ["Warden of Wind", "Floating Isles"],
    
        ["Paragon of Strength", "Floating Isles"],
        ["Paragon of Shadow", "Floating Isles"],
        ["Paragon of Tactics", "Floating Isles"],
        ["Paragon of Arcane", "Floating Isles"],
        ["Paragon of Forgotten", "Floating Isles"],
        ["Paragon of Water", "Floating Isles"],
        ["Paragon of Dragons", "Floating Isles"],
        ["Paragon of the Lawless", "Floating Isles"],
    
        ["Richard the Rich", "Floating Isles"],
    
    /* ==============================
    Gnawnia Rift
    ============================== */		
        ["Micro", "Gnawnia Rift"],
        ["Brawny", "Gnawnia Rift"],
        ["Riftweaver", "Gnawnia Rift"],
        ["Greyrun", "Gnawnia Rift"],
        ["Dream Drifter", "Gnawnia Rift"],
        ["Excitable Electric", "Gnawnia Rift"],
        ["Supernatural", "Gnawnia Rift"],
        ["Agitated Gentle Giant", "Gnawnia Rift"],
        ["Mighty Mole", "Gnawnia Rift"],
    
        ["Rift Guardian", "Gnawnia Rift"],
        ["Cyborg", "Gnawnia Rift"],
        ["Shard Centurion", "Gnawnia Rift"],
        ["Spiritual Steel", "Gnawnia Rift"],
        ["Raw Diamond", "Gnawnia Rift"],
        ["Wealth", "Gnawnia Rift"], // better ar in furomarift
        ["Goliath Field", "Gnawnia Rift"],
    
    /* ==============================
    Burroughs Rift
    ============================== */		
        ["Amplified White", "Burroughs Rift"],
        ["Amplified Grey", "Burroughs Rift"],
        ["Amplified Brown", "Burroughs Rift"],
        ["Cybernetic Specialist", "Burroughs Rift"],
        ["Rift Bio Engineer", "Burroughs Rift"],
        ["Automated Sentry", "Burroughs Rift"],
        ["Surgeon Bot", "Burroughs Rift"],
        ["Evil Scientist", "Burroughs Rift"],
        ["Doktor", "Burroughs Rift"],
        ["Portable Generator", "Burroughs Rift"],
    
        ["Prototype", "Burroughs Rift"],
        ["Robat", "Burroughs Rift"],
        ["Phase Zombie", "Burroughs Rift"],
        ["Count Vampire", "Burroughs Rift"],
        ["Tech Ravenous Zombie", "Burroughs Rift"],
        ["Zombot Unipire the Third", "Burroughs Rift"],
        ["Lycanoid", "Burroughs Rift"],
        ["Revenant", "Burroughs Rift"],
    
        ["Pneumatic Dirt Displacement", "Burroughs Rift"],
        ["Itty Bitty Rifty Burroughs", "Burroughs Rift"],
        ["Rifterranian", "Burroughs Rift"],
        ["Clump", "Burroughs Rift"],
        ["Cyber Miner", "Burroughs Rift"],
        ["Master Exploder", "Burroughs Rift"],
        ["Boulder Biter", "Burroughs Rift"],
    
        ["Mecha Tail", "Burroughs Rift"],
        ["Radioactive Ooze", "Burroughs Rift"],
        ["Toxikinetic", "Burroughs Rift"],
        ["Toxic Avenger", "Burroughs Rift"],
        ["Rancid Bog Beast", "Burroughs Rift"],
        ["Super Mega Mecha Ultra RoboGold", "Burroughs Rift"],
        ["Plutonium Tentacle", "Burroughs Rift"],
        ["Assassin Beast", "Burroughs Rift"],
    
        ["Menace of the Rift", "Burroughs Rift"],
        ["Monstrous Abomination", "Burroughs Rift"],
        ["Big Bad Behemoth Burroughs", "Burroughs Rift"],
    
    /* ==============================
    Whisker Woods Rift
    ============================== */	
        ["Mossy Moosker", "Whisker Woods Rift"],
        ["Cranky Caterpillar", "Whisker Woods Rift"],
        ["Bloomed Sylvan", "Whisker Woods Rift"],
        ["Spirit of Balance", "Whisker Woods Rift"],
        ["Fungal Frog", "Whisker Woods Rift"],
        ["Karmachameleon", "Whisker Woods Rift"],
        ["Red Coat Bear", "Whisker Woods Rift"],
        ["Medicine", "Whisker Woods Rift"],
        ["Twisted Treant", "Whisker Woods Rift"],
        ["Water Sprite", "Whisker Woods Rift"],
        ["Treant Queen", "Whisker Woods Rift"],
        ["Spirit Fox", "Whisker Woods Rift"],
        ["Red-Eyed Watcher Owl", "Whisker Woods Rift"],
        ["Rift Tiger", "Whisker Woods Rift"],
        ["Nomadic Warrior", "Whisker Woods Rift"],
        ["Crazed Goblin", "Whisker Woods Rift"],
        ["Tree Troll", "Whisker Woods Rift"],
        ["Winged Harpy", "Whisker Woods Rift"],
    
        ["Cyclops Barbarian", "Whisker Woods Rift"],
        ["Centaur Ranger", "Whisker Woods Rift"],
        ["Tri-dra", "Whisker Woods Rift"],
        ["Cherry Sprite", "Whisker Woods Rift"],
        ["Naturalist", "Whisker Woods Rift"],
        ["Grizzled Silth", "Whisker Woods Rift"],
        ["Gilded Leaf", "Whisker Woods Rift"],
        ["Monstrous Black Widow", "Whisker Woods Rift"],
    
    /* ==============================
    Furoma Rift
    ============================== */		
        ["Enlightened Labourer", "Furoma Rift"],
        ["Dumpling Delivery", "Furoma Rift"],
        ["Armored Archer", "Furoma Rift"],
        ["Shinobi", "Furoma Rift"],
        ["Shaolin Kung Fu", "Furoma Rift"],
        ["Wandering Monk", "Furoma Rift"],
        ["Militant Samurai", "Furoma Rift"],
        ["Dancing Assassin", "Furoma Rift"],
        ["Student of the Chi Belt", "Furoma Rift"],
        ["Student of the Chi Claw", "Furoma Rift"],
        ["Student of the Chi Fang", "Furoma Rift"],
        ["Master of the Chi Belt", "Furoma Rift"],
        ["Master of the Chi Fang", "Furoma Rift"],
        ["Master of the Chi Claw", "Furoma Rift"],
        ["Grand Master of the Dojo", "Furoma Rift"],
        ["Supreme Sensei", "Furoma Rift"],
        ["Ascended Elder", "Furoma Rift"],
    
    /* ==============================
    Bristle Woods Rift
    ============================== */	
        ["Skeletal Champion", "Bristle Woods Rift"],
        ["Record Keeper's Assistant", "Bristle Woods Rift"],
        ["Record Keeper", "Bristle Woods Rift"],
        ["Sentient Slime", "Bristle Woods Rift"],
        ["Dread Knight", "Bristle Woods Rift"],
        ["Portal Plunderer", "Bristle Woods Rift"],
        ["Clockwork Timespinner", "Bristle Woods Rift"],
        ["Epoch Golem", "Bristle Woods Rift"],
        ["Chamber Cleaver", "Bristle Woods Rift"],
        ["Portal Pursuer", "Bristle Woods Rift"],
        ["Vigilant Ward", "Bristle Woods Rift"],
        ["Timelost Thaumaturge", "Bristle Woods Rift"],
        ["Shackled Servant", "Bristle Woods Rift"],
        ["Portal Paladin", "Bristle Woods Rift"],
        ["Harbinger of Death", "Bristle Woods Rift"],
        ["Timeslither Pythoness", "Bristle Woods Rift"],
        ["Carrion Medium", "Bristle Woods Rift"],
        ["Timeless Lich", "Bristle Woods Rift"],
        ["Chronomaster", "Bristle Woods Rift"],
        ["Absolute Acolyte", "Bristle Woods Rift"],
    
    /* ==============================
    Valour Rift
    ============================== */	
        ["Timid Explorer", "Valour Rift"],
        ["Elixir Maker", "Valour Rift"],
        ["Terrified Adventurer", "Valour Rift"],
        ["Unwavering Adventurer", "Valour Rift"],
        ["Berzerker", "Valour Rift"],
        ["Lumi-lancer", "Valour Rift"],
        ["Puppetto", "Valour Rift"],
        ["Puppet Champion", "Valour Rift"],
        ["Cutpurse", "Valour Rift"],
        ["Champion Thief", "Valour Rift"],
        ["Martial", "Valour Rift"],
        ["Praetorian Champion", "Valour Rift"],
        ["One-Mouse Band", "Valour Rift"],
        ["Champion Danseuse", "Valour Rift"],
        ["Mouse of Elements", "Valour Rift"],
        ["Magic Champion", "Valour Rift"],
        ["Cursed Crusader", "Valour Rift"],
        ["Fallen Champion Footman", "Valour Rift"],
        ["Withered Remains", "Valour Rift"],
        ["Arch Champion Necromancer", "Valour Rift"],
        ["Possessed Armaments", "Valour Rift"],
        ["Prestigious Adventurer", "Valour Rift"],
        ["Soldier of the Shade", "Valour Rift"],
        ["Bulwark of Ascent", "Valour Rift"],
        ["Shade of the Eclipse", "Valour Rift"],
        ["The Total Eclipse", "Valour Rift"],
        
    /* ==============================
    Toxic Spill
    ============================== */	
    
    /* ==============================
    Event Mice
    ============================== */	
        ["", ""],
        ["default", ""]
    ]);
    
    