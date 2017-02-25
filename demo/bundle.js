(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/forresto/src/tshirt/demo.js":[function(require,module,exports){
const startApp = require('./src/app')

// Measurement keys from http://developer.bodylabs.com/red_api_measurements.html

const pattern = {
  id: 'long-sleeve shirt',
  metadata: {
    system: 'us',
  },
  measurements: {
    base: [
      {key: 'neck_base', value: 28},
      {key: 'across_back_shoulder_neck_base_shoulder', value: 10},
      {key: 'along_back_neck_base_to_gluteal_hip', value: 30},
      {key: 'chest', value: 50},
      // {key: 'underbust', value: 200},
      {key: 'waist', value: 45},
      {key: 'hips', value: 50},
      {key: 'mid_upper_arm_left', value: 30},
      {key: 'maximum_forearm_left', value: 20},
      {key: 'shoulder_elbow_wrist_left', value: 38},
      {key: 'shoulder_to_midhand_left', value: 36},
      {key: 'wrist_left', value: 15},
    ],
    derived: [
      {key: 'half_chest', value: 'chest / 2'},
      {key: 'half_waist', value: 'waist / 2'},
      {key: 'half_hips', value: 'hips / 2'},
      {key: 'third_neck', value: 'neck_base / 3'},
      {key: 'third_wrist', value: 'wrist_left / 3'},
      {key: 'around_shoulder', value: 'mid_upper_arm_left * 1.1'},
      {key: 'half_shoulder', value: 'around_shoulder / 2'},
      {key: 'quarter_shoulder', value: 'around_shoulder / 4'},
    ]
  },
  parts: [
    {
      id: 'front',
      symmetry: true,
      points: [
        {x: 1, y: 3.1},
        {x: 4.75, y: 1},
        {x: 9.6, y: 6.6},
        {x: 10, y: 8},
        {x: 11, y: 10},
        {x: 12.75, y: 10},
        {x: 11.5, y: 20},
        {x: 11.5, y: 26.25},
        {x: 6, y: 27.5},
        {x: 1, y: 28},
      ],
      constraints: {
        distances: [
          {points: [0, 9], distance: 'along_back_neck_base_to_gluteal_hip'},
          {points: [5, -5], distance: 'half_chest'},
          {points: [6, -6], distance: 'half_waist'},
          {points: [7, -7], distance: 'half_hips'},
          {points: [1, 0, -1], distance: 'third_neck'},
          {points: [2, 3, 4, 5], distance: 'quarter_shoulder'},
        ],
        angles: [
        ],
      }
    },
    {
      id: 'back',
      symmetry: true,
      points: [
        {x: 1.0, y: -1.0},
        {x: 8.0, y: -1.7},
        {x: 11.0, y: -3.5},
        {x: 10.5, y: -11.0},
        {x: 11.0, y: -15.0},
        {x: 12.5, y: -19.5},
        {x: 10.0, y: -21.0},
        {x: 9.5, y: -25.2},
        {x: 1.0, y: -27.0},
      ],
      constraints: {
        distances: [
          {points: [0, 8], distance: 'along_back_neck_base_to_gluteal_hip'},
          {points: [5, -5], distance: 'half_chest'},
          {points: [3, -3], distance: 'half_waist'},
          {points: [2, -2], distance: 'half_hips'},
          {points: [5, 6, 7], distance: 'quarter_shoulder'},
          {points: [7, 8], distance: 'across_back_shoulder_neck_base_shoulder'},
        ],
        angles: [],
      }
    },
    {
      id: 'arm front',
      symmetry: false,
      points: [
        {x: 1.5, y: -1.0},
        {x: 1.0, y: -3.0},
        {x: 1.0, y: -6.1},
        {x: 17.0, y: -5.0},
        {x: 25.2, y: -3.5},
        {x: 24.75, y: -1.0},
        {x: 21.0, y: -1.5},
        {x: 16.0, y: -1.25},
        {x: 12.0, y: -1.5},
        {x: 7.0, y: -2.0},
      ],
      constraints: {
        distances: [
          {points: [4, 5], distance: 'third_wrist'},
          {points: [0, 1, 2], distance: 'quarter_shoulder'},
        ],
        angles: [],
      }
    },
    {
      id: 'arm back',
      symmetry: false,
      points: [
        {x: 1, y: 1.25},
        {x: 2.5, y: 4.5},
        {x: 3.25, y: 7.5},
        {x: 10.0, y: 5.5},
        {x: 18.0, y: 4.5},
        {x: 23.0, y: 4.25},
        {x: 26.1, y: 4.4},
        {x: 26.5, y: 2.5},
        {x: 17.0, y: 1.5},
        {x: 7.0, y: 1.0},
        {x: 4.0, y: 1.0 },
      ],
      constraints: {
        distances: [
          {points: [6, 7], distance: 'third_wrist'},
          {points: [0, 1, 2], distance: 'quarter_shoulder'},
        ],
        angles: [],
      }
    },
    {
      id: 'arm top',
      symmetry: false,
      points: [
        {x: 1.0, y: 8.9},
        {x: 7.0, y: 9.25},
        {x: 20.0, y: 9.0},
        {x: 35.0, y: 8.25},
        {x: 35.0, y: 4.0},
        {x: 31.0, y: 4.5},
        {x: 23.0, y: 3.5},
        {x: 14.0, y: 1.5},
        {x: 12.5, y: 1.0},
        {x: 10.5, y: 1.0},
        {x: 4.0, y: 3.75},
        {x: 3.0, y: 6.25},
        {x: 2.0, y: 6.75},
        {x: 1.0, y: 7.0},
      ],
      constraints: {
        distances: [
          {points: [10, 11, 12, 13], distance: 'third_neck'},
          {points: [0, 1, 2, 3], distance: 'shoulder_elbow_wrist_left'},
          {points: [4, 5, 6, 7, 8, 9, 10], distance: 'shoulder_to_midhand_left'},
          {points: [3, 4], distance: 'third_wrist'},
          {points: [1, 9], distance: 'half_shoulder'},
          {points: [0, 1], distance: 'across_back_shoulder_neck_base_shoulder'},
        ],
        angles: [],
      }
    },
    {
      id: 'arm top left',
      from: 'arm top',
      reflect: 'x'
    },
    {
      id: 'arm front left',
      from: 'arm front',
      reflect: 'x'
    },
    {
      id: 'arm back left',
      from: 'arm back',
      reflect: 'x'
    },
  ],
}

const el = startApp({pattern})
document.body.appendChild(el)

},{"./src/app":"/Users/forresto/src/tshirt/src/app.js"}],"/Users/forresto/src/tshirt/node_modules/as-number/index.js":[function(require,module,exports){
module.exports = function numtype(num, def) {
	return typeof num === 'number'
		? num 
		: (typeof def === 'number' ? def : 0)
}
},{}],"/Users/forresto/src/tshirt/node_modules/assert/assert.js":[function(require,module,exports){
(function (global){
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"util/":"/Users/forresto/src/tshirt/node_modules/util/util.js"}],"/Users/forresto/src/tshirt/node_modules/barracks/apply-hook.js":[function(require,module,exports){
module.exports = applyHook

// apply arguments onto an array of functions, useful for hooks
// (arr, any?, any?, any?, any?, any?) -> null
function applyHook (arr, arg1, arg2, arg3, arg4, arg5) {
  arr.forEach(function (fn) {
    fn(arg1, arg2, arg3, arg4, arg5)
  })
}

},{}],"/Users/forresto/src/tshirt/node_modules/barracks/index.js":[function(require,module,exports){
var mutate = require('xtend/mutable')
var nanotick = require('nanotick')
var assert = require('assert')
var xtend = require('xtend')

var applyHook = require('./apply-hook')

module.exports = dispatcher

// initialize a new barracks instance
// obj -> obj
function dispatcher (hooks) {
  hooks = hooks || {}
  assert.equal(typeof hooks, 'object', 'barracks: hooks should be undefined or an object')

  var onStateChangeHooks = []
  var onActionHooks = []
  var onErrorHooks = []

  var subscriptionWraps = []
  var initialStateWraps = []
  var reducerWraps = []
  var effectWraps = []

  use(hooks)

  var reducersCalled = false
  var effectsCalled = false
  var stateCalled = false
  var subsCalled = false
  var stopped = false

  var subscriptions = start._subscriptions = {}
  var reducers = start._reducers = {}
  var effects = start._effects = {}
  var models = start._models = []
  var _state = {}

  var tick = nanotick()

  start.model = setModel
  start.state = getState
  start.start = start
  start.stop = stop
  start.use = use

  return start

  // push an object of hooks onto an array
  // obj -> null
  function use (hooks) {
    assert.equal(typeof hooks, 'object', 'barracks.use: hooks should be an object')
    assert.ok(!hooks.onError || typeof hooks.onError === 'function', 'barracks.use: onError should be undefined or a function')
    assert.ok(!hooks.onAction || typeof hooks.onAction === 'function', 'barracks.use: onAction should be undefined or a function')
    assert.ok(!hooks.onStateChange || typeof hooks.onStateChange === 'function', 'barracks.use: onStateChange should be undefined or a function')

    if (hooks.onStateChange) onStateChangeHooks.push(hooks.onStateChange)
    if (hooks.onError) onErrorHooks.push(wrapOnError(hooks.onError))
    if (hooks.onAction) onActionHooks.push(hooks.onAction)
    if (hooks.wrapSubscriptions) subscriptionWraps.push(hooks.wrapSubscriptions)
    if (hooks.wrapInitialState) initialStateWraps.push(hooks.wrapInitialState)
    if (hooks.wrapReducers) reducerWraps.push(hooks.wrapReducers)
    if (hooks.wrapEffects) effectWraps.push(hooks.wrapEffects)
    if (hooks.models) hooks.models.forEach(setModel)
  }

  // push a model to be initiated
  // obj -> null
  function setModel (model) {
    assert.equal(typeof model, 'object', 'barracks.store.model: model should be an object')
    models.push(model)
  }

  // get the current state from the store
  // obj? -> obj
  function getState (opts) {
    opts = opts || {}
    assert.equal(typeof opts, 'object', 'barracks.store.state: opts should be an object')

    var state = opts.state
    if (!opts.state && opts.freeze === false) return xtend(_state)
    else if (!opts.state) return Object.freeze(xtend(_state))
    assert.equal(typeof state, 'object', 'barracks.store.state: state should be an object')

    var namespaces = []
    var newState = {}

    // apply all fields from the model, and namespaced fields from the passed
    // in state
    models.forEach(function (model) {
      var ns = model.namespace
      namespaces.push(ns)
      var modelState = model.state || {}
      if (ns) {
        newState[ns] = newState[ns] || {}
        apply(ns, modelState, newState)
        newState[ns] = xtend(newState[ns], state[ns])
      } else {
        mutate(newState, modelState)
      }
    })

    // now apply all fields that weren't namespaced from the passed in state
    Object.keys(state).forEach(function (key) {
      if (namespaces.indexOf(key) !== -1) return
      newState[key] = state[key]
    })

    var tmpState = xtend(_state, xtend(state, newState))
    var wrappedState = wrapHook(tmpState, initialStateWraps)

    return (opts.freeze === false)
      ? wrappedState
      : Object.freeze(wrappedState)
  }

  // initialize the store hooks, get the send() function
  // obj? -> fn
  function start (opts) {
    opts = opts || {}
    assert.equal(typeof opts, 'object', 'barracks.store.start: opts should be undefined or an object')

    // register values from the models
    models.forEach(function (model) {
      var ns = model.namespace
      if (!stateCalled && model.state && opts.state !== false) {
        var modelState = model.state || {}
        if (ns) {
          _state[ns] = _state[ns] || {}
          apply(ns, modelState, _state)
        } else {
          mutate(_state, modelState)
        }
      }
      if (!reducersCalled && model.reducers && opts.reducers !== false) {
        apply(ns, model.reducers, reducers, function (cb) {
          return wrapHook(cb, reducerWraps)
        })
      }
      if (!effectsCalled && model.effects && opts.effects !== false) {
        apply(ns, model.effects, effects, function (cb) {
          return wrapHook(cb, effectWraps)
        })
      }
      if (!subsCalled && model.subscriptions && opts.subscriptions !== false) {
        apply(ns, model.subscriptions, subscriptions, function (cb, key) {
          var send = createSend('subscription: ' + (ns ? ns + ':' + key : key))
          cb = wrapHook(cb, subscriptionWraps)
          cb(send, function (err) {
            applyHook(onErrorHooks, err, _state, createSend)
          })
          return cb
        })
      }
    })

    // the state wrap is special because we want to operate on the full
    // state rather than indvidual chunks, so we apply it outside the loop
    if (!stateCalled && opts.state !== false) {
      _state = wrapHook(_state, initialStateWraps)
      if (onStateChangeHooks.length) {
        applyHook(onStateChangeHooks, _state, {}, {}, 'init', createSend)
      }
    }

    if (!opts.noSubscriptions) subsCalled = true
    if (!opts.noReducers) reducersCalled = true
    if (!opts.noEffects) effectsCalled = true
    if (!opts.noState) stateCalled = true

    if (!onErrorHooks.length) onErrorHooks.push(wrapOnError(defaultOnError))

    return createSend

    // call an action from a view
    // (str, bool?) -> (str, any?, fn?) -> null
    function createSend (selfName, callOnError) {
      assert.equal(typeof selfName, 'string', 'barracks.store.start.createSend: selfName should be a string')
      assert.ok(!callOnError || typeof callOnError === 'boolean', 'barracks.store.start.send: callOnError should be undefined or a boolean')

      return function send (name, data, cb) {
        if (!cb && !callOnError) {
          cb = data
          data = null
        }
        data = (typeof data === 'undefined' ? null : data)

        assert.equal(typeof name, 'string', 'barracks.store.start.send: name should be a string')
        assert.ok(!cb || typeof cb === 'function', 'barracks.store.start.send: cb should be a function')

        var done = callOnError ? onErrorCallback : cb
        _send(name, data, selfName, done)

        function onErrorCallback (err) {
          err = err || null
          if (err) {
            applyHook(onErrorHooks, err, _state, function createSend (selfName) {
              return function send (name, data) {
                assert.equal(typeof name, 'string', 'barracks.store.start.send: name should be a string')
                data = (typeof data === 'undefined' ? null : data)
                _send(name, data, selfName, done)
              }
            })
          }
        }
      }
    }

    // call an action
    // (str, str, any, fn) -> null
    function _send (name, data, caller, cb) {
      if (stopped) return

      assert.equal(typeof name, 'string', 'barracks._send: name should be a string')
      assert.equal(typeof caller, 'string', 'barracks._send: caller should be a string')
      assert.equal(typeof cb, 'function', 'barracks._send: cb should be a function')

      ;(tick(function () {
        var reducersCalled = false
        var effectsCalled = false
        var newState = xtend(_state)

        if (onActionHooks.length) {
          applyHook(onActionHooks, _state, data, name, caller, createSend)
        }

        // validate if a namespace exists. Namespaces are delimited by ':'.
        var actionName = name
        if (/:/.test(name)) {
          var arr = name.split(':')
          var ns = arr.shift()
          actionName = arr.join(':')
        }

        var _reducers = ns ? reducers[ns] : reducers
        if (_reducers && _reducers[actionName]) {
          if (ns) {
            var reducedState = _reducers[actionName](_state[ns], data)
            newState[ns] = xtend(_state[ns], reducedState)
          } else {
            mutate(newState, reducers[actionName](_state, data))
          }
          reducersCalled = true
          if (onStateChangeHooks.length) {
            applyHook(onStateChangeHooks, newState, data, _state, actionName, createSend)
          }
          _state = newState
          cb(null, newState)
        }

        var _effects = ns ? effects[ns] : effects
        if (!reducersCalled && _effects && _effects[actionName]) {
          var send = createSend('effect: ' + name)
          if (ns) _effects[actionName](_state[ns], data, send, cb)
          else _effects[actionName](_state, data, send, cb)
          effectsCalled = true
        }

        if (!reducersCalled && !effectsCalled) {
          throw new Error('Could not find action ' + actionName)
        }
      }))()
    }
  }

  // stop an app, essentially turns
  // all send() calls into no-ops.
  // () -> null
  function stop () {
    stopped = true
  }
}

// compose an object conditionally
// optionally contains a namespace
// which is used to nest properties.
// (str, obj, obj, fn?) -> null
function apply (ns, source, target, wrap) {
  if (ns && !target[ns]) target[ns] = {}
  Object.keys(source).forEach(function (key) {
    var cb = wrap ? wrap(source[key], key) : source[key]
    if (ns) target[ns][key] = cb
    else target[key] = cb
  })
}

// handle errors all the way at the top of the trace
// err? -> null
function defaultOnError (err) {
  throw err
}

function wrapOnError (onError) {
  return function onErrorWrap (err, state, createSend) {
    if (err) onError(err, state, createSend)
  }
}

// take a apply an array of transforms onto a value. The new value
// must be returned synchronously from the transform
// (any, [fn]) -> any
function wrapHook (value, transforms) {
  transforms.forEach(function (transform) {
    value = transform(value)
  })
  return value
}

},{"./apply-hook":"/Users/forresto/src/tshirt/node_modules/barracks/apply-hook.js","assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","nanotick":"/Users/forresto/src/tshirt/node_modules/nanotick/index.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js","xtend/mutable":"/Users/forresto/src/tshirt/node_modules/xtend/mutable.js"}],"/Users/forresto/src/tshirt/node_modules/bel/index.js":[function(require,module,exports){
var document = require('global/document')
var hyperx = require('hyperx')
var onload = require('on-load')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var BOOL_PROPS = {
  autofocus: 1,
  checked: 1,
  defaultchecked: 1,
  disabled: 1,
  formnovalidate: 1,
  indeterminate: 1,
  readonly: 1,
  required: 1,
  selected: 1,
  willvalidate: 1
}
var SVG_TAGS = [
  'svg',
  'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
  'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',
  'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
  'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

function belCreateElement (tag, props, children) {
  var el

  // If an svg tag, it needs a namespace
  if (SVG_TAGS.indexOf(tag) !== -1) {
    props.namespace = SVGNS
  }

  // If we are using a namespace
  var ns = false
  if (props.namespace) {
    ns = props.namespace
    delete props.namespace
  }

  // Create the element
  if (ns) {
    el = document.createElementNS(ns, tag)
  } else {
    el = document.createElement(tag)
  }

  // If adding onload events
  if (props.onload || props.onunload) {
    var load = props.onload || function () {}
    var unload = props.onunload || function () {}
    onload(el, function belOnload () {
      load(el)
    }, function belOnunload () {
      unload(el)
    },
    // We have to use non-standard `caller` to find who invokes `belCreateElement`
    belCreateElement.caller.caller.caller)
    delete props.onload
    delete props.onunload
  }

  // Create the properties
  for (var p in props) {
    if (props.hasOwnProperty(p)) {
      var key = p.toLowerCase()
      var val = props[p]
      // Normalize className
      if (key === 'classname') {
        key = 'class'
        p = 'class'
      }
      // The for attribute gets transformed to htmlFor, but we just set as for
      if (p === 'htmlFor') {
        p = 'for'
      }
      // If a property is boolean, set itself to the key
      if (BOOL_PROPS[key]) {
        if (val === 'true') val = key
        else if (val === 'false') continue
      }
      // If a property prefers being set directly vs setAttribute
      if (key.slice(0, 2) === 'on') {
        el[p] = val
      } else {
        if (ns) {
          if (p === 'xlink:href') {
            el.setAttributeNS(XLINKNS, p, val)
          } else if (/^xmlns($|:)/i.test(p)) {
            // skip xmlns definitions
          } else {
            el.setAttributeNS(null, p, val)
          }
        } else {
          el.setAttribute(p, val)
        }
      }
    }
  }

  function appendChild (childs) {
    if (!Array.isArray(childs)) return
    for (var i = 0; i < childs.length; i++) {
      var node = childs[i]
      if (Array.isArray(node)) {
        appendChild(node)
        continue
      }

      if (typeof node === 'number' ||
        typeof node === 'boolean' ||
        node instanceof Date ||
        node instanceof RegExp) {
        node = node.toString()
      }

      if (typeof node === 'string') {
        if (el.lastChild && el.lastChild.nodeName === '#text') {
          el.lastChild.nodeValue += node
          continue
        }
        node = document.createTextNode(node)
      }

      if (node && node.nodeType) {
        el.appendChild(node)
      }
    }
  }
  appendChild(children)

  return el
}

module.exports = hyperx(belCreateElement)
module.exports.default = module.exports
module.exports.createElement = belCreateElement

},{"global/document":"/Users/forresto/src/tshirt/node_modules/global/document.js","hyperx":"/Users/forresto/src/tshirt/node_modules/hyperx/index.js","on-load":"/Users/forresto/src/tshirt/node_modules/on-load/index.js"}],"/Users/forresto/src/tshirt/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/forresto/src/tshirt/node_modules/browserify/lib/_empty.js":[function(require,module,exports){
arguments[4]["/Users/forresto/src/tshirt/node_modules/browser-resolve/empty.js"][0].apply(exports,arguments)
},{}],"/Users/forresto/src/tshirt/node_modules/choo/html.js":[function(require,module,exports){
module.exports = require('yo-yo')

},{"yo-yo":"/Users/forresto/src/tshirt/node_modules/yo-yo/index.js"}],"/Users/forresto/src/tshirt/node_modules/choo/index.js":[function(require,module,exports){
const createLocation = require('sheet-router/create-location')
const onHistoryChange = require('sheet-router/history')
const sheetRouter = require('sheet-router')
const onHref = require('sheet-router/href')
const walk = require('sheet-router/walk')
const mutate = require('xtend/mutable')
const barracks = require('barracks')
const nanoraf = require('nanoraf')
const assert = require('assert')
const xtend = require('xtend')
const yo = require('yo-yo')

module.exports = choo

// framework for creating sturdy web applications
// null -> fn
function choo (opts) {
  opts = opts || {}

  const _store = start._store = barracks()
  var _router = start._router = null
  var _routerOpts = null
  var _rootNode = null
  var _routes = null
  var _frame = null

  if (typeof window !== 'undefined') {
    _store.use({ onStateChange: render })
  }
  _store.use(opts)

  start.toString = toString
  start.router = router
  start.model = model
  start.start = start
  start.stop = _store.stop
  start.use = use

  return start

  // render the application to a string
  // (str, obj) -> str
  function toString (route, serverState) {
    serverState = serverState || {}
    assert.equal(typeof route, 'string', 'choo.app.toString: route must be a string')
    assert.equal(typeof serverState, 'object', 'choo.app.toString: serverState must be an object')
    _store.start({ subscriptions: false, reducers: false, effects: false })

    const state = _store.state({ state: serverState })
    const router = createRouter(_routerOpts, _routes, createSend)
    const tree = router(route, state)
    return tree.outerHTML || tree.toString()

    function createSend () {
      return function send () {
        assert.ok(false, 'choo: send() cannot be called from Node')
      }
    }
  }

  // start the application
  // (str?, obj?) -> DOMNode
  function start () {
    _store.model(createLocationModel(opts))
    const createSend = _store.start(opts)
    _router = start._router = createRouter(_routerOpts, _routes, createSend)
    const state = _store.state({state: {}})

    const tree = _router(state.location.href, state)
    assert.ok(tree, 'choo.start: the router should always return a valid DOM node')
    assert.equal(typeof tree, 'object', 'choo.start: the router should always return a valid DOM node')
    _rootNode = tree
    tree.done = done

    return tree

    // allow a 'mount' function to return the new node
    // html -> null
    function done (newNode) {
      _rootNode = newNode
    }
  }

  // update the DOM after every state mutation
  // (obj, obj, obj, str, fn) -> null
  function render (state, data, prev, name, createSend) {
    if (!_frame) {
      _frame = nanoraf(function (state, prev) {
        const newTree = _router(state.location.href, state, prev)
        _rootNode = yo.update(_rootNode, newTree)
      })
    }
    _frame(state, prev)
  }

  // register all routes on the router
  // (str?, [fn|[fn]]) -> obj
  function router (defaultRoute, routes) {
    _routerOpts = defaultRoute
    _routes = routes
  }

  // create a new model
  // (str?, obj) -> null
  function model (model) {
    _store.model(model)
  }

  // register a plugin
  // (obj) -> null
  function use (hooks) {
    assert.equal(typeof hooks, 'object', 'choo.use: hooks should be an object')
    _store.use(hooks)
  }

  // create a new router with a custom `createRoute()` function
  // (str?, obj) -> null
  function createRouter (routerOpts, routes, createSend) {
    var prev = null
    if (!routes) {
      routes = routerOpts
      routerOpts = {}
    }
    routerOpts = mutate({ thunk: 'match' }, routerOpts)
    const router = sheetRouter(routerOpts, routes)
    walk(router, wrap)

    return router

    function wrap (route, handler) {
      const send = createSend('view: ' + route, true)
      return function chooWrap (params) {
        return function (state) {
          // TODO(yw): find a way to wrap handlers so params shows up in state
          const nwState = xtend(state)
          nwState.location = xtend(nwState.location, { params: params })

          const nwPrev = prev
          prev = nwState // save for next time

          if (opts.freeze !== false) Object.freeze(nwState)
          return handler(nwState, nwPrev, send)
        }
      }
    }
  }
}

// application location model
// obj -> obj
function createLocationModel (opts) {
  return {
    namespace: 'location',
    state: mutate(createLocation(), { params: {} }),
    subscriptions: createSubscriptions(opts),
    effects: { set: setLocation, touch: touchLocation },
    reducers: { update: updateLocation }
  }

  // update the location on the state
  // try and jump to an anchor on the page if it exists
  // (obj, obj) -> obj
  function updateLocation (state, data) {
    if (opts.history !== false && data.hash && data.hash !== state.hash) {
      try {
        const el = document.querySelector(data.hash)
        if (el) el.scrollIntoView(true)
      } catch (e) {
        return data
      }
    }
    return data
  }

  // update internal location only
  // (str, obj, fn, fn) -> null
  function touchLocation (state, data, send, done) {
    const newLocation = createLocation(state, data)
    send('location:update', newLocation, done)
  }

  // set a new location e.g. "/foo/bar#baz?beep=boop"
  // (str, obj, fn, fn) -> null
  function setLocation (state, data, send, done) {
    const newLocation = createLocation(state, data)

    // update url bar if it changed
    if (opts.history !== false && newLocation.href !== state.href) {
      window.history.pushState({}, null, newLocation.href)
    }

    send('location:update', newLocation, done)
  }

  function createSubscriptions (opts) {
    const subs = {}

    if (opts.history !== false) {
      subs.handleHistory = function (send, done) {
        onHistoryChange(function navigate (href) {
          send('location:touch', href, done)
        })
      }
    }

    if (opts.href !== false) {
      subs.handleHref = function (send, done) {
        onHref(function navigate (location) {
          send('location:set', location, done)
        })
      }
    }

    return subs
  }
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","barracks":"/Users/forresto/src/tshirt/node_modules/barracks/index.js","nanoraf":"/Users/forresto/src/tshirt/node_modules/nanoraf/index.js","sheet-router":"/Users/forresto/src/tshirt/node_modules/sheet-router/index.js","sheet-router/create-location":"/Users/forresto/src/tshirt/node_modules/sheet-router/create-location.js","sheet-router/history":"/Users/forresto/src/tshirt/node_modules/sheet-router/history.js","sheet-router/href":"/Users/forresto/src/tshirt/node_modules/sheet-router/href.js","sheet-router/walk":"/Users/forresto/src/tshirt/node_modules/sheet-router/walk.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js","xtend/mutable":"/Users/forresto/src/tshirt/node_modules/xtend/mutable.js","yo-yo":"/Users/forresto/src/tshirt/node_modules/yo-yo/index.js"}],"/Users/forresto/src/tshirt/node_modules/clamp/index.js":[function(require,module,exports){
module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}

},{}],"/Users/forresto/src/tshirt/node_modules/expr-eval/dist/bundle.js":[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.exprEval = factory());
}(this, (function () { 'use strict';

/*!
 Based on ndef.parser, by Raphael Graf(r@undefined.ch)
 http://www.undefined.ch/mparser/index.html

 Ported to JavaScript and modified by Matthew Crumley (email@matthewcrumley.com, http://silentmatt.com/)

 You are free to use and modify this code in anyway you find useful. Please leave this comment in the code
 to acknowledge its original source. If you feel like it, I enjoy hearing about projects that use my code,
 but don't feel like you have to let me know or ask permission.
*/

function indexOf(array, obj) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return i;
    }
  }
  return -1;
}

var INUMBER = 'INUMBER';
var IOP1 = 'IOP1';
var IOP2 = 'IOP2';
var IOP3 = 'IOP3';
var IVAR = 'IVAR';
var IFUNCALL = 'IFUNCALL';
var IEXPR = 'IEXPR';
var IMEMBER = 'IMEMBER';

function Instruction(type, value) {
  this.type = type;
  this.value = (value !== undefined && value !== null) ? value : 0;
}

Instruction.prototype.toString = function () {
  switch (this.type) {
    case INUMBER:
    case IOP1:
    case IOP2:
    case IOP3:
    case IVAR:
      return this.value;
    case IFUNCALL:
      return 'CALL ' + this.value;
    case IMEMBER:
      return '.' + this.value;
    default:
      return 'Invalid Instruction';
  }
};

function Expression(tokens, parser) {
  this.tokens = tokens;
  this.parser = parser;
  this.unaryOps = parser.unaryOps;
  this.binaryOps = parser.binaryOps;
  this.ternaryOps = parser.ternaryOps;
  this.functions = parser.functions;
}

function escapeValue(v) {
  if (typeof v === 'string') {
    return JSON.stringify(v).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }
  return v;
}

function simplify(tokens, unaryOps, binaryOps, ternaryOps, values) {
  var nstack = [];
  var newexpression = [];
  var n1, n2, n3;
  var f;
  for (var i = 0, L = tokens.length; i < L; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      nstack.push(item);
    } else if (type === IVAR && values.hasOwnProperty(item.value)) {
      item = new Instruction(INUMBER, values[item.value]);
      nstack.push(item);
    } else if (type === IOP2 && nstack.length > 1) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = binaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value, n2.value));
      nstack.push(item);
    } else if (type === IOP3 && nstack.length > 2) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === '?') {
        nstack.push(n1.value ? n2.value : n3.value);
      } else {
        f = ternaryOps[item.value];
        item = new Instruction(INUMBER, f(n1.value, n2.value, n3.value));
        nstack.push(item);
      }
    } else if (type === IOP1 && nstack.length > 0) {
      n1 = nstack.pop();
      f = unaryOps[item.value];
      item = new Instruction(INUMBER, f(n1.value));
      nstack.push(item);
    } else if (type === IEXPR) {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(new Instruction(IEXPR, simplify(item.value, unaryOps, binaryOps, ternaryOps, values)));
    } else if (type === IMEMBER && nstack.length > 0) {
      n1 = nstack.pop();
      nstack.push(new Instruction(INUMBER, n1.value[item.value]));
    } else {
      while (nstack.length > 0) {
        newexpression.push(nstack.shift());
      }
      newexpression.push(item);
    }
  }
  while (nstack.length > 0) {
    newexpression.push(nstack.shift());
  }
  return newexpression;
}

Expression.prototype.simplify = function (values) {
  values = values || {};
  return new Expression(simplify(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, values), this.parser);
};

function substitute(tokens, variable, expr) {
  var newexpression = [];
  for (var i = 0, L = tokens.length; i < L; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === IVAR && item.value === variable) {
      for (var j = 0; j < expr.tokens.length; j++) {
        var expritem = expr.tokens[j];
        var replitem;
        if (expritem.type === IOP1) {
          replitem = unaryInstruction(expritem.value);
        } else if (expritem.type === IOP2) {
          replitem = binaryInstruction(expritem.value);
        } else if (expritem.type === IOP3) {
          replitem = ternaryInstruction(expritem.value);
        } else {
          replitem = new Instruction(expritem.type, expritem.value);
        }
        newexpression.push(replitem);
      }
    } else if (type === IEXPR) {
      newexpression.push(new Instruction(IEXPR, substitute(item.value, variable, expr)));
    } else {
      newexpression.push(item);
    }
  }
  return newexpression;
}

Expression.prototype.substitute = function (variable, expr) {
  if (!(expr instanceof Expression)) {
    expr = this.parser.parse(String(expr));
  }

  return new Expression(substitute(this.tokens, variable, expr), this.parser);
};

function evaluate(tokens, expr, values) {
  var nstack = [];
  var n1, n2, n3;
  var f;
  for (var i = 0, L = tokens.length; i < L; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      nstack.push(item.value);
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = expr.binaryOps[item.value];
      nstack.push(f(n1, n2));
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      if (item.value === '?') {
        nstack.push(evaluate(n1 ? n2 : n3, expr, values));
      } else {
        f = expr.ternaryOps[item.value];
        nstack.push(f(n1, n2, n3));
      }
    } else if (type === IVAR) {
      if (item.value in expr.functions) {
        nstack.push(expr.functions[item.value]);
      } else {
        var v = values[item.value];
        if (v !== undefined) {
          nstack.push(v);
        } else {
          throw new Error('undefined variable: ' + item.value);
        }
      }
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = expr.unaryOps[item.value];
      nstack.push(f(n1));
    } else if (type === IFUNCALL) {
      var argCount = item.value;
      var args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      f = nstack.pop();
      if (f.apply && f.call) {
        nstack.push(f.apply(undefined, args));
      } else {
        throw new Error(f + ' is not a function');
      }
    } else if (type === IEXPR) {
      nstack.push(item.value);
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1[item.value]);
    } else {
      throw new Error('invalid Expression');
    }
  }
  if (nstack.length > 1) {
    throw new Error('invalid Expression (parity)');
  }
  return nstack[0];
}

Expression.prototype.evaluate = function (values) {
  values = values || {};
  return evaluate(this.tokens, this, values);
};

function expressionToString(tokens, toJS) {
  var nstack = [];
  var n1, n2, n3;
  var f;
  for (var i = 0, L = tokens.length; i < L; i++) {
    var item = tokens[i];
    var type = item.type;
    if (type === INUMBER) {
      if (typeof item.value === 'number' && item.value < 0) {
        nstack.push('(' + item.value + ')');
      } else {
        nstack.push(escapeValue(item.value));
      }
    } else if (type === IOP2) {
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (toJS) {
        if (f === '^') {
          nstack.push('Math.pow(' + n1 + ', ' + n2 + ')');
        } else if (f === 'and') {
          nstack.push('(!!' + n1 + ' && !!' + n2 + ')');
        } else if (f === 'or') {
          nstack.push('(!!' + n1 + ' || !!' + n2 + ')');
        } else if (f === '||') {
          nstack.push('(String(' + n1 + ') + String(' + n2 + '))');
        } else if (f === '==') {
          nstack.push('(' + n1 + ' === ' + n2 + ')');
        } else if (f === '!=') {
          nstack.push('(' + n1 + ' !== ' + n2 + ')');
        } else {
          nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');
        }
      } else {
        nstack.push('(' + n1 + ' ' + f + ' ' + n2 + ')');
      }
    } else if (type === IOP3) {
      n3 = nstack.pop();
      n2 = nstack.pop();
      n1 = nstack.pop();
      f = item.value;
      if (f === '?') {
        nstack.push('(' + n1 + ' ? ' + n2 + ' : ' + n3 + ')');
      } else {
        throw new Error('invalid Expression');
      }
    } else if (type === IVAR) {
      nstack.push(item.value);
    } else if (type === IOP1) {
      n1 = nstack.pop();
      f = item.value;
      if (f === '-' || f === '+') {
        nstack.push('(' + f + n1 + ')');
      } else if (toJS) {
        if (f === 'not') {
          nstack.push('(' + '!' + n1 + ')');
        } else if (f === '!') {
          nstack.push('fac(' + n1 + ')');
        } else {
          nstack.push(f + '(' + n1 + ')');
        }
      } else if (f === '!') {
        nstack.push('(' + n1 + '!)');
      } else {
        nstack.push('(' + f + ' ' + n1 + ')');
      }
    } else if (type === IFUNCALL) {
      var argCount = item.value;
      var args = [];
      while (argCount-- > 0) {
        args.unshift(nstack.pop());
      }
      f = nstack.pop();
      nstack.push(f + '(' + args.join(', ') + ')');
    } else if (type === IMEMBER) {
      n1 = nstack.pop();
      nstack.push(n1 + '.' + item.value);
    } else if (type === IEXPR) {
      nstack.push('(' + expressionToString(item.value, toJS) + ')');
    } else {
      throw new Error('invalid Expression');
    }
  }
  if (nstack.length > 1) {
    throw new Error('invalid Expression (parity)');
  }
  return nstack[0];
}

Expression.prototype.toString = function () {
  return expressionToString(this.tokens, false);
};

function getSymbols(tokens, symbols) {
  for (var i = 0, L = tokens.length; i < L; i++) {
    var item = tokens[i];
    if (item.type === IVAR && (indexOf(symbols, item.value) === -1)) {
      symbols.push(item.value);
    } else if (item.type === IEXPR) {
      getSymbols(item.value, symbols);
    }
  }
}

Expression.prototype.symbols = function () {
  var vars = [];
  getSymbols(this.tokens, vars);
  return vars;
};

Expression.prototype.variables = function () {
  var vars = [];
  getSymbols(this.tokens, vars);
  var functions = this.functions;
  return vars.filter(function (name) {
    return !(name in functions);
  });
};

Expression.prototype.toJSFunction = function (param, variables) {
  var expr = this;
  var f = new Function(param, 'with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return ' + expressionToString(this.simplify(variables).tokens, true) + '; }'); // eslint-disable-line no-new-func
  return function () {
    return f.apply(expr, arguments);
  };
};

function add(a, b) {
  return Number(a) + Number(b);
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function mod(a, b) {
  return a % b;
}
function concat(a, b) {
  return '' + a + b;
}
function equal(a, b) {
  return a === b;
}
function notEqual(a, b) {
  return a !== b;
}
function greaterThan(a, b) {
  return a > b;
}
function lessThan(a, b) {
  return a < b;
}
function greaterThanEqual(a, b) {
  return a >= b;
}
function lessThanEqual(a, b) {
  return a <= b;
}
function andOperator(a, b) {
  return Boolean(a && b);
}
function orOperator(a, b) {
  return Boolean(a || b);
}
function sinh(a) {
  return ((Math.exp(a) - Math.exp(-a)) / 2);
}
function cosh(a) {
  return ((Math.exp(a) + Math.exp(-a)) / 2);
}
function tanh(a) {
  if (a === Infinity) return 1;
  if (a === -Infinity) return -1;
  return (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
}
function asinh(a) {
  if (a === -Infinity) return a;
  return Math.log(a + Math.sqrt(a * a + 1));
}
function acosh(a) {
  return Math.log(a + Math.sqrt(a * a - 1));
}
function atanh(a) {
  return (Math.log((1 + a) / (1 - a)) / 2);
}
function log10(a) {
  return Math.log(a) * Math.LOG10E;
}
function neg(a) {
  return -a;
}
function not(a) {
  return !a;
}
function trunc(a) {
  return a < 0 ? Math.ceil(a) : Math.floor(a);
}
function random(a) {
  return Math.random() * (a || 1);
}
function factorial(a) { // a!
  return gamma(a + 1);
}
function stringLength(s) {
  return String(s).length;
}

function hypot() {
  var sum = 0;
  var larg = 0;
  for (var i = 0, L = arguments.length; i < L; i++) {
    var arg = Math.abs(arguments[i]);
    var div;
    if (larg < arg) {
      div = larg / arg;
      sum = sum * div * div + 1;
      larg = arg;
    } else if (arg > 0) {
      div = arg / larg;
      sum += div * div;
    } else {
      sum += arg;
    }
  }
  return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
}

function condition(cond, yep, nope) {
  return cond ? yep : nope;
}

function isInteger(value) {
  return isFinite(value) && (value === Math.round(value));
}

var GAMMA_G = 4.7421875;
var GAMMA_P = [
  0.99999999999999709182,
  57.156235665862923517, -59.597960355475491248,
  14.136097974741747174, -0.49191381609762019978,
  0.33994649984811888699e-4,
  0.46523628927048575665e-4, -0.98374475304879564677e-4,
  0.15808870322491248884e-3, -0.21026444172410488319e-3,
  0.21743961811521264320e-3, -0.16431810653676389022e-3,
  0.84418223983852743293e-4, -0.26190838401581408670e-4,
  0.36899182659531622704e-5
];

// Gamma function from math.js
function gamma(n) {
  var t, x;

  if (isInteger(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }

    if (n > 171) {
      return Infinity; // Will overflow
    }

    var value = n - 2;
    var res = n - 1;
    while (value > 1) {
      res *= value;
      value--;
    }

    if (res === 0) {
      res = 1; // 0! is per definition 1
    }

    return res;
  }

  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
  }

  if (n >= 171.35) {
    return Infinity; // will overflow
  }

  if (n > 85.0) { // Extended Stirling Approx
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow((n / Math.E), n) *
      (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) -
      571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) +
      5246819 / (75246796800 * fiveN * n));
  }

  --n;
  x = GAMMA_P[0];
  for (var i = 1; i < GAMMA_P.length; ++i) {
    x += GAMMA_P[i] / (n + i);
  }

  t = n + GAMMA_G + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}

var TEOF = 'TEOF';
var TOP = 'TOP';
var TNUMBER = 'TNUMBER';
var TSTRING = 'TSTRING';
var TPAREN = 'TPAREN';
var TCOMMA = 'TCOMMA';
var TNAME = 'TNAME';

function Token(type, value, line, column) {
  this.type = type;
  this.value = value;
  this.line = line;
  this.column = column;
}

Token.prototype.toString = function () {
  return this.type + ': ' + this.value;
};

function TokenStream(expression, unaryOps, binaryOps, ternaryOps, consts) {
  this.pos = 0;
  this.line = 0;
  this.column = 0;
  this.current = null;
  this.unaryOps = unaryOps;
  this.binaryOps = binaryOps;
  this.ternaryOps = ternaryOps;
  this.consts = consts;
  this.expression = expression;
  this.savedPosition = 0;
  this.savedCurrent = null;
  this.savedLine = 0;
  this.savedColumn = 0;
}

TokenStream.prototype.newToken = function (type, value, line, column) {
  return new Token(type, value, line != null ? line : this.line, column != null ? column : this.column);
};

TokenStream.prototype.save = function () {
  this.savedPosition = this.pos;
  this.savedCurrent = this.current;
  this.savedLine = this.line;
  this.savedColumn = this.column;
};

TokenStream.prototype.restore = function () {
  this.pos = this.savedPosition;
  this.current = this.savedCurrent;
  this.line = this.savedLine;
  this.column = this.savedColumn;
};

TokenStream.prototype.next = function () {
  if (this.pos >= this.expression.length) {
    return this.newToken(TEOF, 'EOF');
  }

  if (this.isWhitespace() || this.isComment()) {
    return this.next();
  } else if (this.isNumber() ||
      this.isOperator() ||
      this.isString() ||
      this.isParen() ||
      this.isComma() ||
      this.isNamedOp() ||
      this.isConst() ||
      this.isName()) {
    return this.current;
  } else {
    this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
  }
};

TokenStream.prototype.isString = function () {
  var r = false;
  var startLine = this.line;
  var startColumn = this.column;
  var startPos = this.pos;
  var quote = this.expression.charAt(startPos);

  if (quote === '\'' || quote === '"') {
    this.pos++;
    this.column++;
    var index = this.expression.indexOf(quote, startPos + 1);
    while (index >= 0 && this.pos < this.expression.length) {
      this.pos = index + 1;
      if (this.expression.charAt(index - 1) !== '\\') {
        var rawString = this.expression.substring(startPos + 1, index);
        this.current = this.newToken(TSTRING, this.unescape(rawString), startLine, startColumn);
        var newLine = rawString.indexOf('\n');
        var lastNewline = -1;
        while (newLine >= 0) {
          this.line++;
          this.column = 0;
          lastNewline = newLine;
          newLine = rawString.indexOf('\n', newLine + 1);
        }
        this.column += rawString.length - lastNewline;
        r = true;
        break;
      }
      index = this.expression.indexOf(quote, index + 1);
    }
  }
  return r;
};

TokenStream.prototype.isParen = function () {
  var char = this.expression.charAt(this.pos);
  if (char === '(' || char === ')') {
    this.current = this.newToken(TPAREN, char);
    this.pos++;
    this.column++;
    return true;
  }
  return false;
};

TokenStream.prototype.isComma = function () {
  var char = this.expression.charAt(this.pos);
  if (char === ',') {
    this.current = this.newToken(TCOMMA, ',');
    this.pos++;
    this.column++;
    return true;
  }
  return false;
};

TokenStream.prototype.isConst = function () {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c !== '_' && c !== '.' && (c < '0' || c > '9'))) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (str in this.consts) {
      this.current = this.newToken(TNUMBER, this.consts[str]);
      this.pos += str.length;
      this.column += str.length;
      return true;
    }
  }
  return false;
};

TokenStream.prototype.isNamedOp = function () {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c !== '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    if (str in this.binaryOps || str in this.unaryOps || str in this.ternaryOps) {
      this.current = this.newToken(TOP, str);
      this.pos += str.length;
      this.column += str.length;
      return true;
    }
  }
  return false;
};

TokenStream.prototype.isName = function () {
  var startPos = this.pos;
  var i = startPos;
  for (; i < this.expression.length; i++) {
    var c = this.expression.charAt(i);
    if (c.toUpperCase() === c.toLowerCase()) {
      if (i === this.pos || (c !== '_' && (c < '0' || c > '9'))) {
        break;
      }
    }
  }
  if (i > startPos) {
    var str = this.expression.substring(startPos, i);
    this.current = this.newToken(TNAME, str);
    this.pos += str.length;
    this.column += str.length;
    return true;
  }
  return false;
};

TokenStream.prototype.isWhitespace = function () {
  var r = false;
  var char = this.expression.charAt(this.pos);
  while (char === ' ' || char === '\t' || char === '\n' || char === '\r') {
    r = true;
    this.pos++;
    this.column++;
    if (char === '\n') {
      this.line++;
      this.column = 0;
    }
    if (this.pos >= this.expression.length) {
      break;
    }
    char = this.expression.charAt(this.pos);
  }
  return r;
};

var codePointPattern = /^[0-9a-f]{4}$/i;

TokenStream.prototype.unescape = function (v) {
  var index = v.indexOf('\\');
  if (index < 0) {
    return v;
  }

  var buffer = v.substring(0, index);
  while (index >= 0) {
    var c = v.charAt(++index);
    switch (c) {
      case '\'':
        buffer += '\'';
        break;
      case '"':
        buffer += '"';
        break;
      case '\\':
        buffer += '\\';
        break;
      case '/':
        buffer += '/';
        break;
      case 'b':
        buffer += '\b';
        break;
      case 'f':
        buffer += '\f';
        break;
      case 'n':
        buffer += '\n';
        break;
      case 'r':
        buffer += '\r';
        break;
      case 't':
        buffer += '\t';
        break;
      case 'u':
        // interpret the following 4 characters as the hex of the unicode code point
        var codePoint = v.substring(index + 1, index + 5);
        if (!codePointPattern.test(codePoint)) {
          this.parseError('Illegal escape sequence: \\u' + codePoint);
        }
        buffer += String.fromCharCode(parseInt(codePoint, 16));
        index += 4;
        break;
      default:
        throw this.parseError('Illegal escape sequence: "\\' + c + '"');
    }
    ++index;
    var backslash = v.indexOf('\\', index);
    buffer += v.substring(index, backslash < 0 ? v.length : backslash);
    index = backslash;
  }

  return buffer;
};

TokenStream.prototype.isComment = function () {
  var char = this.expression.charAt(this.pos);
  if (char === '/' && this.expression.charAt(this.pos + 1) === '*') {
    var startPos = this.pos;
    this.pos = this.expression.indexOf('*/', this.pos) + 2;
    if (this.pos === 1) {
      this.pos = this.expression.length;
    }
    var comment = this.expression.substring(startPos, this.pos);
    var newline = comment.indexOf('\n');
    while (newline >= 0) {
      this.line++;
      this.column = comment.length - newline;
      newline = comment.indexOf('\n', newline + 1);
    }
    return true;
  }
  return false;
};

TokenStream.prototype.isNumber = function () {
  var valid = false;
  var pos = this.pos;
  var startPos = pos;
  var resetPos = pos;
  var column = this.column;
  var resetColumn = column;
  var foundDot = false;
  var foundDigits = false;
  var char;

  while (pos < this.expression.length) {
    char = this.expression.charAt(pos);
    if ((char >= '0' && char <= '9') || (!foundDot && char === '.')) {
      if (char === '.') {
        foundDot = true;
      } else {
        foundDigits = true;
      }
      pos++;
      column++;
      valid = foundDigits;
    } else {
      break;
    }
  }

  if (valid) {
    resetPos = pos;
    resetColumn = column;
  }

  if (char === 'e' || char === 'E') {
    pos++;
    column++;
    var acceptSign = true;
    var validExponent = false;
    while (pos < this.expression.length) {
      char = this.expression.charAt(pos);
      if (acceptSign && (char === '+' || char === '-')) {
        acceptSign = false;
      } else if (char >= '0' && char <= '9') {
        validExponent = true;
        acceptSign = false;
      } else {
        break;
      }
      pos++;
      column++;
    }

    if (!validExponent) {
      pos = resetPos;
      column = resetColumn;
    }
  }

  if (valid) {
    this.current = this.newToken(TNUMBER, parseFloat(this.expression.substring(startPos, pos)));
    this.pos = pos;
    this.column = column;
  } else {
    this.pos = resetPos;
    this.column = resetColumn;
  }
  return valid;
};

TokenStream.prototype.isOperator = function () {
  var char = this.expression.charAt(this.pos);

  if (char === '+' || char === '-' || char === '*' || char === '/' || char === '%' || char === '^' || char === '?' || char === ':' || char === '.') {
    this.current = this.newToken(TOP, char);
  } else if (char === '∙' || char === '•') {
    this.current = this.newToken(TOP, '*');
  } else if (char === '>') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '>=');
      this.pos++;
      this.column++;
    } else {
      this.current = this.newToken(TOP, '>');
    }
  } else if (char === '<') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '<=');
      this.pos++;
      this.column++;
    } else {
      this.current = this.newToken(TOP, '<');
    }
  } else if (char === '|') {
    if (this.expression.charAt(this.pos + 1) === '|') {
      this.current = this.newToken(TOP, '||');
      this.pos++;
      this.column++;
    } else {
      return false;
    }
  } else if (char === '=') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '==');
      this.pos++;
      this.column++;
    } else {
      return false;
    }
  } else if (char === '!') {
    if (this.expression.charAt(this.pos + 1) === '=') {
      this.current = this.newToken(TOP, '!=');
      this.pos++;
      this.column++;
    } else {
      this.current = this.newToken(TOP, char);
    }
  } else {
    return false;
  }
  this.pos++;
  this.column++;
  return true;
};

TokenStream.prototype.parseError = function (msg) {
  throw new Error('parse error [' + (this.line + 1) + ':' + (this.column + 1) + ']: ' + msg);
};

var unaryInstructionCache = {};
function unaryInstruction(value) {
  var inst = unaryInstructionCache[value];
  if (!inst) {
    inst = unaryInstructionCache[value] = new Instruction(IOP1, value);
  }
  return inst;
}

var binaryInstructionCache = {};
function binaryInstruction(value) {
  var inst = binaryInstructionCache[value];
  if (!inst) {
    inst = binaryInstructionCache[value] = new Instruction(IOP2, value);
  }
  return inst;
}

var ternaryInstructionCache = {};
function ternaryInstruction(value) {
  var inst = ternaryInstructionCache[value];
  if (!inst) {
    inst = ternaryInstructionCache[value] = new Instruction(IOP3, value);
  }
  return inst;
}

function ParserState(parser, tokenStream) {
  this.parser = parser;
  this.tokens = tokenStream;
  this.current = null;
  this.nextToken = null;
  this.next();
  this.savedCurrent = null;
  this.savedNextToken = null;
}

ParserState.prototype.next = function () {
  this.current = this.nextToken;
  return (this.nextToken = this.tokens.next());
};

ParserState.prototype.tokenMatches = function (token, value) {
  if (typeof value === 'undefined') {
    return true;
  } else if (Array.isArray(value)) {
    return indexOf(value, token.value) >= 0;
  } else if (typeof value === 'function') {
    return value(token);
  } else {
    return token.value === value;
  }
};

ParserState.prototype.save = function () {
  this.savedCurrent = this.current;
  this.savedNextToken = this.nextToken;
  this.tokens.save();
};

ParserState.prototype.restore = function () {
  this.tokens.restore();
  this.current = this.savedCurrent;
  this.nextToken = this.savedNextToken;
};

ParserState.prototype.accept = function (type, value) {
  if (this.nextToken.type === type && this.tokenMatches(this.nextToken, value)) {
    this.next();
    return true;
  }
  return false;
};

ParserState.prototype.expect = function (type, value) {
  if (!this.accept(type, value)) {
    throw new Error('parse error [' + this.tokens.line + ':' + this.tokens.column + ']: Expected ' + (value || type));
  }
};

ParserState.prototype.parseAtom = function (instr) {
  if (this.accept(TNAME)) {
    instr.push(new Instruction(IVAR, this.current.value));
  } else if (this.accept(TNUMBER)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TSTRING)) {
    instr.push(new Instruction(INUMBER, this.current.value));
  } else if (this.accept(TPAREN, '(')) {
    this.parseExpression(instr);
    this.expect(TPAREN, ')');
  } else {
    throw new Error('unexpected ' + this.nextToken);
  }
};

ParserState.prototype.parseExpression = function (instr) {
  this.parseConditionalExpression(instr);
};

ParserState.prototype.parseConditionalExpression = function (instr) {
  this.parseOrExpression(instr);
  while (this.accept(TOP, '?')) {
    var trueBranch = [];
    var falseBranch = [];
    this.parseConditionalExpression(trueBranch);
    this.expect(TOP, ':');
    this.parseConditionalExpression(falseBranch);
    instr.push(new Instruction(IEXPR, trueBranch));
    instr.push(new Instruction(IEXPR, falseBranch));
    instr.push(ternaryInstruction('?'));
  }
};

ParserState.prototype.parseOrExpression = function (instr) {
  this.parseAndExpression(instr);
  while (this.accept(TOP, 'or')) {
    this.parseAndExpression(instr);
    instr.push(binaryInstruction('or'));
  }
};

ParserState.prototype.parseAndExpression = function (instr) {
  this.parseComparison(instr);
  while (this.accept(TOP, 'and')) {
    this.parseComparison(instr);
    instr.push(binaryInstruction('and'));
  }
};

ParserState.prototype.parseComparison = function (instr) {
  this.parseAddSub(instr);
  while (this.accept(TOP, ['==', '!=', '<', '<=', '>=', '>'])) {
    var op = this.current;
    this.parseAddSub(instr);
    instr.push(binaryInstruction(op.value));
  }
};

ParserState.prototype.parseAddSub = function (instr) {
  this.parseTerm(instr);
  while (this.accept(TOP, ['+', '-', '||'])) {
    var op = this.current;
    this.parseTerm(instr);
    instr.push(binaryInstruction(op.value));
  }
};

ParserState.prototype.parseTerm = function (instr) {
  this.parseFactor(instr);
  while (this.accept(TOP, ['*', '/', '%'])) {
    var op = this.current;
    this.parseFactor(instr);
    instr.push(binaryInstruction(op.value));
  }
};

ParserState.prototype.parseFactor = function (instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }

  this.save();
  if (this.accept(TOP, isPrefixOperator)) {
    if ((this.current.value !== '-' && this.current.value !== '+' && this.nextToken.type === TPAREN && this.nextToken.value === '(')) {
      this.restore();
      this.parseExponential(instr);
    } else {
      var op = this.current;
      this.parseFactor(instr);
      instr.push(unaryInstruction(op.value));
    }
  } else {
    this.parseExponential(instr);
  }
};

ParserState.prototype.parseExponential = function (instr) {
  this.parsePostfixExpression(instr);
  while (this.accept(TOP, '^')) {
    this.parseFactor(instr);
    instr.push(binaryInstruction('^'));
  }
};

ParserState.prototype.parsePostfixExpression = function (instr) {
  this.parseFunctionCall(instr);
  while (this.accept(TOP, '!')) {
    instr.push(unaryInstruction('!'));
  }
};

ParserState.prototype.parseFunctionCall = function (instr) {
  var unaryOps = this.tokens.unaryOps;
  function isPrefixOperator(token) {
    return token.value in unaryOps;
  }

  if (this.accept(TOP, isPrefixOperator)) {
    var op = this.current;
    this.parseAtom(instr);
    instr.push(unaryInstruction(op.value));
  } else {
    this.parseMemberExpression(instr);
    while (this.accept(TPAREN, '(')) {
      if (this.accept(TPAREN, ')')) {
        instr.push(new Instruction(IFUNCALL, 0));
      } else {
        var argCount = this.parseArgumentList(instr);
        instr.push(new Instruction(IFUNCALL, argCount));
      }
    }
  }
};

ParserState.prototype.parseArgumentList = function (instr) {
  var argCount = 0;

  while (!this.accept(TPAREN, ')')) {
    this.parseExpression(instr);
    ++argCount;
    while (this.accept(TCOMMA)) {
      this.parseExpression(instr);
      ++argCount;
    }
  }

  return argCount;
};

ParserState.prototype.parseMemberExpression = function (instr) {
  this.parseAtom(instr);
  while (this.accept(TOP, '.')) {
    this.expect(TNAME);
    instr.push(new Instruction(IMEMBER, this.current.value));
  }
};

function Parser() {
  this.unaryOps = {
    sin: Math.sin,
    cos: Math.cos,
    tan: Math.tan,
    asin: Math.asin,
    acos: Math.acos,
    atan: Math.atan,
    sinh: Math.sinh || sinh,
    cosh: Math.cosh || cosh,
    tanh: Math.tanh || tanh,
    asinh: Math.asinh || asinh,
    acosh: Math.acosh || acosh,
    atanh: Math.atanh || atanh,
    sqrt: Math.sqrt,
    log: Math.log,
    ln: Math.log,
    lg: Math.log10 || log10,
    log10: Math.log10 || log10,
    abs: Math.abs,
    ceil: Math.ceil,
    floor: Math.floor,
    round: Math.round,
    trunc: Math.trunc || trunc,
    '-': neg,
    '+': Number,
    exp: Math.exp,
    not: not,
    length: stringLength,
    '!': factorial
  };

  this.binaryOps = {
    '+': add,
    '-': sub,
    '*': mul,
    '/': div,
    '%': mod,
    '^': Math.pow,
    '||': concat,
    '==': equal,
    '!=': notEqual,
    '>': greaterThan,
    '<': lessThan,
    '>=': greaterThanEqual,
    '<=': lessThanEqual,
    and: andOperator,
    or: orOperator
  };

  this.ternaryOps = {
    '?': condition
  };

  this.functions = {
    random: random,
    fac: factorial,
    min: Math.min,
    max: Math.max,
    hypot: Math.hypot || hypot,
    pyt: Math.hypot || hypot, // backward compat
    pow: Math.pow,
    atan2: Math.atan2,
    'if': condition,
    gamma: gamma
  };

  this.consts = {
    E: Math.E,
    PI: Math.PI,
    'true': true,
    'false': false
  };
}

Parser.parse = function (expr) {
  return new Parser().parse(expr);
};

Parser.evaluate = function (expr, variables) {
  return Parser.parse(expr).evaluate(variables);
};

Parser.prototype = {
  parse: function (expr) {
    var instr = [];
    var parserState = new ParserState(this, new TokenStream(expr, this.unaryOps, this.binaryOps, this.ternaryOps, this.consts));
    parserState.parseExpression(instr);
    parserState.expect(TEOF, 'EOF');

    return new Expression(instr, this);
  },

  evaluate: function (expr, variables) {
    return this.parse(expr).evaluate(variables);
  }
};

var parser = {
  Parser: Parser,
  Expression: Expression
};

return parser;

})));

},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/add.js":[function(require,module,exports){
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/copy.js":[function(require,module,exports){
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/create.js":[function(require,module,exports){
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/distance.js":[function(require,module,exports){
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/dot.js":[function(require,module,exports){
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/fromValues.js":[function(require,module,exports){
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/multiply.js":[function(require,module,exports){
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/scale.js":[function(require,module,exports){
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/squaredLength.js":[function(require,module,exports){
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
},{}],"/Users/forresto/src/tshirt/node_modules/gl-vec2/subtract.js":[function(require,module,exports){
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],"/Users/forresto/src/tshirt/node_modules/global/document.js":[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":"/Users/forresto/src/tshirt/node_modules/browser-resolve/empty.js"}],"/Users/forresto/src/tshirt/node_modules/global/window.js":[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"/Users/forresto/src/tshirt/node_modules/hyperscript-attribute-to-property/index.js":[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],"/Users/forresto/src/tshirt/node_modules/hyperx/index.js":[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12

module.exports = function (h, opts) {
  h = attrToProp(h)
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        p.push([ VAR, xstate, arg ])
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else cur[1][key] = concat(cur[1][key], parts[i][1])
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else cur[1][key] = concat(cur[1][key], parts[i][2])
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state)) {
          if (state === OPEN) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === TEXT) {
          reg += c
        } else if (state === OPEN && /\s/.test(c)) {
          res.push([OPEN, reg])
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[\w-]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var hasOwn = Object.prototype.hasOwnProperty
function has (obj, key) { return hasOwn.call(obj, key) }

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":"/Users/forresto/src/tshirt/node_modules/hyperscript-attribute-to-property/index.js"}],"/Users/forresto/src/tshirt/node_modules/morphdom/dist/morphdom.js":[function(require,module,exports){
'use strict';

var range; // Create a range object for efficently rendering strings to elements.
var NS_XHTML = 'http://www.w3.org/1999/xhtml';

var doc = typeof document === 'undefined' ? undefined : document;

var testEl = doc ?
    doc.body || doc.createElement('div') :
    {};

// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
var actualHasAttributeNS;

if (testEl.hasAttributeNS) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttributeNS(namespaceURI, name);
    };
} else if (testEl.hasAttribute) {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.hasAttribute(name);
    };
} else {
    actualHasAttributeNS = function(el, namespaceURI, name) {
        return el.getAttributeNode(namespaceURI, name) != null;
    };
}

var hasAttributeNS = actualHasAttributeNS;


function toElement(str) {
    if (!range && doc.createRange) {
        range = doc.createRange();
        range.selectNode(doc.body);
    }

    var fragment;
    if (range && range.createContextualFragment) {
        fragment = range.createContextualFragment(str);
    } else {
        fragment = doc.createElement('body');
        fragment.innerHTML = str;
    }
    return fragment.childNodes[0];
}

/**
 * Returns true if two node's names are the same.
 *
 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
 *       nodeName and different namespace URIs.
 *
 * @param {Element} a
 * @param {Element} b The target element
 * @return {boolean}
 */
function compareNodeNames(fromEl, toEl) {
    var fromNodeName = fromEl.nodeName;
    var toNodeName = toEl.nodeName;

    if (fromNodeName === toNodeName) {
        return true;
    }

    if (toEl.actualize &&
        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
        // If the target element is a virtual DOM node then we may need to normalize the tag name
        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
        // are converted to upper case
        return fromNodeName === toNodeName.toUpperCase();
    } else {
        return false;
    }
}

/**
 * Create an element, optionally with a known namespace URI.
 *
 * @param {string} name the element name, e.g. 'div' or 'svg'
 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
 * its `xmlns` attribute or its inferred namespace.
 *
 * @return {Element}
 */
function createElementNS(name, namespaceURI) {
    return !namespaceURI || namespaceURI === NS_XHTML ?
        doc.createElement(name) :
        doc.createElementNS(namespaceURI, name);
}

/**
 * Copies the children of one DOM element to another DOM element
 */
function moveChildren(fromEl, toEl) {
    var curChild = fromEl.firstChild;
    while (curChild) {
        var nextChild = curChild.nextSibling;
        toEl.appendChild(curChild);
        curChild = nextChild;
    }
    return toEl;
}

function morphAttrs(fromNode, toNode) {
    var attrs = toNode.attributes;
    var i;
    var attr;
    var attrName;
    var attrNamespaceURI;
    var attrValue;
    var fromValue;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        attrName = attr.name;
        attrNamespaceURI = attr.namespaceURI;
        attrValue = attr.value;

        if (attrNamespaceURI) {
            attrName = attr.localName || attrName;
            fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
            }
        } else {
            fromValue = fromNode.getAttribute(attrName);

            if (fromValue !== attrValue) {
                fromNode.setAttribute(attrName, attrValue);
            }
        }
    }

    // Remove any extra attributes found on the original DOM element that
    // weren't found on the target element.
    attrs = fromNode.attributes;

    for (i = attrs.length - 1; i >= 0; --i) {
        attr = attrs[i];
        if (attr.specified !== false) {
            attrName = attr.name;
            attrNamespaceURI = attr.namespaceURI;

            if (attrNamespaceURI) {
                attrName = attr.localName || attrName;

                if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
                }
            } else {
                if (!hasAttributeNS(toNode, null, attrName)) {
                    fromNode.removeAttribute(attrName);
                }
            }
        }
    }
}

function syncBooleanAttrProp(fromEl, toEl, name) {
    if (fromEl[name] !== toEl[name]) {
        fromEl[name] = toEl[name];
        if (fromEl[name]) {
            fromEl.setAttribute(name, '');
        } else {
            fromEl.removeAttribute(name, '');
        }
    }
}

var specialElHandlers = {
    /**
     * Needed for IE. Apparently IE doesn't think that "selected" is an
     * attribute when reading over the attributes using selectEl.attributes
     */
    OPTION: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'selected');
    },
    /**
     * The "value" attribute is special for the <input> element since it sets
     * the initial value. Changing the "value" attribute without changing the
     * "value" property will have no effect since it is only used to the set the
     * initial value.  Similar for the "checked" attribute, and "disabled".
     */
    INPUT: function(fromEl, toEl) {
        syncBooleanAttrProp(fromEl, toEl, 'checked');
        syncBooleanAttrProp(fromEl, toEl, 'disabled');

        if (fromEl.value !== toEl.value) {
            fromEl.value = toEl.value;
        }

        if (!hasAttributeNS(toEl, null, 'value')) {
            fromEl.removeAttribute('value');
        }
    },

    TEXTAREA: function(fromEl, toEl) {
        var newValue = toEl.value;
        if (fromEl.value !== newValue) {
            fromEl.value = newValue;
        }

        if (fromEl.firstChild) {
            // Needed for IE. Apparently IE sets the placeholder as the
            // node value and vise versa. This ignores an empty update.
            if (newValue === '' && fromEl.firstChild.nodeValue === fromEl.placeholder) {
                return;
            }

            fromEl.firstChild.nodeValue = newValue;
        }
    },
    SELECT: function(fromEl, toEl) {
        if (!hasAttributeNS(toEl, null, 'multiple')) {
            var selectedIndex = -1;
            var i = 0;
            var curChild = toEl.firstChild;
            while(curChild) {
                var nodeName = curChild.nodeName;
                if (nodeName && nodeName.toUpperCase() === 'OPTION') {
                    if (hasAttributeNS(curChild, null, 'selected')) {
                        selectedIndex = i;
                        break;
                    }
                    i++;
                }
                curChild = curChild.nextSibling;
            }

            fromEl.selectedIndex = i;
        }
    }
};

var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;

function noop() {}

function defaultGetNodeKey(node) {
    return node.id;
}

function morphdomFactory(morphAttrs) {

    return function morphdom(fromNode, toNode, options) {
        if (!options) {
            options = {};
        }

        if (typeof toNode === 'string') {
            if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
                var toNodeHtml = toNode;
                toNode = doc.createElement('html');
                toNode.innerHTML = toNodeHtml;
            } else {
                toNode = toElement(toNode);
            }
        }

        var getNodeKey = options.getNodeKey || defaultGetNodeKey;
        var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
        var onNodeAdded = options.onNodeAdded || noop;
        var onBeforeElUpdated = options.onBeforeElUpdated || noop;
        var onElUpdated = options.onElUpdated || noop;
        var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
        var onNodeDiscarded = options.onNodeDiscarded || noop;
        var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
        var childrenOnly = options.childrenOnly === true;

        // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
        var fromNodesLookup = {};
        var keyedRemovalList;

        function addKeyedRemoval(key) {
            if (keyedRemovalList) {
                keyedRemovalList.push(key);
            } else {
                keyedRemovalList = [key];
            }
        }

        function walkDiscardedChildNodes(node, skipKeyedNodes) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {

                    var key = undefined;

                    if (skipKeyedNodes && (key = getNodeKey(curChild))) {
                        // If we are skipping keyed nodes then we add the key
                        // to a list so that it can be handled at the very end.
                        addKeyedRemoval(key);
                    } else {
                        // Only report the node as discarded if it is not keyed. We do this because
                        // at the end we loop through all keyed elements that were unmatched
                        // and then discard them in one final pass.
                        onNodeDiscarded(curChild);
                        if (curChild.firstChild) {
                            walkDiscardedChildNodes(curChild, skipKeyedNodes);
                        }
                    }

                    curChild = curChild.nextSibling;
                }
            }
        }

        /**
         * Removes a DOM node out of the original DOM
         *
         * @param  {Node} node The node to remove
         * @param  {Node} parentNode The nodes parent
         * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
         * @return {undefined}
         */
        function removeNode(node, parentNode, skipKeyedNodes) {
            if (onBeforeNodeDiscarded(node) === false) {
                return;
            }

            if (parentNode) {
                parentNode.removeChild(node);
            }

            onNodeDiscarded(node);
            walkDiscardedChildNodes(node, skipKeyedNodes);
        }

        // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
        // function indexTree(root) {
        //     var treeWalker = document.createTreeWalker(
        //         root,
        //         NodeFilter.SHOW_ELEMENT);
        //
        //     var el;
        //     while((el = treeWalker.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
        //
        // function indexTree(node) {
        //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
        //     var el;
        //     while((el = nodeIterator.nextNode())) {
        //         var key = getNodeKey(el);
        //         if (key) {
        //             fromNodesLookup[key] = el;
        //         }
        //     }
        // }

        function indexTree(node) {
            if (node.nodeType === ELEMENT_NODE) {
                var curChild = node.firstChild;
                while (curChild) {
                    var key = getNodeKey(curChild);
                    if (key) {
                        fromNodesLookup[key] = curChild;
                    }

                    // Walk recursively
                    indexTree(curChild);

                    curChild = curChild.nextSibling;
                }
            }
        }

        indexTree(fromNode);

        function handleNodeAdded(el) {
            onNodeAdded(el);

            var curChild = el.firstChild;
            while (curChild) {
                var nextSibling = curChild.nextSibling;

                var key = getNodeKey(curChild);
                if (key) {
                    var unmatchedFromEl = fromNodesLookup[key];
                    if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
                        curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
                        morphEl(unmatchedFromEl, curChild);
                    }
                }

                handleNodeAdded(curChild);
                curChild = nextSibling;
            }
        }

        function morphEl(fromEl, toEl, childrenOnly) {
            var toElKey = getNodeKey(toEl);
            var curFromNodeKey;

            if (toElKey) {
                // If an element with an ID is being morphed then it is will be in the final
                // DOM so clear it out of the saved elements collection
                delete fromNodesLookup[toElKey];
            }

            if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
                return;
            }

            if (!childrenOnly) {
                if (onBeforeElUpdated(fromEl, toEl) === false) {
                    return;
                }

                morphAttrs(fromEl, toEl);
                onElUpdated(fromEl);

                if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
                    return;
                }
            }

            if (fromEl.nodeName !== 'TEXTAREA') {
                var curToNodeChild = toEl.firstChild;
                var curFromNodeChild = fromEl.firstChild;
                var curToNodeKey;

                var fromNextSibling;
                var toNextSibling;
                var matchingFromEl;

                outer: while (curToNodeChild) {
                    toNextSibling = curToNodeChild.nextSibling;
                    curToNodeKey = getNodeKey(curToNodeChild);

                    while (curFromNodeChild) {
                        fromNextSibling = curFromNodeChild.nextSibling;

                        if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        curFromNodeKey = getNodeKey(curFromNodeChild);

                        var curFromNodeType = curFromNodeChild.nodeType;

                        var isCompatible = undefined;

                        if (curFromNodeType === curToNodeChild.nodeType) {
                            if (curFromNodeType === ELEMENT_NODE) {
                                // Both nodes being compared are Element nodes

                                if (curToNodeKey) {
                                    // The target node has a key so we want to match it up with the correct element
                                    // in the original DOM tree
                                    if (curToNodeKey !== curFromNodeKey) {
                                        // The current element in the original DOM tree does not have a matching key so
                                        // let's check our lookup to see if there is a matching element in the original
                                        // DOM tree
                                        if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
                                            if (curFromNodeChild.nextSibling === matchingFromEl) {
                                                // Special case for single element removals. To avoid removing the original
                                                // DOM node out of the tree (since that can break CSS transitions, etc.),
                                                // we will instead discard the current node and wait until the next
                                                // iteration to properly match up the keyed target element with its matching
                                                // element in the original tree
                                                isCompatible = false;
                                            } else {
                                                // We found a matching keyed element somewhere in the original DOM tree.
                                                // Let's moving the original DOM node into the current position and morph
                                                // it.

                                                // NOTE: We use insertBefore instead of replaceChild because we want to go through
                                                // the `removeNode()` function for the node that is being discarded so that
                                                // all lifecycle hooks are correctly invoked
                                                fromEl.insertBefore(matchingFromEl, curFromNodeChild);

                                                fromNextSibling = curFromNodeChild.nextSibling;

                                                if (curFromNodeKey) {
                                                    // Since the node is keyed it might be matched up later so we defer
                                                    // the actual removal to later
                                                    addKeyedRemoval(curFromNodeKey);
                                                } else {
                                                    // NOTE: we skip nested keyed nodes from being removed since there is
                                                    //       still a chance they will be matched up later
                                                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                                                }

                                                curFromNodeChild = matchingFromEl;
                                            }
                                        } else {
                                            // The nodes are not compatible since the "to" node has a key and there
                                            // is no matching keyed node in the source tree
                                            isCompatible = false;
                                        }
                                    }
                                } else if (curFromNodeKey) {
                                    // The original has a key
                                    isCompatible = false;
                                }

                                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                                if (isCompatible) {
                                    // We found compatible DOM elements so transform
                                    // the current "from" node to match the current
                                    // target DOM node.
                                    morphEl(curFromNodeChild, curToNodeChild);
                                }

                            } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                                // Both nodes being compared are Text or Comment nodes
                                isCompatible = true;
                                // Simply update nodeValue on the original node to
                                // change the text value
                                curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                            }
                        }

                        if (isCompatible) {
                            // Advance both the "to" child and the "from" child since we found a match
                            curToNodeChild = toNextSibling;
                            curFromNodeChild = fromNextSibling;
                            continue outer;
                        }

                        // No compatible match so remove the old node from the DOM and continue trying to find a
                        // match in the original DOM. However, we only do this if the from node is not keyed
                        // since it is possible that a keyed node might match up with a node somewhere else in the
                        // target tree and we don't want to discard it just yet since it still might find a
                        // home in the final DOM tree. After everything is done we will remove any keyed nodes
                        // that didn't find a home
                        if (curFromNodeKey) {
                            // Since the node is keyed it might be matched up later so we defer
                            // the actual removal to later
                            addKeyedRemoval(curFromNodeKey);
                        } else {
                            // NOTE: we skip nested keyed nodes from being removed since there is
                            //       still a chance they will be matched up later
                            removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                        }

                        curFromNodeChild = fromNextSibling;
                    }

                    // If we got this far then we did not find a candidate match for
                    // our "to node" and we exhausted all of the children "from"
                    // nodes. Therefore, we will just append the current "to" node
                    // to the end
                    if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
                        fromEl.appendChild(matchingFromEl);
                        morphEl(matchingFromEl, curToNodeChild);
                    } else {
                        var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
                        if (onBeforeNodeAddedResult !== false) {
                            if (onBeforeNodeAddedResult) {
                                curToNodeChild = onBeforeNodeAddedResult;
                            }

                            if (curToNodeChild.actualize) {
                                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
                            }
                            fromEl.appendChild(curToNodeChild);
                            handleNodeAdded(curToNodeChild);
                        }
                    }

                    curToNodeChild = toNextSibling;
                    curFromNodeChild = fromNextSibling;
                }

                // We have processed all of the "to nodes". If curFromNodeChild is
                // non-null then we still have some from nodes left over that need
                // to be removed
                while (curFromNodeChild) {
                    fromNextSibling = curFromNodeChild.nextSibling;
                    if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
                        // Since the node is keyed it might be matched up later so we defer
                        // the actual removal to later
                        addKeyedRemoval(curFromNodeKey);
                    } else {
                        // NOTE: we skip nested keyed nodes from being removed since there is
                        //       still a chance they will be matched up later
                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
                    }
                    curFromNodeChild = fromNextSibling;
                }
            }

            var specialElHandler = specialElHandlers[fromEl.nodeName];
            if (specialElHandler) {
                specialElHandler(fromEl, toEl);
            }
        } // END: morphEl(...)

        var morphedNode = fromNode;
        var morphedNodeType = morphedNode.nodeType;
        var toNodeType = toNode.nodeType;

        if (!childrenOnly) {
            // Handle the case where we are given two DOM nodes that are not
            // compatible (e.g. <div> --> <span> or <div> --> TEXT)
            if (morphedNodeType === ELEMENT_NODE) {
                if (toNodeType === ELEMENT_NODE) {
                    if (!compareNodeNames(fromNode, toNode)) {
                        onNodeDiscarded(fromNode);
                        morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
                    }
                } else {
                    // Going from an element node to a text node
                    morphedNode = toNode;
                }
            } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
                if (toNodeType === morphedNodeType) {
                    morphedNode.nodeValue = toNode.nodeValue;
                    return morphedNode;
                } else {
                    // Text node to something else
                    morphedNode = toNode;
                }
            }
        }

        if (morphedNode === toNode) {
            // The "to node" was not compatible with the "from node" so we had to
            // toss out the "from node" and use the "to node"
            onNodeDiscarded(fromNode);
        } else {
            morphEl(morphedNode, toNode, childrenOnly);

            // We now need to loop over any keyed nodes that might need to be
            // removed. We only do the removal if we know that the keyed node
            // never found a match. When a keyed node is matched up we remove
            // it out of fromNodesLookup and we use fromNodesLookup to determine
            // if a keyed node has been matched up or not
            if (keyedRemovalList) {
                for (var i=0, len=keyedRemovalList.length; i<len; i++) {
                    var elToRemove = fromNodesLookup[keyedRemovalList[i]];
                    if (elToRemove) {
                        removeNode(elToRemove, elToRemove.parentNode, false);
                    }
                }
            }
        }

        if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
            if (morphedNode.actualize) {
                morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
            }
            // If we had to swap out the from node with a new node because the old
            // node was not compatible with the target node then we need to
            // replace the old DOM node in the original DOM tree. This is only
            // possible if the original DOM node was part of a DOM tree which
            // we know is the case if it has a parent node.
            fromNode.parentNode.replaceChild(morphedNode, fromNode);
        }

        return morphedNode;
    };
}

var morphdom = morphdomFactory(morphAttrs);

module.exports = morphdom;

},{}],"/Users/forresto/src/tshirt/node_modules/nanoraf/index.js":[function(require,module,exports){
var window = require('global/window')
var assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  raf = raf || window.requestAnimationFrame

  var inRenderingTransaction = false
  var redrawScheduled = false
  var currentState = null

  // pass new state to be rendered
  // (obj, obj?) -> null
  return function frame (state, prev) {
    assert.equal(typeof state, 'object', 'nanoraf: state should be an object')
    assert.equal(typeof prev, 'object', 'nanoraf: prev should be an object')
    assert.equal(inRenderingTransaction, false, 'nanoraf: new frame was created before previous frame finished')

    // request a redraw for next frame
    if (currentState === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false
        if (!currentState) return

        inRenderingTransaction = true
        render(currentState, prev)
        inRenderingTransaction = false

        currentState = null
      })
    }

    // update data for redraw
    currentState = state
  }
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","global/window":"/Users/forresto/src/tshirt/node_modules/global/window.js"}],"/Users/forresto/src/tshirt/node_modules/nanotick/index.js":[function(require,module,exports){
/* eslint-disable no-eval */
var assert = require('assert')

module.exports = nanotick
var delay = (typeof window !== 'undefined' && window.document)
  ? (typeof setImmediate !== 'undefined')
    ? setImmediate
    : setTimeout
  : eval('process.nextTick')

// Process.nextTick() batching ulity
// null -> fn(any) -> fn(any)
function nanotick () {
  var callbacks = []
  var interval = false

  return function tick (cb) {
    assert.equal(typeof cb, 'function', 'nanotick.tick: cb should be a function')

    var isAsync = false

    executeAsync(function () {
      isAsync = true
    })

    return function wrappedTick () {
      var length = arguments.length
      var args = []
      for (var i = 0; i < length; i++) {
        args.push[arguments[i]]
      }

      if (isAsync) {
        cb.apply(cb, args)
      } else {
        executeAsync(function () {
          cb.apply(cb, args)
        })
      }
    }
  }

  function executeAsync (cb) {
    callbacks.push(cb)

    if (!interval) {
      interval = true
      delay(function () {
        while (callbacks.length > 0) {
          callbacks.shift()()
        }
        interval = false
      })
    }
  }
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js"}],"/Users/forresto/src/tshirt/node_modules/on-load/index.js":[function(require,module,exports){
/* global MutationObserver */
var document = require('global/document')
var window = require('global/window')
var watch = Object.create(null)
var KEY_ID = 'onloadid' + (new Date() % 9e6).toString(36)
var KEY_ATTR = 'data-' + KEY_ID
var INDEX = 0

if (window && window.MutationObserver) {
  var observer = new MutationObserver(function (mutations) {
    if (Object.keys(watch).length < 1) return
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === KEY_ATTR) {
        eachAttr(mutations[i], turnon, turnoff)
        continue
      }
      eachMutation(mutations[i].removedNodes, turnoff)
      eachMutation(mutations[i].addedNodes, turnon)
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: [KEY_ATTR]
  })
}

module.exports = function onload (el, on, off, caller) {
  on = on || function () {}
  off = off || function () {}
  el.setAttribute(KEY_ATTR, 'o' + INDEX)
  watch['o' + INDEX] = [on, off, 0, caller || onload.caller]
  INDEX += 1
  return el
}

function turnon (index, el) {
  if (watch[index][0] && watch[index][2] === 0) {
    watch[index][0](el)
    watch[index][2] = 1
  }
}

function turnoff (index, el) {
  if (watch[index][1] && watch[index][2] === 1) {
    watch[index][1](el)
    watch[index][2] = 0
  }
}

function eachAttr (mutation, on, off) {
  var newValue = mutation.target.getAttribute(KEY_ATTR)
  if (sameOrigin(mutation.oldValue, newValue)) {
    watch[newValue] = watch[mutation.oldValue]
    return
  }
  if (watch[mutation.oldValue]) {
    off(mutation.oldValue, mutation.target)
  }
  if (watch[newValue]) {
    on(newValue, mutation.target)
  }
}

function sameOrigin (oldValue, newValue) {
  if (!oldValue || !newValue) return false
  return watch[oldValue][3] === watch[newValue][3]
}

function eachMutation (nodes, fn) {
  var keys = Object.keys(watch)
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] && nodes[i].getAttribute && nodes[i].getAttribute(KEY_ATTR)) {
      var onloadid = nodes[i].getAttribute(KEY_ATTR)
      keys.forEach(function (k) {
        if (onloadid === k) {
          fn(k, nodes[i])
        }
      })
    }
    if (nodes[i].childNodes.length > 0) {
      eachMutation(nodes[i].childNodes, fn)
    }
  }
}

},{"global/document":"/Users/forresto/src/tshirt/node_modules/global/document.js","global/window":"/Users/forresto/src/tshirt/node_modules/global/window.js"}],"/Users/forresto/src/tshirt/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/forresto/src/tshirt/node_modules/reselect/lib/index.js":[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}
},{}],"/Users/forresto/src/tshirt/node_modules/sheet-router/_pathname.js":[function(require,module,exports){
/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
var protocol = '^(http(s)?(:\/\/))?(www\.)?'
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
var qs = '[\?].*$'
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron)
var prefix = new RegExp(protocol + domain)
var normalize = new RegExp('#')
var suffix = new RegExp(qs)

module.exports = pathname

// replace everything in a route but the pathname and hash
// TODO(yw): ditch 'suffix' and allow qs routing
// (str, bool) -> str
function pathname (route, isElectron) {
  if (isElectron) route = route.replace(stripElectron, '')
  else route = route.replace(prefix, '')
  return route.replace(suffix, '').replace(normalize, '/')
}

},{}],"/Users/forresto/src/tshirt/node_modules/sheet-router/create-location.js":[function(require,module,exports){
var document = require('global/document')
var assert = require('assert')
var xtend = require('xtend')

var qs = require('./qs')

module.exports = createLocation

// takes an initial representation of the location state
// and then synchronize a mutation across all fields
//
// scenarios:
// - create a state object from document.location; we got no state yet
// - create a new state object from a string we pass in; full override mode
// - patch a state object with some value we pass in - lil patchy stuff
//
// (obj?, str?) -> obj
function createLocation (state, patch) {
  if (!state) {
    return {
      pathname: document.location.pathname,
      search: (document.location.search) ? qs(document.location.search) : {},
      hash: document.location.hash,
      href: document.location.href
    }
  } else {
    assert.equal(typeof state, 'object', 'sheet-router/create-location: state should be an object')
    if (typeof patch === 'string') {
      return parseUrl(patch)
    } else {
      assert.equal(typeof patch, 'object', 'sheet-router/create-location: patch should be an object')
      return xtend(state, patch)
    }
  }

  // parse a URL into a kv object inside the browser
  // str -> obj
  function parseUrl (url) {
    var a = document.createElement('a')
    a.href = url

    return {
      href: a.href,
      pathname: a.pathname,
      search: (a.search) ? qs(a.search) : {},
      hash: a.hash
    }
  }
}

},{"./qs":"/Users/forresto/src/tshirt/node_modules/sheet-router/qs.js","assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","global/document":"/Users/forresto/src/tshirt/node_modules/global/document.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js"}],"/Users/forresto/src/tshirt/node_modules/sheet-router/history.js":[function(require,module,exports){
var document = require('global/document')
var window = require('global/window')
var assert = require('assert')

module.exports = history

// listen to html5 pushstate events
// and update router accordingly
// fn(str) -> null
function history (cb) {
  assert.equal(typeof cb, 'function', 'sheet-router/history: cb must be a function')
  window.onpopstate = function () {
    cb({
      pathname: document.location.pathname,
      search: document.location.search,
      href: document.location.href,
      hash: document.location.hash
    })
  }
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","global/document":"/Users/forresto/src/tshirt/node_modules/global/document.js","global/window":"/Users/forresto/src/tshirt/node_modules/global/window.js"}],"/Users/forresto/src/tshirt/node_modules/sheet-router/href.js":[function(require,module,exports){
var window = require('global/window')
var assert = require('assert')

var qs = require('./qs')

module.exports = href

var noRoutingAttrName = 'data-no-routing'

// handle a click if is anchor tag with an href
// and url lives on the same domain. Replaces
// trailing '#' so empty links work as expected.
// (fn(str), obj?) -> undefined
function href (cb, root) {
  assert.equal(typeof cb, 'function', 'sheet-router/href: cb must be a function')

  window.onclick = function (e) {
    if ((e.button && e.button !== 0) || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) return

    var node = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a') return traverse(node.parentNode)
      if (node.href === undefined) return traverse(node.parentNode)
      if (window.location.host !== node.host) return traverse(node.parentNode)
      return node
    })(e.target)

    if (!node) return

    var isRoutingDisabled = node.hasAttribute(noRoutingAttrName)
    if (isRoutingDisabled) return

    e.preventDefault()
    cb({
      pathname: node.pathname,
      search: (node.search) ? qs(node.search) : {},
      href: node.href,
      hash: node.hash
    })
  }
}

},{"./qs":"/Users/forresto/src/tshirt/node_modules/sheet-router/qs.js","assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","global/window":"/Users/forresto/src/tshirt/node_modules/global/window.js"}],"/Users/forresto/src/tshirt/node_modules/sheet-router/index.js":[function(require,module,exports){
var pathname = require('./_pathname')
var wayfarer = require('wayfarer')
var assert = require('assert')

var isLocalFile = (/file:\/\//.test(typeof window === 'object' &&
  window.location && window.location.origin)) // electron support

module.exports = sheetRouter

// Fast, modular client router
// fn(str, any[..]) -> fn(str, any[..])
function sheetRouter (opts, tree) {
  if (!tree) {
    tree = opts
    opts = {}
  }

  assert.equal(typeof opts, 'object', 'sheet-router: opts must be a object')
  assert.ok(Array.isArray(tree), 'sheet-router: tree must be an array')

  var dft = opts.default || '/404'
  assert.equal(typeof dft, 'string', 'sheet-router: dft must be a string')

  var router = wayfarer(dft)
  var prevCallback = null
  var prevRoute = null

  match._router = router

  // register tree in router
  // tree[0] is a string, thus a route
  // tree[0] is an array, thus not a route
  // tree[1] is a function
    // tree[2] is an array
    // tree[2] is not an array
  // tree[1] is an array
  ;(function walk (tree, fullRoute) {
    if (typeof tree[0] === 'string') {
      var route = tree[0].replace(/^[#/]/, '')
    } else {
      var rootArr = tree[0]
    }

    var cb = (typeof tree[1] === 'function') ? tree[1] : null
    var children = (Array.isArray(tree[1]))
      ? tree[1]
      : Array.isArray(tree[2]) ? tree[2] : null

    if (rootArr) {
      tree.forEach(function (node) {
        walk(node, fullRoute)
      })
    }

    if (cb) {
      var innerRoute = route
        ? fullRoute.concat(route).join('/')
        : fullRoute.length ? fullRoute.join('/') : route

      // if opts.thunk is false or only enabled for match, don't thunk
      var handler = (opts.thunk === false || opts.thunk === 'match')
        ? cb
        : thunkify(cb)
      router.on(innerRoute, handler)
    }

    if (Array.isArray(children)) {
      walk(children, fullRoute.concat(route))
    }
  })(tree, [])

  return match

  // match a route on the router
  //
  // no thunking -> call route with all arguments
  // thunking only for match -> call route with all arguments
  // thunking and route is same -> call prev cb with new args
  // thunking and route is diff -> create cb and call with new args
  //
  // (str, [any..]) -> any
  function match (route, arg1, arg2, arg3, arg4, arg5) {
    assert.equal(typeof route, 'string', 'sheet-router: route must be a string')

    if (opts.thunk === false) {
      return router(pathname(route, isLocalFile), arg1, arg2, arg3, arg4, arg5)
    } else if (route === prevRoute) {
      return prevCallback(arg1, arg2, arg3, arg4, arg5)
    } else {
      prevRoute = pathname(route, isLocalFile)
      prevCallback = router(prevRoute)
      return prevCallback(arg1, arg2, arg3, arg4, arg5)
    }
  }
}

// wrap a function in a function so it can be called at a later time
// fn -> obj -> (any, any, any, any, any)
function thunkify (cb) {
  return function (params) {
    return function (arg1, arg2, arg3, arg4, arg5) {
      return cb(params, arg1, arg2, arg3, arg4, arg5)
    }
  }
}

},{"./_pathname":"/Users/forresto/src/tshirt/node_modules/sheet-router/_pathname.js","assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","wayfarer":"/Users/forresto/src/tshirt/node_modules/wayfarer/index.js"}],"/Users/forresto/src/tshirt/node_modules/sheet-router/qs.js":[function(require,module,exports){
var window = require('global/window')

var decodeURIComponent = window.decodeURIComponent
var reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g')

module.exports = qs

// decode a uri into a kv representation :: str -> obj
function qs (uri) {
  var obj = {}
  uri.replace(/^.*\?/, '').replace(reg, map)
  return obj

  function map (a0, a1, a2, a3) {
    obj[decodeURIComponent(a1)] = decodeURIComponent(a3)
  }
}

},{"global/window":"/Users/forresto/src/tshirt/node_modules/global/window.js"}],"/Users/forresto/src/tshirt/node_modules/sheet-router/walk.js":[function(require,module,exports){
const walk = require('wayfarer/walk')
const assert = require('assert')

module.exports = walkSheetRouter

function walkSheetRouter (router, cb) {
  assert.equal(typeof router, 'function', 'sheet-router/walk: router should be a function')
  assert.equal(typeof cb, 'function', 'sheet-router/walk: cb should be a function')

  router = router._router
  return walk(router, cb)
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","wayfarer/walk":"/Users/forresto/src/tshirt/node_modules/wayfarer/walk.js"}],"/Users/forresto/src/tshirt/node_modules/util/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Users/forresto/src/tshirt/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Users/forresto/src/tshirt/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":"/Users/forresto/src/tshirt/node_modules/util/support/isBufferBrowser.js","_process":"/Users/forresto/src/tshirt/node_modules/process/browser.js","inherits":"/Users/forresto/src/tshirt/node_modules/util/node_modules/inherits/inherits_browser.js"}],"/Users/forresto/src/tshirt/node_modules/verlet-constraint/2d.js":[function(require,module,exports){
var vec2 = {
    create: require('gl-vec2/create'),
    add: require('gl-vec2/add'),
    dot: require('gl-vec2/dot'),
    sub: require('gl-vec2/subtract'),
    scale: require('gl-vec2/scale'),
    distance: require('gl-vec2/distance')
}
module.exports = require('./lib/build')(vec2)
},{"./lib/build":"/Users/forresto/src/tshirt/node_modules/verlet-constraint/lib/build.js","gl-vec2/add":"/Users/forresto/src/tshirt/node_modules/gl-vec2/add.js","gl-vec2/create":"/Users/forresto/src/tshirt/node_modules/gl-vec2/create.js","gl-vec2/distance":"/Users/forresto/src/tshirt/node_modules/gl-vec2/distance.js","gl-vec2/dot":"/Users/forresto/src/tshirt/node_modules/gl-vec2/dot.js","gl-vec2/scale":"/Users/forresto/src/tshirt/node_modules/gl-vec2/scale.js","gl-vec2/subtract":"/Users/forresto/src/tshirt/node_modules/gl-vec2/subtract.js"}],"/Users/forresto/src/tshirt/node_modules/verlet-constraint/lib/build.js":[function(require,module,exports){
module.exports = function(vec) {
    var delta = vec.create()
    var scaled = vec.create()

    function Constraint(points, opt) {
        if (!points || points.length !== 2)
            throw new Error('two points must be specified for the constraint')
        if (!points[0].position || !points[1].position)
            throw new Error('must specify verlet-point or similar, with { position }')
        this.points = points
        this.stiffness = 1.0
        if (opt && typeof opt.stiffness === 'number')
            this.stiffness = opt.stiffness

        if (opt && typeof opt.restingDistance === 'number')
            this.restingDistance = opt.restingDistance
        else
            this.restingDistance = vec.distance(this.points[0].position, this.points[1].position)
    }

    Constraint.prototype.solve = function() {
        //distance formula
        var p1 = this.points[0],
            p2 = this.points[1],
            p1vec = p1.position,
            p2vec = p2.position,
            p1mass = typeof p1.mass === 'number' ? p1.mass : 1,
            p2mass = typeof p2.mass === 'number' ? p2.mass : 1

        vec.sub(delta, p1vec, p2vec)
        var d = Math.sqrt(vec.dot(delta, delta))

        //ratio for resting distance
        var restingRatio = d===0 ? this.restingDistance : (this.restingDistance - d) / d
        var scalarP1, 
            scalarP2

        //handle zero mass a little differently
        if (p1mass == 0 && p2mass == 0) {
            scalarP1 = 0
            scalarP2 = 0
        } else if (p1mass == 0 && p2mass > 0) {
            scalarP1 = 0
            scalarP2 = this.stiffness
        } else if (p1mass > 0 && p2mass == 0) {
            scalarP1 = this.stiffness
            scalarP2 = 0
        } else {
            //invert mass quantities
            var im1 = 1.0 / p1mass
            var im2 = 1.0 / p2mass
            scalarP1 = (im1 / (im1 + im2)) * this.stiffness
            scalarP2 = this.stiffness - scalarP1
        }
        
        //push/pull based on mass
        vec.scale(scaled, delta, scalarP1 * restingRatio)
        vec.add(p1vec, p1vec, scaled)
        
        vec.scale(scaled, delta, scalarP2 * restingRatio)
        vec.sub(p2vec, p2vec, scaled)

        return d
    }

    return function(p1, p2, opt) {
        return new Constraint(p1, p2, opt)
    }
}

},{}],"/Users/forresto/src/tshirt/node_modules/verlet-point/2d.js":[function(require,module,exports){
var vec2 = {
    create: require('gl-vec2/create'),
    sub: require('gl-vec2/subtract'),
    copy: require('gl-vec2/copy')
}
module.exports = require('./lib/build')(vec2)
},{"./lib/build":"/Users/forresto/src/tshirt/node_modules/verlet-point/lib/build.js","gl-vec2/copy":"/Users/forresto/src/tshirt/node_modules/gl-vec2/copy.js","gl-vec2/create":"/Users/forresto/src/tshirt/node_modules/gl-vec2/create.js","gl-vec2/subtract":"/Users/forresto/src/tshirt/node_modules/gl-vec2/subtract.js"}],"/Users/forresto/src/tshirt/node_modules/verlet-point/lib/build.js":[function(require,module,exports){
module.exports = function(vec) {
    function Point(opt) {
        this.position = vec.create()
        this.previous = vec.create()
        this.acceleration = vec.create()
        this.mass = 1.0
        this.radius = 0

        if (opt && typeof opt.mass === 'number')
            this.mass = opt.mass
        if (opt && typeof opt.radius === 'number')
            this.radius = opt.radius

        if (opt && opt.position) 
            vec.copy(this.position, opt.position)
        
        if (opt && (opt.previous||opt.position)) 
            vec.copy(this.previous, opt.previous || opt.position)
        
        if (opt && opt.acceleration)
            vec.copy(this.acceleration, opt.acceleration)
    }

    Point.prototype.addForce = function(v) {
        vec.sub(this.previous, this.previous, v)
        return this
    }

    Point.prototype.place = function(v) {
        vec.copy(this.position, v)
        vec.copy(this.previous, v)
        return this
    }

    return function(opt) {
        return new Point(opt)
    }
}
},{}],"/Users/forresto/src/tshirt/node_modules/verlet-system/2d.js":[function(require,module,exports){
var vec2 = {
    create: require('gl-vec2/create'),
    add: require('gl-vec2/add'),
    multiply: require('gl-vec2/multiply'),
    sub: require('gl-vec2/subtract'),
    scale: require('gl-vec2/scale'),
    copy: require('gl-vec2/copy'),
    sqrLen: require('gl-vec2/squaredLength'),
    fromValues: require('gl-vec2/fromValues'),
}
module.exports = require('./lib/build')(vec2)
},{"./lib/build":"/Users/forresto/src/tshirt/node_modules/verlet-system/lib/build.js","gl-vec2/add":"/Users/forresto/src/tshirt/node_modules/gl-vec2/add.js","gl-vec2/copy":"/Users/forresto/src/tshirt/node_modules/gl-vec2/copy.js","gl-vec2/create":"/Users/forresto/src/tshirt/node_modules/gl-vec2/create.js","gl-vec2/fromValues":"/Users/forresto/src/tshirt/node_modules/gl-vec2/fromValues.js","gl-vec2/multiply":"/Users/forresto/src/tshirt/node_modules/gl-vec2/multiply.js","gl-vec2/scale":"/Users/forresto/src/tshirt/node_modules/gl-vec2/scale.js","gl-vec2/squaredLength":"/Users/forresto/src/tshirt/node_modules/gl-vec2/squaredLength.js","gl-vec2/subtract":"/Users/forresto/src/tshirt/node_modules/gl-vec2/subtract.js"}],"/Users/forresto/src/tshirt/node_modules/verlet-system/lib/box-collision.js":[function(require,module,exports){
module.exports = function(vec) {
    var negInfinity = vec.fromValues(-Infinity, -Infinity, -Infinity)
    var posInfinity = vec.fromValues(Infinity, Infinity, Infinity)
    var ones = vec.fromValues(1, 1, 1)
    var reflect = vec.create()
    var EPSILON = 0.000001

    return function collider(p, velocity, min, max, friction) {
        if (!min && !max)
            return
            
        //reset reflection 
        vec.copy(reflect, ones)

        min = min || negInfinity
        max = max || posInfinity

        var i = 0,
            n = p.position.length,
            hit = false,
            radius = p.radius || 0

        //bounce and clamp
        for (i=0; i<n; i++)
            if (typeof min[i] === 'number' && p.position[i]-radius < min[i]) {
                reflect[i] = -1
                p.position[i] = min[i]+radius
                hit = true
            }
        for (i=0; i<n; i++)
            if (typeof max[i] === 'number' && p.position[i]+radius > max[i]) {
                reflect[i] = -1
                p.position[i] = max[i]-radius
                hit = true
            }

        //no bounce
        var len2 = vec.sqrLen(velocity)
        if (!hit || len2 <= EPSILON)
            return

        var m = Math.sqrt(len2)
        if (m !== 0) 
            vec.scale(velocity, velocity, 1/m)

        //scale bounce by friction
        vec.scale(reflect, reflect, m * friction)

        //bounce back
        vec.multiply(velocity, velocity, reflect)
    }
}
},{}],"/Users/forresto/src/tshirt/node_modules/verlet-system/lib/build.js":[function(require,module,exports){
var number = require('as-number')
var clamp = require('clamp')
var createCollider = require('./box-collision')

module.exports = function create(vec) {
    
    var collide = createCollider(vec)

    var velocity = vec.create()
    var tmp = vec.create()
    var zero = vec.create()
    
    function VerletSystem(opt) {
        if (!(this instanceof VerletSystem))
            return new VerletSystem(opt)
        
        opt = opt||{}

        this.gravity = opt.gravity || vec.create()
        this.friction = number(opt.friction, 0.98)
        this.min = opt.min
        this.max = opt.max
        this.bounce = number(opt.bounce, 1)
    }
    
    VerletSystem.prototype.collision = function(p, velocity) {
        collide(p, velocity, this.min, this.max, this.bounce)
    }

    VerletSystem.prototype.integratePoint = function(point, delta) {
        var mass = typeof point.mass === 'number' ? point.mass : 1

        //if mass is zero, assume body is static / unmovable
        if (mass === 0) {
            this.collision(point, zero)
            vec.copy(point.acceleration, zero)
            return
        }

        vec.add(point.acceleration, point.acceleration, this.gravity)
        vec.scale(point.acceleration, point.acceleration, mass)
            
        //difference in positions
        vec.sub(velocity, point.position, point.previous)

        //dampen velocity
        vec.scale(velocity, velocity, this.friction)

        //handle custom collisions in 2D or 3D space
        this.collision(point, velocity)

        //set last position
        vec.copy(point.previous, point.position)
        var tSqr = delta * delta
            
        //integrate
        vec.scale(tmp, point.acceleration, 0.5 * tSqr)
        vec.add(point.position, point.position, velocity)
        vec.add(point.position, point.position, tmp)

        //reset acceleration
        vec.copy(point.acceleration, zero)
    }

    VerletSystem.prototype.integrate = function(points, delta) {
        for (var i=0; i<points.length; i++) {
            this.integratePoint(points[i], delta)
        }
    }

    return VerletSystem
}
},{"./box-collision":"/Users/forresto/src/tshirt/node_modules/verlet-system/lib/box-collision.js","as-number":"/Users/forresto/src/tshirt/node_modules/as-number/index.js","clamp":"/Users/forresto/src/tshirt/node_modules/clamp/index.js"}],"/Users/forresto/src/tshirt/node_modules/wayfarer/index.js":[function(require,module,exports){
const assert = require('assert')
const trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  const _default = (dft || '').replace(/^\//, '')
  const _trie = trie()

  emit._trie = _trie
  emit.emit = emit
  emit.on = on
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb && cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      const node = _trie.create(route)
      node.cb = cb
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    assert.notEqual(route, undefined, "'route' must be defined")
    const args = new Array(arguments.length)
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    const node = _trie.match(route)
    if (node && node.cb) {
      args[0] = node.params
      return node.cb.apply(null, args)
    }

    const dft = _trie.match(_default)
    if (dft && dft.cb) {
      args[0] = dft.params
      return dft.cb.apply(null, args)
    }

    throw new Error("route '" + route + "' did not match")
  }
}

},{"./trie":"/Users/forresto/src/tshirt/node_modules/wayfarer/trie.js","assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js"}],"/Users/forresto/src/tshirt/node_modules/wayfarer/trie.js":[function(require,module,exports){
const mutate = require('xtend/mutable')
const assert = require('assert')
const xtend = require('xtend')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> null
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  const routes = route.replace(/^\//, '').split('/')
  return (function createNode (index, trie, routes) {
    const route = routes[index]

    if (route === undefined) return trie

    var node = null
    if (/^:/.test(route)) {
      // if node is a name match, set name and append to ':' node
      if (!trie.nodes['$$']) {
        node = { nodes: {} }
        trie.nodes['$$'] = node
      } else {
        node = trie.nodes['$$']
      }
      trie.name = route.replace(/^:/, '')
    } else if (!trie.nodes[route]) {
      node = { nodes: {} }
      trie.nodes[route] = node
    } else {
      node = trie.nodes[route]
    }

    // we must recurse deeper
    return createNode(index + 1, node, routes)
  })(0, this.trie, routes)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  const routes = route.replace(/^\//, '').split('/')
  const params = {}

  var node = (function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    const route = routes[index]
    if (route === undefined) return trie

    if (trie.nodes[route]) {
      // match regular routes first
      return search(index + 1, trie.nodes[route])
    } else if (trie.name) {
      // match named routes
      params[trie.name] = decodeURIComponent(route)
      return search(index + 1, trie.nodes['$$'])
    } else {
      // no matches found
      return search(index + 1)
    }
  })(0, this.trie)

  if (!node) return undefined
  node = xtend(node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  const split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    const headArr = split.splice(0, split.length - 1)
    const head = headArr.join('/')
    key = split[0]
    node = this.create(head)
  }

  mutate(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    mutate(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js","xtend/mutable":"/Users/forresto/src/tshirt/node_modules/xtend/mutable.js"}],"/Users/forresto/src/tshirt/node_modules/wayfarer/walk.js":[function(require,module,exports){
const assert = require('assert')

module.exports = walk

// walk a wayfarer trie
// (obj, fn) -> null
function walk (router, transform) {
  assert.equal(typeof router, 'function', 'wayfarer.walk: router should be an function')
  assert.equal(typeof transform, 'function', 'wayfarer.walk: transform should be a function')

  const trie = router._trie
  assert.equal(typeof trie, 'object', 'wayfarer.walk: trie should be an object')

  // (str, obj) -> null
  ;(function walk (route, trie) {
    if (trie.cb) {
      trie.cb = transform(route, trie.cb)
    }

    if (trie.nodes) {
      const nodes = trie.nodes
      Object.keys(nodes).forEach(function (key) {
        const node = nodes[key]
        const newRoute = (key === '$$')
          ? route + '/:' + trie.name
          : route + '/' + key
        walk(newRoute, node)
      })
    }
  })('', trie.trie)
}

},{"assert":"/Users/forresto/src/tshirt/node_modules/assert/assert.js"}],"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/forresto/src/tshirt/node_modules/xtend/mutable.js":[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/Users/forresto/src/tshirt/node_modules/yo-yo/index.js":[function(require,module,exports){
var bel = require('bel') // turns template tag into DOM elements
var morphdom = require('morphdom') // efficiently diffs + morphs two DOM elements
var defaultEvents = require('./update-events.js') // default events to be copied when dom elements update

module.exports = bel

// TODO move this + defaultEvents to a new module once we receive more feedback
module.exports.update = function (fromNode, toNode, opts) {
  if (!opts) opts = {}
  if (opts.events !== false) {
    if (!opts.onBeforeElUpdated) opts.onBeforeElUpdated = copier
  }

  return morphdom(fromNode, toNode, opts)

  // morphdom only copies attributes. we decided we also wanted to copy events
  // that can be set via attributes
  function copier (f, t) {
    // copy events:
    var events = opts.events || defaultEvents
    for (var i = 0; i < events.length; i++) {
      var ev = events[i]
      if (t[ev]) { // if new element has a whitelisted attribute
        f[ev] = t[ev] // update existing element
      } else if (f[ev]) { // if existing element has it and new one doesnt
        f[ev] = undefined // remove it from existing element
      }
    }
    var oldValue = f.value
    var newValue = t.value
    // copy values for form elements
    if ((f.nodeName === 'INPUT' && f.type !== 'file') || f.nodeName === 'SELECT') {
      if (!newValue) {
        t.value = f.value
      } else if (newValue !== oldValue) {
        f.value = newValue
      }
    } else if (f.nodeName === 'TEXTAREA') {
      if (t.getAttribute('value') === null) f.value = t.value
    }
  }
}

},{"./update-events.js":"/Users/forresto/src/tshirt/node_modules/yo-yo/update-events.js","bel":"/Users/forresto/src/tshirt/node_modules/bel/index.js","morphdom":"/Users/forresto/src/tshirt/node_modules/morphdom/dist/morphdom.js"}],"/Users/forresto/src/tshirt/node_modules/yo-yo/update-events.js":[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],"/Users/forresto/src/tshirt/src/app-selectors.js":[function(require,module,exports){
const {createSelector} = require('reselect')
const Parser = require('expr-eval').Parser
const xtend = require('xtend')

const solver = require('./verlet-solver')


const getMeasurements = function (state) {
  return state.pattern.measurements
}

// Expensive should be stuff cached til state.pattern.measurements changes
const getSolvedMeasurements = createSelector(
  [ getMeasurements ],
  function (measurements) {
    const {base, derived} = measurements
    let solved = {}
    for (let i = 0, len = base.length; i < len; i++) {
      const {key, value} = base[i]
      solved[key] = value
    }
    for (let i = 0, len = derived.length; i < len; i++) {
      const {key, value} = derived[i]
      solved[key] = Parser.evaluate(value, solved)
    }
    return solved
  }
)

const getParts = function (state) {
  return state.pattern.parts
}

// Do reflection for parts depending on other parts
const getPartsPoints = createSelector(
  [ getParts ],
  function (parts) {
    return parts.map(function (part) {
      const {id, from, reflect} = part
      if (from) {
        for (let i = 0, len = parts.length; i < len; i++) {
          const fromPart = parts[i]
          if (fromPart.id === from) {
            const xReflect = reflect.indexOf('x') > -1 ? -1 : 1
            const yReflect = reflect.indexOf('y') > -1 ? -1 : 1
            const points = fromPart.points.map(function (point) {
              return {x: point.x * xReflect, y: point.y * yReflect}
            })
            part = xtend(parts[i], {id, points})
            return part
          }
        }
      }
      return part
    })
  }
)

const getSolvedParts = createSelector(
  [ getPartsPoints, getSolvedMeasurements ],
  function (parts, measurements) {
    return parts.map(function (part) {
      const {points, constraints, symmetry} = part
      const solverSteps = 360
      return solver(points, constraints, symmetry, measurements, solverSteps)
    })
  }
)


module.exports = {getSolvedMeasurements, getPartsPoints, getSolvedParts}

},{"./verlet-solver":"/Users/forresto/src/tshirt/src/verlet-solver.js","expr-eval":"/Users/forresto/src/tshirt/node_modules/expr-eval/dist/bundle.js","reselect":"/Users/forresto/src/tshirt/node_modules/reselect/lib/index.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js"}],"/Users/forresto/src/tshirt/src/app.js":[function(require,module,exports){
const html = require('choo/html')
const choo = require('choo')
const xtend = require('xtend')
const css = 0

const {getSolvedMeasurements, getPartsPoints, getSolvedParts} = require('./app-selectors')
const olParts = require('./ol-parts')
const olMeasurements = require('./ol-measurements')
const olDerived = require('./ol-derived')
const olConstraints = require('./ol-constraints')
const svgConstrained = require('./svg-constrained')

const prefix = ((null || true) && "_44855693")

const model = {
  state: {
    pattern: {},
    selectedPart: 0,
    selectedPoint: null,
    solverSteps: 360,
  },
  reducers: {
    selectPart: function (state, data) {
      return { selectedPart: data }
    },
    selectPoint: function (state, data) {
      return { selectedPoint: data }
    },
    setMeasurement: function (state, data) {
      let {pattern} = state
      const base = pattern.measurements.base.slice()
      const {key, value} = data
      for (let i = 0, len = base.length; i < len; i++) {
        const measurement = base[i]
        if (measurement.key === key) {
          // ?
          base[i] = {key, value}
        }
      }
      pattern.measurements.base = base
      pattern.measurements = xtend(pattern.measurements, {})
      pattern = xtend(pattern, {})
      return {pattern}
    },
    setState: function (state, data) {
      return data
    }
  }
}

function mainView (state, prev, send) {
  const {pattern, selectedPart, solverSteps} = state
  const {id, parts, measurements} = pattern
  const solvedMeasurements = getSolvedMeasurements(state)
  const reflectedParts = getPartsPoints(state)
  const solvedParts = getSolvedParts(state)

  function onSetSteps (event) {
    const value = parseInt(event.target.value, 10)
    send('setState', {solverSteps: value})
  }

  return html`
    <main class="${prefix}">
      <h1>${id}</h1>
      <section>
        <h2>base measurements</h2>
        ${olMeasurements(measurements.base, send)}
        todo: load from bodylabs
        <h2>derived values</h2>
        ${olDerived(measurements.derived, solvedMeasurements)}
        todo: add & edit
      </section>
      <section>
        <h2>base part shapes</h2>
        ${olParts(reflectedParts, solvedParts, selectedPart, send)}
        <h2>constraints</h2>
        ${(selectedPart != null) && olConstraints(reflectedParts[selectedPart].constraints)}
        todo:
        <ul>
          <li>add parts</li>
          <li>edit path / drag points</li>
        </ul>
      </section>
      <section>
        <h2>solved shape</h2>
        <input type="range" min="0" max="360" value="${solverSteps}" oninput=${onSetSteps} style="width: 500px;" />
        ${(selectedPart != null) && svgConstrained(reflectedParts[selectedPart], solvedMeasurements, solverSteps, 500, 500, send)}
        todo: select points in selected part, add/edit distance/angle constraints
      </section>
      <section>
        <h2>sewing order</h2>
        todo: sew sim
      </section>
      <section>
        <h2>take over world</h2>
        todo: site for sharing and commissioning (seamster?)
      </section>
      <section>
        <h2>debug</h2>
        <pre style="max-height: 50vh; overflow: auto;">${JSON.stringify(state, null, 2)}</pre>
      </section>
    </main>
  `
}

function startApp (initialState) {
  const app = choo()
  app.router({default: '/'}, ['/', mainView])
  if (initialState) {
    model.state = xtend(model.state, initialState)
  }
  app.model(model)
  const el = app.start()
  return el
}


// const yo = require('yo-yo')

// class App {
//   constructor (initialState) {
//     this.el = this.render(initialState)
//   }
//   render (state) {
//     return yo`
//       <pre>${JSON.stringify(state, null, 2)}</pre>
//     `
//   }
//   setState (state) {
//     const el = this.render(state)
//     yo.update(this.el, el)
//   }
// }

module.exports = startApp

},{"./app-selectors":"/Users/forresto/src/tshirt/src/app-selectors.js","./ol-constraints":"/Users/forresto/src/tshirt/src/ol-constraints.js","./ol-derived":"/Users/forresto/src/tshirt/src/ol-derived.js","./ol-measurements":"/Users/forresto/src/tshirt/src/ol-measurements.js","./ol-parts":"/Users/forresto/src/tshirt/src/ol-parts.js","./svg-constrained":"/Users/forresto/src/tshirt/src/svg-constrained.js","choo":"/Users/forresto/src/tshirt/node_modules/choo/index.js","choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js","sheetify/insert":"/Users/forresto/src/tshirt/node_modules/browserify/lib/_empty.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js"}],"/Users/forresto/src/tshirt/src/geometry.js":[function(require,module,exports){
function pointsBox (points) {
  let top = -Infinity
  let right = -Infinity
  let bottom = Infinity
  let left = Infinity
  for (let i = 0, len = points.length; i < len; i++) {
    const {x, y} = points[i]
    top = Math.max(top, y)
    right = Math.max(right, x)
    bottom = Math.min(bottom, y)
    left = Math.min(left, x)
  }
  const width = right - left
  const height = top - bottom
  return {left, bottom, width, height}
}

function pointReflect (p, p0, p1) {
  const dx = p1.x - p0.x
  const dy = p1.y - p0.y
  const a = (dx * dx - dy * dy) / (dx * dx + dy * dy)
  const b = 2 * dx * dy / (dx * dx + dy * dy)
  const x = a * (p.x - p0.x) + b * (p.y - p0.y) + p0.x
  const y = b * (p.x - p0.x) - a * (p.y - p0.y) + p0.y

  return {x, y}
}

function pointsWithSymmetry (points) {
  if (points.length < 3) {
    throw new Error('Need more than 2 points for symmetry')
  }
  const simPoints = points.slice()
  const a = points[0]
  const b = points[points.length-1]
  // O_o (off-by-one man was here) o_O
  let i = points.length - 2
  while (i > 0) {
    const point = points[i]
    simPoints.push(pointReflect(point, a, b))
    i--
  }
  return simPoints
}

// function pointsTranslate (points, p1, p2) {
//   const dx = p2.x - p1.x
//   const dy = p2.y - p1.y
//   return points.map(function (point) {
//     return {x: point.x + x, y: point.y + y}
//   })
// }

function pointsFit (points, fitWidth, fitHeight, padding = 4) {
  fitWidth -= padding * 2
  fitHeight -= padding * 2
  const {left, bottom, width, height} = pointsBox(points)
  const scale = Math.min(fitWidth/width, fitHeight/height)
  const paddingLeft = Math.max(0, (fitWidth - (width * scale)) / 2)
  const paddingTop = Math.max(0, (fitHeight - (height * scale)) / 2)
  return points.map(function (point) {
    return {
      x: ((point.x - left) * scale) + paddingLeft + padding,
      y: ((point.y - bottom) * scale) + paddingTop + padding,
    }
  })
}

function dClosed (points) {
  let path = 'M '
  for (let i = 0, len = points.length; i < len; i++) {
    const {x, y} = points[i]
    path += x + ' ' + y + ' L '
  }
  path += points[0].x + ' ' + points[0].y
  return path
}

function distanceBetween (a, b) {
  var aSquared = Math.pow((a.x - b.x), 2)
  var bSquared = Math.pow((a.y - b.y), 2)
  return Math.sqrt(aSquared + bSquared)
}

function unitVector (a, b, mult = 1) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const d = distanceBetween(a, b)
  return {
    x: dx / d * mult,
    y: dy / d * mult,
  }
}

function pointAdd (a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  }
}

module.exports = {pointsFit, pointsWithSymmetry, dClosed, distanceBetween, unitVector, pointAdd}
},{}],"/Users/forresto/src/tshirt/src/ol-constraints.js":[function(require,module,exports){
const html = require('choo/html')

const liDistance = function (constraint, index) {
  return html`
  <li>
    <label>
      ${constraint.points.join(', ')}
      ${constraint.distance}
    </label>
  </li>
  `
}

const liAngle = function (constraint, index) {
  return html`
  <li>
    <label>
      ${constraint.points.join(', ')}
      ${constraint.angle}
    </label>
  </li>
  `
}

const olConstraints = function (constraints) {
  const {distances, angles} = constraints
  return html`
  <div>
    <h3>distances</h3>
    <ol>
      ${distances.map(liDistance)}
    </ol>
    <h3>angles</h3>
    <ol>
      ${angles.map(liAngle)}
    </ol>
  </div>
  `
}

module.exports = olConstraints

},{"choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js"}],"/Users/forresto/src/tshirt/src/ol-derived.js":[function(require,module,exports){
const html = require('choo/html')

const olDerived = function (measurements, solvedMeasurements) {

  const liDerived = function (measurement, index) {
    return html`
    <li>
      <label>
        ${measurement.key}
        <input type="text" value="${measurement.value}" disabled></input>
        ${solvedMeasurements[measurement.key]}
      </label>
    </li>
    `
  }

  return html`
  <ol>
    ${measurements.map(liDerived)}
  </ol>
  `
}

module.exports = olDerived
},{"choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js"}],"/Users/forresto/src/tshirt/src/ol-measurements.js":[function(require,module,exports){
const html = require('choo/html')
const css = 0

const prefix = ((null || true) && "_f20ced55")


const liMeasurement = function (measurement, index) {
  const {key, value} = measurement
  const {send} = this

  function onInput (event) {
    const value = parseFloat(event.target.value)
    if (isNaN(value)) return
    send('setMeasurement', {key, value})
  }

  return html`
  <li>
    <label>
      ${key}
      <input type="number" class="spinner"
        value="${value}"
        oninput=${onInput}
      />
      <input type="range" class="slider"
        value="${value}"
        min="0" max="${Math.max(value, 200)}"
        step="0.125"
        oninput=${onInput}
      />
    </label>
  </li>
  `
}

const olMeasurements = function (measurements, send) {
  return html`
  <ol class="${prefix}">
    ${measurements.map(liMeasurement, {send})}
  </ol>
  `
}

module.exports = olMeasurements
},{"choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js","sheetify/insert":"/Users/forresto/src/tshirt/node_modules/browserify/lib/_empty.js"}],"/Users/forresto/src/tshirt/src/ol-parts.js":[function(require,module,exports){
const html = require('choo/html')
const xtend = require('xtend')
const svgPart = require('./svg-part')
// const component = require('nanocomponent')

const WIDTH = 72
const HEIGHT = 72

const liPart = /*component({
  render:*/ function (part, solvedPart, index, selected, send) {
    const {points, constraints, symmetry, id} = part
    const {systemPoints, systemDistances, systemAngles} = solvedPart

    function onClick () {
      send('selectPart', index)
    }
    return html`
    <li
      style="
        background-color: ${selected ? 'cornsilk' : 'transparent'};
      "
      onclick=${onClick}
    >
      ${svgPart(points, symmetry, null, WIDTH, HEIGHT)}
      ${svgPart(systemPoints, symmetry, constraints, WIDTH, HEIGHT, systemDistances, systemAngles)}
      ${id}
    </li>
    `
  }/*,
  onload: function () {
    console.log('onload part')
  },
  onunload: function () {
    console.log('onunload part')
  }
})*/

const olParts = /*component({
  render:*/ function (parts, solvedParts, selectedIndex, send) {
    return html`
    <ol>
      ${parts.map(
        function (part, index) {
          const selected = (selectedIndex === index)
          return liPart(part, solvedParts[index], index, selected, send)
        }
      )}
    </ol>
    `
  }/*,
  onload: function () {
    console.log('onload parts')
  },
  onunload: function () {
    console.log('onunload parts')
  }
})*/

module.exports = olParts

},{"./svg-part":"/Users/forresto/src/tshirt/src/svg-part.js","choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js","xtend":"/Users/forresto/src/tshirt/node_modules/xtend/immutable.js"}],"/Users/forresto/src/tshirt/src/svg-constrained.js":[function(require,module,exports){
const html = require('choo/html')
const svgPart = require('./svg-part')
const solver = require('./verlet-solver')

const svgConstrained = function (part, measurements, solverSteps = 360, width = 500, height = 500) {
  const {points, symmetry, constraints} = part
  const {systemPoints, systemDistances, systemAngles} = solver(points, constraints, symmetry, measurements, solverSteps)

  return svgPart(systemPoints, symmetry, constraints, width, height, systemDistances, systemAngles)
}

module.exports = svgConstrained

},{"./svg-part":"/Users/forresto/src/tshirt/src/svg-part.js","./verlet-solver":"/Users/forresto/src/tshirt/src/verlet-solver.js","choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js"}],"/Users/forresto/src/tshirt/src/svg-part.js":[function(require,module,exports){
const html = require('choo/html')
const {pointsFit, pointsWithSymmetry, dClosed, unitVector, pointAdd} = require('./geometry.js')

function line (a, b, width = 1, stroke = 'green') {
  return html`<line
    x1=${a.x}
    y1=${a.y}
    x2=${b.x}
    y2=${b.y}
    stroke-width="${width}"
    stroke="${stroke}"
  />`
}

function lineDistance (distance, points) {
  // TODO show diff / stretch
  let lines = []
  for (let i = 0, len = distance.points.length; i < len - 1; i++) {
    let a = distance.points[i]
    if (a < 0) a = points.length + a
    let b = distance.points[i+1]
    if (b < 0) b = points.length + b

    lines.push(line(points[a], points[b], 1, 'blue'))
  }
  return lines
}

function gDistances (distances, points) {
  return html`
  <g>
    ${distances.map(function (distance) { return lineDistance(distance, points) })}
  </g>
  `
}

function arcAngle (systemAngle, points) {
  const {restingAngle, angle, diff} = systemAngle
  const a = points[systemAngle.points[0].index]
  const b = points[systemAngle.points[1].index]
  const c = points[systemAngle.points[2].index]
  let fill = 'transparent'
  if (angle != null) {
    const alpha = Math.abs(diff) / Math.PI
    fill = `rgba(255,0,0,${alpha})`
  }
  const r = 10
  const angleStart = pointAdd(unitVector(b, a, r), b)
  const angleEnd = pointAdd(unitVector(b, c, r), b)
  const largeArc = (angle || restingAngle) > Math.PI/2 ? 1 : 0
  return html`
  <g>
    <path d="
      M ${b.x} ${b.y}
      L ${angleStart.x} ${angleStart.y}
      A ${r} ${r} 0 ${largeArc} 0 ${angleEnd.x} ${angleEnd.y}
      Z
    " stroke="black" fill="${fill}" />
  </g>
  `
}

function gAngles (systemAngles, points) {
  return html`
  <g>
    ${systemAngles.map(function (angle) { return arcAngle(angle, points) })}
  </g>
  `
}

function gPoint (point, index, count, symmetry) {
  if (symmetry && index > count/2) {
    index = index - count
  }
  return html`
  <g transform="translate(${point.x} ${point.y})">
    <rect x="5" y="-10" width="20" height="20" fill="rgba(255, 255, 255, 0.75)" stroke="none" />
    <circle cx="0" cy="0" r="2" fill="black" stroke="none" />
    <text x="10" y="5">${index}</text>
  </g>
  `
}

function gPoints (points, symmetry) {
  const count = points.length
  return html`
  <g>
    ${points.map(function (point, index) { return gPoint(point, index, count, symmetry)})}
  </g>
  `
}

function svgPart (points, symmetry = false, constraints = null, width = 72, height = 72, systemDistances = null, systemAngles = null) {
  const lastIndex = points.length-1
  if (symmetry) {
    points = pointsWithSymmetry(points)
  }
  points = pointsFit(points, width, height)
  return html`
    <svg
      width="${width}" height="${height}"
      style="
        overflow:visible;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #eee;
      "
    >
      <path
        d="${dClosed(points)}"
        fill="#fff" stroke="#000" stroke-width="1"
      />
      ${constraints && constraints.distances && gDistances(constraints.distances, points)}
      ${(width >= 200) && systemAngles && gAngles(systemAngles, points)}
      ${symmetry && line(points[0], points[lastIndex])}
      
      ${(width >= 200) && gPoints(points, symmetry)}
    </svg>
  `
}

module.exports = svgPart

},{"./geometry.js":"/Users/forresto/src/tshirt/src/geometry.js","choo/html":"/Users/forresto/src/tshirt/node_modules/choo/html.js"}],"/Users/forresto/src/tshirt/src/verlet-constraint-angle-2d.js":[function(require,module,exports){
function angle (a, b) {
  return Math.atan2(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1])
}

function angle2 (a, b, c) {
  const ab = [a[0] - b[0], a[1] - b[1]]
  const cb = [c[0] - b[0], c[1] - b[1]]
  return angle(ab, cb)
}

function rotate (point, origin, theta) {
  const x = point[0] - origin[0]
  const y = point[1] - origin[1]
	return [
    x * Math.cos(theta) - y * Math.sin(theta) + origin[0],
    x * Math.sin(theta) + y * Math.cos(theta) + origin[1]
  ]
}


function AngleConstraint(points, opt) {
  if (!points || points.length !== 3) {
    throw new Error('three points must be specified for the constraint')
  }
  if (!points[0].position || !points[1].position || !points[2].position) {
    throw new Error('must specify verlet-point or similar, with { position }')
  }
  this.points = points
  this.stiffness = 1.0
  if (opt && typeof opt.stiffness === 'number') {
    this.stiffness = opt.stiffness
  }

  if (opt && typeof opt.restingAngle === 'number') {
    this.restingAngle = opt.restingAngle
  } else {
    this.restingAngle = angle2(this.points[0].position, this.points[1].position, this.points[2].position)
  }
}

AngleConstraint.prototype.solve = function (step = 60) {
  const a = this.points[0]
  const b = this.points[1]
  const c = this.points[2]

  // const aMass = typeof a.mass === 'number' ? a.mass : 1
  // const bMass = typeof b.mass === 'number' ? b.mass : 1
  // const cMass = typeof c.mass === 'number' ? c.mass : 1

  const angle = angle2(a.position, b.position, c.position)
  let diff = angle - this.restingAngle

	if (diff <= -Math.PI) {
		diff += 2*Math.PI
  } else if (diff >= Math.PI) {
		diff -= 2*Math.PI
  }

  this.angle = angle
  this.diff = diff

  diff *= this.stiffness * (1 / step)

  a.position = rotate(a.position, b.position, diff)
  c.position = rotate(c.position, b.position, -diff)
  b.position = rotate(b.position, a.position, diff)
  b.position = rotate(b.position, c.position, -diff)
}

module.exports = {AngleConstraint, rotate}

},{}],"/Users/forresto/src/tshirt/src/verlet-solver.js":[function(require,module,exports){
// Experiment to do n integrations of verlet system, 
// synchronous, not animated

const System = require('verlet-system')
const Point = require('verlet-point')
const Constraint = require('verlet-constraint')
const {AngleConstraint, rotate} = require('./verlet-constraint-angle-2d')
const {pointsWithSymmetry, distanceBetween} = require('./geometry.js')


function pointToVertex (point, index) {
  const p = new Point({position: pointToPosition(point)})
  p.index = index
  return p
}

function pointToPosition (point) {
  return [point.x, point.y]
}

function vertexToPoint (vertex) {
  return positionToPoint(vertex.position)
}

function positionToPoint (position) {
  return {x: position[0], y: position[1]}
}

function verticesRotate (vertices, a1, b1, a2, b2) {
  function vectorAngle (a, b) {
    return Math.atan2(b[1] - a[1], b[0] - a[0])
  }
  const angle1 = vectorAngle(a1, b1)
  const angle2 = vectorAngle(a2, b2)
  const theta = angle1 - angle2
  const x = (a2[0] + b2[0]) / 2
  const y = (a2[1] + b2[1]) / 2
  const origin = [x, y]
  return vertices.map(function (vertex) {
    return rotate(vertex.position, origin, theta)
  })
}

function getDistance (constraint, measurements) {
  if (measurements[constraint.distance]) return measurements[constraint.distance]
  throw new Error('measurement not found')
}

function mutableMergeConstraint(mutable, constraint) {
  const mA = constraint.points[0]
  const mB = constraint.points[1]
  for (let i = 0, len = mutable.length; i < len; i++) {
    const base = mutable[i]
    const bA = base.points[0]
    const bB = base.points[1]
    if ((bA === mA && bB === mB) || (bA === mB && bB === mA)) {
      mutable[i] = constraint
      return
    }
  }
  mutable.push(constraint)
}

function mergeDistance (vertices, mutable, constraint, measurements) {
  const constraintVertices = constraint.points.map(function (index) {
    if (index < 0) {
      index = vertices.length + index
    }
    return vertices[index]
  })
  let distances = []
  const baseDistance = constraintVertices.reduce(function (acc, vertex, index) {
    const a = vertex
    const b = constraintVertices[index+1]
    if (!a || !b) return acc
    const aPoint = {x: a.position[0], y: a.position[1]}
    const bPoint = {x: b.position[0], y: b.position[1]}
    const d = distanceBetween(aPoint, bPoint)
    distances[index] = d
    return acc + d
  }, 0)
  const baseRatios = distances.map(function (distance) {
    return distance / baseDistance
  })
  const restDistance = getDistance(constraint, measurements)
  const restDistances = baseRatios.map(function (ratio) {
    return restDistance * ratio
  })

  for (let i = 0, len = restDistances.length; i < len; i++) {
    const restingDistance = restDistances[i]
    const a = constraintVertices[i]
    const b = constraintVertices[i+1]
    const toMerge = new Constraint([a, b], {restingDistance, stiffness: 0.9})
    mutableMergeConstraint(mutable, toMerge)
  }

  return mutable
}

function mergeDistances (vertices, baseConstraints, distances, measurements) {
  let mutable = baseConstraints.slice()
  for (let i = 0, len = distances.length; i < len; i++) {
    mergeDistance(vertices, mutable, distances[i], measurements)
  }
  return mutable
}

// Distance constraints from initial positions
function verticesToDistances (vertices) {
  const len = vertices.length
  return vertices.map(function (vertex, i) {
    var a = i
    var b = (i + 1) % len
    return new Constraint([vertices[a], vertices[b]], {stiffness: 0.1})
  })
}

// Angle constraints from initial positions
function verticesToAngles (vertices) {
  const len = vertices.length
  return vertices.map(function (vertex, i) {
    var a = i
    var b = (i + 1) % len
    var c = (i + 2) % len
    return new AngleConstraint([vertices[a], vertices[b], vertices[c]], {stiffness: 0.5})
  })
}

function solver (points, constraints, symmetry, measurements, steps = 360) {
  const {distances, angles} = constraints

  if ((!distances || !distances.length) && (!angles || !angles.length)) {
    // Short-circuit
    return {systemPoints: points}
  }

  const inputPoints = points.slice()
  const inputLength = inputPoints.length

  if (symmetry) {
    points = pointsWithSymmetry(points)
  }

  const system = System()
  const baseVertices = points.map(pointToVertex)
  const baseDistances = verticesToDistances(baseVertices)
  const mergedDistances = mergeDistances(baseVertices, baseDistances, distances, measurements)
  const baseAngles = verticesToAngles(baseVertices)
  const mergedAngles = baseAngles

  const systemVertices = baseVertices
  const systemDistances = mergedDistances
  const systemAngles = mergedAngles

  function tick() {
    // Integrate the physics
    system.integrate(baseVertices, 1000/60)

    // Distance constraint solving
    for (let i = 0, len = systemDistances.length; i < len; i++) {
      systemDistances[i].solve()
    }

    // Angle constraint solving
    for (let i = 0, len = systemAngles.length; i < len; i++) {
      systemAngles[i].solve()
    }
  }

  // Tick world synchronously
  for (let i = 0; i < steps; i++) {
    tick()
  }

  // HACK to fix rotation
  const a1 = pointToPosition(inputPoints[0])
  const b1 = pointToPosition(inputPoints[inputLength - 1])
  const outVertices = baseVertices.slice(0, inputLength - 0)
  const a2 = outVertices[0].position
  const b2 = outVertices[outVertices.length - 1].position
  const rotated = verticesRotate(outVertices, a1, b1, a2, b2)

  return {
    systemPoints: rotated.map(positionToPoint),
    systemDistances,
    systemAngles,
  }
}

module.exports = solver

},{"./geometry.js":"/Users/forresto/src/tshirt/src/geometry.js","./verlet-constraint-angle-2d":"/Users/forresto/src/tshirt/src/verlet-constraint-angle-2d.js","verlet-constraint":"/Users/forresto/src/tshirt/node_modules/verlet-constraint/2d.js","verlet-point":"/Users/forresto/src/tshirt/node_modules/verlet-point/2d.js","verlet-system":"/Users/forresto/src/tshirt/node_modules/verlet-system/2d.js"}]},{},["/Users/forresto/src/tshirt/demo.js"]);
