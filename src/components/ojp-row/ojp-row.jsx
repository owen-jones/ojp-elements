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
    mutable: false,
    attribute: 'no-gutter'
  }) noGutter = false;
  
  componentWillLoad() {
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
  }

  render() {
    this.el.style.setProperty('--ojp-row--align-items', this.align);
    this.el.style.setProperty('--ojp-row--justify-items', this.justify);

    if (this.noGutter){
      return (
        <Host>
            <slot></slot>
        </Host>
      )
    }
    else {
      return (
        <Host>
            <div class="gutter"></div>
            <slot></slot>
            <div class="gutter"></div>
        </Host>
      );

    }

  }

}
