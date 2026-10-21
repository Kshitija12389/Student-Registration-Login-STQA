
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    # Open the registration page
    driver.get("http://127.0.0.1:5500/Websites/index.html")
    driver.maximize_window()

    # Click Register without entering any details
    driver.find_element(By.ID, "registerButton").click()

    # Wait for the validation message
    message = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "message"))
    )

    # Verify the message
    if message.text == "Please fill in all fields.":
        print("Empty registration test passed!")
    else:
        print("Empty registration test failed!")
        print("Actual message:", message.text)

finally:
    driver.quit()
