// insert sick beats here if u want
radio.onReceivedNumber(function (receivedNumber) {
    if (A_antiExplode == 0) {
        A_antiExplode += 1
    }
})
let A_antiExplode = 0
radio.setGroup(143)
// set this to length of 1 attempt
let ROUNDLENGTH = 10
// set this to break time between "A" press and game start
let PAUSE = 10
let time = 0
let globalTime = 0
A_antiExplode = 0
let score = 0
let highscore = 0
loops.everyInterval(1000, function () {
    globalTime += 1
})
basic.forever(function () {
    if (A_antiExplode == 1) {
        time = globalTime + PAUSE
        while (time > globalTime) {
            basic.showNumber(time - globalTime)
        }
        basic.clearScreen()
        basic.showString("GO")
        radio.sendValue("Start", 1)
        time = globalTime + ROUNDLENGTH
        while (time > globalTime) {
            basic.showNumber(time - globalTime)
        }
        radio.sendValue("Start", 0)
        if (score > highscore) {
            highscore = score
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("Score")
        basic.showNumber(score)
        basic.pause(2000)
        basic.clearScreen()
        basic.showString("HI")
        basic.showNumber(highscore)
        basic.pause(2000)
        basic.clearScreen()
        score = 0
        A_antiExplode = 0
    }
})
