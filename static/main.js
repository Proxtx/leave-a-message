const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let objectList = [
  {
    type: "text",
    text: "Hallo",
    posX: 50,
    posY: 50,
    color: "white",
    rotation: 50,
  },
  {
    type: "text",
    text: "Hallo Erstmal",
    posX: 50,
    posY: 70,
    color: "green",
    rotation: 0,
  },
];

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

const renderObjectList = (list) => {
  for (let object of list) {
    renderObject(object);
  }
};

renderObjectList(objectList);
