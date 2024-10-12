# Auto-Typer for Workday Skills Section

This Python script automates the process of filling in the skills section of your Workday profile by typing out items from a CSV file directly into the input box. This is especially useful for quickly entering multiple skills without repetitive typing.

## Prerequisites

Before you run the script, ensure you have the following:

- Python 3.x installed on your machine.
- The `pyautogui` library. If you haven't installed it yet, you can do so using pip:

```bash
pip install pyautogui
```

## Usage

1. **Prepare your CSV file**: Create a CSV file where items are separated by commas. For example:

   ```csv
   Java, Python, JavaScript, SQL, Git
   ```

2. **Run the script**: Open your terminal or command prompt and navigate to the directory where the script is located. Use the following command to run the script:

   ```bash
   python script.py <filename>
   ```

   Replace `<filename>` with the name of your CSV file (including the file extension).

3. **Position the cursor**: After you run the script, you'll have 5 seconds to position your cursor in the skills input box in Workday where you want the text to be typed.

4. **Automatic typing**: The script will type each skill from the CSV file, pressing `Enter` after each one.

## Important Instructions

- **Focus on the skills input box**: Ensure that you click on the skills input box in Workday before the script starts typing. The script will type directly where your cursor is located, so it's important that this input field is active.

## Customization Options

You can tweak several values in the script to change its behavior:

1. **Delay between typing items**:

   - The `time.sleep(0.5)` line controls the delay after typing each item. Adjust this value to speed up or slow down the typing process.

   ```python
   time.sleep(0.5)  # Adjust the value to change the delay
   ```

2. **Delay before pressing `Enter`**:

   - The `time.sleep(1)` line controls the delay after pressing `Enter`. Adjust this value as needed.

   ```python
   time.sleep(1)  # Adjust the value to change the delay before the next item
   ```

3. **Initial cursor position delay**:

   - The `time.sleep(5)` line allows you 5 seconds to position your cursor. Change this value if you need more or less time.

   ```python
   time.sleep(5)  # Adjust the value for the initial cursor positioning delay
   ```

## Example

1. Create a file named `skills.csv` with the following content:

   ```
   Java, Python, JavaScript, SQL, Git
   ```

2. Run the script with:

   ```bash
   python script.py skills.csv
   ```

3. When prompted, move your cursor to the skills input box in Workday. The script will automatically type the skills in the specified order.

## Important Notes

- Make sure that the Workday application is open and the skills input box is active before running the script.
- The script uses `pyautogui`, which simulates keyboard input. Ensure you don’t interfere with the typing process, as it could lead to unintended results.

## Author

[Aryan Khurana](https://www.github.com/AryanK1511)
