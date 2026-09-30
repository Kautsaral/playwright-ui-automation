export const loginData = [
  {
    username: "standard_user",
    password: "secret_sauce",
    expectedTitle: "Products",
  },
  {
    username: "problem_user",
    password: "secret_sauce",
    expectedTitle: "Products",
  },
  {
    username: "performance_glitch_user",
    password: "secret_sauce",
    expectedTitle: "Products",
  },
];

export const invalidLoginData = [
  {
    username: "standard_user",
    password: "wrong_password",
    expectedError:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "invalid_user",
    password: "secret_sauce",
    expectedError:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "",
    password: "",
    expectedError: "Epic sadface: Username is required",
  },
];
