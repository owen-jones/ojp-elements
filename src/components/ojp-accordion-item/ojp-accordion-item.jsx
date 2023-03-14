import {Component, Host, h, Element, State, Prop, Watch, Method, Event, Listen} from '@stencil/core';

@Component({
  tag: 'ojp-accordion-item',
  styleUrl: 'ojp-accordion-item.scss',
  shadow: true,
})

export class OjpAccordionItem {
  /**
   * 1. Own Properties
   * Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  buttonEl;
  contentEl;

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;


  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  @State() calculatedMaxHeight; // Calculated max height of open panel
  @State() transitioning = false; // Is transtioning to open to closed


  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Optional User-defined anchor id
   * Used so item can be auto-opened with url param
   * Type: string
   */
  @Prop({
    reflect: true,
    mutable: false,
  }) anchorId;

  /**
   * Index of accordion item from top to bottom
   * Type: number
   */
  @Prop({
    mutable: true,
    reflect: true
  }) index = -1;

  /**
   * Accordion item is open or opening (css transition)
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: false
  }) open = false;

  @Watch('open')
  watchOpen() {
    this.transitioning = true;
    this.calculateMaxHeight();
  }


  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Triggered when the accordion item is opened
   */
  @Event() itemOpened;

  /**
   * Triggered when the accordion item is closed
   */
  @Event() itemClosed;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */

  componentDidLoad() {
    const items = this.el.parentElement.querySelectorAll('ojp-accordion-item');
    // Set this item's index
    for (let i = 0; i < items.length; i++) {
      const child = items[i];
      if (child == this.el) {
        this.index = i;
      }
    }

    this.calculateMaxHeight();

  }


  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen('resize', {target: 'window'})
  onWindowResize() {
    this.calculateMaxHeight();
  }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Toggle the accordion item
   */
  @Method()
  async toggleItem() {
    if (this.open) {
      this.closeItem();
    } else {
      this.openItem();
    }
  }



  @Method()
  async closeItem() {
    if (this.open) {
      this.open = false;
      this.itemClosed.emit({
        index: this.index,
      });
    }
  }

  /**
   * Open the accordion item
   */
  @Method()
  async openItem() {
    if (!this.open) {
      this.open = true;
      this.itemOpened.emit({
        index: this.index,
        isOpen: this.open
      });
    }
  }

  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */
  handleTransitionEnd() {
    this.transitioning = false;
  }

  calculateMaxHeight() {
    const panelHeight = this.contentEl.scrollHeight;
    this.calculatedMaxHeight = panelHeight + 'px';
  }

  handleClick = (e) => {
    // whenever a click event occurs on
    // the component, update `open`,
    // trigger the rerender
    e.preventDefault();
    this.toggleItem();
  }

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {

    return (
      <Host class={`
          ${this.open ? 'is-open' : 'is-closed'}
       `}>
        <a
          role="button"
          aria-expanded={this.open ? `true` : `false`}
          class={`
            ojp-accordion-item__header-wrapper
            ${this.open ? 'ojp-accordion-item__header-wrapper--open' : ''}
          `}
          aria-controls="section"
          id="section-control"
          onClick={this.handleClick}
          ref={(button) => {
            this.buttonEl = button
          }}
          href={this.anchorId ? '#' + this.anchorId : '#'}
        >
          <div class="ojp-accordion-item__header">

            {/* Header Slot */}
            <slot name="header">
              Default Item Title
            </slot>

            {/* Icon/Caret */}
            <slot name="icon">
              <div className="ojp-accordion-item__header__icon-wrapper">
                <svg class="ojp-accordion-item__header__icon" viewBox="0 0 31 17" preserveAspectRatio="xMidYMin slice"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 16L15.5 2L1 16" stroke="black" stroke-width="2"/>
                </svg>
              </div>
            </slot>
          </div>
        </a>

        <div
          id="section"
          role="region"
          aria-labelledby="section-control"
          aria-hidden={this.open ? `false` : `true`}
          class={`
            ojp-accordion-item__panel ${this.transitioning ? 'transitioning' : ''} ${this.open ? 'ojp-accordion-item__panel--open' : ''}
          `}
          ref={(el) => {
            this.contentEl = el
          }}
          onTransitionEnd={() => this.handleTransitionEnd()}
          style={this.open ? {
            maxHeight: this.calculatedMaxHeight,
            visibility: 'visible'
          } : {
            maxHeight: 0,
            visibility: 'hidden'
          }}
        >

          {/* Panel Slot */}
          <slot name="panel">
            Default Item content
          </slot>
        </div>
      </Host>
    );
  }

}
