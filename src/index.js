
goog.provide('ReactKeyboardshortcut');

goog.require('goog.dom');
goog.require('goog.events.KeyCodes');
goog.require('goog.ui.KeyboardShortcutHandler');

var shortcutHandler = new goog.ui.KeyboardShortcutHandler(document);

var Modifiers = {
  'NONE':  goog.ui.KeyboardShortcutHandler.Modifiers.NONE,
  'CTRL': goog.ui.KeyboardShortcutHandler.Modifiers.CTRL,
  'SHIFT': goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT,
  'ALT': goog.ui.KeyboardShortcutHandler.Modifiers.ALT,
  'META': goog.ui.KeyboardShortcutHandler.Modifiers.META
};

var ReactKeyboardshortcut = {

  /**
   * Registers a keyboard shortcut.
   * @param {string} identifier Identifier for the task performed by the keyboard
   *                 combination. Multiple shortcuts can be provided for the same
   *                 task by specifying the same identifier.
   * @param {...(number|string|Array.<number>)} var_args See below.
   */
  'register': function(identifier, var_args) {
    shortcutHandler.registerShortcut.apply(shortcutHandler, arguments);
  },

  /**
   * @param {string} listenerName A method name of a react component
   *    that will be called on any time when any registered keystroked invoked.
   * @return {Object} A mixin object
   */
  'bind': function(listenerName) {
    return {
      'componentDidMount': function() {
        goog.events.listen(shortcutHandler,
            goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,
            this[listenerName]);
      }
    };
  },
  
  'Modifiers': Modifiers

};

window['ReactKeyboardshortcut'] = ReactKeyboardshortcut;

