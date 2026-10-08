Keywords vs identifiers — side by side

Keyword	Identifier

Who creates it?	JavaScript (fixed)	You (your choice)

Can it be renamed?	No	Yes


Example	let, if, function	age, greet, totalPrice
Why this matters for Playwright
You write identifiers constantly in test code: locators like const loginButton = page.locator("#login"); — if you accidentally name one delete, new, or return, the test file fails before it even runs.
Picking clear, consistent names (submitButton, errorMessage) makes your tests readable and easier to debug when a selector breaks.
Understanding const (won't change) vs let (can change) helps you write stable, predictable test scripts.
