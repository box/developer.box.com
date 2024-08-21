---
rank: 7
related_endpoints:
  - get_ai_agent_default
  - post_ai_text_gen
  - post_ai_ask
related_guides:
  - box-ai/prerequisites
  - box-ai/ask-questions
  - box-ai/generate-text
category_id: box-ai
subcategory_id: null
is_index: false
id: box-ai/get-agent-default-config
type: guide
total_steps: 5
sibling_id: box-ai
parent_id: box-ai
next_page_id: box-ai/supported-models
previous_page_id: box-ai/generate-text
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/get-agent-default-config.md
fullyTranslated: true
---
# AIエージェントのデフォルト構成の取得

<Message type="notice">

Box AIのPlatform APIは、現在ベータ版のため、利用可能な機能が変更される可能性があります。Box AIのPlatform APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

`GET /2.0/ai_agent_default`エンドポイントを使用すると、AIサービスのデフォルト構成を取得できます。構成の詳細を取得したら、[`POST /2.0/ai/ask`][ask]および[`POST /2.0/ai/text_gen`][text-gen]リクエストで利用可能な`ai_agent`パラメータを使用して構成を上書きできます。

上書きの例を以下に示します。

* 組織のニーズに基づいて、デフォルトのLLMをカスタムのLLMに置き換える。
* ベースとなるプロンプトを微調整し、よりカスタマイズされたユーザーエクスペリエンスを実現する。
* `temperature`などのパラメータを変更して、結果の創造性を調整する。

## リクエストの送信

リクエストを送信するには、`GET /2.0/ai_agent_default`エンドポイントを使用します。

<Samples id="get_ai_agent_default">

</Samples>

アプリを承認するための開発者トークンを生成済みであることを確認します。詳細については、[Box AIを使用するための前提条件][prereq]を確認してください。

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

| パラメータ      | 説明                                                                     | 例                       |
| ---------- | ---------------------------------------------------------------------- | ----------------------- |
| `language` | 返されるエージェントの構成の言語コード。その言語がサポートされていない場合は、デフォルト構成が返されます。                  | `ja-JP`                 |
| **`mode`** | エージェントの構成にフィルタをかけるためのモード。値は`ask`または`text_gen`になります。                    | `ask`                   |
| `model`    | 構成を取得する対象となるモデル。選択したモデルがサポートされていることを確認するには、[モデルのリスト][models]を参照してください。 | `openai__gpt_3_5_turbo` |

[prereq]: g://box-ai/prerequisites

[ask]: e://post_ai_ask#param_ai_agent

[text-gen]: e://post_ai_text_gen#param_ai_agent

[models]: g://box-ai/supported-models
