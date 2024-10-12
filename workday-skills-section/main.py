import sys
import time

import pyautogui


def read_csv_file(filename):
    with open(filename, "r") as file:
        content = file.read().strip()
    return content.split(",")


def print_at_cursor(items):
    print("Position your cursor where you want the text to appear...")
    time.sleep(5)

    for item in items:
        pyautogui.typewrite(item.strip())
        time.sleep(0.5)
        pyautogui.press("enter")
        time.sleep(1)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <filename>")
        sys.exit(1)

    filename = sys.argv[1]
    items = read_csv_file(filename)
    print_at_cursor(items)
