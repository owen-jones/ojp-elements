import {process, property, all, stringify} from 'cssomtools';

let found = {}

// Compute all breakpoints
process(
  property('--breakpoint'),
  rule => {
    if (
      rule.selectorText
      && rule.selectorText.trim() === ':root'
    ) {
      let breakpoints = JSON.parse(rule.style.getPropertyValue('--breakpoints'))
      Object.keys(breakpoints).forEach(key => found[key] = breakpoints[key])
    }
  }
)

// Add @supports breakpoints to CSS as @media
process(
  all(),
  rule => {
    if (
      rule.constructor.name === 'CSSSupportsRule'
      && rule.conditionText.includes('(--breakpoint(')
    ) {
      let breakpoint = JSON.parse(
        rule.conditionText.trim().replace(
          new RegExp([
            `^`,                  // start of line
            `\\({0,1}`,           // 0 or 1 `(`
            `--breakpoint`,       // the string `--breakpoint`
            `\\s*`,               // any whitespace
            `\\(`,                // a `(`
            `([^)]*)`,            // any non-) character
            `\\){1,2}`,           // 1 or 2 `)`
            `$`                   // end of line
          ].join('')),
          (_, match) => match
        )
      )
      if (breakpoint) {
        rule.parentStyleSheet.insertRule(
          `@media ${found[breakpoint]} { ${stringify([...rule.cssRules])} }`,
          [...rule.parentStyleSheet.cssRules].indexOf(rule)
        )
      }
    }
  }
)
