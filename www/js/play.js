// State: DogeDodge.Play
'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak")
  },

  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('dodger', 'assets/icon.png',32,32);
    
  },

  create: function () {

    // background
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    // dodger

    this.dodger = this.add.sprite(160,510,'dodger');
    // this.dodger.smoothed = false;
    // this.dodger.scale.set(1); 
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('blink');
    this.dodger.animations.play('blink',2,true); // (name,fps,loop)
    game.physics.arcade.enable(this.dodger);
    this.dodger.checkWorldBounds = true;

    // dodge

    this.dodge = this.add.sprite(16 0,-32,'dodge');
    //this.dodge.smoothed = false;
    //this.dodge.scale.set(1)

    this.dodge.anchor.set(0.5,0.5);

    //this.dodge.animations.add('blink');
    //this.dodge.animations.play('blink',2,true); // (name,fps,loop)

    game.physics.arcade.enable(this.dodge);
    this.dodge.body.velocity.y = 1200;


    // movement keys
    this.cursors = game.input.keyboard.createCursorKeys();

  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.dodger.body.velocity.x = -1200;
    }
    if (this.cursors.right.isDown) {
      this.dodger.body.velocity.x = 1200;
    }
    if (this.dodge.y >= 568)
      this.dodge.y = -32;
    this.dodge.x = game.rnd.integerInRange(0,320);
  }

};
