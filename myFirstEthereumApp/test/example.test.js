const assert = require('assert');

class CoconutFactory{
  getCoconutWater() {
    return 'Here is some coconut water!';
  }
  getCoconutMilk() {
    return 'Here is some coconut milk!';
  }
}

let coconutFactory;

beforeEach(() => {
  coconutFactory = new CoconutFactory;
});

describe('Tests for Coconut Factory', () => {
  it('can make coconut water', () => {
    assert.equal(coconutFactory.getCoconutWater(),'Here is some coconut water!');
  });
  it('can make coconut milk', () => {
    assert.equal(coconutFactory.getCoconutMilk(),'Here is some coconut milk!');
  });
});
