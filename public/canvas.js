import fs from "fs/promises";

export const getCanvas = async () => {
  return JSON.parse(await fs.readFile("canvas.json"));
};

export const addToCanvas = async (object) => {
  let canvasFile = await getCanvas(object);
  canvasFile.canvas.push(object);
  await fs.writeFile("canvas.json", JSON.stringify(canvasFile, null, 2));
};
