import vedas from './'


test(`should resolve the lib's top-level export`, () => {
  const actual = vedas()
  expect(actual).toBeDefined()
})
