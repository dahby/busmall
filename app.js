'use strict';

var allProducts = [];

function Products(name, filepath, clickCount, appearCount) {
  this.name = name;
  this.filepath = filepath;
  this.clickCount = clickCount;
  this.appearCount = appearCount;
  allProducts.push(this);
}

function productGenerator() {
  new Products('R2-D2 Bag', 'img/bag.jpg', 0, 0);
  new Products('Banana Slicer', 'img/banana.jpg', 0, 0);
  new Products('Bathroom Tablet', 'img/bathroom.jpg', 0, 0);
  new Products('Toeless Boots', 'img/boots.jpg', 0, 0);
  new Products('Breakfast All-In-One', 'img/breakfast.jpg', 0, 0);
  new Products('Meatball Bubble Gum', 'img/bubblegum.jpg', 0, 0);
  new Products('Uncomfortable Chair', 'img/chair.jpg', 0, 0);
  new Products('Cthulhu Doll', 'img/cthulhu.jpg', 0, 0);
  new Products('Dog-Duck Mask', 'img/dog-duck.jpg', 0, 0);
  new Products('Dragon Meat', 'img/dragon.jpg', 0, 0);
  new Products('Cutlery Pen Set', 'img/pen.jpg', 0, 0);
  new Products('Pet Sweep', 'img/pet-sweep.jpg', 0, 0);
  new Products('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0, 0);
  new Products('Unicorn Meat', 'img/unicorn.jpg', 0, 0);
  new Products('Tenticle USB', 'img/usb.gif', 0, 0);
  new Products('Useless Water Can', 'img/water-can.jpg', 0, 0);
  new Products('Bad Wine Glass', 'img/wine-glass.jpg', 0, 0);
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

  allProducts[randIndex1].appearCount ++;
  allProducts[randIndex2].appearCount ++;
  allProducts[randIndex3].appearCount ++;

  currentImages.push(imgEl1.src);
  currentImages.push(imgEl2.src);
  currentImages.push(imgEl3.src);
  // prevImages.push(currentImages);

  console.log(currentImages);
  i++;
  console.log(i);
  // console.log(prevImages);
  if (i === 25) {
    makeTableRow();
  }
}
randProduct();

var tally = document.getElementById('tally');

function makeTableRow() {
  for (var j = 0; j < allProducts.length; j++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allProducts[j].name;
    trEl.appendChild(tdEl);
    tally.appendChild(trEl);
  }
}

// makeTableRow();

// if (i === 2) {
//   makeTableRow();
// }