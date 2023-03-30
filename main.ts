input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    display_dice(randint(1, 6))
})
function display_dice (value: number) {
    if (value == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
    if (value == 2) {
        images.createImage(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `).showImage(0)
    }
    if (value == 3) {
        images.createImage(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    }
    if (value == 4) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
    if (value == 5) {
        images.createImage(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
    if (value == 6) {
        images.createImage(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `).showImage(0)
    }
}
