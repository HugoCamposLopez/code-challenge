import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { StyledText } from "../src/components/Atoms/StyledText/StyledText";

describe("<StyledText/>", () => {

  it("Should render correctly",()=> {
    render(<StyledText color="black" size="size14">Click me</StyledText>)
    const text = screen.getByText('Click me')
    expect(text).toBeDefined()
    expect(text).toMatchSnapshot("Click me")
  })
})