import { Element, Component, Host, h, Method, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'ojp-accordion',
  styleUrl: 'ojp-accordion.scss',
  shadow: true,
})

export class OjpAccordion {

  @Element() el;

  // Allow multiple items to be open at once
  // If set to false, open one item will auto-close
  // all other items in the accordion
  // Default: false
  @Prop({
    reflect: true,
    mutable: false
  }) allowMultipleItemsOpen = false;

  // Expand/Collapse all accordion items
  @Method()
  async toggleAll() {
    this.allItemsOpen = !this.allItemsOpen;
    this.items.forEach(item => {
      (this.allItemsOpen) ?  item.openItem() : item.closeItem();
    });
  }

  // All ojp-accordion-items
  items = this.el.querySelectorAll('ojp-accordion-item');

  // used to keep track of toggle all open/closed
  allItemsOpen = true;

  @Listen('openEvent')
  openEventHandler(event) {
    // If allowMultipleItemsOpen prop is false, opening one
    // item should auto close all other items
    if (!this.allowMultipleItemsOpen){
      const indexOpened = event.detail.index;
      this.items.forEach((item,index) => {
        if (index !== indexOpened) {
          item.closeItem();
        }
      });
    }
  }

  componentDidLoad() {
    // If an anchor id is present in the url, jump to it and open it
    if (window.location.hash) {
      this.goToItemId(window.location.hash.substring(1));
    }
  }

  // Scroll to item with id and open it
  goToItemId = (id) => {
    this.items.forEach(item => {
      if (id == item.anchorId) {
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: item.offsetTop - 100
        });

        item.openItem();
      }
      // Close all other items
      else {
        item.closeItem();
      }
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
