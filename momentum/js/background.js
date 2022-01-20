const images = ["0.png","1.png","2.jpg","3.jpg","4.png"];

const chosenImg = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");
image.src = `img/${chosenImg}`;

document.body.appendChild(image);