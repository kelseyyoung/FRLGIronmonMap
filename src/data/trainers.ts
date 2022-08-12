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
];
