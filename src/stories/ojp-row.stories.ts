export default {
    title: 'Components/Grid/OjpRow',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `
                
# Description:
The \`<ojp-row>\` element will create a 12-column grid. The \`<ojp-row>\` must contain a child \`<ojp-col>\` element. 

# Attributes: 
The \`<ojp-row>\` element comes with a few options that developers can use to customize the implementation.
- cols
    - mcols
    - tcols
    - dcols
- align
- justify
- fullbleed

## "cols":
This number value specifies the number of columns the \`<ojp-row>\` element will span.

> **Usage**:
\`<ojp-row cols="4">\` will render a row element spanning 4 columns.

### NOTE: The \`mcols/tcols/dcols\` attributes will override the default \`cols\` value.

## "mcols":
This number value specifies the number of columns the \`<ojp-row>\` element will span on mobile screens.

> **Usage**:
\`<ojp-row mcols="12">\` will render a row element spanning 12 columns on small viewports.

## "tcols":
This number value specifies the number of columns the \`<ojp-row>\` element will span on tablet screens.

> **Usage**:
\`<ojp-row tcols="6">\` will render a row element spanning 6 columns on tablet-sized viewports.

## "dcols":
This number value specifies the number of columns the \`<ojp-row>\` element will span on desktop screens.

> **Usage**:
\`<ojp-row dcols="4">\` will render a row element spanning 4 columns on large viewports.


## "align":
This attribute specifies the alignment of the content.

> **Usage**:
\`<ojp-row align="end">\` will render an element aligned to the end of its parent.
          

#### Other values:
- \`stretch\`
- \`center\`
- \`start\`
            

## "justify"
            
This option specifies the justification of the content.
      

> **Usage**:
\`<ojp-row justify="start">\` will justify an element's content to the start of its parent.

#### Other values:
- \`stretch\`
- \`center\`
- \`end\`
            

## "fullbleed"

This boolean option specifies if the content “bleeds” to the very edges of the page, with no page padding or gutters around full-bleed sections.
            
> **Usage**:
\`<ojp-row fullbleed>\` will render an element that bleeds across the page width. To remove it, simply use \`<ojp-row>\`.
   

# Custom CSS Properties:

The \`<ojp-row>\` element comes with some special CSS properties that can be overriden inside the styles.

- row column gap
- row row gap
- maximum wrapper width

## "--ojp-row--col-gap":
The \`--ojp-row--col-gap\` attribute lets developers override the grid column gap, which **defaults to Utopia spacer \`--space-2xs-xs\`**.

> **Usage**:
\`<style>.my-element{--ojp-row--col-gap: 20px;}</style>\` will change the column gap of \`my-element\` to 20px.

## "--ojp-row--row-gap":
The \`--ojp-row--row-gap\` attribute lets developers override the grid row gap, which **defaults to Utopia spacer \`--space-2xs-xs\`**.

> **Usage**:
\`<style>.my-element{--ojp-row--row-gap: 30px;}</style>\` will change the row gap of \`my-element\` to 30px.

## "--ojp-row--margin-inline":
The \`--ojp-row--margin-inline\` attribute lets developers override the inline margin between rows, which **defaults to Utopia spacer \`--space-xs-s\`**.
**NOTE:** First and only child rows will automatically have **top margin of zero**. Last and only child rows will automatically have a **bottom margin of zero**.

> **Usage**:
\`<style>.my-element{--ojp-row--margin-inline: 30px;}</style>\` will change the inline margin of \`my-element\` to 30px.

## "--ojp-row--row-gutter":
The \`--ojp-row--row-gutter\` attribute lets developers override the minimum gutter width on the row, which **defaults to Utopia spacer \`--space-s-3xl\`**.
**NOTE:** Using the \`fullbleed\` attribute will set \`--ojp-row--row-gutter\` to \`0\`.

> **Usage**:
\`<style>.my-element{--ojp-row--row-gutter: 30px;}</style>\` will change the inline margin of \`my-element\` to 30px.

## "--ojp-row--max-wrapper-width":
The \`--ojp-row--max-wrapper-width\` attribute lets developers override the max width of the grid wrapper *(excluding gutters)* which **defaults to 1600px**.

> **Usage**:
\`<style>.my-element{--ojp-row--max-wrapper-width: 1440px;}</style>\` will change the max width of the wrapper \`my-element\` to 1440px.

`
            }
        }
    },
    argTypes: {
        cols: {
            name: 'cols',
            control: 'number',
            description: 'Number of Columns in Grid',
            defaultValue: 12,
        },
        // COMMENTING THESE OUT FOR EXAMPLE CLARITY
        // mcols: {
        //     name: 'mcols',
        //     control: 'number',
        //     description: 'Override number of Columns in Grid - mobile',
        //     defaultValue: 12,
        // },
        // tcols: {
        //     name: 'tcols',
        //     control: 'number',
        //     description: 'Override number of Columns in Grid - tablet',
        //     defaultValue: 12,
        // },
        // dcols: {
        //     name: 'dcols',
        //     control: 'number',
        //     description: 'Override number of Columns in Grid - desktop',
        //     defaultValue: 12,
        // },
        fullbleed: {
            name: 'fullbleed',
            control: 'boolean',
            description: 'When true, removes outer gutter padding'
        },
    },
}

// This creates the HTML markup for our example.
// including some styling to allow for some options.
const TemplateRow = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>
  ojp-row {
    border: 4px dashed blue;
  }

  ojp-col {
    height: 300px;
    background-color: red;
    border: 3px dashed green;
  }
  .rectangle {
    height: 100%;
    background-color: hotpink;
  }
  </style>
  
  <!-- Start component code -->
  <ojp-row cols='${args.cols}' ${args.fullbleed?'fullbleed':''}>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>
    <ojp-col>
        <div class="rectangle"></div>
    </ojp-col>  
  </ojp-row>
  `;


export const OjpRow = TemplateRow.bind({});
OjpRow.args = {
    cols: 12,
    // mcols: '',
    // tcols: '',
    // dcols: '',
    align: 'stretch',
    justify: 'stretch',
    fullbleed: true
}








