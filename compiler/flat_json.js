/**
 * A set of functions intended to mimic the 
 * standard JSON serialization/parsing with the 
 * additional features:
 * 
 * * Turns nested keys into flat dot.syntax keys
 * * Uses the `comment-json` library to turn keys that 
 *   start with `//` into JSON5 compatible comments
 * 
 * The resulting structure is that this:
 * 
 * ```
 * {
 *   "foo": {
 *     "// bar": "comment"
 *     "bar": "value" 
 *   }
 * }
 * ```
 * 
 * is turned into
 * 
 * ```
 * {
 *   // comment
 *   "foo.bar": "value"
 * }
 * ```
 */
const json = require('comment-json')

/**
 * Serializes an object into a JSON5 compatible,
 * flattened object with comments
 * 
 * @param {object} value The object to serialize to JSON
 * @param {function} replacer A function that alters the behavior of the stringification process
 * @param {*} space A String or Number object that's used to insert white space into the 
 *    output JSON string for readability purposes.
 * 
 * @returns A JSON5 string with comments
 */
const stringify = (value, replacer, space) => {
  // first flatten the data and insert comments
  let flattened = flattenAndInsertComments(value)
  // use json-comment to stringify the flattened object
  // while ensuring it serializes the comments
  return json.stringify(flattened, replacer, space)
}

/**
 * Flattens an object and inserts comments
 * 
 * @param {*} data The data to flatten
 * @param {*} output The output object. Defaults to a new object.
 * @param {*} parentKeys The keys of the parent object. Defaults to
 *  an empty list
 */
const flattenAndInsertComments = (data, output = {}, parentKeys = []) => {
  // return if data is null or undefined
  if (!data) { return }

  // grab every entry and serialize it
  Object.entries(data).forEach(([key, value]) => {
    // if the value is an object, step into it and serialize it
    if (typeof value === 'object') {
      flattenAndInsertComments(value, output, [...parentKeys, key])
    } 
    // otherwise, serialize the value
    else {
      // create a flattened key
      let fullKey = [...parentKeys, key].join('.')

      // if this is a comment, create a new key
      // that comment-json will treat as a comment
      if (key.startsWith('//')) { 
        fullKey = Symbol.for(`before:${fullKey.replace('// ', '')}`)
        // write the value in a format comment-json will understand
        output[fullKey] = [{ type: 'LineComment', value: ` ${value.replace('\n', '')}`, inline: false }]
      } else {
        // otherwise we just write the data
        output[fullKey] = value
      }
    }
  })
  return output
}

/**
 * Parse a JSON5 compatible string and unflatten
 * the keys.
 * 
 * @param {String} text The string to parse as JSON5.
 * @param {function} reviver If a function, this prescribes how the value
 *   originally produced by parsing is transformed, before being returned.
 */
const parse = (text, reviver) => {
  // parse the response using comment-json
  const data = json.parse(text, reviver)

  // initialize an output object
  const output = {}

  // for each entry in the flatteneed object, unflatten the
  // response
  Object.entries(data).forEach(([key, value]) => {
    // split the key on every dot
    const keys = key.split('.')
    // initialize the keys on the output object
    initialize(output, keys)
    // and finally set the value for the keys
    set(output, keys, value)
  })
  return output
}

/**
 * Initializes nested objects for each key, ensuring that
 * keys can be assigned to nested values.
 * 
 * @param {object} output The object to initialize the keys for
 * @param {array} keys The nested keys to initialize
 */
const initialize = (output, [key, ...keys]) => {
  // if the current key is a comment, skip it
  if (key.startsWith('//')) { return }
  // initialize the current key level as an object
  output[key] = output[key] || {}
  // if we still have more keys, initialize those
  if (keys.length) { initialize(output[key], keys) }
} 

/**
 * Sets the value for each flattened key in the output object
 * 
 * @param {*} output The object to set the value on
 * @param {*} keys The keys to set the value for
 * @param {*} value The value to set on the object
 */
const set = (output, [key, ...keys], value) => {
  // if the current key is a comment, skip it
  if (key.startsWith('// ')) { return }

  // set the value on a nested object if needed
  if (keys.length) {
    set(output[key], keys, value)
  } 
  // otherwise set it on this object
  else {
    output[key] = value
  }
}

// Only export the parse and stringify functions
module.exports = {
  parse,
  stringify
}