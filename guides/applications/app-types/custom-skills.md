---
rank: 40
alias_paths:
  - /docs/box-skills
  - /page/box-skills-kit
  - /docs/getting-started-with-box-skills
  - /docs/box-skills-1
  - /skills
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
category_id: applications
subcategory_id: applications/app-types
is_index: false
id: applications/app-types/custom-skills
type: guide
total_steps: 4
sibling_id: applications/app-types
parent_id: applications/app-types
next_page_id: ''
previous_page_id: applications/app-types/limited-access-apps
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/app-types/custom-skills.md
fullyTranslated: true
---
# カスタムスキル

カスタムスキル (Box Skill) とは、Boxにアップロードされたファイルに対してカスタマイズした処理を実行する一種のアプリケーションです。スキルは、サードパーティの機械学習サービスを使用して、Boxにアップロードされたファイルから情報を自動的に抽出し、結果のデータをメタデータとしてファイルに適用しやすくすることを目的としています。

<ImageFrame shadow>

![スキルの例](./images/skills-example.png)

</ImageFrame>

カスタムスキルは、Box管理者がフォルダに対して有効にする必要があります。そうすると、ファイルがフォルダにアップロードされるたびに、イベントがスキルのアプリケーションサーバーに送信されます。その後、このアプリケーションはファイルをダウンロードするか、調査するか、機械学習サービスに渡し、効果的なメタデータをファイルに書き込むことができます。

<CTA to="g://skills">

カスタムスキルの作成を開始する

</CTA>

## 認証方法

カスタムスキルの操作は、各スキルイベントに備わっている事前承認済みのAPI資格情報によって簡素化されます。ただし、このような理由により、カスタムスキルでのAPIアクセスには制限があります。このようなアプリケーションを操作するために認証タイプを選択する必要はありません。

## 使用するタイミング

アプリケーションが以下のような場合に、カスタムスキルを使用すると最も効果的です。

* Boxにアップロードされたファイルにメタデータの追加のみを行う
* 新しいファイルをアップロードしない、またはその他のAPIコールを実行しない
* 認証を処理する必要なく、機械学習サービスにファイルを渡せるようにする

## ユースケース

以下は、カスタムスキルのユースケースの例です。

* 画像からナンバープレートの詳細を自動的に抽出し、その詳細をキーワードとしてファイルに書き込むプロセス。

* 動画内で顔を自動的に検出し、検出した顔が表示された時点のタイムスタンプをタイムラインとしてファイルに書き込むプロセス。

## 承認

カスタムスキルを使用するには、スキルがトリガーされるフォルダに割り当てておく必要があります。

<CTA to="g://authorization/custom-skill-approval">

カスタムスキルの承認方法を確認する

</CTA>
