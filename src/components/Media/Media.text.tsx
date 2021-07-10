import renderer from 'react-test-renderer'

import { Media } from './Media'

describe('Media', () => {
  it('renders', () => {
    const tree = renderer.create(<Media />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
