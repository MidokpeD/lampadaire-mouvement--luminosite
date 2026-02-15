let Mouvement = 0
basic.forever(function () {
    Mouvement = pins.digitalReadPin(DigitalPin.P11)
    if (Mouvement == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showLeds(`
            . . . . #
            . # # # #
            . # # # .
            . # # # .
            # # . . .
            `)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
	
})
