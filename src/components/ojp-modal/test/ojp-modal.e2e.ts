import { newE2EPage } from '@stencil/core/testing';

describe('ojp-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ojp-modal></ojp-modal>');

    const element = await page.find('ojp-modal');
    expect(element).toHaveClass('hydrated');
  });
});
