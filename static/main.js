const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "10px sans-serif";

let objectList = framework.data.canvas;

let currentObject = {
  type: "text",
  text: "",
  posX: 50,
  posY: 50,
  color: "black",
  rotation: 0,
};

objectList.push(currentObject);

const renderObject = (object) => {
  ctx.save();
  ctx.translate(object.posX, object.posY);
  ctx.rotate((object.rotation * Math.PI) / 180);
  switch (object.type) {
    case "text":
      ctx.fillStyle = object.color;
      ctx.fillText(object.text, 0, 0);
      break;
  }

  ctx.restore();
};

const renderObjectList = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let object of objectList) {
    renderObject(object);
  }
};

canvas.addEventListener("click", (e) => {
  currentObject.posX = e.offsetX;
  currentObject.posY = e.offsetY;
  renderObjectList();
});

renderObjectList();

// CurrentObject modification

const server = await framework.load("canvas.js");

document.getElementById("message").addEventListener("change", () => {
  currentObject.text = document.getElementById("message").component.value;
  renderObjectList();
});

window.rotateLeft = () => {
  currentObject.rotation -= 5;
  renderObjectList();
};

window.rotateRight = () => {
  currentObject.rotation += 5;
  renderObjectList();
};

window.changeColor = (color) => {
  currentObject.color = color;
  renderObjectList();
};

window.send = async () => {
  await server.addToCanvas(currentObject);
  window.location.href = window.location.href;
};
