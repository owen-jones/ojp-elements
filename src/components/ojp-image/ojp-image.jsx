import {Component, Element, Event, EventEmitter, h, Host, Prop, State} from '@stencil/core';


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

    _loadListener = null;
    _loadFailedListener = null;


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
   * Mobile image src
   */
  @Prop({
    attribute: 'mSrc',
    mutable: false,
    reflect: true
  }) mSrc = null;

  /**
   * Tablet image src
   */
  @Prop({
    attribute: 'tSrc',
    mutable: false,
    reflect: true,
  }) tSrc = null;

  /**
   * Desktop image src
   * Type: string
   */
  @Prop({
    attribute: 'dSrc',
    mutable: false,
    reflect: true
  }) dSrc = null;

  /**
   * Widescreen image src
   */
  @Prop({
    attribute: 'dSrc',
    mutable: false,
    reflect: true
  }) wSrc = null;


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
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  /**
   * Triggered when the element has entered in the viewport
   */
  @Event() elementIsVisible;
  /**
   * Triggered when the element has left the viewport
   */
  @Event() elementIsInvisible;

  /**
   * Triggered when the image loaded
   */
  @Event() imageLoaded;
  /**
   * Triggered when the image failed to load
   */
  @Event() imageFailedToLoad;

  /**
   * Triggered when the current image source changes
   * Note: this event is not emitted when the image is loaded for the first time
   * Emits the previous source and the new source
   */
  @Event() imageSourceChanged;


  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {

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
        this.handleIntersection
      );
      this._observer.observe(this.el);
    }
  }

  disconnectedCallback() {

    // Disconnect observer
    if (this._observer) {
      this._observer.disconnect();
    }

    // Remove event listeners
    if (this._image) {
      this._image.removeEventListener('load', this._loadListener);
      this._image.removeEventListener('error', this._loadFailedListener);
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

  handleIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // Emit event when element is visible
        this.elementIsVisible.emit(entry);
      }
      else {
        this.elementIsInvisible.emit(entry);
      }
    }
  };

  handleImageLoaded() {
    // Get image
    this._image = this.el.shadowRoot.querySelector('img');

    if (this._image) {
      // Add event listeners

      this._loadListener = () => {

        // Dispatch event when image is loaded for the first time
        if (this._prevCurrentSrc === null) {
          this.imageLoaded.emit(this._image.currentSrc);
        }

        // Dispatch event when image source changes (for responsive images)
        else if (this._prevCurrentSrc !== this._image.currentSrc) {
          this.imageSourceChanged.emit({
            previousSrc: this._prevCurrentSrc,
            currentSrc: this._image.currentSrc
          });
        }

        this._prevCurrentSrc = this._image.currentSrc;

      };

      this._image.addEventListener('load', this._loadListener);

      this._loadFailedListener = (e) => {
        // Dispatch event when image fails to load
        console.error('Image loading error', e.target);
        if (this.placeholder) {
          this.src = this.placeholder;
        }
        this.imageFailedToLoad.emit(this._image);
      };
      this._image.addEventListener('error', this._loadFailedListener);
    }
  }

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */

  render() {


    // Get breakpoints from CSS variables. Note: These use CSS variables to allow them to be overridden by the end user.
    let breakpointMobile = parseInt(getComputedStyle(this.el).getPropertyValue('--ojp-image--breakpoint--mobile'), 10);
    let breakpointTablet = parseInt(getComputedStyle(this.el).getPropertyValue('--ojp-image--breakpoint--tablet'), 10);
    let breakpointDesktop = parseInt(getComputedStyle(this.el).getPropertyValue('--ojp-image--breakpoint--desktop'), 10);
    let breakpointWidescreen = parseInt(getComputedStyle(this.el).getPropertyValue('--ojp-image--breakpoint--widescreen'), 10);

    return (
      <Host>
        <picture>

          {breakpointWidescreen && this.wSrc
            ? <source
                media={`(min-width: ${breakpointWidescreen}px)`}
                srcSet={this.wSrc}
              />
            : null
          }

          {breakpointDesktop && this.dSrc
            ? <source
                media={`(min-width: ${breakpointDesktop}px) and (max-width: ${breakpointWidescreen - 1}px)`}
                srcSet={this.dSrc}
              />
            : null
          }
          {breakpointTablet && this.tSrc
            ? <source
                media={`(min-width: ${breakpointTablet}px) and (max-width: ${breakpointDesktop - 1}px)`}
                srcSet={this.tSrc}
              />
            : null
          }
          {breakpointMobile && this.mSrc
            ? <source
                media={`(min-width: ${breakpointMobile}px) and (max-width: ${breakpointTablet - 1}px)`}
                srcSet={this.mSrc}
              />
            : null
          }





          <img
            src={this.src}
            alt={this.alt}
            style={{
              aspectRatio: this.ratio,
              objectPosition: this.imageFocus ? this.imageFocus : 'center',
            }}
            width={this.width}
            height={this.height}
            {...(this.lazy ? { loading: 'lazy' } : { loading: 'eager'})}
          />
        </picture>
      </Host>
    );
  }

}
