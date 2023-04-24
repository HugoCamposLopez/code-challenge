import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import FilterButton from '../src/components/Molecules/FilterButton/FilterButton';

// const mockedNavigate = jest.fn()
// jest.mock('@react-navigation/native', () => {
//   const actualNav = jest.requireActual('@react-navigation/native')
//   return {
//     ...actualNav,
//     useNavigation: () => ({
//       navigate: mockedNavigate,
//     }),
//   }
// })

const filterAll = jest.fn();
const filterPositive = jest.fn();
const filterNegative = jest.fn();
describe('<FilterButton/>', () => {
  it('Should render correctly with Filter', () => {
    render(
      <FilterButton
        isFilter={true}
        filterAll={filterAll}
        filterNegative={filterNegative}
        filterPositive={filterPositive}
      />,
    );
    const button = screen.getByText('Todos');
    expect(button).toBeDefined();
  });
  it('Work properly with Filter', () => {
    render(
      <FilterButton
        isFilter={true}
        filterAll={filterAll}
        filterNegative={filterNegative}
        filterPositive={filterPositive}
      />,
    );
    const button = screen.getByText('Todos');
    fireEvent.press(button)
    expect(filterAll).toBeCalled()
  });
  it('Should render correctly without Filter', () => {
    render(
      <FilterButton
        isFilter={false}
        filterAll={filterAll}
        filterNegative={filterNegative}
        filterPositive={filterPositive}
      />,
    );
    const button1 = screen.getByText('Ganados');
    const button2 = screen.getByText('Canjeados');
    expect(button1).toBeDefined();
    expect(button2).toBeDefined();
  });
  it('Work properly without Filter', () => {
    render(
      <FilterButton
        isFilter={false}
        filterAll={filterAll}
        filterNegative={filterNegative}
        filterPositive={filterPositive}
      />,
    );
    const button1 = screen.getByText('Ganados');
    const button2 = screen.getByText('Canjeados');
    fireEvent.press(button1);
    fireEvent.press(button2);
    expect(filterNegative).toBeCalled()
    expect(filterPositive).toBeCalled();
  });
});
