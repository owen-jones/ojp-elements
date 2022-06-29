export default {
  // this creates a 'Components' folder and a OjpRow subfolder
  title: 'Components/OjpRow',
  // this defines the available parameters that can be tweaked in the story
  argTypes: {
    // cols: {
    //   control: 'number',
    //   description: 'Number of Columns',
    //   defaultValue: 12,
    // },
    align: {
      options: ['stretch', 'start', 'end', 'center', ],
      defaultValue: 'stretch',
      control: { type: 'radio' },
      description: 'Align Items property'
    },
    justify: {
      options: ['stretch', 'start', 'end', 'center', ],
      control: { type: 'radio' },
      defaultValue: 'stretch',
      description: 'Justify Items property'
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
  align='${args.align}'
  justify='${args.justify}'
>
<ojp-col span="6"><img src="https://source.unsplash.com/random/100×200"></ojp-col>
<ojp-col span="6"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?</p></ojp-col>
</ojp-row>
`;

export const OjpRow = Template.bind({});
OjpRow.args = {
  // cols: 12,
  align: 'stretch',
  justify: 'stetch'
}
