const images = ["0.png","2.jpg","4.png"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImg}`;
image.id ="bg";

document.body.appendChild(image);

