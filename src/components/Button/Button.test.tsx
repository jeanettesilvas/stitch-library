import renderer from 'react-test-renderer'

import { Button } from './Button'

describe('Button', () => {
  it('renders a primary button', () => {
    const tree = renderer
      .create(
        <Button type="primary" onClick={() => {}}>
          label
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a secondary button', () => {
    const tree = renderer
      .create(
        <Button type="secondary" onClick={() => {}}>
          label
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a destructive button', () => {
    const tree = renderer
      .create(
        <Button type="destructive" onClick={() => {}}>
          label
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a disabled button', () => {
    const tree = renderer
      .create(
        <Button status="disabled" onClick={() => {}}>
          label
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a loading button', () => {
    const tree = renderer
      .create(
        <Button status="loading" onClick={() => {}}>
          label
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
