import { Element, Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'ojp-col',
  styleUrl: 'ojp-col.scss',
  shadow: true,
})
export class OjpCol {

  /**
   * 1. Own Properties
   * Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
   // N/A

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
    // N/A


  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different from "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

  /**
   * The column's start position on all devices. Shorthand for desktop, tablet, and mobile start. (Internally uses `grid-column-start: <start>;`).
   * <br><br>Defaults to `auto`.
   * <br><br>`<ojp-col start="2">` is equivalent to
   * <br>`<ojp-col mstart="2" tstart="2" dstart="2">`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) start = 'auto';

  /**
   * The column's start position on mobile devices. (Internally uses `grid-column-start: <mstart>;`).
   * <br><br>Defaults to `auto` or `start` property if one is defined.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) mstart;

  /**
   * The column's start position on tablet devices. (Internally uses `grid-column-start: <tstart>;`).
   * <br><br>Defaults to `auto` or `start` property if one is defined.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) tstart;

  /**
   * The column's start position on desktop devices. (Internally uses `grid-column-start: <dstart>;`).
   * <br><br>Defaults to `auto` or `start` property if one is defined.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) dstart;


  /**
   * How many grid columns this element will span. (Internally uses `grid-column-span: span <span>;`).
   * <br><br>Defaults to `auto`.
   * <br><br>`<ojp-col span="12">` is equivalent to
   * <br>`<ojp-col mspan="12" tspan="12" dspan="12">`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) span = 'auto';

  /**
   * How many grid columns this element will span on mobile devices. (Internally uses `grid-column-span: span <span>;`).
   * <br><br>Defaults to `auto`.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) mspan;


  /**
   * How many grid columns this element will span on tablet devices. (Internally uses `grid-column-span: span <span>;`).
   * <br><br>Defaults to `auto`.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) tspan;


  /**
   * How many grid columns this element will span on desktop devices. (Internally uses `grid-column-span: span <span>;`).
   * <br><br>Defaults to `auto`.
   */
  @Prop({
    reflect: true,
    mutable: false
  }) dspan;

  // Custom function to set all necessary css vars
  setCssProperties(){
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
    this.setCssProperties();

    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
