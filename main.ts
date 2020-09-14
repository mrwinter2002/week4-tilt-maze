controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.ay = -20
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.ax = -40
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.ax = 20
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    ball.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite, location) {
    game.over(false)
})
let ball: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000402020202020202020508090909090909090b0108090d09090e0909090108090d09090e0909090108090d0c090e090d090108090d09090e0a0d0901080a0909090e090d090103070707070707070706`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . 2 
    2 . 2 . . 2 . . . 2 
    2 . 2 . . 2 . . . 2 
    2 . 2 . . 2 . 2 . 2 
    2 . 2 . . 2 . 2 . 2 
    2 . . . . 2 . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.floorMixed,sprites.dungeon.floorDark3,sprites.dungeon.floorLight3,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1], TileScale.Sixteen))
ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 1 1 6 6 6 . . . . 
    . . . b b b b 6 6 6 6 6 6 . . . 
    . . 6 b b b b c c c 1 1 6 6 . . 
    . . b b b b b c c c 1 1 b 6 . . 
    . 6 b b b b c c c c c b b 6 6 . 
    . 6 b b b c c c 6 6 6 6 b 6 6 . 
    . 6 6 b b c c 6 6 6 6 6 1 6 6 . 
    . 6 c b b c c 6 6 6 6 1 6 6 6 . 
    . . 6 c b b c 6 6 6 6 6 c 6 . . 
    . . 6 c c b c c 6 6 6 c 6 6 . . 
    . . . 6 c c c c c c c c 6 . . . 
    . . . . 6 6 c c c c 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(ball, tiles.getTileLocation(8, 6))
