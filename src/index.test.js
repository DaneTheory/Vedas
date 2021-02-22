const vedas = require('../dist/index.js')

// console.log(vedas())

test('should resolve the lib\'s top-level export', () => {
  const actual = vedas()

  expect(actual).toBeDefined()
  expect(actual).toBe('Youve been, THUNDERSTRUCk')
})
