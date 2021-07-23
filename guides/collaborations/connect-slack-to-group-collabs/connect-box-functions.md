---
type: quick-start
hide_in_page_nav: true
category_id: collaborations
subcategory_id: collaborations/connect-slack-to-group-collabs
is_index: false
id: collaborations/connect-slack-to-group-collabs/connect-box-functions
rank: 5
total_steps: 6
sibling_id: collaborations/connect-slack-to-group-collabs
parent_id: collaborations/connect-slack-to-group-collabs
next_page_id: collaborations/connect-slack-to-group-collabs/test-bot
previous_page_id: collaborations/connect-slack-to-group-collabs/handle-slack-events
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/connect-slack-to-group-collabs/5-connect-box-functions.md
fullyTranslated: true
---
# Boxへのボットの接続

ここでは、Slackから送信されるイベントを処理し、Boxのユーザーやグループとの接続に必要なすべての情報を取得します。その機能をBoxの関数に関連付ける必要があります。

この手順では、直前の手順で説明した関数をいくつか拡張し、新しいBox機能を組み込みます。

* Boxクライアントをインスタンス化する
* BoxグループにBoxユーザーを追加する
* BoxグループからBoxユーザーを削除する
* グループ名からBoxグループIDを取得する
* グループと共有するコンテンツを追加する

## Boxクライアントのインスタンス化

Box APIを呼び出すには、最初にBoxクライアントを設定する必要があります。

<Choice option="programming.platform" value="node" color="none">

`process.js`で、先頭にある`// INSTANTIATE BOX CLIENT`コメントを次の内容に置き換えます。

```javascript
const boxConfig = require("./boxConfig.json");
const sdk = box.getPreconfiguredInstance(boxConfig);
const client = sdk.getAppAuthClient("enterprise");
```

`boxConfig`の代入行では、[手順2][step2]の最後でBoxアプリからダウンロードした`boxConfig.json`ファイルを使用します。上記のサンプルでは、ファイルを`process.js`と同じフォルダに保存していることを前提としています。そうではない場合は、`boxConfig.json`ファイルの場所を指すパスとファイル名に変更してください。

最後の`client`の代入行では、API呼び出しに使用できるBoxクライアントオブジェクトを作成します。この時点では、その対象範囲は特定のユーザーではなく、アプリケーションの[サービスアカウント][service-account]に設定されています。

</Choice>

<Choice option="programming.platform" value="java" color="none">

`Application.java`で、`processEvent`メソッド内の`// INSTANTIATE BOX CLIENT`コメントを次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```java
this.fileReader = new FileReader("boxConfig.json");
this.boxConfig = BoxConfig.readFrom(fileReader);
this.boxAPI = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(boxConfig);
```

<!-- markdownlint-enable line-length -->

`boxConfig`の代入行では、[手順2][step2]の最後でBoxアプリからダウンロードした`boxConfig.json`ファイルを使用します。上記のサンプルでは、ファイルをJavaプロジェクトのルートに保存していることを前提としています。そうではない場合は、`fileReader`の代入行のパスを、`boxConfig.json`ファイルの場所を指すパスとファイル名に変更してください。

最後の`boxAPI`の代入行では、API呼び出しに使用できるBoxクライアントオブジェクトを作成します。この時点では、その対象範囲は特定のユーザーではなく、アプリケーションの[サービスアカウント][service-account]に設定されています。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## グループへのBoxユーザーの追加

グループにBoxユーザーを追加する関数を追加します。ボットがチャンネルに追加され、チャンネルのすべてのユーザーを含むBoxグループの作成が必要になった場合、またはその操作の後に1人のユーザーがチャンネルに参加した場合に、この関数によってそのタスクが実行されます。

<Choice option="programming.platform" value="node" color="none">

`addGroupUser`関数を次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```javascript
function addGroupUser(groupId, email) {
  client.enterprise.getUsers({ filter_term: email }).then((users) => {
    if (users.entries.length > 0) {
      const userId = users.entries[0].id;
      const groupRole = client.groups.userRoles.MEMBER;

      client.groups
        .addUser(groupId, userId, { role: groupRole })
        .then((membership) => {
          if (membership.id) {
            console.log(`Member added with membership ID: ${membership.id}`);
          } else {
            console.log(`Member not added`);
          }
        })
        .catch(function (err) {
          console.log(err.response.body);
        });
    } else {
      console.log("No Box user found to add to group");
    }
  });
}
```

<!-- markdownlint-enable line-length -->

</Choice>

<Choice option="programming.platform" value="java" color="none">

`addGroupUser`メソッドを次の内容に置き換えます。

```java
public void addGroupUser(String groupId, String userEmail) {
  Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(this.boxAPI, userEmail);

  for (BoxUser.Info user : users) {
    if (user.getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
      try {
        BoxGroup group = new BoxGroup(boxAPI, groupId);
        BoxUser boxUser = new BoxUser(this.boxAPI, user.getID());
        BoxGroupMembership.Info groupMembershipInfo = group.addMembership(boxUser);
      } catch (Exception ex) {
        System.err.println("User already present");
      }
    }
  }
}
```

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

メールアドレスを使用してSlackユーザーをBoxユーザーと照合しているため、最初に、Slackのプロフィールのメールアドレスを使用して一致するBoxユーザーを検索します。見つかると、そのユーザーをチャンネルのグループに追加するための呼び出しが行われます。このグループは、ボットが最初に追加されたときに作成されています。

<Message type="tip">

Boxの[ユーザーを取得](endpoint://get-users-id)エンドポイントでは、ユーザーIDによるユーザー検索のみ許可されています。メールアドレスでユーザーを検索するには、[会社ユーザーのリストを取得](endpoint://get-users)エンドポイントを使用し、`filter_term`オプションを検索対象のメールアドレスに設定します。

</Message>

## グループからのBoxユーザーの削除

Slackチャンネルから退出したユーザーや削除されたユーザーは、共有グループコンテンツにアクセスできなくなるようにBoxグループから削除することもできます。

<Choice option="programming.platform" value="node" color="none">

`removeGroupUser`関数を次の内容に置き換えます。

```javascript
function removeGroupUser(groupId, email) {
  client.groups.getMemberships(groupId).then(memberships => {
    for (let i = 0; i < memberships.entries.length; i++) {
      if (memberships.entries[i].user.login === email) {
        client.groups
        .removeMembership(memberships.entries[i].id)
        .then(() => {
          console.log('Group user removed')
        });
        break;
      }
    }
  });
}
```

</Choice>

<Choice option="programming.platform" value="java" color="none">

`removeGroupUser`メソッドを次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```java
public void removeGroupUser(String groupId, String userEmail) {
  BoxGroup boxGroup = new BoxGroup(this.boxAPI, groupId);
  Iterable<BoxGroupMembership.Info> memberships = boxGroup.getAllMemberships();
  for (BoxGroupMembership.Info membershipInfo : memberships) {
    if (membershipInfo.getUser().getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
      BoxGroupMembership membership = new BoxGroupMembership(this.boxAPI, membershipInfo.getID());
      membership.delete();
    }
  }
}
```

<!-- markdownlint-enable line-length -->

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

このコードでは、SlackのチャンネルIDとなるグループIDを取得し、グループの全メンバーを取得します。メールアドレスに基づいて、Slackチャンネルを退出したユーザーに一致するメンバーが見つかると、そのユーザーはそのメンバーシップIDを使用してグループから削除されます。

<Message type="tip">

# データストアによるパフォーマンスの向上

グループメンバーシップを検索してメンバーシップIDを取得すると、ローカルのデータストア (データベースなど) にメンバーシップIDを保存する必要はなくなりますが、ユーザーレコードとともにBoxメンバーシップIDを保存するデータストアがあれば、このコードがより効率的なものになります。

ローカルのデータストアを使用すると、メンバーシップIDは、そのデータストアから取得できます。Box APIを繰り返し呼び出してメンバーシップIDを検索する必要はありません。

</Message>

## グループ名に対応したBoxグループIDの取得

次に必要なBox関数には、主に2つの目的があります。

* 既存グループのBoxグループIDを返します。
* グループが存在しない場合、Boxグループを作成してそのIDを返します。

<Choice option="programming.platform" value="node" color="none">

`getGroupId`関数を次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```javascript
function getGroupId(groupName, callback) {
  client.groups.getAll().then((groups) => {
    const group = groups.entries.filter((g) => g.name === groupName)[0];

    if (!group) {
      client.groups
        .create(groupName, {
          description: "Slack channel collaboration group",
          invitability_level: "all_managed_users",
        })
        .then((group) => {
          callback(group.id);
        });
    } else {
      callback(group.id);
    }
  });
}
```

<!-- markdownlint-enable line-length -->

</Choice>

<Choice option="programming.platform" value="java" color="none">

`getGroupId`メソッドを次の内容に置き換えます。

```java
public String getGroupId(String groupName) {
  String groupId = new String();

  Iterable<BoxGroup.Info> groups = BoxGroup.getAllGroups(this.boxAPI);
  for (BoxGroup.Info groupInfo : groups) {
    if (groupInfo.getName().toUpperCase().equals(groupName)) {
      groupId = groupInfo.getID();
    }
  }

  if (groupId.isEmpty()) {
    BoxGroup.Info groupInfo = BoxGroup.createGroup(boxAPI, groupName);
    groupId = groupInfo.getID();
  }

  return groupId;
}
```

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

このコードでは、社内のすべてのグループを取得し、SlackチャンネルIDとグループ名の照合を試みます。いずれかのグループが一致すると、そのグループIDが返されます。

一致するものがない場合は、新しいBoxグループが作成され、そのグループのIDが返されます。グループの名前はSlackチャンネルIDに基づいて付けられます。これはスラッシュコマンドとユーザーイベントの両方で返される定数であり、追加の関数がなくても簡単に検索できるようにするためです。

## グループへの共有コンテンツの追加

最終的に、このアプリケーション全体の主な目的は、ユーザーが自分のBoxアカウントにあるファイルやフォルダをグループ内の他のユーザー全員と共有できるようにすることです。

ここまでのすべての機能を基に、次の関数でそのタスクを実行します。

<Choice option="programming.platform" value="node" color="none">

`processContent`関数を次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```javascript
function processContent(user, channel, itemType, itemId) {
  getGroupId(channel, function (groupId) {
    const email = user.profile.email;

    client.enterprise.getUsers({ filter_term: email }).then((users) => {
      if (users.entries.length > 0) {
        client.asUser(users.entries[0].id);
        const collabRole = client.collaborationRoles.VIEWER;
        const collabOptions = { type: itemType };

        client.collaborations
          .createWithGroupID(groupId, itemId, collabRole, collabOptions)
          .then((collaboration) => {
            console.log(
              `Content added with collaboration ID ${collaboration.id}`
            );
          })
          .catch(function (err) {
            console.log(
              util.inspect(err.response.body, {
                showHidden: false,
                depth: null,
              })
            );
          });
      }
    });
  });
}
```

<!-- markdownlint-enable line-length -->

</Choice>

<Choice option="programming.platform" value="java" color="none">

`processContent`メソッドを次の内容に置き換えます。

<!-- markdownlint-disable line-length -->

```java
public void processContent(JSONObject userResponse, String channel, String fType, String fId) {
  String groupId = getGroupId(channel);

  JSONObject userObj = (JSONObject) userResponse.get("user");
  JSONObject userProfile = (JSONObject) userObj.get("profile");
  String userEmail = (String) userProfile.get("email");

  Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(this.boxAPI, userEmail);

  for (BoxUser.Info user : users) {
    if (user.getLogin().toUpperCase().equals(userEmail.toUpperCase())) {
      String uid = user.getID();
      boxAPI.asUser(uid);

      BoxCollaborator collabGroup = new BoxGroup(boxAPI, groupId);

      try {
        if (fType.equals("file")) {
          BoxFile file = new BoxFile(boxAPI, fId);
          file.collaborate(collabGroup, BoxCollaboration.Role.VIEWER, false, false);
        } else if (fType.equals("folder")) {
          BoxFolder folder = new BoxFolder(boxAPI, fId);
          folder.collaborate(collabGroup, BoxCollaboration.Role.VIEWER);
        }
      } catch (Exception ex) {
        System.err.println("Collaboration failed");
      }

      boxAPI.asSelf();
    }
  }
}
```

<!-- markdownlint-enable line-length -->

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

このコードでは、最初に、コンテンツの共有先となるSlackチャンネル用にBoxグループIDを取得します。

スラッシュコマンドを送信したユーザーのBoxアカウントからファイルやフォルダを共有するため、次に、そのユーザーのBoxユーザープロフィールをメールアドレスに基づいて取得します。

最後に、グループIDを使用して、コンテンツでグループとコラボレーションするための呼び出しを行います。

## まとめ

* Boxクライアントをインスタンス化しました。
* Boxグループユーザーを追加および削除するための関数を作成しました。
* コンテンツをグループと共有するための関数を作成しました。

<Observe option="programming.platform" value="node,java">

<Next>

Box関数を設定しました

</Next>

</Observe>

[step2]: g://collaborations/connect-slack-to-group-collabs/configure-box

[service-account]: g://authentication/user-types/service-account/
