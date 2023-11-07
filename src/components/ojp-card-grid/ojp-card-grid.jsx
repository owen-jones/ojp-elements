import { Component, Host, h, Element, Prop, Event, Method, Listen} from '@stencil/core';

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

    this.createMasonryLayout();
  }

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.createMasonryLayout();
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

  createMasonryLayout = () => {
    if (!this.ismasonry) return;

    const columns = parseInt(window.getComputedStyle(this.el).getPropertyValue('--ojp-card-grid--columns').trim());
    const colGap = parseInt(window.getComputedStyle(this.el).getPropertyValue('--ojp-card-grid--col-gap').trim());
    const rowGap = parseInt(window.getComputedStyle(this.el).getPropertyValue('--ojp-card-grid--row-gap').trim());
    const totalColGapWidth = columns - 1 ? colGap * (columns - 1) : 0;
    const itemWidth = (this.el.offsetWidth - totalColGapWidth) / columns;
    const columnHeights = new Array(columns).fill(0);

    const items = Array.from(this.el.children);
    items.forEach((item, i) => {
      item.style.width = `${itemWidth}px`;

      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      item.style.position = 'absolute';
      item.style.left = `${(itemWidth + colGap) * shortestColumnIndex}px`;
      item.style.top = `${columnHeights[shortestColumnIndex]}px`;
      columnHeights[shortestColumnIndex] += item.offsetHeight + rowGap;
    });

    // Set the height of the container to the height of the tallest column
    this.el.shadowRoot.querySelector('.ojp--card-grid--grid').style.height = `${Math.max(...columnHeights)}px`;
  }


  render() {
    return (
      <div
        class={{
          'ojp--card-grid--grid': true,
          'ojp--card-grid--grid--masonry': this.ismasonry
        }}>
        <slot></slot>
      </div>
    );
  }

}
