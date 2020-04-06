import { medalists, sortData, athleteNameFilter } from './data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('data', () => {
  it('Es un objeto', () => {
    expect(typeof data).toBe('object');
  });

  describe('data.medalists', () => {
    it('Es una función', () => {
      expect(typeof data.medalists).toBe('function');
    });
  
    it('Debería retornar `example`', () => {
      expect(data.medalists()).toBe('example');
    });
  });

});
