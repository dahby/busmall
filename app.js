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

function randProduct() {
  var randIndex = Math.floor(Math.random() * allProducts.length);
  imgEl1.src = allProducts[randIndex].filepath;
  imgEl2.src = allProducts[randIndex].filepath;
  imgEl3.src = allProducts[randIndex].filepath;
}
randProduct();