import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { PointsCard } from '../src/components/Molecules/PointsCard/PointsCard';

const data = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 16434,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T17:02:51.904Z',
    product: 'Recycled Plastic Tuna',
    points: 92984,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: true,
    id: '2',
  },
];
describe('<PointsCard/>', () => {
  it('Should render correctly', () => {
    render(<PointsCard movements={data} />);
    const title = screen.getByText('TUS PUNTOS');
    expect(title).toBeDefined();
    const points = screen.getByText('16,434.00 pts');
    expect(points).toBeDefined();
  });
});
