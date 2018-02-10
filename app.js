'use strict';

var allProducts = [];

function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  allProducts.push(this);
}

function productGenerator() {
  new Products('R2-D2 Bag', 'img/bag.jpg');
  new Products('Banana Slicer', 'img/banana.jpg');
  new Products('Bathroom Tablet', 'img/bathroom.jpg');
  new Products('Toeless Boots', 'img/boots.jpg');
  new Products('Breakfast All-In-One', 'img/breakfast.jpg');
  new Products('Meatball Bubble Gum', 'img/bubblegum.jpg');
  new Products('Uncomfortable Chair', 'img/chair.jpg');
  new Products('Cthulhu Doll', 'img/cthulhu.jpg');
  new Products('Dog-Duck Mask', 'img/dog-duck.jpg');
  new Products('Dragon Meat', 'img/dragon.jpg');
  new Products('Cutlery Pen Set', 'img/pen.jpg');
  new Products('Pet Sweep', 'img/pet-sweep.jpg');
  new Products('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
  new Products('Unicorn Meat', 'img/unicorn.jpg');
  new Products('Tenticle USB', 'img/usb.gif');
  new Products('Useless Water Can', 'img/water-can.jpg');
  new Products('Bad Wine Glass', 'img/wine-glass.jpg');
}
productGenerator();

var imgEl1 = document.getElementById('product1');
var imgEl2 = document.getElementById('product2');
var imgEl3 = document.getElementById('product3');

imgEl1.addEventListener('click', randProduct);
imgEl2.addEventListener('click', randProduct);
imgEl3.addEventListener('click', randProduct);

// var currentImages = [];
// var prevImages = [];

// var usedImagesCount = 0;
var i = 0;

function randProduct() {
  var currentImages = [];

  var randIndex1 = Math.floor(Math.random() * allProducts.length);
  var randIndex2 = Math.floor(Math.random() * allProducts.length);
  var randIndex3 = Math.floor(Math.random() * allProducts.length);

  imgEl1.src = allProducts[randIndex1].filepath;
  imgEl2.src = allProducts[randIndex2].filepath;
  imgEl3.src = allProducts[randIndex3].filepath;

  currentImages.push(imgEl1.src);
  currentImages.push(imgEl2.src);
  currentImages.push(imgEl3.src);
  // prevImages.push(currentImages);

  console.log(currentImages);
  i++;
  console.log(i);
  // console.log(prevImages);
}
randProduct();