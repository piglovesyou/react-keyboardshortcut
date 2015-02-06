# react-keyboardshortcut
React Keyboard Shortcut Mixin powered by Google Closure Library

## Usage

```javascript
var React = require('react');
var ReactKeyboardShortcut = require('react-keyboardshortcut');

var keyboardShortcutMixin = ReactKeyboardShortcut('onKeyboardShortcut', {
  'A': 'a',
  'UP': 'up',
  'DOWN': 'down',
  'T E S T': 't e s t',
  'SHIFT_F12': 'shift+f12',
  'SHIFT_F11 C': 'shift+f11 c',
  'META_Y': 'meta+y',
  'G S': 'g s',
  'S': 's'
});

var Sample = React.createClass({

  // Specify a method name to bind
  mixins: [keyboardShortcutMixin],

  onKeyboardShortcut(event) {
    switch(event.identifier) {
      case 'A': /* Do something */ break;
      case 'UP': /* Do something */ break;
      case 'DOWN': /* Do something */ break;
      case 'T E S T': /* Do something */ break;
      case 'SHIFT_F12': /* Do something */ break;
      case 'SHIFT_F11 C': /* Do something */ break;
      case 'META_Y': /* Do something */ break;
      case 'G S': /* Do something */ break;
      case 'S': /* Do something */ break;
    }
  },

  render() {
    return <div>yeah</div>
  }

});
```

## Install

```
$ npm install piglovesyou/react-keyboardshortcut --save
```

## Build Demo Locally

```
$ git clone git@github.com:piglovesyou/react-keyboardshortcut.git
$ cd react-keyboardshortcut
$ npm install
$ npm run demo
```

Then see `./demo/index.html` on your browser.

## Attribute
This software includes the work that is distributed in the Apache License 2.0.

## License
Licensed under the Apache License, Version 2.0 (the "License");
