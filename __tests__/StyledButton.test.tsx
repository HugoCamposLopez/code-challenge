import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { StyledButton } from "../src/components/Atoms/StyledButton/StyledButton";


const onPress = jest.fn()
describe("<StyledButton/>", () => {

  it("Should render correctly",()=> {
    render(<StyledButton onPress={() => onPress()}>Click me</StyledButton>)
    const button = screen.getByText('Click me')
    expect(button).toBeDefined()
    expect(button).toMatchSnapshot("Click me")
  })

  it("Should work onPress", () => {
    render(<StyledButton onPress={() => onPress()}>Click me</StyledButton>)
    const button = screen.getByText('Click me')
    fireEvent.press(button)
    expect(onPress).toBeCalled()
  })
})