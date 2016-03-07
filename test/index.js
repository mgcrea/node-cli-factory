import 'source-map-support/register';

import chai from 'chai';
// import sinon from 'sinon';
import path from 'path';
const expect = chai.expect;

import Component from './..';

describe('Component', () => {
  describe('#constructor()', () => {
    it('should properly merge options', () => {
      const component = new Component();
      expect(component.config).to.be.a('object');
      expect(component.config.cwd).to.eql(path.resolve(__dirname, '..'));
    });
  });
});
