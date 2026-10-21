
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    driver.get("http://127.0.0.1:5500/Websites/index.html")
    driver.maximize_window()

    print("Page title:", driver.title)

    # Check that the registration form and message exist
    print("Form found:", driver.find_element(By.ID, "registrationForm"))
    print("Message element found:",
          driver.find_element(By.ID, "message"))

    # Enter test details
    driver.find_element(By.ID, "name").send_keys("Rahul Sharma")
    driver.find_element(By.ID, "email").send_keys("studentexample.com")
    driver.find_element(By.ID, "password").send_keys("Test12345")
    driver.find_element(By.ID, "confirmPassword").send_keys("Test12345")

    # Click Register
    driver.find_element(By.ID, "registerButton").click()

    # Wait for any message text
    message = WebDriverWait(driver, 5).until(
        lambda d: d.find_element(By.ID, "message").text.strip() != ""
    )

    actual_message = driver.find_element(By.ID, "message").text
    print("Actual message:", actual_message)

finally:
    driver.quit()
