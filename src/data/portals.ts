import { BoundingBoxCoords } from "./trainers";

export interface MapPortalData {
  portal1: BoundingBoxCoords;
  portal2: BoundingBoxCoords;
}

export type MapPortalGroup = {
  color: string;
  area: string;
  portals: MapPortalData[];
};

export const defaultPortalSize = 20;

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
];
