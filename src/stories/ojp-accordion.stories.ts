export default {
    title: 'Components/Accordion/OjpAccordion',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
# Description:
The \`<ojp-accordion>\` element will render a simple accordian. 
                
# Attributes:   
The \`<ojp-accordion>\` element comes with a few options that developers can use to customize the implementation.

- \`anchor-id\`
- \`index\`
- \`open\`
- \`allow-multiple-items-open\`


## "anchor-id":

This optional attribute specifies an alphanumeric, user-defined string. It can be used to auto-open an accordion item with the url parameters.
                  
>  **Usage**:
\`<ojp-accordion anchor-id="custom-anchor-id">\`.


## "index":

This option specifies the index of an accordion item (from top to bottom).
                  
>  **Usage**:
\`<ojp-accordion index=?>\`.


## "open":

This option specifies the state of an accordion item on page load, and can be modified by adding the keyword "open" or removing it from the element parameters.
                  
>  **Usage**:
\`<ojp-accordion open>\`.


## "allow-multiple-items-open":

This option specifies if an accordion can allow multiple items to be open at the same time. Can be modified by adding the keyphrase "allow-multiple-items-open" or removing it from the element parameters.
                  
>  **Usage**:
\`<ojp-accordion allow-multiple-items-open>\`.


# Methods:   
The \`<ojp-accordion>\` element comes with some methods that developers can use to modify the behavior of the accordian.

- \`closeItem()\`
- \`openItem()\`
- \`toggleItem()\`
- \`toggleAll()\`

#### NOTE: All the methods will return a \`Promise<void>\`
    
## "closeItem()":

This method allows users to close an accordion item.
                  
>  **Usage**:
\`<ojp-accordion index=?>\`.


## "openItem()":

This method allows users to open an accordion item.
                  
>  **Usage**:
\`<ojp-accordion index=?>\`.


## "toggleItem()":

This method allows users to toggle the open/closed an accordion item. The \`accordian item arrow\` and the \`header text\` are bound to this method.

## "toggleAll":

This method allows users to toggle all items of an accordion. This method can be triggered from a button.
                  
>  **Usage**:
\`<button class="toggle" onClick="toggleAll()">\`.

                
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
        anchordID: {
            control: { type: 'string' },
            name: 'anchorID',
            description: 'The identifier for individual anchor tags'
        }
    },
    docs: {
        description: {
            story: 'This is Accordian text'
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
      <ojp-accordion-item ${args.open?'open':''}>
        <span slot="header">open accordion element</span>
        <div slot="panel">Item no 1 panel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </ojp-accordion-item>
  </ojp-col>
  </ojp-row>
`;

export const OjpAccordion = TemplateAccordion.bind({});
OjpAccordion.args = {
    open: '',
    anchordID: 'test',
    index: '1'
}