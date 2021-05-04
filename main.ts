scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.over(true)
    music.beamUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
game.showLongText("Hello player, your aim is to get the red pearl before the time runs out otherwise it will be the end of the world. Be careful, there are some monsters!", DialogLayout.Full)
info.startCountdown(60)
music.baDing.play()
let mySprite = sprites.create(assets.image`dino1`, SpriteKind.Player)
let enemy2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
let enemy1 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
let enemy3 = sprites.create(img`
    . . . . 7 . 7 . 7 . 7 . 7 . . . 
    . . . . 7 . 7 . 7 . 7 . 7 . . . 
    . . . 2 1 1 2 1 1 1 1 1 2 . . . 
    7 7 7 1 2 1 1 2 1 1 1 2 1 7 7 7 
    . . . 1 1 2 1 1 2 1 2 1 1 . . . 
    7 7 7 1 1 1 f f f f 1 1 1 7 7 7 
    . . . 1 1 1 f f f f 1 1 1 . . . 
    7 7 7 2 2 2 f f f f 2 2 2 7 7 7 
    . . . 1 1 1 f f f f 1 1 1 . . . 
    7 7 7 1 1 2 1 1 2 1 2 1 1 . . . 
    . . . 1 2 1 1 2 1 1 1 2 1 . . . 
    . . . 2 1 1 2 1 1 1 1 2 2 . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    . . . 7 . 7 . 7 . 7 . 7 . . . . 
    `, SpriteKind.Enemy)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile3)
tiles.placeOnRandomTile(enemy1, sprites.builtin.forestTiles7)
tiles.placeOnRandomTile(enemy2, sprites.builtin.forestTiles1)
tiles.placeOnRandomTile(enemy3, sprites.builtin.forestTiles8)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    for (let index = 0; index < 10; index++) {
        enemy1.x += 5
        pause(100)
    }
    for (let index = 0; index < 10; index++) {
        enemy1.x += -5
        pause(100)
    }
})
forever(function () {
    for (let index = 0; index < 10; index++) {
        enemy2.vy += 5
        pause(100)
    }
    for (let index = 0; index < 10; index++) {
        enemy2.vy += -5
        pause(100)
    }
})
forever(function () {
    for (let index = 0; index < 10; index++) {
        enemy3.vy += randint(0, 15)
        pause(100)
    }
    for (let index = 0; index < 10; index++) {
        enemy3.vy += randint(-15, 0)
        pause(100)
    }
})
