export default {
  title: 'Components/Card/OjpCard',
  // this defines the available parameters that can be tweaked in the story
  parameters: {
    docs: {
      description: {
        component: `
# Description:
The \`<ojp-card>\` element will render a simple content card. Any content can be added to the card element.

# Usage:
Simply use the \`<ojp-card>\` element and fill it with content.
\`
<ojp-card ishorizontal="true" class="card">
  <ojp-image
    slot="card-content-one"
    class="ojp-card--image"
    src="/assets/placeimg_1000_500_nature.jpg"
    alt="Descriptive text">
  </ojp-image>
  <div slot="card-content-two" class="card-content--two">
    <div class="card--text">
      <h3>Card Content Two</h3>
      <p>Card Content two with extra text. Project dev can override any ojp-image vars in their style sheet like this:</p>
    </div>
    <button href='../ojp-image/index.html'>Check out this image component</button>
  </div>
</ojp-card>
\`

### Slots:
The card element uses \`slots\` to place content properly in the component tree. These slots have have names to allow for specifying slot outputs, and they can be used as follows.

## \`slot="card-content-one"\`
This is the slot name given to the first section. This will be placed on top or to the left if ishorizontal is true.
## \`slot="card-content-two"\`
This is the slot name given to the second section and will be place underneath or to the right if ishorizontal is true.

<br>`
      }
    }
  },
  argTypes: {
    src: {
      name: 'ishorizontal',
      description: 'Change layout to side by side',
      type: { name: 'bool', required: false },
      defaultValue: { summary: "false" },
      control: { type: 'text' }
    }
  },
  docs: {
    description: {
      story: 'This is text'
    }
  }

}

const TemplateCard = (args) => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  <style>

  </style>

  <!-- Start component code -->

<ojp-card class="card">
  <ojp-image
    slot="card-content-one"
    class="ojp-card--image"
    src="https://via.placeholder.com/600x300"
    alt="trees in the fog">
  </ojp-image>
  <div slot="card-content-two" class="card-content--two">
    <div class="card--text">
      <h3>Card Content Two</h3>
      <p>Card Content two with extra text. Project dev can override any ojp-image vars in their style sheet like this:</p>
    </div>
    <button href='../ojp-image/index.html'>Check out this image component</button>
  </div>
</ojp-card>
`;

export const OjpCard = TemplateCard.bind({});
