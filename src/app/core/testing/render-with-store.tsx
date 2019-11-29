import React from 'react'
import { render } from '@testing-library/react'
import { createAppStore } from '../store'
import { Provider } from 'react-redux'

export const renderWithStore = (element: React.ReactElement) => {
    const store = createAppStore()
    return render(<Provider store={store}>{element}</Provider>)
}
