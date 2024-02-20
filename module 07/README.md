# Module 7 - Custom Properties and Advanced Graphics
## The Color model
We understood the various ways to define a color in CSS
1. There is a list of around 200 **named colors**. 
```css
{
    background-color: green;
    color: lightblue;
}
```
2. Each color is built from 3 components: Red, Green and Blue (RGB). Each component can have an intensity between 0 (off) and 255 (fully on). So there are 256 possible values for each component. Together there are 256 * 256 * 256 =~ 16M colors. You can define one specific color using the `rgb` function as follows: 
```css
    background-color: rgb(128, 64, 23);
```
3. You can add an **alpha channel** which describes transperancy (actually, it's the opposite, it describes how un-transparent, or opaque, the color is). The value is between 0 and 1 where 0 is transparent and 1 is fully opaque.
```css
    background-color: rgba(128, 64, 23, 0.3);
```
4. You can describe RGB values in an additional syntax - the **HEX** syntax, as follows:
```css
    background-color: #FF7F30 // similar to rgb(255, 127, 48);
    color: #F26 // similar to #FF2266 which is like rgb(255, 34, 102);
    border-color: #FFA0407F // the last 2 digits are for alpha, similar to rgba(255, 160, 64, 0.5)
```
5. A more "Human intuitive" way is to use HSL which stands from **Hue, Saturation, Lightness**. Hue is a number between 0 and 360 that describes a color on the ranbow circle (0 = pure red, 120 = pure green, 240 = pure blue. Between them: 60 = yellow, 180 = cyan and 300 = magenta). Saturation describes how far the color from grayscale, so 0% saturation is actually gray and 100% saturation means very pure color. Lightness describes how not-dark the color is. So 0% is black, and 100% is as bright as possible. 
```css
    background-color: hsl(120, 100%, 50%); // the pure green
```
6. You can also use `hsla` which adds the alpha channel.
7. In new browsers, you can create a new color by mixing 2 original colors, as follows: 
```css
    background-color: color-mix(in srgb, red 50%, black); // will create dark red
```

## CSS Custom Properties 
 * Understanding Custom properties
 * Naming custom properties
 * The `var` function
   * defining fallback value
 * Valid values for custom properties
   * colors (#, rgba)
   * size units (1px, 0.5rem, 22deg)
   * listed units (hidden, visible, top, left)
   * strings ("abra cadabra")
 * Cascading variables
 * Partial values
    * We can break a color into rgba or hsla ingridients and then change only some of them
    * We can break shadow in parts and control each one with a variable
    * We can break a gradient into parts and control each one with variable
      * NOTE! it does no animate.... more on that later
    * We can break comma-separated-values into parts and control specific ones with variables
    * Grid template tracks...
    * Transforms


## The @property rule
* Use it to fine-grained control the custom properties
* Note that browser support is only around 75%... :-(
* You can define the type, inhertiance, and the initial value
* Allows you to animate things that may not be animatable otherwise like gradients

```css
@property --my-color {
  syntax: "<color>";
  inhertis: false;
  initial-value: '#aaffdd';
}
```

* You can add transition like so:
  * `transition: --my-color 1s;`
* Possible syntax values: 
  * `<length>`
  * `<number>`
  * `<percentage>`
  * `<length-percentage>`
  * `<color>`
  * `<image>`
  * `<url>`
  * `<angle>`
  * `<time>`
  * `<resolution>`
  * and a few more...


## The `calc` function
* We can provide an expression value to a property using the `calc` function
* We can combine values of different units
  * `height: calc(100vh - 100px)`
  * `padding-right: calc(10px * 2)`
* We can use it on **part** of the property
  * `border: calc(1px + 2%) solid black`
  * `transition: transform calc(1s - 120ms)`
* Calc should be used for numerics
  * lengths
  * angles
  * colors
  * time
* Calc can not be used 
  * on strings
  * on media queries
* We can add, substract (with mixed units)
* We can multiply and divide if one of the operands is a pure number
* We can nest calcs
  * `width: calc(100px - calc(100% / 7))`
  * but its not required... `width: calc(100px - (100% / 7))` also works
  
## The `calc` function with custom properties
* We can user properties inside the calc operations
  * `padding: calc(var(--standard-pad) * 2)`
* We can create a pure numerical property and add units later
  * `--amount: 2; padding: calc(var(--amount) * 1em)`
  
## The `::before` and `::after` elements
* Must have `content` in order to exist - even an empty one
* It is not placed before the element, but rather before **the content** of the element
* Cannot be used with elements that do not have content like `<img>`, `<input>`, `<br>`
* You can use them to add images, with the `url` value;
* You can attach property values using the `attr([name])` function - only as text, and only in the content property
* You can use the `counter-reset`, `counter-increment` and `counter` properties to add counters

## Object fit
* The `object-fit` property
  * The `cover` value
  * The `container` value
  * The `scale-down` value
  * The `fill` value
  * The `none` value
* The `object-position` property

## Gradient Backgrounds
* The `background-image` property
* Using `linear-gradient` to create an "image" on the fly
* Other gradient functions
* Defining gradient stops
* Setting the background size and position
* The `background-clip` property (Surprise!!!)

## Transformations and Transitions
* We saw how to use transformations with the 4 possible transforms
  * `translate`
  * `scale`
  * `rotate`
  * `skew`
* We saw how to define the transform origin using `transform-origin`
* We saw how to combine transformation and understood that becuase transforms do not yield layout recalculations, they are super fast
* We can use the `transition` property to define that changes in state occur through a period of time
* We saw that the `transition` property can accept an easing function such as:
  * `linear` - no easing
  * `ease-in` - start fast and slow down towards the end
  * `ease-out` - start alow and accelrate 
  * `ease-in-out` - start slow, accelarate, and then slow down towards the end
  * `cubic-bezeir()` - a function that can create any easing function using 4 numbers
* We saw that we can provide different transition settings to each property:

```css
    transition: background-color 2s ease-in, margin 4s ease-in-out, transform 1s linear;
```

* we saw that in order to animate a custom property we need to:
  * Define a `@property` rule that sets its exact type (otherwise custom properties can accept any value and can therefore not be animated)
  * Define a specific setting in the `transition` property. 

## Animations
* We can define reusable storyboards using the `@keyframe` rules.
* We provide a name for the storyboard, and then define the various states
```css
@keyframe my-animation {
    0% {
        background-color: red;
        transform: scale(1);
    }
    50% {
        background-color: green;
        transform: scale(1.5);
    }
    100% {
        background-color: blue;
        transform: scale(0.5);
    }
}
```
* We can then use the animation on an element using the various animation properties
  * `animation-name` chooses the animation keyframes
  * `animation-duration` defines the length of the animation
  * `animation-iteration-count` how many times to run the animation (possibly infinite)
  * `animation-delay` how much time to wait before the animation starts. 
* and more...


## Extra Links
* [Complete guide to CSS custom properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)
* [Complete guide to `calc` in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/)
* [Using @property in CSS](https://css-tricks.com/using-property-for-css-custom-properties/)
* [Animating @property](https://css-tricks.com/exploring-property-and-its-animating-powers/)
* [A Complete Guide to Gradients](https://css-tricks.com/a-complete-guide-to-css-gradients/)