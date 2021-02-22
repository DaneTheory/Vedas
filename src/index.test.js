const Vedas = require('../dist/index.js')


test('should resolve the lib\'s top-level export', () => {
  const actual = Vedas()

  expect(actual).toBeDefined()
  expect(actual).toBe('Youve been, THUNDERSTRUCk')
})
