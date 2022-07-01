import { Element, Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ojp-col',
  styleUrl: 'ojp-col.scss',
  shadow: true,
})
export class OjpCol {

  @Element() el;

  // Where the column should start
  // Shorthand for desktop, tablet, and mobile start
  // <ojp-col start="12"> is equivalent to
  // <ojp-col mstart="12" tstart="12" dstart="12">
  // Default: auto
  @Prop({
    reflect: true,
    mutable: false
  }) start = 'auto';

  // Mobile Start
  // Default: Same as {this.start}
  // Can be overwritten by user with <ojp-col mstart="x">
  @Prop({
    reflect: true,
    mutable: false
  }) mstart;

  // Tablet Start
  // Default: Same as {this.start}
  // Can be overwritten by user with <ojp-col tstart="x">
  @Prop({
    reflect: true,
    mutable: false
  }) tstart;

  // Desktop Start
  // Default: Same as {this.start}
  // Can be overwritten by user with <ojp-col dstart="x">
  @Prop({
    reflect: true,
    mutable: false
  }) dstart;

  // How many columns the column should span
  // Shorthand for desktop, tablet, and mobile span
  // <ojp-col span="12"> is equivalent to
  // <ojp-col mspan="12" tspan="12" dspan="12">
  // Default: auto
  @Prop({
    reflect: true,
    mutable: false
  }) span = 'auto';

  // Mobile Span
  // Default: Same as {this.span}
  // Can be overwritten by user with <ojp-col mspan="x">
  @Prop({
    reflect: true,
    mutable: false
  }) mspan;

  // Tablet Span
  // Default: Same as {this.span}
  // Can be overwritten by user with <ojp-col tspan="x">
  @Prop({
    reflect: true,
    mutable: false
  }) tspan;

  // Desktop Span
  // Default: Same as {this.span}
  // Can be overwritten by user with <ojp-col dspan="x">
  @Prop({
    reflect: true,
    mutable: false
  }) dspan;

  componentWillLoad() {
    // If mobile span is not set by user, default to same as 'span'
    if (typeof(this.mspan) == 'undefined'){
      this.el.style.setProperty('--ojp-col--mspan', this.span);
    }
    // Set mobile span to user setting
    else {
      this.el.style.setProperty('--ojp-col--mspan', this.mspan);
    }
    // If tablet span is not set by user, default to same as 'span'
    if (typeof(this.tspan) == 'undefined'){
      this.el.style.setProperty('--ojp-col--tspan', this.span);
    }
    // Set tablet span to user setting
    else {
      this.el.style.setProperty('--ojp-col--tspan', this.tspan);
    }
    // If desktop span is not set by user, default to same as 'span'
    if (typeof(this.dspan) == 'undefined'){
      this.el.style.setProperty('--ojp-col--dspan', this.span);
    }
    // Set desktop span to user setting
    else {
      this.el.style.setProperty('--ojp-col--dspan', this.dspan);
    }
    
    // If mobile start is not set by user, default to same as 'start'
    if (typeof(this.mstart) == 'undefined'){
      this.el.style.setProperty('--ojp-col--mstart', this.start);
    }
    // Set mobile start to user setting
    else {
      this.el.style.setProperty('--ojp-col--mstart', this.mstart);
    }
    // If tablet start is not set by user, default to same as 'start'
    if (typeof(this.tstart) == 'undefined'){
      this.el.style.setProperty('--ojp-col--tstart', this.start);
    }
    // Set tablet start to user setting
    else {
      this.el.style.setProperty('--ojp-col--tstart', this.tstart);
    }
    // If desktop start is not set by user, default to same as 'start'
    if (typeof(this.dstart) == 'undefined'){
      this.el.style.setProperty('--ojp-col--dstart', this.start);
    }
    // Set desktop start to user setting
    else {
      this.el.style.setProperty('--ojp-col--dstart', this.dstart);
    }
  }

  render() {    
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
