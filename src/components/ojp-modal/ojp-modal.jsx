import { Component, Host, h, Prop, getAssetPath, Element } from '@stencil/core';

@Component({
  tag: 'ojp-modal',
  styleUrl: 'ojp-modal.scss',
  shadow: true,
})

export class OjpModal {
  // Props!

  /**
   * Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;

  /**
   * Modal is open or opening (css transition)
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: false,
  }) open = false;


  /**
   * Open, close modal
   */
  @Method()
  async openModal() {
    this.open = true;
    this.el.shadowRoot.dispatchEvent(new CustomEvent('open'));
  }

  @Method()
  async closeModal() {
    this.open = false;
    this.el.shadowRoot.dispatchEvent(new CustomEvent('close'));
  }

  componentDidLoad() {
    this.openButton = document.querySelector('.open-modal');
    this.openButton.addEventListener('click', () => {
      this.openModal();
    });

    this.closeButton = this.el.shadowRoot.querySelector('.close-button');
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });
  }

  render() {
    return (
      <Host>
        <div class={this.open ? "ojp-modal-wrapper is-open" : "ojp-modal-wrapper"}>
          <div class='ojp-modal-overlay' />
          <div class='ojp-modal-panel'
          aria-modal="true">
            <div class='ojp-modal-close'>
              <button class='close-button'>
                <slot name='close-icon'>
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>                </slot>
              </button>
            </div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}