import { Locator, Page } from '@playwright/test';
import { testData } from '../TestData/testdata';

export class HomePage {
    readonly page: Page;
    readonly loginOption: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly login: Locator;
    readonly signUp: Locator;
    readonly phonesCategory: Locator;
    readonly firstPhone: Locator;

    constructor(page) {

        this.page = page;
        this.loginOption = page.locator('#login2');
        this.userName = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.login = page.locator('[onclick="logIn()"]');
        this.signUp = page.locator('#signin2');
        this.phonesCategory = page.locator("a#itemc");
        this.firstPhone = page.locator('h4.card-title a');
    }

    async dologin() {
        await this.loginOption.waitFor({ state: 'visible' });
        await this.loginOption.click();
        await this.userName.click();
        await this.userName.fill(testData.userName);
        await this.password.click();
        await this.password.fill(testData.password);
        await this.login.click();
        await this.signUp.waitFor({ state: 'hidden' });
      }
      
    async selectFirstPhone() {
        await this.phonesCategory.first().click();
        await this.firstPhone.first().waitFor({ state: 'visible' });
        await this.firstPhone.first().click();
        this.page.once('dialog', dialog => {
          dialog.dismiss().catch(() => { });
        });
    }
}
