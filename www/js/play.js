

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak")
  },

  preload: function () {
    this.load.spritesheet('background', 'assets/background.png',320,568);
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,-50);
    this.background.scale.set(1);
  },

  update: function () {
  }
   
