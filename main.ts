let dot_pos2 = 0
let dot_pos = 0
let time_between_changes = 50
let time_to_change = 0
let change = 1
let time_between_changes_2 = 80
let time_to_change_2 = time_between_changes_2
let change2 = 1
let leds = 60
let strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)
basic.forever(function () {
    if (control.millis() >= time_to_change) {
        time_to_change = control.millis() + time_between_changes
        strip.setPixelColor(dot_pos, neopixel.colors(NeoPixelColors.Black))
        dot_pos += change
        strip.setPixelColor(dot_pos, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        if (dot_pos == leds) {
            change = -1
        }
        if (dot_pos == 0) {
            change = 1
        }
    }
    if (control.millis() >= time_to_change_2) {
        time_to_change_2 = control.millis() + time_between_changes_2
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Black))
        dot_pos2 += change2
        serial.writeLine("" + (dot_pos2))
        strip.setPixelColor(dot_pos2, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        if (dot_pos2 == leds) {
            change2 = -1
        }
        if (dot_pos2 == 0) {
            change2 = 1
        }
    }
})
