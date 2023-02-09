import store from '../../app/store';

describe('Countries redux state tests', () => {
  it('Initial State', () => {
    const state = store.getState().countries;
    expect(state.status).toEqual('idle');
    expect(state.countries).toEqual([]);
  });
});
