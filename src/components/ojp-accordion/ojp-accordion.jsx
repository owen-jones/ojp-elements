import { Element, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ojp-accordion',
  styleUrl: 'ojp-accordion.scss',
  shadow: true,
})
export class OjpAccordion {

  @Element() el;

  items;

  componentDidLoad() {
    this.items = this.el.querySelectorAll('ojp-accordion-item');
  }

  handleClick(){

  // TODO iterate through all ojp-accordion-item children and 
  // call their toggle function

  }

  render() {
    return (
      <Host>
        <button class="ojp-accordion__toggle-all" onClick={this.handleClick}>Collapse/Expand All</button>
        <slot></slot>
      </Host>
    );
  }

}
