---
rank: 3
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - skills/handle/payload
related_resources: []
alias_paths: []
---

# Write Skills Metadata

Once you have data insights from the machine learning system ready, the next
step is to write data back to the file stored on Box as metadata. This process
involves three steps:

1. Set up a Box client using the write token sent via the original
   [event payload](guide://skills/handle/payload).
2. Prepare the Skills metadata in the appropriate format.
3. Write the metadata back to the file.

## Set up a Box Client with the Write Token

Once the write token has been extracted from the
[event payload](guide://skills/handle/payload), you can create a new basic Box
client in the same way as you would with a developer token. This client will
provide you with access to write metadata to the file.

<Samples id="x_auth" variant="init_with_dev_token" />

## Prepare the Skills Metadata

The Skills metadata uses a globally available metadata template called
`boxSkillsCards`. This template follows a specific format for the JSON
structure that will be stored on the associated files.

```json
"cards": [{
    "created_at": "{{CURRENT_TIMESTAMP}}",
    "type": "skill_card",
    "skill_card_type": "{{SKILLS_CARD_TYPE}}",
    "skill_card_title": {
        "message": "{{CARD_TITLE}}"
    },
    "skill": {
        "type": "service",
        "id": "{{SKILL_ID}}"
    },
    "invocation": {
        "type": "skill_invocation",
        "id": "{{FILE_ID}}"
    },
    "duration": "{{DURATION_IN_SECONDS}}",
    "entries": "{{CARD_ENTRIES}}"
}]}
```

The root `cards` object is an array of objects, so one or more cards may be
applied to the metadata at a given time.

Within the sample above are several dynamic values, wrapped as `{{ VALUE }}`,
which will need to be replaced. These values are:

- `CURRENT_TIMESTAMP`: When the metadata was created. This should be set to the
  current timestamp.
- `SKILLS_CARD_TYPE`: The type of card that would like to create. See
  [Skills Card Types](#skills-card-types) for the available options.
- `CARD_TITLE`: The title of the card that is being written. This may be
  anything that you wish to title the content as.
- `SKILL_ID`: The ID of the Skill. This should be set to your Skills
  application name.
- `FILE_ID`: The ID of the file that the metadata is being written to. This is
  extracted from the [event payload](guide://skills/handle/payload).
- `DURATION_IN_SECONDS` (OPTIONAL): This optional parameter is used only if you
  have content with a duration, such as video or audio files. If used, this
  should be the length of the content in seconds.
- `CARD_ENTRIES`: The data that comes from the machine learning system. This
  value is an array of objects. See [Skills Card Entries](#skills-card-entries)

### Skills Card Types

The following is a list of all card types available in Box Skills. Replace the
`SKILLS_CARD_TYPE` value in the metadata JSON object with the metadata value
for the card from the table below.

<!-- markdownlint-disable line-length -->

| Card Type  | Metadata Value | Description                                                                                                                             |
| ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Keyword    | `keyword`      | Presents a list of keywords to be shown in association with a file, optionally with relevant timestamps for when those keywords appear. |
| Transcript | `transcript`   | Displays a set of images with their relevant timestamps on a media file.                                                                |
| Faces      | `timeline`     | Displays a transcript with the corresponding timestamps.                                                                                |

<!-- markdownlint-enable line-length -->

### Skills Card Entries

The `CARD_ENTRIES` field will contain all data for the card type in a specific
format. Entries should be an array of objects containing any associated data.
Depending on the card type, use one of the following formats for the entries
object.

#### Keyword Card Entries

<ImageFrame border center shadow width="200">
  ![Image](./skills-card-keyword.png)
</ImageFrame>

The keyword card entries contain two values per object:

- `text`: The keyword text to be displayed.
- `type`: Always `text`.

```json
[
    { "text": "Keyword1", "type": "text" },
    { "text": "Keyword2", "type": "text" },
    ...
]
```

#### Transcript Card Entries

<ImageFrame border center shadow width="200">
  ![Image](./skills-card-transcript.png)
</ImageFrame>

The transcript card entries contain several values:

- `text`: The text to display in the transcript line entry.
- `appears`: An array of objects containing the start and end time for the line
  entry.
  - `start`: The start time in seconds.
  - `end`: The end time in seconds.

```json
[
    { "text": "Line1", "appears": [{ "start": 0, "end": 10 }] },
    { "text": "Line2", "appears": [{ "start": 11, "end": 20 }] },
    ...
]
```

#### Faces Card Entries

<ImageFrame border center shadow width="200">
  ![Image](./skills-card-faces.png)
</ImageFrame>

The faces card entries contain several values:

- `text`: The text to display for the item.
- `appears`: An array of objects containing the start and end time for the line
  entry.
  - `start`: The start time in seconds.
  - `end`: The end time in seconds.
- `image_url` (OPTIONAL): An image to display beside the item.

```json
[
    {
        "text": "Callout 1",
        "appears": [{ "start": 0, "end": 10 }],
        "image_url": "https://mysite.com/image1.jpg"
    },
    {
        "text": "Callout 2",
        "appears": [{ "start": 11, "end": 20 }],
        "image_url": "https://mysite.com/image2.jpg"
    },
    ...
]
```

## Write the Skills Metadata to the File

To apply the metadata object back on the file in Box, use the client object
created with the write token to make a request to create metadata on the file.

When making the method call to create the metadata, set the metadata template
to `boxSkillsCards` and the metadata to the object that was created above.

<Samples id='post_files_id_metadata_id_id'>

<Message type="notice">
  If you are applying metadata to a file that already has it applied you will
  receive for `409 Conflict: tuple_already_exists` error. When creating metadata
  on a file you should catch any errors. If that error occurs you will instead
  want to make a request to [update
  metadata](endpoint://put_metadata_templates_id_id) on the file.
</Message>
