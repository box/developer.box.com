---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/postman
rank: 0
type: guide
total_steps: 8
sibling_id: internal/ui-elements
parent_id: internal/ui-elements
next_page_id: internal/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/ui-elements/postman.md
---
<!-- alex disable postman-postwoman -->

<!-- does not need translation -->

# Postman

Postman要素を使用すると、\[**Load in Postman**]ボタンを表示できます。

```html
<Postman id='abc123' ></Postman>
```

<H>

<Postman id="abc123">

</H>

## 資格情報

デフォルトでは、このボタンを使用すると、`access_token`、`refresh_token`、`expires_at`、`client_id`、および`client_secret`がPostman環境と共有されます。これらの変数の値はブラウザのローカルストレージから読み込まれ、デフォルトでは以下のキーになります。

* `access_token`、`refresh_token`、および`expires_at`の値は`com.box.developer.credentials`。
* `client_id`は`com.box.developer.credentials.client_id`。
* `client_secret`は`com.box.developer.credentials.client_secret`。

使用するそれぞれの値のセットを設定するには、`env`オプションを指定します。

```html
<Postman id='abc123' env='example_name' />
```

この場合、値はローカルストレージの以下のキーから読み取られます。

* `access_token`、`refresh_token`、および`expires_at`の値は`com.box.developer.example_name`。
* `client_id`は`com.box.developer.example_name.client_id`。
* `client_secret`は`com.box.developer.example_name.client_secret`。

## Postman環境の名前

デフォルトで、資格情報は`Box`という名前でPostmanにエクスポートされます。この名前を変更するには、要素に`envtitle`属性を指定します。

```html
<Postman id='abc123' envtitle='Box.com' />
```
