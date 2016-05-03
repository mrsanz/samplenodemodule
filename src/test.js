import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import mod from './index';
import mod2 from '../lib/index';

global.sinon = sinon;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
chai.use(sinonChai);

describe('This module', () => {
  it('should give 100% coveage', () => {
    const arr = ['it', 'should', 'be', 'covered'];
    expect(mod.sampleCoverage(arr)).to.equal(arr);
  });
});

describe('This module', () => {
  it('should give 100% coveage', () => {
    const arr = ['it', 'should', 'be', 'covered'];
    expect(mod2.sampleCoverage(arr)).to.equal(arr);
  });
});
