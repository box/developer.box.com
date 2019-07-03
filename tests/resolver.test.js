const yaml = require('js-yaml')
const fs = require('fs')
const jp = require('jsonpath')

const resolver = require('../compiler/resolver')

test('Expect the resolver to resolve every item', async () => {
  const root = yaml.load(fs.readFileSync('./src/microcopy/index.yml'))
  const result = await resolver.resolve(root).then(resolved => resolved.result)
  
  expect(jp.query(result, "$..['$ref']")).toEqual([])
})