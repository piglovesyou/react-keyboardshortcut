
/**
 * react-keyboardshortcut
 * @license
 * Copyright 2015 thepiglovesyou@gmail.com
 * https://github.com/piglovesyou/react-keyboardshortcut
 */

/**
 * Google Closure Library
 * @license
 * Copyright 2006 The Closure Library Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



goog.provide('ReactKeyboardshortcut');

goog.require('goog.dom');
goog.require('goog.events.KeyCodes');
goog.require('goog.ui.KeyboardShortcutHandler');

/**
 * @param {string} listenerName A method name of a react component
 *    that will be called on any time when any registered keystroked invoked.
 * @return {Object} A mixin object
 */
var ReactKeyboardshortcut = function(listenerName, shortcuts) {
  if (!goog.global.document) {
    return {};
  }
  var shortcutHandler = new goog.ui.KeyboardShortcutHandler(goog.global.document);
  for (var identifier in shortcuts) {
    shortcutHandler.registerShortcut(identifier, shortcuts[identifier]);
  }
  return {
    'componentDidMount': function() {
      goog.events.listen(shortcutHandler,
          goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,
          this[listenerName]);
    },
    'componentWillUnmount': function() {
      goog.events.unlisten(shortcutHandler,
          goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,
          this[listenerName]);
    }
  };
};

// /**
//  * Registers a keyboard shortcut.
//  * @param {string} identifier Identifier for the task performed by the keyboard
//  *                 combination. Multiple shortcuts can be provided for the same
//  *                 task by specifying the same identifier.
//  * @param {...(number|string|Array.<number>)} var_args See below.
//  */
// ReactKeyboardshortcut['register'] = function(identifier, var_args) {
//   shortcutHandler.registerShortcut.apply(shortcutHandler, arguments);
// };

ReactKeyboardshortcut['Modifiers'] = {
  'NONE': goog.ui.KeyboardShortcutHandler.Modifiers.NONE,
  'CTRL': goog.ui.KeyboardShortcutHandler.Modifiers.CTRL,
  'SHIFT': goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT,
  'ALT': goog.ui.KeyboardShortcutHandler.Modifiers.ALT,
  'META': goog.ui.KeyboardShortcutHandler.Modifiers.META
};

goog.global['ReactKeyboardshortcut'] = ReactKeyboardshortcut;

