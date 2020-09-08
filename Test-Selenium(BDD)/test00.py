from selenium import webdriver

driver = webdriver.Chrome()  # Acessar a URL especificada
driver.find_element_by_css_selector('#id-search-field').send_keys("python")  # Digita o texto "python" no input
driver.find_element_by_css_selector('#submit').click()  # Clica no botão de submit
driver.quit()  # Encerra o browser