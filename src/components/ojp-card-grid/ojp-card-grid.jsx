import { Component, Host, h, Element, Prop, Event, Method, } from '@stencil/core';

@Component({
  tag: 'ojp-card-grid',
  styleUrl: 'ojp-card-grid.scss',
  shadow: true,
})

export class OjpCardGrid {


  @Element() el;

  /**
   * isMasonry is false by default, set isMasonry to true to change to masonry layout
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: true,
  }) ismasonry = false;

  /**
   * columns is 3 by default, set columns to change the number of columns
   * Type: number
   */
  @Prop({
    reflect: true,
    mutable: true,
  }) columns = 3;


  /**
   * Triggered when the card is visible/invisible in the viewport
   */
  @Event() elementIsVisibleEvent;
  @Event() elementIsInvisibleEvent;

  componentDidLoad() {
    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this.observer = new IntersectionObserver(this.handleIntersection);
      this.observer.observe(this.el);
    }
  }


  // https://medium.com/stencil-tricks/create-a-web-component-to-lazy-load-images-using-intersection-observer-9ced1282c6df
  handleIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.elementIsVisibleEvent.emit(entry);
      }
      else {
        this.elementIsInvisibleEvent.emit(entry);
      }
    }
  };

  setCssProperties() {
    if (this.ismasonry) {
      this.el.style.setProperty('--columns', 'grid--masonry');
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
