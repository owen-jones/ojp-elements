/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OjpAccordion {
        "allowMultipleItemsOpen": boolean;
        "toggleAll": () => Promise<void>;
    }
    interface OjpAccordionItem {
        "anchorId": any;
        /**
          * close the accordion item
         */
        "closeItem": () => Promise<void>;
        /**
          * index of accordion item from top to bottom
         */
        "index": number;
        /**
          * accordion item is open or opening (css transition)
         */
        "open": boolean;
        /**
          * open the accordion item
         */
        "openItem": () => Promise<void>;
        /**
          * toggle the accordion item
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
        "allowMultipleItemsOpen"?: boolean;
    }
    interface OjpAccordionItem {
        "anchorId"?: any;
        /**
          * index of accordion item from top to bottom
         */
        "index"?: number;
        /**
          * header-wrappered when the accordion item is opened
         */
        "onOpenEvent"?: (event: CustomEvent<any>) => void;
        /**
          * accordion item is open or opening (css transition)
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
