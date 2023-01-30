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
Implement the default modal using \`<ojp-modal>\` referring to the following example.

\`
<ojp-modal id="my-demo-modal">
        <div slot="content">
            <h1>Awesome Headline</h1>
        </div>
</ojp-modal>
\`

### Slots:
The modal element uses \`slots\` to place content properly in the component tree. These slots have have names to allow for specifying slot outputs, and they can be used as follows.

## \`slot="close-icon"\`
This is the slot name given to the close icon section of the modal. Defaults to a simple, unstyled X svg.
## \`slot="content"\`
This is the slot name given to the panel/content section of the modal. **Your custom modal needs to have a content slot to work properly.** This will be the content under the 'slot-container' section.

> ### These can be used to specify which section of your markup is the \`close-icon\` or the \`content\` section.

## Modal implementation with custom close icon:
\`
<ojp-modal>
    <div slot="close-icon" class="close-icon-1">
        <svg width="41" height="41" viewbox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.3818" cy="20.323" r="19" stroke="black" stroke-width="2" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.494 12.0133C13.1023 11.6239 12.4672 11.6239 12.0755 12.0133C11.6838 12.4026 11.6838 13.0339 12.0755 13.4232L17.4852 18.8006L19.0168 20.3229L17.4852 21.8453L12.0755 27.2227C11.6838 27.612 11.6838 28.2433 12.0755 28.6326C12.4672 29.022 13.1023 29.022 13.494 28.6326L18.9037 23.2553L20.4352 21.7329L27.2688 28.5256C27.6605 28.9149 28.2955 28.9149 28.6872 28.5256C29.0789 28.1362 29.0789 27.505 28.6872 27.1156L21.8537 20.3229L28.6872 13.5303C29.0789 13.1409 29.0789 12.5097 28.6872 12.1203C28.2955 11.731 27.6605 11.731 27.2688 12.1203L20.4352 18.913L18.9037 17.3906L13.494 12.0133Z" fill="black"/>
        </svg>
    </div>
    <div slot="content">
        <h1>Awesome Headline</h1>
    </div>
</ojp-modal>    
\`

<br>

## *Element*: \`<ojp-modal>\`

# Attribute:
The \`<ojp-modal>\` element comes with an option that developers can use to customize the implementation.

## "closebuttonoutside":

This option specifies the state of the modal's close icon on page load, and can be modified by adding the keyword "closebuttonoutside" or removing it from the element parameters.

>  **Usage**:
\`<ojp-modal closebuttonoutside>\`

# Public Methods:
The \`<ojp-modal>\` element comes with some methods that developers can use to modify the behavior of the modal.


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
Specifies the distance of the close icon from the top right corner of the modal. User-specified value overrides a top and right margin.

>  **Usage**: \`--ojp-modal--close-icon-margin: var(--space-s-m);\`

## "--ojp-modal--outer-horizontal-padding":
Specifies the horizontal distance between the edges of the screen and the edges of the modal. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--outer-horizontal-padding: 0;\`

## "--ojp-modal--outer-vertical-padding":
Specifies the vertical distance between the edges of the screen and the edges of the modal. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--outer-vertical-padding: 0;\`

## "--ojp-modal--inner-vertical-padding":
Specifies the vertical distance between the edges of the modal and the edges of the inner content. Affects tablet and larger screens.

>  **Usage**: \`--ojp-modal--inner-vertical-padding: 0;\`

## "--ojp-modal--panel-border-radius":
Specifies the border radius of the modal panel. Affects tablet and larger screens.

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

## "--ojp-modal--overflow-gradient":
Specifies the color of the top and bottom overlays for overflowing content inside the modal.

> **Usage**: \`--ojp-modal--overflow-gradient: linear-gradient(180deg, #FFFFFF 57.88%, rgba(255, 255, 255, 0) 99.99%);\`
                
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
      body {
        font-family: Sans-serif;
      }
  </style>

  <!-- Start component code -->
  <ojp-row>
    <ojp-col span="10" start="2">
        Play around with the "closebuttonoutside" control element on the Canvas page.
        <br/>
        <button id="my-modal-button" style="margin: 15px;">Open Modal</button>
        <ojp-modal id="my-demo-modal" ${args.closebuttonoutside ? 'closebuttonoutside' : ''}>
            <div slot="close-icon" class="close-icon-1">
                <svg width="41" height="41" viewbox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.3818" cy="20.323" r="19" stroke="black" stroke-width="2" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.494 12.0133C13.1023 11.6239 12.4672 11.6239 12.0755 12.0133C11.6838 12.4026 11.6838 13.0339 12.0755 13.4232L17.4852 18.8006L19.0168 20.3229L17.4852 21.8453L12.0755 27.2227C11.6838 27.612 11.6838 28.2433 12.0755 28.6326C12.4672 29.022 13.1023 29.022 13.494 28.6326L18.9037 23.2553L20.4352 21.7329L27.2688 28.5256C27.6605 28.9149 28.2955 28.9149 28.6872 28.5256C29.0789 28.1362 29.0789 27.505 28.6872 27.1156L21.8537 20.3229L28.6872 13.5303C29.0789 13.1409 29.0789 12.5097 28.6872 12.1203C28.2955 11.731 27.6605 11.731 27.2688 12.1203L20.4352 18.913L18.9037 17.3906L13.494 12.0133Z" fill="black"/>
                </svg>
            </div>
            <div slot="content">
                <h1>Awesome Headline</h1>
                Mattis pretium diam lectus euismod ullamcorper aliquam risus proin. Viverra diam placerat sed quis sagittis orci. Vitae proin eget sapien nullam. Non mattis tellus aliquet viverra nam id dignissim maecenas volutpat. Commodo commodo augue mi ut tincidunt euismod et luctus. Lobortis sed montes pulvinar adipiscing faucibus. A vitae venenatis natoque massa ut velit. Ac proin sit iaculis elit est in purus tempus. A semper ullamcorper eleifend nulla. In scelerisque eros ultricies duis nibh tortor semper tempor in. Sapien nisi ullamcorper ut laoreet felis mauris risus lectus quis. Egestas risus nunc amet tristique. Nullam lectus fermentum sit mattis scelerisque semper aenean libero. Nibh id pretium convallis fermentum at amet gravida sed. Adipiscing lorem non nibh phasellus eget eget mattis. Lectus Mattis pretium diam lectus euismod ullamcorper aliquam risus proin. Viverra diam placerat sed quis sagittis orci. Vitae proin eget sapien nullam. Non mattis tellus aliquet viverra nam id dignissim maecenas volutpat. Commodo commodo augue mi ut tincidunt euismod et luctus. Lobortis sed montes pulvinar adipiscing faucibus. A vitae venenatis natoque massa ut velit. Ac proin sit iaculis elit est in purus tempus. Mattis pretium diam lectus euismod ullamcorper aliquam risus proin. Viverra diam placerat sed quis sagittis orci. Vitae proin eget sapien nullam. Non mattis tellus aliquet viverra nam id dignissim maecenas volutpat. Commodo commodo augue mi ut tincidunt euismod et luctus. Lobortis sed montes pulvinar adipiscing faucibus. A vitae venenatis natoque massa ut velit. Ac proin sit iaculis elit est in purus tempus. Mattis pretium diam lectus euismod ullamcorper aliquam risus proin. Viverra diam placerat sed quis sagittis orci. Vitae proin eget sapien nullam. Non mattis tellus aliquet viverra nam id dignissim maecenas volutpat. Commodo commodo augue mi ut tincidunt euismod et luctus. Lobortis sed montes pulvinar adipiscing faucibus. A vitae venenatis natoque massa ut velit. Ac proin sit iaculis elit est in purus tempus. A semper ullamcorper eleifend nulla. In scelerisque eros ultricies duis nibh tortor semper tempor in. Sapien nisi ullamcorper ut laoreet felis mauris risus lectus quis. Egestas risus nunc amet tristique. Nullam lectus fermentum sit mattis scelerisque semper aenean libero. Nibh id pretium convallis fermentum at amet gravida sed. Adipiscing lorem non nibh phasellus eget eget mattis. Lectus A semper ullamcorper eleifend nulla. In scelerisque eros ultricies duis nibh tortor semper tempor in. Sapien nisi ullamcorper ut laoreet felis mauris risus lectus quis. Egestas risus nunc amet tristique. Nullam lectus fermentum sit mattis scelerisque semper aenean libero. Nibh id pretium convallis fermentum at amet gravida sed. Adipiscing lorem non nibh phasellus eget eget mattis. Lectus A semper ullamcorper eleifend nulla. In scelerisque eros ultricies duis nibh tortor semper tempor in. Sapien nisi ullamcorper ut laoreet felis mauris risus lectus quis. Egestas risus nunc amet tristique. Nullam lectus fermentum sit mattis scelerisque semper aenean libero. Nibh id pretium convallis fermentum at amet gravida sed. Adipiscing lorem non nibh phasellus eget eget mattis. Lectus
                <button>Hello</button>
            </div>
        </ojp-modal>
    </ojp-col>
  </ojp-row>

  <script>
    document.querySelector("#my-modal-button").addEventListener('click', () => {
        document.querySelector('#my-demo-modal').openModal();
    });
  </script>
  `;

export const OjpModal = TemplateModal.bind({});
OjpModal.args = {
    closebuttonoutside: false,
}
