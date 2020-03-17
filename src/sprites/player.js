import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')

    // Make scene useful on this class
    this.scene = scene

    // Adds sprite to the existing scene
    this.scene.add.existing(this)

    // Set physics constraints
    this.scene.physics.world.enableBody(this)
    this.body.setAllowGravity(false)

    // Adds walk animation
    this.scene.anims.create({
      key: 'walk',
      repeat: -1,
      frames: this.scene.anims.generateFrameNumbers('player', { frames: [0,1,2,1] }),
      frameRate: 5,
    })

    // Adds the idle animation
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNumbers('player', { frames: [1] }),
    })

    // Player the animation idle on create
    this.anims.play('idle')

    // Player speed
    this.playerSpeed = 100
  }

  update() {
    // Set velocity as 0 on X Axis by default
    this.body.setVelocityX(0)

    // Left key pressed moves to left 
    if(this.scene.cursorKeys.left.isDown){
      // Play walk animation and ignores if already playing
      this.anims.play('walk', true)

      // Flip sprite on X axis to left
      this.flipX = true

      // Set velocity of the body (negative moves to left)
      this.body.setVelocityX(-this.playerSpeed)
    } else if(this.scene.cursorKeys.right.isDown){
      // Play walk animation and ignores if already playing
      this.anims.play('walk', true)

      // Remove the flip on X back the original position of the sprite frame
      this.flipX = false

      // Set velocity of the body (positive moves to right)
      this.body.setVelocityX(this.playerSpeed)
    } else {
      // If no cursor is pressed then plays idle animation
      this.anims.play('idle', true)
    }

    // Updates the parent
    super.update()
  }
}
