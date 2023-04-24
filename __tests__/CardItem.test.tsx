import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react-native'
import {
  CardItem,
  PropertiesI,
} from '../src/components/Molecules/CardItem/CardItem'

const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  }
})
const mockItem: PropertiesI = {
  createdAt: '2022-12-09T06:34:25.607Z',
  product: 'Handmade Metal Shoes',
  points: 16434,
  image: 'https://loremflickr.com/640/480/transport',
  is_redemption: false,
  id: '1',
}

describe('<CardItem/>', () => {
  it('Should render correctly', () => {
    render(<CardItem item={mockItem} />)
    const name = screen.getByText('Handmade Metal S...')
    const date = screen.getByText('9 de diciembre, 2022')
    const points = screen.getByText('16434')
    expect(name).toBeDefined();
    expect(date).toBeDefined();
    expect(points).toBeDefined();
  })

  it('Should triggers navigation', () => {
    render(<CardItem item={mockItem} />)
    const card = screen.getByText('Handmade Metal S...')
    fireEvent.press(card)
    expect(card).toBeDefined()
    expect(mockedNavigate).toBeCalled()
  })
})
