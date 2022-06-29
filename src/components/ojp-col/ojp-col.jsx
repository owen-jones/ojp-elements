import { Element, Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ojp-col',
  styleUrl: 'ojp-col.scss',
  shadow: true,
})
export class OjpCol {

  @Element() el;

  @Prop({
    reflect: true,
    mutable: false
  }) start = 'auto';

  @Prop({
    reflect: true,
    mutable: false
  }) span = 'auto';


  componentDidLoad() {
    this.el.style.setProperty('--ojp-col--start', this.start);
    this.el.style.setProperty('--ojp-col--span', this.span);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
