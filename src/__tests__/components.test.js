import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import CryptoDetails from '../components/Detail';
import store from '../redux/store';

describe('Testing for all components', () => {
  it('Testing for the Home Components', () => {
    const UI = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route element={<Home />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(UI).toMatchSnapshot();
  });

  it('Testing for the CryptoDetails component', () => {
    const UI = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bitcoin']}>
          <Routes>
            <Route element={<CryptoDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(UI).toMatchSnapshot();
  });

  it('Testing the NavBar component', () => {
    const renderedNavBar = render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>,
    );

    expect(renderedNavBar).toMatchSnapshot();
  });
});
