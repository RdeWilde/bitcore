'use strict';

var should = require('chai').should();
var ioncore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(ioncore.crypto);
    should.exist(ioncore.encoding);
    should.exist(ioncore.util);
    should.exist(ioncore.errors);
    should.exist(ioncore.Address);
    should.exist(ioncore.Block);
    should.exist(ioncore.MerkleBlock);
    should.exist(ioncore.BlockHeader);
    should.exist(ioncore.HDPrivateKey);
    should.exist(ioncore.HDPublicKey);
    should.exist(ioncore.Networks);
    should.exist(ioncore.Opcode);
    should.exist(ioncore.PrivateKey);
    should.exist(ioncore.PublicKey);
    should.exist(ioncore.Script);
    should.exist(ioncore.Transaction);
    should.exist(ioncore.URI);
    should.exist(ioncore.Unit);
  });
});
