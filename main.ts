basic.forever(function () {
    if (mooncar.LineFollowerSensor() == 1) {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 100)
    }
    if (mooncar.LineFollowerSensor() == 2) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 100)
    }
    if (mooncar.LineFollowerSensor() == 3) {
        mooncar.MoonCarGo(mooncar.Direction.direct2, 100)
    }
    if (mooncar.LineFollowerSensor() == 0) {
        mooncar.MoonCarGo(mooncar.Direction.direct1, 100)
    }
})
