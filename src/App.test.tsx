import React from 'react'
import { render } from '@testing-library/react'

test('sample test', () => {
  const renderResult = render(<>sample</>)
  expect(renderResult.container.innerHTML).toMatch('sample')
})
