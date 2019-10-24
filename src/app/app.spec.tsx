import 'jest'
import React from 'react'
import { App } from './app'
import { render } from '@testing-library/react'

describe('<App>', () => {
    it('should be created', () => {
        const { getByText } = render(<App></App>)
        getByText('App component')
    })
})
