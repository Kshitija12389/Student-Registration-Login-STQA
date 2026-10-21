
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    driver.get("http://127.0.0.1:5500/Websites/login.html")
    driver.maximize_window()

    # Leave both fields empty and click Login
    driver.find_element(By.ID, "loginButton").click()

    message = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, "loginMessage"))
    )

    if message.text == "Please fill in all fields.":
        print("Empty login validation test passed!")
    else:
        print("Empty login validation test failed!")
        print("Actual message:", message.text)

finally:
    driver.quit()
