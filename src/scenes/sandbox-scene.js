import Phaser from 'phaser'
import Player from '../sprites/player'

export default class SandboxScene extends Phaser.Scene {
  constructor() {
    super('SandboxScene')
  }

  create() {
    // Enables detection of the keyboard on this scene
    this.cursorKeys = this.input.keyboard.createCursorKeys()

    // Creates the player
    this.player = new Player(this, 10, 100)
  }

  update() {
    // Call the update for each frame on sprite also
    this.player.update()
  }
}


