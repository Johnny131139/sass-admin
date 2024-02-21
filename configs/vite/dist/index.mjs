import jiti from "file:///Users/johnny/Desktop/shoptop-admin/node_modules/.pnpm/jiti@1.20.0/node_modules/jiti/lib/index.js";

/** @type {import("/Users/johnny/Desktop/shoptop-admin/configs/vite/src/index")} */
const _module = jiti(null, {
  "esmResolve": true,
  "interopDefault": true,
  "alias": {
    "@config/vite": "/Users/johnny/Desktop/shoptop-admin/configs/vite"
  }
})("/Users/johnny/Desktop/shoptop-admin/configs/vite/src/index.ts");

export const createViteConfig = _module.createViteConfig;
export const GLOB_CONFIG_FILE_NAME = _module.GLOB_CONFIG_FILE_NAME;
export const OUTPUT_DIR = _module.OUTPUT_DIR;
export const APP_NAME = _module.APP_NAME;