---
rank: 2
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: applications
subcategory_id: applications/custom-skills
is_index: false
id: applications/custom-skills/approval
type: guide
total_steps: 2
sibling_id: applications/custom-skills
parent_id: applications/custom-skills
next_page_id: applications/custom-skills
previous_page_id: applications/custom-skills/setup
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/applications/custom-skills/approval.md
---
# 承認

カスタムスキルを使用するには、会社のBox管理者がフォルダに対して有効にしておく必要があります。

## 開発者の場合

開発者の場合は、[開発者コンソール][devconsole]でアプリケーションに移動し、アプリのクライアントIDをコピーして管理者に提出します。

<Message>

# Box管理者の確認方法

自分の会社の管理者がわからない場合は、Boxの[アカウント設定][settings]ページに移動し、一番下までスクロールしてください。管理者の連絡先が設定されている場合は、\[管理者の連絡先]の下に連絡先情報が表示されます。

</Message>

## 管理者の場合

カスタムスキルアプリケーションを有効にするには、[Box管理コンソールの\[Skills\]セクション][adminconsole]に移動し、\[スキルの追加]リンクをクリックして新しいスキルを追加します。

カスタムスキルアプリケーションのクライアントID (APIキー)を入力します。これは開発者から提出されたクライアントIDです。

\[次へ]をクリックし、Box Skillアプリケーションで操作するフォルダを選択します。

<ImageFrame border>

![追加するスキルの選択](./images/skills-select.png)

</ImageFrame>

ここには2つのオプションがあります。

* \[**会社のすべてのコンテンツ**]を選択すると、全ユーザーそれぞれのルートフォルダでスキルが承認されます。その結果、Box Skillアプリケーションによって処理されているフォルダにすべてのファイルがアップロードされます。
* \[**フォルダのリストを選択**]を選択すると、スキルアプリケーションの処理対象となる特定のフォルダまたは一連のフォルダに対してアプリケーションが有効になります。

<ImageFrame border>

![追加するスキルの選択](./images/skills-confirm.png)

</ImageFrame>

\[Skillを有効化]をクリックし、利用規約と契約に同意します。これで、カスタムスキルが有効になります。選択したフォルダに新しいコンテンツが追加されると、Box開発者コンソールで指定された呼び出しURLへのイベントの送信がトリガーされます。

<Message>

# 会社あたりSkillアプリケーションは10個まで

どのような場合でも、1つの会社につき有効にできるスキルの数は10個という制限があります。会社でさらに多くのスキルを有効にする場合は、Boxの営業担当者にお問い合わせください。

</Message>

[adminconsole]: https://app.box.com/master/skills

[devconsole]: https://app.box.com/developers/console
