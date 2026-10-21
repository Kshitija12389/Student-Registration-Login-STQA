
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    # Open the login page
    driver.get("http://127.0.0.1:5500/Websites/login.html")
    driver.maximize_window()

    # Display page title
    print("Page title:", driver.title)

    # Check that the login form exists
    login_form = driver.find_element(By.ID, "loginForm")
    print("Login form found successfully!")

    # Enter valid test inputs
    driver.find_element(By.ID, "loginEmail").send_keys(
        "student@example.com"
    )
    driver.find_element(By.ID, "loginPassword").send_keys("Test123")

    # Click the Login button
    driver.find_element(By.ID, "loginButton").click()

    # Wait for the login message
    message = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "loginMessage"))
    )

    # Verify the validation message
    expected_message = (
        "Input validation successful. "
        "Login authentication is not implemented yet."
    )

    if message.text == expected_message:
        print("Login input validation test passed!")
    else:
        print("Login input validation test failed!")
        print("Actual message:", message.text)

    # Keep browser open until you press Enter
    input("Press Enter here to close the browser...")

finally:
    driver.quit()
