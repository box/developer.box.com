---
rank: 3
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - skills/handle/payload
related_resources: []
alias_paths: []
category_id: skills
subcategory_id: skills/handle
is_index: false
id: skills/handle/metadata
type: guide
total_steps: 2
sibling_id: skills/handle
parent_id: skills/handle
next_page_id: ''
previous_page_id: skills/handle/payload
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/handle/metadata.md
fullyTranslated: true
---
# Skillsカードのメタデータ

処理サービスによってファイルのメタデータが特定されたら、アプリケーションはそのデータをBoxに保存されているファイルにメタデータとして書き戻すことができます。

このプロセスには、以下の手順が含まれます。

1. スキルカードのメタデータの準備
2. ファイルへのメタデータの書き込み

## スキルカードのメタデータの準備

Skillsメタデータは、グローバルに利用可能な`boxSkillsCards`という名前のメタデータテンプレートを使用します。このテンプレートは、関連ファイルに保存されるJSON構造の特定の形式に従います。

Boxでは現在、4種類のカードがサポートされています。

<!-- markdownlint-disable line-length -->

|                                       |                                                             |                                     |
| ------------------------------------- | ----------------------------------------------------------- | ----------------------------------- |
| [キーワード](r://keyword-skill-card)       | ファイルの横にキーワードのリストを表示します。                                     | ![画像](./skills-card-keyword.png)    |
| [タイムライン](r://timeline-skill-card)     | 一連のテキスト/画像を表示します。それらの画像がタイムラインに表示される時刻は、クリックすると表示されます。      | ![画像](./skills-card-timeline.png)   |
| [トランスクリプト](r://transcript-skill-card) | トランスクリプトと、それに対応するタイムスタンプを表示します。                             | ![画像](./skills-card-transcript.png) |
| [ステータス](r://status-skill-card)        | ユーザーにステータスを表示します。これは、ファイルの処理中にスキルのステータスをユーザーに通知するために使用できます。 |                                     |

<!-- markdownlint-enable line-length -->

## ファイルへのメタデータカードの書き込み

ファイルに1つ以上のカードを書き込むには、[`POST
/files/:id/metadata/global/boxSkillsCards`](e://post_files_id_metadata_global_boxSkillsCards) APIを使用して、Box Skill `cards`のリストを渡します。

<!-- markdownlint-enable line-length -->

<Tabs>

<Tab title="cURL">

```curl
curl -X POST https://api.box.com/2.0/files/12345/metadata/global/boxSkillsCards \
     -H 'Authorization: Bearer <ACCESS_TOKEN>'
     -H 'Content-Type: application/json'
     -d '{
       "cards": [{
         "type": "skill_card",
         "skill_card_type": "keyword",
         "skill_card_title": {
           "code": "license-plates",
           "message": "Licence Plates"
         },
         "skill": {
           "type": "service"
           "id": "license-plates-service"
         },
         "invocation": {
           "type": "skill_invocation"
           "id": "license-plates-service-123"
         },
         "entries": {
           { "text": "DD-26-YT" },
           { "text": "DN86 BOX" }
         }
       }],
     }'
```

</Tab>

<Tab title="Node">

```js
const metadata = { 
  cards: [{
    "type": "skill_card",
    "skill_card_type": "keyword",
    "skill_card_title": {
      "code": "license-plates",
      "message": "Licence Plates"
    },
    "skill": {
      "type": "service"
      "id": "license-plates-service"
    },
    "invocation": {
      "type": "skill_invocation"
      "id": "license-plates-service-123"
    },
    "entries": {
      { "text": "DD-26-YT" },
      { "text": "DN86 BOX" }
    }
  }] 
}

client.files.addMetadata('12345', 'global', 'boxSkillsCards', metadata)
  .then(metadata => { 
    // ...
  })
```

</Tab>

<Tab title="Python">

```py
metadata = { 
  cards: [{
    "type": "skill_card",
    "skill_card_type": "keyword",
    "skill_card_title": {
      "code": "license-plates",
      "message": "Licence Plates"
    },
    "skill": {
      "type": "service"
      "id": "license-plates-service"
    },
    "invocation": {
      "type": "skill_invocation"
      "id": "license-plates-service-123"
    },
    "entries": {
      { "text": "DD-26-YT" },
      { "text": "DN86 BOX" }
    }
  }] 
}

client.file(file_id='12345').metadata(scope='global', template='boxSkillsCards').create(metadata)
```

</Tab>

<Tab title="Java">

```java
BoxFile file = new BoxFile(api, "12345");
Metadata metadata = new Metadata()
file.createMetadata("global", "boxSkillsCards", metadata);
```

</Tab>

<Tab title=".NET">

```cs
var metadataValues = new Dictionary<string, object>()
{ 
  cards: [{
    "type": "skill_card",
    "skill_card_type": "keyword",
    "skill_card_title": {
      "code": "license-plates",
      "message": "Licence Plates"
    },
    "skill": {
      "type": "service"
      "id": "license-plates-service"
    },
    "invocation": {
      "type": "skill_invocation"
      "id": "license-plates-service-123"
    },
    "entries": {
      { "text": "DD-26-YT" },
      { "text": "DN86 BOX" }
    }
  }] 
};
Dictionary<string, object> metadata = await client.MetadataManager
    .CreateFileMetadataAsync(fileId: "12345", metadataValues, "global", "boxSkillsCards");
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message warning>

Box Skillカードがすでにこのファイルに適用されている場合は、このAPI呼び出しによって、HTTPステータスコード`409`と共にエラーが返されます。

</Message>

## ファイルのメタデータカードの更新

Box Skillカードがすでにファイルに適用されている場合、[`PUT
/files/:id/metadata/global/boxSkillsCards`][update_skills] APIを使用して更新することができます。このAPIは、実行する多数の操作 (`op`) を受け取り、各操作を使用すると、特定の位置 (`path`) のカードを置き換えることができます。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```curl
curl -X PUT https://api.box.com/2.0/files/12345/metadata/global/boxSkillsCards \
     -H 'Authorization: Bearer <ACCESS_TOKEN>'
     -H 'Content-Type: application/json-patch+json'
     -d '[
       "op": "replace",
       "path": "/cards/0",
       "value": {
         "type": "skill_card",
         "skill_card_type": "keyword",
         "skill_card_title": {
           "code": "license-plates",
           "message": "Licence Plates"
         },
         "skill": {
           "type": "service"
           "id": "license-plates-service"
         },
         "invocation": {
           "type": "skill_invocation"
           "id": "license-plates-service-123"
         },
         "entries": {
           { "text": "DD-26-YT" },
           { "text": "DN86 BOX" }
         }
       }
     ]'
```

</Tab>

<Tab title="Node">

```js
const updates = [
  { 
    'op': 'replace', 
    'path': '/cards/0',
    'value': {
      "type": "skill_card",
      "skill_card_type": "keyword",
      "skill_card_title": {
        "code": "license-plates",
        "message": "Licence Plates"
      },
      "skill": {
        "type": "service"
        "id": "license-plates-service"
      },
      "invocation": {
        "type": "skill_invocation"
        "id": "license-plates-service-123"
      },
      "entries": {
        { "text": "DD-26-YT" },
        { "text": "DN86 BOX" }
      }
    }
  }
]

client.files.updateMetadata('12345', 'global', 'boxSkillsCards', updates)
  .then(metadata => { 
    // ...
  })
```

</Tab>

<Tab title="Python">

```py
file_metadata = client.file(file_id='12345').metadata(scope='global', template='boxSkillsCards')

card = {
  "type": "skill_card",
  "skill_card_type": "keyword",
  "skill_card_title": {
    "code": "license-plates",
    "message": "Licence Plates"
  },
  "skill": {
    "type": "service"
    "id": "license-plates-service"
  },
  "invocation": {
    "type": "skill_invocation"
    "id": "license-plates-service-123"
  },
  "entries": {
    { "text": "DD-26-YT" },
    { "text": "DN86 BOX" }
  }
}


updates = file_metadata.start_update()
updates.replace('/cards/0', card)
file_metadata.update(updates)
```

</Tab>

<Tab title="Java">

```java
BoxFile file = new BoxFile(api, "12345");
Metadata metadata = new Metadata()
file.updateMetadata("global", "boxSkillsCards", metadata);
```

</Tab>

<Tab title=".NET">

```cs
var card = new Dictionary<string, object>()
{
  "type": "skill_card",
  "skill_card_type": "keyword",
  "skill_card_title": {
    "code": "license-plates",
    "message": "Licence Plates"
  },
  "skill": {
    "type": "service"
    "id": "license-plates-service"
  },
  "invocation": {
    "type": "skill_invocation"
    "id": "license-plates-service-123"
  },
  "entries": {
    { "text": "DD-26-YT" },
    { "text": "DN86 BOX" }
  }
};
var updates = new List<BoxMetadataUpdate>()
{
    new BoxMetadataUpdate()
    {
        Op = MetadataUpdateOp.replace,
        Path = "/cards/0",
        Value = card
    }
};
Dictionary<string, object> updatedMetadata = await client.MetadataManager
    .UpdateFileMetadataAsync("12345", updates, "global", "boxSkillsCards");
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

[update_skills]: e://put_files_id_metadata_global_boxSkillsCards
