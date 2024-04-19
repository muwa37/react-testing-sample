const Page = require('./page');

class UsersPage extends Page {
  get loadingTitle() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItems() {
    return browser.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error('users not loaded');
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length;

      if (!usersCount) {
        throw new Error('users not found');
      }

      await this.usersItems[0].$('#user-delete').click();

      const usersCountAfterDelete = await this.usersItems.length;

      if (usersCount - usersCountAfterDelete !== 1) {
        throw new Error('no deleting or deleted more then one');
      }
    } catch (error) {
      throw new Error('user not deleted' + error.message);
    }
  }

  open() {
    return super.open('./users-test');
  }
}

module.exports = new UsersPage();
