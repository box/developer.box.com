---
rank: 3
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/generate-text
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/ask-questions
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/generate-text
previous_page_id: box-ai/prerequisites
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ask-questions.md
fullyTranslated: true
---
# Box AIに質問する

<Message type="notice">

Box AI APIはベータ機能のため、利用可能な機能は変更される可能性があります。Box AI APIは、**Enterprise Plus**をご利用のすべてのお客様が利用できます。

</Message>

Box AI APIを使用すると、指定した1ファイルまたは一連のファイルについて質問し、そのコンテンツに基づいた応答を得ることができます。たとえば、Boxでドキュメントを表示している場合に、Box AIに対して、コンテンツの要約を求めることができます。

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/ai/ask`エンドポイントを使用し、必須のパラメータを指定します。

<Samples id="post_ai_ask">

</Samples>

### 認証

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AI入門ガイド][prereq]を参照してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ            | 説明                                                                                                                                                                                                                                       | 使用可能な値                               | 例                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------- |
| **`mode`**       | リクエストのタイプ。1つのファイルと一連のファイルのどちらに関する質問かを指定できます。1ファイルの場合、Box AI APIは、最大1 MBのテキストレプリゼンテーションをサポートします。ファイルサイズが1 MBを超えた場合は、テキストレプリゼンテーションの最初の1 MBが処理されます。複数のファイルのリストを取得する場合、上限は25ファイルです。`mode`を`single_item_qa`に設定すると、`items`配列には要素を1つしか取得できません。 | `single_item_qa`, `multiple_item_qa` | `single_item_qa`                                                                                    |
| **`prompt`**     | ドキュメントまたはコンテンツに関する質問。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                       |                                      | 「これは何に関するドキュメントですか?」                                                                                |
| **`items.id`**   | 入力データとして指定するBoxファイルID。                                                                                                                                                                                                                   |                                      | `112233445566`                                                                                      |
| **`items.type`** | 指定した入力データのタイプ。現在は、1つのファイルまたは複数のファイルを指定できます。                                                                                                                                                                                              | `file`                               | `file`                                                                                              |
| `items.content`  | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                         |                                      | 「アプリケーションプログラミングインターフェース (API) とは、2つ以上のコンピュータプログラムやコンポーネントが互いに通信するための手段です。ソフトウェアインターフェースの一種で......」 |

[prereq]: g://box-ai/prerequisites
