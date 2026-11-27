const currentUser = {
  id: 1,
  username: 'johndoe',
  role: 'admin',
  getFullName() {
    return 'John Doe';
  }
};

// TypeScript will provide autocomplete for User properties
console.log(currentUser.role);