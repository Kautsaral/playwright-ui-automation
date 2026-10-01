# Playwright UI Automation

End-to-end UI automation testing project using Playwright and JavaScript.

This project covers UI automation scenarios for SauceDemo, including authentication, product management, cart, and checkout flows.

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Git & GitHub
* GitHub Actions
* HTML Report

## Test Coverage

### Authentication

* Valid login
* Invalid password
* Empty credentials
* Data-driven login testing

### Product

* Verify product list
* Add product to cart
* Add multiple products
* Data-driven product testing

### Cart

* Open cart
* Verify product in cart
* Verify multiple products
* Remove product from cart

### Checkout

* Checkout single product
* Checkout multiple products
* Verify order completion

## Automation Framework

The project uses Page Object Model (POM) to separate test scenarios from page interactions.

```text
Tests
   ↓
Page Objects
   ↓
SauceDemo Application
```

## Project Structure

```text
playwright-ui-automation/
│
├── data/
│   ├── loginData.js
│   └── productData.js
│
├── fixtures/
│   └── test.js
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── assertion.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   ├── data-driven.spec.js
│   ├── dropdown.spec.js
│   ├── fixture.spec.js
│   ├── hooks.spec.js
│   ├── locator.spec.js
│   ├── login.spec.js
│   ├── multiple-elements.spec.js
│   ├── product.spec.js
│   ├── product-data-driven.spec.js
│   ├── product-pom.spec.js
│   ├── radio.spec.js
│   ├── screenshot.spec.js
│   └── wait.spec.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
└── README.md
```

## Playwright Features Used

* Locators and selectors
* UI actions
* Assertions
* Dropdown handling
* Radio buttons
* Checkboxes
* Auto-waiting
* Explicit synchronization
* Multiple element handling
* Page Object Model
* Test hooks
* Custom fixtures
* Data-driven testing
* Screenshot on failure
* Video recording
* HTML reporting
* GitHub Actions CI

## Reporting

Playwright HTML Reporter is configured for test execution.

Generate and open the report with:

```bash
npx playwright show-report
```

Screenshots and videos are generated for failed tests based on the Playwright configuration.

## CI/CD

GitHub Actions is configured to automatically run Playwright tests on:

* Push to `main`
* Pull requests targeting `main`

The CI pipeline performs:

1. Checkout repository
2. Install Node.js
3. Install dependencies
4. Install Playwright browsers
5. Run Playwright tests
6. Upload Playwright HTML report as an artifact

## Test Result

Current Mini Project regression result:

```text
50 tests
50 passed
0 failed
```

## Run Tests Locally

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

Open the HTML report:

```bash
npx playwright show-report
```

## Purpose

This project was created as a QA Automation portfolio project to demonstrate practical experience in:

* UI automation
* Test design
* Test data management
* Page Object Model
* Test isolation
* Regression testing
* CI automation
* Test reporting
* Failure investigation
