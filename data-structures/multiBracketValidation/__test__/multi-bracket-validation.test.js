'use strict';

const multiTest = require('../multi-bracket-validation');


describe('Testing MULTI BRACKET VALIDATION!!!', () => {
  test('This tests to see if brackets are populating the stack', () => {

    multiTest('{');

    expect(multiTest('{,}')).toBe(true);
  });

  test('Tests an unpaired brace', () => {
    expect(multiTest('{, {')).toBe(false);
  });

  test('Tests mismatched braces', () => {
    expect(multiTest('{, )')).toBe(false);
  });

  test('Tests an unpaired brace', () => {
    expect(multiTest('{, ]')).toBe(false);
  });

  test('Tests an unpaired brace', () => {
    expect(multiTest('(, }')).toBe(false);
  });

  test('Tests paired parens', () => {
    expect(multiTest('(, )')).toBe(true);
  });

  test('Tests paired square braces', () => {
    expect(multiTest('[, ]')).toBe(true);
  });
  test('Tests INSANITY MODE', () => {
    expect(multiTest('(({})), [({})], {{{}}}, ((())), [{E(L){E}[P](h)@[[N]]T}], (;)')).toBe(true);
  });
});