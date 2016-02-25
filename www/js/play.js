

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of Skilstak")
  },

  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('icon', 'assets/icon.png',32,32);
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


    // movement keys
    this.cusors = game.input.keyboard.createCursorKeys();

  },

  update: function () {
    if (this.cursors.left.isDown) {
      this.dodger.x += 10;
    }
    if (this.cursor.right.isDown) {
      this.dodger.x += 10;
    }
  }

};
