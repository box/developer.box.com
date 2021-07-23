---
rank: 4
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/for-enterprise
required_guides: []
alias_paths: []
category_id: events
subcategory_id: null
is_index: false
id: events/shield-alert-events
type: guide
total_steps: 5
sibling_id: events
parent_id: events
next_page_id: events/pagination
previous_page_id: events/polling
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/shield-alert-events.md
fullyTranslated: true
---
# Shieldイベント

以下に説明するこの高度なセキュリティ機能を活用するには、[Box Shield][box-shield]を購入し、Box Enterpriseで有効にする必要があります。

## 脅威検出アラート

Shieldの[脅威検出][threatdetect]では、ユーザーの異常な動作に基づいて、潜在的な脅威 (アカウントの侵害やデータの盗難など) に関する詳細なアラートが表示されます。

Shieldによって生成される可能性があるアラートは以下のとおりです。

1. 不審な場所
2. 不審なセッション
3. 異常なダウンロード
4. 悪意のあるコンテンツ

Shieldの脅威検出アラートイベントはすべて、[エンタープライズイベント][events]ストリーム内で生成されます。これらのイベントは標準のイベントオブジェクトスキーマに従い、`event_type`値は`SHIELD_ALERT`に設定されます。

```js
{
  "source":null,
  "created_by":{
    "type":"user",
    "id":"2",
    "name":"Unknown User",
    "login":""
  },
  "action_by":null,
  "created_at":"2019-12-20T11:38:56-08:00",
  "event_id":"97f1b31f-f143-4777-81f8-1b557b39ca33",
  "event_type":"SHIELD_ALERT",
  "ip_address":"10.1.2.3",
  "type":"event",
  "session_id":null,
  "additional_details":{
    "..."
  }
}
```

イベントをトリガーした特定の種類のShieldアラートに関する情報は、`additional_details`オブジェクト内で提供されます。

### 不審な場所に関するアラート

<!--alex ignore-->

不審な場所に関するアラートは、通常とは異なる、除外対象に指定されている場所や「ホスト」IPアドレスからコンテンツにアクセスしているユーザーがShieldによって検出されたときに生成されます。これは、`additional_details.shield_alert.rule_category`内の`Suspicious Locations`値によって識別できます。

<!--alex enable-->

`additional_details`ペイロードは以下の詳細を示します。

```js
"additional_details":{
  "shield_alert":{
    "rule_category":"Suspicious Locations",
    "rule_id":123,
    "rule_name":"Suspicious Location",
    "risk_score":60,
    "alert_summary":{
      "alert_activities":[
        {
          "occurred_at":"2019-12-20T11:37:05-08:00",
          "event_type":"Download",
          "item_name":"xyz.txt",
          "item_type":"file",
          "item_id":"127",
          "item_path":"ABC/DEF",
          "ip_info":{
            "ip":"1.2.3.4",
            "latitude":"37.5555",
            "longitude":"-120.6789",
            "registrant":"Microsoft Corporation",
            "country_code":"US",
            "city_name":"San Jose",
            "region_name":"California"
          },
          "service_name":"Box Excel Online Previewer"
        }
      ]
    },
    "alert_id":2398,
    "priority":"medium",
    "user":{
      "id":2320,
      "name":"Some name",
      "email":"some@email.com"
    },
    "link":"https://app.box.com/master/shield/alerts/2398",
    "created_at":"2019-12-20T11:37:15-08:00"
  }
}
```

### 不審なセッションに関するアラート

不審なセッションに関するアラートは、ユーザーエージェント文字列の異常、ユーザーIDの異常、アプリケーションの種類が一般的ではない、IPアドレスが新しい、ログイン場所が考えられないほど高速に変化しているなどの特徴があるセッションでコンテンツにアクセスしているユーザーがShieldによって検出されたときに生成されます。これは、`additional_details.shield_alert.rule_category`内の`Suspicious
Sessions`値によって識別できます。

`additional_details`ペイロードは以下の詳細を示します。

<!-- markdownlint-disable line-length -->

```js
"additional_details":{
  "shield_alert":{
    "rule_category":"Suspicious Sessions",
    "rule_id":123,
    "rule_name":"Suspicious Session",
    "risk_score":77,
    "alert_summary":{
      "description":"First time in prior month user connected from ip 2.3.4.5 First time user agent Some User Agent (Some UA 4.5.6) appeared for user within prior month Apparent distance 9580.0 km between events 59 seconds apart is faster than possible",
      "sessions":[
        {
          "session_type":"suspicious",
          "activities":[
            {
              "occurred_at":"2019-12-19T11:37:00-08:00",
              "event_type":"Set shared link expiration",
              "item_name":"xyz.txt",
              "item_type":"file",
              "item_id":"123456",
              "item_path":"ABC/DEF",
              "ip_info":{
                "ip":"2.3.4.5",
                "latitude":"37.5555",
                "longitude":"-120.6789",
                "registrant":"Microsoft Corporation",
                "country_code":"US",
                "city_name":"San Jose",
                "region_name":"California"
              },
              "service_name":"ServiceName"
            }
          ]
        },
        {
          "session_type":"typical",
          "activities":[
            {
              "occurred_at":"2019-12-19T11:37:59-08:00",
              "event_type":"Item Modified",
              "item_name":"abc.boxnote",
              "item_type":"file",
              "item_id":"123123",
              "item_path":"folder/sub folder",
              "ip_info":{
                "ip":"4.5.6.7",
                "latitude":"37.5555",
                "longitude":"-20.6789",
                "country_code":"US",
                "city_name":"Some City",
                "region_name":"XYZ"
              },
              "service_name":"Box Notes"
            }
          ]
        }
      ]
    },
    "alert_id":500,
    "priority":"medium",
    "user":{
      "id":50500,
      "name":"A b c",
      "email":"a@b.c"
    },
    "link":"https://cloud.app.box.com/master/shield/alerts/500",
    "created_at":"2019-12-20T11:38:16-08:00"
  }
}
```

<!-- markdownlint-enable line-length -->

### 異常なダウンロードに関するアラート

異常なダウンロードに関するアラートは、機密コンテンツを盗んでいる可能性のあるアカウント所有者がShieldによって検出されたときに生成されます。これは、`additional_details.shield_alert.rule_category`内の`Anomalous Download`値によって識別できます。

`additional_details`ペイロードは以下の詳細を示します。

<!-- markdownlint-disable line-length -->

```js
"additional_details":{
  "shield_alert":{
    "rule_category":"Anomalous Download",
    "rule_id":123,
    "rule_name":"Anomalous Download Rule",
    "risk_score":77,
    "alert_summary":{
      "description":"Significant increase in download content week over week, 9200% (25.04 MB) more than last week 12 additional files downloaded week over week)",
      "download_delta_size":"25 Mb",
      "download_delta_percent":9200,
      "historical_period":{
        "date_range":{
          "start_date":"2019-12-01T01:01:00-08:00",
          "end_date":"2019-12-08T01:01:00-08:00"
        },
        "download_size":"0 Mb",
        "downloaded_files_count":1
      },
      "anomaly_period":{
        "date_range":{
          "start_date":"2019-12-08T01:01:00-08:00",
          "end_date":"2019-12-15T01:01:00-08:00"
        },
        "download_size":"25 Mb",
        "downloaded_files_count":13
      },
      "download_ips":[
        {
          "ip":"1.2.3.4"
        }
      ]
    },
    "alert_id":444,
    "priority":"medium",
    "user":{
      "id":567,
      "name":"Some user",
      "email":"some@user.com"
    },
    "link":"https://cloud.app.box.com/master/shield/alerts/444",
    "created_at":"2019-12-20T11:38:16-08:00"
  }
}
```

<!-- markdownlint-enable line-length -->

### 悪意のあるコンテンツに関するアラート

悪意のあるコンテンツに関するアラートは、アカウントにアップロードされるコンテンツの潜在的なマルウェアがShieldによって検出されたときに生成されます。これは、`additional_details.shield_alert.rule_category`内の`Malicious Content`値によって識別できます。

`additional_details`ペイロードは以下の詳細を示します。

```js
"additional_details":{
  "shield_alert":{
    "rule_category":"Malicious Content",
    "rule_id":123,
    "rule_name":"Viruses and stuff",
    "risk_score":100,
    "alert_summary":{
      "upload_activity":{
        "occurred_at":"2019-12-20T11:37:05-08:00",
        "event_type":"Upload",
        "item_name":"virus.exe",
        "item_type":"file",
        "item_id":"127",
        "item_path":"ABC/DEF",
        "sha1_hash":"",
        "ip_info":{
          "ip":"1.2.3.4",
          "latitude":"37.5555",
          "longitude":"-120.6789",
          "registrant":"Microsoft Corporation",
          "country_code":"US",
          "city_name":"San Jose",
          "region_name":"California"
        },
        "service_name":"Service name"
      }
    },
    "malware_info":{
      "file_id":127,
      "file_name":"malware.exe",
      "file_version":4239023,
      "file_created":"2019-12-20T11:37:05-08:00",
      "file_created_by":{
        "id":1010,
        "name":"Bob",
        "email":"bob@enterprise.com"
      },
      "file_hash":"d869db7fe62fb07c25a0403ecaea55031744b5fb",
      "file_hash_type":"SHA-1",
      "file_size_bytes":51345,
      "file_version_uploaded":"2019-12-20T11:37:05-08:00",
      "file_version_uploaded_by":{
        "id":1011,
        "name":"Jane",
        "email":"jane@enterprise.com"
      },
      "status":"Malicious",
      "categories":[
        "Adware",
        "SpyWare"
      ],
      "tags":[
        "FILE_MALICIOUS_EXECUTION",
        "FILE_OTHER_TAG"
      ],
      "description":"This is a really bad file",
      "detail_link":"https://some.link/xyz",
      "malware_name":"BadMalware",
      "first_seen":"2019-12-19T11:37:05-08:00",
      "last_seen":"2019-12-20T11:37:05-08:00",
      "family":"MalwareBot4000"
    },
    "alert_id":2398,
    "priority":"medium",
    "user":{
      "id":2320,
      "name":"Some Name",
      "email":"some@email.com"
    },
    "link":"https://app.box.com/master/shield/alerts/2398",
    "created_at":"2019-12-20T11:37:15-08:00"
  }
}
```

## スマートアクセス

Box管理者は、[スマートアクセス][smartaccess]を使用すると、分類に基づいたアクセスポリシーを定義、適用して操作を制御し、機密コンテンツの意図しない漏えいを防止できます。

### 外部コラボレーションの制限

外部コラボレーションの招待が制限されている場合、イベントは[エンタープライズイベント][events]ストリーム内で生成されます。これらのイベントは、`event_type`値が次のいずれかに設定されている、標準のイベントオブジェクトスキーマに従います: `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`。

外部コラボレーションの招待がブロックされている場合、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`または`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`イベントの`additional-details`ペイロードによって以下の詳細が示されます。

```js
"additional_details": {
   "shield_external_collab_enforcement": {
   "item": {
      "type": "file",
      "id": 123456789,
      "name": "Welcome to Box.pdf",
      "file_version_id": 987654321,
      "size": 5206506,
      "sha1": "92c96143519c993biaob52a2a1da4e2d078dca89"
    },
    "inviter": {
       "type": "user",
       "id": 02912083489,
       "name": "Some Name",
       "login": "somename@box.com"
    },
    "invitee": {
       "type": "user",
       "id": 10340918347,
       "name": "John Doe",
       "login": "johndoe@box.com"
    },
   "accessUser": null,
   "service": [],
   "additionalInfo": "",
   "createdAt": null,
   "justification": null,
   "classification": "Test",
   "justification": {
      "justification_id": "4050170",
      "request_at": 1611619097,
      "requested_by": {
         "type": "user",
         "id": 10340918347,
         "name": "John Doe",
         "login": "johndoe@box.com"
    },
    "request_type": "EXTERNAL_COLLAB",
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "Welcome to Box.pdf",
      "file_version_id": 987654321,
      "size": 5206506,
      "sha1": "92c9614354519c993b8sk2a2a1da4e2d078dca89"
    },
    "user": {
      "type": "user",
          "id": 10340918347,
          "name": "John Doe",
          "login": "johndoe@box.com"
    },
    "title": "TEST",
    "description": "",
    "additional_info": null,
    "approved_by": {
      "type": "user",
      "id": 02912083489,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "action": "APPROVED",
    "action_at": 1611619097,
    "details": null
  },
  "classification": "Example"
  }
}
```

外部コラボレーションの招待が正当な理由で認められている場合、`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`イベントの`additional_details`ペイロードによって以下の詳細が示されます。

```js
"additional_details": {
   "shield_external_collab_enforcement": {
   "item": {
      "type": "file",
      "id": 123456789,
      "name": "Welcome to Box.pdf",
      "file_version_id": 987654321,
      "size": 5206506,
      "sha1": "92c96143519c993biaob52a2a1da4e2d078dca89"
    },
    "inviter": {
       "type": "user",
       "id": 02912083489,
       "name": "Some Name",
       "login": "somename@box.com"
    },
    "invitee": {
       "type": "user",
       "id": 10340918347,
       "name": "John Doe",
       "login": "johndoe@box.com"
    },
   "accessUser": null,
   "service": [],
   "additionalInfo": "",
   "createdAt": null,
   "justification": null,
   "classification": "Test",
   "justification": {
      "justification_id": "4050170",
      "request_at": 1611619097,
      "requested_by": {
         "type": "user",
         "id": 10340918347,
         "name": "John Doe",
         "login": "johndoe@box.com"
    },
    "request_type": "EXTERNAL_COLLAB",
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "Welcome to Box.pdf",
      "file_version_id": 987654321,
      "size": 5206506,
      "sha1": "92c9614354519c993b8sk2a2a1da4e2d078dca89"
    },
    "user": {
      "type": "user",
          "id": 10340918347,
          "name": "John Doe",
          "login": "johndoe@box.com"
    },
    "title": "TEST",
    "description": "",
    "additional_info": null,
    "approved_by": {
      "type": "user",
      "id": 02912083489,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "action": "APPROVED",
    "action_at": 1611619097,
    "details": null
  },
  "classification": "Example"
  }
}
```

外部コラボレーションのアクセスがブロックされている場合、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`または`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`イベントの`additional_details`ペイロードによって以下の詳細が示されます。

```js
"additional_details": {
        "shield_external_collab_enforcement": {
            "item": {
                "type": "folder",
                "id": 60909312704,
                "name": "Exmaple Folder",
                "file_version_id": null,
                "size": 410874,
                "sha1": null
            },
            "inviter": {
                "type": "user",
                "id": 987654321,
                "name": "John Doe",
                "login": "johndoe@box.com"
            },
            "invitee": {
                "type": "user",
                "id": 123456,
                "name": "Example User",
                "login": "example@box.com"
            },
            "accessUser": null,
            "service": {
                "service": 12345,
                "name": "Box Web App",
                "apiKey": "fomp6n5qhqpnt6rw2h3yu12g01qswae"
            },
            "additionalInfo": "",
            "createdAt": null,
            "justification": null,
            "classification": "Company and Collaborators Only"
        },
        "service_id": "12345",
        "service_name": "Box Web App"
 }
```

Shieldの正当な理由が承認されると、イベントが[エンタープライズイベント][events]ストリーム内で生成されます。これらのイベントは、標準のイベントオブジェクトスキーマと、`SHIELD_JUSTIFICATION_APPROVAL`に設定された`event_type`値に従います。

`additional_details`ペイロードは以下の詳細を示します。

```js
"additional_details":{
  "shield_justification":{
    "justification_id":1234,
    "request_at":1600708864,
    "requested_by":{
      "type":"user",
      "id":1357924680,
      "name":"John Doe",
      "login":"johndoe@box.com"
    },
    "request_type":"EXTERNAL_COLLAB",
    "item":{
      "type":"file",
      "id":123456789,
      "name":"testFile.docx",
      "file_version_id":987654321,
      "size":0,
      "sha1":"da39a3ee5e6b4b0d325ojofef95601890afd80709"
    },
    "user":{
      "type":"user",
      "id":0975312468,
      "name":"Some Name",
      "login":"somename@box.com"
    },
    "title":"Some Title",
    "description":null,
    "details":null,
    "additional_info":null,
    "approved_by":{
      "type":"user",
      "id":0975312468,
      "name":"Some Name",
      "login":"somename@box.com"
    },
    "action":"APPROVED",
    "action_at":1600476617
  },
  "service_id":"123456",
  "service_name":"Service Name"
}
```

<Message>

管理者は、共有のモーダルから正当な理由が選択されたときに1つではなく2つのエンタープライズイベントが表示される可能性があることに注意してください。たとえば、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`イベントと`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`イベントが1つずつ表示されます。

</Message>

[box-shield]: https://www.box.com/shield

[threatdetect]: https://support.box.com/hc/en-us/articles/360044196113-Using-Threat-Detection

[smartaccess]: https://support.box.com/hc/en-us/articles/360044196353-Using-Smart-Access

[events]: g://events/for-enterprise/
