import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import Header from './components/Header/Header'

describe('App', () => {
  const container = shallow(<App />)
  it('should render div', () => {
    expect(container.find('div').length).toEqual(1)
  })

  it('contains timer element', () => {
    expect(container.containsMatchingElement(<Header />)).toEqual(true)
  })
})