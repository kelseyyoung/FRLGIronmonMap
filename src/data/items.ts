import { ItemData, ItemType } from "../IronmonMapUtils";

export const defaultItemHeight = 12;
export const defaultItemWidth = 12;

export const items: ItemData[] = [
  // Viridian Forest
  {
    x: 534,
    y: 4445,
    type: ItemType.Hidden,
  },
  {
    x: 160,
    y: 4194,
    type: ItemType.Normal,
  },
  {
    x: 866,
    y: 4499,
    type: ItemType.Normal,
  },
  {
    x: 722,
    y: 3874,
    type: ItemType.Normal,
  },
  {
    x: 415,
    y: 4081,
    type: ItemType.Normal,
  },
  {
    x: 129,
    y: 3890,
    type: ItemType.Hidden,
  },

  // Viridian City
  {
    x: 1233,
    y: 2479,
    type: ItemType.Normal,
  },
  {
    x: 1236,
    y: 2627,
    type: ItemType.Normal,
  },
  {
    x: 1052,
    y: 2962,
    type: ItemType.Normal,
  },

  // Pewter City
  {
    x: 864,
    y: 1009,
    type: ItemType.Hidden,
  },

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
    x: 4593,
    y: 69,
    type: ItemType.Normal,
  },
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
  {
    x: 5666,
    y: 3554,
    type: ItemType.Normal,
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
    x: 5182,
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
    x: 6031,
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
    x: 3214,
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
    y: 2933,
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
    y: 3132,
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

  // Rt12/To Fuschia
  {
    x: 6433,
    y: 2980,
    type: ItemType.TM,
  },
  {
    x: 6434,
    y: 3319,
    type: ItemType.Hidden,
  },
  {
    x: 6290,
    y: 4021,
    type: ItemType.Normal,
  },
  {
    x: 6291,
    y: 4259,
    type: ItemType.Hidden,
  },

  // Rt13
  {
    x: 5746,
    y: 4548,
    type: ItemType.Hidden,
  },

  // Rt14
  {
    x: 5299,
    y: 5171,
    type: ItemType.Hidden,
  },
  {
    x: 5138,
    y: 4643,
    type: ItemType.Hidden,
  },

  // Rt15
  {
    x: 4163,
    y: 5061,
    type: ItemType.TM,
  },

  // Fuschia City
  {
    x: 3602,
    y: 5221,
    type: ItemType.Hidden,
  },

  // Safari Zone
  // Entry
  {
    x: 6242,
    y: 5764,
    type: ItemType.Normal,
  },
  {
    x: 6297,
    y: 5764,
    type: ItemType.Hidden,
  },

  // Right
  {
    x: 7306,
    y: 5583,
    type: ItemType.Normal,
  },
  {
    x: 7228,
    y: 5599,
    type: ItemType.TM,
  },
  {
    x: 6941,
    y: 5500,
    type: ItemType.Normal,
  },
  {
    x: 7321,
    y: 5552,
    type: ItemType.Normal,
  },

  // Up
  {
    x: 6268,
    y: 5132,
    type: ItemType.Normal,
  },
  {
    x: 6256,
    y: 5010,
    type: ItemType.TM,
  },
  {
    x: 6334,
    y: 4942,
    type: ItemType.Normal,
  },

  // Left
  {
    x: 5485,
    y: 5561,
    type: ItemType.Normal,
  },
  {
    x: 5469,
    y: 5715,
    type: ItemType.Normal,
  },
  {
    x: 5295,
    y: 5765,
    type: ItemType.Normal,
  },
  {
    x: 5309,
    y: 5546,
    type: ItemType.TM,
  },
  {
    x: 5251,
    y: 5506,
    type: ItemType.Hidden,
  },

  // Cycling Road
  {
    x: 2337,
    y: 4912,
    type: ItemType.Hidden,
  },
  {
    x: 2177,
    y: 4404,
    type: ItemType.Hidden,
  },
  {
    x: 2402,
    y: 3730,
    type: ItemType.Hidden,
  },
  {
    x: 2178,
    y: 3491,
    type: ItemType.Hidden,
  },
  {
    x: 2270,
    y: 3252,
    type: ItemType.Hidden,
  },

  // Power Plant

  // Outside
  {
    x: 6339,
    y: 1447,
    type: ItemType.Hidden,
  },

  // Inside
  {
    x: 5432,
    y: 1680,
    type: ItemType.Normal,
  },
  {
    x: 5738,
    y: 1598,
    type: ItemType.Normal,
  },
  {
    x: 6057,
    y: 1838,
    type: ItemType.TM,
  },
  {
    x: 5962,
    y: 1599,
    type: ItemType.TM,
  },
  {
    x: 6043,
    y: 1312,
    type: ItemType.Normal,
  },
  {
    x: 5787,
    y: 1505,
    type: ItemType.Hidden,
  },
  {
    x: 5449,
    y: 1442,
    type: ItemType.Hidden,
  },

  // Seafoam Islands
  // 1F
  {
    x: 3840,
    y: 5760,
    type: ItemType.Normal,
  },

  // B1
  {
    x: 4547,
    y: 5909,
    type: ItemType.Normal,
  },
  {
    x: 5839,
    y: 5760,
    type: ItemType.Normal,
  },

  // B2
  {
    x: 3934,
    y: 6246,
    type: ItemType.Normal,
  },

  // B3
  {
    x: 4347,
    y: 6199,
    type: ItemType.Hidden,
  },

  // B4
  {
    x: 5230,
    y: 6326,
    type: ItemType.Normal,
  },
  {
    x: 5084,
    y: 6151,
    type: ItemType.Hidden,
  },

  // Rt20
  {
    x: 1711,
    y: 6177,
    type: ItemType.Hidden,
    spawnInfo: "20% chance to spawn",
  },

  // Pokemon Mansion
  // 1F
  {
    x: 1385,
    y: 5852,
    type: ItemType.Hidden,
  },
  {
    x: 1706,
    y: 5613,
    type: ItemType.Normal,
  },
  {
    x: 1780,
    y: 5752,
    type: ItemType.Normal,
  },
  {
    x: 1813,
    y: 6029,
    type: ItemType.Normal,
  },

  // 2F
  {
    x: 1647,
    y: 5270,
    type: ItemType.Normal,
  },
  {
    x: 1923,
    y: 5017,
    type: ItemType.Normal,
  },
  {
    x: 1915,
    y: 5157,
    type: ItemType.Normal,
  },

  // 3F
  {
    x: 2119,
    y: 5915,
    type: ItemType.Normal,
  },
  {
    x: 2489,
    y: 5696,
    type: ItemType.Normal,
  },
  {
    x: 2550,
    y: 5807,
    type: ItemType.Hidden,
  },

  // 1B
  {
    x: 2622,
    y: 5966,
    type: ItemType.Normal,
  },
  {
    x: 3147,
    y: 5576,
    type: ItemType.Hidden,
  },
  {
    x: 2949,
    y: 5567,
    type: ItemType.TM,
  },
  {
    x: 2670,
    y: 5619,
    type: ItemType.Normal,
  },
  {
    x: 2678,
    y: 5818,
    type: ItemType.TM,
  },

  // Rt 21
  {
    x: 1236,
    y: 5156,
    type: ItemType.Hidden,
    spawnInfo: "20% chance to spawn",
  },

  // Sliph Co
  // 2F
  {
    x: 3207,
    y: 4734,
    type: ItemType.Hidden,
  },

  // 3F
  {
    x: 4183,
    y: 4686,
    type: ItemType.Hidden,
  },
  {
    x: 3766,
    y: 4555,
    type: ItemType.Normal,
  },

  // 4F
  {
    x: 3590,
    y: 4351,
    type: ItemType.Hidden,
  },
  {
    x: 3511,
    y: 4320,
    type: ItemType.TM,
  },
  {
    x: 3063,
    y: 4236,
    type: ItemType.Normal,
  },
  {
    x: 3080,
    y: 4205,
    type: ItemType.Normal,
  },
  {
    x: 3095,
    y: 4222,
    type: ItemType.Normal,
  },

  // 5F
  {
    x: 4151,
    y: 4173,
    type: ItemType.Hidden,
  },
  {
    x: 3848,
    y: 4287,
    type: ItemType.Hidden,
  },
  {
    x: 3703,
    y: 4173,
    type: ItemType.Normal,
  },
  {
    x: 4006,
    y: 4366,
    type: ItemType.Normal,
  },
  {
    x: 3654,
    y: 4318,
    type: ItemType.TM,
  },

  // 6F
  {
    x: 3127,
    y: 3839,
    type: ItemType.Hidden,
  },
  {
    x: 3143,
    y: 3933,
    type: ItemType.Normal,
  },
  {
    x: 3128,
    y: 3981,
    type: ItemType.Normal,
  },

  // 7F
  {
    x: 4118,
    y: 3884,
    type: ItemType.TM,
  },
  {
    x: 3991,
    y: 3886,
    type: ItemType.Hidden,
  },
  {
    x: 3640,
    y: 3899,
    type: ItemType.Normal,
  },

  // 8F
  {
    x: 4103,
    y: 3552,
    type: ItemType.Hidden,
  },
  {
    x: 4023,
    y: 3519,
    type: ItemType.Normal,
  },

  // 9F
  {
    x: 3815,
    y: 3296,
    type: ItemType.Hidden,
  },
  {
    x: 3719,
    y: 3200,
    type: ItemType.Hidden,
  },

  // 10F
  {
    x: 4007,
    y: 2900,
    type: ItemType.Hidden,
  },
  {
    x: 3944,
    y: 2994,
    type: ItemType.Normal,
  },
  {
    x: 3912,
    y: 3026,
    type: ItemType.Normal,
  },
  {
    x: 3895,
    y: 2994,
    type: ItemType.Normal,
  },

  // 11F
  {
    x: 4022,
    y: 2705,
    type: ItemType.Hidden,
  },
  {
    x: 4119,
    y: 2701,
    type: ItemType.Normal,
  },

  // Saffron City
  {
    x: 4417,
    y: 2035,
    type: ItemType.Hidden,
  },

  // Rt 22
  {
    x: 50,
    y: 2529,
    type: ItemType.Hidden,
  },
  {
    x: 176,
    y: 2100,
    type: ItemType.Hidden,
  },
  {
    x: 320,
    y: 1635,
    type: ItemType.Hidden,
  },
  {
    x: 162,
    y: 1554,
    type: ItemType.Hidden,
  },
  {
    x: 304,
    y: 1154,
    type: ItemType.Hidden,
  },
  {
    x: 34,
    y: 947,
    type: ItemType.Hidden,
  },
  {
    x: 48,
    y: 770,
    type: ItemType.Hidden,
  },
  {
    x: 146,
    y: 610,
    type: ItemType.Hidden,
  },

  // Victory Road
  // 1F
  {
    x: 585,
    y: 594,
    type: ItemType.Hidden,
  },
  {
    x: 584,
    y: 451,
    type: ItemType.Normal,
  },
  {
    x: 617,
    y: 418,
    type: ItemType.TM,
  },
  {
    x: 647,
    y: 417,
    type: ItemType.Hidden,
  },

  // 2F
  {
    x: 1015,
    y: 413,
    type: ItemType.TM,
  },
  {
    x: 1058,
    y: 293,
    type: ItemType.Normal,
  },
  {
    x: 1191,
    y: 417,
    type: ItemType.Normal,
  },
  {
    x: 1433,
    y: 318,
    type: ItemType.TM,
  },

  // 3F
  {
    x: 982,
    y: 700,
    type: ItemType.TM,
  },
  {
    x: 1400,
    y: 668,
    type: ItemType.Normal,
  },
];
