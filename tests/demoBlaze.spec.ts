import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/homePage';
import { AddTocartPage } from '../POM/addToCartPage';
import { CartPage } from '../POM/CartPage';

test.describe("Verify the order is placed successfully", () => {
  test.beforeEach(async ({ page }) => {
    let homePage = new HomePage(page);

    page.goto('');
    await homePage.dologin();

  });
  
test('Verify that user is able to buy the phone successfuly', async ({ page }) => {
  let homePage = new HomePage(page);
  let addToCartPage = new AddTocartPage(page);
  let cartPage = new CartPage(page);

  await homePage.selectFirstPhone();
  await addToCartPage.addItemsToCartPage();
  await cartPage.submitPurchasePhone();

  await expect(cartPage.thank_YouMessage).toBeVisible();
  await cartPage.ok_Confirm.click();
});
});