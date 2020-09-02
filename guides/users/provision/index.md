---
rank: 1
alias_paths:
  - /docs/provision-user-accounts
category_id: users
subcategory_id: users/provision
is_index: true
id: users/provision
type: guide
total_steps: 3
sibling_id: users
parent_id: users
next_page_id: users/provision/architecture
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/provision/index.md
---
# ユーザーのプロビジョニング

新しいBoxユーザーアカウントを設定する際、一般にはこの新しいアカウントに標準のフォルダ、コラボレーション、グループ関連付けを作成する必要があります。

通常、アカウントの標準設定が必要なタイミングを判断するには、ユーザーアカウントについて以下の事項を検討します。

* ユーザーが標準の会社のファイルまたはフォルダに即座にアクセスする必要があるか。
* コラボレーションを個別に関連付けるか、グループを介して関連付けるか。グループの関連付けを介する場合、ユーザーを追加する必要がある標準グループがあるか。
* ユーザーに完了すべきタスクを割り当てる必要があるか。
* ファイルに関する説明的なコメントが役に立つか。

<Message danger>

# 新しいユーザーのパスワードリセットとメール確認

ユーザーを作成した後、すぐにAPIを介してそのユーザーによるアクションを実行しようとすると、エラーが発生する場合があります。たとえば、`user_email_confirmation_required`や`password_reset_required`といったエラーがよく発生します。このようなエラーが発生するとAPI内の一部のアクションがブロックされる場合がありますが、そのユーザーをフォルダのコラボレータとして追加したり、グループに追加したりすることはできます。

</Message>

## サンプル概要

Box App Userアカウントをプロビジョニングする際の注意事項は非常に多岐にわたるため、このシナリオでは、新しい[Box管理対象ユーザー](guide://authentication/user-types/managed-users)のプロビジョニングを中心に検討します。

初めに、ユーザーアカウントのプロビジョニングで繰り返せる部分の大半を解決し、すべてのユーザーが最初にログインした時点で与えられる一般的なフォルダおよびファイル構造を作成し、グループを使用してユーザーの共有ファイルとフォルダへのアクセスを制御します。
