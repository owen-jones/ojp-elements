export default {
    title: 'Components/Grid/OjpCol',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
# Description:
The \`<ojp-col>\` element will create columns inside the \`<ojp-row>\` element. 
                
# Attributes:   
The \`<ojp-col>\` element comes with a few options that developers can use to customize the implementation.

- span
    - mspan
    - tspan
    - dspan
- start
    - mstart
    - tstart
    - dstart

## "span":

This text option specifies how many columns this element will span. This value defaults to 12.
                  
>  **Usage**:
\`<ojp-col span="6">\` will render an element spanning 6 columns.

### NOTE: The \`mspan/tspan/dspan\` attributes will override the default \`span\` value.

> **Usage**:
\` <ojp-col span="12">\` is equivalent to \`<ojp-col mspan="12" tspan="12" dspan="12">\`

## "start":          
This text option specifies where this element will begin.           
                
> **Usage**:
\`<ojp-col start="6">\` will render an element starting from column 6.

### NOTE: The \`mstart/tstart/dstart\` attributes will override the default \`start\` value.

> **Usage**:
\` <ojp-col start="12">\` is equivalent to \`<ojp-col mstart="12" tstart="12" dstart="12">\`
                
                
                `
            }
        }
    },
    argTypes: {
        start: {
            control: { type: 'number' },
            name: 'start',
            description: 'The column begins here in the grid',
        },
        span: {
            control: { type: 'number' },
            name: 'span',
            description: 'How wide this column is',
        }
    },
    docs: {
        description: {
            story: 'This is Column text'
        }
    }

}

const TemplateCol = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
      ojp-row {
        border: 4px dashed crimson;
      }

      ojp-col {
        height: 500px;
      }

      .rectangle {
        height: 100%;
        background-color: yellow;
      }
  </style>
  
  <!-- Start component code -->
    <ojp-row>
        <ojp-col start="${args.start}" span="${args.span}">
            <div class="rectangle">
            </div>
        </ojp-col>
    </ojp-row>
`;

export const OjpCol = TemplateCol.bind({});
OjpCol.args = {
    start: 1,
    span: 1
}