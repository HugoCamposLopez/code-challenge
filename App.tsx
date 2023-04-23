import React from 'react'
import { StackNavigator } from './src/StackNavigator/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './src/store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  )
}
