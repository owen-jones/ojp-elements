import {Component, Host, h, Element, Prop, Event} from '@stencil/core';

@Component({
  tag: 'ojp-image',
  styleUrl: 'ojp-image.scss',
  shadow: true,
})
export class OjpImage {
  /**
   * 1. Own Properties
   * Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
    // Used for Intersection Observer
    _observer;
    // Used for loading event
    _image;
    _currentSrc;
    // Used for appending the sources to
    _picture;
    _slottedSources;

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
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */

  /**
   * Image src
   * Type: string
   * Required: true
   * Default: null
   */
  @Prop({
    reflect: true,
    mutable: false,
  }) src = "";

  /**
   * Image alt text
   * Type: string
   * Default: ""
   */
  @Prop({
    reflect: true,
    mutable: false
  }) alt = "";

  /**
   * Loading type (using browser's native lazy loading)
   * Type: boolean
   * Default: true
   */
  @Prop({
    reflect: true,
    mutable: false
  }) lazy = "true";

  /**
   * Image aspect ratio
   * Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
   * Default: null
   */
  @Prop({
    reflect: true,
    mutable: false
  }) ratio = null;

  /**
   * Image focus/object position
   * Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   * Default: null
   */
  @Prop({
    reflect: true,
    mutable: false
  }) imageFocus = null;

  /**
   * Width of the image
   * Type: string
   * Default: null
   * Note: this is not the width of the image container, but the width of the image itself
   *
   */
  @Prop({
    reflect: true,
    mutable: false
  }) width = null;


  /**
   * Height of the image
   * Type: string
   * Default: null
   * Note: this is not the height of the image container, but the height of the image itself
   *
   */
  @Prop({
    reflect: true,
    mutable: false
  }) height = null;

  /**
   * Optional placeholder image path
   * Type: string
   * Default: null
   */
  @Prop({
    reflect: true,
    mutable: false
  }) placeholder = null;

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  /**
   * Triggered when the element is visible/invisible in the viewport
   */
  @Event() elementIsVisibleEvent;
  @Event() elementIsInvisibleEvent;

  /**
   * Triggered when the image loaded/failed to load
   */
  @Event() imageLoadedEvent;
  @Event() imageFailedToLoadEvent;

  /**
   * Triggered when the current image source changes
   * Note: this event is not emitted when the image is loaded for the first time
   * Emits the previous source and the new source
   */
  @Event() imageSourceChangedEvent;


  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {
    this._slottedSources = Array.from(this.el.children);

    if (this.width) {
      this.el.style.setProperty('--ojp-image--width',  `${this.width}px`);
    }
  }

  componentDidLoad() {

    // Get picture to be used during rendering
    this._picture = this.el.shadowRoot.querySelector('picture');

    this._image = this.el.shadowRoot.querySelector('img');


    // Display console error if no src is provided
    // TODO is the console error helpful or cluttering?
    if (this.src === '' || this.src === null) {
      console.error('ojp-image src is required', this.el);
      if (this.placeholder) {
        this.src = this.placeholder;
      }
    }

    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this._observer = new IntersectionObserver(this.handleIntersection);
      this._observer.observe(this.el);
    }

    if (this._image) {
      this._currentSrc = this._image.currentSrc;

      this._image.addEventListener('load', () => {
        // Dispatch event when image is first loaded
        this.imageLoadedEvent.emit(this._image);

        // Dispatch event when image source changes (but not on first load) (for responsive images)
        if (this._currentSrc !== this._image.currentSrc) {
          if (this._currentSrc) {
            // TODO should we emit the image itself as well?
            this.imageSourceChangedEvent.emit({
              previousSrc: this._currentSrc,
              newSrc: this._image.currentSrc
            });
          }
          this._currentSrc = this._image.currentSrc;
        }
      });

      // Dispatch event when image fails to load
      this._image.addEventListener('error', () => {
        console.log('error');
        if (this.placeholder) {
          this.src = this.placeholder;
        }
        this.imageFailedToLoadEvent.emit(this._image);
      });

    }
  }

  disconnectedCallback() {
    // Disconnect observer
    if (this._observer) {
      this._observer.disconnect();
    }
    // Remove event listeners
    if (this._image) {
      this._image.removeEventListener('load', () => {
        // Dispatch event when image is loaded
        this.imageLoadedEvent.emit(this._image);
      });
      this._image.removeEventListener('error', () => {
        this.imageFailedToLoadEvent.emit(this._image);
      });
    }
  }


  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if it makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  // N/A


  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */
  // N/A


  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */

  //Code borrowed from https://medium.com/stencil-tricks/create-a-web-component-to-lazy-load-images-using-intersection-observer-9ced1282c6df
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
 // TODO figure out why firefox doesn't lazy load
  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */

  render() {

    return (
      <Host>
        <picture>
          <slot></slot>
          {this._slottedSources.map(child => {
            return (
              <source srcset={child.srcset} media={child.media} type={child.type} />
            );
          })}
          <img
            src={this.src}
            alt={this.alt}
            {...(this.lazy === 'true' ? {loading: 'lazy'} : {loading: 'eager'})}
            style={{
              aspectRatio: this.ratio,
              objectPosition: this.imageFocus ? this.imageFocus : 'center',
            }}
            width={this.width}
            height={this.height}
          />
        </picture>
      </Host>
    );
  }

}
