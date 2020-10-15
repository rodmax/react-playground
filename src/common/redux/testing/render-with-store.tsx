import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Store } from 'redux'

export const renderWithStore = (element: React.ReactElement, store: Store) => {
    return render(<Provider store={store}>{element}</Provider>)
}
