import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import { MovementsComponentList } from '../src/components/Molecules/MovementsComponentList/MovementsComponentList'

const data = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
]
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('<MovementComponentList />', () => {
  it('Should render correctly', () => {
    render(<MovementsComponentList itemList={data} />)
    const title = screen.getByText('TUS MOVIMIENTOS');
    const name = screen.getByText('Handmade Metal S...');
    const date = screen.getByText('9 de diciembre, 2022');
    const points = screen.getByText('16434');
    expect(name).toBeDefined()
    expect(date).toBeDefined()
    expect(points).toBeDefined()
    expect(title).toBeDefined();
  })
  it('Should use navigate', () => {
    render(<MovementsComponentList itemList={data} />)
    const name = screen.getByText('Handmade Metal S...');
    fireEvent.press(name);
    expect(mockedNavigate).toBeCalled();
  });
})
