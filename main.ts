// insert sick beats here if u want
radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.onReceivedValue(function (name, value) {
    if (A_antiExplode == 0) {
        A_antiExplode += 1
    }
    if (true) {
    	
    }
})
let highscore = 0
let score = 0
let time = 0
let globalTime = 0
let A_antiExplode = 0
radio.setGroup(143)
loops.everyInterval(1000, function () {
    globalTime += 1
})
basic.forever(function () {
    if (A_antiExplode == 1) {
        let ROUNDLENGTH = 0
        let PAUSE = 0
        time = globalTime + PAUSE
        while (time > globalTime) {
            basic.showNumber(time - globalTime)
        }
        basic.clearScreen()
        basic.showString("GO")
        time = globalTime + ROUNDLENGTH
        while (time > globalTime) {
            basic.showNumber(time - globalTime)
        }
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
