---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Query syntax

The query syntax for the metadata query API is similar to that of a SQL
database. To query for all files and folders that match a contract metadata
template with a contract value of over \$100 the following metadata query could
be created.

```json
{
  "from": "enterprise_123456.contractTemplate",
  "query": "amount >= :value",
  "query_params": {
    "value": 100
  },
  "ancestor_folder_id": "5555"
}
```

In this case the `from` value represents the `scope` and `templateKey` of the
metadata template, and the `ancestor_folder_id` represents the folder ID to
search within, including its subfolders.

## The `query` parameter

The `query` parameter represents the SQL-like query to perform on the selected
metadata instance. This parameter is optional, and without this parameter the
API would return all files and folders for this template.

Every left hand field name, like `amount`, needs to match the `key` of a
field on the associated metadata template. In other words, you can only search
for fields that are actually present on the associated metadata instance. Any
other field name will result in the error returning an error.

### The `query_params` parameter

To make it less complicated to embed dynamic values into the query string, an
argument can be defined using a colon syntax, like `:value`. Each argument that
is specified like this needs a subsequent value with that key in the
`query_params` object, for example:

```json
{
  ...,
  "query": "amount >= :amount AND country = :country",
  "query_params": {
    "amount": 100,
    "country": "United States"
  },
  ...
}
```

### Logical operators

A query supports the following logical operators.

<!-- markdownlint-disable line-length -->

| Operator   |                                                                                                                                                                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AND`      | Matches when all the conditions separated by `AND` are `TRUE`                                                                                                                                                                                        |
| `OR`       | Matches when any of the conditions separated by `OR` is `TRUE`                                                                                                                                                                                       |
| `NOT`      | Matches when the preceding condition(s) is **not** `TRUE`                                                                                                                                                                                            |
| `LIKE`     | Matches when the template field value matches a pattern. Only supported for string values. See [pattern matching](#pattern-matching) for more details                                                                                                |
| `NOT LIKE` | Matches when the template field value does **not** match a pattern. Only supported for string values. See [pattern matching](#pattern-matching) for more details                                                                                     |
| `ILIKE`    | Identical to `LIKE` but case insensitive                                                                                                                                                                                                             |
| `NOT ILIKE` | Identical to `NOT LIKE` but case insensitive                                                                                                                                                                                                         |
| `IN`       | Matches when the template field value is equal to any one of a list of arguments provided. The format for this requires each item in the list to be an explicitly defined `query_params` argument, for example `amount NOT IN (:arg1, :arg2, :arg3)` |
| `NOT IN`   | Similar to `IN` but when the template field value matches none of the arguments provided in the list                                                                                                                                                 |
| `IS NULL`  | Matches when the template field value is `null`                                                                                                                                                                                                      |  |
| `IS NOT`   | Matches when the template field value is not `null`                                                                                                                                                                                                  |  |

<!-- markdownlint-enable line-length -->

<Message notice>

Any match on a `string` or `enum` field is case sensitive except when using
the `ILIKE` operator.

</Message>

### Comparison operators

A query supports the following comparison operators.

<!-- markdownlint-disable line-length -->

| Operator |                                                                                      |
|----------|--------------------------------------------------------------------------------------|
| `=`      | Ensures a template field value is **equal to** the specified value                   |
| `>`      | Ensures a template field value is **greater than** the specified value               |
| `<`      | Ensures a template field value is **less than** the specified value                  |
| `>=`     | Ensures a template field value is **greater than or equal to** the specified value   |
| `<=`     | Ensures a template field value is **less than or equal to** the a specified value    |
| `<>`     | Ensures a template field value is **not equal to** the a specified value             |

<!-- markdownlint-enable line-length -->

<Message warning>
  Bit-wise and arithmetic operators are not supported by the Metadata Query API.
</Message>

### Pattern matching

The `LIKE`, `NOT LIKE`, `ILIKE`, and `NOT ILIKE` operators match a string
to a pattern. The pattern supports the following reserved characters.

- `%` The percent sign represents zero, one, or multiple characters, for example
  `%Contract` matches `Contract`, `Sales Contract`, but not `Contract (Sales)`,
- `_` The underscore represents a single character, for example
  `Bo_` matches `Box`, `Bot`, but not `Bots`,

Both of these reserved characters can be used before, after, or in between other
characters. A pattern can include multiple reserved characters, for example
`Box% (____)` would match `Box Contract (2020)`.

An example query would looks something like this. Note that the `%`-wrapped
string is not in the `query` attribute but in the list of `query_params`. 

```json
{
  ...,
  "query": "country ILIKE :country",
  "query_params": {
    "country": "%United%"
  },
  ...
}
```

<Message notice>

The backslash character `\` can be used to escape the `%` or
`_` characters if those need to be matched literally, for example
`20\%` would match the literal value of `20%`.

</Message>
