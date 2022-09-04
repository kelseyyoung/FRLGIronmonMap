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
  },

  // Lower Floor
  {
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
  },
  {
    name: "Sailor Dylan",
    numPokemon: 3,
    x: 5647,
    y: 4117,
  },
  {
    name: "Sailor Huey",
    numPokemon: 2,
    x: 5570,
    y: 4121,
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
  // TODO: stopped here
  {
    name: "Sailor Edmond",
    numPokemon: 2,
    x: 5375,
    y: 4160,
  },
  {
    name: "Sailor Trevor",
    numPokemon: 2,
    x: 5375,
    y: 4160,
  },

  // Upper Level
  {
    name: "Fisherman Dale",
    numPokemon: 3,
    x: 5375,
    y: 4160,
  },
  {
    name: "Gentleman Brooks",
    numPokemon: 1,
    x: 5375,
    y: 4160,
  },
  {
    name: "Lass Dawn",
    numPokemon: 2,
    x: 5375,
    y: 4160,
  },
  {
    name: "Gentleman Lamar",
    numPokemon: 2,
    x: 5375,
    y: 4160,
  },
];
