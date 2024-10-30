---
rank: 3
related_endpoints:
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/generate-text
  - box-ai/ai-agents/get-agent-default-config
  - box-ai/ai-agents/overrides-tutorial
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/ask-questions
type: guide
total_steps: 5
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

Box AI API is available to all Enterprise Plus customers.

</Message>

Box AI APIを使用すると、指定した1ファイルまたは一連のファイルについて質問し、そのコンテンツに基づいた応答を得ることができます。たとえば、Boxでドキュメントを表示している場合に、Box AIに対して、コンテンツの要約を求めることができます。

## リクエストの送信

質問を含むリクエストを送信するには、`POST /2.0/ai/ask`エンドポイントを使用し、必須のパラメータを指定します。

<Samples id="post_ai_ask">

</Samples>

### 認証

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                                                                                                   | 使用可能な値                                                          | 例                                                                                                                                                                           |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`mode`**                    | リクエストのタイプ。1つのファイルと一連のファイルのどちらに関する質問かを指定できます。1ファイルの場合、Box AI APIは、最大1 MBのテキストレプリゼンテーションをサポートします。ファイルサイズが1 MBを超えた場合は、テキストレプリゼンテーションの最初の1 MBが処理されます。複数のファイルのリストを取得する場合、上限は25ファイルです。`mode`を`single_item_qa`に設定すると、`items`配列には要素を1つしか取得できません。                                                                                                                                                             | `single_item_qa`, `multiple_item_qa`                            | `single_item_qa`                                                                                                                                                            |
| **`prompt`**                  | ドキュメントまたはコンテンツに関する質問。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                                                                                                   |                                                                 | `What is this document about?`                                                                                                                                              |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                                                                                         | `Make my email about public APIs sound more professional`       |                                                                                                                                                                             |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                                                                                                     | `Here is a draft of your professional email about public APIs.` |                                                                                                                                                                             |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                                                                                              | `2012-12-12T10:53:43-08:00`                                     |                                                                                                                                                                             |
| `include_citations`           | 回答で引用情報を返すかどうかを指定します。                                                                                                                                                                                                                                                                                                                                                                                | `true`, `false`                                                 | `true`                                                                                                                                                                      |
| **`items.id`**                | 入力データとして指定するBoxファイルID。                                                                                                                                                                                                                                                                                                                                                                               |                                                                 | `112233445566`                                                                                                                                                              |
| **`items.type`**              | 指定した入力データのタイプ。現在は、1つのファイルまたは複数のファイルを指定できます。                                                                                                                                                                                                                                                                                                                                                          | `file`                                                          | `file`                                                                                                                                                                      |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                                                                                                     |                                                                 | `An application programming interface (API) is a way for two or more computer programs or components to communicate with each other. It is a type of software interface...` |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、短いテキストや長いテキストを表す[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。具体的なユースケースについては、[AIモデルの上書きに関するチュートリアル][overrides]を参照してください。 |                                                                 |                                                                                                                                                                             |

[prereq]: g://box-ai/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_ask#param_basic_text_model

[prompt-param]: e://ai_agent_ask#param_basic_text_prompt_template

[overrides]: g://box-ai/ai-agents/overrides-tutorial
