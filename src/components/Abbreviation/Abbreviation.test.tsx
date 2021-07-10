import renderer from 'react-test-renderer'

import { Abbreviation } from './Abbreviation'

describe('Abbreviation', () => {
  it('renders', () => {
    const tree = renderer.create(<Abbreviation text="sc" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
