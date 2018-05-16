const expect = require('expect');
const tovar = require('..');

describe('tovar', function() {
  it('can pass a string', function() {
    expect(tovar( 'Hello World!' )).to.be( 'Hello World!' )
  });

  it('can pass an integer', function() {
    expect(tovar( 42 )).to.be( 42 )
  });

  it('can also pass undefined values!!!', function() {
    expect(tovar(undefined)).to.be(undefined)
  })
});
