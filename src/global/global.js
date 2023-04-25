import {process, property, all, stringify} from 'cssomtools';

export default function() {

  const hasRules = object => object && object.cssRules && object.cssRules.length

  function allSecure() {
    return [...document.styleSheets]
      .filter(stylesheet => {
        return !stylesheet.href || stylesheet.href.startsWith(window.location.origin)
      })
      .map(stylesheet => {
        try { stylesheet.cssRules }
        catch(error) { return null }
        return stylesheet
    }).filter(hasRules)
  }

  let found = {}

// Compute all breakpoints
  process(
    // (SW): In a future release, we should update the breakpoint naming to be OJP specific.
    //  Having just '--breakpoint' was causing conflicts on a project which uses Bootstrap.
    property('--breakpoint--', false, allSecure()),
    rule => {
      if (
        rule.selectorText
        && rule.selectorText.trim() === ':root'
      ) {
        let breakpoints = {
          'mobile': JSON.parse(rule.style.getPropertyValue('--breakpoint--mobile')),
          'tablet': JSON.parse(rule.style.getPropertyValue('--breakpoint--tablet')),
          'desktop': JSON.parse(rule.style.getPropertyValue('--breakpoint--desktop'))
        };
        Object.keys(breakpoints).forEach(key => found[key] = breakpoints[key]);
      }
    }
  )

// Add @supports breakpoints to CSS as @media
  process(
    allSecure(),
    rule => {
      if (
        rule.constructor.name === 'CSSSupportsRule'
        && rule.conditionText.includes('(--breakpoint(')
      ) {
        let breakpoint = rule.conditionText.trim().replace(
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
        if (breakpoint) {
          rule.parentStyleSheet.insertRule(
            `@media ${found[breakpoint]} { ${stringify([...rule.cssRules])} }`,
            [...rule.parentStyleSheet.cssRules].indexOf(rule)
          )
        }
      }
    }
  )
}
