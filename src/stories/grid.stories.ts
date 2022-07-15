export default {
    // this creates a 'Components' folder and a OjpRow subfolder
    title: 'Components/Grid',
    // this defines the available parameters that can be tweaked in the story
    argTypes: {

    },
    parameters: {
        docs: {
            description: {
                component: `


### Description
The \`<ojp-row>\` and \`<ojp-col>\` tags are used to implement a grid inside the markup.

Use the \`<ojp-row>\` element to define a rows in the grid and use the \`<ojp-col>\` element to define columns in the grid layout.

By default, the \`<ojp-row>\` will create a 12-column grid, and the \`<ojp-col>\` tag will implement one full-width column.

>#### Note: Each \`<ojp-row>\` element should contain a child \`<ojp-col>\` element. Without this hierarchy, the pattern might appear broken.

### Examples:

`
            }
        }
    },

}


const TemplateGrid = () => `
  <!-- Style tag is shown here as an example only. -->
  <!-- Individual projects will implement their own styling. -->
  
  <!-- Start component code for layout 1 -->
    <style>
    ojp-row {
        border: 4px black dashed;
    }

    .background-rectangle1 {
        background-color: lightgreen;
        --ojp-row--col-gap: 30px;
    }

    .rectangle1 {
        height: 300px;
        background-color: #0D99FF;
    }
    </style>

    <h2>Layout Example 1</h2>
    <ojp-row class="background-rectangle1" cols="3" fullbleed>
        <ojp-col class="rectangle1"></ojp-col>
        <ojp-col class="rectangle1"></ojp-col>
        <ojp-col class="rectangle1"></ojp-col>
    </ojp-row>
  
    <br>
    <br>
  
  <!-- Start component code for layout 2 -->
    <style>
    .background-rectangle2 {
        background-color: green;
        --ojp-row--col-gap: 0px;
    }

    .rectangle2-left {
        background-color: green;
        --ojp-row--row-gap: 40px;
    }

    .rectangle2-right {
        background-color: blue;
    }

    .yellow-rectangle2 {
        height: 50px;
        background-color: yellow;
        margin-bottom: 10px;
        border-radius: 4px;
    }

    .yellow-rectangle2:last-of-type {
        margin-bottom: 0;
    }

    .purple-rectangle2 {
        height: 50%;
        background-color: #9747FF;
    }

    .red-rectangle2 {
        height: 50%;
        background-color: #F24822;
    }

    </style>

    <h2>Layout Example 2</h2>
    <ojp-row class="background-rectangle2" fullbleed>
        <ojp-col cols="4" span="4" class="rectangle2-left">
            <div class="yellow-rectangle2"></div>
            <div class="yellow-rectangle2"></div>
            <div class="yellow-rectangle2"></div>
            <div class="yellow-rectangle2"></div>
            <div class="yellow-rectangle2"></div>
        </ojp-col>
        <ojp-col cols="8" span="8" class="rectangle2-right">
            <div class="purple-rectangle2"></div>
            <div class="red-rectangle2"></div>
        </ojp-col>
    </ojp-row>

    <br>
    <br>

    <!-- Start component code for layout 2 -->
    <style>

    .circleexample {
        background-color: blue;
        border-radius: 50%;
    }

    .background-rectangle3 {
        background-color: #F24822;
        --ojp-row--col-gap: 0px;
        height: 300px;
        padding: 10px;
    }

    .green-rectangle3 {
        background-color: #14AE5C;
        border-radius: 4px;
    }

    .yellow-circle3 {
        background-color: yellow;
        border-radius: 50%;
        margin: auto;
        width: 75%;
        height: 75%;
    }

    .green-rectangle-horizontal3 {
        background-color: #14AE5C;
        border-radius: 4px;
        margin: auto;
        height: 50%;
        width: 100%;
    }

    </style>

    <h2>Layout Example 3</h2>
    <ojp-row class="background-rectangle3" fullbleed>
        <ojp-col class="green-rectangle3" span="1"></ojp-col>
        <ojp-col class="yellow-circle3" start="5" span="4" align="center"></ojp-col>
        <ojp-col class="green-rectangle-horizontal3" start="9" span="4" align="center"></ojp-col>
    </ojp-row>




    
  `;

export const GridLayout = TemplateGrid.bind({});
GridLayout.args = {

}

GridLayout.parameters = {
    docs: {
        description: {
            story: 'This is Grid text'
        }
    }
}