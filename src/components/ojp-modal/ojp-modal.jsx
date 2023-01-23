import { Component, Host, h, Prop, Element, Method, State, Listen } from '@stencil/core';

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
   * Modal's close button is inside or outside the modal panel
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: false,
  }) closebuttonoutside = false;

  @State() isOverflowing = false;

  getAllFocusableElements(parent) {
    if (!parent) {
      console.warn('You need to pass a parent HTMLElement');
      return []; // Return array so length queries will work
    }

    return parent.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
    );
  };

  findLastElement(node) {
    if(!node.children || node.children.length === 0) {
      return node instanceof HTMLElement ? node : node[0];
    }

    return this.findLastElement(node.children[node.children.length - 1]);
  }

  /**
   * Methods to open, close modal
   */
  @Method()
  async openModal() {
    //reveal the modal element
    this.dialogElement.addEventListener('transitionend', (e) => {
      const firstElement = e.target.querySelector('.close-button');
      if(firstElement) {
        firstElement.focus();
      }
    });
    this.dialogElement.showModal();

    // When this invisible button gains focus, you know
    // you reached the end of the content area. Return
    // focus to the top fo the modal
    this.focusTrapListener = () => {
      this.closeButton.focus();
    }
    this.focusTrap.addEventListener('focusin', this.focusTrapListener);

    this.open = true;
    this.el.dispatchEvent(new CustomEvent('open'));
    this.el.setAttribute('aria-hidden', false);

    this.keystrokeListener = (e) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          this.closeModal();
          break;
        case 'Tab':
          if(e.shiftKey && this.el.shadowRoot.activeElement && this.el.shadowRoot.activeElement.isEqualNode(this.closeButton)) {
            const focusableElements = this.getAllFocusableElements(this.modalContent);
            if(focusableElements.length > 0) {
              const lastElement = focusableElements[focusableElements.length - 1];
              lastElement.focus();
            }
          }
          break;
      }
    }
    this.el.addEventListener('keydown', this.keystrokeListener);

    this.toggleBodyScrolling(true);
  }

  /**
   * This fixes the position of the body (background)
   * to prevent it from being moved when the user
   * touches and scrolls the overlay
   */
  toggleBodyScrolling(isVisible) {
    if(isVisible) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }

  @Method()
  async closeModal() {
    this.open = false;
    this.el.dispatchEvent(new CustomEvent('close'));
    this.el.setAttribute('aria-hidden', true);
    this.el.removeEventListener('keydown', this.keystrokeListener);
    this.focusTrap.removeEventListener('focusin', this.focusTrapListener);
    this.dialogElement.close();
    this.toggleBodyScrolling(false);
  }

  @Listen('resize', {target: 'window'})
  handleWindowResize() {
    this.updateOverflowState();
  }

  updateOverflowState() {
    if(!this.contentSlot || !this.panelArea) {
      this.isOverflowing = false;
      return;
    }

    let slotContentHeight = 0;
    const slotContentTolerance = 30;
    this.contentSlot.assignedElements().forEach(element => {
      slotContentHeight += element.getBoundingClientRect().height;
    });

    this.isOverflowing = (slotContentHeight + slotContentTolerance > this.slotContainer.getBoundingClientRect().height);
  }

  componentDidLoad() {
    this.contentSlot = this.el.shadowRoot.querySelector("slot[name='content']");
    this.modalContent = this.el.querySelector("[slot='content']");
    this.slotContainer = this.el.shadowRoot.querySelector('.slot-container');
    this.panelArea = this.el.shadowRoot.querySelector(".ojp-modal-panel");
    this.dialogElement = this.el.shadowRoot.querySelector('#dialog-element');
    this.closeButtonArea = this.el.shadowRoot.querySelector(".ojp-modal-close");
    this.focusTrap = this.el.shadowRoot.querySelector('#focus-trap');

    this.closeButton = this.el.shadowRoot.querySelector('.close-button');
    this.closeButton.addEventListener('click', () => {
      this.closeModal();
    });

    this.overlayArea = this.el.shadowRoot.querySelector('.ojp-modal-overlay');
    this.overlayArea.addEventListener('click', () => {
      this.closeModal();
    });

    if (this.closebuttonoutside) {
      this.closeButtonArea.classList.add("close-button--outside");
    } else {
      this.closeButtonArea.classList.add("close-button--inside");
    }

    this.updateOverflowState();
  }

  render() {
    return (
      <dialog id="dialog-element"
               role="dialog"
              tabindex="-1"
            aria-modal="true"
            aria-label="Modal dialog window"
            aria-details="modal-content"
            aria-hidden={!this.open}>

          <div class={this.open ? "ojp-modal-wrapper is-open" : "ojp-modal-wrapper"}>
            <div class='ojp-modal-overlay' />
            <div class='ojp-modal-close'>
              <button class='close-button' title="Close the modal window">
                <slot name='close-icon'>
                  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
                </slot>
              </button>
            </div>
            <div class='ojp-modal-panel'>
              <div class={'slot-container'}>
                <slot name="content" id="modal-content"></slot>
                <button id="focus-trap" class="focus-trap"/>
              </div>
              <div class={`ojp-modal-overflow--top ${this.isOverflowing ? 'overflow-gradient--visible' : ''}`}></div>
              <div class={`ojp-modal-overflow--bottom ${this.isOverflowing ? 'overflow-gradient--visible' : ''}`}></div>
            </div>
          </div>
      </dialog>
    );
  }
}
