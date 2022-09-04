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
    x: 2560,
    y: 421,
    type: ItemType.Hidden,
    spawnInfo: "10% chance to spawn",
  },
];
