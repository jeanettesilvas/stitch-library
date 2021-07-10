import renderer from 'react-test-renderer'

import { UserNav } from './UserNav'

describe('UserNav', () => {
  it('renders', () => {
    const tree = renderer.create(<UserNav hasDashboard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
