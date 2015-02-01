# react-keyboardshortcut
React Keyboard Shortcut Mixin powered by Google Closure Library

## Usage

```javascript
var React = require('react');
var ReactKeyboardShortcut = require('react-keyboardshortcut');

var Sample = React.createClass({

  // Specify a method name to bind
  mixins: [ReactKeyboardShortcut('onKeyboardShortcut')],

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

  componentDidMount() {
    // First Argument: An identifier which will be on "event.identifier".
    // Second Argument: Hotkey(s) to be parsed.
    //                  Normal Keys: See https://code.google.com/p/closure-library/source/browse/closure/goog/events/keynames.js?r=248b8190a01a747ccb7ac634bb2232988a7bb6aa
    //                  Modifiers: See http://docs.closure-library.googlecode.com/git-history/128f066ee24dedd41959199f66398e48f31b82fd/closure_goog_ui_keyboardshortcuthandler.js.source.html#line484
    ReactKeyboardShortcut.register('A', 'a');
    ReactKeyboardShortcut.register('UP', 'up');
    ReactKeyboardShortcut.register('DOWN', 'down');
    ReactKeyboardShortcut.register('T E S T', 't e s t');
    ReactKeyboardShortcut.register('SHIFT_F12', 'shift+f12');
    ReactKeyboardShortcut.register('SHIFT_F11 C', 'shift+f11 c');
    ReactKeyboardShortcut.register('META_Y', 'meta+y');
    ReactKeyboardShortcut.register('G S', 'g s');
    ReactKeyboardShortcut.register('S', 's');
  },

  componentDidMount() {
    // TODO: write unregister method
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
