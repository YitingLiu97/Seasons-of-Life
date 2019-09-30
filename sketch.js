//Seasons of Life by Elena Glazkova and Yiting Liu 2019/09/22

//music credit: 
//Background music: Short - Joe Hisaishi - Town With An Ocean View (Relaxing Jazz & Bossa Nova Music - Ghibli cover).mp3
//fall - Autumn In New York - Sweet Jazz Trio
//Spring - Matt Quentin - Morning Dew [HD]
//summer - Waves - Pointy Features ft  Ningen
//winter -memory lane - aqualina

//Design credits:
//Summer waves designed by rawpixel.com / Freepik
//Spring flowers designed by Freepik
//snowflakes from https://www.vecteezy.com/vector-art/104194-free-vector-snowflakes
//fall leaves designed by Freepik

// font included:Merriweather-Black.ttf


let items = []; // array of season objects
let img = []; //array of images 
let song = [];

var rad = 50;
var y = 400 * 0.9;

var winter = false;
var spring = false;
var summer = false;
var fall = false;

var slider;

let soundtrack;
let winterSong;
let springSong;
let summerSong;
let fallSong;

let merriweather;

function preload() {

  //load images as the elements
  let snowflake = loadImage('element1.png');
  let flower = loadImage('element2.png');
  let waves = loadImage('element3.png');
  let leaves = loadImage('element4.png');
  img = [snowflake, flower, waves, leaves];

  //load the music for background
  soundtrack = loadSound('soundtrack.mp3');

  //load the music for each season
  winterSong = loadSound('winter.mp3');
  springSong = loadSound('spring.mp3');
  summerSong = loadSound('summer.mp3');
  fallSong = loadSound('fall.mp3');

}

function setup() {
  createCanvas(560, 400);
  noStroke();

  //load the font
  merriweather = loadFont('Merriweather-Black.ttf');
  textFont(merriweather);

  for (let i = 0; i < 40; i++) {
    items.push(new Items());
  }

  //create sliderRate and slidePan for the preloaded music 
  soundtrack.play();
  soundtrack.setVolume(0.1, 100);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0.5, 0.01);

  sliderRate.style('width', width / 2 - 5 + 'px');
  sliderPan.style('width', width / 2 + 'px');

}

function draw() {

  soundtrack.pan(sliderPan.value());
  soundtrack.rate(sliderRate.value());

  background(147, 112, 219);

  textSize(height / 8);
  textAlign(CENTER);
  fill(255);
  text('Seasons of Life', width / 2, height / 2);

  if (winter) {
    background(69, 205, 254);
    createNewWinter();

  }

  if (spring) {
    background(204, 255, 204);
    createNewSpring();

  }

  if (summer) {
    background(255, 254, 111);
    createNewSummer();
  }

  if (fall) {
    background(255, 218, 185);
    createNewFall();

  }

  //creating the buttons
  //winter
  fill(69, 205, 254);
  circle(width / 8, y, rad);

  //spring
  fill(204, 255, 204);
  circle(width * 3 / 8, y, rad);

  //summer
  fill(255, 254, 111);
  circle(width * 5 / 8, y, rad);

  //fall 
  fill(255, 218, 185);
  circle(width * 7 / 8, y, rad);

}

function createNewWinter() {

  for (let i = 0; i < items.length; i++) {
    items[i].move();
    items[i].displayWinter();
  }
}

function createNewSpring() {
  for (let i = 0; i < items.length; i++) {
    items[i].move();
    items[i].displaySpring();
  }
}

function createNewSummer() {
  for (let i = 0; i < items.length; i++) {
    items[i].move();
    items[i].displaySummer();
  }
}

function createNewFall() {
  for (let i = 0; i < items.length; i++) {
    items[i].move();
    items[i].displayFall();
  }
}

function mouseClicked() {
  //if the mouse pressed on the winter button
  if (dist(mouseX, mouseY, width / 8, y) < rad) {
    winter = !winter;

    soundtrack.stop();
    fallSong.stop();
    summerSong.stop();
    springSong.stop();
    winterSong.play();
  }

  //if the mouse pressed on the spring button
  if (dist(mouseX, mouseY, width * 3 / 8, y) < rad) {
    spring = !spring;

    soundtrack.stop();
    fallSong.stop();
    summerSong.stop();
    winterSong.stop();
    springSong.play();
  }

  //if the mouse pressed on the summer button
  if (dist(mouseX, mouseY, width * 5 / 8, y) < rad) {
    summer = !summer;

    soundtrack.stop();
    fallSong.stop();
    winterSong.stop();
    springSong.stop();
    summerSong.play();
  }

  //if the mouse pressed on the fall button
  if (dist(mouseX, mouseY, width * 7 / 8, y) < rad) {
    fall = !fall;

    soundtrack.stop();
    winterSong.stop();
    summerSong.stop();
    springSong.stop();
    fallSong.play();

  } else {
    redraw(3);
  }
}

// Items Class
class Items {
  constructor(x, y, r, img, sound) {
    this.x = random(width);
    this.y = random(height);
    this.r = random(20, 60);
    this.speed = 1;
    this.image = img;
    this.sound = sound;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  displayWinter() {
    image(img[0], this.x, this.y, this.r, this.r);
  }
  displaySpring() {
    image(img[1], this.x, this.y, this.r, this.r);
  }
  displaySummer() {
    image(img[2], this.x, this.y, this.r, this.r);
  }
  displayFall() {
    image(img[3], this.x, this.y, this.r, this.r);
  }
}