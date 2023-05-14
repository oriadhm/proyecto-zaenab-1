input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            . # # . .
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P2)))
    basic.pause(2000)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showLeds(`
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                . # # . .
                `)
            basic.pause(1000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(3000)
        }
    }
    if (pins.analogReadPin(AnalogPin.P2) < 500) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.showIcon(IconNames.No)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(3000)
        }
    }
    if (pins.analogReadPin(AnalogPin.P2) >= 500) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Happy)
        basic.pause(12000)
    }
})
