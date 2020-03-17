import Phaser from 'phaser'
import playerPNG from '../assets/graphics/player.png'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    // Load spritesheet for player
    this.load.spritesheet('player', playerPNG, { frameWidth: 16, frameHeight: 16 })
  }

  create() {
    // Ok we're loaded go to next scene
    this.scene.start('SandboxScene')
  }
}
