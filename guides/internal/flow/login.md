---
hide: true
rank: 6
category_id: internal
subcategory_id: internal/flow
is_index: false
id: internal/flow/login
type: guide
total_steps: 5
sibling_id: internal/flow
parent_id: internal/flow
next_page_id: ''
previous_page_id: internal/flow/store
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/flow/login.md
---
<!-- does not need translation -->

# ログイン

場合によっては、ユーザーがログインしなければならないことがあります。ユーザーがデフォルトのBoxアプリにログインできるように、ログインボタンを表示できます。

```html
<LoginButton />
```

<LoginButton>

</LoginButton>

## カスタムログインボタン

デフォルトでは、`LoginButton`はデフォルトのBoxアプリのAPI資格情報を使用します。ただし、ユーザーが`Store`を使用して以前設定した`client_id`と`client_secret`を使用するよう設定することもできます。

```html
<LoginButton id='a_custom_id' />
```

この場合は、ローカルストレージにある以下のクライアントIDとクライアント機密コードが使用されます。

* `com.box.developer.a_custom_id.client_id` 
* `com.box.developer.a_custom_id.client_secret`

ログイン後、ユーザーのアクセストークン、更新トークン、名前、および有効期限は、`com.box.developer.a_custom_id`のオブジェクトに保存されます。

<Message>

`Store`を使用すると、カスタムのクライアントIDとクライアント機密コードを収集できます。

</Message>

## ログイン/ログアウト時に表示

ユーザーがログインしているかどうかに基づいて、ブロックを表示または非表示にすることができます。

```html
<LoggedIn>
  This is shown when the user is logged in.
</LoggedIn>

<LoggedIn reverse>
  This is shown when the user is logged out.
</LoggedIn>
```

一連のカスタム資格情報でログインが実行された場合は、その資格情報のIDを渡す必要があります。

```html
<LoginButton id='a_custom_id' />

<LoggedIn id='a_custom_id'>
  This is shown when the user is logged in.
</LoggedIn>

<LoggedIn id='a_custom_id' reverse>
  This is shown when the user is logged out.
</LoggedIn>
```

## 値のリセット

ユーザーが資格情報をクリアできるようにリセットボタンを表示できます。

```html
<ResetButton id='credentials'>
  Reset all credentials
</ResetButton>
```

<H>

<ResetButton id="credentials">

すべての資格情報をリセット

</ResetButton>

</H>

カスタムIDが指定された場合は、そのIDを必ず渡してください。

```html
<ResetButton id='a_custom_id'>
  Reset all credentials
</ResetButton>
```
