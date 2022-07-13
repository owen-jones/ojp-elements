export default {
    // this creates a 'Components' folder and a OjpRow subfolder
    title: 'Components/Grid',
    // this defines the available parameters that can be tweaked in the story
    parameters: {
        docs: {
            description: {
                component: `


### Description
The <code><ojp-col></code> and <code><ojp-row></code> tags are used to implement a grid inside the markup.
Use the <code><ojp-col></code> element to define columns in the grid layout, the <code><ojp-row></code> element to define rows. By default, the <code><ojp-col></code> tag will implement one full-width column starting at the first grid position.

### Usage:

Enclosing items inside the <code><ojp-row></code> tag will place them in a full-width row.
Enclosing items inside the <code><ojp-col></code> tag will place them in the grid layout.

>#### Note: Each <code><ojp-row></code> element should contain a child <code><ojp-col></code> element. Without this hierarchy, the pattern might appear broken.

`
            }
        }
    },

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
  <ojp-col start="${args.start1}" span="${args.span1}">Row<img src="https://source.unsplash.com/random/500×400"></ojp-col>
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
  <ojp-row
  cols='${args.cols}'
  mcols='${args.mcols}'
  tcols='${args.tcols}'
  dcols='${args.dcols}'
  align='${args.align}'
  justify='${args.justify}'
  fullbleed='${args.fullbleed}'
>
<ojp-col start="${args.start1}" span="${args.span1}">Row<img src="https://source.unsplash.com/random/500×400"></ojp-col>
<ojp-col start="${args.start2}" span="${args.span2}"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores minus dicta at aspernatur obcaecati? Quia adipisci aliquam placeat quos, incidunt sapiente quisquam, enim, omnis eius in sed consequatur repellendus?</p></ojp-col>
</ojp-row>
`;

const TemplateGrid = () => `
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

    .circleexample {
        radius: 50%;
    }
  
  </style>
  
  <!-- Start component code for layout 1 -->
    <ojp-row align="stretch">
        <ojp-col span="4">
        Ugh mustache hoodie woke selfies chartreuse. Chambray shabby chic scenester schlitz readymade, vape vaporware af. VHS tonx meh banjo quinoa. Art party schlitz 3 wolf moon tumblr you probably haven't heard of them woke coloring book artisan kinfolk affogato cred. Artisan hell of +1, green juice street art cold-pressed vice ugh edison bulb VHS bespoke tote bag williamsburg. Photo booth tousled tbh microdosing etsy.
            <ojp-row>
                <ojp-col start="2" span="10" align="center" justify="center">
                test row
                </ojp-col>
            </ojp-row>
        </ojp-col>
        <ojp-col span="4">
        Trust fund fingerstache yr etsy normcore. Prism schlitz taiyaki salvia enamel pin. Tilde tonx small batch tacos chicharrones artisan listicle, pinterest cold-pressed live-edge irony. Typewriter forage kinfolk art party, synth gluten-free kogi 8-bit. Flexitarian literally tattooed occupy biodiesel viral enamel pin banh mi pok pok. Photo booth 90's authentic chia kale chips chambray disrupt vape.
        </ojp-col>
        <ojp-col span="4">
            <div class="circleexample">
            I'm baby disrupt air plant chia hoodie XOXO, heirloom etsy whatever pork belly. Franzen pok pok scenester, blue bottle air plant bitters pork belly echo park shoreditch cloud bread unicorn. Master cleanse brooklyn ramps, semiotics pinterest edison bulb food truck. Raclette vaporware kale chips cred. Before they sold out cliche pitchfork, prism mumblecore marfa etsy taxidermy franzen glossier palo santo cloud bread bicycle rights stumptown tofu. Subway tile shaman yuccie fixie snackwave food truck.
            </div>
        </ojp-col>
    </ojp-row>

    <br>
    <br>

  <!-- Start component code for layout 2 -->
    <ojp-row align="start" justify="center">
        <ojp-col span="4" align="stretch">
            <ojp-row>
                <ojp-col span="12">
                sartorial blue bottle microdosing edison bulb kickstarter lo-fi banjo
                </ojp-col>
            </ojp-row>
            <ojp-row>
                <ojp-col span="12">
                sartorial blue bottle microdosing edison bulb kickstarter lo-fi banjo
                </ojp-col>
            </ojp-row>
            <ojp-row>
                <ojp-col span="12">
                sartorial blue bottle microdosing edison bulb kickstarter lo-fi banjo
                </ojp-col>
            </ojp-row>
            <ojp-row>
                <ojp-col span="12">
                sartorial blue bottle microdosing edison bulb kickstarter lo-fi banjo
                </ojp-col>
            </ojp-row>
            <ojp-row>
                <ojp-col span="12">
                sartorial blue bottle microdosing edison bulb kickstarter lo-fi banjo
                </ojp-col>
            </ojp-row>
        </ojp-col>
        <ojp-col span="8">
            <ojp-row>
                <ojp-col span="12">
                Retro beard small batch, messenger bag squid selvage normcore. Taxidermy shabby chic +1 pug. Yuccie vegan microdosing pickled adaptogen squid XOXO keffiyeh tacos. 
                </ojp-col>
            </ojp-row>
            <ojp-row>
                <ojp-col span="12">
                Tote bag beard butcher forage, chambray chia palo santo microdosing yuccie godard chicharrones whatever celiac blog. Synth gentrify kitsch, cornhole godard intelligentsia ramps normcore actually 90's cold-pressed vexillologist air plant tonx sustainable.
                </ojp-col>
            </ojp-row>            
        </ojp-col>
    </ojp-row>


    <br>
    <br>

  <!-- Start component code for layout 3 -->
    <ojp-row>
        <ojp-col span="1" align="center">
        I'm baby disrupt air plant chia hoodie XOXO, heirloom etsy whatever pork belly. 
        </ojp-col>

        <ojp-col start="4" span="4" align="center">
        I'm baby disrupt air plant chia hoodie XOXO, heirloom etsy whatever pork belly. Franzen pok pok scenester, blue bottle air plant bitters pork belly echo park shoreditch cloud bread unicorn. Master cleanse brooklyn ramps, semiotics pinterest edison bulb food truck. Raclette vaporware kale chips cred. Before they sold out cliche pitchfork, prism mumblecore marfa etsy taxidermy franzen glossier palo santo cloud bread bicycle rights stumptown tofu. Subway tile shaman yuccie fixie snackwave food truck.
        </ojp-col>

        <ojp-col start="9" span="3" align="end" justify="center">
        for layout 3
        </ojp-col>
    </ojp-row>
  `;

export const GridLayout = TemplateGrid.bind({});
GridLayout.args = {

    fullbleed: true
}

GridLayout.parameters = {
    docs: {
        description: {
            story: 'This is Grid text'
        }
    }
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
            options: ['stretch', 'start', 'end', 'center',],
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
            options: ['stretch', 'start', 'end', 'center',],
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
    },
    docs: {
        description: {
            story: `
#### Options: 
The <code><ojp-col></code> and <code><ojp-row></code> tags come with a few common options that developers can use to customize the implementation.
- span
- start
- align
- justify
- fullbleed


>Beware this blockquote

## "span"

This text option specifies how many columns this element will span. This value defaults to 12.


>  **Usage**:
<code><ojp-col span="6"></code> will render an element spanning 6 columns.
   

## "start"
            
This text option specifies how many columns this element will span. This value defaults to 12.
    

> **Usage**:
<code><ojp-col start="6"></code> will render an element starting from column 6.


## "align"
This radio option specifies the alignment of the content.


> **Usage**:
<code><ojp-col align="end"></code> will render an element aligned to the end of its parent.
          

#### Other values:
- stretch
- center
- start
            

## "justify"
            
This option specifies the justification of the content.
      

> **Usage**:
<code><ojp-col align="end"></code> will render an element aligned to the end of its parent.

#### Other values:

- stretch
- center
- start
            

## "fullbleed"

This boolean option specifies if the content “bleeds” to the very edges of the page, with no padding, margin, or border around full-bleed sections.
            
> **Usage**:
<ojp-col fullbleed="true"> will render an element that bleeds across the page width.
            
`
        }
    }
}




export const OjpCol = TemplateCol.bind({});
OjpCol.args = {
    fullbleed: true
}

OjpCol.parameters = {
    argTypes: {
        align: {
            name: 'ojp-row | align',
            options: ['stretch', 'start', 'end', 'center',],
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
            options: ['stretch', 'start', 'end', 'center',],
            control: { type: 'radio' },
            defaultValue: 'stretch',
            description: 'Justify Items property'
        },
    },
    docs: {
        description: {
            story: 'This is Column text'
        }
    }


}



