'use strict';

const makeClass = require('../make-class');
const {parseBytes, bytesToHex} = require('../bytes-utils');

const Blob = makeClass({
  Blob(bytes) {
    this._bytes = parseBytes(bytes, Uint8Array);
  },
  toBytesSink(sink) {
    sink.put(this._bytes);
  },
  static: {
    fromParser(parser, hint) {
      return new this(parser.read(hint));
    },
    from(value) {
      if (value instanceof this) {
        return value;
      }
      return new this(parseBytes(value));
    }
  },
  toJSON() {
    return bytesToHex(this._bytes);
  }
});

module.exports = {
  Blob
};
