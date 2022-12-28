import { Component, Host, h, Prop, Element, Method } from '@stencil/core';

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


  @Prop({
    reflect: true,
    mutable: false,
  }) closeButtonInside = false;


  /**
   * Open, close modal
   */
  @Method()
  async openModal() {
    this.open = true;
    this.el.dispatchEvent(new CustomEvent('open'));
    this.closeButton.focus();
    this.el.setAttribute('aria-hidden', false);
    this.keystrokeListener = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          this.closeModal();
          break;
        case 'Tab':
          if (!(this.el && this.contentSlot)) {
            console.error('Please make sure content slot is defined using the slot="content" attribute');
            break;
          }
          if (this.el.contains(e.target) && this.contentSlot.contains(e.target)) {
            e.preventDefault();
            this.closeButton.focus();
          }
          break;
        default:
      }

      // do nothing

    }

    document.addEventListener('keydown', this.keystrokeListener);
  }

  @Method()
  async closeModal() {
    this.open = false;
    this.el.dispatchEvent(new CustomEvent('close'));
    this.el.focus();
    this.el.setAttribute('aria-hidden', true);
    document.removeEventListener('keydown', this.keystrokeListener);
  }

  componentDidLoad() {
    this.contentSlot = this.el.querySelector("[ slot = 'content' ]");

    this.closeButton = this.el.shadowRoot.querySelector('.close-button');
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    this.overlayArea = this.el.shadowRoot.querySelector('.ojp-modal-overlay');
    this.overlayArea.addEventListener('click', () => {
      this.closeModal();
    })
  }

  componentDidRender() {
    if (this.open) {
      console.log(this.open);
      this.closeButton.focus();
    }

    if (this.closeButtonInside) {
      console.log('true' + this.closeButtonInside);
      this.el.style.setProperty('--ojp-modal--close-grid-area', '3/2/4/3');
    }

    else {
      this.el.style.setProperty('--ojp-modal--close-grid-area', '1/4/2/3');
      console.log('false' + this.closeButtonInside);
    }
  }



  render() {

    return (
      <Host>
        <div class={this.open ? "ojp-modal-wrapper is-open" : "ojp-modal-wrapper"}>
          <div class='ojp-modal-overlay' />
          <div class='ojp-modal-close'>
            <button class='close-button' tabindex='0'>
              <slot name='close-icon'>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
              </slot>
            </button>
          </div>
          <div class='ojp-modal-panel'
            id="alert-modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="dialog_label"
            aria-describedby="dialog_desc"
            tabindex="-1"
          >
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}