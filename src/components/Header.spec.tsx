import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('displays the corect cta', () => {
    const { queryByText } = render(<Header siteTitle="pixus" />)

    expect(queryByText('open pixus')).not.toBeNull()
  })
})
