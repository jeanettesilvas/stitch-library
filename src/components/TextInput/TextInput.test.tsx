import renderer from 'react-test-renderer'

import { TextInput } from './TextInput'

describe('Text', () => {
  it('renders', () => {
    const tree = renderer.create(<TextInput onChange={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
