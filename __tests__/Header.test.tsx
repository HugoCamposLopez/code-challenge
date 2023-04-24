import React from 'react'
import { render, screen } from '@testing-library/react-native';
import { Header } from '../src/components/Molecules/Header/Header'

describe('<Header/>', () => {
  it('Should render correctly', () => {
    render(<Header name="Hugo Campos" />)
    const text = screen.getByText('Bienvenido de vuelta!')
    const name = screen.getByText('Hugo Campos')
    expect(name).toBeDefined()
    expect(text).toBeDefined()
  })
});
