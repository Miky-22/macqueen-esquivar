let strip = false
basic.forever(function () {
    if (Maqueen_V5.Ultrasonic() < 30 && Maqueen_V5.Ultrasonic() != 0) {
        strip = Math.randomBoolean()
    }
    if (strip == true) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 50)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0)
        basic.pause(500)
    }
    if (strip == false) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 0)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 50)
        basic.pause(500)
    } else {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 50)
    }
})
