---
rank: 14
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/setting-up-box-tools-to-work-with-custom-domains
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/custom-domains
type: guide
total_steps: 14
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: ''
previous_page_id: embed/ui-elements/viewers-and-events
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/ui-elements/custom-domains.md
---
# Box Editのカスタムドメイン

サードパーティ製ウェブアプリとBox Toolsを統合するには、アプリケーションのURLを明示的に追加する必要があります。Windowsでは、そのためにレジストリキーを追加します。MacOSでは、ターミナルコマンドをいくつか実行してドメインの追加と削除を実行する必要があります。

<Message>

セーフリストへのドメインの追加機能は、**Box Toolsバージョン4.5.0**で追加されました。

</Message>

## セーフリストへの追加(Windowsの場合)

セーフリストへのドメインの追加を開始する前に、[こちら](https://cloud.box.com/s/kvc9cysgq1y2yldpvciwlpt7093ho78l)で提供されている`.rar`から必要なスクリプトをダウンロードしてください。

### ユーザーごとの設定

テキストエディタで`Add_OpenWith_WhiteListed_Domain.reg`を開きます。

<ImageFrame border>

![Box Tools](./images/box-tools-1.png)

</ImageFrame>

<Message>

エントリを追加する際は、改行して追加します。

</Message>

ファイルを閉じて(変更を保存して)、管理者権限でコマンドプロンプトを開き、.regファイルに移動して次のコマンドを入力します。

```sh
reg import "Add_OpenWith_WhiteListed_Domain.reg"
```

<ImageFrame border>

![Box Tools](./images/box-tools-3.png)

</ImageFrame>

### マシンごとの設定

テキストエディタで次のファイルを開きます。

* `x64`: `Per Machine\64 bit\Add_OpenWith_WhiteListed_Domain.reg`
* `x86`: `Per Machine\32 bit\Add_OpenWith_WhiteListed_Domain.reg`

プレースホルダのドメインを、許可したいドメインに置き換えます。

<ImageFrame border>

![Box Tools](./images/box-tools-4.png)

</ImageFrame>

<Message>

エントリを追加する際は、改行して追加します。

</Message>

ファイルを閉じて(変更を保存して)、管理者権限でコマンドプロンプトを開き、.regファイルに移動して次のコマンドを入力します。

```sh
reg import "Add_OpenWith_WhiteListed_Domain.reg"
```

<ImageFrame border>

![Box Tools](./images/box-tools-6.png)

</ImageFrame>

以下のいずれかの方法を使用して、Windowsサービスである**Box Local Com Service** (`Box Edit.exe`)を再起動します。

#### コマンドプロンプトを使用する場合

コマンドプロンプトで、以下のコマンドを入力します。

* `net stop "Box Local Com Service"`
* `net start "Box Local Com Service"`

<ImageFrame border>

![Box Tools](./images/box-tools-7.png)

</ImageFrame>

#### UIを使用する場合

`Windows + R`を押して、`services.msc`を入力します。

<ImageFrame border>

![Box Tools](./images/box-tools-8.png)

</ImageFrame>

システムトレイで`Box Edit`を見つけて`Box Edit.exe`を再起動します。

<ImageFrame border>

![Box Tools](./images/box-tools-9.png)

</ImageFrame>

右クリックして\[**終了**]を選択します。

`%programfiles%\Box\Box Edit`を開いて、`Box Edit.exe`を実行します。

<ImageFrame border>

![Box Tools](./images/box-tools-10.png)

</ImageFrame>

### 削除

* すべてのドメインを一度に削除するには、`Remove_ALL_OpenWith_WhiteListed_Domain.reg`を実行します。
* 特定のドメインを削除するには、`Remove_OpenWith_WhiteListed_Domain.reg`を実行します。上記の手順に従ってこの.regにドメインに追加すると、ドメインが削除されます。

## セーフリストへの追加(MacOSの場合)

### 手順

[こちら](https://cloud.box.com/s/z5qhc7rts6mzrhzfx6cpxeb5ed4ve5u6)からbashスクリプトをダウンロードします。

ターミナルを開いて、bashスクリプトをダウンロードしたフォルダに移動し、次のコマンドを実行して適切な権限を追加します。

```sh
chmod u+rx OpenWith.sh
```

ドメインを**追加**するには、ターミナルで次のコマンドを実行します。

```sh
./OpenWith.sh -a domain1 domain2 ...
```

ドメインを**削除**するには、ターミナルで次のコマンドを実行します。

```sh
./OpenWith.sh -r domain1 domain2 ...
```

ドメインを**すべてクリア**するには、ターミナルで次のコマンドを実行します。

```sh
./OpenWith.sh -c
```

すべてのドメインの**リストを取得**するには、ターミナルで次のコマンドを実行します。

```sh
./OpenWith.sh -l
```

### 注

* セーフリストにドメインを追加する際は、必ず、HTTPプロトコル(`https://`など)または末尾のパス(`yourdomain.com/page/3`など)を付けずにドメインを入力してください。
* すべてのリクエストは、主にHTTPS経由のセキュアなオリジンから送信されます。
* ワイルドカード`*`がサポートされているため、セーフリストにサブドメインとポートを追加できます。たとえば、リストに`*.yourdomain.com`を追加することで、すべてのサブドメインをセーフリストに追加できます。

## アンインストール

Box Toolsをアンインストールすると、すべてのドメインが削除されます。
