---
rank: 1
related_endpoints: []
related_guides:
  - skills/
  - skills/handle/payload
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: skills
subcategory_id: null
is_index: false
id: skills/invocation-url
type: guide
total_steps: 2
sibling_id: skills
parent_id: skills
next_page_id: skills/kit
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/invocation-url.md
fullyTranslated: true
---
# 呼び出しURL

新しい[Box Skillsアプリケーション](guide://applications/app-types/custom-skills)の作成時に、`invocation_url`を指定するよう求められます。このURLは、Skillsアプリが監視するフォルダ内にファイルがアップロード、コピー、移動されたときに、Boxから[イベント通知ペイロード](guide://skills/handle/payload)が送信される公開ウェブアドレスです。

この通知をリッスンしているウェブサイトまたはアプリケーションは、Box上のファイルと、ファイルからインサイトを取得するために使用されている機械学習システムなどのシステムの間のブリッジとして機能します。

## 要件

* 呼び出しURLは一般公開する必要があります。`localhost`または`127.0.0.1`のアドレスにはBoxのサーバーからアクセスできないため、通知を送信できません。
* 呼び出しURLの背後にあるサーバーは、HTTP `POST`リクエストをリッスンしている必要があります。Box Skillsは、`JSON`本文を使用した`POST`リクエストを介してイベント通知を送信します。

## ホスティングのヒントとテクニック

Boxのサーバーが`invocation_url`として使用できるよう、アプリケーションを公開URLですばやく公開する方法はいくつかあります。

* **ローカルトンネル** - 開発者のマシン上にあるウェブアプリケーションを公開アドレスに公開する最も簡単な方法の1つは、ローカルトンネルの使用です。一般的なトンネリングツールには、[`ngrok`](https://ngrok.com)や[`localtunnel`](https://www.npmjs.com/package/localtunnel)があります。
* **サーバーレス関数** - Box Skillを処理できるサーバーを設定するには、**サーバーレス関数**が役立ちます。Box Skillsは、監視対象のフォルダ内のアクティビティ (の欠如) に応じて生成できる呼び出しの数が異なります。[AWS Lambda][aws_lambda]、[Google Cloud Functions][google_functions]、[Microsoft Azure Functions][azure_functions]などのサーバーレス関数は、このような散発的なイベントに適しています。サーバーレス関数は、イベントの処理中にのみ実行され、課金の対象となります。
* **従来のアプリケーションホスティング** - サーバーレステクノロジが望ましくない場合、[Heroku][heroku]、[Firebase][firebase]、[AWS][aws]、[GCP][gcp]など、従来のアプリケーションホスティングソリューションも使用できます。これらのアプリケーションはそれぞれ固有のサービスでホストされ、アプリケーション用の公開URLが呼び出しURLとして使用されます。

## アプリケーションサーバーの詳細

一般に、呼び出しURLの背後にあるアプリケーションは、以下のタスクを実行する必要があります。

1. Boxからのイベント通知をキャプチャする。
2. Boxファイル (またはそのURL) のバイナリデータを処理サービスに送信する。
3. 処理サービスからのレスポンスをリッスンする。
4. 処理サービスからのレスポンスをBoxメタデータ形式に変換する。
5. Boxに保存されているファイルに新しいメタデータを適用する。

[aws_lambda]: https://aws.amazon.com/lambda/

[google_functions]: https://cloud.google.com/functions/

[azure_functions]: https://azure.microsoft.com/en-us/services/functions/

[heroku]: https://www.heroku.com/

[firebase]: https://firebase.google.com/

[aws]: https://aws.amazon.com/

[gcp]: https://cloud.google.com/functions/
