import { Component, Host, h, Element, State, Prop, Watch, Method, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'ojp-accordion-item',
  styleUrl: 'ojp-accordion-item.scss',
  shadow: true,
})

export class OjpAccordionItem {

  @Element() el;

  // Is transtioning to open to closed
  @State() transitioning = false;
  
  @State() calculatedHeight;
  buttonEl;
  contentEl;

  /**
   * index of accordion item from top to bottom
   */
    @Prop({
      mutable:true, 
      reflect:true
    }) index = -1;

  /**
  * accordion item is open or opening (css transition)
  */
  // Default: false
  @Prop({
    reflect: true,
    mutable: false
  }) open = false;

  // Optional User-defined anchor id
  // Used so item can be auto-opened with url param
  // Type: string
  // Default: not set
  @Prop({
    reflect: true,
    mutable: false
  }) anchorId;

  /**
   * toggle the accordion item
   */
  @Method()
  async toggleItem() {
    if (this.open) {
      this.closeItem();
    } else {
      this.openItem();
    } 
  }

  /**
   * close the accordion item
   */
  @Method()
  async closeItem() {
    this.open = false;
  }

  /**
   * open the accordion item
   */
  @Method()
  async openItem() {
    this.open = true;
    this.openEvent.emit({
      index: this.index
    });
  }

  @Watch('open')
  stateChanged() {
    this.transitioning = true;
    this.calculateHeight();
  }

  @Watch('calculatedHeight')
  watchHeightHandler(newVal, oldVal){
    console.log('calculated height changed', oldVal, newVal);
  }

  /**
   * triggered when the accordion item is opened
   */
  @Event() openEvent;


  @Listen('resize', {target: 'window'})
  handleResize(ev) {
    // console.log('window resized', ev);
    this.calculateHeight();
  }

  componentDidLoad() {
    const items = this.el.parentElement.querySelectorAll('ojp-accordion-item');
    // Set this item's index
    for (let i = 0; i < items.length; i++) {
      const child = items[i];
      if (child == this.el) {
        this.index = i;
      }
    } 

    this.calculateHeight();

  }

  handleTransitionEnd() {
    this.transitioning = false;
  }

  calculateHeight() {
    const panelHeight = this.contentEl.scrollHeight;
    this.calculatedHeight = panelHeight + 'px';
    console.log('calculate height', this.calculatedHeight);
  }

  handleClick = (e) => {
    // whenever a click event occurs on
    // the component, update `open`,
    // triggering the rerender
    e.preventDefault();
    this.toggleItem();
  }

  render() {

    return (
      <Host>
        <a
          role= "header"
          // aria-expanded = {this.open}
          class = {"ojp-accordion-item__trigger"}
          aria-controls = "section"
          id = "section-control" 
          onClick = {this.handleClick}
          ref = {(button) => { this.buttonEl = button }}
          href = {this.anchorId ? '#' + this.anchorId : '#'}
          >   
            <div class="ojp-accordion-item__header">

              {/* Header Slot */}
              <slot name="header">
                Default Item Title
              </slot>

              {/* Icon/Caret */}
              <div className="ojp-accordion-item__header__icon-wrapper">
                <svg class="ojp-accordion-item__header__icon" width="31" height="17" viewBox="0 0 31 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 16L15.5 2L1 16" stroke="black" stroke-width="2"/>
                </svg>
              </div>
            </div>
        </a>
        
        <div 
            id="section"
            role="region"
            aria-labelledby="section-control"
            class={`ojp-accordion-item__panel ${this.transitioning ? 'transitioning': ''} ${this.open ? 'ojp-accordion-item__panel--open' : ''}`}
            // hidden={!this.open}
            ref={(el) => { this.contentEl = el }}
            onTransitionEnd={() => this.handleTransitionEnd()}
            style={ this.open ? {height: this.calculatedHeight} : {height: 0}}
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
