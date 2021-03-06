"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = toString;
exports.toClass = toClass;

function toString(klass) {
  switch (klass) {
    case 1:
      return 'IN';

    case 2:
      return 'CS';

    case 3:
      return 'CH';

    case 4:
      return 'HS';

    case 255:
      return 'ANY';
  }

  return 'UNKNOWN_' + klass;
}

function toClass(name) {
  switch (name.toUpperCase()) {
    case 'IN':
      return 1;

    case 'CS':
      return 2;

    case 'CH':
      return 3;

    case 'HS':
      return 4;

    case 'ANY':
      return 255;
  }

  return 0;
}