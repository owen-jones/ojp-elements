import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'ojp-accordion',
  styleUrl: 'ojp-accordion.scss',
  shadow: true,
})
export class OjpAccordion {

  @Element() el;

  @State() isOpen;
  buttonEl;
  contentEl;
  controlsId;

  toggle() {

    // update the internal state
    this.isOpen = !this.isOpen;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', this.isOpen);

    if (this.isOpen) {
      this.contentEl.removeAttribute('hidden');
    } else {
      this.contentEl.setAttribute('hidden', '');
    }
  }



  // @Listen('click', { capture: true })
  handleClick = () => {
    // whenever a click event occurs on
    // the component, update `isOpen`,
    // triggering the rerender
    this.toggle();
  }

  componentDidRender(){
    this.buttonEl = this.el.shadowRoot.querySelector('button[aria-expanded]');

    this.controlsId = this.buttonEl.getAttribute('aria-controls');

    this.contentEl = this.el.shadowRoot.getElementById(this.controlsId);

    this.isOpen = this.buttonEl.getAttribute('aria-expanded') === 'true';

  }

  render() {
    return (
      <Host>
        <h3>
          <button type="button"
                  aria-expanded="true"
                  class="ojp-accordion__trigger"
                  aria-controls="sect1"
                  id="accordion1id" 
                  onClick={this.handleClick}
                  >
            <span class="ojp-accordion__title">

              {/* Header Slot */}
              <slot name="header">Default Item Title</slot>

              <span class="ojp-accordion__icon"></span>
            </span>
          </button>
        </h3>
        
        <div 
            id="sect1"
            role="region"
            aria-labelledby="accordion1id"
            class="ojp-accordion__panel">
            
            {/* Content Slot */}
            <slot name="content">
              Default Item content
            </slot>
        </div>
      </Host>
    );
  }

}
