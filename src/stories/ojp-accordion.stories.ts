export default {
    title: 'Components/Accordion/OjpAccordion',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
# Description:
The \`<ojp-accordion>\` element will render a simple accordion. Items can be added to the accordion using the \`<ojp-accordion-item>\` element.

# Usage:
Implement the accordion using \`<ojp-accordion>\`, \`<ojp-accordion-item>\` referring to the following example.

\`
<ojp-accordion-item  anchor-id=test-anchor-url>
<span slot="header">open accordion element</span>
<div slot="panel">Item no 1 panel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</ojp-accordion-item>
\`

### Slots:
The accordion element uses \`slots\` to place content properly in the component tree. These slots have have names to allow for specifying slot outputs, and they can be used as follows.

## \`slot="header"\`
This is the slot name given to the header section of the accordion item. This will be the text next to the icon.
## \`slot="panel"\`
This is the slot name given to the panel/content section of the accordion item. This will be the content under the header section.

> ### These can be used to specify which section of your markup is the \`header\` or the \`panel\` section.

<br>

## *Element*: \`<ojp-accordion>\`

# Attribute:
The \`<ojp-accordion>\` element comes with an option that developers can use to customize the implementation.

## "allow-multiple-items-open":

This option specifies if an accordion can allow multiple items to be open at the same time. Can be modified by adding the keyphrase "allow-multiple-items-open" or removing it from the element parameters.

>  **Usage**:
\`<ojp-accordion allow-multiple-items-open>\`


# Non-modifiable Method (cannot be modified through props):
The \`<ojp-accordion>\` element comes with a method that developers can use to modify the behavior of the accordion.

## "toggleAll":

This method allows users to toggle all items of an accordion. This method can be triggered from a button.

### NOTE: This kind of accordion must have the "allow-multiple-items-open" attribute set.

**Usage**:
\`const myAccordion = document.getElementById('my-accordion');
myAccordion.toggleAll();\`

<br>

## *Element*: \`<ojp-accordion-item>\`

# Attributes:
The \`<ojp-accordion-item>\` element comes with options that developers can use to customize the implementation.

## "anchor-id":

This optional attribute for \`<ojp-accordion-item>\` specifies an alphanumeric, user-defined string. It can be used to auto-open an accordion item with the url parameters.

>  **Usage**:
\`<ojp-accordion-item anchor-id="custom-anchor-id">\`

## "open":

This option specifies the state of an accordion item on page load, and can be modified by adding the keyword "open" or removing it from the element parameters.

>  **Usage**:
\`<ojp-accordion-item open>\`

# Non-modifiable Attributes:

## "index":

This auto-generated attribute specifies the index of an accordion item (from top to bottom).

>  **Example**:
\`<ojp-accordion index=3>\`


# Non-modifiable Methods (cannot be modified through props):
The \`<ojp-accordion-item>\` element comes with some methods that developers can use to modify the behavior of the accordion items.

> **NOTE**: All the methods will return a \`Promise<void>\`

## "closeItem()":

This method allows users to close an accordion item.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.closeItem();\`

## "openItem()":

This method allows users to open an accordion item.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.openItem();\`


## "toggleItem()":

This method allows users to toggle the open/closed state an accordion item. By default, the \`accordion item arrow\` and the \`header text\` are bound to this method.

**Usage**:
\`const myAccordionItem = document.getElementById('my-accordion-item');
myAccordionItem.toggleItem();\`

# Events:
The event \`stateChangeEvent\` is triggered when this item is opened. You can listen to this even in your javascript to be notified when this item is opened or closed."

> **Usage**:

\`const myAccordionItem = document.getElementById("my-accordion-item");
myAccordionItem.addEventListener('stateChangeEvent', event => {
    //do something
});                \`

The event \`elementIsVisibleEvent\` is triggered when the element is visible in the viewport."

> **Usage**:

\`const myElement = document.getElementById("my-element");
myElement.addEventListener('elementIsVisibleEvent', event => {
    //do something
    console.log('My accordion is now visible');
    console.log('IntersectionObserverEntry', event.detail);
});                \`

The event \`elementIsInvisibleEvent\` is triggered when the element is no longer visible in the viewport."

> **Usage**:

\`const myElement = document.getElementById("my-element");
myElement.addEventListener('elementIsInvisibleEvent', event => {
    //do something
    console.log('My accordion is now invisible');
    console.log('IntersectionObserverEntry', event.detail);
});                \`
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
  <style>
      ojp-row {
        border: 4px dashed crimson;
      }

  </style>

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
