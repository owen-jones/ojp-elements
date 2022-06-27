export default {
  // this creates a 'Components' folder and a OjpRow subfolder
  title: 'Components/OjpRow',
  // this defines the available parameters that can be tweaked in the story
  argTypes: {
    cols: {
      control: 'number',
      description: 'Open the listbox',
    },
  }
}

// This creates the HTML markup for our example.
// including some styling to allow for some options.
const Template = (args) => `
<!-- Style tag is shown here as an example only. -->
<!-- Individual projects will implement their own styling. -->
<style>
  ojp-row {
    border: 1px dashed hotpink;

  }

</style>

<!-- Start component code -->
<ojp-row cols='${args.cols ? args.cols : 12}'>
<h2>Any content can go here</h2>
</ojp-row>
`;

export const OjpRow = Template.bind({});
OjpRow.args = {
  cols: 12
}
