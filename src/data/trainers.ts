export interface TrainerData {
  x: number; // x coordinate of the top-left pixel of this trainer
  y: number; // y coordinate of the top-left pixel of this trainer
  // points: string; // "points" attr for the <polygon> element
  name: string; // name of the trainer
  numPokemon: number; // number of pokemon this trainer has
  pokemonLevels: number[]; // Array of levels for the pokemon this trainer has
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
    pokemonLevels: [9, 9],
    x: 828,
    y: 4247,
  },
  {
    name: "Bug Catcher Doug",
    numPokemon: 3,
    pokemonLevels: [11, 11, 11],
    x: 825,
    y: 3989,
  },
  {
    name: "Bug Catcher Anthony",
    numPokemon: 2,
    pokemonLevels: [11, 12],
    x: 767,
    y: 3627,
  },
  {
    name: "Bug Catcher Charlie",
    numPokemon: 3,
    pokemonLevels: [11, 11, 11],
    x: 345,
    y: 3602,
  },
  {
    name: "Bug Catcher Sammy",
    numPokemon: 1,
    pokemonLevels: [14],
    x: 193,
    y: 3884,
  },

  // Viridian Rival
  {
    name: "Rival (First)",
    numPokemon: 2,
    pokemonLevels: [14, 14],
    x: 484,
    y: 3115,
  },
  {
    name: "Rival (Second)",
    numPokemon: 6,
    pokemonLevels: [71, 68, 68, 71, 68, 80],
    x: 456,
    y: 3115,
  },

  // Route 03/Pre Mt. Moon
  {
    name: "Lass Janice",
    numPokemon: 2,
    pokemonLevels: [14, 14],
    x: 1838,
    y: 1259,
  },
  {
    name: "Bug Catcher Colton",
    numPokemon: 3,
    pokemonLevels: [15, 15, 15],
    x: 1725,
    y: 1207,
  },
  {
    name: "Youngster Ben",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 1810,
    y: 1179,
  },
  {
    name: "Bug Catcher Greg",
    numPokemon: 4,
    pokemonLevels: [14, 14, 14, 14],
    x: 1941,
    y: 1181,
  },
  {
    name: "Lass Sally",
    numPokemon: 2,
    pokemonLevels: [15, 15],
    x: 2015,
    y: 1163,
  },
  {
    name: "Youngster Calvin",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 2000,
    y: 1271,
  },
  {
    name: "Bug Catcher James",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 2045,
    y: 1211,
  },
  {
    name: "Lass Robin",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 2175,
    y: 1288,
    walker: true,
  },

  // Mt. Moon

  // 1F
  {
    name: "Bug Catcher Kent",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 1819,
    y: 513,
  },
  {
    name: "Lass Iris",
    numPokemon: 1,
    pokemonLevels: [21],
    x: 2027,
    y: 497,
  },
  {
    name: "Super Nerd Jovan",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 2189,
    y: 642,
    spinner: true,
  },
  {
    name: "Bug Catcher Robby",
    numPokemon: 3,
    pokemonLevels: [15, 15, 15],
    x: 2284,
    y: 564,
  },
  {
    name: "Lass Miriam",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 2165,
    y: 203,
    walker: true,
  },
  {
    name: "Youngster Josh",
    numPokemon: 3,
    pokemonLevels: [15, 15, 15],
    x: 1915,
    y: 358,
  },
  {
    name: "Hiker Marcos",
    numPokemon: 3,
    pokemonLevels: [15, 15, 15],
    x: 1802,
    y: 230,
    walker: true,
  },

  // B2F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [17, 17, 17],
    x: 3524,
    y: 494,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [17, 17],
    x: 3797,
    y: 256,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3826,
    y: 398,
    spinner: true,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [20, 20],
    x: 3424,
    y: 380,
  },
  {
    name: "Super Nerd Miguel",
    numPokemon: 3,
    pokemonLevels: [18, 18, 18],
    x: 3441,
    y: 236,
  },

  // Rt 4/Post Mt Moon
  {
    name: "Lass",
    numPokemon: 3,
    pokemonLevels: [47, 47, 47],
    x: 3699,
    y: 846,
  },

  // Rt 24/Nugget Bridge
  {
    name: "Rival",
    numPokemon: 4,
    pokemonLevels: [26, 27, 24, 23],
    x: 4591,
    y: 649,
  },
  {
    name: "Bug Catcher Cale",
    numPokemon: 4,
    pokemonLevels: [15, 15, 15, 15],
    x: 4607,
    y: 491,
  },
  {
    name: "Lass Ali",
    numPokemon: 3,
    pokemonLevels: [18, 18, 18],
    x: 4574,
    y: 444,
  },
  {
    name: "Youngster Timmy",
    numPokemon: 2,
    pokemonLevels: [21, 21],
    x: 4607,
    y: 397,
  },
  {
    name: "Lass Reli",
    numPokemon: 2,
    pokemonLevels: [24, 24],
    x: 4574,
    y: 347,
  },
  {
    name: "Camper Ethan",
    numPokemon: 1,
    pokemonLevels: [27],
    x: 4607,
    y: 299,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 4607,
    y: 239,
  },
  {
    name: "Camper Shane",
    numPokemon: 2,
    pokemonLevels: [21, 21],
    x: 4496,
    y: 332,
  },

  // Rt 25
  {
    name: "Hiker Franklin",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 4973,
    y: 63,
  },
  {
    name: "Hiker Wayne",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 5069,
    y: 107,
  },
  {
    name: "Youngster Joey",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 5089,
    y: 26,
  },
  {
    name: "Youngster Dan",
    numPokemon: 1,
    pokemonLevels: [26],
    x: 5152,
    y: 61,
    spinner: true,
  },
  {
    name: "Picknicker Kelsey",
    numPokemon: 2,
    pokemonLevels: [23, 23],
    x: 5151,
    y: 122,
  },
  {
    name: "Hiker Nob",
    numPokemon: 4,
    pokemonLevels: [20, 20, 20, 20],
    x: 5229,
    y: 140,
  },
  {
    name: "Camper Flint",
    numPokemon: 2,
    pokemonLevels: [21, 21],
    x: 5249,
    y: 59,
  },
  {
    name: "Youngster Chad",
    numPokemon: 2,
    pokemonLevels: [21, 21],
    x: 5375,
    y: 75,
    walker: true,
  },
  {
    name: "Lass Haley",
    numPokemon: 3,
    pokemonLevels: [20, 20, 20],
    x: 5472,
    y: 76,
  },
  // TODO: double battle

  // Cerulean City
  {
    name: "Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [26, 26],
    x: 4759,
    y: 731,
  },

  // Rt 6
  {
    name: "Bug Catcher Keigo",
    numPokemon: 3,
    pokemonLevels: [24, 24, 24],
    x: 4464,
    y: 2813,
  },
  {
    name: "Camper Ricky",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 4609,
    y: 2892,
  },
  {
    name: "Picknicker Nancy",
    numPokemon: 2,
    pokemonLevels: [24, 24],
    x: 4625,
    y: 2892,
  },
  {
    name: "Bug Catcher Elijah",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 4736,
    y: 2956,
  },
  {
    name: "Picknicker Isabelle",
    numPokemon: 3,
    pokemonLevels: [24, 24, 24],
    x: 4625,
    y: 3068,
  },
  {
    name: "Camper Jeff",
    numPokemon: 2,
    pokemonLevels: [24, 24],
    x: 4625,
    y: 3086,
  },

  // Rt 11
  {
    name: "Youngster Eddie",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 5298,
    y: 3484,
  },
  {
    name: "Gamer Hugo",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5249,
    y: 3630,
    spinner: true,
  },
  {
    name: "Youngster Dave",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5441,
    y: 3548,
    walker: true,
  },
  {
    name: "Youngster Dillon",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 5485,
    y: 3487,
    spinner: true,
  },
  {
    name: "Engineer Bernie",
    numPokemon: 3,
    pokemonLevels: [27, 27, 27],
    x: 5505,
    y: 3643,
  },
  {
    name: "Gamer Jasper",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5600,
    y: 3596,
    spinner: true,
  },
  {
    name: "Gamer Darian",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5793,
    y: 3420,
    spinner: true,
  },
  {
    name: "Engineer Braxton",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 5666,
    y: 3485,
    spinner: true,
  },
  {
    name: "Youngster Yasu",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 5793,
    y: 3547,
    walker: true,
  },
  {
    name: "Gamer Dirk",
    numPokemon: 2,
    pokemonLevels: [27, 27],
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
    pokemonLevels: [27, 27],
    x: 5376,
    y: 4160,
  },
  {
    name: "Gentleman Arthur",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 5264,
    y: 4183,
    // TODO: battle on enter
  },
  {
    name: "Youngster Tyler",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 5106,
    y: 4188,
  },
  {
    name: "Lass Ann",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5135,
    y: 4165,
    spinner: true,
  },

  // Lower Floor
  {
    name: "Sailor Duncan",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 5708,
    y: 4096,
  },
  {
    name: "Sailor Leonard",
    numPokemon: 1,
    pokemonLevels: [32],
    x: 5687,
    y: 4138,
    spinner: true,
  },
  {
    name: "Sailor Dylan",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 5647,
    y: 4117,
    // TODO: battle on enter
  },
  {
    name: "Sailor Huey",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5570,
    y: 4121,
    spinner: true,
  },
  {
    name: "Sailor Phillip",
    numPokemon: 1,
    pokemonLevels: [30],
    x: 5510,
    y: 4083,
  },
  {
    name: "Fisherman Barny",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 5541,
    y: 4083,
  },

  // Deck
  {
    name: "Sailor Edmond",
    numPokemon: 2,
    pokemonLevels: [26, 26],
    x: 4800,
    y: 4000,
  },
  {
    name: "Sailor Trevor",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 4709,
    y: 3979,
    walker: true,
  },

  // Upper Level
  {
    name: "Fisherman Dale",
    numPokemon: 3,
    pokemonLevels: [26, 26, 26],
    x: 5174,
    y: 3766,
  },
  {
    name: "Gentleman Brooks",
    numPokemon: 1,
    pokemonLevels: [35],
    x: 5136,
    y: 3746,
  },
  {
    name: "Lass Dawn",
    numPokemon: 2,
    pokemonLevels: [27, 27],
    x: 5282,
    y: 3717,
  },
  {
    name: "Gentleman Lamar",
    numPokemon: 2,
    pokemonLevels: [26, 26],
    x: 5256,
    y: 3760,
  },
  {
    name: "Rival",
    numPokemon: 4,
    pokemonLevels: [29, 27, 24, 30],
    x: 5471,
    y: 3723,
  },

  // Rt9/Pre Rock Tunnel
  {
    name: "Picknicker Alicia",
    numPokemon: 4,
    pokemonLevels: [27, 27, 27, 27],
    x: 5218,
    y: 954,
  },
  {
    name: "Hiker Jeremy",
    numPokemon: 2,
    pokemonLevels: [30, 30],
    x: 5311,
    y: 1068,
    spinner: true,
  },
  {
    name: "Camper Chris",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 5410,
    y: 909,
    spinner: true,
  },
  {
    name: "Bug Catcher Brent",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 5399,
    y: 814,
  },
  {
    name: "Bug Catcher Conner",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 5776,
    y: 908,
  },
  {
    name: "Hiker Alan",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 5809,
    y: 830,
    walker: true,
  },
  {
    name: "Picknicker Caitlin",
    numPokemon: 1,
    pokemonLevels: [35],
    x: 5956,
    y: 939,
  },
  {
    name: "Camper Drew",
    numPokemon: 4,
    pokemonLevels: [29, 29, 29, 29],
    x: 5568,
    y: 891,
  },
  {
    name: "Hiker Brice",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 5971,
    y: 1050,
  },
  {
    name: "Picknicker Heidi",
    numPokemon: 2,
    pokemonLevels: [30, 30],
    x: 6291,
    y: 1228,
  },

  // Rock Tunnel
  // 1F
  {
    name: "Pokémaniac Ashton",
    numPokemon: 2,
    pokemonLevels: [35, 35],
    x: 6467,
    y: 305,
  },
  {
    name: "Hiker Lenny",
    numPokemon: 4,
    pokemonLevels: [29, 29, 29, 29],
    x: 6145,
    y: 228,
  },
  {
    name: "Hiker Oliver",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 6117,
    y: 468,
  },
  {
    name: "Hiker Lucas",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 6355,
    y: 422,
  },
  {
    name: "Picknicker Leah",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 6756,
    y: 534,
  },
  {
    name: "Picknicker Ariana",
    numPokemon: 4,
    pokemonLevels: [29, 29, 29, 29],
    x: 6659,
    y: 582,
  },
  {
    name: "Picknicker Dana",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 6452,
    y: 595,
  },

  // B1
  {
    name: "Pokémaniac Winston",
    numPokemon: 1,
    pokemonLevels: [38],
    x: 7276,
    y: 707,
  },
  {
    name: "Picknicker Martha",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 7051,
    y: 674,
  },
  {
    name: "Pokémaniac Steve",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 7180,
    y: 516,
  },
  {
    name: "Hiker Allen",
    numPokemon: 1,
    pokemonLevels: [38],
    x: 7392,
    y: 324,
  },
  {
    name: "Hiker Eric",
    numPokemon: 2,
    pokemonLevels: [30, 30],
    x: 7468,
    y: 228,
  },
  {
    name: "Picknicker Heidi",
    numPokemon: 3,
    pokemonLevels: [32, 32, 32],
    x: 6992,
    y: 389,
  },
  {
    name: "Hiker Dudley",
    numPokemon: 3,
    pokemonLevels: [32, 32, 32],
    x: 6896,
    y: 319,
  },
  {
    name: "Pokémaniac Cooper",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 6848,
    y: 247,
    spinner: true,
  },

  // Rt10
  {
    name: "Picknicker Carol",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 6256,
    y: 1764,
    spinner: true,
  },
  {
    name: "Hiker Clark",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 6211,
    y: 1788,
    spinner: true,
  },
  {
    name: "Hiker Trent",
    numPokemon: 2,
    pokemonLevels: [29, 29],
    x: 6209,
    y: 1884,
  },
  {
    name: "Pokémaniac Herman",
    numPokemon: 2,
    pokemonLevels: [30, 30],
    x: 6389,
    y: 1922,
    walker: true,
  },

  // Rt 8
  {
    name: "Lass Julia",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 5982,
    y: 2301,
  },
  {
    name: "Gamer Rich",
    numPokemon: 2,
    pokemonLevels: [36, 36],
    x: 5868,
    y: 2317,
  },
  {
    name: "Super Nerd Glenn",
    numPokemon: 3,
    pokemonLevels: [33, 33, 33],
    x: 5808,
    y: 2171,
    spinner: true,
  },
  {
    name: "Twins Eli & Anne",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 5585,
    y: 2130,
    // TODO: double
  },
  {
    name: "Lass Paige",
    numPokemon: 2,
    pokemonLevels: [35],
    x: 5451,
    y: 2124,
  },
  {
    name: "Super Nerd Leslie",
    numPokemon: 1,
    pokemonLevels: [39],
    x: 5451,
    y: 2141,
  },
  {
    name: "Lass Andrea",
    numPokemon: 3,
    pokemonLevels: [36, 36, 36],
    x: 5451,
    y: 2161,
  },
  {
    name: "Lass Megan",
    numPokemon: 5,
    pokemonLevels: [29, 29, 29, 29, 29],
    x: 5451,
    y: 2177,
  },
  {
    name: "Biker Jaren",
    numPokemon: 2,
    pokemonLevels: [36, 36],
    x: 5458,
    y: 2281,
    walker: true,
  },
  {
    name: "Biker Ricardo",
    numPokemon: 3,
    pokemonLevels: [33, 33, 33],
    x: 5276,
    y: 2326,
    walker: true,
  },
  {
    name: "Gamer Stan",
    numPokemon: 3,
    pokemonLevels: [33, 33, 33],
    x: 5326,
    y: 2128,
    spinner: true,
  },
  {
    name: "Super Nerd Aidan",
    numPokemon: 4,
    pokemonLevels: [30, 30, 30, 30],
    x: 5135,
    y: 2174,
  },

  // Rocket Hideout
  // TODO: rocket member at poster

  // B1
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 2566,
    y: 2716,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 2887,
    y: 2765,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    pokemonLevels: [29, 29, 29, 29],
    x: 2598,
    y: 3085,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 2663,
    y: 2924,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [33, 33],
    x: 2837,
    y: 3005,
    spinner: true,
  },

  // B2
  {
    name: "Team Rocket Grunt",
    numPokemon: 5,
    pokemonLevels: [26, 26, 26, 26, 26],
    x: 2830,
    y: 3234,
    spinner: true,
  },

  // B3
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 3277,
    y: 2717,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [30, 30, 30],
    x: 3004,
    y: 2893,
  },

  // B4
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [32, 32],
    x: 3093,
    y: 3059,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [35, 35, 35],
    x: 3285,
    y: 3253,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [35, 35, 35],
    x: 3334,
    y: 3254,
  },
  {
    name: "Giovanni",
    numPokemon: 6,
    pokemonLevels: [38, 36, 36, 36, 36, 44],
    x: 3333,
    y: 3095,
  },

  // Pokemon Tower
  // 2F
  {
    name: "Rival",
    numPokemon: 5,
    pokemonLevels: [38, 33, 30, 35, 38],
    x: 6775,
    y: 2793,
  },

  // 3F
  {
    name: "Channeler Patricia",
    numPokemon: 1,
    pokemonLevels: [36],
    x: 6664,
    y: 2563,
  },
  {
    name: "Channeler Carly",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 6679,
    y: 2641,
  },
  {
    name: "Channeler Hope",
    numPokemon: 1,
    pokemonLevels: [35],
    x: 6711,
    y: 2481,
    spinner: true,
  },

  // 4F
  {
    name: "Channeler Laurel",
    numPokemon: 2,
    pokemonLevels: [35, 35],
    x: 6792,
    y: 2240,
  },
  {
    name: "Channeler Jody",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 6758,
    y: 2338,
  },
  {
    name: "Channeler Paula",
    numPokemon: 1,
    pokemonLevels: [36],
    x: 6583,
    y: 2325,
  },

  // 5F
  {
    name: "Channeler Janae",
    numPokemon: 1,
    pokemonLevels: [35],
    x: 6822,
    y: 1953,
  },
  {
    name: "Channeler Karina",
    numPokemon: 1,
    pokemonLevels: [36],
    x: 6631,
    y: 2036,
  },
  {
    name: "Channeler Tammy",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 6694,
    y: 2097,
    spinner: true,
  },
  // TODO: Missing a channeler name here
  {
    name: "Channeler",
    numPokemon: 1,
    pokemonLevels: [33],
    x: 6694,
    y: 1906,
    spinner: true,
  },

  // 6F
  {
    name: "Channeler Angelica",
    numPokemon: 3,
    pokemonLevels: [33, 33, 33],
    x: 6727,
    y: 1715,
  },
  {
    name: "Channeler Jennifer",
    numPokemon: 1,
    pokemonLevels: [36],
    x: 6806,
    y: 1651,
  },
  {
    name: "Channeler Emilia",
    numPokemon: 1,
    pokemonLevels: [36],
    x: 6663,
    y: 1650,
  },

  // 7F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [38, 38, 38],
    x: 6662,
    y: 1429,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [39, 39],
    x: 6728,
    y: 1396,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    pokemonLevels: [35, 35, 35, 35],
    x: 6662,
    y: 1363,
  },

  // Rt12
  {
    name: "Fisherman Ned",
    numPokemon: 3,
    pokemonLevels: [33, 33, 33],
    x: 6417,
    y: 2907,
    spinner: true,
  },
  {
    name: "Fisherman Chip",
    numPokemon: 2,
    pokemonLevels: [36, 36],
    x: 6289,
    y: 3037,
    spinner: true,
  },
  {
    // TODO: no name
    name: "Fisherman",
    numPokemon: 1,
    pokemonLevels: [41],
    x: 6400,
    y: 3148,
    spinner: true,
  },
  {
    name: "Fisherman Elliot",
    numPokemon: 4,
    pokemonLevels: [32, 32, 32, 32],
    x: 6353,
    y: 3340,
    spinner: true,
  },
  {
    name: "Young Couple Gia & Jes",
    numPokemon: 2,
    pokemonLevels: [36, 36],
    x: 6450,
    y: 3402,
    // TODO: double
  },
  {
    name: "Rocker Luca",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 6288,
    y: 3841,
    walker: true,
  },
  {
    name: "Camper Justin",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 6304,
    y: 3979,
  },
  {
    name: "Fisherman Andrew",
    numPokemon: 2,
    pokemonLevels: [36, 36],
    x: 6432,
    y: 4122,
    spinner: true,
  },

  // Rt13
  {
    name: "Picknicker Alma",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 6366,
    y: 4405,
    walker: true,
  },
  {
    name: "Birdkeeper Sebastian",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 6385,
    y: 4492,
    walker: true,
  },
  {
    name: "Picknicker Susie",
    numPokemon: 5,
    pokemonLevels: [36, 36, 36, 36, 36],
    x: 6230,
    y: 4490,
    walker: true,
  },
  {
    name: "Beauty Lola",
    numPokemon: 3,
    pokemonLevels: [41, 41, 41],
    x: 6068,
    y: 4426,
  },
  {
    name: "Beauty Sheila",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 6048,
    y: 4426,
  },
  {
    name: "Picknicker Valerie",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 5936,
    y: 4474,
  },
  {
    name: "Picknicker Gwen",
    numPokemon: 4,
    pokemonLevels: [41, 41, 41, 41],
    x: 5840,
    y: 4492,
  },
  {
    name: "Birdkeeper Robert",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 5521,
    y: 4540,
  },
  {
    name: "Birdkeeper Perry",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 5633,
    y: 4398,
  },
  {
    name: "Biker Jared",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 5600,
    y: 4441,
    spinner: true,
  },

  // Rt14
  {
    name: "Birdkeeper Carter",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 5104,
    y: 4411,
  },
  {
    name: "Birdkeeper Mitch",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 5123,
    y: 4460,
    walker: true,
  },
  {
    name: "Birdkeeper Beck",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 5153,
    y: 4539,
  },
  {
    name: "Birdkeeper Marlon",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 5248,
    y: 4575,
  },
  {
    name: "Birdkeeper Donald",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 5279,
    y: 4872,
    walker: true,
  },
  {
    name: "Birdkeeper Benny",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 5279,
    y: 5070,
    walker: true,
  },
  {
    name: "Twins Kiri & Jan",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 5187,
    y: 5135,
  },
  {
    name: "Biker Gerald",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 5104,
    y: 4904,
  },
  {
    name: "Biker Malik",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 5104,
    y: 4857,
  },
  {
    name: "Biker Isaac",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 5104,
    y: 4807,
  },
  {
    name: "Biker Lukas",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 5153,
    y: 4844,
    walker: true,
  },

  // Rt15
  {
    name: "Picknicker Becky",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4672,
    y: 5076,
    walker: true,
  },
  {
    name: "Crush Kin Ron & Mya",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4461,
    y: 5067,
    // TODO: double
  },
  {
    name: "Picknicker Celia",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 4288,
    y: 5066,
    walker: true,
  },
  {
    name: "Biker Ernest",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 4847,
    y: 5160,
    spinner: true,
  },
  {
    name: "Biker Alex",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 4785,
    y: 5147,
    spinner: true,
  },
  {
    name: "Beauty Grace",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4705,
    y: 5150,
  },
  {
    name: "Beauty Olivia",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4640,
    y: 5150,
  },
  {
    name: "Picknicker Kindra",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 4540,
    y: 5126,
    walker: true,
  },
  {
    name: "Birdkeeper Chester",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 4433,
    y: 5174,
  },
  {
    name: "Birdkeeper Edwin",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 4272,
    y: 5149,
  },
  {
    name: "Picknicker Yazmin",
    numPokemon: 3,
    pokemonLevels: [44, 44, 44],
    x: 4177,
    y: 5163,
    walker: true,
  },

  // Fuschia City
  {
    name: "Birdkeeper Jacob",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 2849,
    y: 5178,
  },
  {
    name: "Birdkeeper Ramiro",
    numPokemon: 1,
    pokemonLevels: [51],
    x: 2768,
    y: 5195,
    spinner: true,
  },
  {
    name: "Birdkeeper Wilton",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2736,
    y: 5149,
  },

  // Cycling Road
  {
    name: "Young Couple Lea & Jed",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2593,
    y: 2157,
    // TODO: double
  },

  // Top 6 trainers
  {
    name: "Cue Ball Camron",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2208,
    y: 2302,
    spinner: true,
  },
  {
    name: "Biker Ruben",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 2240,
    y: 2273,
    spinner: true,
  },
  {
    name: "Biker Hideo",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 2269,
    y: 2302,
    spinner: true,
  },
  {
    name: "Cue Ball Luke",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2305,
    y: 2273,
    spinner: true,
  },
  {
    // TODO: no name
    name: "Cue Ball",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 2334,
    y: 2302,
    spinner: true,
  },
  {
    name: "Biker Lao",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2364,
    y: 2273,
    spinner: true,
  },

  // TODO: Biker names
  {
    name: "Biker",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 2178,
    y: 2696,
    walker: true,
  },
  {
    name: "Cue Ball",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2289,
    y: 2696,
    walker: true,
  },
  {
    name: "Cue Ball",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2382,
    y: 2809,
    walker: true,
  },
  {
    name: "Biker",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 2221,
    y: 2991,
    spinner: true,
  },
  {
    name: "Cue Ball",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 2144,
    y: 3370,
  },
  {
    name: "Biker",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2176,
    y: 4273,
    walker: true,
  },
  {
    name: "Biker",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2401,
    y: 3085,
    walker: true,
  },
  {
    name: "Cue Ball",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 2446,
    y: 3378,
  },
  {
    name: "Cue Ball",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 2399,
    y: 3907,
    walker: true,
  },
  {
    name: "Biker William",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 2298,
    y: 4559,
    walker: true,
  },

  // Power Plant
  // TODO: name
  {
    name: "Super Nerd",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 6354,
    y: 1499,
  },

  // Rt19
  {
    name: "Swimmer Richard",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 3424,
    y: 5580,
  },
  {
    name: "Swimmer Reece",
    numPokemon: 3,
    pokemonLevels: [44, 44, 44],
    x: 3503,
    y: 5598,
  },
  {
    name: "Swimmer Tony",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 3455,
    y: 5712,
    spinner: true,
  },
  {
    name: "Swimmer David",
    numPokemon: 3,
    pokemonLevels: [44, 44, 44],
    x: 3511,
    y: 5791,
    spinner: true,
  },
  {
    name: "Swimmer Douglas",
    numPokemon: 4,
    pokemonLevels: [41, 41, 41, 41],
    x: 3382,
    y: 5841,
    spinner: true,
  },
  {
    name: "Swimmer Matthew",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 3514,
    y: 5919,
    walker: true,
  },
  {
    name: "Sis and Bro Lia & Luc",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 3392,
    y: 6095,
    // TODO: double
  },
  {
    name: "Swimmer Axle",
    numPokemon: 5,
    pokemonLevels: [41, 41, 41, 41, 41],
    x: 3440,
    y: 6191,
    spinner: true,
  },
  {
    name: "Swimmer Connie",
    numPokemon: 5,
    pokemonLevels: [41, 41, 41, 41, 41],
    x: 3409,
    y: 6210,
    spinner: true,
  },
  {
    name: "Swimmer Alice",
    numPokemon: 3,
    pokemonLevels: [44, 44, 44],
    x: 3457,
    y: 6226,
    spinner: true,
  },
  {
    name: "Swimmer Anya",
    numPokemon: 2,
    pokemonLevels: [45, 45],
    x: 3489,
    y: 6209,
    spinner: true,
  },
  {
    name: "Swimmer Barry",
    numPokemon: 2,
    pokemonLevels: [47, 47],
    x: 3090,
    y: 6177,
    walker: true,
  },
  {
    name: "Swimmer Darrin",
    numPokemon: 4,
    pokemonLevels: [42, 42, 42, 42],
    x: 3024,
    y: 6303,
    walker: true,
  },
  {
    name: "Swimmer Shirley",
    numPokemon: 3,
    pokemonLevels: [45, 45, 45],
    x: 2832,
    y: 6238,
    spinner: true,
  },

  // Seafoam Islands
  // TODO: name
  {
    name: "Swimmer",
    numPokemon: 1,
    pokemonLevels: [53],
    x: 2208,
    y: 6255,
    spinner: true,
  },
  {
    name: "Picknicker Irene",
    numPokemon: 3,
    pokemonLevels: [45, 45, 45],
    x: 2832,
    y: 6238,
  },

  // Rt 20
  {
    name: "Birdkeeper Roger",
    numPokemon: 3,
    pokemonLevels: [45, 45, 45],
    x: 2024,
    y: 6207,
    walker: true,
  },
  {
    name: "Swimmer Nora",
    numPokemon: 3,
    pokemonLevels: [45, 45, 45],
    x: 1889,
    y: 6191,
  },
  {
    name: "Swimmer Dean",
    numPokemon: 1,
    pokemonLevels: [53],
    x: 1728,
    y: 6304,
    walker: true,
  },
  {
    name: "Picknicker Missy",
    numPokemon: 2,
    pokemonLevels: [47, 47],
    x: 1600,
    y: 6301,
  },
  {
    name: "Swimmer Melissa",
    numPokemon: 2,
    pokemonLevels: [47, 47],
    x: 1471,
    y: 6254,
    spinner: true,
  },

  // Pokemon Mansion
  // 1F
  {
    name: "Youngster Johnson",
    numPokemon: 3,
    pokemonLevels: [50, 50, 51],
    x: 1512,
    y: 5635,
  },
  {
    name: "Scientist Ted",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 1706,
    y: 5895,
  },

  // 2F
  {
    name: "Burglar Lewis",
    numPokemon: 2,
    pokemonLevels: [51, 51],
    x: 1431,
    y: 5250,
  },

  // 3F
  {
    name: "Scientist Ivan",
    numPokemon: 3,
    pokemonLevels: [50, 50, 50],
    x: 2324,
    y: 5801,
  },
  {
    name: "Burglar Arnie",
    numPokemon: 1,
    pokemonLevels: [57],
    x: 2096,
    y: 5786,
  },

  // 1B
  {
    name: "Scientist Braydon",
    numPokemon: 2,
    pokemonLevels: [51, 51],
    x: 3132,
    y: 5695,
  },
  {
    name: "Burglar Simon",
    numPokemon: 2,
    pokemonLevels: [51, 51],
    x: 2892,
    y: 5898,
  },

  // Rt 21
  {
    name: "Swimmer Jerome",
    numPokemon: 2,
    pokemonLevels: [50, 50],
    x: 1201,
    y: 5886,
  },
  {
    name: "Swimmer Roland",
    numPokemon: 3,
    pokemonLevels: [48, 48, 48],
    x: 1105,
    y: 5729,
  },
  {
    name: "Swimmer Jack",
    numPokemon: 1,
    pokemonLevels: [56],
    x: 1199,
    y: 5658,
  },
  {
    name: "Fisherman Nolan",
    numPokemon: 2,
    pokemonLevels: [50, 50],
    x: 1185,
    y: 5517,
  },
  {
    name: "Fisherman Claude",
    numPokemon: 2,
    pokemonLevels: [47, 47],
    x: 1135,
    y: 5403,
  },
  {
    name: "Swimmer Spencer",
    numPokemon: 2,
    pokemonLevels: [50, 50],
    x: 1111,
    y: 5152,
  },
  {
    name: "Sis and Bro Lil & Ian",
    numPokemon: 2,
    pokemonLevels: [50, 50],
    x: 1184,
    y: 5039,
    // TODO: double
  },
  {
    name: "Fisherman Wade",
    numPokemon: 4,
    pokemonLevels: [42, 42, 42, 42],
    x: 1071,
    y: 4908,
  },
  {
    name: "Fisherman Ronald",
    numPokemon: 6,
    pokemonLevels: [41],
    x: 1216,
    y: 4890,
  },

  // Silph Co
  // 2F
  {
    name: "Team Rocket Grunt",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 3495,
    y: 4579,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3350,
    y: 4621,
    spinner: true,
  },
  {
    name: "Scientist",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3479,
    y: 4676,
    spinner: true,
  },
  {
    name: "Scientist",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 3110,
    y: 4691,
    spinner: true,
  },

  // 3F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 4039,
    y: 4530,
  },
  {
    name: "Scientist",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3702,
    y: 4595,
    spinner: true,
  },

  // 4F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3559,
    y: 4279,
    walker: true,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3190,
    y: 4319,
  },
  {
    name: "Scientist",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 3253,
    y: 4149,
    spinner: true,
  },

  // 5F
  {
    name: "Team Rocket Grunt",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 4198,
    y: 4129,
  },
  {
    name: "Scientist",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 3814,
    y: 4104,
    walker: true,
  },
  {
    name: "Juggler",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4005,
    y: 4230,
    spinner: true,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 3782,
    y: 4358,
    spinner: true,
  },

  // 6F
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3448,
    y: 3787,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3397,
    y: 3974,
  },
  {
    name: "Scientist",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 3255,
    y: 3878,
  },

  // 7F
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4023,
    y: 3781,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 3845,
    y: 3760,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 4022,
    y: 3943,
  },
  {
    name: "Scientist",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3671,
    y: 3910,
    walker: true,
  },
  {
    name: "Rival",
    numPokemon: 5,
    pokemonLevels: [56, 57, 53, 53, 60],
    x: 3670,
    y: 3805,
  },

  // 8F
  {
    name: "Team Rocket Grunt",
    numPokemon: 4,
    pokemonLevels: [39, 39, 39, 39],
    x: 4085,
    y: 3465,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3799,
    y: 3655,
  },
  {
    name: "Scientist",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3783,
    y: 3448,
  },

  // 9F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3879,
    y: 3354,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 3654,
    y: 3155,
  },
  {
    name: "Scientist",
    numPokemon: 3,
    pokemonLevels: [42, 42, 42],
    x: 4054,
    y: 3332,
    walker: true,
  },

  // 10F
  {
    name: "Scientist",
    numPokemon: 2,
    pokemonLevels: [44, 44],
    x: 3894,
    y: 2843,
    walker: true,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 1,
    pokemonLevels: [50],
    x: 3862,
    y: 2955,
  },

  // 11F
  {
    name: "Team Rocket Grunt",
    numPokemon: 3,
    pokemonLevels: [48, 48, 48],
    x: 3894,
    y: 2713,
  },
  {
    name: "Giovanni",
    numPokemon: 6,
    pokemonLevels: [56, 53, 56, 53, 53, 62],
    x: 3958,
    y: 2597,
  },
  {
    name: "Team Rocket Grunt",
    numPokemon: 5,
    pokemonLevels: [38, 38, 38, 38, 38],
    x: 4118,
    y: 2597,
  },

  // Victory Road
  // 1F
  {
    name: "Cool Trainer Naomi",
    numPokemon: 5,
    pokemonLevels: [63, 63, 63, 63, 63],
    x: 616,
    y: 495,
  },
  {
    name: "Cool Trainer Rolando",
    numPokemon: 5,
    pokemonLevels: [63, 63, 63, 63, 63],
    x: 472,
    y: 428,
  },

  // 2F
  {
    name: "Black Belt Daisuke",
    numPokemon: 3,
    pokemonLevels: [65, 65, 65],
    x: 1115,
    y: 375,
    spinner: true,
  },
  {
    name: "Juggler Nelson",
    numPokemon: 4,
    pokemonLevels: [62, 62, 62, 62],
    x: 1289,
    y: 455,
  },
  {
    name: "Tamer Vincent",
    numPokemon: 2,
    pokemonLevels: [66, 66],
    x: 1208,
    y: 334,
    walker: true,
  },
  {
    name: "Juggler Gregory",
    numPokemon: 1,
    pokemonLevels: [72],
    x: 1366,
    y: 277,
  },
  {
    name: "Pokémaniac Dawson",
    numPokemon: 3,
    pokemonLevels: [60, 60, 60],
    x: 902,
    y: 261,
  },

  // 3F
  {
    name: "Cool Trainer George",
    numPokemon: 5,
    pokemonLevels: [63, 63, 63, 63, 63],
    x: 1429,
    y: 663,
  },
  {
    name: "Cool Trainer Alexa",
    numPokemon: 5,
    pokemonLevels: [63, 63, 63, 63, 63],
    x: 1127,
    y: 632,
  },
  {
    name: "Cool Trainer Caroline",
    numPokemon: 5,
    pokemonLevels: [63, 63, 63, 63, 63],
    x: 969,
    y: 805,
  },
  {
    name: "Cool Trainer Colby",
    numPokemon: 5,
    pokemonLevels: [62, 63, 63, 63, 65],
    x: 956,
    y: 821,
  },
  {
    name: "Cool Couple Ray & Tyra",
    numPokemon: 2,
    pokemonLevels: [68, 68],
    x: 1398,
    y: 757,
  },
];
