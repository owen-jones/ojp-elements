import { Element, Component, Host, h, Method, Listen, Prop, Event } from '@stencil/core';

@Component({
  tag: 'ojp-accordion',
  styleUrl: 'ojp-accordion.scss',
  shadow: true,
})

export class OjpAccordion {
    /**
   * 1. Own Properties
   * Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */

  // All ojp-accordion-items
  items = this.el.querySelectorAll('ojp-accordion-item');

  // Used to keep track of toggle all open/closed
  allItemsOpen = true;

  // Used for Intersection Observer
  observer;

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;

    /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  // N/A

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

  /**
    * Allow multiple items to be open at once
    * If set to false, opening one item will auto-close
    * all other items in the accordion
    * Type: boolean
    *
    */
  @Prop({
    reflect: true,
    mutable: false
  }) allowMultipleItemsOpen = false;


  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Triggered when the accordion is visible/invisible in the viewport
   */
  @Event() elementIsVisible;
  @Event() elementIsInvisible;


  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentDidLoad() {
    // If an anchor id is present in the url, jump to it and open it
    if (window.location.hash) {
      this.goToItemId(window.location.hash.substring(1));
    }

    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
      this.observer.observe(this.el);
    }
  }

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen('itemOpened')
  onStateChange(event) {
    // If allowMultipleItemsOpen prop is false, opening one
    // item should auto close all other items
    if (!this.allowMultipleItemsOpen &&
        event.detail.isOpen == true){
      const indexOpened = event.detail.index;
      this.items.forEach((item,index) => {
        if (index !== indexOpened) {
          item.closeItem();
        }
      });
    }
  }


  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */


  /** Expand/Collapse all accordion items  */
  @Method()
  async toggleAll() {
    this.allItemsOpen = !this.allItemsOpen;
    this.items.forEach(item => {
      (this.allItemsOpen) ?  item.openItem() : item.closeItem();
    });
  }


  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */

  /** Scroll to item with id and open it */
  goToItemId = (id) => {
    this.items.forEach(item => {
      if (id == item.anchorId){
        // Scroll to item
        window.scroll({
          behavior: 'smooth',
          left: 0,
          top: item.offsetTop
        });

        // Open it
        !item.open ? item.openItem() : '';
      }
    });
  }

  handleIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.elementIsVisible.emit(entry);
      }
      else {
        this.elementIsInvisible.emit(entry);
      }
    }
  };

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
