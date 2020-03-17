import Phaser from 'phaser'
import BootScene from './scenes/boot-scene'
import SandboxScene from './scenes/sandbox-scene'

const config = {
  // Auto detects the best render
  type: Phaser.AUTO,

  // Width and Height for the canvas
  width: 400,
  height: 300,

  // No scale mode
  scaleMode: 0,

  // Pixel art mode and zoom on the canvas
  pixelArt: true,
  zoom: 2,

  // Physics as arcade mode on Y axis
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  // Every scene should be add here, otherwise it won't be available
  scene: [ BootScene, SandboxScene ]
}

// Ready, set, go
new Phaser.Game(config)
