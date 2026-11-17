function placeOrder(item, callback) {
    console.log("Placing an order");
    console.log("Order Placed for- ", item);
    callback();
}
function print(){
    console.log("Order is being processed");
}
placeOrder("Pizza", print);


        //second example
function placeOrder(item, callback) {
    console.log("Placing an order");
}

//thrid example arrow function
// Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

test('has title', async ({ page }) => {

});


// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });