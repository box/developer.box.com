---
rank: 2
related_endpoints:
  - put_users_id_folders_id
related_guides:
  - users/deprovision/user
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: users
subcategory_id: users/deprovision
is_index: false
id: users/deprovision/transfer-folders
type: guide
total_steps: 2
sibling_id: users/deprovision
parent_id: users/deprovision
next_page_id: ''
previous_page_id: users/deprovision/user
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/users/deprovision/transfer-folders.md
---
# ファイルとフォルダの転送

ユーザーアカウントのプロビジョニング解除における一般的な要件の1つが、ユーザーアカウント内に保存されているすべてのファイルとフォルダを別のユーザーアカウント、またはサービスアカウントなどの長期保存用の場所に転送することです。

Box内でこれを実行するのに使用される一般的な方法は以下の2つです。

* すべてのコンテンツをあるユーザーから別のユーザーに直接移動する、[所有フォルダを移行](e://put_users_id_folders_id)APIを使用する。
* コラボレーション転送の方法を使用して、一度に1つのファイルまたはフォルダの所有権を、あるユーザーから別のユーザーに変更する。

<Message notice>

転送中は、ユーザーが所有するファイルにアクセスできなくなります。また、移動中もユーザーが所有する共有コンテンツにアクセスできない可能性があります。

コンテンツの量によっては、この操作にかなりの時間がかかる場合があります。

</Message>

## 所有フォルダを移行APIの使用

[所有フォルダを移行エンドポイント](e://put_users_id_folders_id)は、あるユーザーが所有するコンテンツ全体を別のユーザーに移動することを目的に設計されています。

<Message type="notice">

所有フォルダを移行APIは、同期プロセスとして実行されるため、ソースユーザーのフォルダ全体に多数の項目がある場合、応答が遅くなる可能性があります。

</Message>

転送エンドポイントを呼び出すには、転送元のユーザーIDと転送先のユーザーIDを指定します。

<Samples id="put_users_id_folders_id">

</Samples>

## コラボレーション転送の使用

コラボレーション転送は、[コラボレーションエンドポイント](e://post_collaborations)を使用して、単一のファイルまたはフォルダの所有権をあるユーザーから別のユーザーに即座に変更するプロセスです。

<Message type="notice">

この方法では、単一のファイルまたはフォルダの所有権を即時に転送します。ただし、この方法でルート(すべてのファイルおよびフォルダ)を別のユーザーに転送することは**できません**。

</Message>

`transfer_from_user`から`transfer_to_user`への転送の一般的なプロセスは以下の手順に従います。

### 転送先ユーザーを共同所有者として追加

最初の手順は、転送するファイルまたはフォルダへの`co-owner`アクセス権限を持つコラボレータとして、`transfer_to_user`アカウントを追加することです。

`transfer_from_user`アカウントとして呼び出しを行い、[コラボレーションを追加](e://post_collaborations)エンドポイントを使用して`transfer_to_user`を共同所有者として追加します。

<Samples id="post_collaborations">

</Samples>

### 転送先ユーザーとしてコラボレーションIDを取得

次のステップでは、コラボレーション情報を取得するリクエストを`transfer_to_user`アカウントとして実行します。返されるコラボレーションオブジェクトには、最後のステップで使用するコラボレーションIDが含まれます。

`transfer_to_user`アカウントとして呼び出しを実行し、[コラボレーションを取得エンドポイント](e://get_collaborations_id)を使用して、転送するファイルまたはフォルダのIDのコラボレーションを取得します。コラボレーションIDをキャプチャします。

<Sample id="get_collaborations_id">

</Sample>

### 転送元ユーザーを所有者として削除

最後の手順は、ファイルまたはフォルダの所有者として`transfer_from_user`アカウントを削除することです。これは、[コラボレーションを削除エンドポイント](e://delete_collaborations_id)を使用して行います。

`transfer_to_user`アカウントとして呼び出しを実行し、ファイルまたはフォルダのコラボレータとして`transfer_from_user`を削除します。

<Sample id="delete_collaborations_id">

</Sample>

これにより、ファイルまたはフォルダの所有者は`transfer_to_user`アカウントになり、`transfer_from_user`アカウントはアクセスできなくなります。
