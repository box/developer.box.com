---
rank: 8
related_endpoints:
  - get_events
  - options_events
related_guides:
  - events/enterprise-events/for-enterprise
required_guides: []
alias_paths:
  - /guides/events/shield-alert-events
  - /guides/events/shield-alert-events/
category_id: events
subcategory_id: events/event-triggers
is_index: false
id: events/event-triggers/shield-smart-access-events
type: guide
total_steps: 5
sibling_id: events/event-triggers
parent_id: events/event-triggers
next_page_id: events/event-triggers/sign-events
previous_page_id: events/event-triggers/shield-information-barrier-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/events/event-triggers/shield-smart-access-events.md
fullyTranslated: true
---
# Shieldスマートアクセスイベント

Box管理者は、[スマートアクセス][smartaccess]を使用すると、分類ベースのアクセスポリシーを定義、適用してアクセスを制御し、機密コンテンツの意図しない漏えいを防止できます。

スマートアクセスポリシーは、[適用モードまたは監視モード][monitoringmode]で構成できます。すべてのイベントタイプで、ポリシーが`enforced`モードと`monitoring`モードのどちらであるかを示す、`controlMode`という名前のフィールドが表示されます。

## ダウンロードと印刷の制限

ダウンロードまたは印刷の制限を適用するShieldアクセスポリシーを管理者が作成し、エンドユーザーがファイルをダウンロードまたは印刷できないようブロックされると、[Enterprise Event][events] Stream内でイベントが生成されます。ダウンロードと印刷の違反の可能性を監視するようアクセスポリシーを設定した場合は、ユーザーがダウンロードまたは印刷が制限されたファイルを含むフォルダを表示したとき、ダウンロードまたは印刷が制限されたファイルをプレビューで表示したとき、ダウンロードまたは印刷が制限されたファイルをAPI経由でダウンロードすることをリクエストしたときにもイベントが生成されます。これらのイベントは標準のイベントオブジェクトスキーマに従い、`event_type`値は`SHIELD_DOWNLOAD_BLOCKED`に設定されます。

ダウンロードがブロックされている場合、`SHIELD_DOWNLOAD_BLOCKED`イベントの`additional-details`ペイロードには以下の詳細が示されます。

Boxウェブアプリの場合、`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 38495726173,
      "size": 370,
      "sha1": "db0a61e73b5e6985d190134e0a4b9982c716afeb"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": null,
    "additional_info": "",
    "created_at": "2022-02-22T10:35:08-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}

```

Boxデスクトップアプリの場合、`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 254429,
      "name": "Box Drive"
    },
    "additional_info": "",
    "created_at": "2022-02-22T10:38:58-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  },
  "service_id": "254429",
  "service_name": "Box Drive"
}

```

Box Mobileアプリの場合、`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 38495726173,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 4715,
      "name": "Box for Android"
    },
    "additional_info": "",
    "created_at": "2022-01-18T14:51:37-08:00",
    "classification": "Confidential",
    "controlMode": "monitoring"
  },
  "service_id": "4715",
  "service_name": "Box for Android"
}

```

## 外部コラボレーションの制限

外部コラボレーションの招待が制限されている場合、イベントは[Enterprise Event][events] Stream内で生成されます。これらのイベントは、`event_type`値が次のいずれかに設定されている、標準のイベントオブジェクトスキーマに従います: `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`。

外部コラボレーションの招待がブロックされている場合、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`または`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`イベントの`additional-details`ペイロードによって以下の詳細が示されます。

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": null,
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}

```

外部コラボレーションの招待が正当な理由で認められている場合、`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`イベントの`additional_details`ペイロードによって以下の詳細が示されます。

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 123456789,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": {
      "justification_id": "17786127",
      "request_at": 1644874023,
      "requested_by": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "request_type": "EXTERNAL_COLLAB",
      "item": {
        "type": "file",
        "id": 987654321,
        "name": "testFile.docx",
        "file_version_id": 941051265322,
        "size": 11640,
        "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
      },
      "user": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "title": "Approved",
      "description": "",
      "additional_info": null,
      "approved_by": {
        "type": "user",
        "id": 123456789,
        "name": "Some Name",
        "login": "somename@box.com"
      },
      "action": "APPROVED",
      "action_at": 1644874023,
      "details": null
    },
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}

```

外部コラボレーションのアクセスがブロックされている場合、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`または`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`イベントの`additional_details`ペイロードによって以下の詳細が示されます。

```json
"additional_details": {
  "shield_external_collab_enforcement": {
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "inviter": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "invitee": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "accessUser": null,
    "service": null,
    "additionalInfo": "",
    "createdAt": null,
    "justification": null,
    "classification": "Confidential",
    "controlMode": "enforced"
  }
}

```

Shieldの正当な理由が承認されると、イベントが[Enterprise Event][events] Stream内で生成されます。これらのイベントは、標準のイベントオブジェクトスキーマと、`SHIELD_JUSTIFICATION_APPROVAL`に設定された`event_type`値に従います。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_justification": {
    "justification_id": "18428718",
    "request_at": 1645556286,
    "requested_by": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "request_type": "EXTERNAL_COLLAB",
    "item": {
      "type": "file",
      "id": 987654321,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "title": "Partner Project",
    "description": "",
    "additional_info": null,
    "approved_by": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "action": "APPROVED",
    "action_at": 1645556286,
    "details": null
  }
}

```

<Message>

管理者は、共有のモーダルから正当な理由が選択されたときに1つではなく2つのEnterprise Eventが表示される可能性があることに注意してください。たとえば、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`イベントと`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`イベントが1つずつ表示されます。

</Message>

## アプリケーションの制限

サードパーティ製アプリケーション (組織と統合されている公開カスタムアプリケーションなど) がファイルまたはフォルダのダウンロードを制限されている場合は、[Enterprise Event][events] Stream内でイベントが生成されます。これらのイベントは標準のイベントオブジェクトスキーマに従い、`event_type`値は`SHIELD_DOWNLOAD_BLOCKED`に設定されます。

サードパーティ製アプリケーションの場合、`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 875644956551,
      "name": "blaha.docx",
      "file_version_id": 941051265322,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 11754686560,
      "name": "Ming Feng",
      "login": "mfeng+demo@boxdemo.com"
    },
  "service": "docusign",
  "additional_info": "",
  "created_at": "2022-01-18T14:53:53-08:00",
  "classification": "Confidential",
  "controlMode": "enforced"
}

```

カスタムアプリケーションの場合、`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "testFile.docx",
      "file_version_id": 987654321,
      "size": 11640,
      "sha1": "368acd076a89ce82e62cac004fa27ea9ce3019d7"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 123456,
      "name": "CustomApp"
    },
    "additional_info": "",
    "created_at": "2022-01-18T13:31:25-08:00",
    "classification": "Confidential",
    "controlMode": "enforced"
  },
  "service_id": "123456",
  "service_name": "CustomApp"
}

```

## FTPの制限

FTPプロトコルを介したファイルまたはフォルダのダウンロードが制限されている場合は、[Enterprise Event][events] Stream内でイベントが生成されます。これらのイベントは標準のイベントオブジェクトスキーマに従い、`event_type`値は`SHIELD_DOWNLOAD_BLOCKED`に設定されます。

`additional_details`ペイロードは以下の詳細を示します。

```json
"additional_details": {
  "shield_download_enforcement": {
    "item": {
      "type": "file",
      "id": 123456789,
      "name": "textFile.txt",
      "file_version_id": 987654321,
      "size": 3606,
      "sha1": "ab7a79ff8e2a6b576e1c62d850290a09312fb387"
    },
    "access_user": {
      "type": "user",
      "id": 123456789,
      "name": "Some Name",
      "login": "somename@box.com"
    },
    "service": {
      "service": 4082,
      "name": "Box FTP Server"
    },
    "additional_info": "",
    "created_at": "2022-01-18T14:19:51-08:00",
    "classification": null,
    "controlMode": "enforced"
  },
  "service_id": "4082",
  "service_name": "Box FTP Server"
}

```

<!-- i18n-enable localize-links -->

[smartaccess]: https://support.box.com/hc/ja/articles/7711416297747-スマートアクセスについて

[monitoringmode]: https://support.box.com/hc/ja/articles/14596333776403-Shieldアクセスポリシーの設定

<!-- i18n-disable localize-links -->

[events]: g://events/enterprise-events/for-enterprise/
