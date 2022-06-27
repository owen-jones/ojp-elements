import { Component, Host, h, Element, Prop } from '@stencil/core';
// import { randomId } from '../../utils/utils';

@Component({
  tag: 'ojp-row',
  styleUrl: 'ojp-row.scss',
  shadow: true,
})
export class OjpRow {
  @Element() el: HTMLElement;

  // cols is optional, has no explicit type
  // annotation, but does have a default value
  // of '12'
  @Prop() cols? = '12';

  hostData(){
    return {
      class: this.cols ? `row--${this.cols}` : 'row--12'
    }
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

}
