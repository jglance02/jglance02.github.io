let mine;
let desert;
let finish;
let explosion;
let explosionSound; 

function preload() {
  soundFormats('mp3');
  mine = loadImage('assets/250px-H4-UNSC-Landmine-Front.webp');
  finish = loadImage('assets/pngtree-finish-line-black-and-white-checkered-seamless-vector-transparent-png-image_9067602.png');
  desert = loadImage('assets/617857.jpg');
  explosion = loadImage('assets/istockphoto-955124060-612x612.jpg');
  explosionSound = loadSound('assets/Explosion sound effect - bomb sound - boom sound.mp3');
}

function setup() {
  createCanvas(800, 1000);
  image(desert, 0, 0);
  console.log("Assets loaded:", mine, finish, desert, explosion, explosionSound);
}

function draw() {
  background(200); // Ensure the background is reset each frame

  // Start Menu
  fill('yellow');
  textSize(50);
  text('Avoid the Landmines!', 160, 300);
  fill('white');
  textSize(25);
  text('There is only one safe spot per column, ', 180, 420);
  text('Find your way without getting blown up...', 180, 470);
  fill('red');
  textSize(50);
  text('Click to Continue', 210, 640);
  fill(0, 200, 0, 40);
  rect(100, 200, 600, 550);

  // Mines
  scale(0.5);
  image(mine, 220, 300);
  image(mine, 220, 650);
  image(mine, 220, 1000);
  image(mine, 220, 1350);
  image(mine, 220, 1700);
  image(mine, 1100, 300);
  image(mine, 1100, 650);
  image(mine, 1100, 1000);
  image(mine, 1100, 1350);
  image(mine, 1100, 1700);
  image(mine, 660, 300);
  image(mine, 660, 650);
  image(mine, 660, 1000);
  image(mine, 660, 1350);
  image(mine, 660, 1700);
  
  scale(1); // Reset scaling

  // Finish Line
  image(finish, 1000, -300);

  // Explosion (Move this to mouseClicked instead of draw)
  // explosionSound.play(); // This should not be in draw()
  
  // Death scene
  fill(255, 0, 0);
  rect(100, 200, 300, 100);
}

function mouseClicked() {
  explosionSound.play();
  console.log("Explosion sound played");
}