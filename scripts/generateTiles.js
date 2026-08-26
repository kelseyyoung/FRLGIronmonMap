/* eslint-disable */
/**
 * FRLG-specific entry point for tile generation.
 *
 * The reusable slicing logic lives in the IronmonMapUtils submodule; this file
 * only supplies the app-specific config (which regions exist and where the
 * source images / output live). Run with:  yarn generate:tiles
 */
const path = require("path");
const {
  generateTiles,
} = require("../src/IronmonMapUtils/scripts/generateTiles");

const REGIONS = [{ name: "kanto", source: "FullKanto.png" }];

generateTiles({
  regions: REGIONS,
  assetsDir: path.join(__dirname, "..", "src", "assets"),
  outputDir: path.join(__dirname, "..", "public", "tiles"),
  // The source map is lossless pixel art, so lossless webp tiles come out ~8x
  // smaller than lossy ones at quality 90 (~35KB vs ~280KB) and are
  // pixel-exact. The overview is downscaled anyway, so it stays lossy.
  tileWebp: { lossless: true },
})
  .then(() => {
    console.log("Done generating tiles.");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
