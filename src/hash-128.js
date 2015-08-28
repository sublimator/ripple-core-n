'use strict';

const makeClass = require('./extend-class');
const {Hash} = require('./hash');

const Hash128 = makeClass({
  extends: Hash,
  static: {width: 16}
});

module.exports = {
  Hash128
};