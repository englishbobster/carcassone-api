import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('has 2 Tiles', () => {
        render(<Home/>)

        const tiles = screen.getAllByAltText('TILE');
        expect(tiles).toHaveLength(2);
      }
  )
})
