
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Open Google Chrome
driver = webdriver.Chrome()

# Open the login page
driver.get("http://127.0.0.1:5500/Websites/login.html")
driver.maximize_window()

# Enter an invalid email and a password
driver.find_element(By.ID, "loginEmail").send_keys(
    "studentexample.com"
)
driver.find_element(By.ID, "loginPassword").send_keys("Test123")

# Click the Login button
driver.find_element(
    By.CSS_SELECTOR, "#loginForm button[type='submit']"
).click()

# Check the validation message
message = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.ID, "loginMessage"))
)

if message.text == "Please enter a valid email address.":
    print("Invalid email validation test passed!")
else:
    print("Invalid email validation test failed!")
    print("Actual message:", message.text)

# Close the browser
driver.quit()
