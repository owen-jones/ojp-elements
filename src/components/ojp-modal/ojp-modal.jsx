import { Component, Host, h, Prop, getAssetPath, Element } from '@stencil/core';

@Component({
  tag: 'ojp-modal',
  styleUrl: 'ojp-modal.scss',
  shadow: true,
  assetsDirs: ['assets'],
})

export class OjpModal {
// Props!

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;

  // Close icon svg
  @Prop() closeIcon = 'close.svg';


  /**
   * Modal is open or opening (css transition)
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: false,
  }) open = false;

  close() {
    //do the closing here
    this.el.shadowRoot.dispatchEvent(new CustomEvent('close'));
  }


  componentDidLoad() {
    this.closeButton = this.el.shadowRoot.querySelector('.close-button');

    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }


  render() {
    return (
      <Host>
        <div class='ojp-modal-wrapper'>
          <div class='ojp-modal-overlay' />
          <div class='ojp-modal-panel'>
            <div class='ojp-modal-close'>
              <button class='close-button'>
                <slot name='close-icon'>
                  <img src={getAssetPath('./assets/${this.closeIcon}')} alt='Close Icon' />
                </slot>
              </button>
            </div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }

}
