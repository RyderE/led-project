input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # . # #
            # # . # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.No)
})
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
}
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(100)
basic.forever(function () {
	
})
