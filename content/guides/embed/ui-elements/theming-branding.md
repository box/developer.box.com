---
rank: 15
related_endpoints: []
related_guides:
  - embed/ui-elements
  - embed/ui-elements/explorer
  - embed/ui-elements/uploader
required_guides:
  - embed/ui-elements/installation
related_resources: []
---

# Themes & Branding for Box UI Elements

<!--alex ignore -->
With branding & themes for Box UI Elements you can customize the look of the
embedded Content Explorer and Uploader to your enterprise's requirements.
The tool provides a real-time live preview for an easy adjustment of the theme.
<!--alex enable -->

## How to start

Add the selected BUIE to your application and choose the default Box
theme template.

## Customization

Box uses design tokens for the customization purposes.

<Message type='notice'>
Design tokens are named entities that store specific visual attributes, such
as colors, spacing, typography, scale, and many more.
They are used instead of hard-coded values to simplify sharing design
properties across platforms, tools, and components.
</Message>

You can change the following elements in your embedded Box component.
<!--alex ignore -->

### Colors

Customize:

<!--alex ignore -->
* global color palette - select the primary, secondary, and access colors
* state colors - select color for states such as hover, focus, active, disabled
* component-specific colors - for example, you can select different colors for your buttons depending on their type
<!--alex enable -->

* gradients - choose and adjust a gradient as your background or other components
* opacity - adjust the opacity of the overlay effects for Box Modals and side panels

### Typography

Customize: 

* global typography settings - choose the font family, size, and weights
* text decoration - underline, strikethrough, letter spacing
* line heights and paragraph spacing 

### Border, radius

Choose:

<!--alex ignore -->
* border styling - width, styles, and colors
* border radius
<!--alex enable -->

### Spacing

Choose:

* global spacing
* component-specific spacing
* component-specific alignment and distribution, for example justify-content

### Shadows and elevation

Define:

* shadow presets
* custom shadows

### Interactive states

Customize:
<!--alex ignore -->
* hover, active, focus, and disabled states - visual effect such as changed background color
* transitions and animations
<!--alex enable -->

### Component-level overrides

<!--alex ignore -->
Customize text inputs, drop-downs, and checkboxes with individual color
<!--alex enable -->

### Miscellaneous

Style:

* help text and labels
* tool tips

## Demo

<iframe height="560"
scrolling="no" 
title="Box theming branding" 
src="https://codepen.io/box-platform/embed/KwKbrPw?default-tab=html%2Cresult" frameborder="no"
allowtransparency="true"
allowfullscreen="true"
style="width: 100%;"
></iframe>
