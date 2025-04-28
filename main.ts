radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        basic.showString("SCORE")
        basic.pause(500)
        basic.clearScreen()
        basic.showNumber(value)
        basic.pause(500)
    } else if (name == "b") {
        basic.showString("HI")
        basic.pause(500)
        basic.clearScreen()
        basic.showNumber(value)
    } else if (name == "c") {
        basic.showNumber(value)
    } else {
        basic.showString(name)
    }
})
