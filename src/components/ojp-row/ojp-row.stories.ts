export default {
  // this creates a 'Components' folder and a OjpRow subfolder
  title: 'Components/OjpRow',
  // this defines the available parameters that can be tweaked in the story
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
const Template = (args) => `
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

export const OjpRow = Template.bind({});
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
