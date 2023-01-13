import {Component, Host, h, Element, Prop, Event} from '@stencil/core';

@Component({
  tag: 'ojp-image',
  styleUrl: 'ojp-image.scss',
  shadow: true,
})
export class OjpImage {
  /**
   * 1. Own Properties
   * Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
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
   * Image src
   * Type: string
   *
   */
  @Prop({
    reflect: true,
    mutable: false
  }) src = "";


  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Triggered when the accordion is visible/invisible in the viewport
   */
  @Event() elementIsVisibleEvent;
  @Event() elementIsInvisibleEvent;


  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentDidLoad() {

    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this.observer = new IntersectionObserver(this.handleIntersection);
      this.observer.observe(this.el);
    }
  }

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if it makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */


  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */


  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */


  // https://medium.com/stencil-tricks/create-a-web-component-to-lazy-load-images-using-intersection-observer-9ced1282c6df
  handleIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.elementIsVisibleEvent.emit(entry);
      }
      else {
        this.elementIsInvisibleEvent.emit(entry);
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
        <img src={this.src} />
      </Host>
    );
  }

}
