import {Component, Host, h, Element, Prop, Event, Listen, Method, State} from '@stencil/core';

/**
 * @slot logo - Slot for the navigation logo. It may be optionally a link/
 * @slot hamburger - Slot for the mobile navigation hamburger button, including icon. This button will open the mobile nav drawer, which houses the navigation links.
 * @slot mobile-link - Slot for link within the mobile drawer navigation.
 */

@Component({
  tag: 'ojp-navigation',
  styleUrl: 'ojp-navigation.scss',
  shadow: true,
})
export class OjpNavigation {


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
  @State() open = false; //mobile drawer is open

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different from "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

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
   * Triggered when the mobile menu drawer opens & closes (boolean)
   */
  @Event() ojpNavigationMobileDrawerOpen;


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

  @Listen('resize', {target: 'window'})
  onWindowResize() {
    console.log("calling onWindowResize");
    if(this.open == true) {
      console.log("Menu is open");
      this.toggleOpen();
      console.log("Close menu!")
    }
  }

  @Listen('keydown', {target: 'window'})
  handleKeydown(event) {
    if (this.open) {
      switch (event.key) {
        case 'Escape':
          this.toggleOpen();
          break;
      }
    }
  }


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

  handleClick = () => {
    this.toggleOpen();
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

  preventBodyScrolling() {
    if (this.open) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || 0) * -1);
    }
  }


  toggleOpen = () => {
    this.open = !this.open;
    this.preventBodyScrolling();
    this.ojpNavigationMobileDrawerOpen.emit(this.open);
  }



  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {
    return (
      <div className='ojp-navigation__main-navbar-wrapper'>
        <nav className="ojp-navigation__main-navbar" role="navigation" aria-label="Main Navigation">
          <slot name="logo"></slot>

          <div className={`ojp-navigation__menu-wrapper ${this.open ? 'ojp-navigation__menu-wrapper--open' : ''}`} id="ojp-navigation__menu-wrapper">
            <slot name="nav-items"></slot>
          </div>

          <button className="ojp-navigation__mobile-menu-toggle" aria-label="Mobile Navigation Toggle" aria-expanded={`${this.open}`} aria-controls="ojp-navigation__menu-wrapper" onClick={this.handleClick}>
            <slot name="hamburger">
              <svg className="ojp-navigation__mobile-menu-hamburger" width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11H23" stroke="#262626" stroke-width="2"></path>
                <path d="M0 19H23" stroke="#262626" stroke-width="2"></path>
              </svg>
            </slot>
          </button>
        </nav>
      </div>
    );
  }

}
