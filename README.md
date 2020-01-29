# jQuery accordion Plugin 
## (https://github.com/dali-rajab/jQuery-Accordion)
A simple lightweight jquery plugin that creates simple accordions.

## How to use it ?

After writing the html code of the accordion behavior (the body of the accordion) Include jQuery and jQuery Accordion plugin:
```html
<div id="my-accordion">
	<a href="#" class="toggler">Lorem ipsum dolor sit.</a>
	<div class="collapsible">Lorem ipsum dolor sit</div>
	<a href="#" class="toggler">Rem illum quae repellendus.</a>
	<div class="collapsible">Eligendi, fugiat? Porro, veritatis</div>
	<a href="#" class="toggler">Velit assumenda provident est.</a>
	<div class="collapsible">Quis quia suscipit omnis</div>
</div>

<script type="text/javascript" src="jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="jquery-accordion.js"></script>
```
and then just call the plugin on the appropriate div (**#my-accordion** in our case).

```javascript
$("#my-accordion").accordion();
```

## Important !
When writing the html code of the accordion, make sure that :
* collapsible elements (**".collapsible"**) and toggler (**".toggler"**) elements are even.
* every collapsible is directly next to its toggler.
* every couple of **_collapsible + toggler_** is in the same **DOM** level.

## Using the plugin
```javascript
$("#my-accordion").accordion({
	collapsibles: ".collapsible", // collapsibles selector
	togglers: ".toggler", // collapsibles selector
	activatedAccordionClass: "jquery-accordion" // the class to add to the accordion when it's activated
});

$("#my-accordion").accordion('destroy'); // this will deactivate the accordion functionality
```

#### [demo/](https://github.com/dali-rajab/jQuery-Accordion/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

## License

[MIT License](http://zenorocha.mit-license.org/)