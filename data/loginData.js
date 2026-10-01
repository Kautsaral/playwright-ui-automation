export const validLoginData = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expectedTitle: 'Products'
  }
];

export const invalidLoginData = [
  {
    username: 'standard_user',
    password: 'wrong_password',
    expectedError:
      'Username and password do not match any user in this service'
  },
  {
    username: '',
    password: '',
    expectedError: 'Username is required'
  }
];

// Backward compatibility for existing data-driven tests
export const loginData = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expectedTitle: 'Products'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
    expectedTitle: 'Products'
  },
  {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
    expectedTitle: 'Products'
  }
];