package com.qa.tests;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.qa.pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class InvalidLoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        loginPage = new LoginPage(driver);
        loginPage.open("https://app.vwo.com");
    }

    @Test
    public void invalidLoginShouldShowErrorMessage() {
        loginPage.login("invaliduser@example.com", "wrongpassword");
        Assert.assertTrue(loginPage.isErrorDisplayed(), "Expected error message for invalid login.");
        Assert.assertFalse(loginPage.isLoginSuccessful(), "Invalid login should not redirect to dashboard.");
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
