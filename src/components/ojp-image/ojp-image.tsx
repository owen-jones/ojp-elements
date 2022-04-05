import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ojp-image',
  styleUrl: 'ojp-image.scss',
  shadow: true,
})
export class OjpImage {

  @Element() el : HTMLElement;

  @Prop() src : string;

  intersectionObserver: IntersectionObserver

  connectedCallback() {
    this.intersectionObserver = new IntersectionObserver(((entries, observer) => {
      this.handleIntersection(entries, observer);
    }));
    this.intersectionObserver.observe(this.el);
  }

  handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        const img = this.el.shadowRoot.querySelector('img');
        img.src = this.src;
        observer.unobserve(this.el);
      }
    })
  }

  render() {
    return (
      <img />
    )
  }
}
