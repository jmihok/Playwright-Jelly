class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = page.getByLabel('User:');
      this.passwordField = page.getByLabel('Password:');
    //   this.loginButton = page.locator('submit');
    }
  
    async login(username, password) {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.page.getByText('Sign In', { exact: true }).click();
    //   await this.page.getByRole('button', { type: 'submit' }).click();
    }
  }
  
  export default LoginPage;
  