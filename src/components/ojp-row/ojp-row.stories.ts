export default {
    // this creates a 'Components' folder and a OjpRow subfolder
    title: 'Components/Grid',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `


### Description
The <ojp-col> and <ojp-row> tags are used to implement a 12-column grid inside the markup.
Use the <ojp-col> element to define columns in the grid layout, the <ojp-row> element to define rows. By default, the <ojp-col> tag will implement one full-width column starting at the first grid position.

### Usage:

Enclosing items inside the <ojp-row> tag will place them in a full-width row.
Enclosing items inside the <ojp-col> tag will place them in an element spanning 12 columns.

#### Options: 
The <ojp-col> and <ojp-row> tags come with a few common options that developers can use to customize the implementation.
- span
- start
- align
- justify
- fullbleed


>Beware this blockquote

## "span"

This text option specifies how many columns this element will span. This value defaults to 12.

>  **Usage**:
<ojp-col span="6"> will render an element spanning 6 columns.

## "start"

This text option specifies how many columns this element will span. This value defaults to 12.

> **Usage**:
<ojp-col start="6"> will render an element starting from column 6.

## "align"

This radio option specifies how many columns this element will span. This value defaults to 12.

> **Usage**:
<ojp-col align="end"> will render an element aligned to the end of its parent.

#### Other values:
- stretch
- center
- start

## "justify"

This option specifies how many columns this element will span. This value defaults to 12.

> **Usage**:
<ojp-col span="6"> will render an element spanning 6 columns.

## "fullbleed"

This boolean option specifies how many columns this element will span. This value defaults to 12.

> **Usage**:
<ojp-col span="6"> will render an element spanning 6 columns.
`
            }
        }
    },
    argTypes: {
      cols: {
        name: 'ojp-row | cols',
        control: 'number',
        description: 'Number of Columns in Grid',
        defaultValue: 12,
      },
      mcols: {
        name: 'ojp-row | mcols',
        control: 'number',
        description: 'Number of Columns in Grid - mobile',
        defaultValue: 12,
      },
      tcols: {
        name: 'ojp-row | tcols',
        control: 'number',
        description: 'Number of Columns in Grid - tablet',
        defaultValue: 12,
      },
      dcols: {
        name: 'ojp-row | tcols',
        control: 'number',
        description: 'Number of Columns in Grid - desktop',
        defaultValue: 12,
      },
      align: {
        name: 'ojp-row | align',
        options: ['stretch', 'start', 'end', 'center', ],
        defaultValue: 'stretch',
        control: { type: 'radio' },
        description: 'Align Items property'
      },
      fullbleed: {
        name: 'ojp-row | fullbleed',
        control: 'boolean'
      },
      justify: {
        name: 'ojp-row | justify',
        options: ['stretch', 'start', 'end', 'center', ],
        control: { type: 'radio' },
        defaultValue: 'stretch',
        description: 'Justify Items property'
      },
      start1: {
        name: 'Column 1 | start',
        control: 'text',
        description: 'Start of Image Column',
        defaultValue: 'auto',
      },
      span1: {
        name: 'Column 1 | span',
        control: 'text',
        description: 'Span of Image Column',
        defaultValue: 'auto',
      },
      start2: {
        name: 'Column 2 | start',
        control: 'text',
        description: 'Start of Text Column',
        defaultValue: 'auto',
      },
      span2: {
        name: 'Column 2 | span',
        control: 'text',
        description: 'Span of Text Column',
        defaultValue: 'auto',
      },
    }
  }
  
  // This creates the HTML markup for our example.
  // including some styling to allow for some options.
  const TemplateRow = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
    ojp-col {
      border: 3px dashed hotpink;
    }
  
    ::slotted(h2) {
      border: 1px solid gray;
    }
  
    img {
      object-fit: cover;
      width:100%;display:block;
      max-height: 60vh;
    }
  
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  
  </style>
  
  <!-- Start component code -->
  <ojp-row
    cols='${args.cols}'
    mcols='${args.mcols}'
    tcols='${args.tcols}'
    dcols='${args.dcols}'
    align='${args.align}'
    justify='${args.justify}'
    fullbleed='${args.fullbleed}'
  >
  <ojp-col start="${args.start1}" span="${args.span1}"><img src="https://source.unsplash.com/random/500×400"></ojp-col>
  <ojp-col start="${args.start2}" span="${args.span2}"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?</p></ojp-col>
  </ojp-row>
  `;

  const TemplateCol = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
    ojp-col {
      border: 3px dashed hotpink;
    }
  
    ::slotted(h2) {
      border: 1px solid gray;
    }
  
    img {
      object-fit: cover;
      width:100%;display:block;
      max-height: 60vh;
    }
  
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  
  </style>
  
  <!-- Start component code -->
  <ojp-row>
  <ojp-col span="12">
  <ojp-row span="12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?

  </ojp-row>
  <ojp-row span="12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?

  </ojp-row>
  </ojp-col>
  <ojp-col span="10" start="2">
  <img src="https://source.unsplash.com/random/100×200" style="object-fit: cover;width:100%;display:block;">
  </ojp-col>
  </ojp-row>
`;

  const TemplateGrid = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
    ojp-col {
      border: 3px dashed hotpink;
      background-color: yellow;
    }
  
    ::slotted(h2) {
      border: 1px solid gray;
    }
  
    img {
      object-fit: cover;
      width:100%;display:block;
      max-height: 60vh;
    }
  
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  
  </style>
  
  <!-- Start component code -->
  <ojp-row align="center" justify="center">
  <ojp-col span="4"><img src="https://source.unsplash.com/random/100×200" style="object-fit: cover;width:100%;display:block;"></ojp-col>
  <ojp-col start="8" span="8">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?
  </ojp-col>
  </ojp-row>
  `;

  export const GridLayout = TemplateGrid.bind({});
  GridLayout.args = {

    fullbleed: true
  }

  GridLayout.parameters = {

  }
  
  export const OjpRow = TemplateRow.bind({});
  OjpRow.args = {
    cols: 10,
    mcols: 12,
    tcols: 12,
    dcols: 12,
    align: 'stretch',
    justify: 'stetch',
    start1: '2',
    span1: '6',
    start2: '8',
    span2: '6',
    fullbleed: true
  }

  OjpRow.parameters = {
    docs: {
        description: {
            story: `
#### Variants:

The <ojp-row> element takes a variety of optional arguments that can be utilized to customize the implementation. The options available in each <ojp-row> element are as follows:
- cols
- mcols
- tcols
- dcols`
        }
    }
  }

  export const OjpCol = TemplateCol.bind({});
  OjpCol.args = {
    fullbleed: true
  }

  OjpCol.parameters = {
    docs: {
        description: {
            story: 'This is Column text'
        }
    }
  }


  
