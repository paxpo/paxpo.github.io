const images = [
    "0.png",
    "1.png",
    "2.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

function changeBackgroundImage() {
    document.body.style.backgroundImage = `url("background/${chosenImage}")`;
}

document.body.style.backgroundImage = `url("background/${chosenImage}")`;
document.body.style.height = `98.3vh`;
document.body.style.backgroundSize = `cover`;
setInterval(changeBackgroundImage, 1000);