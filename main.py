def on_button_pressed_a():
    basic.show_string("")

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

img = images.create_big_image("""
    . . . . .
        . . . . .
        . # # . .
        . . . . .
        . . . . .
""")
