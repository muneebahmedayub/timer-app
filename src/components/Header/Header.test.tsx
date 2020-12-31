import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'
import { AppBar } from '@material-ui/core'


describe('Header', () => {
    const container = shallow(<Header />)
    it('should contain', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('should contain appbar element', () => {
        expect(container.find('appbar')).toEqual(1)
    })
})