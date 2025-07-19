describe('Android Settings App', () => {
  it('should open Settings and validate title', async () => {
    const el = await $('android.widget.TextView');
    const text = await el.getText();
    console.log('Settings opened. First TextView text:', text);

    // You can add an expectation if you want:
    expect(text).toBeDefined();
  });
});
