export default {
    title: 'Components/Modal/OjpModal',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
# Description:
The \`<ojp-modal>\` element will render a simple modal. Content can be added to the modal using the \`<div slot="content">\` element.

# Usage:
Implement the modal using \`<ojp-modal>\` referring to the following example.

\`
<ojp-modal>
\`

### Slots:
The modal element uses \`slots\` to place content properly in the component tree. These slots have have names to allow for specifying slot outputs, and they can be used as follows.

## \`slot="close-icon"\`
This is the slot name given to the close icon section of the modal. Defaults to a simple, unstyled X svg.
## \`slot="content"\`
This is the slot name given to the panel/content section of the modal. This will be the content under the 'slot-container' section.

> ### These can be used to specify which section of your markup is the \`close-icon\` or the \`content\` section.

<br>

## *Element*: \`<ojp-modal>\`

# Attribute:
The \`<ojp-modal>\` element comes with an option that developers can use to customize the implementation.

## "closebuttonoutside":

This option specifies the state of the modal's close icon on page load, and can be modified by adding the keyword "closebuttonoutside" or removing it from the element parameters.

>  **Usage**:
\`<ojp-modal closebuttonoutside>\`

# Non-modifiable Attributes:

\` \`


# Non-modifiable Methods (cannot be modified through props):
The \`<ojp-modal>\` element comes with some methods that developers can use to modify the behavior of the modal.



> **NOTE**: All the methods will return a \`Promise<void>\`

## "closeModal()":

This method closes the modal. The function is triggered on 1. Clicking the close button 2. Clicking outside the modal 3. Clicking the escape key while the modal is open. The functionality is handled under the hood.

## "openModal()":

This method allows users to open a modal.

**Usage**:
\`const myModalButton = document.getElementById('button-to-trigger-modal');
const myModal = document.getElementById('my-modal');
myModalButton.addEventListener('click', event => {
    myModal.openModal();
}\`


# Events:
The event \`open\` is triggered when this modal is opened. You can listen to this in your JavaScript to be notified when this item is opened.

> **Usage**:

\`const myModal = document.getElementById("my-modal");
myModal.addEventListener('open', event => {
    //do something
});                \`

The event \`close\` is triggered when this modal is closed. You can listen to this in your JavaScript to be notified when this item is closed.

> **Usage**:

\`const myModal = document.getElementById("my-modal");
myModal.addEventListener('close', event => {
    //do something
});                \`


# Custom CSS Properties:

The \`<ojp-modal>\` element comes with some special CSS properties that can be overriden inside the styles. Examples are default values.

## "--ojp-modal--padding-inline":
Specifies the horizontal distance of the inset content from the edges of the modal.

>  **Usage**: \`--ojp-modal--padding-inline: var(--space-s-3xl);\`

## "--ojp-modal--padding-top-bottom":
Specifies the vertical distance of the inset content from the edges of the modal.

>  **Usage**: \`--ojp-modal--padding-top-bottom: var(--space-2xl);\`

## "--ojp-modal--close-icon-margin":
Specifies the distance of the close icon from the corner of the modal. User-specified value overrides a top and right margin.

>  **Usage**: \`--ojp-modal--close-icon-margin: var(--space-s-m);\`

## "--ojp-modal--outer-horizontal-padding":
Specifies the horizontal distance between the edge of the screen and the edge of the modal. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--outer-horizontal-padding: 0;\`

## "--ojp-modal--outer-vertical-padding":
Specifies the vertical distance between the edge of the screen and the edge of the modal. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--outer-vertical-padding: 0;\`

## "--ojp-modal--inner-vertical-padding":
Specifies the vertical distance between the edge of the modal and the top edge of the inner content. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--inner-vertical-padding: 0;\`

## "--ojp-modal--panel-border-radius":
Specifies the border radius of the modal panel.

>  **Usage**: \`--ojp-modal--panel-border-radius: 15px;\`

## "--ojp-modal--close-icon-height":
Specifies the height of the close icon.

>  **Usage**: \`--ojp-modal--close-icon-height: 44px;\`

## "--ojp-modal--close-icon-width":
Specifies the width of the close icon.

>  **Usage**: \`--ojp-modal--close-icon-width: 44px;\`

## "--ojp-modal--panel-color":
Specifies the color of the modal panel.

>  **Usage**: \`--ojp-modal--panel-color: #fff;\`

## "--ojp-modal--overlay-color":
Specifies the color of the dark overlay for the modal.

>  **Usage**: \`--ojp-modal--overlay-color: rgba(0, 0, 0, 0.6); \`
                `
            }
        }
    },
    argTypes: {
        closebuttonoutside: {
            control: { type: 'boolean' },
            name: 'closebuttonoutside',
            description: 'Is the modal close icon outside the modal?',
        }
    },
    docs: {
        description: {
            story: 'This is Modal text'
        }
    }

}

const TemplateModal = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
      

  </style>

  <!-- Start component code -->
  <ojp-row>
  <ojp-col span="10" start="2">
  <button id="my-modal-button">Open Modal</button>
     <ojp-modal id="my-demo-modal" ${args.closebuttonoutside?'closebuttonoutside':''}>
      <div slot="content">
      Test text
      </div>
     </ojp-modal>
  </ojp-col>
  </ojp-row>

  <script>
  let myDemoModal = document.querySelector('#my-demo-modal');
  let openDemoModalButton = document.querySelector("#my-modal-button");

  openDemoModalButton.addEventListener('click', () => {
      myDemoModal.openModal();
    });
  </script>
  `;

export const OjpModal = TemplateModal.bind({});
OjpModal.args = {
    closebuttonoutside: '',
}
