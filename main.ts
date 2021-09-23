let Graus = 0
input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
    Graus = input.compassHeading()
})
basic.forever(function () {
    Graus = input.compassHeading()
    if (Graus < 45) {
        basic.showString("N")
    } else {
        if (Graus < 135) {
            basic.showString("L")
        } else {
            if (Graus < 225) {
                basic.showString("S")
            } else {
                if (Graus < 315) {
                    basic.showString("O")
                } else {
                    basic.showString("N")
                }
            }
        }
    }
})
