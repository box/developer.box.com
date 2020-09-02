---
related_endpoints:
  - post_users
category_id: sso-identities-and-app-users
subcategory_id: null
is_index: false
id: sso-identities-and-app-users/connect-identities
rank: 1
type: guide
total_steps: 3
sibling_id: sso-identities-and-app-users
parent_id: sso-identities-and-app-users
next_page_id: sso-identities-and-app-users/create-app-user
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/1-connect-identities.md
---
# SSO IDをApp Userに関連付ける

SSOサービスでは、社内でこのサービスを利用する各ユーザーに一意のユーザーレコードが作成されます。このSSOサービスを介してBoxアプリケーションにアクセスする際、SSOユーザーごとにBoxユーザーを作成している場合は、SSOユーザーとBoxユーザーレコードの間に関連付けを作成する必要があります。

ユーザーがSSOサービスを介してBoxにログインすると、Boxはまず関連付けを使用してユーザーを検索します。Boxユーザーレコードが見つかれば、そのユーザーとしてBox APIに対する呼び出しを開始することができます。Boxユーザーが見つからない場合は、一意のSSOユーザーアカウントに関連付けられた新しいBoxユーザーが作成されます。

Boxユーザーオブジェクトの最上位を探索すると、SSOサービスのユーザーオブジェクトからBox[ユーザーオブジェクト](ref://resources/user/)に一意の識別子を追加して双方を関連付けるために使用できるオプションがわかります。

```json
{
  "address": "900 Jefferson Ave, Redwood City, CA 94063",
  "avatar_url": "https://www.box.com/api/avatar/large/181216415",
  "can_see_managed_users": true,
  "created_at": "2012-12-12T10:53:43-08:00",
  "enterprise": { .. },
  "external_app_user_id": "my-user-1234",
  "hostname": "https://example.app.box.com/",
  "id": 11446498,
  "is_exempt_from_device_limits": true,
  "is_exempt_from_login_verification": true,
  "is_external_collab_restricted": true,
  "is_platform_access_only": true,
  "is_sync_enabled": true,
  "job_title": "CEO",
  "language": "en",
  "login": "ceo@example.com",
  "max_upload_size": 2147483648,
  "modified_at": "2012-12-12T10:53:43-08:00",
  "my_tags": [ .. ],
  "name": "Aaron Levie",
  "notification_email": { ... },
  "phone": 6509241374,
  "role": "admin",
  "space_amount": 11345156112,
  "space_used": 1237009912,
  "status": "active",
  "timezone": "Africa/Bujumbura",
  "tracking_codes": [{ .. }],
  "type": "user"
}
```

SSOサービス内の一意のユーザーとBoxユーザーの関連付けを作成するには、2つの方法が推奨されています。Boxユーザーの`external_app_user_id`フィールド内に一意のSSOユーザーIDを設定するか、一意のSSOメールアドレスを新しいユーザーのログインメールとして使用してください。

## `external_app_user_id`の使用(推奨方法)

`external_app_user_id`フィールドは、SSOプロバイダのユーザーレコードなどの何らかの外部サービスとBoxユーザーレコードを関連付ける、文字列識別子を保持するよう設計されています。

一意のSSOユーザーアカウントとBoxユーザーアカウントの関連付けに`external_app_user_id`フィールドを使用することは、この2つのアカウントを関連付ける方法としてメールよりも推奨されています。これには、以下のように複数の理由があります。

* メールアドレスによる関連付けを実行できるのは[管理対象ユーザー](guide://authentication/user-types/managed-users/)のみです。[App User](guide://authentication/user-types/app-users/)にはBoxによって自動的にメールアドレスが割り当てられるため、`login`をSSOサービスのメールアドレスになるよう割り当てることはできません。 
* メールアドレスはBoxにおいて一意でなければなりません。つまり、SSOサービスユーザーが(Boxを使用する社内に存在しない)同じメールアドレスを使用してBoxにサインアップした場合は、そのアドレスでユーザーを作成することも、既存のSSOサービスユーザーに接続することもできなくなります。
* `external_app_user_id`フィールドはこのために設計されています。

## `login`の使用(代替方法)

ユーザーオブジェクトの`login`フィールドを使用してアカウントの関連付けを作成する方法は、以下の限られた状況において使用可能です。

* [App User](guide://authentication/user-types/app-users/)ではなく[管理対象ユーザー](guide://authentication/user-types/managed-users/)タイプのみが使用されている。
* メールアドレスとBoxアカウントの作成リクエストがすべて会社によって管理されている。つまり、ユーザーは自身のメールアドレスで独自にBoxアカウントを作成することができません。

<Message warning>

`login`フィールドで、Boxのユーザーに使用されるメールアドレスは一意である必要があります。すでに別のアカウント用に存在するメールアドレスを使用してユーザーを作成するようリクエストすると、`user_login_already_used`という`409 Conflict`エラーが発生します。

</Message>
