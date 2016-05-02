import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

global.expect = chai.expect;
global.sinon = sinon;
global.AssertionError = chai.AssertionError;

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe('your module', () => {
  it('should do cool stuff', () => {
    return expect(true).to.equal(true);
  });
});
