export default {
  // this creates a 'Components' folder and a OjpListbox subfolder
  title: 'Components/OjpListbox',
  // this defines the available parameters that can be tweaked in the story
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Open the listbox',
    },
    activeSelectionIndex: {
      control: 'number',
      description: 'The 0-based index of the selected item'
    },
    onItemSelected: {
      action: 'item-selected',
    },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    borderColor: {
      control: 'color',
    }
  }
}

// This creates the HTML markup for our example.
// including some styling to allow for some options.
const Template = (args) => `
<!-- Style tag is shown here as an example only. -->
<!-- Individual projects will implement their own styling. -->
<style>
  ojp-listbox {
    border: 1px solid ${args.borderColor};
    border-radius: 4px;
    padding: 0 4px;
  }

  ojp-listbox::after {
    content: "^";
  }

  ojp-listbox[open]::after {
    content: "v";
  }

  ojp-listbox ul {
    border: 1px solid ${args.borderColor};
  }

  ojp-listbox li:hover {
    background-color: #aaa;
  }
</style>

<!-- Start component code -->
<ojp-listbox on-item-selected='${args.onItemSelected}' active-selection-index="${args.activeSelectionIndex}"${args.open ? ' open' : ''}>
  <ul>
    <li data-value="value-1">${args.option1}</li>
    <li data-value="value-2">${args.option2}</li>
    <li data-value="value-3">${args.option3}</li>
  </ul>
</ojp-listbox>
`;

export const OjpListbox = Template.bind({});
OjpListbox.args = {
  open: false,
  borderColor: '#333',
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
}
