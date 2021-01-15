dot_pos2 = 0
dot_pos = 0
time_between_changes = 50
time_to_change = time_between_changes
change = 1
time_between_changes_2 = 80
time_to_change_2 = time_between_changes_2
change2 = 1
leds = 10
strip = neopixel.create(DigitalPin.P0, leds, NeoPixelMode.RGB)

def on_forever():
    global time_to_change, dot_pos, change, time_to_change_2, dot_pos2, change2
    if control.millis() >= time_to_change:
        time_to_change = control.millis() + time_between_changes
        strip.set_pixel_color(dot_pos, neopixel.colors(NeoPixelColors.BLACK))
        dot_pos += change
        strip.set_pixel_color(dot_pos, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        if dot_pos == leds:
            change = -1
        if dot_pos == 0:
            change = 1
    if control.millis() >= time_to_change_2:
        time_to_change_2 = control.millis() + time_between_changes_2
        strip.set_pixel_color(dot_pos2, neopixel.colors(NeoPixelColors.BLACK))
        dot_pos2 += change2
        strip.set_pixel_color(dot_pos2, neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
        if dot_pos2 == leds:
            change2 = -1
        if dot_pos2 == 0:
            change2 = 1
basic.forever(on_forever)
