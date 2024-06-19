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

| パラメータ            | 説明                                                                                                                                                                                                                                                                                                                                                                                             | 使用可能な値                               | 例                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------- |
| **`mode`**       | The type of request. It can be a question about a single file or a set of files. For a single file, Box AI API supports up to 1MB of text representation. If the file size exceeds 1MB, the first 1MB of text representation will be processed. If you want to list multiple files, the limit is 25 files. If you set `mode` to `single_item_qa`, the `items` array can list only one element. | `single_item_qa`, `multiple_item_qa` | `single_item_qa`                                                                                    |
| **`prompt`**     | The question about your document or content. The prompt's length cannot exceed 10000 characters.                                                                                                                                                                                                                                                                                               |                                      | 「これは何に関するドキュメントですか?」                                                                                |
| **`items.id`**   | 入力データとして指定するBoxファイルID。                                                                                                                                                                                                                                                                                                                                                                         |                                      | `112233445566`                                                                                      |
| **`items.type`** | 指定した入力データのタイプ。現在は、1つのファイルまたは複数のファイルを指定できます。                                                                                                                                                                                                                                                                                                                                                    | `file`                               | `file`                                                                                              |
| `items.content`  | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                                                                                               |                                      | 「アプリケーションプログラミングインターフェース (API) とは、2つ以上のコンピュータプログラムやコンポーネントが互いに通信するための手段です。ソフトウェアインターフェースの一種で......」 |

[prereq]: g://box-ai/prerequisites
