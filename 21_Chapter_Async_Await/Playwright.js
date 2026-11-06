import {test,expect} from "@playwright/test";

test('user awaits for the api call to complete', async ({page}) => {
    await page.goto("https://example.com");
    //page.locator("button").click();
});