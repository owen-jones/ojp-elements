import {Component, Host, h, Element, Prop, Event, Listen, Method, State} from '@stencil/core';

@Component({
  tag: 'ojp-navigation-item',
  styleUrl: 'ojp-navigation-item.scss',
  shadow: true,
})
export class OjpNavigationItem {


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
  // @State() myStateExample = false;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different from "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

  // /**
  //  * Property example description
  //  * Type: string
  //  * Required: true
  //  * Default: null
  //  */
  // @Prop({
  //   reflect: true,
  //   mutable: false,
  // }) myExamplePubProp = "";


  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Triggered when the component is visible in the viewport
   */
  @Event() elementIsVisible;

  /**
   * Triggered when the component has left the viewport
   */
  @Event() elementIsInvisible;


  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentDidLoad() {

    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
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

  // /** myExampleListener Description */
  // @Listen('onExampleEvent')
  // onStateChange(event) {
  //   // console.log('Received the custom ojp-navigation-item event: ', event);
  // }


  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */


  // /** myExamplePublicMethod Description  */
  // @Method()
  // async myExamplePublicMethod() {
  //   //
  // }


  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */

  // /** MyExampleLocalMethod Description */
  // myExampleLocalMethod = (id) => {
  //   console.log('myExampleLocalMethod', id);
  // }

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
