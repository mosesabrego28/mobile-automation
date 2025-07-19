describe('Android Settings -> Batteries Validation', () => {
  it('should open Settings and validate that clicking on Battery brings up battery settings', async () => {
    // We're already launching the settings app via capabilities

    // Navigate to battery settings
    const batteryOption = await $('android=new UiSelector().textContains("Battery")');
    await batteryOption.click();

    // Battery saver toggle is displayed
    const batterySavertoggle = await $('android=new UiSelector().textContains("Battery Saver")');
    const isDisplayed = await batterySavertoggle.isDisplayed();

    // Assertion
    expect(isDisplayed).toBe(true);
  });
});
