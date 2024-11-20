---
rank: 3
related_endpoints:
  - post_ai_text_gen
related_guides:
  - box-ai/ai-tutorials/prerequisites
  - box-ai/ai-tutorials/default-agent-overrides
  - box-ai/ai-tutorials/ask-questions
  - box-ai/ai-tutorials/extract-metadata
  - box-ai/ai-tutorials/extract-metadata-structured
alias_paths:
  - guides/box-ai/generate-text
category_id: box-ai
subcategory_id: box-ai/ai-tutorials
is_index: false
id: box-ai/ai-tutorials/generate-text
type: guide
total_steps: 6
sibling_id: box-ai/ai-tutorials
parent_id: box-ai/ai-tutorials
next_page_id: box-ai/ai-tutorials/default-agent-overrides
previous_page_id: box-ai/ai-tutorials/ask-questions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-ai/ai-tutorials/generate-text.md
fullyTranslated: true
---
# Box AIを使用してテキストを生成する

<Message type="notice">

Box AI APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

</Message>

Box AIを使用すると、提供されたコンテンツに基づいてテキストを生成できます。たとえば、Box Notesで参照または作成したコンテンツに基づいてテンプレートを生成するようBox AIに求めることができます。その後、生成されたテキストを直接ドキュメントに埋め込むことができます。

## 開始する前に

Make sure you followed the steps listed in [getting started with Box AI][prereq] to create a custom app and authenticate.

## リクエストの送信

リクエストを送信するには、`POST /2.0/ai/text_gen`エンドポイントを使用します。

<Samples id="post_ai_text_gen">

</Samples>

### パラメータ

コールを実行するには、以下のパラメータを渡す必要があります。必須のパラメータは**太字**で示されています。

**注**: `items`配列に含めることができる要素は1つだけです。

| パラメータ                         | 説明                                                                                                                                                                                                                                                                                                                                                                                        | 例                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **`prompt`**                  | Box AIに対するテキストの生成またはリファインのリクエスト。プロンプトの長さは10000文字以内にする必要があります。                                                                                                                                                                                                                                                                                                                             | 週1回の営業会議の議題を作成してください。                                           |
| **`items.id`**                | ドキュメントのBoxファイルID。                                                                                                                                                                                                                                                                                                                                                                         | `1233039227512`                                                 |
| **`items.type`**              | 指定した入力データのタイプ。                                                                                                                                                                                                                                                                                                                                                                            | `file`                                                          |
| `items.content`               | 項目のコンテンツ (多くの場合はテキストレプリゼンテーション)。                                                                                                                                                                                                                                                                                                                                                          | `This article is about Box AI`.                                 |
| `dialogue_history.prompt`     | 以前にクライアントによって提供され、大規模言語モデル (LLM) が回答したプロンプト。                                                                                                                                                                                                                                                                                                                                              | `Make my email about public APIs sound more professional`       |
| `dialogue_history.answer`     | 以前にLLMから提供された回答。                                                                                                                                                                                                                                                                                                                                                                          | `Here is a draft of your professional email about public APIs.` |
| `dialogue_history.created_at` | プロンプトに対する前回の回答が作成された時点のISO日付形式のタイムスタンプ。                                                                                                                                                                                                                                                                                                                                                   | `2012-12-12T10:53:43-08:00`                                     |
| `ai_agent`                    | デフォルトのエージェント構成を上書きするために使用されるAIエージェント。このパラメータを使用すると、たとえば、[`model`][model-param]パラメータを使用してデフォルトのLLMをカスタムのLLMに置き換えたり、よりカスタマイズされたユーザーエクスペリエンスを実現できるようにベースとなる[`prompt`][prompt-param]を微調整したり、`temperature`などのLLMパラメータを変更して結果の創造性を調整したりすることができます。`ai_agent`パラメータを使用する前に、[`GET 2.0/ai_agent_default`][agent]リクエストを使用してデフォルト構成を取得できます。具体的なユースケースについては、[AIモデルの上書きに関するチュートリアル][overrides]を参照してください。 |                                                                 |

## ユースケース

指定されたファイルコンテンツとプロンプトに基づいてテキストを生成します。

```sh
curl -i -L POST "https://api.box.com/2.0/ai/text_gen" \
     -H "content-type: application/json" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
    "items": [
        {
            "id": "12345678",
            "type": "file"
        }
    ],
    "prompt": "Create a short blog post that provides information on Box AI for Documents and focuses on best practices for asking questions. You can add emoticons, but not too many."
}'

```

結果は次のようになります。

```sh
{
    "answer": "📝 **Box AI for Documents: Best Practices for Asking Questions** 🤔\n\n---\n\nWelcome to our blog post on Box AI for Documents! 🎉 Today, we're going to dive into some best practices when it comes to asking questions within this innovative platform.\n\n1. **Be Clear and Concise**: When formulating a question in Box Notes, make sure your query is clear and to the point. This helps Box AI understand exactly what you're looking for.\n\n2. **Provide Context**: Giving context around your question can significantly improve the accuracy of the response generated by Box AI. Include relevant details or background information.\n\n3. **Use Keywords**: Utilize keywords related to your query within the question itself. This can help Box AI better identify the main topic of your inquiry.\n\n4. **Avoid Ambiguity**: Try to avoid vague or ambiguous questions that could lead to misunderstandings. The more precise you are, the better Box AI can assist you.\n\n5. **Review Suggestions Carefully**: After receiving suggestions from Box AI, take the time to review them carefully before incorporating them into your document. Ensure they align with your intended message.\n\nBy following these best practices, you can maximize the effectiveness of Box AI for Documents and streamline your workflow like never before! 💼✨\n\nStay tuned for more tips and tricks on leveraging technology for enhanced productivity! 👩‍💻🚀",
    "created_at": "2024-11-04T02:46:23.459-08:00",
    "completion_reason": "done"
}

```

[prereq]: g://box-ai/ai-tutorials/prerequisites

[agent]: e://get_ai_agent_default

[model-param]: r://ai_agent_text_gen#param_basic_gen_model

[prompt-param]: r://ai_agent_text_gen#param_basic_gen_prompt_template

[overrides]: g://box-ai/ai-agents/ai-agent-overrides
