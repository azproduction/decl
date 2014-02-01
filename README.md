# decl

Declarative elements constructors

## Installation

`decl` can be installed using `bower`:

```bash
$ bower install azproduction/decl
```

## Example

```js
function countBuyers(e) {
    var action = ['send', 'event'].concat(event.target.dataset.counter.split(' '));
    ga.apply(this, action);
}

decl('[data-counter]', function (el) {
    // in case of double call
    el.removeEventListener('click', countBuyers, false);
    el.addEventListener('click' countBuyers, false);
});

setTimeout(decl.init, 0); // DOM Ready
```

```html
<script src="page.js"></script>
<a href="/buy-this-expensive-tv" data-counter="user buy">Buy</a>
```