import { Component, h, Element, Prop, Host } from '@stencil/core';
// import { randomId } from '../../utils/utils';

@Component({
  tag: 'ojp-row',
  styleUrl: 'ojp-row.scss',
  shadow: true,
})

export class OjpRow {
  @Element() el;
  
  rootEl;

  // Number of total columns - can we remove this?
  @Prop({
    reflect: true,
    mutable: false
  }) cols = '12';

  // Align Items
  @Prop({
    reflect: true,
    mutable: false
  }) align = 'stretch';

  // Justify Items
  @Prop({
    reflect: true,
    mutable: false
  }) justify = 'stretch';


  // Center Cols Horizontally if their total 
  // is less than 12
  @Prop({
    reflect: true,
    mutable: false
  }) center = false;


  componentDidLoad() {
    this.el.style.setProperty('--ojp-row--cols', this.cols);
    this.el.style.setProperty('--ojp-row--align-items', this.align);
    this.el.style.setProperty('--ojp-row--justify-items', this.justify);
  }

  render() {

    return (
      <Host>
          <div class="gutter"></div>
          <slot></slot>
          <div class="gutter"></div>
      </Host>
    );
  }

  // render() {
  //   return (
  //     <div class="ojp-row" 
  //       ref={ el => this.rootEl = el }
  //       style={{gridTemplateColumns: `[start] minmax(var(--ojp-gutter), 1fr) [wrapper-start] repeat(${this.cols}, minmax(0, calc(var(--ojp-max-wrapper-width) / ${this.cols}))) [wrapper-end] minmax(var(--ojp-gutter), 1fr) [end]`}}>
  //         <div class="gutter"></div>
  //         <slot></slot>
  //         <div class="gutter"></div>
  //     </div>
  //   );
  // }

}
