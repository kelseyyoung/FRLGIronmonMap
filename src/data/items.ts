export interface ItemData {
  x: number; // x coordinate of the top-left pixel of this item
  y: number; // y coordinate of the top-left pixel of this item
  type: ItemType; // Type of the item
  spawnInfo?: string; // Special spawn rate information
}

export enum ItemType {
  Normal = 0,
  TM = 1,
  Hidden = 2,
}

export const defaultItemHeight = 12;
export const defaultItemWidth = 12;

export const items: ItemData[] = [
  // Route 03/Pre Mt. Moon
  {
    x: 1953,
    y: 1266,
    type: ItemType.Hidden,
  },
  {
    x: 2577,
    y: 866,
    type: ItemType.Hidden,
  },

  // Mt. Moon

  // 1F
  {
    x: 1741,
    y: 440,
    type: ItemType.Normal,
  },
  {
    x: 1880,
    y: 657,
    type: ItemType.TM,
  },
  {
    x: 2126,
    y: 601,
    type: ItemType.Normal,
  },
  {
    x: 2389,
    y: 654,
    type: ItemType.Normal,
  },
  {
    x: 2410,
    y: 415,
    type: ItemType.Normal,
  },
  {
    x: 1758,
    y: 121,
    type: ItemType.Normal,
  },

  // B1F
  {
    x: 2560,
    y: 421,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
  {
    x: 2877,
    y: 501,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
  {
    x: 2894,
    y: 484,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
  {
    x: 3117,
    y: 485,
    type: ItemType.Hidden,
    spawnInfo: "40% chance to spawn",
  },
  {
    x: 3076,
    y: 329,
    type: ItemType.Hidden,
    spawnInfo: "40% chance to spawn",
  },
  {
    x: 2788,
    y: 326,
    type: ItemType.Hidden,
    spawnInfo: "40% chance to spawn",
  },

  // B2F
  {
    x: 3714,
    y: 483,
    type: ItemType.Normal,
  },
  {
    x: 3614,
    y: 165,
    type: ItemType.Normal,
  },
  {
    x: 3795,
    y: 148,
    type: ItemType.TM,
  },
  {
    x: 3860,
    y: 245,
    type: ItemType.Hidden,
  },
  {
    x: 3556,
    y: 326,
    type: ItemType.Hidden,
  },
  {
    x: 3283,
    y: 240,
    type: ItemType.Normal,
  },

  // Rt4/Post Mt. Moon
  {
    x: 3184,
    y: 832,
    type: ItemType.Hidden,
  },
  {
    x: 3570,
    y: 1073,
    type: ItemType.Hidden,
  },
  {
    x: 3568,
    y: 885,
    type: ItemType.TM,
  },

  // Cerulean City
  {
    x: 4511,
    y: 756,
    type: ItemType.Hidden,
  },

  // Rt24/25
  {
    x: 4722,
    y: 64,
    type: ItemType.Hidden,
  },
  {
    x: 5026,
    y: 33,
    type: ItemType.Hidden,
  },
  {
    x: 5233,
    y: 33,
    type: ItemType.TM,
  },
  {
    x: 5330,
    y: 130,
    type: ItemType.Hidden,
  },
  {
    x: 5443,
    y: 48,
    type: ItemType.Hidden,
  },
  {
    x: 5730,
    y: 94,
    type: ItemType.Hidden,
  },

  // Vertical Underground Pass
  {
    x: 5018,
    y: 1150,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 4983,
    y: 1296,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 4958,
    y: 1439,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 5020,
    y: 1541,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 4982,
    y: 1680,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
  {
    x: 5034,
    y: 1910,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 4972,
    y: 1973,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },

  // Rt 6
  {
    x: 4495,
    y: 2641,
    type: ItemType.Hidden,
  },
  {
    x: 4722,
    y: 2641,
    type: ItemType.Hidden,
  },

  // Vermillion City
  {
    x: 4448,
    y: 3380,
    type: ItemType.Hidden,
  },

  // Rt 11
  // TODO: missing an item here in the grass
  {
    x: 5204,
    y: 3409,
    type: ItemType.Normal,
  },
  {
    x: 6000,
    y: 3568,
    type: ItemType.Normal,
  },
  {
    x: 5921,
    y: 3442,
    type: ItemType.Hidden,
  },

  // S.S. Anne
  // Main Floor
  {
    x: 5138,
    y: 4224,
    type: ItemType.TM,
  },

  // Kitchen
  {
    x: 4962,
    y: 4216,
    type: ItemType.Hidden,
  },
  {
    x: 4962,
    y: 4248,
    type: ItemType.Hidden,
  },
  {
    x: 4962,
    y: 4281,
    type: ItemType.Hidden,
  },
  {
    x: 4750,
    y: 4303,
    type: ItemType.Normal,
  },

  // Lower Floor
  {
    x: 5823,
    y: 4247,
    type: ItemType.Hidden,
  },
  {
    x: 5752,
    y: 4098,
    type: ItemType.Normal,
  },
  {
    x: 5623,
    y: 4122,
    type: ItemType.Normal,
  },
  {
    x: 5571,
    y: 4082,
    type: ItemType.TM,
  },

  // Upper Floor
  {
    x: 5155,
    y: 3732,
    type: ItemType.Normal,
  },
  {
    x: 5269,
    y: 3740,
    type: ItemType.Normal,
  },

  // Rt9/Pre Rock Tunnel
  {
    x: 5236,
    y: 913,
    type: ItemType.Hidden,
  },
  {
    x: 5239,
    y: 1075,
    type: ItemType.TM,
  },
  {
    x: 5762,
    y: 835,
    type: ItemType.Hidden,
  },
  {
    x: 5998,
    y: 831,
    type: ItemType.Hidden,
  },
  {
    x: 6014,
    y: 1075,
    type: ItemType.Normal,
  },
  {
    x: 6242,
    y: 1218,
    type: ItemType.Hidden,
  },
  {
    x: 6418,
    y: 1267,
    type: ItemType.Hidden,
  },
  {
    x: 6305,
    y: 1107,
    type: ItemType.Hidden,
  },

  // Rock Tunnel
  // 1F
  {
    x: 6631,
    y: 232,
    type: ItemType.Normal,
  },
  {
    x: 6388,
    y: 508,
    type: ItemType.Normal,
  },
  {
    x: 6565,
    y: 505,
    type: ItemType.Normal,
  },

  // B1
  {
    x: 6847,
    y: 749,
    type: ItemType.Normal,
  },
  {
    x: 6958,
    y: 186,
    type: ItemType.Normal,
  },

  // Rt10
  {
    x: 6464,
    y: 1717,
    type: ItemType.Hidden,
  },

  // Rt8
  {
    x: 5664,
    y: 2323,
    type: ItemType.Hidden,
  },
  {
    x: 5665,
    y: 2242,
    type: ItemType.Hidden,
  },
  {
    x: 5602,
    y: 2259,
    type: ItemType.Hidden,
  },

  // Underground Horizontal
  {
    x: 4048,
    y: 1858,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 3930,
    y: 1889,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 3822,
    y: 1849,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
  {
    x: 3668,
    y: 1849,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 3437,
    y: 1866,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 3218,
    y: 1890,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },
  {
    x: 3052,
    y: 1850,
    type: ItemType.Hidden,
    spawnInfo: "30% chance to spawn",
  },

  // Celadon City
  {
    x: 2960,
    y: 1970,
    type: ItemType.Normal,
  },
  {
    x: 3762,
    y: 2242,
    type: ItemType.Hidden,
  },
  {
    x: 4098,
    y: 2323,
    type: ItemType.Hidden,
  },

  // Rocket Hideout
  // B1
  {
    x: 2582,
    y: 2837,
    type: ItemType.Normal,
  },
  {
    x: 2519,
    y: 2947,
    type: ItemType.Normal,
  },
  {
    x: 2760,
    y: 2854,
    type: ItemType.Hidden,
  },

  // B2
  {
    x: 2751,
    y: 3193,
    type: ItemType.Normal,
  },
  {
    x: 2543,
    y: 3224,
    type: ItemType.Normal,
  },
  {
    x: 2591,
    y: 3255,
    type: ItemType.TM,
  },
  {
    x: 2510,
    y: 3370,
    type: ItemType.Normal,
  },

  // B3
  {
    x: 2990,
    y: 2628,
    type: ItemType.Hidden,
  },
  {
    x: 3277,
    y: 2802,
    type: ItemType.TM,
  },
  {
    x: 3165,
    y: 2772,
    type: ItemType.Normal,
  },
  {
    x: 3197,
    y: 2963,
    type: ItemType.Normal,
  },

  // B4
  {
    x: 3127,
    y: 3408,
    type: ItemType.Normal,
  },
  {
    x: 3095,
    y: 3264,
    type: ItemType.Normal,
  },
  {
    x: 3048,
    y: 3148,
    type: ItemType.TM,
  },
  {
    x: 3288,
    y: 3132,
    type: ItemType.Hidden,
  },
  {
    x: 3384,
    y: 3132,
    type: ItemType.Hidden,
  },

  // Pokemon Tower
  // 3F
  {
    x: 6729,
    y: 2457,
    type: ItemType.Normal,
  },

  // 4F
  {
    x: 6712,
    y: 2314,
    type: ItemType.Normal,
  },
  {
    x: 6648,
    y: 2312,
    type: ItemType.Normal,
  },
  {
    x: 6697,
    y: 2394,
    type: ItemType.Normal,
  },

  // 5F
  {
    x: 6695,
    y: 1997,
    type: ItemType.Normal,
  },
  {
    x: 6615,
    y: 2106,
    type: ItemType.Normal,
  },
  {
    x: 6632,
    y: 1895,
    type: ItemType.Hidden,
  },

  // 6F
  {
    x: 6758,
    y: 1800,
    type: ItemType.Normal,
  },
  {
    x: 6600,
    y: 1801,
    type: ItemType.Normal,
  },
];
