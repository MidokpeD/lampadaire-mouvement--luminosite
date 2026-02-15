let Luminosité = 0
let Mouvement = 0
basic.forever(function () {
    Luminosité = pins.analogReadPin(AnalogReadWritePin.P1)
    Mouvement = pins.digitalReadPin(DigitalPin.P11)
    if (Luminosité < 500) {
        if (Mouvement == 1) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(3000)
            pins.digitalWritePin(DigitalPin.P2, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
