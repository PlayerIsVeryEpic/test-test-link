input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    
    if (time - globalTime > 0) {
        score += 5
    }
    
})
//  insert sick beats here if u want
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (A_antiExplode == 0) {
        A_antiExplode += 1
    }
    
})
input.onPinPressed(TouchPin.P1, function on_pin_pressed_p1() {
    
    if (time - globalTime > 0) {
        score += 10
    }
    
})
let A_antiExplode = 0
let globalTime = 0
let time = 0
radio.setGroup(143)
//  set this to length of 1 attempt
let ROUNDLENGTH = 10
//  set this to break time between "A" press and game start
let PAUSE = 10
let highscore = 0
time = 0
let score = 0
globalTime = 0
A_antiExplode = 0
loops.everyInterval(1000, function on_every_interval() {
    
    globalTime += 1
})
basic.forever(function on_forever() {
    
    if (A_antiExplode == 1) {
        time = globalTime + PAUSE
        while (time > globalTime) {
            radio.sendString("" + ("" + (time - globalTime)))
        }
        //  This is clear screen command
        radio.sendNumber(0)
        radio.sendString("GO")
        time = globalTime + ROUNDLENGTH
        while (time > globalTime) {
            radio.sendString("" + ("" + (time - globalTime)))
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
        radio.sendNumber(0)
        radio.sendString("Score")
        radio.sendString("" + ("" + score))
        basic.pause(2000)
        radio.sendNumber(0)
        radio.sendString("HI")
        radio.sendString("" + ("" + highscore))
        basic.pause(2000)
        radio.sendNumber(0)
        score = 0
        A_antiExplode = 0
    }
    
})
