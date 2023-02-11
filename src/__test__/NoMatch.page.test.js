import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NoMatch from '../pages/NoMatch';
import store from '../app/store';

describe('NoMatch', () => {
  test('renders NoMatch Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoMatch />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders NoMatch Page without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NoMatch />
        </BrowserRouter>
      </Provider>,
    );
    container.querySelector('.mainTitle');
    expect(container.firstChild).toMatchSnapshot();

    container.querySelector('.first_color');
    expect(container.firstChild).toMatchSnapshot();
  });
});
