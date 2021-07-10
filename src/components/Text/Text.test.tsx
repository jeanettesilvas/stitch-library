import renderer from 'react-test-renderer'

import { Text } from './Text'

describe('Text', () => {
  it('renders', () => {
    const tree = renderer.create(<Text>hello</Text>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
