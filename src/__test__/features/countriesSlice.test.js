import store from '../../app/store';
import reducer from '../../features/countries/countriesSlice';

describe('Countries redux state tests', () => {
  it('Initial State', () => {
    const state = store.getState().countries;
    expect(state.status).toEqual('idle');
    expect(state.countries).toEqual([]);
  });

  test('Countries pending state', () => {
    const prevState = { status: 'idle', countries: [], error: null };
    const action = {
      type: 'countries/FETCH_COUNTRIES/pending',
    };
    const state = reducer(prevState, action);
    expect(state).toEqual({
      status: 'loading',
      countries: [],
      error: null,
    });
  });
});
