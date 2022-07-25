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
          * 4. Public Property API Inlined decorator, alphabetical order. These are different than "own properties" in that public props are exposed as properties and attributes on the host element. Requires JSDocs for public API documentation.
         */
        "allowMultipleItemsOpen": boolean;
        /**
          * 8. Public methods API These methods are exposed on the host element. Always use two lines. Public Methods must be async. Requires JSDocs for public API documentation.
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
        "src": string;
    }
    interface OjpListbox {
        "activeSelectionIndex": number;
        "onItemSelected": Function;
        "open": boolean;
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
        "ojp-row": HTMLOjpRowElement;
    }
}
declare namespace LocalJSX {
    interface OjpAccordion {
        /**
          * 4. Public Property API Inlined decorator, alphabetical order. These are different than "own properties" in that public props are exposed as properties and attributes on the host element. Requires JSDocs for public API documentation.
         */
        "allowMultipleItemsOpen"?: boolean;
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
        "onStateChangeEvent"?: (event: CustomEvent<any>) => void;
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
        "src"?: string;
    }
    interface OjpListbox {
        "activeSelectionIndex"?: number;
        "onItemSelected"?: Function;
        "open"?: boolean;
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
            "ojp-row": LocalJSX.OjpRow & JSXBase.HTMLAttributes<HTMLOjpRowElement>;
        }
    }
}
