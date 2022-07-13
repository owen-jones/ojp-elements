import { Component, Host, h, Element, State, Prop, Watch, Method } from '@stencil/core';

@Component({
  tag: 'ojp-accordion-item',
  styleUrl: 'ojp-accordion-item.scss',
  shadow: true,
})

export class OjpAccordionItem {

  @Element() el;

  buttonEl;
  contentEl;
  controlsId;

  // Accordion item open state
  // Type: Boolean
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

  @Method()
  async toggle() {
    // update the internal state
    this.open = !this.open;
  }

  // @Watch('open')
  // watchOpenHandler() {
  //   console.log('open', this.open);
  // }

  // @Listen('click', { capture: true })
  handleClick = () => {
    // whenever a click event occurs on
    // the component, update `open`,
    // triggering the rerender
    this.toggle();
  }

  componentDidRender(){
    // this.buttonEl = this.el.shadowRoot.querySelector('button[aria-controls]');

    // this.controlsId = this.buttonEl.getAttribute('aria-controls');

    // this.contentEl = this.el.shadowRoot.getElementById(this.controlsId);
  }

  render() {

    return (
      <Host>
        <a role="header" id={this.anchorId} href={`#{this.anchorId}`}>
          <button type="button"
                  aria-expanded={this.open}
                  class="ojp-accordion-item__trigger"
                  aria-controls="section"
                  id="section-control" 
                  onClick={this.handleClick}
                  ref={(button) => { this.buttonEl = button }}
                  >   
            <div class="ojp-accordion-item__header">

              {/* Header Slot */}
              <slot name="header">
                Default Item Title
              </slot>

              {/* Icon/Caret */}
              <span class="ojp-accordion-item__header__icon"></span>
            </div>
          </button>
        </a>
        
        <div 
            id="section"
            role="region"
            aria-labelledby="section-control"
            class="ojp-accordion-item__panel"
            hidden={!this.open}
            ref={(el) => { this.contentEl = el }}
            >
            
            {/* Content Slot */}
            <slot name="panel">
              Default Item content
            </slot>
        </div>
      </Host>
    );
  }

}
