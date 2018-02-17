'use strict';

// declaring global variables & establishing DOM access

var allProducts = [];
var prevImages = [];
var clicks = 0;
var images = document.getElementById('images');
var pics = [document.getElementById('product1'), document.getElementById('product2'), document.getElementById('product3')];

// Building constructor function

function Products(name, filepath, clickCount, appearCount) {
  this.name = name;
  this.filepath = filepath;
  this.clickCount = clickCount;
  this.appearCount = appearCount;
  allProducts.push(this);
}

// Calling constructor function

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

// Setting function for generating random images

function randImg() {
  return Math.floor(Math.random() * allProducts.length);
}

// Setting function to populate HTML with array of random images

function randProduct() {
  var currentImages = [];
  currentImages[0] = randImg();
  while (prevImages.indexOf(currentImages[0]) !== -1) {
    currentImages[0] = randImg();
  }

  currentImages[1] = randImg();
  while (currentImages[0] === currentImages[1] ||prevImages.indexOf(currentImages[1]) !== -1) {
    currentImages[1] = randImg();
  }

  currentImages[2] = randImg();
  while (currentImages[0] === currentImages[2] || currentImages[1] === currentImages[2] || prevImages.indexOf(currentImages[2]) !== -1) {
    currentImages[2] = randImg();
  }

  for(var j = 0; j < 3; j++) {
    pics[j].src = allProducts[currentImages[j]].filepath;
    pics[j].id = allProducts[currentImages[j]].name;
    allProducts[currentImages[j]].appearCount ++;
    prevImages[j] = currentImages[j];
  }
  // console.log(currentImages);
}

randProduct();

// Creating event

images.addEventListener('click', handleClick);

function handleClick(event) {
  clicks++;
  console.log(clicks);
  for (var k = 0; k < allProducts.length; k++) {
    if (event.target.id === allProducts[k].name) {
      allProducts[k].clickCount++;
      console.log(allProducts[k].name);
    }
  }
  if (clicks === 25) {
    makeChart();
    images.removeEventListener('click', handleClick);
    images.parentNode.removeChild(images);
  }
  randProduct();
}

// Building chart for vote totals

function makeChart() {

  var prodName = [];
  var prodVotes = [];
  var prodShown = [];

  for (var m = 0; m < allProducts.length; m++) {
    prodName.push(allProducts[m].name);
    // console.log(prodName);
    prodVotes.push(allProducts[m].clickCount);
    // console.log(prodVotes);
    prodShown.push(allProducts[m].appearCount);
  }

  var ctx = document.getElementById('chart').getContext('2d');

  var voteChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: prodName,
      datasets: [{
        label: 'Times picked',
        data: prodVotes,
        backgroundColor: '#6290C8',
      },{
        label: 'Times shown',
        data: prodShown,
        backgroundColor: '#E66A43',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
          }
        }],
        yAxes: [{
        }],
        ticks: {
          beginAtZero: true,
        }
      }
    }
  });
}

