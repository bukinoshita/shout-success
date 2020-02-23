import { shoutSuccess } from '../source'

global.console = { ...console, log: jest.fn() }

test('shout success', () => {
  shoutSuccess('Profile saved.')
  expect(console.log).toBeCalled()
})
