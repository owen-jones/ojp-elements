export default {
  title: 'Components/Image/OjpImage',
  // this defines the available parameters that can be tweaked in the story
  parameters: {
    docs: {
      description: {
        component: ``
      }
    }
  },
  argTypes: {
    src: {
      name: 'src',
      description: 'The image src',
      type: { name: 'string', required: true },
      defaultValue: { summary: "https://via.placeholder.com/600x300" },
      control: { type: 'text' }
    }
  },
  docs: {
    description: {
      story: 'This is text'
    }
  }

}

const TemplateImage = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>

  </style>

  <!-- Start component code -->
    <ojp-row>
        <ojp-col>
            <ojp-image src="${args.src}"/>
        </ojp-col>
    </ojp-row>
`;

export const OjpImage = TemplateImage.bind({});
OjpImage.args = {
  src: "https://via.placeholder.com/600x300",
}
