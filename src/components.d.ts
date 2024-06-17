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
    interface OjpCard {
        /**
          * Layout is vertical by default, set ishorizontal to true to change to horizontal layout for desktop Type: boolean
         */
        "ishorizontal": boolean;
    }
    interface OjpCol {
        /**
          * How many grid columns this element will span on desktop devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "dspan": any;
        /**
          * The column's start position on desktop devices. (Internally uses `grid-column-start: <dstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
        "dstart": any;
        /**
          * How many grid columns this element will span on mobile devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "mspan": any;
        /**
          * The column's start position on mobile devices. (Internally uses `grid-column-start: <mstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
        "mstart": any;
        /**
          * How many grid columns this element will span. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col span="12">` is equivalent to <br>`<ojp-col mspan="12" tspan="12" dspan="12">`
         */
        "span": string;
        /**
          * The column's start position on all devices. Shorthand for desktop, tablet, and mobile start. (Internally uses `grid-column-start: <start>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col start="2">` is equivalent to <br>`<ojp-col mstart="2" tstart="2" dstart="2">`
         */
        "start": string;
        /**
          * How many grid columns this element will span on tablet devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "tspan": any;
        /**
          * The column's start position on tablet devices. (Internally uses `grid-column-start: <tstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
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
        "openModal": (nonModal?: boolean) => Promise<void>;
        "scrollModalTo": (X: any, Y: any) => Promise<void>;
        /**
          * Modal content has a visible scrollbar Type: boolean
         */
        "scrollbarvisible": boolean;
    }
    interface OjpNavigation {
    }
    interface OjpNavigationItem {
    }
    interface OjpRow {
        /**
          * align-items property of the grid. <br><br>Default: `stretch`
         */
        "align": string;
        /**
          * The number of columns that the row should be divided into. Internally, this is used to set the `grid-template-columns` property. Shorthand for desktop, tablet, and mobile cols. <br><br>Default: `12` <br><br>`<ojp-col cols="12">` is equivalent to <br>`<ojp-col mcols="12" tcols="12" dcols="12">`
         */
        "cols": string;
        /**
          * The number of columns that the row should be divided into on desktop. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "dcols": any;
        /**
          * Should the gutters (aka page padding) be removed? Internally, setting this to true sets the `--ojp-row--gutter` css variable to `0`. <br><br>Default: `false`
         */
        "fullbleed": boolean;
        /**
          * justify-items property of the grid. <br><br>Default: `stretch`
         */
        "justify": string;
        /**
          * The number of columns that the row should be divided into on mobile. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "mcols": any;
        /**
          * The number of columns that the row should be divided into on tablet. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "tcols": any;
    }
    interface OjpTemplate {
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
export interface OjpCardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpCardElement;
}
export interface OjpImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpImageElement;
}
export interface OjpNavigationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpNavigationElement;
}
export interface OjpNavigationItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpNavigationItemElement;
}
export interface OjpTemplateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOjpTemplateElement;
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
    interface HTMLOjpCardElement extends Components.OjpCard, HTMLStencilElement {
    }
    var HTMLOjpCardElement: {
        prototype: HTMLOjpCardElement;
        new (): HTMLOjpCardElement;
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
    interface HTMLOjpNavigationElement extends Components.OjpNavigation, HTMLStencilElement {
    }
    var HTMLOjpNavigationElement: {
        prototype: HTMLOjpNavigationElement;
        new (): HTMLOjpNavigationElement;
    };
    interface HTMLOjpNavigationItemElement extends Components.OjpNavigationItem, HTMLStencilElement {
    }
    var HTMLOjpNavigationItemElement: {
        prototype: HTMLOjpNavigationItemElement;
        new (): HTMLOjpNavigationItemElement;
    };
    interface HTMLOjpRowElement extends Components.OjpRow, HTMLStencilElement {
    }
    var HTMLOjpRowElement: {
        prototype: HTMLOjpRowElement;
        new (): HTMLOjpRowElement;
    };
    interface HTMLOjpTemplateElement extends Components.OjpTemplate, HTMLStencilElement {
    }
    var HTMLOjpTemplateElement: {
        prototype: HTMLOjpTemplateElement;
        new (): HTMLOjpTemplateElement;
    };
    interface HTMLElementTagNameMap {
        "ojp-accordion": HTMLOjpAccordionElement;
        "ojp-accordion-item": HTMLOjpAccordionItemElement;
        "ojp-card": HTMLOjpCardElement;
        "ojp-col": HTMLOjpColElement;
        "ojp-image": HTMLOjpImageElement;
        "ojp-listbox": HTMLOjpListboxElement;
        "ojp-modal": HTMLOjpModalElement;
        "ojp-navigation": HTMLOjpNavigationElement;
        "ojp-navigation-item": HTMLOjpNavigationItemElement;
        "ojp-row": HTMLOjpRowElement;
        "ojp-template": HTMLOjpTemplateElement;
    }
}
declare namespace LocalJSX {
    interface OjpAccordion {
        /**
          * Allow multiple items to be open at once If set to false, opening one item will auto-close all other items in the accordion Type: boolean
         */
        "allowMultipleItemsOpen"?: boolean;
        "onElementIsInvisible"?: (event: OjpAccordionCustomEvent<any>) => void;
        /**
          * Triggered when the accordion is visible/invisible in the viewport
         */
        "onElementIsVisible"?: (event: OjpAccordionCustomEvent<any>) => void;
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
          * Triggered when the accordion item is closed
         */
        "onItemClosed"?: (event: OjpAccordionItemCustomEvent<any>) => void;
        /**
          * Triggered when the accordion item is opened
         */
        "onItemOpened"?: (event: OjpAccordionItemCustomEvent<any>) => void;
        /**
          * Accordion item is open or opening (css transition) Type: boolean
         */
        "open"?: boolean;
    }
    interface OjpCard {
        /**
          * Layout is vertical by default, set ishorizontal to true to change to horizontal layout for desktop Type: boolean
         */
        "ishorizontal"?: boolean;
        "onElementIsInvisibleEvent"?: (event: OjpCardCustomEvent<any>) => void;
        /**
          * Triggered when the card is visible/invisible in the viewport
         */
        "onElementIsVisibleEvent"?: (event: OjpCardCustomEvent<any>) => void;
    }
    interface OjpCol {
        /**
          * How many grid columns this element will span on desktop devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "dspan"?: any;
        /**
          * The column's start position on desktop devices. (Internally uses `grid-column-start: <dstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
        "dstart"?: any;
        /**
          * How many grid columns this element will span on mobile devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "mspan"?: any;
        /**
          * The column's start position on mobile devices. (Internally uses `grid-column-start: <mstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
        "mstart"?: any;
        /**
          * How many grid columns this element will span. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col span="12">` is equivalent to <br>`<ojp-col mspan="12" tspan="12" dspan="12">`
         */
        "span"?: string;
        /**
          * The column's start position on all devices. Shorthand for desktop, tablet, and mobile start. (Internally uses `grid-column-start: <start>;`). <br><br>Defaults to `auto`. <br><br>`<ojp-col start="2">` is equivalent to <br>`<ojp-col mstart="2" tstart="2" dstart="2">`
         */
        "start"?: string;
        /**
          * How many grid columns this element will span on tablet devices. (Internally uses `grid-column-span: span <span>;`). <br><br>Defaults to `auto`.
         */
        "tspan"?: any;
        /**
          * The column's start position on tablet devices. (Internally uses `grid-column-start: <tstart>;`). <br><br>Defaults to `auto` or `start` property if one is defined.
         */
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
    interface OjpNavigation {
        /**
          * Triggered when the component has left the viewport
         */
        "onElementIsInvisible"?: (event: OjpNavigationCustomEvent<any>) => void;
        /**
          * Triggered when the component is visible in the viewport
         */
        "onElementIsVisible"?: (event: OjpNavigationCustomEvent<any>) => void;
        /**
          * Triggered when the mobile menu drawer opens & closes (boolean)
         */
        "onOjpNavigationMobileDrawerOpen"?: (event: OjpNavigationCustomEvent<any>) => void;
    }
    interface OjpNavigationItem {
        /**
          * Triggered when the component has left the viewport
         */
        "onElementIsInvisible"?: (event: OjpNavigationItemCustomEvent<any>) => void;
        /**
          * Triggered when the component is visible in the viewport
         */
        "onElementIsVisible"?: (event: OjpNavigationItemCustomEvent<any>) => void;
    }
    interface OjpRow {
        /**
          * align-items property of the grid. <br><br>Default: `stretch`
         */
        "align"?: string;
        /**
          * The number of columns that the row should be divided into. Internally, this is used to set the `grid-template-columns` property. Shorthand for desktop, tablet, and mobile cols. <br><br>Default: `12` <br><br>`<ojp-col cols="12">` is equivalent to <br>`<ojp-col mcols="12" tcols="12" dcols="12">`
         */
        "cols"?: string;
        /**
          * The number of columns that the row should be divided into on desktop. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "dcols"?: any;
        /**
          * Should the gutters (aka page padding) be removed? Internally, setting this to true sets the `--ojp-row--gutter` css variable to `0`. <br><br>Default: `false`
         */
        "fullbleed"?: boolean;
        /**
          * justify-items property of the grid. <br><br>Default: `stretch`
         */
        "justify"?: string;
        /**
          * The number of columns that the row should be divided into on mobile. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "mcols"?: any;
        /**
          * The number of columns that the row should be divided into on tablet. Internally, this is used to set the `grid-template-columns` property. <br><br>Default: value of {this.cols}
         */
        "tcols"?: any;
    }
    interface OjpTemplate {
        /**
          * Triggered when the component has left the viewport
         */
        "onElementIsInvisible"?: (event: OjpTemplateCustomEvent<any>) => void;
        /**
          * Triggered when the component is visible in the viewport
         */
        "onElementIsVisible"?: (event: OjpTemplateCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "ojp-accordion": OjpAccordion;
        "ojp-accordion-item": OjpAccordionItem;
        "ojp-card": OjpCard;
        "ojp-col": OjpCol;
        "ojp-image": OjpImage;
        "ojp-listbox": OjpListbox;
        "ojp-modal": OjpModal;
        "ojp-navigation": OjpNavigation;
        "ojp-navigation-item": OjpNavigationItem;
        "ojp-row": OjpRow;
        "ojp-template": OjpTemplate;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ojp-accordion": LocalJSX.OjpAccordion & JSXBase.HTMLAttributes<HTMLOjpAccordionElement>;
            "ojp-accordion-item": LocalJSX.OjpAccordionItem & JSXBase.HTMLAttributes<HTMLOjpAccordionItemElement>;
            "ojp-card": LocalJSX.OjpCard & JSXBase.HTMLAttributes<HTMLOjpCardElement>;
            "ojp-col": LocalJSX.OjpCol & JSXBase.HTMLAttributes<HTMLOjpColElement>;
            "ojp-image": LocalJSX.OjpImage & JSXBase.HTMLAttributes<HTMLOjpImageElement>;
            "ojp-listbox": LocalJSX.OjpListbox & JSXBase.HTMLAttributes<HTMLOjpListboxElement>;
            "ojp-modal": LocalJSX.OjpModal & JSXBase.HTMLAttributes<HTMLOjpModalElement>;
            "ojp-navigation": LocalJSX.OjpNavigation & JSXBase.HTMLAttributes<HTMLOjpNavigationElement>;
            "ojp-navigation-item": LocalJSX.OjpNavigationItem & JSXBase.HTMLAttributes<HTMLOjpNavigationItemElement>;
            "ojp-row": LocalJSX.OjpRow & JSXBase.HTMLAttributes<HTMLOjpRowElement>;
            "ojp-template": LocalJSX.OjpTemplate & JSXBase.HTMLAttributes<HTMLOjpTemplateElement>;
        }
    }
}
