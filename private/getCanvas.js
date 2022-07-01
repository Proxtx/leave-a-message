import { getCanvas } from "../public/canvas.js";

export const server = async (document, options) => {
  options.data.canvas = (await getCanvas()).canvas;
};
