const Vedas = require('../dist').default
const { ExportOne, ExportTwo, ExportThree } = require('../dist')

test('should resolve the lib\'s top-level export', () => {
  const topLevelDefaultExport = Vedas()

  const topLevelExportOne = ExportOne()
  const topLevelExportTwo = ExportTwo()
  const topLevelExportThree = ExportThree()

  const topLevelVal = 'Youve been, THUNDERSTRUCk'

  const valOne = 'Vedas destructured namespaced export one'
  const valTwo = 'Vedas destructured namespaced export two'
  const valThree = 'Vedas destructured namespaced export three'

  expect(topLevelDefaultExport).toBeDefined()

  expect(topLevelExportOne).toBeDefined()
  expect(topLevelExportTwo).toBeDefined()
  expect(topLevelExportThree).toBeDefined()

  expect(topLevelDefaultExport).toBe(topLevelVal)

  expect(topLevelExportOne).toBe(valOne)
  expect(topLevelExportTwo).toBe(valTwo)
  expect(topLevelExportThree).toBe(valThree)
})
