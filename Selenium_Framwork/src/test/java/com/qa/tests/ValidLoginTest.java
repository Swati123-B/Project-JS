package com.qa.tests;

import java.time.Duration;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.SkipException;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.qa.pages.LoginPage;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ValidLoginTest {
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
    public void validLoginShouldRedirectToDashboard() {
        String email = System.getProperty("vwo.email");
        String password = System.getProperty("vwo.password");

        if (email == null || email.trim().isEmpty() || password == null || password.trim().isEmpty()) {
            throw new SkipException("Set -Dvwo.email and -Dvwo.password before running this test.");
        }

        loginPage.login(email, password);
        Assert.assertTrue(loginPage.isLoginSuccessful(), "Valid login did not redirect to dashboard.");
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
