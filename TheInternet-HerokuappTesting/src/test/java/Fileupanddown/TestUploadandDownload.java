package Fileupanddown;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.testng.annotations.*;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;

public class TestUploadandDownload {

    WebDriver driver;
    String downloadDir = System.getProperty("user.home") + "\\Downloads"; // Carpeta de descargas por defecto
    String fileToUpload = System.getProperty("user.dir") + "\\test-data\\archivo_prueba.txt";

    @BeforeClass
    public void setup() {
        // Configurar Chrome para descargas automáticas
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-notifications");
        options.addArguments("--disable-infobars");
        options.addArguments("--disable-save-password-bubble");
        options.addArguments("--disable-password-manager-reauthentication");

        driver = new ChromeDriver(options);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().window().maximize();

        // Crear archivo de prueba si no existe
        try {
            File testFile = new File(fileToUpload);
            if (!testFile.exists()) {
                testFile.getParentFile().mkdirs();
                Files.write(Paths.get(fileToUpload), "Archivo de prueba para upload".getBytes());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test(priority = 1)
    public void testFileUpload() {
        driver.get("https://the-internet.herokuapp.com/upload");

        WebElement uploadInput = driver.findElement(By.id("file-upload"));
        uploadInput.sendKeys(fileToUpload);
        driver.findElement(By.id("file-submit")).click();

        WebElement successMsg = driver.findElement(By.tagName("h3"));
        Assert.assertEquals(successMsg.getText(), "File Uploaded!", "❌ No se completó la subida correctamente.");
        System.out.println("✅ Archivo subido correctamente: " + fileToUpload);
    }

    @Test(priority = 2)
    public void testFileDownload() throws Exception {
        driver.get("https://the-internet.herokuapp.com/download");

        WebElement fileLink = driver.findElement(By.cssSelector(".example a"));
        String fileName = fileLink.getText();
        fileLink.click();

        // se realiza espera hasta completar la descarga
        Thread.sleep(4000);

        Path downloadedFilePath = Paths.get(downloadDir, fileName);
        Assert.assertTrue(Files.exists(downloadedFilePath), "❌ El archivo no fue descargado correctamente.");
        System.out.println("✅ Archivo descargado correctamente en: " + downloadedFilePath);
    }

    @AfterClass
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
