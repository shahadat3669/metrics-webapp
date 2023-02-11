import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from '../components/Countries';
import store from '../app/store';

describe('Rockets', () => {
  test('renders Rockets Page without crashing', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree.toJSON).toMatchSnapshot();
  });

  test('renders Rockets Page without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Countries />
        </BrowserRouter>
      </Provider>,
    );
    container.querySelector('.mainTitle');
    expect(container.firstChild).toMatchSnapshot();

    container.querySelector('.first_color');
    expect(container.firstChild).toMatchSnapshot();
  });
});
