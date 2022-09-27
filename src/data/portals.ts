import { MapPortalGroup } from "../IronmonMapUtils";

export const defaultPortalSize = 24;

export const portalGroups: MapPortalGroup[] = [
  {
    color: "#088a26",
    area: "Viridian Forest",
    portals: [
      // Viridian Forest entrance
      {
        portal1: {
          x: 1050,
          y: 2411,
        },
        portal2: {
          x: 545,
          y: 4516,
        },
      },

      // Virdian Forest exit
      {
        portal1: {
          x: 159,
          y: 3674,
        },
        portal2: {
          x: 1050,
          y: 1807,
        },
      },
    ],
  },

  // Mt. Moon entrance
  {
    color: "#e9f01d",
    area: "Mt. Moon",
    portals: [
      {
        portal1: {
          x: 2799,
          y: 879,
        },
        portal2: {
          x: 1997,
          y: 676,
        },
      },

      // Mt. Moon Ladders
      {
        portal1: {
          x: 2204,
          y: 341,
        },
        portal2: {
          x: 3182,
          y: 273,
        },
      },
      {
        portal1: {
          x: 2907,
          y: 512,
        },
        portal2: {
          x: 3504,
          y: 561,
        },
      },
      {
        portal1: {
          x: 2009,
          y: 310,
        },
        portal2: {
          x: 2770,
          y: 356,
        },
      },
      {
        portal1: {
          x: 2641,
          y: 370,
        },
        portal2: {
          x: 3728,
          y: 241,
        },
      },
      {
        portal1: {
          x: 1787,
          y: 182,
        },
        portal2: {
          x: 2512,
          y: 272,
        },
      },
      {
        portal1: {
          x: 2813,
          y: 511,
        },
        portal2: {
          x: 3633,
          y: 401,
        },
      },
      {
        portal1: {
          x: 3314,
          y: 228,
        },
        portal2: {
          x: 2963,
          y: 359,
        },
      },

      // Mt. Moon exit
      {
        portal1: {
          x: 3060,
          y: 359,
        },
        portal2: {
          x: 3008,
          y: 879,
        },
      },
    ],
  },

  {
    color: "#c91038",
    area: "Vertical Underground Pass",
    portals: [
      // Vertical Underground Entrance
      {
        portal1: {
          x: 4719,
          y: 1774,
        },
        portal2: {
          x: 5015,
          y: 1101,
        },
      },

      // Vertical Underground Exit
      {
        portal1: {
          x: 4967,
          y: 2006,
        },
        portal2: {
          x: 4719,
          y: 2766,
        },
      },
    ],
  },

  {
    color: "#1643d9",
    area: "S.S. Anne",
    portals: [
      // S.S. Anne

      // Entrance
      {
        portal1: {
          x: 4594,
          y: 3729,
        },
        portal2: {
          x: 5296,
          y: 3974,
        },
      },

      // To Upper Level
      {
        portal1: {
          x: 5018,
          y: 4088,
        },
        portal2: {
          x: 5040,
          y: 3729,
        },
      },

      // To Kitchen
      {
        portal1: {
          x: 5024,
          y: 4260,
        },
        portal2: {
          x: 4847,
          y: 4162,
        },
      },

      // To Lower Level
      {
        portal1: {
          x: 5422,
          y: 4239,
        },
        portal2: {
          x: 5813,
          y: 4202,
        },
      },

      // To Deck
      {
        portal1: {
          x: 5015,
          y: 3876,
        },
        portal2: {
          x: 4860,
          y: 3971,
        },
      },
    ],
  },

  // Rock Tunnel
  {
    color: "#ed841a",
    area: "Rock Tunnel",
    portals: [
      // Entrance
      {
        portal1: {
          x: 6273,
          y: 1103,
        },
        portal2: {
          x: 6307,
          y: 184,
        },
      },

      {
        portal1: {
          x: 6753,
          y: 183,
        },
        portal2: {
          x: 7421,
          y: 602,
        },
      },
      {
        portal1: {
          x: 7342,
          y: 200,
        },
        portal2: {
          x: 6095,
          y: 184,
        },
      },
      {
        portal1: {
          x: 6352,
          y: 359,
        },
        portal2: {
          x: 7244,
          y: 344,
        },
      },
      {
        portal1: {
          x: 6844,
          y: 200,
        },
        portal2: {
          x: 6754,
          y: 488,
        },
      },

      // Exit
      {
        portal1: {
          x: 6320,
          y: 751,
        },
        portal2: {
          x: 6270,
          y: 1711,
        },
      },
    ],
  },

  // Horizonal Underground Pass
  {
    color: "#360f8a",
    area: "Horizontal Underground Pass",
    portals: [
      // Entrance
      {
        portal1: {
          x: 5198,
          y: 2142,
        },
        portal2: {
          x: 4166,
          y: 1845,
        },
      },

      // Exit
      {
        portal1: {
          x: 2965,
          y: 1862,
        },
        portal2: {
          x: 3949,
          y: 2301,
        },
      },
    ],
  },

  // Rocket Hideout
  {
    color: "#db1281",
    area: "Rocket Hideout",
    portals: [
      // Entrance/Exit
      {
        portal1: {
          x: 3419,
          y: 2252,
        },
        portal2: {
          x: 2671,
          y: 2602,
        },
      },
      {
        portal1: {
          x: 2791,
          y: 2611,
        },
        portal2: {
          x: 2975,
          y: 3166,
        },
      },
      {
        portal1: {
          x: 2863,
          y: 3176,
        },
        portal2: {
          x: 3278,
          y: 2601,
        },
      },
      {
        portal1: {
          x: 3198,
          y: 2864,
        },
        portal2: {
          x: 3222,
          y: 3263,
        },
      },
      {
        portal1: {
          x: 2890,
          y: 3325,
        },
        portal2: {
          x: 2755,
          y: 3058,
        },
      },
    ],
  },

  // Pokemon Tower
  {
    color: "#51118c",
    area: "Pokemon Tower",
    portals: [
      {
        // Entrance/Exit
        portal1: {
          x: 6430,
          y: 2174,
        },
        portal2: {
          x: 6819,
          y: 2873,
        },
      },
    ],
  },

  // Safari Zone
  {
    color: "#db1281",
    area: "Safari Zone",
    portals: [
      {
        // Entrance/Exit
        portal1: {
          x: 3455,
          y: 4876,
        },
        portal2: {
          x: 6267,
          y: 5991,
        },
      },
      {
        portal1: {
          x: 6654,
          y: 5767,
        },
        portal2: {
          x: 6734,
          y: 5726,
        },
      },
      {
        portal1: {
          x: 6733,
          y: 5456,
        },
        portal2: {
          x: 6700,
          y: 5364,
        },
      },
      {
        portal1: {
          x: 6299,
          y: 5489,
        },
        portal2: {
          x: 6268,
          y: 5519,
        },
      },
      {
        portal1: {
          x: 6138,
          y: 5484,
        },
        portal2: {
          x: 5635,
          y: 5332,
        },
      },
      {
        portal1: {
          x: 5978,
          y: 5485,
        },
        portal2: {
          x: 5524,
          y: 5328,
        },
      },
      {
        portal1: {
          x: 5782,
          y: 5752,
        },
        portal2: {
          x: 5861,
          y: 5798,
        },
      },
    ],
  },

  // Power Plant
  {
    color: "#f8fc05",
    area: "Power Plant",
    portals: [
      // Entrance
      {
        portal1: {
          x: 6251,
          y: 1443,
        },
        portal2: {
          x: 5400,
          y: 1857,
        },
      },
    ],
  },

  // Seafoam Islands
  {
    color: "#13a1f2",
    area: "Seafoam Islands",
    portals: [
      // Entrance
      {
        portal1: {
          x: 2303,
          y: 6207,
        },
        portal2: {
          x: 3752,
          y: 5966,
        },
      },
      {
        portal1: {
          x: 3816,
          y: 5712,
        },
        portal2: {
          x: 4411,
          y: 5714,
        },
      },
      {
        portal1: {
          x: 4153,
          y: 5681,
        },
        portal2: {
          x: 4746,
          y: 5682,
        },
      },
      {
        portal1: {
          x: 4106,
          y: 5922,
        },
        portal2: {
          x: 4698,
          y: 5924,
        },
      },
      {
        portal1: {
          x: 4361,
          y: 5667,
        },
        portal2: {
          x: 3752,
          y: 6066,
        },
      },
      {
        portal1: {
          x: 4521,
          y: 5761,
        },
        portal2: {
          x: 3914,
          y: 6146,
        },
      },
      {
        portal1: {
          x: 4760,
          y: 5841,
        },
        portal2: {
          x: 4154,
          y: 6226,
        },
      },
      {
        portal1: {
          x: 4648,
          y: 5922,
        },
        portal2: {
          x: 4042,
          y: 6307,
        },
      },
      {
        portal1: {
          x: 4697,
          y: 5746,
        },
        portal2: {
          x: 4101,
          y: 6149,
        },
      },
      {
        portal1: {
          x: 3753,
          y: 6274,
        },
        portal2: {
          x: 4394,
          y: 6226,
        },
      },
      {
        portal1: {
          x: 4154,
          y: 6066,
        },
        portal2: {
          x: 4761,
          y: 6067,
        },
      },
      {
        portal1: {
          x: 4137,
          y: 6274,
        },
        portal2: {
          x: 4761,
          y: 6259,
        },
      },
      {
        portal1: {
          x: 4457,
          y: 6145,
        },
        portal2: {
          x: 5113,
          y: 6162,
        },
      },
      {
        portal1: {
          x: 4729,
          y: 6082,
        },
        portal2: {
          x: 5386,
          y: 6099,
        },
      },

      // Exit
      {
        portal1: {
          x: 2496,
          y: 6303,
        },
        portal2: {
          x: 4170,
          y: 5963,
        },
      },
    ],
  },

  // Pokemon Mansion
  {
    color: "#6b0619",
    area: "Pokemon Mansion",
    portals: [
      // Entrance
      {
        portal1: {
          x: 1088,
          y: 6134,
        },
        portal2: {
          x: 1480,
          y: 6046,
        },
      },
      {
        portal1: {
          x: 1524,
          y: 5719,
        },
        portal2: {
          x: 1431,
          y: 5109,
        },
      },
      {
        portal1: {
          x: 1506,
          y: 5106,
        },
        portal2: {
          x: 2134,
          y: 5777,
        },
      },
      {
        portal1: {
          x: 1505,
          y: 4929,
        },
        portal2: {
          x: 2086,
          y: 5649,
        },
      },
      {
        portal1: {
          x: 2502,
          y: 5889,
        },
        portal2: {
          x: 1904,
          y: 5237,
        },
      },
      {
        portal1: {
          x: 2274,
          y: 5873,
        },
        portal2: {
          x: 1665,
          y: 5869,
        },
      },
      {
        portal1: {
          x: 1737,
          y: 5948,
        },
        portal2: {
          x: 3138,
          y: 5960,
        },
      },
    ],
  },

  // Silph Co.
  {
    color: "#a211bf",
    area: "Silph Co.",
    portals: [
      // Entrance
      {
        portal1: {
          x: 4591,
          y: 2286,
        },
        portal2: {
          x: 3522,
          y: 4426,
        },
      },

      // 2F
      {
        portal1: {
          x: 3268,
          y: 4488,
        },
        portal2: {
          x: 3666,
          y: 3660,
        },
      },
      {
        portal1: {
          x: 3060,
          y: 4487,
        },
        portal2: {
          x: 4163,
          y: 4470,
        },
      },
      {
        portal1: {
          x: 3139,
          y: 4695,
        },
        portal2: {
          x: 3570,
          y: 3785,
        },
      },
      {
        portal1: {
          x: 3555,
          y: 4694,
        },
        portal2: {
          x: 3795,
          y: 3482,
        },
      },

      // 3F
      {
        portal1: {
          x: 3698,
          y: 4487,
        },
        portal2: {
          x: 3874,
          y: 4138,
        },
      },
      {
        portal1: {
          x: 3667,
          y: 4616,
        },
        portal2: {
          x: 3779,
          y: 3132,
        },
      },
      {
        portal1: {
          x: 3843,
          y: 4614,
        },
        portal2: {
          x: 3715,
          y: 3769,
        },
      },
      {
        portal1: {
          x: 4098,
          y: 4615,
        },
        portal2: {
          x: 4146,
          y: 4710,
        },
      },
      {
        portal1: {
          x: 3684,
          y: 4711,
        },
        portal2: {
          x: 3669,
          y: 4346,
        },
      },

      // 4F
      {
        portal1: {
          x: 3315,
          y: 4120,
        },
        portal2: {
          x: 3138,
          y: 3801,
        },
      },
      {
        portal1: {
          x: 3219,
          y: 4168,
        },
        portal2: {
          x: 4019,
          y: 2973,
        },
      },
      {
        portal1: {
          x: 3315,
          y: 4250,
        },
        portal2: {
          x: 4083,
          y: 2895,
        },
      },
      {
        portal1: {
          x: 3060,
          y: 4346,
        },
        portal2: {
          x: 4083,
          y: 3022,
        },
      },

      // 5F
      {
        portal1: {
          x: 4163,
          y: 4103,
        },
        portal2: {
          x: 4036,
          y: 3978,
        },
      },
      {
        portal1: {
          x: 3796,
          y: 4345,
        },
        portal2: {
          x: 3987,
          y: 3357,
        },
      },

      // 7F
      {
        portal1: {
          x: 3714,
          y: 3833,
        },
        portal2: {
          x: 3891,
          y: 2491,
        },
      },

      // 8F
      {
        portal1: {
          x: 3666,
          y: 3579,
        },
        portal2: {
          x: 3813,
          y: 3547,
        },
      },
    ],
  },

  // Victory Road
  {
    color: "#0dba16",
    area: "Victory Road",
    portals: [
      // Entrance
      {
        portal1: {
          x: 78,
          y: 928,
        },
        portal2: {
          x: 563,
          y: 727,
        },
      },
      {
        portal1: {
          x: 435,
          y: 429,
        },
        portal2: {
          x: 804,
          y: 344,
        },
      },
      {
        portal1: {
          x: 1332,
          y: 343,
        },
        portal2: {
          x: 1330,
          y: 696,
        },
      },
      {
        portal1: {
          x: 869,
          y: 585,
        },
        portal2: {
          x: 837,
          y: 248,
        },
      },
      {
        portal1: {
          x: 1333,
          y: 842,
        },
        portal2: {
          x: 1338,
          y: 506,
        },
      },
      {
        portal1: {
          x: 1361,
          y: 472,
        },
        portal2: {
          x: 1412,
          y: 824,
        },
      },
      {
        portal1: {
          x: 1379,
          y: 712,
        },
        portal2: {
          x: 1394,
          y: 344,
        },
      },

      // Exit
      {
        portal1: {
          x: 1553,
          y: 402,
        },
        portal2: {
          x: 287,
          y: 928,
        },
      },
    ],
  },
];
