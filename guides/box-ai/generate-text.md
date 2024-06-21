---
rank: 6
related_endpoints:
  - post_ai_text_gen
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/generate-text
type: guide
total_steps: 3
sibling_id: box-ai
parent_id: box-ai
next_page_id: ''
previous_page_id: box-ai/ask-questions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/generate-text.md
fullyTranslated: true
---
# Box AIを使用してテキストを生成する

<Message type="notice">

Box AI APIはベータ機能のため、利用可能な機能は変更される可能性があります。Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AIを使用すると、提供されたコンテンツに基づいてテキストを生成できます。たとえば、Box Notesで参照または作成したコンテンツに基づいてテンプレートを生成するようBox AIに求めることができます。その後、生成されたテキストを直接ドキュメントに埋め込むことができます。

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/text_gen`エンドポイントを使用します。

<Samples id="post_ai_text_gen">

</Samples>

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIの前提条件][prereq]を確認してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

**注**: `items`配列に含めることができる要素は1つだけです。

| パラメータ                         | 説明                                                            | 例                                         |
| ----------------------------- | ------------------------------------------------------------- | ----------------------------------------- |
| **`prompt`**                  | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。 | 週1回の営業会議の議題を作成してください。                     |
| **`items.id`**                | ドキュメントのBoxファイルID。                                             | `1233039227512`                           |
| **`items.type`**              | 指定した入力データのタイプ。                                                | `file`                                    |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                              | これはBox AIに関する記事です。                        |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                  | 「パブリックAPIに関する私のメールをよりプロフェッショナルなものにしてください」 |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                              | 「パブリックAPIに関するプロフェッショナルなメールの下書きを以下に示します。」  |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                       | `2012-12-12T10:53:43-08:00`               |

[prereq]: g://box-ai/prerequisites
