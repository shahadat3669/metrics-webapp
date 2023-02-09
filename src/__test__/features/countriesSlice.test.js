import store from '../../app/store';
import reducer, {
  fetchCountries,
} from '../../features/countries/countriesSlice';

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

  it('Countries fulfilled state', async () => {
    const result = await store.dispatch(fetchCountries('europe'));
    expect(result.type).toBe('countries/FETCH_COUNTRIES/fulfilled');
    const state = store.getState().countries;
    expect(state.status).toBe('succeeded');
    expect(state.countries.length).toBe(53);
  });

  test('Countries rejected state', () => {
    const prevState = { status: 'idle', countries: [], error: null };
    const action = {
      type: 'countries/FETCH_COUNTRIES/rejected',
      error: { message: 'Not Found' },
    };
    const state = reducer(prevState, action);
    expect(state).toEqual({
      status: 'failed',
      countries: [],
      error: 'Not Found',
    });
  });
});
