---
rank: 11
related_endpoints: []
related_guides:
  - embed/ui-elements
  - embed/ui-elements/explorer
  - embed/ui-elements/uploader
required_guides:
  - embed/ui-elements/installation
related_resources: []
---
<!--alex ignore -->
# Theming & styling for Box UI Elements

With theming & styling for Box UI Elements you can customize the look
of the embedded Box component to your enterprise's requirements.

<!--alex ignore -->
<Message type='notice'>As of now, [theming & styling][blog] is available for Content
Explorer and Content Uploader.
</Message>
<!--alex enable -->

## How to start

Add the selected Box component to your application. The default Box theme is applied.

## Customization

Box uses [design tokens][dt] for the customization purposes.

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
* global color palette - select the primary, secondary, and accent colors
* state colors - select color for states such as hover, focus, active, disabled
* component-specific colors - for example, you can select different colors for your buttons depending on their type
<!--alex enable -->
* gradients - choose and adjust a gradient as your background or other components
* opacity - adjust the opacity of the overlay effects for Box Modals and side panels

### Typography

Customize: 

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
* hover, active, focus, disabled, and error states - visual effect such as changed background color
* transitions and animations
<!--alex enable -->

### Component-level overrides

<!--alex ignore -->
Customize text input, drop down, and checkboxes with individual color
<!--alex enable -->

### Icons

Style interactive icons such as buttons or drop downs.

<Message type='notice'>
To replace non-interactive icons such as file or folder icons with your custom ones, use inline SVGs in CSS.
To change non-interactive icons color, height, and width, use CSS.
</Message>

See the implemented examples of custom icons in CodePen:

<iframe height="560"
scrolling="no" 
title="Box custom icons" 
src="https://codepen.io/box-platform/embed/raaRqye?default-tab=html%2Cresult" frameborder="no"
allowtransparency="true"
allowfullscreen="true"
style="width: 100%;"
></iframe>

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

[explorer]: g://embed/ui-elements/explorer
[uploader]: g://embed/ui-elements/uploader
[dt]: g://embed/ui-elements/ui-elements-design-tokens
[blog]: https://medium.com/@stefaniuk.olga/b4a86518d5ca