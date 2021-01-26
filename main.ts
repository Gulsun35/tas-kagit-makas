let Sayi = 0
input.onGesture(Gesture.Shake, function () {
    Sayi = randint(0, 2)
    if (Sayi == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Sayi == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Sayi == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
