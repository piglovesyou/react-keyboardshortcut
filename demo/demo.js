var React = require('react');
var ReactKeyboardShortcut = require('../dist/build');



var Demo = React.createClass({

  mixins: [ReactKeyboardShortcut.bind('onKeyboardShortcut')],

  getInitialState() {
    return {
      pushedKeys: []
    };
  },

  onKeyboardShortcut(e) {
    this.setState({
      pushedKeys: [e.identifier].concat(this.state.pushedKeys)
    });
  },

  componentDidMount() {
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

  render() {
    return (
      <div className="container">
        <h1>ReactKeyboardShortcut</h1>
        <table border="1">
          <tr> <th>Identifier</th><th>hotkey</th> </tr>
          <tr> <td>A</td><td><code>a</code></td> </tr>
          <tr> <td>UP</td><td><code>up</code></td> </tr>
          <tr> <td>DOWN</td><td><code>down</code></td> </tr>
          <tr> <td>T E S T</td><td><code>t e s t</code></td> </tr>
          <tr> <td>SHIFT_F12</td><td><code>shift+f12</code></td> </tr>
          <tr> <td>SHIFT_F11 C</td><td><code>shift+f11 c</code></td> </tr>
          <tr> <td>META_Y</td><td><code>meta+y</code></td> </tr>
          <tr> <td>G S</td><td><code>g s</code></td> </tr>
          <tr> <td>S</td><td><code>s</code></td> </tr>
        </table>
        <h3>Please Hit "hotkey" above</h3>
        <ol>
          {this.state.pushedKeys.map((identifier, index) =>
            <li key={index}>{identifier}</li>
          )}
        </ol>
        <h3 className="clear-both">More Information</h3>
        <ul>
        	<li><a href="https://github.com/piglovesyou/react-keyboardshortcut">https://github.com/piglovesyou/react-keyboardshortcut</a></li>
        </ul>
      </div>
    );
  }

});

React.render(
  <Demo />,
  document.body
);
