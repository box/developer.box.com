const yaml = require('js-yaml')
const fs = require('fs')
const jp = require('jsonpath')

const resolver = require('../../src/microcopy/resolver')

test('Expect the resolver to resolve every item', async () => {
  const root = yaml.load(fs.readFileSync('./content/microcopy/index.yml'))
  const result = await resolver.dereference(root)
  expect(jp.query(result, "$..['$ref']")).toEqual([])
})