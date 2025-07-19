describe('Android Sample Test', () => {
  it('should open the app and check the title', async () => {
    const appElement = await $('~Accessibility'); // using content-desc
    await expect(appElement).toBeDisplayed();
  });
});
