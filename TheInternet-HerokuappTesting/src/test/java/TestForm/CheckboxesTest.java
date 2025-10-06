package TestForm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import java.time.Duration;
import java.util.List;

public class CheckboxesTest {

    WebDriver driver;

    @BeforeClass
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.manage().window().maximize();
        driver.get("https://the-internet.herokuapp.com/checkboxes");
    }

    @Test
    public void testCheckboxes() throws InterruptedException {
        List<WebElement> checkboxes = driver.findElements(By.cssSelector("input[type='checkbox']"));
        Assert.assertEquals(checkboxes.size(), 2, "Debe haber 2 checkboxes");

        for (WebElement checkbox : checkboxes) {
            if (!checkbox.isSelected()) {
                checkbox.click();
                Assert.assertTrue(checkbox.isSelected(), "El checkbox debe quedar seleccionado");
            }
            Thread.sleep(1000);
            checkbox.click();
            Assert.assertFalse(checkbox.isSelected(), "El checkbox debe quedar desmarcado");
        }
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}