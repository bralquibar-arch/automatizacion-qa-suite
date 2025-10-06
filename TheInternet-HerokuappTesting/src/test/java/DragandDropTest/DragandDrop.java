package DragandDropTest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.openqa.selenium.chrome.ChromeDriver;

public class DragandDrop {

    WebDriver driver;

    @BeforeClass
    public void setUp() {
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://the-internet.herokuapp.com/drag_and_drop");
    }

    @Test
    public void testDragAndDrop() {
        WebElement columnA = driver.findElement(By.id("column-a"));
        WebElement columnB = driver.findElement(By.id("column-b"));

        Actions actions = new Actions(driver);
        actions.dragAndDrop(columnA, columnB).perform();

        // Validar que los textos se intercambiaron
        String textA = columnA.findElement(By.tagName("header")).getText();
        String textB = columnB.findElement(By.tagName("header")).getText();

        Assert.assertEquals(textA, "B", "El elemento A no fue movido correctamente");
        Assert.assertEquals(textB, "A", "El elemento B no fue movido correctamente");
    }

    @AfterClass
    public void tearDown() {
        driver.quit();
    }
}