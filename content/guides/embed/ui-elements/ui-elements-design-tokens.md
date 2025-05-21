---
rank: 12
related_endpoints: []
related_guides:
  - embed/ui-elements
  - embed/ui-elements/theming-styling
required_guides:
  - embed/ui-elements/installation
related_resources: []
---

# UI Elements design tokens

This table shows all the design tokens you can use for [theming and styling][ts] purposes. Provided default values and descriptions give clarity and guidance for implementation.

<!--alex ignore -->

## Border colors

| Token | Default value | Description |
| --- | --- | --- |
| `border-checkbox-border` | `#6f6f6f` | Default border color for checkboxes. |
| `border-checkbox-border-hover` | `#4e4e4e` | Border color when hovering over checkboxes. |
| `border-checkbox-border-selected` | `#0061d5` | Border color for selected checkboxes. |
| `border-checkbox-border-selected-hover` | `#2079e3` | Border color when hovering over selected checkboxes. |
| `border-cta-border-outline` | `#000000` | Border for secondary buttons with transparent background. |
| `border-cta-border-outline-disabled` | `#646464` | Border for disabled outline buttons. |
| `border-cta-border-outline-hover` | `#000000` | Border for outline buttons on hover. |
| `border-cta-border-outline-pressed` | `#000000` | Border for outline buttons when pressed. |
| `border-cta-border-secondary` | `#bcbcbc` | Border for secondary buttons. |
| `border-cta-border-secondary-disabled` | `#e8e8e8` | Border for disabled secondary buttons. |
| `border-cta-border-secondary-hover` | `#bcbcbc` | Border for secondary buttons on hover. |
| `border-cta-border-secondary-pressed` | `#bcbcbc` | Border for secondary buttons when pressed.|
| `border-divider-border` | `#e8e8e8` | Horizontal line separators.|
| `border-dropdown-border` | `#bcbcbc` | Border for dropdown menus.|
| `border-gridthumbnail-border` | `#e8e8e8` | Border for item (file/folder) thumbnails in grid view. |
| `border-input-border` | `#909090` | Border for text inputs. |
| `border-input-border-error` | `#ed3757` | Border for text inputs with errors. |
| `border-input-border-focus` | `#2486fc` | Border for focused text inputs. |
| `border-input-border-hover` | `#6f6f6f` | Border for text inputs on hover. |
| `border-search-border` | `#f4f4f4` | Border for search inputs. |
| `border-search-border-hover` | `#6f6f6f` | Border for search inputs on hover. |
| `border-switch-border` | `#bcbcbc` | Border for toggle switches. |
| `border-switch-border-hover` | `#bcbcbc` | Border for toggle switches on hover. |
| `border-tooltip-border-error` | `#f69bab` | Border for error tool tips. |

<!--alex ignore -->
## Icon colors
<!--alex ignore -->

<Message type='notice'>
You can only style interactive icons such as buttons or drop down.
</Message>

| Token | Default value | Description |
| --- | --- | --- |
| `icon-cta-icon` | `#6f6f6f` | Default color for icons in buttons. |
| `icon-cta-icon-hover` | `#222222` | Color for icons in buttons on hover. |
| `icon-cta-icon-pressed` | `#222222` | Color for icons in buttons when pressed. |

<!--alex ignore -->
## Outline colors
<!--alex ignore -->

| Token | Default value | Description |
| --- | --- | --- |
| `outline-focus-on-dark` | `#ffffff` | Focus outline color on dark backgrounds. |
| `outline-focus-on-light` | `#2486fc` | Focus outline color on light backgrounds. |

<!--alex ignore -->
## Surface colors
<!--alex ignore -->

| Token | Default value | Description |
| --- | --- | --- |
| `surface-checkbox-surface` | `#ffffff` | Background color for checkboxes. |
| `surface-checkbox-surface-hover` | `#ffffff` | Background color for checkboxes on hover. |
| `surface-checkbox-surface-selected` | `#0061d5` | Background color for selected checkboxes. |
| `surface-checkbox-surface-selected-hover` | `#2079e3` | Background color for selected checkboxes on hover. |
| `surface-cta-surface-icon` | `rgba(0, 0, 0, 0)` | Background for icon buttons. |
| `surface-cta-surface-icon-disabled` | `rgba(0, 0, 0, 0)` | Background for disabled icon buttons. |
| `surface-cta-surface-icon-hover` | `rgba(0, 0, 0, 0.04)` | Background for icon buttons on hover. |
| `surface-cta-surface-icon-pressed` | `rgba(0, 0, 0, 0.08)` | Background for icon buttons when pressed. |
| `surface-cta-surface-outline` | `rgba(0, 0, 0, 0)` | Background for secondary buttons with transparent background. |
| `surface-cta-surface-outline-hover` | `rgba(0, 0, 0, 0.04)` | Background for outline buttons on hover. |
| `surface-cta-surface-outline-pressed` | `rgba(0, 0, 0, 0.08)` | Background for outline buttons when pressed. |
| `surface-cta-surface-secondary` | `#ffffff` | Background for secondary buttons. |
| `surface-cta-surface-secondary-hover` | `#f4f4f4` | Background for secondary buttons on hover. |
| `surface-cta-surface-secondary-pressed` | `#e8e8e8` | Background for secondary buttons when pressed. |
| `surface-cta-surface-tertiary` | `#ffffff` | Background for link styled buttons. |
| `surface-cta-surface-tertiary-hover` | `#f4f4f4` | Background for link styled buttons on hover. |
| `surface-cta-surface-tertiary-pressed` | `#e8e8e8` | Background for link styled buttons when pressed. |
| `surface-dropdown-surface` | `#ffffff` | Background for dropdown menus. |
| `surface-dropdown-surface-error` | `#ffffff` | Background for dropdown menus with errors. |
| `surface-dropdown-surface-focus` | `#ffffff` | Background for focused dropdown menus. |
| `surface-dropdown-surface-hover` | `#ffffff` | Background for dropdown menus on hover. |
| `surface-illustration-surface-box-neutral` | `#0061d5` | Color for illustrations (detailed icons). |
| `surface-input-surface` | `#ffffff` | Background for text inputs. |
| `surface-input-surface-error` | `#ffffff` | Background for text inputs with errors. |
| `surface-input-surface-focus` | `#ffffff` | Background for focused text inputs. |
| `surface-input-surface-hover` | `#ffffff` | Background for text inputs on hover. |
| `surface-menu-surface` | `#ffffff` | Background for dropdown menu options. |
| `surface-menu-surface-focus` | `#f4f4f4` | Background for focused menu items. |
| `surface-menu-surface-hover` | `#f4f4f4` | Background for menu items on hover. |
| `surface-search-surface` | `#f4f4f4` | Background for search inputs. |
| `surface-search-surface-focused` | `#ffffff` |Background for focused search inputs. |
| `surface-search-surface-hover` | `#fbfbfb` | Background for search inputs on hover. |
| `surface-sliderthumb-surface` | `#0061d5` | Color for range slider thumbs. |
| `surface-sliderthumb-surface-hover` | `#2486fc` | Color for range slider thumbs on hover. |
| `slidertrack-surface` | `#6f6f6f` | Color for range slider tracks. |
| `surface-surface` | `#ffffff` | General background color. |
| `surface-surface-brand` | `#0061d5` | Background for primary buttons. |
| `surface-surface-brand-disabled` | `#0061d5` | Background for disabled primary buttons. |
| `surface-surface-brand-hover` | `#006ae9` | Background for primary buttons on hover. |
| `surface-surface-brand-pressed` | `#004eac` | Background for primary buttons when pressed. |
| `surface-switch-surface` | `#ffffff` | Background for toggle switches. |
| `surface-switch-surface-off` | `#d3d3d3` | Background for toggle switches in off state. |
| `surface-switch-surface-on` | `#0061d5` | Background for toggle switches in on state. |
| `surface-tooltip-surface` | `#4e4e4e` | Background for tool tips. |
| `surface-tooltip-surface-error` | `#fdebee` | Background for error tool tips. |

<!--alex ignore -->
## Text colors
<!--alex ignore -->

| Token | Default value | Description |
| --- | --- | --- |
| `text-cta-link` | `#0061d5` | Color for hyperlinks. |
| `text-cta-link-disabled` | `#b2cff2` | Color for disabled hyperlinks. |
| `text-cta-link-hover` | `#1d6bca` | Color for hyperlinks on hover. |
| `text-cta-link-pressed` | `#2486fc` | Color for hyperlinks when pressed. |
| `text-text-error-on-light` | `#d5324e` | Error text color on light backgrounds. |
| `text-text-on-dark` | `#ffffff` | Text color on dark backgrounds. |
| `text-text-on-light` | `#222222` | Primary text color on light backgrounds. |
| `text-text-on-light-secondary` | `#6f6f6f` | Secondary text color on light backgrounds. |
| `text-text-on-light-secondary-hover` | `#4e4e4e` | Secondary text color on hover. |

## Typography tokens

<Message type='notice'>
The comment in the table refers to pixels in calculation based on a root font-size of 16 px.
</Message>

| Token | Default value | Description |
| --- | --- | --- |
| `body-default-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for body text. |
| `body-default-font-size` | `0.875rem` | Font size for body text. |
| `body-default-font-weight` | `400` | Font weight for body text. |
| `body-default-letter-spacing` | `0.01875rem` | Letter spacing for body text. |
| `body-default-line-height` | `1.25rem` | Line height for body text. |
| `body-default-text-decoration` | `none` | Text decoration for body text. |
| `body-default-bold-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for bold body text. |
| `body-default-bold-font-size` | `0.875rem` | Font size for bold body text. |
| `body-default-bold-font-weight` | `700` | Font weight for bold body text. |
| `body-default-bold-letter-spacing` | `0.01875rem` | Letter spacing for bold body text. |
| `body-default-bold-line-height` | `1.25rem` | Line height for bold body text. |
| `body-default-bold-text-decoration` | `none` | Text decoration for bold body text. |
| `body-default-semibold-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for semi-bold body text. |
| `body-default-semibold-font-size` | `0.875rem` | Font size for semi-bold body text. |
| `body-default-semibold-font-weight` | `600` | Font weight for semi-bold body text. |
| `body-default-semibold-letter-spacing` | `0.01875rem` | Letter spacing for semi-bold body text. |
| `body-default-semibold-line-height` | `1.25rem` | Line height for semi-bold body text. |
| `body-default-semibold-text-decoration` | `none` | Text decoration for semi-bold body text. |
| `body-large-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for large body text. |
| `body-large-font-size` | `1rem` | Font size for large body text. |
| `body-large-font-weight` | `400` | Font weight for large body text. |
| `body-large-letter-spacing` | `0.01875rem` | Letter spacing for large body text. |
| `body-large-line-height` | `1.5rem` | Line height for large body text. |
| `body-large-text-decoration` | `none` | Text decoration for large body text. |
| `body-large-bold-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for large bold body text. |
| `body-large-bold-font-size` | `1rem` | Font size for large bold body text. |
| `body-large-bold-font-weight` | `700` | Font weight for large bold body text. |
| `body-large-bold-letter-spacing` | `0.01875rem` | Letter spacing for large bold body text. |
| `body-large-bold-line-height` | `1.5rem` | Line height for large bold body text. |
| `body-large-bold-text-decoration` | `none` | Text decoration for large bold body text. |
| `caption-bold-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for bold captions. |
| `caption-bold-font-size` | `0.75rem` | Font size for bold captions. |
| `caption-bold-font-weight` | `700` | Font weight for bold captions. |
| `caption-bold-letter-spacing` | `0.01875rem` | Letter spacing for bold captions. |
| `caption-bold-line-height` | `0.875rem` | Line height for bold captions. |
| `caption-bold-text-decoration` | `none` | Text decoration for bold captions. |
| `caption-default-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for captions. |
| `caption-default-font-size` | `0.75rem` | Font size for captions. |
| `caption-default-font-weight` | `400` | Font weight for captions. |
| `caption-default-letter-spacing` | `0.01875rem` | Letter spacing for captions. |
| `caption-default-line-height` | `0.875rem` | Line height for captions. |
| `caption-default-text-decoration` | `none` | Text decoration for captions. |
| `label-bold-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for bold labels. |
| `label-bold-font-size` | `0.625rem` | Font size for bold labels. |
| `label-bold-font-weight` | `700` | Font weight for bold labels. |
| `label-bold-letter-spacing` | `0.0375rem` | Letter spacing for bold labels. |
| `label-bold-line-height` | `1rem` | Line height for bold labels. |
| `label-bold-text-decoration` | `none` | Text decoration for bold labels. |
| `label-default-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for labels. |
| `label-default-font-size` | `0.625rem` | Font size for labels. |
| `label-default-font-weight` | `400` | Font weight for labels. |
| `label-default-letter-spacing` | `0.0375rem` | Letter spacing for labels. |
| `label-default-line-height` | `1rem` | Line height for labels. |
| `label-default-text-decoration` | `none` | Text decoration for labels. |
| `link-default-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for hyperlinks. |
| `link-default-font-size` | `0.875rem` | Font size for hyperlinks. |
| `link-default-font-weight` | `400` | Font weight for hyperlinks. |
| `link-default-letter-spacing` | `0.01875rem` | Letter spacing for hyperlinks. |
| `link-default-line-height` | `1.25rem` | Line height for hyperlinks. |
| `link-default-text-decoration` | `underline` | Text decoration for hyperlinks. |
| `notification-default-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for notifications. |
| `notification-default-font-size` | `0.5625rem` | Font size for notifications. |
| `notification-default-font-weight` | `700` | Font weight for notifications. |
| `notification-default-letter-spacing` | `0.01875rem` | Letter spacing for notifications. |
| `notification-default-line-height` | `0.75rem` | Line height for notifications. |
| `notification-default-text-decoration` | `none` | Text decoration for notifications. |
| `title-large-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for large titles. |
| `title-large-font-size` | `1.125rem` | Font size for large titles. |
| `title-large-font-weight` | `700` | Font weight for large titles. |
| `title-large-letter-spacing` | `0.01875rem` | Letter spacing for large titles. |
| `title-large-line-height` | `1.5rem` | Line height for large titles. |
| `title-large-text-decoration` | `none` | Text decoration for large titles. |
| `title-medium-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for medium titles. |
| `title-medium-font-size` | `1rem` | Font size for medium titles. |
| `title-medium-font-weight` | `700` | Font weight for medium titles. |
| `title-medium-letter-spacing` | `0.01875rem` | Letter spacing for medium titles. |
| `title-medium-line-height` | `1.5rem` | Line height for medium titles. |
| `title-medium-text-decoration` | `none` | Text decoration for medium titles. |
| `title-small-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for small titles. |
| `title-small-font-size` | `0.9375rem` | Font size for small titles. |
| `title-small-font-weight` | `700` | Font weight for small titles. |
| `title-small-letter-spacing` | `0.01875rem` | Letter spacing for small titles. |
| `title-small-line-height` | `1.25rem` | Line height for small titles. |
| `title-small-text-decoration` | `none` | Text decoration for small titles. |
| `title-subtitle-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for subtitles. |
| `title-subtitle-font-size` | `0.875rem` | Font size for subtitles. |
| `title-subtitle-font-weight` | `700` | Font weight for subtitles. |
| `title-subtitle-letter-spacing` | `0.01875rem` | Letter spacing for subtitles. |
| `title-subtitle-line-height` | `1.25rem` | Line height for subtitles. |
| `title-subtitle-text-decoration` | `none` | Text decoration for subtitles. |
| `title-x-large-font-family` | `Lato, "Helvetica Neue", sans-serif` | Font family for extra-large titles. |
| `title-x-large-font-size` | `1.3125rem` | Font size for extra-large titles. |
| `title-x-large-font-weight` | `700` | Font weight for extra-large titles. |
| `title-x-large-letter-spacing` | `0.01875rem` | Letter spacing for extra-large titles. |
| `title-x-large-line-height` | `2rem` | Line height for extra-large titles. |
| `title-x-large-text-decoration` | `none` | Text decoration for extra-large titles. |

## Spacing, sizing, and shape tokens

<Message type='notice'>
The comment in the table refers to pixels in calculation based on a root font-size of 16 px.
</Message>

| Token | Default value | Description |
| --- | --- | --- |
| `border-1` | `0.0625rem` | Border width (1 px equivalent). |
| `border-2` | `0.125rem` | Border width (2 px equivalent). |
| `border-3` | `0.1875rem` | Border width (3 px equivalent). |
| `border-4` | `0.25rem` | Border width (4 px equivalent). |
| `border-6` | `0.375rem` | Border width (6 px equivalent). |
| `border-8` | `0.5rem` | Border width (8 px equivalent). |
| `dropshadow-1` | `0 0 0.5rem 0 rgba(0, 0, 0, 0.05)` | Subtle shadow effect. |
| `dropshadow-2` | `0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.1)` | Medium shadow effect. |
| `dropshadow-3` | `0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.1)` | Pronounced shadow effect. |
| `radius-05` | `0.125rem` | Border radius (2 px equivalent). |
| `radius-1` | `0.25rem` | Border radius (4 px equivalent). |
| `radius-2` | `0.375rem` | Border radius (6 px equivalent). |
| `radius-3` | `0.5rem` | Border radius (8 px equivalent). |
| `radius-4` | `0.75rem` | Border radius (12 px equivalent). |
| `radius-5` | `1rem` | Border radius (16 px equivalent). |
| `radius-6` | `1.25rem` | Border radius (20 px equivalent). |
| `radius-7` | `1.5rem` | Border radius (24 px equivalent). |
| `radius-8` | `1.75rem` | Border radius (28 px equivalent). |
| `radius-half` | `2rem` | Border radius (32 px equivalent). |
| `size-05` | `0.125rem` | Size measurement (2 px equivalent). |
| `size-1` | `0.25rem` | Size measurement (4 px equivalent). |
| `size-2` | `0.5rem` | Size measurement (8 px equivalent). |
| `size-3` | `0.75rem` | Size measurement (12 px equivalent). |
| `size-4` | `1rem` | Size measurement (16 px equivalent). |
| `size-5` | `1.25rem` | Size measurement (20 px equivalent). |
| `size-6` | `1.5rem` | Size measurement (24 px equivalent). |
| `size-7` | `1.75rem` | Size measurement (28 px equivalent). |
| `size-8` | `2rem` | Size measurement (32 px equivalent). |
| `size-9` | `2.25rem` | Size measurement (36 px equivalent). |
| `size-10` | `2.5rem` | Size measurement (40 px equivalent). |
| `size-11` | `2.75rem` | Size measurement (44 px equivalent). |
| `size-12` | `3rem` | Size measurement (48 px equivalent). |
| `size-14` | `3.5rem` | Size measurement (56 px equivalent). |
| `size-15` | `3.75rem` | Size measurement (60 px equivalent). |
| `size-16` | `4rem` | Size measurement (64 px equivalent). |
| `size-18` | `4.5rem` | Size measurement (72 px equivalent). |
| `size-20` | `5rem` | Size measurement (80 px equivalent). |
| `space-05` | `0.125rem` | Spacing measurement (2 px equivalent). |
| `space-1` | `0.25rem` | Spacing measurement (4 px equivalent). |
| `space-2` | `0.5rem` | Spacing measurement (8 px equivalent). |
| `space-3` | `0.75rem` | Spacing measurement (12 px equivalent). |
| `space-4` | `1rem` | Spacing measurement (16 px equivalent). |
| `space-5` | `1.25rem` | Spacing measurement (20 px equivalent). |
| `space-6` | `1.5rem` | Spacing measurement (24 px equivalent). |
| `space-7` | `1.75rem` | Spacing measurement (28 px equivalent). |
| `space-8` | `2rem` | Spacing measurement (32 px equivalent). |
| `space-9` | `2.25rem` | Spacing measurement (36 px equivalent). |
| `space-10` | `2.5rem` | Spacing measurement (40 px equivalent). |
| `space-11` | `2.75rem` | Spacing measurement (44 px equivalent). |
| `space-12` | `3rem` | Spacing measurement (48 px equivalent). |
| `space-14` | `3.5rem` | Spacing measurement (56 px equivalent). |
| `space-15` | `3.75rem` | Spacing measurement (60 px equivalent). |
| `space-16` | `4rem` | Spacing measurement (64 px equivalent). |
| `space-18` | `4.5rem` | Spacing measurement (72 px equivalent). |
| `space-20` | `5rem` | Spacing measurement (80 px equivalent). |

## Token structure

There are two ways to provide tokens to the theme object in Content Explorer:
flatten structure using full token names and nested structure using shortened
names. 
The latter allows you to group tokens, which might improve the readability of your customization, but both produce the same results.

### Example

Flatten structure:

```js
const theme = {
    tokens: {
        "body-default-font-size": "14px",
        "body-default-font-weight": "400"
        "body-default-text-decoration": "none",
        "body-default-bold-line-height": "20px",
    }
};
```

Nested structure:

```js
const theme = {
    tokens: {
        Body: {
            Default: {
                "font-size": "14px",
                "font-weight": "400",
                "text-decoration": "none",
            }
            "Default Bold": {
                "line-height": "20px",
            }
        }
    }
};
```

[ts]: g://embed/ui-elements/theming-styling