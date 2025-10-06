package TestForm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.time.Duration;

public class DynamicControlsTest {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeClass
    public void setUp() {
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.manage().window().maximize();
        driver.get("https://the-internet.herokuapp.com/dynamic_controls");
    }

    @Test
    public void testDynamicControls() {
        // Se elimina checkbox
        WebElement removeBtn = driver.findElement(By.xpath("//button[text()='Remove']"));
        removeBtn.click();
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("message"), "It's gone!"));
        Assert.assertTrue(driver.findElement(By.id("message")).getText().contains("It's gone!"));

        // Se Agrega checkbox
        WebElement addBtn = driver.findElement(By.xpath("//button[text()='Add']"));
        addBtn.click();
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("message"), "It's back!"));
        Assert.assertTrue(driver.findElement(By.id("message")).getText().contains("It's back!"));

        // Habilitar input
        WebElement enableBtn = driver.findElement(By.xpath("//button[text()='Enable']"));
        enableBtn.click();
        wait.until(ExpectedConditions.textToBePresentInElementLocated(By.id("message"), "It's enabled!"));
        WebElement input = driver.findElement(By.cssSelector("#input-example input"));
        input.sendKeys("Prueba QA");
        Assert.assertEquals(input.getAttribute("value"), "Prueba QA");
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}