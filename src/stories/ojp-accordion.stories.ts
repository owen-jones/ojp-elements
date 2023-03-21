export default {
    title: 'Components/Accordion/OjpAccordion',
    component: 'ojp-accordion',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
<br>

## Table of Contents
<ul>
  <li>[Description](#description)</li>
  <li>[Usage](#usage)</li>
  <li><strong>[Element: <ojp-accordion>](#element-ojp-accordion)</strong></li>
  <ul>
      <li>[Attributes](#attributes)</li>
      <li>[Events](#events)</li>
      <li>[Methods](#methods)</li>
  </ul>
  <li><strong>[Element: <ojp-accordion-item>](#element-ojp-accordion-item)</strong></li>
  <ul>
      <li>[Slots](#slots)</li>
      <li>[Attributes](#attributes-1)</li>
      <li>[Non-modifiable Attributes](#non-modifiable-attributes)</li>
      <li>[Methods](#methods-1)</li>
      <li>[Events](#events-1)</li>
      <li>[CSS Variables](#css-variables)</li>
  </ul>
</ul>

## Description:
The \`<ojp-accordion>\` element will render a simple accordion. Items must be added to the accordion using the \`<ojp-accordion-item>\` element.

## Usage:
Implement the accordion using \`<ojp-accordion>\` and \`<ojp-accordion-item>\` referring to the following example:

\`
<ojp-accordion>
    <ojp-accordion-item  anchor-id="test-anchor-url" open>
        <span slot="header">open accordion element</span>
        <span slot="icon">
          <img src="my-custom-icon.png">
        </span>
        <div slot="panel">
            Item no 1 panel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
    </ojp-accordion-item>
    <ojp-accordion-item>
        <span slot="header">closed accordion element</span>
        <div slot="panel">
            Item no 2 panel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
    </ojp-accordion-item>
</ojp-accordion>
\`
<br>

# Element: \`<ojp-accordion>\`

## Attributes:

### \`allow-multiple-items-open\`

This option specifies if an accordion can allow multiple items to be open at the same time. Can be modified by adding the keyphrase "allow-multiple-items-open" or removing it from the element parameters.

>  **Usage**:
\`<ojp-accordion allow-multiple-items-open>\`

<br>
## Events:

### \`elementIsVisible\`
Triggered when the element is visible in the viewport.

> **Usage**:

\`const myElement = document.getElementById("my-element");
myElement.addEventListener('elementIsVisible', event => {
    console.log('My accordion is now visible');
    console.log('IntersectionObserverEntry', event.detail);
});                \`

### \`elementIsInvisible\`
Triggered when the element is no longer visible in the viewport.

> **Usage**:

\`const myElement = document.getElementById("my-element");
myElement.addEventListener('elementIsInvisible', event => {
    console.log('My accordion is now invisible');
    console.log('IntersectionObserverEntry', event.detail);
});                \`
<br>
## Methods:
### \`toggleAll\`

This method allows users to toggle all items of an accordion. This method can be triggered from a button.

#### NOTE: This kind of accordion must have the "allow-multiple-items-open" attribute set.

**Usage**:
\`const myAccordion = document.getElementById('my-accordion');
myAccordion.toggleAll();\`

<br>

# Element: \`<ojp-accordion-item>\`


## Slots:
The accordion element uses \`slots\` to place content properly in the component tree. These slots have names to allow for specifying slot outputs, and they can be used as follows.

### \`slot="header"\`
This is the slot name given to the header section of the accordion item. This will be the text next to the icon.
### \`slot="icon"\`
This is the slot name given to the icon of the accordion item. This will be the icon next to the header.
<br>Default: <svg style="width: 27px;" viewBox="0 0 31 17" preserveAspectRatio="xMidYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 16L15.5 2L1 16" stroke="black" stroke-width="2"/></svg>
### \`slot="panel"\`
This is the slot name given to the panel/content section of the accordion item. This will be the content under the header section.

<br>

## Attributes:

### \`anchor-id\`

This optional attribute specifies an alphanumeric, user-defined string. It can be used to auto-open an accordion item with url parameters.

>  **Usage**:
\`<ojp-accordion-item anchor-id="custom-anchor-id">\`

<br>### \`open\`

This option specifies the state of an accordion item on page load, and can be modified by adding the keyword "open" or removing it from the element parameters.

>  **Usage**:
\`<ojp-accordion-item open>\`


<br>## Non-modifiable Attributes:

### \`index\`

This auto-generated attribute specifies the index of an accordion item (starting at  \`0 \` from top to bottom).

>  **Example**:
\`<ojp-accordion-item index="3">\`


<br>## Methods:
####NOTE: All the methods will return a \`Promise<void>\`

### \`closeItem()\`

This method allows users to close an accordion item.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.closeItem();\`

### \`openItem()\`

This method allows users to open an accordion item.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.openItem();\`


### \`toggleItem()\`

This method allows users to toggle the open/closed state an accordion item. By default, the \`accordion item arrow\` and the \`header text\` are bound to this method.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.toggleItem();\`

## Events:
### \`itemOpened\`
Triggered when an accordion item is opened/expanded.

**Usage Note:** The index of the opened item can be accessed by \`event.detail.index\`.

**Usage**:
\`const myAccordionItem = document.getElementById("my-accordion-item");
myAccordionItem.addEventListener('itemOpened', event => {
   console.log('The item with index ' + event.detail.index + ' was opened');
}); \`
### \`itemClosed\`
Triggered when an accordion item is closed/collapsed.

**Usage Note:** The index of the closed item can be accessed by \`event.detail.index\`.

**Usage**:
\`const myAccordionItem = document.getElementById("my-accordion-item");
myAccordionItem.addEventListener('itemClosed', event => {
   console.log('The item with index ' + event.detail.index + ' was closed');
}); \`



## CSS Variables:

The \`<ojp-accordion-item>\` element comes with some special CSS properties that can be overridden inside the styles. Examples are default values.

<br>### \`--ojp-accordion-item--animation-speed\`
Animation speed of accordion item toggle (panel height, opacity AND icon rotate)

>  **Usage**: \`--ojp-accordion-item--animation-speed: 0.35s;\`

<br>### \`--ojp-accordion-item--header-padding-block\`
Top/bottom padding on accordion item header

>  **Usage**: \`--ojp-accordion-item--header-padding-block: var(--space-xs-s);\`

<br>### \`--ojp-accordion-item--hover-opacity\`
Opacity of header on hover (header and icon)

>  **Usage**: \`--ojp-accordion-item--hover-opacity: 0.5;\`

<br>### \`--ojp-accordion-item--icon-stroke-width\`
Stroke width of caret icon

>  **Usage**: \`--ojp-accordion-item--icon-stroke-width: 3px;\`
> **NOTE:** Defaults to \`2px\` on screens >= 768px.

<br>### \`--ojp-accordion-item--icon-width\`
Width of caret icon

>  **Usage**: \`--ojp-accordion-item--icon-width: var(--space-s-m);\`

<br>### \`--ojp-accordion-item--max-content-width\`
Max width of header content AND panel content

>  **Usage**: \`--ojp-accordion-item--max-content-width: 100%;\`
> **NOTE:** Defaults to \`75%\` on screens >= 1024px.

<br>### \`--ojp-accordion-item--icon-width\`
Width of caret icon

>  **Usage**: \`--ojp-accordion-item--icon-width: var(--space-s-m);\`


<br>### \`--ojp-accordion-item--padding-inline\`
L/R padding on accordion item (header and panel)

>  **Usage**: \`--ojp-accordion-item--padding-inline: var(--space-s-m);\`


<br>### \`--ojp-accordion-item--panel-padding-block\`
Top/bottom padding on accordion item panel

>  **Usage**: \`--ojp-accordion-item--panel-padding-block: var(--space-2xs-xs);\`


<br>### \`--ojp-accordion-item--separator-line-width\`
Stroke width of line separating each accordion item

>  **Usage**: \`--ojp-accordion-item--separator-line-width: 1px;\`

<br>### \`--ojp-accordion-item--separator-line-color\`
Stroke color of line separating each accordion item

>  **Usage**: \`--ojp-accordion-item--separator-line-color: #BABABA;\`

<br><br>
            `
            }
        }
    },
    argTypes: {
        open: {
            control: { type: 'boolean' },
            name: 'open',
            description: 'Is the accordion open?',
        },
        anchorID: {
            control: { type: 'text' },
            name: 'anchor-id',
            description: 'The identifier for individual anchor tags'
        }
    },
    docs: {
        description: {
            story: 'This is Accordion text'
        }
    }

}

const TemplateAccordion = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->

  <!-- Start component code -->
  <ojp-row>
  <ojp-col span="10" start="2">
      <ojp-accordion-item ${args.open?'open':''} anchor-id=${args.anchorID}>
        <span slot="header">open accordion element</span>
        <div slot="panel">Item no 1 panel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </ojp-accordion-item>
  </ojp-col>
  </ojp-row>
`;

export const OjpAccordion = TemplateAccordion.bind({});
OjpAccordion.args = {
    open: '',
    anchorID: 'test-anchor-url',
    // index: '1'
}
