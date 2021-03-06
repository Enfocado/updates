const helpers = require('../helpers/helpers.js');

describe('cutOffDesc', () => {
  const longDesc = 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a';
  const shortDesc = 'a a a a a a a a a a a a';
  it('should not truncate descriptions that not longer than 24 words', () => {
    expect(helpers.cutOffDesc(shortDesc)).toEqual(shortDesc);
  });

  it('should truncate descriptions that are longer than 24 words', () => {
    expect(helpers.cutOffDesc(longDesc)).not.toEqual(longDesc);
  });

  it('should add "... " to the end of descriptions that are longer than 24 words', () => {
    const truncatedDesc = helpers.cutOffDesc(longDesc);
    expect(truncatedDesc.slice(truncatedDesc.length - 4, truncatedDesc.length)).toEqual('... ');
  });
});

describe('getColor', () => {
  it('should reset color to 0 if newRender parameter is passed a truthy argument', () => {
    expect(helpers.getColor(true)).toEqual('#5fc');
  });

  it('should increment color when called', () => {
    const first = helpers.getColor();
    expect(helpers.getColor()).not.toEqual(first);
  });
});
