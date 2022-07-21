import { Component, h, Element, Prop, Host } from '@stencil/core';
// import { randomId } from '../../utils/utils';

@Component({
  tag: 'ojp-row',
  styleUrl: 'ojp-row.scss',
  shadow: true,
})

export class OjpRow {
  @Element() el;
  
  // Grid will be divided up into {this.cols} columns 
  // Shorthand for desktop, tablet, and mobile cols
  // <ojp-col cols="12"> is equivalent to
  // <ojp-col mcols="12" tcols="12" dcols="12">
  // Default: 12
  @Prop({
    reflect: true,
    mutable: false
  }) cols = '12';

  // Mobile Cols
  // Default: Same as {this.cols}
  // Can be overwritten by user with <ojp-row mcols="x">
  @Prop({
    reflect: true,
    mutable: false
  }) mcols;

  // Tablet Cols
  // Default: Same as {this.cols}
  // Can be overwritten by user with <ojp-row tcols="x">
  @Prop({
    reflect: true,
    mutable: false
  }) tcols;

  // Desktop Cols
  // Default: Same as {this.cols}
  // Can be overwritten by user with <ojp-row dcols="x">
  @Prop({
    reflect: true,
    mutable: false
  }) dcols;

  // Align Items
  // Default: stretch
  @Prop({
    reflect: true,
    mutable: false
  }) align = 'stretch';

  // Justify Items
  // Default: stretch
  @Prop({
    reflect: true,
    mutable: false
  }) justify = 'stretch';

  // Should the page padding (aka gutters) be removed?
  // Default: false
  @Prop({
    reflect: true,
    mutable: false
  }) fullbleed = false;

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

    // Set column gap properties

    switch (this.cols) {
      case '1':
        this.el.style.setProperty('--ojp-row--col-gap', 0); // 1 -> 0
        break;
      case '2':
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-xl-2xl')); // 1 -> XL-2XL
        break;
      case '3':
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-l-xl')); // 3 -> L-XL
        break;
      case '4':
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-m-l')); // 4 -> M-L
        break;
      case '5':
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-s-m')); // 5 -> S-M
        break;
      case '6':
        console.log('6');
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-xs-s')); // 6 -> XS-S
        break;
      default:
        this.el.style.setProperty('--ojp-row--col-gap', getComputedStyle(this.el).getPropertyValue('--space-2xs-xs')); // > 6 -> 2XS-XS
        break;
    }
    console.log(getComputedStyle(this.el).getPropertyValue('--ojp-row--col-gap'));
  }

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
