import { Component, Host, h, Prop, getAssetPath, Element } from '@stencil/core';

@Component({
  tag: 'ojp-modal',
  styleUrl: 'ojp-modal.scss',
  shadow: true,
})

export class OjpModal {
// Props!

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;

  // // Close icon svg
  // @Prop() closeIcon = 'close.svg';


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
      console.log("wpw!");
      this.close();
    });
  }


  render() {
    return (
      <Host>
        <div class="ojp-modal-wrapper">
          <div class='ojp-modal-overlay' />
          <div class='ojp-modal-panel'>
            <div class='ojp-modal-close'>
              <button class='close-button'>
                <slot name='close-icon'>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>                </slot>
              </button>
            </div>
            <slot name='panel'></slot>
          </div>
        </div>
      </Host>
    );
  }

}
