/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OjpAccordion {
        /**
          * Allow multiple items to be open at once If set to false, opening one item will auto-close all other items in the accordion Type: boolean
         */
        "allowMultipleItemsOpen": boolean;
        /**
          * Expand/Collapse all accordion items
         */
        "toggleAll": () => Promise<void>;
    }
    interface OjpAccordionItem {
        /**
          * Optional User-defined anchor id Used so item can be auto-opened with url param Type: string
         */
        "anchorId": any;
        /**
          * Close the accordion item
         */
        "closeItem": () => Promise<void>;
        /**
          * Index of accordion item from top to bottom Type: number
         */
        "index": number;
        /**
          * Accordion item is open or opening (css transition) Type: boolean
         */
        "open": boolean;
        /**
          * Open the accordion item
         */
        "openItem": () => Promise<void>;
        /**
          * Toggle the accordion item
         */
        "toggleItem": () => Promise<void>;
    }
    interface OjpCol {
        "dspan": any;
        "dstart": any;
        "mspan": any;
        "mstart": any;
        "span": string;
        "start": string;
        "tspan": any;
        "tstart": any;
    }
    interface OjpImage {
        /**
          * Image alt text Type: string Default: ""
         */
        "alt": string;
        /**
          * Desktop image src Type: string
         */
        "dSrc": any;
        /**
          * Height of the image Type: string Default: null Note: this is not the height of the image container, but the height of the image itself
         */
        "height": any;
        /**
          * Image focus/object position Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position Default: null
         */
        "imageFocus": any;
        /**
          * Loading type (true = lazy, false = eager) Type: boolean Default: false
         */
        "lazy": boolean;
        /**
          * Mobile image src
         */
        "mSrc": any;
        /**
          * Optional placeholder image path Type: string Default: null
         */
        "placeholder": any;
        /**
          * Image aspect ratio Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio Default: null
         */
        "ratio": any;
        /**
          * Image src Type: string Required: true Default: null
         */
        "src": string;
        /**
          * Tablet image src
         */
        "tSrc": any;
        /**
          * Widescreen image src
         */
        "wSrc": any;
        /**
          * Width of the image Type: string Default: null Note: this is not the width of the image container, but the width of the image itself
         */
        "width": any;
    }
    interface OjpListbox {
        "activeSelectionIndex": number;
        "onItemSelected": Function;
        "open": boolean;
    }
    interface OjpModal {
        "closeModal": () => Promise<void>;
        /**
          * Modal's close button is inside or outside the modal panel Type: boolean
         */
        "closebuttonoutside": boolean;
        /**
          * Modal is open or opening (css transition) Type: boolean
         */
        "open": boolean;
        /**
          * Methods to open, close modal
         */
        "openModal": () => Promise<void>;
        "scrollModalTo": (X: any, Y: any) => Promise<void>;
        /**
          * Modal content has a visible scrollbar Type: boolean
         */
        "scrollbarvisible": boolean;
    }
    interface OjpRow {
        "align": string;
        "cols": string;
        "dcols": any;
        "fullbleed": boolean;
        "justify": string;
        "mcols": any;
        "tcols": any;
    }
}
export interface OjpAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpAccordionElement;
}
export interface OjpAccordionItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpAccordionItemElement;
}
export interface OjpImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpImageElement;
}
declare global {
    interface HTMLOjpAccordionElement extends Components.OjpAccordion, HTMLStencilElement {
    }
    var HTMLOjpAccordionElement: {
        prototype: HTMLOjpAccordionElement;
        new (): HTMLOjpAccordionElement;
    };
    interface HTMLOjpAccordionItemElement extends Components.OjpAccordionItem, HTMLStencilElement {
    }
    var HTMLOjpAccordionItemElement: {
        prototype: HTMLOjpAccordionItemElement;
        new (): HTMLOjpAccordionItemElement;
    };
    interface HTMLOjpColElement extends Components.OjpCol, HTMLStencilElement {
    }
    var HTMLOjpColElement: {
        prototype: HTMLOjpColElement;
        new (): HTMLOjpColElement;
    };
    interface HTMLOjpImageElement extends Components.OjpImage, HTMLStencilElement {
    }
    var HTMLOjpImageElement: {
        prototype: HTMLOjpImageElement;
        new (): HTMLOjpImageElement;
    };
    interface HTMLOjpListboxElement extends Components.OjpListbox, HTMLStencilElement {
    }
    var HTMLOjpListboxElement: {
        prototype: HTMLOjpListboxElement;
        new (): HTMLOjpListboxElement;
    };
    interface HTMLOjpModalElement extends Components.OjpModal, HTMLStencilElement {
    }
    var HTMLOjpModalElement: {
        prototype: HTMLOjpModalElement;
        new (): HTMLOjpModalElement;
    };
    interface HTMLOjpRowElement extends Components.OjpRow, HTMLStencilElement {
    }
    var HTMLOjpRowElement: {
        prototype: HTMLOjpRowElement;
        new (): HTMLOjpRowElement;
    };
    interface HTMLElementTagNameMap {
        "ojp-accordion": HTMLOjpAccordionElement;
        "ojp-accordion-item": HTMLOjpAccordionItemElement;
        "ojp-col": HTMLOjpColElement;
        "ojp-image": HTMLOjpImageElement;
        "ojp-listbox": HTMLOjpListboxElement;
        "ojp-modal": HTMLOjpModalElement;
        "ojp-row": HTMLOjpRowElement;
    }
}
declare namespace LocalJSX {
    interface OjpAccordion {
        /**
          * Allow multiple items to be open at once If set to false, opening one item will auto-close all other items in the accordion Type: boolean
         */
        "allowMultipleItemsOpen"?: boolean;
        "onElementIsInvisibleEvent"?: (event: OjpAccordionCustomEvent<any>) => void;
        /**
          * Triggered when the accordion is visible/invisible in the viewport
         */
        "onElementIsVisibleEvent"?: (event: OjpAccordionCustomEvent<any>) => void;
    }
    interface OjpAccordionItem {
        /**
          * Optional User-defined anchor id Used so item can be auto-opened with url param Type: string
         */
        "anchorId"?: any;
        /**
          * Index of accordion item from top to bottom Type: number
         */
        "index"?: number;
        /**
          * Triggered when the accordion item is opened or closed
         */
        "onStateChangeEvent"?: (event: OjpAccordionItemCustomEvent<any>) => void;
        /**
          * Accordion item is open or opening (css transition) Type: boolean
         */
        "open"?: boolean;
    }
    interface OjpCol {
        "dspan"?: any;
        "dstart"?: any;
        "mspan"?: any;
        "mstart"?: any;
        "span"?: string;
        "start"?: string;
        "tspan"?: any;
        "tstart"?: any;
    }
    interface OjpImage {
        /**
          * Image alt text Type: string Default: ""
         */
        "alt"?: string;
        /**
          * Desktop image src Type: string
         */
        "dSrc"?: any;
        /**
          * Height of the image Type: string Default: null Note: this is not the height of the image container, but the height of the image itself
         */
        "height"?: any;
        /**
          * Image focus/object position Type: see CSS object-position https://developer.mozilla.org/en-US/docs/Web/CSS/object-position Default: null
         */
        "imageFocus"?: any;
        /**
          * Loading type (true = lazy, false = eager) Type: boolean Default: false
         */
        "lazy"?: boolean;
        /**
          * Mobile image src
         */
        "mSrc"?: any;
        /**
          * Triggered when the element has left the viewport
         */
        "onElementIsInvisible"?: (event: OjpImageCustomEvent<any>) => void;
        /**
          * Triggered when the element has entered in the viewport
         */
        "onElementIsVisible"?: (event: OjpImageCustomEvent<any>) => void;
        /**
          * Triggered when the image failed to load
         */
        "onImageFailedToLoad"?: (event: OjpImageCustomEvent<any>) => void;
        /**
          * Triggered when the image loaded
         */
        "onImageLoaded"?: (event: OjpImageCustomEvent<any>) => void;
        /**
          * Triggered when the current image source changes Note: this event is not emitted when the image is loaded for the first time Emits the previous source and the new source
         */
        "onImageSourceChanged"?: (event: OjpImageCustomEvent<any>) => void;
        /**
          * Optional placeholder image path Type: string Default: null
         */
        "placeholder"?: any;
        /**
          * Image aspect ratio Type: see CSS aspect-ratio https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio Default: null
         */
        "ratio"?: any;
        /**
          * Image src Type: string Required: true Default: null
         */
        "src"?: string;
        /**
          * Tablet image src
         */
        "tSrc"?: any;
        /**
          * Widescreen image src
         */
        "wSrc"?: any;
        /**
          * Width of the image Type: string Default: null Note: this is not the width of the image container, but the width of the image itself
         */
        "width"?: any;
    }
    interface OjpListbox {
        "activeSelectionIndex"?: number;
        "onItemSelected"?: Function;
        "open"?: boolean;
    }
    interface OjpModal {
        /**
          * Modal's close button is inside or outside the modal panel Type: boolean
         */
        "closebuttonoutside"?: boolean;
        /**
          * Modal is open or opening (css transition) Type: boolean
         */
        "open"?: boolean;
        /**
          * Modal content has a visible scrollbar Type: boolean
         */
        "scrollbarvisible"?: boolean;
    }
    interface OjpRow {
        "align"?: string;
        "cols"?: string;
        "dcols"?: any;
        "fullbleed"?: boolean;
        "justify"?: string;
        "mcols"?: any;
        "tcols"?: any;
    }
    interface IntrinsicElements {
        "ojp-accordion": OjpAccordion;
        "ojp-accordion-item": OjpAccordionItem;
        "ojp-col": OjpCol;
        "ojp-image": OjpImage;
        "ojp-listbox": OjpListbox;
        "ojp-modal": OjpModal;
        "ojp-row": OjpRow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ojp-accordion": LocalJSX.OjpAccordion & JSXBase.HTMLAttributes<HTMLOjpAccordionElement>;
            "ojp-accordion-item": LocalJSX.OjpAccordionItem & JSXBase.HTMLAttributes<HTMLOjpAccordionItemElement>;
            "ojp-col": LocalJSX.OjpCol & JSXBase.HTMLAttributes<HTMLOjpColElement>;
            "ojp-image": LocalJSX.OjpImage & JSXBase.HTMLAttributes<HTMLOjpImageElement>;
            "ojp-listbox": LocalJSX.OjpListbox & JSXBase.HTMLAttributes<HTMLOjpListboxElement>;
            "ojp-modal": LocalJSX.OjpModal & JSXBase.HTMLAttributes<HTMLOjpModalElement>;
            "ojp-row": LocalJSX.OjpRow & JSXBase.HTMLAttributes<HTMLOjpRowElement>;
        }
    }
}
