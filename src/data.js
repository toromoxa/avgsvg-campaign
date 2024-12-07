export const journalEntries = [
  {
    id: 1,
    date: "March 21",
    title: "Arm-wrestling, music-making, flirtatious-murderers for hire!",
    summary:
      "Meeting for the first time in a tavern in Termalaine, our heroes take measure of each other and find quick work for fair pay. The hippo gunslinger and cat barbarian engage in friendly feats of strength. The Half-Elf networks with locals. The drawf makes conversation.",
    url: require("./assets/icewind-dale-fullmap.jpg"),
    startPoint: "Termalaine",
    endPoint: "Tavern",
    loot: null,
  },
  {
    id: 2,
    date: "March 28",
    title: "The Gang Commits Premeditated Murder...",
    summary: "Sent by Hiln to deal with a supernatural threat, the gang confronts an agent of the Frost Maiden. He stands no match for our four fearless heroes. Henceforth known only as Burger Meat Man due to what little remained of his body, this foe was certainly evil. And carrying a strange carving made of bone.",
    url: require("./assets/openart-royce-rogue_raw.jpg"),
    startPoint: "Tavern",
    endPoint: "Tavern",
    lootFound: ['100GP', 'bone scrimshaw', ]
  },
  {
    id: 3,
    date: "April 18",
    title: "Hard Coin and Trouble at the Mine",
    summary: "The Gang is rewarded for their gumption, and told to speak to Orus about potential work securing the nearby gem mine. Our party is attacked on our way to the mine. Creatures of every sort charged forth. It wouldn't be an adventure without murdering every other living thing we encounter.",
    url: require("./assets/stag-goat-owl.jpeg"),
    startPoint: "Tourmalaine",
    endPoint: 'Tavern',
    lootFound: null,
  },
  {
    id: 4,
    date: "April 25",
    title: "Inside the Mine, a near-death trap!",
    summary: "As our heroes ventured into the Mine at the request of the Town Speaker of Tourmalaine, they are met almost immediately by foul designs. A wooden bridge, sabotaged! Modac nearly plummets to his doom. (see Mulan avalanche scene for clarification on how we rescued him.)",
    url: require("./assets/modac_shock.jpg"),
    startPoint: "Tourmalaine",
    endPoint: "the mine",
    lootFound: null,
  },
  {
    id: 5,
    date: "May 2",
    title: "Some Kobolds die, some Kobolds are born again...",
    summary: "After exploring the mine extensively, Heart and Funquisto pop a few Kobold heads off. While Modac and Lyethar convince the remaining three Kobolds to take an offered deal that would keep them alive, and more importantly employed.",
    url: require('./assets/larry-curly-moe.jpg'),
    startPoint: "The mine",
    endPoint: 'Tourmalaine',
    lootFound: ['rat-shit bullets', 'a large gem'] 
  },
  {
    id: 6,
    date: "May 9",
    title: "Banshee Business is Bad for the Boys",
    summary: "After settling issues at the mine, the gang gets a promising lead that the town of Lonelywood needs a Killer Moose dealt with, our band of heroes sets forth but on the two-hour walk is beset by a Banshee. Things really escalated quickly. Lyethar almost died.",
    url: require("./assets/beinsi-banshee.jpg"),
    startPoint: "Lonelywood",
    endPoint: 'The Lazy Liar',
    lootFound: null,
  },
  {
    id: 7,
    date: "May 16",
    title: "Lonelywood and the Hunt for a Man-Eating Moose",
    summary: "Didn't find the moose, but rest assured its out there. We killed just about every other Gods-damned moose in the Lonely Wood. Corpses and meat for days. Also, the local inn at Lonelywood is a shit-hole.",
    url: require("./assets/Bull-moose-in-winter.jpg"),
    startPoint: 'Lonelywood',
    endPoint: 'The Lazy Liar',
    lootFound: ['Hella meat for jerky',]
  },
  {
    id: 8,
    date: "May 23",
    title: "Heart Gets a Proper Blood Bath",
    summary: "While still hunting for the White Moose, our heroes are set upon by a pack of Wolves. And one is suspiciously covered in purple body paint...also...theres a giant war Walrus. This druid's recruitment efforts are admirable, every living thing in the surround area wants to eat us!",
    url: require('./assets/enchanted_dire_wolf.jpg'),
    startPoint: "Lonelywood",
    endPoint: 'The Lazy Liar',
    lootFound: null,
  },
  {
    id: 9,
    date: "May 25",
    title: "Killed that Wolf Pack, Druid included!",
    summary: "A fierce battle was fought against a pack of wolves and their dirty-hippie Druid leader. Our heroes play whack-a-mole until someone kills the Druid leader. Turns out said War-Walrus was just a walrus. Crazy big. Modac got a little dinged up but came in clutch with a BIG smitey-smite hammer strike. ",
    url: require("./assets/winter-wolf.jpg"),
    startPoint: "The Lazy Liar",
    endPoint: 'The Lonely Woods',
    lootFound: ['Walrus Ivory tusk', 'bone scrimshaw #2'],
  },
  {
    id: 10,
    date: "May 30",
    title: "Found and Killed that Gods-damned Moose!",
    summary: "After killing a shit-ton of wolves and their Druid leader, we managed to find the moose. And Lo and Behold! it led us into a strange icy-stone monument to the Moon Goddess. Sadly, we could not confirm if the moose was some kind of Moon-Godess agent, and we did have a job to do. We're just lucky Heart left anything to take back as proof the job was completed.",
    url: require("./assets/evil-moose.jpg"),
    startPoint: "The Lonely Wood",
    endPoint: 'The Moon Mirror',
    lootFound: ['some herbs', 'magical moose pelt cloak' ]
  },
  {
    id: 11,
    date: "June 13",
    title: "Exploring the Moon Monument--is there someone is this room?!",
    summary: "We explored the stone monument and surrounding area. In one room was some half-dead, half-crazed servant of the Frost Maiden. A druid, she tried to flee in bird-form and Funquisto shot her down like a goose for feast. Great scott--that was a great shot!",
    url: require("./assets/frost_druid.jpg"),
    startPoint: "The Moon Mirror",
    endPoint: 'The Moon Mirror',
    lootFound: ['bone scrimshaw #3', 'shrubby']
  },
  {
    id: 12,
    date: "July 11",
    title: "If Mirrors Could Talk",
    summary: "Party was able to scry and remote view different contacts. Lyethar saw his mentor in dire straights. Heart was shown images relating to the location of his soul. Modac discovers that our friend Moe the Kobold is behaving oddly and seems braindead...or more braindead than usual for a Kobold. Funquisto sees the leader of the Arcane Brotherhood curled up with a book, also its a woman so clearly Brotherhood is not a member-specific term.",
    url: require("./assets/mirror_monument.jpg"),
    startPoint: "The Moon Mirror",
    endPoint: "Lonelywood",
    lootFound: ['a feather?',]
  },
  {
    id: 13,
    date: "July 18",
    title: "The Gang Returns to Tourmalaine",
    summary: "Intrigue abounds! We got Orus to devulge more useful information about the Ten Towns politics and the issue he has been having with the local Militia leader. Miners are still disappearing, making us look bad. Modac hung back with his massuese. Funquisto, Heart, and Lyethar encounter a Grell while double-checking the mine and kill it good.",
    url: require("./assets/the_grell.jpg"),
    startPoint: "Lonely Wood",
    endPoint: "The Mine",
    lootFound: ['12 rations of wolf jerky',]
  },
  {
    id: 14,
    date: "July 25",
    title: "Whelp, Moes dead. Or may as well be.",
    summary: "Moe is stupid again sans a pouch of herbs. We confront the militia captian of Tourmalaine and Targos in colusion together trying to intimidate Orus. Showed them the Grell corpse and were offered more work with a monster in Targos, but Orus did not want us to leave with that dude. Our insight says he has ill intent. Also, the local Tourmalaine militia leader is a biggity-biggity-bitch!",
    url: require("./assets/wwe_suck-it.jpg"),
    startPoint: "The Mine",
    endPoint: "Tourmalaine",
    lootFound: ['target lantern', 'grell beak']
  },
  {
    id: 15,
    date: "August 1",
    title: "The Halfling hath no limits.",
    summary: "The group forgoes the town of Targos, and heads onward to Bremen to see about a lake monster. Whilst crossing treacherous icy waters, Modac slips and breaks his shit. Lyethar stays behind with him as Heart and Funquisto forge onward. Heart is known in the town of Bremen as he and Funquisto set about getting information, they encounter a strange halfling in the tavern. Also, Shrubby knows the lake monster, named Ted.",
    url: '',
    startPoint: "The Mine",
    endPoint: "Tourmalaine",
    lootFound: ['target lantern', 'grell beak']
  },
  {
    id: 16,
    date: "August 8",
    title: "",
    summary: "",
    url: '',
    startPoint: "The Mine",
    endPoint: "Tourmalaine",
    lootFound: ['target lantern', 'grell beak']
  },
];
