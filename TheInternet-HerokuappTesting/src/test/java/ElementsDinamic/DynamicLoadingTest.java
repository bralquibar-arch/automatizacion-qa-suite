package ElementsDinamic;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.*;

import java.time.Duration;

public class DynamicLoadingTest {
    WebDriver driver;
    WebDriverWait wait;

    @BeforeClass
    public void setup() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-save-password-bubble");
        options.addArguments("--disable-infobars");
        options.addArguments("--disable-password-manager-reauthentication");
        options.addArguments("--disable-autofill-keyboard-accessory-view");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        driver.manage().window().maximize();
    }

    @Test(priority = 1)
    public void testDynamicLoadingExample1() {
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
        driver.findElement(By.cssSelector("#start button")).click();

        // se espera que el elemento sea visible
        WebElement helloText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        Assert.assertTrue(helloText.getText().contains("Hello World!"), "El texto esperado no aparece.");
        System.out.println("✅ Ejemplo 1: El texto apareció correctamente.");
    }

    @Test(priority = 2)
    public void testDynamicLoadingExample2() {
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/2");
        driver.findElement(By.cssSelector("#start button")).click();

        WebElement helloText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        Assert.assertTrue(helloText.getText().contains("Hello World!"), "El texto esperado no aparece.");
        System.out.println("✅ Ejemplo 2: El texto apareció correctamente.");
    }

    @AfterClass
    public void teardown() {
        driver.quit();
    }
}