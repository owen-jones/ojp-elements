import {Component, Host, h, Watch, Element, Prop, Event} from '@stencil/core';

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
    observer;
    // Used for loading event
    img;
    currentSrc;
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
  }) ratio = "auto";

  /**
   * Image focus/object position
   * Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
   * Default: null
   */
  @Prop({
    reflect: true,
    mutable: false
  }) imageFocus = "50% 50%";

  /**
   * Source tags
   * Type: string array of objects
   * Default: []
   * Example: sources='[
   *           {
   *             "media":"(max-width: 599px)",
   *             "srcset":"../../assets/small_700x600.png"
   *           },
   *           {
   *             "media":"(min-width: 600px) and (max-width: 1000px)",
   *             "srcset":"../../assets/medium_1000x400.png"
   *           }
   *         ]'
   */

  // We need some extra logic in order to parse the string data passed in from the sources attribute into an array of objects// See  https://medium.com/@scottmgerstl/passing-an-object-or-array-to-stencil-dd62b7d92641

  // private array to
  @Prop({
    reflect: true,
    mutable: false
  }) sources = '';
  private _sources = [];

  @Watch('sources')
  sourcesWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._sources = JSON.parse(newValue);
    }
    else {
      this._sources = newValue;
    }
  }

  // TODO: should width and height be props?


  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  // TODO: document events

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
    if (this.sources) {
      this.sourcesWatcher(this.sources);
    }
  }

  componentDidLoad() {
    // Display console error if no src is provided
    if (this.src === '' || this.src === null) {
      console.error('ojp-image src is required', this.el);
    }

    // Create Intersection Observer
    if (this.el && (typeof window.IntersectionObserver !== 'undefined')) {
      this.observer = new IntersectionObserver(this.handleIntersection);
      this.observer.observe(this.el);
    }

    this.img = this.el.shadowRoot.querySelector('img');
    if (this.img) {
      this.currentSrc = this.img.currentSrc;

      this.img.addEventListener('load', () => {
        // Dispatch event when image is loaded
        this.imageLoadedEvent.emit(this.img);

        if (this.currentSrc !== this.img.currentSrc) {
          if (this.currentSrc) {
            // Dispatch event when image source changes (but not on load) (e.g. responsive images)
            // TODO should we emit the image itself as well?
            this.imageSourceChangedEvent.emit({
              previousSrc: this.currentSrc,
              newSrc: this.img.currentSrc
            });
          }
          this.currentSrc = this.img.currentSrc;

        }
      });

      // Dispatch event when image fails to load
      this.img.addEventListener('error', () => {
        this.imageFailedToLoadEvent.emit(this.img);
      });
    }
  }

  // TODO should we add a componentDidUnload() to remove the event listeners?


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

  /**
   * 10. render() function
   * Always the last public method in the class.
   * If private methods present, they are below public methods.
   */
  render() {
    return (
      <Host>
        <picture>
          {this._sources.map((source) => {
            return <source
              srcSet={source.srcset}
              media={source.media}
            />
          })}
          <img
            src={this.src}
            alt={this.alt}
            {...(this.lazy === 'true' ? {loading: 'lazy'} : {loading: 'eager'})}
            style={{
              aspectRatio: this.ratio,
              objectPosition: this.imageFocus
            }}
          />
        </picture>
      </Host>
    );
  }

}
