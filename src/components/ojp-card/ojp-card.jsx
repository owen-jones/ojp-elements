import { Component, Host, h, Prop, Element, Method, } from '@stencil/core';

@Component({
  tag: 'ojp-card',
  styleUrl: 'ojp-card.scss',
  shadow: true,
})

export class OjpCard {


  @Element() el;

  /**
   * Layout is vertical by default, set ishorizontal to true to change to horizontal layout for desktop
   * Type: boolean
   */
  @Prop({
    reflect: true,
    mutable: true,
  }) ishorizontal = false;

  flexDirectionDesktop = null;

  /**
   * Triggered when the accordion is visible/invisible in the viewport
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
      console.log('entry', entry);
      if (entry.isIntersecting) {
        this.elementIsVisibleEvent.emit(entry);
      }
      else {
        this.elementIsInvisibleEvent.emit(entry);
      }
    }
  };


  // Custom function to set all necessary css vars
  setCssProperties() {
    if (typeof (this.ishorizontal) == 'undefined' || !this.ishorizontal) {
      this.flexDirectionDesktop = 'column';
    }
    else {
      this.flexDirectionDesktop = 'row';
    }
    this.el.style.setProperty('--ojp-card--flex-direction__desktop', this.flexDirectionDesktop);
  }

  render() {
    this.setCssProperties();
    return (
      <Host>
        <slot name="card-content-one"></slot>
        <slot name="card-content-two"></slot>
      </Host>
    );
  }

}
