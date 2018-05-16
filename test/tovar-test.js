const { expect } = require('chai');
const t = require('..');

describe('tovar', function() {
  it('can pass a string', function() {
    expect(t( 'Hello World!' )).to.equal( 'Hello World!' );
  });

  it('can pass an integer', function() {
    expect(t( 42 )).to.equal( 42 );
  });

  it('can also pass undefined values!!!', function() {
    expect(t(undefined)).to.be.undefined;
  })
});
