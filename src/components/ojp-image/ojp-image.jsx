import {Component, Host, h, Element, Prop, Event, State} from '@stencil/core';
import {OjpLazy} from '../ojp-lazy/ojp-lazy';


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
    _observer = null;
    // Used for loading event
    _image = null;
    _prevCurrentSrc = null;
    // Used for appending the sources to
    _slottedSources = null;

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
    @Element() el;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */

  // Used for lazy loading
  @State() _loadComponent = false;


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
   * Loading type (true = lazy, false = eager)
   * Type: boolean
   * Default: false
   */
  @Prop({
    reflect: true,
    mutable: false
  }) lazy = false;

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
   * Optional lazy load offset
   * Type: string (pixels)
   * Default: "300"
   */
  @Prop({
    reflect: true,
    mutable: false
  }) lazyOffset = '300';

  _lazyLoadOptions = {
    rootMargin: `${this.lazyOffset}px 0px`,
  };

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

    // Display console error if no src is provided
    if (this.src === '' || this.src === null) {
      console.warn('ojp-image src is required', this.el);
      if (this.placeholder) {
        this.src = this.placeholder;
      }
    }

    // If lazy loading is disabled, set the loadComponent to true
    if (!this.lazy) {
      this._loadComponent = true;
    }
  }

  componentDidUpdate(){
    this.handleImageLoaded();
  }
  componentDidLoad(){
    this.handleImageLoaded();
  }

  componentDidRender() {
    // Create Intersection Observer if browser supports it
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this._observer = new IntersectionObserver(
        this.handleIntersection, this._lazyLoadOptions);
      this._observer.observe(this.el);
    }
    // Otherwise, don't lazy load
    else {
      this._loadComponent = true;
    }
  }

  disconnectedCallback() {

    // Disconnect observer
    if (this._observer) {
      this._observer.disconnect();
    }

    // Remove event listeners
    if (this._image) {
      this._image.removeEventListener('load', this.loadListener);
      this._image.removeEventListener('error', this.loadFailedListener);
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

        // Emit event when element is visible
        this.elementIsVisibleEvent.emit(entry);

        // Load image
        this._loadComponent = true;
      }
      else {
        this.elementIsInvisibleEvent.emit(entry);
      }
    }
  };

  handleImageLoaded() {
    // Get image
    this._image = this.el.shadowRoot.querySelector('img');

    if (this._image) {
      // Add event listeners

      this.loadListener = () => {

        // Dispatch event when image is loaded for the first time
        if (this._prevCurrentSrc === null) {
          this.imageLoadedEvent.emit(this._image.currentSrc);
        }

        // Dispatch event when image source changes (for responsive images)
        else if (this._prevCurrentSrc !== this._image.currentSrc) {
          this.imageSourceChangedEvent.emit({
            previousSrc: this._prevCurrentSrc,
            currentSrc: this._image.currentSrc
          });
        }

        this._prevCurrentSrc = this._image.currentSrc;

      };

      this._image.addEventListener('load', this.loadListener);

      this.loadFailedListener = (e) => {
        // Dispatch event when image fails to load
        console.error('Image loading error', e.target);
        if (this.placeholder) {
          this.src = this.placeholder;
        }
        this.imageFailedToLoadEvent.emit(this._image);
      };
      this._image.addEventListener('error', this.loadFailedListener);
    }
  }

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */

  render() {
    return (
      <Host>
        <OjpLazy if={this._loadComponent}>
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
              style={{
                aspectRatio: this.ratio,
                objectPosition: this.imageFocus ? this.imageFocus : 'center',
              }}
              width={this.width}
              height={this.height}
            />
          </picture>
        </OjpLazy>
      </Host>
    );
  }

}
