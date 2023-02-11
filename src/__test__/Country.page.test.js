import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../pages/Country';
import store from '../app/store';

describe('Country', () => {
  test('renders Country Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Country />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders Country Page without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Country />
        </BrowserRouter>
      </Provider>,
    );
    container.querySelector('.mainTitle');
    expect(container.firstChild).toMatchSnapshot();

    container.querySelector('.first_color');
    expect(container.firstChild).toMatchSnapshot();
  });
});
