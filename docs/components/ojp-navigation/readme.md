# ojp-navigation



<!-- Auto Generated Below -->


## Events

| Event                           | Description                                                    | Type               |
| ------------------------------- | -------------------------------------------------------------- | ------------------ |
| `elementIsInvisible`            | Triggered when the component has left the viewport             | `CustomEvent<any>` |
| `elementIsVisible`              | Triggered when the component is visible in the viewport        | `CustomEvent<any>` |
| `ojpNavigationMobileDrawerOpen` | Triggered when the mobile menu drawer opens & closes (boolean) | `CustomEvent<any>` |


## Slots

| Slot            | Description                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"hamburger"`   | Slot for the mobile navigation hamburger button, including icon. This button will open the mobile nav drawer, which houses the navigation links. |
| `"logo"`        | Slot for the navigation logo. It may be optionally a link/                                                                                       |
| `"mobile-link"` | Slot for link within the mobile drawer navigation.                                                                                               |


## CSS Custom Properties

| Name                                                           | Description                                                                                                                                                                         |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--ojp-navigation--background-color`                           | Background color on the navigation. Defaults to `#ffffff`                                                                                                                           |
| `--ojp-navigation--color`                                      | Navigation color. Defaults to `#000000`                                                                                                                                             |
| `--ojp-navigation--grid-template-columns`                      | Grid template columns. Defaults to `1fr auto` at mobile and `auto 1fr` at desktop                                                                                                   |
| `--ojp-navigation--main-navbar-margin`                         | The margin (all sides) for the main navigation. Defaults to `0 0`                                                                                                                   |
| `--ojp-navigation--menu-align-items`                           | Menu item alignment. Defaults to `flex-start`at mobile and `center` at desktop                                                                                                      |
| `--ojp-navigation--menu-height`                                | Menu height. Defaults to `100vh` at mobile and `100px` at desktop                                                                                                                   |
| `--ojp-navigation--menu-items-restricted-height-margin-bottom` | Mobile menu ul element margin bottom, used when the viewport height is below 425px. Defaults to `--space-2xl`                                                                       |
| `--ojp-navigation--menu-items-wrapper-flex-direction`          | Navigation items wrapper flex direction. Defaults to `column` at mobile and `row` at desktop                                                                                        |
| `--ojp-navigation--menu-items-wrapper-height`                  | Navigation items wrapper height. Defaults to `100%` at mobile and `initial` at desktop                                                                                              |
| `--ojp-navigation--menu-items-wrapper-justify-content`         | Navigation items wrapper content justification. Defaults to `flex-start` at mobile and `flex-end` at desktop                                                                        |
| `--ojp-navigation--menu-items-wrapper-width`                   | Navigation items wrapper content justification. Defaults to `100%` at mobile and `initial` at desktop                                                                               |
| `--ojp-navigation--menu-left-position`                         | Left position of the menu. Defaults to `0` at mobile and `initial` at desktop                                                                                                       |
| `--ojp-navigation--menu-padding-top`                           | Menu margin top. Defaults to `50px` at mobile to offset by the same amount as the logo/nav height and `0` at desktop                                                                |
| `--ojp-navigation--menu-position`                              | Position property of the menu. Defaults to `fixed` at mobile and `initial` at desktop                                                                                               |
| `--ojp-navigation--menu-top-position`                          | Top property of the menu. Defaults to `0` at mobile and `initial` at desktop                                                                                                        |
| `--ojp-navigation--menu-transform`                             | Transform property of the menu. Defaults to `translateX(-100%)` at mobile and `initial` at desktop                                                                                  |
| `--ojp-navigation--menu-transition`                            | Transition property of the menu. Defaults to `transform 0.3s ease-in-out, background 0.3s ease-in-out, visibility 0s linear 0.3s` at mobile and `color 0.3s ease-in-out` at desktop |
| `--ojp-navigation--menu-visibility`                            | Visibility of the menu. Defaults to `hidden` at mobile and `visible` at desktop                                                                                                     |
| `--ojp-navigation--menu-width`                                 | Width of the menu. Defaults to `100vw` at mobile and `100%` at desktop                                                                                                              |
| `--ojp-navigation--menu-zindex`                                | Z-index of the menu. Defaults to `-1` at mobile and `inherit` at desktop                                                                                                            |
| `--ojp-navigation--mobile-button-display`                      | Mobile menu button display property. Defaults to `block` at mobile and `none` at desktop                                                                                            |
| `--ojp-navigation--mobile-hamburger-line-color`                | Mobile menu hamburger button line stroke color. Defaults to `#000000`                                                                                                               |
| `--ojp-navigation--position`                                   | The main navigation position. Defaults to `sticky`                                                                                                                                  |
| `--ojp-navigation--wrapper-background-color`                   | Background color on the navigation wrapper . Defaults to var(--ojp-navigation--background-color);                                                                                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
