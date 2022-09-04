export interface TrainerData {
  x: number; // x coordinate of the top-left pixel of this trainer
  y: number; // y coordinate of the top-left pixel of this trainer
  // points: string; // "points" attr for the <polygon> element
  name: string; // name of the trainer
  numPokemon: number; // number of pokemon this trainer has
  walker?: boolean; // T/F if the trainer walks around
  spinner?: boolean; // T/F if the trainer is a stationary spinner
}

export const defaultTrainerHeight = 22;
export const defaultTrainerWidth = 18;

export interface BoundingBoxCoords {
  x: number;
  y: number;
}

export interface BoundingBox {
  topLeft: BoundingBoxCoords;
  topRight: BoundingBoxCoords;
  bottomRight: BoundingBoxCoords;
  bottomLeft: BoundingBoxCoords;
}

export const buildBoundingBox = (
  topLeftCoords: BoundingBoxCoords,
  width: number,
  height: number
): BoundingBox => {
  return {
    topLeft: {
      x: topLeftCoords.x,
      y: topLeftCoords.y,
    },
    topRight: {
      x: topLeftCoords.x + width,
      y: topLeftCoords.y,
    },
    bottomRight: {
      x: topLeftCoords.x + width,
      y: topLeftCoords.y + height,
    },
    bottomLeft: {
      x: topLeftCoords.x,
      y: topLeftCoords.y + height,
    },
  };
};

export const convertBoundingBoxToPolygonPoints = (box: BoundingBox) => {
  const topLeftString = `${box.topLeft.x},${box.topLeft.y}`;
  const topRightString = `${box.topRight.x},${box.topRight.y}`;
  const bottomRightString = `${box.bottomRight.x},${box.bottomRight.y}`;
  const bottomLeftString = `${box.bottomLeft.x},${box.bottomLeft.y}`;

  return `${topLeftString} ${topRightString} ${bottomRightString} ${bottomLeftString} ${topLeftString}`;
};

export const trainers: TrainerData[] = [
  // Viridian Forest
  {
    name: "Bug Catcher Rick",
    numPokemon: 2,
    x: 828,
    y: 4247,
  },
  {
    name: "Bug Catcher Doug",
    numPokemon: 3,
    x: 825,
    y: 3989,
  },
  {
    name: "Bug Catcher Anthony",
    numPokemon: 2,
    x: 767,
    y: 3627,
  },
  {
    name: "Bug Catcher Charlie",
    numPokemon: 3,
    x: 345,
    y: 3602,
  },
  {
    name: "Bug Catcher Sammy",
    numPokemon: 1,
    x: 193,
    y: 3884,
  },

  // Route 03/Pre Mt. Moon
  {
    name: "Lass Robin",
    numPokemon: 1,
    x: 2175,
    y: 1288,
    walker: true,
  },
  {
    name: "Youngster Calvin",
    numPokemon: 1,
    x: 2000,
    y: 1271,
  },
  {
    name: "Bug Catcher James",
    numPokemon: 2,
    x: 2045,
    y: 1211,
  },
  {
    name: "Lass Sally",
    numPokemon: 2,
    x: 2015,
    y: 1163,
  },
  {
    name: "Bug Catcher Greg",
    numPokemon: 4,
    x: 1941,
    y: 1181,
  },
  {
    name: "Lass Janice",
    numPokemon: 2,
    x: 1838,
    y: 1259,
  },
  {
    name: "Youngster Ben",
    numPokemon: 2,
    x: 1810,
    y: 1179,
  },
  {
    name: "Bug Catcher Colton",
    numPokemon: 3,
    x: 1725,
    y: 1207,
  },

  // Mt. Moon

  // 1F
  {
    name: "Bug Catcher Kent",
    numPokemon: 2,
    x: 1819,
    y: 513,
  },
  {
    name: "Lass Iris",
    numPokemon: 1,
    x: 2027,
    y: 497,
  },
  {
    name: "Super Nerd Jovan",
    numPokemon: 2,
    x: 2189,
    y: 642,
    spinner: true,
  },
  {
    name: "Bug Catcher Robby",
    numPokemon: 3,
    x: 2284,
    y: 564,
  },
  {
    name: "Lass Miriam",
    numPokemon: 2,
    x: 2165,
    y: 203,
    walker: true,
  },
  {
    name: "Youngster Josh",
    numPokemon: 3,
    x: 1915,
    y: 358,
  },
  {
    name: "Hiker Marcos",
    numPokemon: 3,
    x: 1802,
    y: 230,
    walker: true,
  },

  // B2F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 3524,
    y: 494,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 3797,
    y: 256,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 3826,
    y: 398,
    spinner: true,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 3424,
    y: 380,
  },
  {
    name: "Super Nerd Miguel",
    numPokemon: 3,
    x: 3441,
    y: 236,
  },

  // Rt 4/Post Mt Moon
  // TODO: Lass near Cerulean Cave

  // Rt 24/Nugget Bridge
  {
    name: "Bug Catcher Cale",
    numPokemon: 4,
    x: 4607,
    y: 491,
  },
  {
    name: "Lass Ali",
    numPokemon: 3,
    x: 4574,
    y: 444,
  },
  {
    name: "Youngster Timmy",
    numPokemon: 2,
    x: 4607,
    y: 397,
  },
  {
    name: "Lass Reli",
    numPokemon: 2,
    x: 4574,
    y: 347,
  },
  {
    name: "Camper Ethan",
    numPokemon: 1,
    x: 4607,
    y: 299,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 4607,
    y: 239,
  },
  {
    name: "Camper Shane",
    numPokemon: 2,
    x: 4496,
    y: 332,
  },

  // Rt 25
  {
    name: "Hiker Franklin",
    numPokemon: 2,
    x: 4973,
    y: 63,
  },
  {
    name: "Hiker Wayne",
    numPokemon: 1,
    x: 5069,
    y: 107,
  },
  {
    name: "Youngster Joey",
    numPokemon: 2,
    x: 5089,
    y: 26,
  },
  {
    name: "Youngster Dan",
    numPokemon: 1,
    x: 5152,
    y: 61,
    spinner: true,
  },
  {
    name: "Picknicker Kelsey",
    numPokemon: 2,
    x: 5151,
    y: 122,
  },
  {
    name: "Hiker Nob",
    numPokemon: 4,
    x: 5229,
    y: 140,
  },
  {
    name: "Camper Flint",
    numPokemon: 2,
    x: 5249,
    y: 59,
  },
  {
    name: "Youngster Chad",
    numPokemon: 2,
    x: 5375,
    y: 75,
    walker: true,
  },
  {
    name: "Lass Haley",
    numPokemon: 3,
    x: 5472,
    y: 76,
  },

  // Cerulean City
  {
    name: "Rocket Grunt",
    numPokemon: 2,
    x: 4759,
    y: 731,
  },

  // Rt 6
  {
    name: "Bug Catcher Keigo",
    numPokemon: 3,
    x: 4464,
    y: 2813,
  },
  {
    name: "Camper Ricky",
    numPokemon: 1,
    x: 4609,
    y: 2892,
  },
  {
    name: "Picknicker Nancy",
    numPokemon: 2,
    x: 4625,
    y: 2892,
  },
  {
    name: "Bug Catcher Elijah",
    numPokemon: 1,
    x: 4736,
    y: 2956,
  },
  {
    name: "Picknicker Isabelle",
    numPokemon: 3,
    x: 4625,
    y: 3068,
  },
  {
    name: "Camper Jeff",
    numPokemon: 2,
    x: 4625,
    y: 3086,
  },

  // Rt 11
  {
    name: "Youngster Eddie",
    numPokemon: 1,
    x: 5298,
    y: 3484,
  },
  {
    name: "Gamer Hugo",
    numPokemon: 2,
    x: 5249,
    y: 3630,
  },
  {
    name: "Youngster Dave",
    numPokemon: 2,
    x: 5441,
    y: 3548,
    walker: true,
  },
  {
    name: "Youngster Dillon",
    numPokemon: 2,
    x: 5485,
    y: 3487,
    spinner: true,
  },
  {
    name: "Engineer Bernie",
    numPokemon: 3,
    x: 5505,
    y: 3643,
  },
  {
    name: "Gamer Jasper",
    numPokemon: 2,
    x: 5600,
    y: 3596,
  },
  {
    name: "Gamer Darian",
    numPokemon: 2,
    x: 5793,
    y: 3420,
    spinner: true,
  },
  {
    name: "Engineer Braxton",
    numPokemon: 2,
    x: 5666,
    y: 3485,
  },
  {
    name: "Youngster Yasu",
    numPokemon: 3,
    x: 5793,
    y: 3547,
    walker: true,
  },
  {
    name: "Gamer Dirk",
    numPokemon: 2,
    x: 5905,
    y: 3614,
    spinner: true,
  },

  // S.S. Anne
  // Main Floor
  {
    // TODO: what is this dude's name
    name: "Gentleman",
    numPokemon: 2,
    x: 5376,
    y: 4160,
  },
  {
    name: "Gentleman Arthur",
    numPokemon: 2,
    x: 5264,
    y: 4183,
    // TODO: battle on enter
  },
  {
    name: "Youngster Tyler",
    numPokemon: 1,
    x: 5106,
    y: 4188,
  },
  {
    name: "Lass Ann",
    numPokemon: 2,
    x: 5135,
    y: 4165,
    spinner: true,
  },

  // Lower Floor
  {
    // TODO: Duncan and Leonard might be flipped
    name: "Sailor Duncan",
    numPokemon: 3,
    x: 5708,
    y: 4096,
  },
  {
    name: "Sailor Leonard",
    numPokemon: 1,
    x: 5687,
    y: 4138,
    spinner: true,
  },
  {
    name: "Sailor Dylan",
    numPokemon: 3,
    x: 5647,
    y: 4117,
    // TODO: battle on enter
  },
  {
    name: "Sailor Huey",
    numPokemon: 2,
    x: 5570,
    y: 4121,
    spinner: true,
  },
  {
    name: "Sailor Phillip",
    numPokemon: 1,
    x: 5510,
    y: 4083,
  },
  {
    name: "Fisherman Barny",
    numPokemon: 3,
    x: 5541,
    y: 4083,
  },

  // Deck
  {
    name: "Sailor Edmond",
    numPokemon: 2,
    x: 4800,
    y: 4000,
  },
  {
    name: "Sailor Trevor",
    numPokemon: 2,
    x: 4709,
    y: 3979,
    walker: true,
  },

  // Upper Level
  {
    name: "Fisherman Dale",
    numPokemon: 3,
    x: 5174,
    y: 3766,
  },
  {
    name: "Gentleman Brooks",
    numPokemon: 1,
    x: 5136,
    y: 3746,
  },
  {
    name: "Lass Dawn",
    numPokemon: 2,
    x: 5282,
    y: 3717,
  },
  {
    name: "Gentleman Lamar",
    numPokemon: 2,
    x: 5256,
    y: 3760,
  },
  {
    name: "Rival",
    numPokemon: 4,
    x: 5471,
    y: 3723,
  },

  // Rt9/Pre Rock Tunnel
  {
    name: "Picknicker Alicia",
    numPokemon: 4,
    x: 5218,
    y: 954,
  },
  {
    name: "Hiker Jeremy",
    numPokemon: 2,
    x: 5311,
    y: 1068,
    spinner: true,
  },
  {
    name: "Camper Chris",
    numPokemon: 2,
    x: 5410,
    y: 909,
    spinner: true,
  },
  {
    name: "Bug Catcher Brent",
    numPokemon: 2,
    x: 5399,
    y: 814,
  },
  {
    name: "Bug Catcher Conner",
    numPokemon: 3,
    x: 5776,
    y: 908,
  },
  {
    name: "Hiker Alan",
    numPokemon: 2,
    x: 5809,
    y: 830,
    walker: true,
  },
  {
    name: "Picknicker Caitlin",
    numPokemon: 1,
    x: 5956,
    y: 939,
  },
  {
    name: "Camper Drew",
    numPokemon: 3,
    x: 5568,
    y: 891,
  },
  {
    name: "Hiker Brice",
    numPokemon: 3,
    x: 5971,
    y: 1050,
  },
  {
    name: "Picknicker Heidi",
    numPokemon: 2,
    x: 6291,
    y: 1228,
  },

  // Rock Tunnel
  // 1F
  {
    name: "Pokémaniac Ashton",
    numPokemon: 2,
    x: 6467,
    y: 305,
  },
  {
    name: "Hiker Lenny",
    numPokemon: 4,
    x: 6145,
    y: 228,
  },
  {
    name: "Hiker Oliver",
    numPokemon: 3,
    x: 6117,
    y: 468,
  },
  {
    name: "Hiker Lucas",
    numPokemon: 2,
    x: 6355,
    y: 422,
  },
  {
    name: "Picknicker Leah",
    numPokemon: 2,
    x: 6756,
    y: 534,
  },
  {
    name: "Picknicker Ariana",
    numPokemon: 4,
    x: 6659,
    y: 582,
  },
  {
    name: "Picknicker Dana",
    numPokemon: 3,
    x: 6452,
    y: 595,
  },

  // B1
  {
    name: "Pokémaniac Winston",
    numPokemon: 1,
    x: 7276,
    y: 707,
  },
  {
    name: "Picknicker Martha",
    numPokemon: 2,
    x: 7051,
    y: 674,
  },
  {
    name: "Pokémaniac Steve",
    numPokemon: 2,
    x: 7180,
    y: 516,
  },
  {
    name: "Hiker Allen",
    numPokemon: 1,
    x: 7392,
    y: 324,
  },
  {
    name: "Hiker Eric",
    numPokemon: 2,
    x: 7468,
    y: 228,
  },
  {
    name: "Picknicker Heidi",
    numPokemon: 3,
    x: 6992,
    y: 389,
  },
  {
    name: "Hiker Dudley",
    numPokemon: 3,
    x: 6896,
    y: 319,
  },
  {
    name: "Pokémaniac Cooper",
    numPokemon: 3,
    x: 6848,
    y: 247,
    spinner: true,
  },

  // Rt10
  {
    name: "Picknicker Carol",
    numPokemon: 2,
    x: 6256,
    y: 1764,
    spinner: true,
  },
  {
    name: "Hiker Clark",
    numPokemon: 2,
    x: 6211,
    y: 1788,
    spinner: true,
  },
  {
    name: "Hiker Trent",
    numPokemon: 2,
    x: 6209,
    y: 1884,
  },
  {
    name: "Pokémaniac Herman",
    numPokemon: 2,
    x: 6389,
    y: 1922,
    walker: true,
  },

  // Rt 8
  {
    name: "Lass Julia",
    numPokemon: 2,
    x: 5982,
    y: 2301,
  },
  {
    name: "Gamer Rich",
    numPokemon: 2,
    x: 5868,
    y: 2317,
  },
  {
    name: "Super Nerd Glenn",
    numPokemon: 3,
    x: 5808,
    y: 2171,
    spinner: true,
  },
  {
    name: "Twins Eli Anne",
    numPokemon: 2,
    x: 5585,
    y: 2130,
    // TODO: double
  },
  {
    name: "Super Nerd Leslie",
    numPokemon: 1,
    x: 5434,
    y: 2141,
  },
  {
    name: "Lass Megan",
    numPokemon: 5,
    x: 5434,
    y: 2123,
  },
  {
    name: "Lass Paige",
    numPokemon: 2,
    x: 5434,
    y: 2161,
  },
  {
    name: "Lass Andrea",
    numPokemon: 3,
    x: 5434,
    y: 2178,
  },
  {
    name: "Biker Jaren",
    numPokemon: 2,
    x: 5458,
    y: 2281,
    walker: true,
  },
  {
    name: "Biker Ricardo",
    numPokemon: 3,
    x: 5276,
    y: 2326,
    walker: true,
  },
  {
    name: "Gamer Stan",
    numPokemon: 3,
    x: 5326,
    y: 2128,
  },
  {
    name: "Super Nerd Aidan",
    numPokemon: 4,
    x: 5135,
    y: 2174,
  },

  // Rocket Hideout
  // B1
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 2566,
    y: 2716,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 2887,
    y: 2765,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 2598,
    y: 3085,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 2663,
    y: 2924,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 2837,
    y: 3005,
    spinner: true,
  },

  // B2
  {
    name: "Team Rocket Grunt",
    numPokemon: 5,
    x: 2830,
    y: 3234,
    spinner: true,
  },

  // B3
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 3277,
    y: 2717,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 3004,
    y: 2893,
  },

  // B4
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 3093,
    y: 3059,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 3285,
    y: 3253,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    x: 3334,
    y: 3254,
  },
  {
    name: "Giovanni",
    numPokemon: 4,
    x: 3333,
    y: 3095,
  },

  // Pokemon Tower
  // 1F
  {
    name: "Rival",
    numPokemon: 4,
    x: 6775,
    y: 2793,
  },

  // 3F
  {
    name: "Channeler Patricia",
    numPokemon: 1,
    x: 6664,
    y: 2563,
  },
  {
    name: "Channeler Carly",
    numPokemon: 1,
    x: 6679,
    y: 2641,
  },
  {
    name: "Channeler Hope",
    numPokemon: 1,
    x: 6711,
    y: 2481,
    spinner: true,
  },

  // 4F
  {
    name: "Channeler Laurel",
    numPokemon: 2,
    x: 6792,
    y: 2240,
  },
  {
    name: "Channeler Jody",
    numPokemon: 1,
    x: 6758,
    y: 2338,
  },
  {
    name: "Channeler Paula",
    numPokemon: 1,
    x: 6583,
    y: 2325,
  },

  // 5F
  {
    name: "Channeler Janae",
    numPokemon: 1,
    x: 6822,
    y: 1953,
  },
  {
    name: "Channeler Karina",
    numPokemon: 1,
    x: 6631,
    y: 2036,
  },
  {
    name: "Channeler Tammy",
    numPokemon: 1,
    x: 6694,
    y: 2097,
    spinner: true,
  },
  // TODO: Missing a channeler here
  {
    name: "Channeler",
    numPokemon: 1,
    x: 6694,
    y: 1906,
    spinner: true,
  },

  // 6F
  {
    name: "Channeler Angelica",
    numPokemon: 3,
    x: 6727,
    y: 1715,
  },
  {
    name: "Channeler Jennifer",
    numPokemon: 1,
    x: 6806,
    y: 1651,
  },
  {
    name: "Channeler Emilia",
    numPokemon: 1,
    x: 6663,
    y: 1650,
  },

  // 7F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    x: 6662,
    y: 1429,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    x: 6728,
    y: 1396,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    x: 6662,
    y: 1363,
  },

  // Rt12/To Fuschia
];
