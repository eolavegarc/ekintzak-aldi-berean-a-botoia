input.onButtonPressed(Button.A, function () {
    hasiera = 1
})
input.onButtonPressed(Button.B, function () {
    hasiera = 0
})
let hasiera = 0
DFRobotMaqueenPlus.I2CInit()
hasiera = 0
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
    }
})
