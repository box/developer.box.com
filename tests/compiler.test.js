const fs = require('fs')
const jp = require('jsonpath')

const compiler = require('../compiler/index')
const { parse } = require('../compiler/flat_json')

beforeAll(async () => {
  await compiler.write(target = './compiled', fileName = 'microcopy.json')
})

test('Expect the compiler to output flattened JSON5', async () => {
  const content = fs.readFileSync('./compiled/microcopy.json').toString()
  const lines = content.split('\n')
  expect(lines[0]).toEqual('{')
  expect(lines[1].startsWith('  // ')).toBeTruthy()
  expect(lines[2].startsWith('  // ')).not.toBeTruthy()
  expect(lines[lines.length-1]).toEqual('}')
})

test('Expect the compiler to only have objects or strings as values', async () => {
  let result = parse(fs.readFileSync('./compiled/microcopy.json').toString())

  jp.nodes(result, '$..*').forEach(({ value }) => {
    expect(typeof value === 'string' || value.constructor.name === 'Object').toBeTruthy()
  })
})