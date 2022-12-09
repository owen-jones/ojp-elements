import { newSpecPage } from '@stencil/core/testing';
import { OjpModal } from '../ojp-modal';

describe('ojp-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OjpModal],
      html: `<ojp-modal></ojp-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <ojp-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ojp-modal>
    `);
  });
});
