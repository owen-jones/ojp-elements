import { Component, h, Element, Prop, Host } from '@stencil/core';
// import { randomId } from '../../utils/utils';

@Component({
  tag: 'ojp-row',
  styleUrl: 'ojp-row.scss',
  shadow: true,
})

export class OjpRow {

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
   * The number of columns that the row should be divided into.
   * Internally, this is used to set the `grid-template-columns` property.
   * Shorthand for desktop, tablet, and mobile cols.
   * <br><br>Default: `12`
   * <br><br>`<ojp-col cols="12">` is equivalent to
   * <br>`<ojp-col mcols="12" tcols="12" dcols="12">`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) cols = '12';

  /**
   * The number of columns that the row should be divided into on mobile.
   * Internally, this is used to set the `grid-template-columns` property.
   * <br><br>Default: value of {this.cols}
   */
  @Prop({
    reflect: true,
    mutable: false
  }) mcols;

  /**
   * The number of columns that the row should be divided into on tablet.
   * Internally, this is used to set the `grid-template-columns` property.
   * <br><br>Default: value of {this.cols}
   */
  @Prop({
    reflect: true,
    mutable: false
  }) tcols;

  /**
   * The number of columns that the row should be divided into on desktop.
   * Internally, this is used to set the `grid-template-columns` property.
   * <br><br>Default: value of {this.cols}
   */
  @Prop({
    reflect: true,
    mutable: false
  }) dcols;

  /**
   * align-items property of the grid.
   * <br><br>Default: `stretch`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) align = 'stretch';

  /**
   * justify-items property of the grid.
   * <br><br>Default: `stretch`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) justify = 'stretch';

  /**
   * Should the gutters (aka page padding) be removed?
   * Internally, setting this to true sets the `--ojp-row--gutter` css variable to `0`.
   * <br><br>Default: `false`
   */
  @Prop({
    reflect: true,
    mutable: false
  }) fullbleed = false;


  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */

  // Custom function to set all necessary css vars
  setCssProperties(){
    // If mobile cols are not set by user, default to same as 'cols'
    if (typeof(this.mcols) == 'undefined'){
      this.el.style.setProperty('--ojp-row--mcols', this.cols);
    }
    // Set mobile cols to user setting
    else {
      this.el.style.setProperty('--ojp-row--mcols', this.mcols);
    }
    // If tablet cols are not set by user, default to same as 'cols'
    if (typeof(this.tcols) == 'undefined'){
      this.el.style.setProperty('--ojp-row--tcols', this.cols);
    }
    // Set tablet cols to user setting
    else {
      this.el.style.setProperty('--ojp-row--tcols', this.tcols);
    }
    // If desktop cols are not set by user, default to same as 'cols'
    if (typeof(this.dcols) == 'undefined'){
      this.el.style.setProperty('--ojp-row--dcols', this.cols);
    }
    // Set desktop cols to user setting
    else {
      this.el.style.setProperty('--ojp-row--dcols', this.dcols);
    }

    // If fullbleed property is set, set gutters to zero
    if (this.fullbleed){
      this.el.style.setProperty('--ojp-row--gutter', 0);
    }

    // Set align and justify prorperties
    this.el.style.setProperty('--ojp-row--align-items', this.align);
    this.el.style.setProperty('--ojp-row--justify-items', this.justify);

  }


  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */

  render() {

    this.setCssProperties();

    return (
      <Host>
          <div class="ojp-row__container">
          <slot></slot>
          </div>
      </Host>
    )

  }

}
