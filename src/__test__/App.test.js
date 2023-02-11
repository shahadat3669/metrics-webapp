import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../app/store';

describe('App', () => {
  test('renders App without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders App without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    container.querySelector('.mainTitle');
    expect(container.firstChild).toMatchSnapshot();

    container.querySelector('.first_color');
    expect(container.firstChild).toMatchSnapshot();
  });
});
