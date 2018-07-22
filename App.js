import React from 'react'
import { TabNavigator } from 'react-navigation'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  }
})

export default function App () {
  return (
    <Tabs />
  )
}